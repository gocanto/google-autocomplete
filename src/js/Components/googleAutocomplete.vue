<script>

	/**
	 * The google autocomplete component.
	 *
	 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
	 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
	 */

	import Autocomplete from './../Libraries/Autocomplete';

	export default {

		props: [
			'placeholder', //the input placeholder
			'input_id', // the input id
			'class' // the input class
		],

		data: function ()
		{
			return {
				/**
				 * The Autocomplete object.
				 *
				 * @type {Autocomplete}
				 */
				'autocomplete': null,

				/**
				 * The typed address.
				 *
				 * @type {String}
				 */
				'address': ''
			}
		},

		computed:
		{
			/**
			 * The place variable on charge to retrieve a required place from the autocomplete object.
			 *
			 * @return {Object}
			 */
			place()
			{
				if (this.hasAutocompleteInstance() && this.autocomplete.getPlace() !== null) {
					return this.autocomplete.getPlace();
				}

				return {};
			}
		},

		mounted()
		{
			//Creates a new Autocomplete object and bind it to
			//the given key.
			this.autocomplete = Autocomplete.make(this.input_id);
		},

		watch:
		{
			place()
			{
				//fires an event to have the retrieved place within
				//the parent component.
				// Store.commit('setAddress', this.place);
				Vuemit.fire('setAddress', this.place);
			}
		},

		methods:
		{
			/**
			 * Checks whether the Autocomplete was loaded.
			 *
			 * @return {Bool}
			 */
			hasAutocompleteInstance()
			{
				return this.autocomplete != null && this.autocomplete.getInstance() != null;
			}
		}
	};
</script>

<template>
	<input
		@focus = "autocomplete.geolocate()"
		v-bind:placeholder = "placeholder"
		v-bind:id = "input_id"
		v-model = "address"
		type = "text"
	>
</template>
