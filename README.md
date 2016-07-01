# Google Autocomplete

I am sharing this component because I was overwhelmed off complicated examples to achieve this simple duty. So, I will try to be as easy as the example during my explanation.

# Example

![example](https://github.com/gocanto/google-autocomplete/blob/master/example.gif)


# Guide

---
* First of all, you have to create ```googleAutocomplete.js``` into your assets folder, in order for it to be used as external module, as it is shown above.

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
            'google-autocomplete': require('../components/googleAutocomplete')
        }

    });

```

* Third of off, you need to create your application entry file, as so:

```javascript

//create a file containing this line of code named 'entry.js' to be used in your script compilation

require('./js/myelement');

//'myelement' would be the file wrapper for the code above
```
 



* Fourth of all, you have to compile these two files with **browserify** to make them readable for every browser. To achieve this task, I used laravel elixir. As so

```javascript
elixir(function(mix)
{
    mix.browserify('vue/entry.js');
});
```

* Finally, you can use the component in your **HTML** file using this syntax:

```HTML
<google-autocomplete class="form-control input-lg"></google-autocomplete>
```
You can pass any css class through "class" var


---


Let me know if you need some help with this piece of code, I will more than glad to help you out. 

Email: gustavoocanto@gmail.com
