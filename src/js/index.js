/**
 * The demo instance.
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
 */

import Vue from 'vue';
require('./bootstrap');
import Store from './Store';
import Components from './Components/index';

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