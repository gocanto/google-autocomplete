
/**
 * The demo Vue instance.
 *
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
 */

require('./bootstrap');

new Vue({

	el: '#demo',

	data:
	{
		output: {}, address: {}, sent: false, response: {}, configs: {}
	},

	mounted()
	{
		//Set an event listener for 'setAddress'.
		Vuemit.listen('setAddress', this.onAddressChanged);
	},

	methods:
	{
		/**
		 * Submit the data to be evaluated.
		 *
		 * @return {Void}
		 */
		submit()
		{
			this.sent = true;
			this.output = this.address;
			this.address = {};
		},

		/**
		 * Checks whether the output data is valid.
		 *
		 * @return {Bool}
		 */
		isValid()
		{
			return Object.keys(this.output).length > 0;
		},

		/**
		 * Checks whether the output data is not valid.
		 *
		 * @return {Bool}
		 */
		isNotValid()
		{
			return ! this.isValid();
		},

		/**
		 * The callback fired when the autocomplete event was fired.
		 *
		 * @param {Object}
		 * @return {Void}
		 */
		onAddressChanged(payload)
		{
			if (Object.keys(payload.place).length > 0) {
				this.address = payload.place;
				this.response = payload.response;
			}
		}
	}

});