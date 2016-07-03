import Vue from 'vue';
import Components from './components/index';

window.Vue = Vue;

new Vue({

	el: 'body',

	data:
	{
		address: {},
		output: {},
		sent: false
	},

	events: {
        setAddress: function (data)
        {
            this.address = data;
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
			return Object.keys(this.output).length > 0
		},

		isNotValid: function ()
		{
			return ! this.isValid();
		}
	},

	components:
	{
		Components
	}

});