
var _ = require('lodash');


/*	Best Practices
 ---------------------------------------------------------------------------------*/

var bestPractices = {
	"rules": {
		// Enforces getter/setter pairs in objects
		"accessor-pairs": 0,
		// treat var statements as if they were block scoped
		"block-scoped-var": 0,
		// specify the maximum cyclomatic complexity allowed in a program
		"complexity": 0,
		// require return statements to either always or never specify values
		"consistent-return": 0,
		// specify curly brace conventions for all control statements
		"curly": [2, "multi-line"],
		// require default case in switch statements
		"default-case": 2,
		// enforces consistent newlines before or after dots
		"dot-location": [2, "property"],
		// encourages use of dot notation whenever possible
		"dot-notation": 0,
		// require the use of === and !==
		"eqeqeq": 0,
		// make sure for-in loops have an if statement
		"guard-for-in": 2,
		// disallow the use of alert, confirm, and prompt
		"no-alert": 0,
		// disallow use of arguments.caller or arguments.callee
		"no-caller": 0,
		// disallow lexical declarations in case clauses
		"no-case-declarations": 0,
		// disallow division operators explicitly at beginning of regular expression
		"no-div-regex": 0,
		// disallow else after a return in an if
		"no-else-return": 0,
		// disallow use of empty destructuring patterns
		"no-empty-pattern": 0,
		// disallow comparisons to null without a type-checking operator
		"no-eq-null": 0,
		// disallow use of eval()
		"no-eval": 2,
		// disallow adding to native types
		"no-extend-native": 2,
		// disallow unnecessary function binding
		"no-extra-bind": 0,
		// disallow fallthrough of case statements
		"no-fallthrough": 0,
		// disallow the use of leading or trailing decimal points in numeric literals
		"no-floating-decimal": 0,
		// disallow the type conversions with shorter notations
		"no-implicit-coercion": 0,
		// disallow use of eval()-like methods
		"no-implied-eval": 0,
		// disallow this keywords outside of classes or class-like objects
		"no-invalid-this": 0,
		// disallow usage of __iterator__ property
		"no-iterator": 0,
		// disallow use of labeled statements
		"no-labels": 0,
		// disallow unnecessary nested blocks
		"no-lone-blocks": 0,
		// disallow creation of functions within loops
		"no-loop-func": 2,
		// disallow the use of magic numbers
		"no-magic-numbers": 0,
		// disallow use of multiple spaces
		"no-multi-spaces": 0,
		// disallow use of multiline strings
		"no-multi-str": 2,
		// disallow reassignments of native objects
		"no-native-reassign": 0,
		// disallow use of new operator for Function object
		"no-new-func": 0,
		// disallows creating new instances of String,Number, and Boolean
		"no-new-wrappers": 0,
		// disallow use of new operator when not part of the assignment or comparison
		"no-new": 0,
		// disallow use of octal escape sequences in string literals, such as
		// var foo = "Copyright \251";
		"no-octal-escape": 0,
		// disallow use of (old style) octal literals
		"no-octal": 0,
		// disallow reassignment of function parameters
		"no-param-reassign": 0,
		// disallow use of process.env
		"no-process-env": 0,
		// disallow usage of __proto__ property
		"no-proto": 0,
		// disallow declaring the same variable more then once
		"no-redeclare": 0,
		// disallow use of assignment in return statement
		"no-return-assign": 0,
		// disallow use of `javascript:` urls.
		"no-script-url": 0,
		// disallow comparisons where both sides are exactly the same
		"no-self-compare": 0,
		// disallow use of comma operator
		"no-sequences": 0,
		// restrict what can be thrown as an exception
		"no-throw-literal": 0,
		// disallow usage of expressions in statement position
		"no-unused-expressions": 0,
		// disallow unnecessary .call() and .apply()
		"no-useless-call": 0,
		// disallow unnecessary concatenation of literals or template literals
		"no-useless-concat": 0,
		// disallow use of void operator
		"no-void": 0,
		// disallow usage of configurable warning terms in comments: e.g. todo
		"no-warning-comments": 0,
		// disallow use of the with statement
		"no-with": 2,
		// require use of the second argument for parseInt()
		"radix": 0,
		// requires to declare all vars on top of their containing scope
		"vars-on-top": 0,
		// require immediate function invocation to be wrapped in parentheses
		"wrap-iife": 0,
		// require or disallow Yoda conditions
		"yoda": 0
	}
};


/*	Errors
 ---------------------------------------------------------------------------------*/

var errors = {
	"rules": {
		// disallow trailing commas in object literals
		"comma-dangle": 0,
		// disallow assignment in conditional expressions
		"no-cond-assign": 0,
		// disallow use of console
		"no-console": 0,
		// disallow use of constant expressions in conditions
		"no-constant-condition": 0,
		// disallow control characters in regular expressions
		"no-control-regex": 0,
		// disallow use of debugger
		"no-debugger": 0,
		// disallow duplicate arguments in functions
		"no-dupe-args": 0,
		// disallow duplicate keys when creating object literals
		"no-dupe-keys": 0,
		// disallow a duplicate case label.
		"no-duplicate-case": 0,
		// disallow the use of empty character classes in regular expressions
		"no-empty-character-class": 0,
		// disallow empty statements
		"no-empty": 0,
		// disallow assigning to the exception in a catch block
		"no-ex-assign": 0,
		// disallow double-negation boolean casts in a boolean context
		"no-extra-boolean-cast": 0,
		// disallow unnecessary parentheses
		"no-extra-parens": [2, 'all', { "nestedBinaryExpressions": false }],
		// disallow unnecessary semicolons
		"no-extra-semi": 0,
		// disallow overwriting functions written as function declarations
		"no-func-assign": 0,
		// disallow function or variable declarations in nested blocks
		"no-inner-declarations": [2, "functions"],
		// disallow invalid regular expression strings in the RegExp constructor
		"no-invalid-regexp": 0,
		// disallow irregular whitespace outside of strings and comments
		"no-irregular-whitespace": 0,
		// disallow negation of the left operand of an in expression
		"no-negated-in-lhs": 0,
		// disallow the use of object properties of the global object (Math and JSON) as functions
		"no-obj-calls": 0,
		// disallow multiple spaces in a regular expression literal
		"no-regex-spaces": 0,
		// disallow sparse arrays
		"no-sparse-arrays": 0,
		// Avoid code that looks like two expressions but is actually one
		"no-unexpected-multiline": 0,
		// disallow unreachable statements after a return, throw, continue, or break statement
		"no-unreachable": 0,
		// disallow comparisons with the value NaN
		"use-isnan": 0,
		// ensure JSDoc comments are valid
		"valid-jsdoc": 0, // TODO refactor all jsdocs and put here a "2"
		// ensure that the results of typeof are compared against a valid string
		"valid-typeof": 0
	}
};


/*	Es6
 ---------------------------------------------------------------------------------*/

var es6 = {
	"parserOptions": {
		"ecmaVersion" : 6,
		"sourceType" : "module"
	},
	"env": {
		"es6": true,
		"browser": true
	},
	"rules": {
		// require braces in arrow function body
		"arrow-body-style": 0,
		// require parens in arrow function arguments
		"arrow-parens": 0,
		// require space before/after arrow function"s arrow
		"arrow-spacing": 0,
		// verify super() callings in constructors
		"constructor-super": 0,
		// enforce the spacing around the * in generator functions
		"generator-star-spacing": 0,
		// disallow arrow functions where a condition is expected
		"no-arrow-condition": 0,
		// disallow modifying variables of class declarations
		"no-class-assign": 0,
		// disallow modifying variables that are declared using const
		"no-const-assign": 0,
		// disallow duplicate name in class members
		"no-dupe-class-members": 0,
		// disallow to use this/super before super() calling in constructors.
		"no-this-before-super": 0,
		// require let or const instead of var
		"no-var": 0,
		// require method and property shorthand syntax for object literals
		"object-shorthand": 0,
		// suggest using arrow functions as callbacks
		"prefer-arrow-callback": 0,
		// suggest using of const declaration for variables that are never modified after declared
		"prefer-const": 0,
		// suggest using Reflect methods where applicable
		"prefer-reflect": 0,
		// suggest using the spread operator instead of .apply()
		"prefer-spread": 0,
		// suggest using template literals instead of strings concatenation
		"prefer-template": 0,
		// disallow generator functions that do not have yield
		"require-yield": 0
	}
};


/*	Node
 ---------------------------------------------------------------------------------*/

var node = {
	"env": {
		"node": false
	},
	"rules": {
		// enforce return after a callback
		"callback-return": 0,
		// disallow require() outside of the top-level module scope
		"global-require": 0,
		// enforces error handling in callbacks (node environment)
		"handle-callback-err": 0,
		// disallow mixing regular variable and require declarations
		"no-mixed-requires": 0,
		// disallow use of new operator with the require function
		"no-new-require": 0,
		// disallow string concatenation with __dirname and __filename
		"no-path-concat": 0,
		// disallow process.exit()
		"no-process-exit": 0,
		// restrict usage of specified node modules
		"no-restricted-modules": 0,
		// disallow use of synchronous methods (off by default)
		"no-sync": 0
	}
};


/*	Strict
 ---------------------------------------------------------------------------------*/

var strict = {
	"rules": {
		// require that all functions are run in strict mode
		"strict": 0
	}
};


/*	Style
 ---------------------------------------------------------------------------------*/

var style = {
	"rules": {
		// enforce spacing inside array brackets
		"array-bracket-spacing": 0,
		// disallow or enforce spaces inside of single line blocks
		"block-spacing": 0,
		// enforce one true brace style
		"brace-style": [2, "1tbs", { "allowSingleLine": true }],
		// require camel case names
		"camelcase": [2, { "properties": "never" }],
		// enforce spacing before and after comma
		"comma-spacing": 0,
		// enforce one true comma style
		"comma-style": 0,
		// require or disallow padding inside computed properties
		"computed-property-spacing": 0,
		// enforces consistent naming when capturing the current execution context
		"consistent-this": 0,
		// enforce newline at the end of file, with no multiple empty lines
		"eol-last": 0,
		// require function expressions to have a name
		"func-names": 0,
		// enforces use of function declarations or expressions
		"func-style": 0,
		// this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
		"id-length": 0,
		// require identifiers to match the provided regular expression
		"id-match": 0,
		// this option sets a specific tab width for your code
		"indent": [2, "tab"],
		// specify whether double or single quotes should be used in JSX attributes
		"jsx-quotes": 0,
		// enforces spacing between keys and values in object literal properties
		"key-spacing": [0],
		// disallow mixed "LF" and "CRLF" as linebreaks
		"linebreak-style": 0,
		// enforces empty lines around comments
		"lines-around-comment": 0,
		// specify the maximum depth that blocks can be nested
		"max-depth": 0,
		// specify the maximum length of a line in your program
		"max-len": [2, 130, 4, {ignoreComments: true, ignoreUrls: true, ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\("}],
		// specify the maximum depth callbacks can be nested
		"max-nested-callbacks": 0,
		// limits the number of parameters that can be used in the function declaration.
		"max-params": 0,
		// specify the maximum number of statement allowed in a function
		"max-statements": 0,
		// require a capital letter for constructors
		"new-cap": 0,
		// disallow the omission of parentheses when invoking a constructor with no arguments
		"new-parens": 0,
		// allow/disallow an empty newline after var statement
		"newline-after-var": 0,
		// disallow use of the Array constructor
		"no-array-constructor": 2,
		// disallow use of bitwise operators
		"no-bitwise": 0,
		// disallow use of the continue statement
		"no-continue": 0,
		// disallow comments inline after code
		"no-inline-comments": 0,
		// disallow if as the only statement in an else block
		"no-lonely-if": 0,
		// disallow mixed spaces and tabs for indentation
		"no-mixed-spaces-and-tabs": 2,
		// disallow multiple empty lines
		"no-multiple-empty-lines": 0,
		// disallow negated conditions
		"no-negated-condition": 0,
		// disallow nested ternary expressions
		"no-nested-ternary": 0,
		// disallow use of the Object constructor
		"no-new-object": 2,
		// disallow use of unary operators, ++ and --
		"no-plusplus": 0,
		// disallow use of certain syntax in code
		"no-restricted-syntax": 0,
		// disallow space between function identifier and application
		"no-spaced-func": 2,
		// disallow the use of ternary operators
		"no-ternary": 0,
		// disallow trailing whitespace at the end of lines
		"no-trailing-spaces": 2,
		// disallow dangling underscores in identifiers
		"no-underscore-dangle": 0,
		// disallow the use of Boolean literals in conditional expressions
		"no-unneeded-ternary": 0,
		// require or disallow padding inside curly braces
		"object-curly-spacing": [2, "always"],
		// allow just one var statement per function
		"one-var": 0,
		// require assignment operator shorthand where possible or prohibit it entirely
		"operator-assignment": 0,
		// enforce operators to be placed before or after line breaks
		"operator-linebreak": [2, "after"],
		// enforce padding within blocks
		"padded-blocks": 0,
		// require quotes around object literal property names
		"quote-props": 0,
		// specify whether double or single quotes should be used
		"quotes": [2, "single", { avoidEscape: true, allowTemplateLiterals: true} ],
		// Require JSDoc comment
		"require-jsdoc": 0,
		// enforce spacing before and after semicolons
		"semi-spacing": 0,
		// require or disallow use of semicolons instead of ASI
		"semi": 0,
		// sort variables within the same declaration block
		"sort-vars": 0,
		// require a space before/after certain keywords
		"keyword-spacing": 0,
		// require or disallow space before blocks
		"space-before-blocks": [2, "always"],
		// require or disallow space before function opening parenthesis
		"space-before-function-paren": [2, "always"],
		// require or disallow spaces inside parentheses
		"space-in-parens": [2, "never"],
		// require spaces around operators
		"space-infix-ops": 2,
		// Require or disallow spaces before/after unary operators
		"space-unary-ops": 0,
		// require or disallow a space immediately following the // or /* in a comment
		"spaced-comment": 0,
		// require regex literals to be wrapped in parentheses
		"wrap-regex": 0
	}
};


/*	Variables
 ---------------------------------------------------------------------------------*/

var variables = {
	"globals": {
		"window": true,
		"require": true,
		"jquery": true,
		"jQuery": true,
		"$": true,
		"beforeEach": true,
		"inject": true,
		"describe": true,
		"expect": true,
		"it": true,
		"mockModule": true,
		"utils": true,
		"__dirname": true,
		"process": true,
		"module": true
	},
	"rules": {
		// enforce or disallow variable initializations at definition
		"init-declarations": 0,
		// disallow the catch clause parameter name being the same as a variable in the outer scope
		"no-catch-shadow": 0,
		// disallow deletion of variables
		"no-delete-var": 0,
		// disallow labels that share a name with a variable
		"no-label-var": 0,
		// disallow shadowing of names such as arguments
		"no-shadow-restricted-names": 0,
		// disallow declaration of variables already declared in the outer scope
		"no-shadow": 0,
		// disallow use of undefined when initializing variables
		"no-undef-init": 0,
		// disallow use of undeclared variables unless mentioned in a /*global */ block
		"no-undef": 2,
		// disallow use of undefined variable
		"no-undefined": 0,
		// disallow declaration of variables that are not used in the code
		"no-unused-vars": 0,
		// disallow use of variables before they are defined
		"no-use-before-define": 0
	}
};


module.exports = _.merge({}, bestPractices, errors, es6, node, strict, style, variables);