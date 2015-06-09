/**
 * This file interacts with cookies to store and retrieve auth tokens.
 */

// Import external modules
import Cookie from 'cookie-dough';

// Import internal modules
import config from '../../config';

/**
 * This function gets a cookie.
 *
 * @param {string} name The name of the cookie.
 * @param {Flux=} flux The Flux object.
 */
export function getCookie(name, flux) {

  // Return cookie if we're on the client.
  if (__CLIENT__) {
    return Cookie().get(name);
  }

  // Get cookie from request if we're on the server.
  if (__SERVER__) {
    return (new Cookie(flux.request)).get(name);
  }

}

/**
 * This function sets a cookie.
 *
 * @param {string} name The name of the cookie.
 * @param {string} value The value of the cookie.
 * @param {Flux=} flux The Flux object.
 */
export function setCookie(name, value, flux) {

  // Set cookie if we're on the client.
  if (__CLIENT__) {
    return Cookie().set(name, value);
  }

  // Set cookie using request if we're on the server.
  if (__SERVER__) {
    return (new Cookie(flux.request)).set(name, value);
  }

}
