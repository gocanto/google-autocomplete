
/*
|------------------------------------------------------------------------------------
| Vue
|------------------------------------------------------------------------------------
|
| Vue is a modern JavaScript library for building interactive web interfaces
| using reactive data binding and reusable components. Vue's API is clean
| and simple, leaving you to focus on building your next great project.
*/

window.Vue = require('vue');

/*
|------------------------------------------------------------------------------------
| Google Autocomplete
|------------------------------------------------------------------------------------
|
| The google autocomplete is the configuration object for the component.
| Here, you will be able to set the API domain, your personal key
| number, and the library required.
*/

window.GOOGLE_AUTOCOMPLETE = {
	'domain': 'https://maps.googleapis.com/maps/api/js',
	'key': 'AIzaSyBDBrWOEiYNTbOp05CoWBGuq4hIwAA6yEs',
	'library' : 'places',

	// google inputs retrieved.
	'inputs': {
		administrative_area_level_1: 'long_name',
		street_number: 'short_name',
		postal_code: 'short_name',
		locality: 'long_name',
		country: 'long_name',
		route: 'long_name'
	}
}