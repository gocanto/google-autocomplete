require('laravel-elixir-vue-2');
var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';

elixir(function(mix)
{
	//The demo js file.
	mix.webpack('demo.js', 'dist/demo.js')

	//the library files.
	.copy('src/js/Libraries/\**.*', 'dist/Libraries')

	//Exposing the component files to the dist folder.
	.copy('src/js/Components/\**.*', 'dist/Components')
});