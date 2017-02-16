
/**
 * Loader class.
 *
 * @author Gustavo Ocanto <gustavoocanto@gmail.com>
 * @license https://github.com/gocanto/google-autocomplete/blob/master/LICENSE.md
 */

class Loader
{
	/**
	 * Create a new Loader instance.
	 *
	 * @return {Void}
	 */
	constructor()
	{
		this.config = window.GOOGLE_AUTOCOMPLETE;
	}

	/**
	 * Loads and script and fires a given callback.
	 *
	 * @param {String} src
	 * @param {Object}
	 * @return {Void}
	 */
	static load(callback)
	{
		let loader = new Loader();

		const script = document.createElement("script");

		document.body.appendChild(script);

		if (callback) {
			script.onload = callback;
		}

		script.src = loader.source();
	}

	/**
	 * Returns the google API url for a given library.
	 *
	 * @return {String}
	 */
	source()
	{
		return this.config.domain + '?key=' + this.config.key + '&libraries=' + this.config.library;
	}
}

export default Loader;