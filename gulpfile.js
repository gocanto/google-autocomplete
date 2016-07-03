require('laravel-elixir-vueify');
var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';

elixir(function(mix)
{
	mix.browserify('demo.js', 'dist/google-places-complete.js');
});