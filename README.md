# Google Autocomplete

<a href="https://gocanto.github.io/google-autocomplete/"><img src="https://img.shields.io/badge/online-demo-green.svg" alt="Demo"></a>
<a href="https://www.npmjs.com/package/google-autocomplete-vue"><img src="https://img.shields.io/npm/v/google-autocomplete-vue.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/google-autocomplete-vue"><img src="https://img.shields.io/npm/dt/google-autocomplete-vue.svg" alt="Downloads"></a>
<a href="https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md"><img src="https://img.shields.io/npm/l/easiest-js-validator.svg" alt="License"></a>


I am sharing this component because I was overwhelmed of complicated examples to achieve this simple duty. So, I will try to be as easy as I can during my explanation.


# Installation
To install this package you just need to open your console line and type ```npm i google-autocomplete-vue```. If there is a problem during the installation, you can try again using the ```force param``` as so ```npm i -f google-autocomplete-vue```

# Gettings started
First of all, you will have to import the library into the file where you are operating. As so,

```js
import GoogleAutocomplete from './googleAutocomplete.vue';
```

Then, you have to register the component in order for you to use it within your code. As so, 

```js
Vue.component('google-autocomplete', GoogleAutocomplete);
```

Take a look at the <a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/Components/index.js" target="_blank">example</a> published.


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

    new Vue({
        el: '#myelement',

        data:
        {
            address: {}
        },

        events: {
            setAddress: function (data)
            {
                this.address = data;
            }
        },

        components: {
            Components
        }

    });

```

See the example <a href="https://github.com/gocanto/google-autocomplete/blob/master/src/js/demo.js#L47" target="_blank">here</a>


* Third of off, you need to create your application entry file, as so:

* Fourth of all, you have to compile these two files with **browserify** and **laravel-elixir-vueify** to make them readable for every browser. To achieve this task, I used laravel elixir. As so

```javascript
elixir(function(mix)
{
    mix.browserify('vue/entry.js');
});
```

See the example <a href="https://github.com/gocanto/google-autocomplete/blob/master/gulpfile.js" target="_blank">here</a>


* Finally, you can use the component in your **HTML** file using this syntax:

```HTML
<google-autocomplete class="form-control input-lg"></google-autocomplete>
```

See the example <a href="https://github.com/gocanto/google-autocomplete/blob/master/demo/index.html#L32" target="_blank">here</a>


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
