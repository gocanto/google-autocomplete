require('laravel-elixir-vue');
var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';

elixir(function(mix)
{
	mix.webpack('index.js', 'dist/google-autocomplete-vue.js');
});
