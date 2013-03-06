### Angular Typeahead

This is my Typeahead directive. It simply wrap Twitter Bootstrap's Typeahead js plugin in a directive so your Angularjs app will 'see' your selection.

#### Use

You need to include the igTypeahead.js before your app, but after angular.

This directive creates a new html element (!) called typeahead. In your markup you put ```<typeahead></typeahead>```, and anguar with replace it with an ```<input />``` when rendering.

Bare minimum, ```<typeahead>``` needs a ```choice```, and ```list``` attribute, where the value of ```choice``` is the model the selected choice is to be stored, and ```list``` is either an array of strings, or a function that returns an array of strings.

For example…

	// Load the directive
	<script src="jquery.js"></script>
	<script src="angular.js"></script>
	<script src="igTypeahead.js"></script>
	<script src="ngApp.js"></script>
	
	// In your controller
	// Include the module in your app
	ngMyApp = angular.module('myApp', ['igTypahead']);
	
	// Model for your selected item
	$scope.selection;
	
	// List of choices
	$scope.states = ['Alabama','California','Deleware'];
	
	// In your markup
	<typeahead choice="selection" list="states"></typeahead>
	
You can add any other attributes to ```<typeahead>```, such as ```placeholder``` or ```autocomplete```, and they will just get passed along to the ```<input />``` that Angular creates while rendering/bootstrapping.

#### Requirements

* Angularjs (Tested against 1.0.1 and 1.0.4)
* Bootstrap Typeahead jQuery plugin (which, inturn requires jQuery) (Tested against 2.0.0 through 2.2.2)