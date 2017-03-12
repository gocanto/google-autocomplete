
/**
 * Autocomplete class.
 *
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
 */

import Loader from './Loader';

class Autocomplete
{
	/**
	 * Create a new autocomplete instance.
	 *
	 * @param {String} ref
	 * @return {Void}
	 */
	constructor(ref, config = {})
	{
		/**
		 * The retrieved place.
		 *
		 * @type {Object}
		 */
		this.place = {};

		/**
		* The google autocomplete payload.
		*
		* @type {Object}
		*/
		this.response = {};

		/**
		 * The autocomplete instance.
		 *
		 * @type {Object}
		 */
		this.autocomplete = null;

		/**
		 * The bounded input.
		 *
		 * @type {String}
		 */
		this.ref = document.getElementById(ref);

		/**
		* The autocomplete config
		*
		* @type {Object}
		*/
		this.config = config;

		//Boots the autocomplete.
		this.boot();
	}

	/**
	 * Create a new google map instance.
	 *
	 * @return Autocomplete
	 */
	static make(ref, config = {})
	{
		return new Autocomplete(ref, config);
	}

	/**
	 * Load the google places API.
	 *
	 * @return {Void}
	 */
	boot()
	{
		Loader.load(() => { return this.bind(this); });
	}

	/**
	 * Binds the autocomplete to the given reference.
	 *
	 * @param {Self}
	 */
	bind(obj)
	{
		obj.autocomplete = new google.maps.places.Autocomplete(
			obj.ref, this.config
		);

	    obj.autocomplete.addListener('place_changed', () => { obj.pipe(); });
	}

	/**
	 * Pipes out the retrieved place information.
	 *
	 * @return {Void}
	 */
	pipe()
	{
		let data  = {};
		let googleInputs = window.GOOGLE_AUTOCOMPLETE.inputs;
		let place = this.response = this.autocomplete.getPlace();

		if (place.address_components !== undefined) {

			for (let i = 0; i < place.address_components.length; i++) {

				let input = place.address_components[i].types[0];

				if (googleInputs[input]) {
					data[input] = place.address_components[i][googleInputs[input]];
				}
			}

			this.place = JSON.parse(
				JSON.stringify(data)
			);
		}
	}

	/**
	 * Bind the browser location to the given input.
	 *
	 * @return {Void}
	 */
	geolocate()
	{
		if (navigator.geolocation) {

			navigator.geolocation.getCurrentPosition( position => {

				let geolocation = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				let circle = new google.maps.Circle({
					center: geolocation,
					radius: position.coords.accuracy
				});

				this.autocomplete.setBounds(circle.getBounds());
			});
		}
	}

	/**
	 * Returns the retrieved address.
	 *
	 * @return {Object}
	 */
	getPlace()
	{
		return this.place;
	}

	/**
	 * Returns the retrieved response.
	 *
	 * @return {Object}
	 */
	getResponse()
	{
		return this.response;
	}

	/**
	 * Returns the google autocomplete object.
	 *
	 * @return {Object}
	 */
	getInstance()
	{
		return this.autocomplete;
	}
}

export default Autocomplete;
