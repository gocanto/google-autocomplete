require('laravel-elixir-vue-2');
var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';

elixir(function(mix)
{
	//The demo js file.
	mix.webpack('index.js', 'dist/demo.js')

		//the Vuex file that handles the event between the component and the vue instance.
		.copy('src/js/Store.js', 'dist/Store.js')

		//Exposing the component files to the dist folder.
		.copy('src/js/Components/index.js', 'dist/Components/index.js') //registers the component as global.
		.copy('src/js/Components/googleAutocomplete.vue', 'dist/Components/googleAutocomplete.vue'); //component core.
});
