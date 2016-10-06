<script>

	/**
	 * The component core.
	 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
	 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
	 */

	import Store from './../Store'

	export default {

		props: ['class', 'placeholder'],

		data: function ()
		{
			return {

				//input bound to autocomplete.
				'address': '',

				//google autocomplete object.
				'autocomplete': '',

				//google inputs retrieved.
				'inputs': {
					route: 'long_name',
					country: 'long_name',
					administrative_area_level_1: 'long_name',
					locality: 'long_name',
					postal_code: 'short_name'
				},

				//API info.
				api: {
					domain: 'https://maps.googleapis.com/maps/api/js',
					key: 'AIzaSyBDBrWOEiYNTbOp05CoWBGuq4hIwAA6yEs',
					libraries: 'places'
				}
			}
		},

		mounted: function ()
		{
			window.onload = this.loadScript(
				this.api.domain + '?key=' + this.api.key + '&libraries=' + this.api.libraries,
				this.bindAutocomplete
			);
		},

		watch: {
			/**
			 * Store the address retrieved in the vuex store.
			 *
			 * @return {Void}
			 */
			address: function ()
			{
				Store.commit('setAddress', this.address);
			}
		},

		methods:
		{
			/**
			 * Load google class for a given library.
			 *
			 * @param  src
			 * @param  callback
			 * @return {Void}
			 */
			loadScript: function(src, callback)
			{
				var script = document.createElement("script");
				document.body.appendChild(script);

				if (callback)
					script.onload = callback;

				script.src = src;
			},

			/**
			 * Bind autocomplete to its property.
			 *
			 * @return {Void}
			 */
			bindAutocomplete: function ()
			{
				this.autocomplete = new google.maps.places.Autocomplete(
			        this.$refs.complete,
			        {
			            types: ['geocode']
			        }
			    );

			    this.autocomplete.addListener('place_changed', this.pipeAddress);
			},

			/**
			 * Look up places and emit an event.
			 *
			 * @return {Void}
			 */
			pipeAddress: function ()
			{
				var data  = {};
				var place = this.autocomplete.getPlace();

				if (place.address_components !== undefined) {

					for (var i = 0; i < place.address_components.length; i++) {

						var input = place.address_components[i].types[0];
						if (this.inputs[input]) {

							data[input] = place.address_components[i][this.inputs[input]];
						}
					}

					data = JSON.stringify(data);
					Store.commit('setAddress', JSON.parse(data));
				}
			},

			/**
			 * Get the user location.
			 *
			 * @return {Void}
			 */
			geolocate: function()
			{
				if (navigator.geolocation) {

					var vm = this;
					navigator.geolocation.getCurrentPosition(function(position)
					{
						var geolocation = {
							lat: position.coords.latitude,
							lng: position.coords.longitude
						};

						var circle = new google.maps.Circle({
							center: geolocation,
							radius: position.coords.accuracy
						});

						vm.autocomplete.setBounds(circle.getBounds());
					});
				}
			}
		}

	};
</script>

<template>
	<input
		type = "text"
		ref = "complete"
		v-model = "address"
		@focus = "geolocate()"
		v-bind:placeholder = "placeholder"
	>
</template>
