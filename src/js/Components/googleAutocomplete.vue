<script>

	/**
	 * The google autocomplete component.
	 *
	 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
	 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
	 */

	import Autocomplete from './../Libraries/Autocomplete';

	export default {

		props: {
			placeholder: String, //the input placeholder
			input_id: String, // the input id
			"class": String, // the input class
			config: {
				type: Object,
				"default": () => {
					return {
						types: ['geocode']
					}
				}
			} // the Google Autocomplete config to pass-in
        },

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
			 * The place variable returns the requested place from the autocomplete object.
			 *
			 * @return {Object}
			 */
			place()
			{
				if (this.hasAutocompleteInstance() && this.autocomplete.getPlace() !== null) {
					return this.autocomplete.getPlace();
				}

				return {};
			},

			/**
			 * The response variable returns the whole google autocomplete payload.
			 *
			 * @return {Object}
			 */
            response()
            {
				if (this.hasAutocompleteInstance() && this.autocomplete.getPlace() !== null) {
					return this.autocomplete.getResponse();
				}

				return {};
            }
		},

		mounted()
		{
			//Creates a new Autocomplete object and bind it to the given key.
			this.autocomplete = Autocomplete.make(this.input_id, this.config);
		},

		watch:
		{
			place()
			{
				//fires an event to have the retrieved place within the parent component.
				Vuemit.fire('setAddress', {
					response: this.response,
					place: this.place
                });
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
