
var angularToUse = null;
if(angular) {
	angularToUse = angular;
}else if (window && window.angular) {
	angularToUse = window.angular;
}

require('./src/index.js')(angularToUse);

module.exports = 'hooptap-sdk';