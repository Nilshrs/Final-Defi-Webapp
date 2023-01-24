/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  'admin/*':'is-admin',

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'static-pages/*': true,

  'account/logout': true,
  'legal/view-terms': true,
  'legal/view-privacy': true,
  'deliver-contact-form-message': true,

  'token/find': true,
  'token/find-all': true,
  'token/find-by-name': true,
  'token/find-by-id': true,

  //needed for cron job
  'token/insert-or-update': true

};
