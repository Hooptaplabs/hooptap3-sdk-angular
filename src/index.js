
require('restangular');
require('angular-storage');
var _			= require('lodash'),
	repoName	= 'hooptap-sdk-angular',
	moduleName	= 'hooptap-sdk',
	serviceName	= 'hooptapSdk';

module.exports = function (angular) {

	if(!angular) {
		console.error(repoName + ': No angular detected.');
		return;
	}

	var options = {
		'baseUrl'	: 'https://7eb5gyaxdc.execute-api.eu-west-1.amazonaws.com/dev/',
		headers		: {
			//'Authorization':	'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXIiOiI1NmMzMzkwZDUyNDQ4MzY5MTAzY2JjZTMiLCJhcGlLZXlzIjpbIjQ2NTc2Njg2ZjZmNzA3NDYxNzAyZTYyNyJdLCJleHBpcmF0aW9uIjoxNDU2NTEwODYxMTI5LCJpYXQiOjE0NTY0MjQ0NjEsImV4cCI6MTQ1NjUxMDg2MX0.PwKfLFrjyFsWquimaMpdX3dxeoQexnZVj9PwQNZmp1Q',
			//'x-api-key': 		'46576686f6f707461702e627'
		}
	};

	angular.module(moduleName,
		[
			'angular-storage',
			'restangular'
		])

		//.run(require('./boot'))
		//.config(require('./config'))

		.service('ourStore', ['store', function ourStoreService (store) {

			var base = repoName + ':';

			return {
				get	: function	(key) {			return store.get(base + key); },
				set : function (key, value) {	return store.set(base + key, value); },
				del : function (key) {			return store.remove(base + key); }
			}
		}])

		.service(serviceName, ['Restangular', '$http', 'ourStore', function hooptapSdkService (Restangular, $http, ourStore) {

			var service = {};
			var storedApiKey	= ourStore.get('api-key');
			var storedToken		= ourStore.get('token');
			var storedProducts	= ourStore.get('products');
			var currentProduct	= ourStore.get('product');
			if(storedApiKey) { setApiKey(storedApiKey) }
			if(storedToken) { setToken(storedToken) }

			_.assign(service, {
				isLogged: !!storedToken,

				setProduct: function setProduct (product) {

					var apiKey = false;
					if(typeof product == 'object') {
						apiKey = product.api_key;
					}else{
						var productsArray 	= ourStore.get('products');
						if(_.isInteger(product)) {
							var index = product;
							product = productsArray[index];
						}else{
							var productId		= product;
							product = _.find(productsArray, function (item) { return item._id == productId });
						}

						if(product) {
							apiKey = product.api_key;
						}
					}

					if(apiKey) {
						setApiKey(apiKey);
					}

					if(typeof product == 'object') {
						ourStore.set('product', product);
					}

					return service;
				},

				getProducts: function getProducts () {
					return ourStore.get('products');
				},

				getProduct: function getProduct () {
					return ourStore.get('product');
				},

				getApiKey: function getApiKey () {
					return ourStore.get('api-key');
				},

				login: function login (loginData) {
					return service.all('admin')
						.login(loginData)
						.then(function loginThen (admin) {
							ourStore.set('user', admin.plain());
							if(getToken()) {
								return admin;
							}else{
								return admin.getToken(loginData).then(function () { return admin; });
							}
						});
				},

				updateToken: function updateToken () {
					var user	= ourStore.get('user'),
						userId	= user ? user._id : false;
					return service.one('user', userId)
						.updateToken();
				},

				logout: function logout () {
					ourStore.del('api-key');
					ourStore.del('token');
				}
			});
			var RestangularCustom = getRestangularWithConfig();
			_.assign(service, RestangularCustom);

			//createAlias(service, 'level');
			//createAlias(service, 'rule');
			//createAlias(service, 'action');
			//createAlias(service, 'user');
			//createAlias(service, 'item');
			//createAlias(service, 'ranking');
			//createAlias(service, 'quest');


			return service;







			/*	Functions
			 ---------------------------------------------------------------------------------*/


			function createAlias (obj, name) {
				obj[name] = obj.all(name);
			}

			function getRestangularWithConfig () {
				return Restangular.withConfig(function (RestangularConfigurer) {
					RestangularConfigurer.setBaseUrl(options.baseUrl);
					RestangularConfigurer.setDefaultHeaders(options.headers);
					RestangularConfigurer.addElementTransformer('admin', true, function(admin) {
						// This will add a method called login that will do a POST to the path login
						// signature is (name, operation, path, params, headers, elementToPost)

						admin.addRestangularMethod('login', 'post', 'login');
						admin.addRestangularMethod('token', 'post', 'token');

						return admin;
					});
					RestangularConfigurer.addResponseInterceptor(function (data, operation, model, url) {

						var operationToInterceptor = {
							'get'		: function (d) { return d.response; },
							'getList'	: function (d) { return d.response.items; },
							'post'		: function (d) { return d.response; },
							'put'		: function (d) { return d.response; }
						};
						var interceptor = operationToInterceptor[operation] || function (d) { return d; };
						data = interceptor(data);

						// Others

						if (model == 'login') {
							ourStore.set('products', data.products);
							service.setProduct(0);
						}

						return data;
					});
					RestangularConfigurer.addElementTransformer('user', false, function (element) {

						element.updateToken = function (params) {
							return $http.put(element.getRestangularUrl() + '/token',
								{ token : ourStore.get('token') },
								{ headers : options.headers })
								.then(function (d) {return _.get(d, 'data.response.access_token'); })
								.then(function (accessToken) {
									setToken(accessToken);
									return accessToken;
								})
								;
						};

						return element;
					});
					RestangularConfigurer.addElementTransformer('admin', false, function (element) {

						element.getToken = function (params) {

							return $http.post('http://api.dev.hooptap.com:8080/api/v2.0/admin/' + element._id + '/token', params, { headers : options.headers })
								.then(function (d) {return _.get(d, 'data.response.access_token'); })
								.then(function (accessToken) {
									setToken(accessToken);
									return accessToken;
								});
						};
						return element;
					});
					RestangularConfigurer.setRestangularFields({
						id: '_id',
						route: 'restangular_route',
						parentResource: 'restangular_parentResource',
						restangularCollection: 'restangular_collection'
					});
					RestangularConfigurer.setErrorInterceptor(function (response, deferred, responseHandler) {
						if (response.status === 413) {
							service.updateToken()
								.then(function accessToken () {
									setToken(accessToken);
								})
								.then(deferred.resolve, deferred.reject);
							return false;
						}

						return true;
					})
				});
			}

			function setApiKey (apiKey) {
				options.headers['x-api-key'] = apiKey;
				ourStore.set('api-key', apiKey);
			}

			function getApiKey () {
				return options.headers['x-api-key'];
			}
			function getToken () {
				return options.headers['Authorization'];
			}

			function setToken (token) {
				service.isLogged = !!token;
				options.headers['Authorization'] = 'Bearer ' + token;
				ourStore.set('token', token);
			}

		}])



	;



};

