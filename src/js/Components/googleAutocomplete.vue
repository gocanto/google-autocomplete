<script>
	export default {

		props: ['class', 'placeholder'],

		data: function ()
		{
			return {
				//input bound to autocomplete
				'address': '',
				//google autocomplete object
				'autocomplete': '',
				//google inputs retrieved
				'inputs': {
					route: 'long_name',
					country: 'long_name',
					administrative_area_level_1: 'long_name',
					locality: 'long_name',
					postal_code: 'short_name'
				},
				api: {
					domain: 'https://maps.googleapis.com/maps/api/js',
					key: 'AIzaSyBDBrWOEiYNTbOp05CoWBGuq4hIwAA6yEs',
					libraries: 'places'
				}
			};
		},

		/**
		 * Attach the google object to window one.
		 * @return void
		 */
		ready: function ()
		{
			window.onload = this.loadScript(
				this.api.domain + '?key=' + this.api.key + '&libraries=' + this.api.libraries,
				this.bindAutocomplete
			);
		},

		/**
		 * Controls the address changes to send them to
		 * the listeners.
		 * @return void
		 */
		watch: {
			address: function ()
			{
				this.$dispatch('setAddress', this.address);
			}
		},

		methods:
		{
			/**
			 * Load google class for a given library.
			 * @param  src
			 * @param  callback
			 * @return void
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
			 * @return void
			 */
			bindAutocomplete: function ()
			{
				this.autocomplete = new google.maps.places.Autocomplete(
			        this.$els.complete,
			        {
			            types: ['geocode']
			        }
			    );

			    this.autocomplete.addListener('place_changed', this.pipeAddress);
			},

			/**
			 * Look up places and dispatch an event.
			 * @return void
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
					this.$dispatch('setAddress', JSON.parse(data));
				}
			},

			/**
			 * Get the user location.
			 * @return void
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
		type="text"
		v-bind:class="class"
		v-el:complete
		v-model="address"
		placeholder="{{ placeholder }}"
		debounce="500"
		@focus="geolocate()"
	>
</template>
