# Google Autocomplete

<a href="https://gocanto.github.io/google-autocomplete/"><img src="https://img.shields.io/badge/online-demo-green.svg" alt="Demo"></a>
<a href="https://www.npmjs.com/package/google-autocomplete-vue"><img src="https://img.shields.io/npm/v/google-autocomplete-vue.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/google-autocomplete-vue"><img src="https://img.shields.io/npm/dt/google-autocomplete-vue.svg" alt="Downloads"></a>
<a href="https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/easiest-js-validator.svg" alt="License"></a>
<a href="https://github.com/gocanto/google-autocomplete/tree/vue-1"><img src="https://img.shields.io/badge/Vue%201.*-passed-orange.svg" alt="Vue1.*"></a>


I am sharing this component because I was overwhelmed of complicated examples to achieve this simple duty. So, I will try to be as easier as I can during my explanation.

# Requirements
You will have to install vue & vuex

```js
npm install vue
```

```js
npm install vuex
```

The <a href="http://vuex.vuejs.org/en/intro.html" target="_blank">vuex library</a> is used to manage the event between the component and the current vue instance.


# Installation
To install this package you just need to open your console line and type ```npm i google-autocomplete-vue```. If there is a problem during the installation, you can try again using the ```force param```, as so ```npm i -f google-autocomplete-vue```


# Gettings started
First of all, you will have to import the component in your application entry point, so you will be able to call it as global as need it. Example:

```js
import GoogleAutocomplete from 'google-autocomplete-vue';
```

Second of all, you will have to import the store file shipped with the component, in order for it to exposes its event out of it. Example

```js
import Store from 'google-autocomplete-vue/dist/Store';
```

Take a look at the <a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/index.js#L8-L9" target="_blank">example</a> published.


# Validation on server side

Places validation is a laravel library that will help you out to handle your user addresses. Its aim is making sure the addresses submitted by users are valid through 3rd party services, as google.

Take a look at its repository on <a href="https://github.com/gocanto/places-validation"> Places Validation </a> 


# Illustration

![example](https://github.com/gocanto/google-autocomplete/blob/master/src/images/example.gif)


Also, you will be able to see the online <a href="https://gocanto.github.io/google-autocomplete/" target="_blank">DEMO</a>


# Guide

* First of all, you have to create an entry point in order for you to compile the component out and generate your bundle file. An illustration is posted <a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/demo.js" target="_blank">here</a>


* Second of all, you will have to create your vue object to control the component mentioned, as so:

```javascript

import Vue from 'vue';
import Store from 'google-autocomplete-vue/dist/Store';
import Components from 'google-autocomplete-vue';

new Vue({

	el: '#demo',

	data:
	{
		output: {}, address: {}, sent: false
	},

	computed:
	{
		sharedAddress: function()
		{
			return Store.state.sharedAddress;
		}
	},

	watch: {
		sharedAddress: function ()
		{
			this.address = this.sharedAddress;
		}
	},

	methods:
	{
		submit: function ()
		{
			this.sent = true;
			this.output = this.address;
			this.address = {};
		},

		isValid: function ()
		{
			return Object.keys(this.output).length > 0;
		},

		isNotValid: function ()
		{
			return ! this.isValid();
		}
	}

});

```

See the example <a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/demo.js" target="_blank">here</a>


* Third of all, you have to compile these two files with **browserify or webpack** and **laravel-elixir-vue-2** to make them readable for every browser. Example:

```javascript
require('laravel-elixir-vue-2');
var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src';

elixir(function(mix)
{
	mix.webpack('index.js', 'dist/demo.js');
});
```

See the example <a href="https://github.com/gocanto/google-autocomplete/blob/master/gulpfile.js#L10" target="_blank">here</a>


* Finally, you can use the component in your **HTML** file using this syntax:

```HTML
<google-autocomplete
    class = "input"
    placeholder = "type your address"
>
</google-autocomplete>
```

See the example <a href="https://github.com/gocanto/google-autocomplete/blob/master/demo/index.html#L50-L54" target="_blank">here</a>


Also, You can pass any ```css class``` through "class" prop.


# Contributing

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.


# License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.


# How can I thank you?
Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter? Spread the word!


Don't forget to [follow me on twitter](https://twitter.com/gocanto)!

Thanks!

Gustavo Ocanto.
gustavoocanto@gmail.com
