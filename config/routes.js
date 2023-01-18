/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'static-pages/view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  'GET /faq':                { action:  'static-pages/view-faq' },
  'GET /legal/terms':        { action:  'legal/view-terms' },
  'GET /legal/privacy':      { action:  'legal/view-privacy' },
  'GET /contact':            { action:  'static-pages/view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session':                 { action: 'observe-my-session', hasSocketFeatures: true },

  // UC Transaction routes:
  'GET /trans':             { action: 'portfolio-transaction/view-trans-01' },
  'GET /trans-01/:type':    { action: 'portfolio-transaction/transaction-type-01' },
  'GET /trans-02/:token':   { action: 'portfolio-transaction/transaction-token-02' },
  'POST /trans-03':         { action: 'portfolio-transaction/transaction-amount-03' },


  //Portfolio routes
  // TODO portfolio route not working
  'GET /portfolio' :        { action: 'portfolio/view-portfolio-overview' },
  'GET /create-portfolio':  { action: 'portfolio/view-create-portfolio' },
  'POST /create-portfolio': { action: 'portfolio/create'},
  'POST /portfolio/searchToken': { action: 'portfolio/find-by-name' },



  //Token routes
  'GET /create-or-update-token': { action: 'token/insert-or-update' },
  'POST /token/name': { action: 'token/find-by-name' },


  //Routes to dynamic pages
  // TODO livePrices route not working
  'GET /livePrices': { action: 'token/find-all' },
  'GET /live-messages': { action: 'live-messages/view-live-messages' },
  'GET /pie-chart': { action: 'pie-chart/view-pie-chart' },

  //Routes to watchlist
  'GET /create-watchlist': { action: 'watchlist/view-create-watchlist' },
  'POST /watchlist/create-watchlist': { action: 'watchlist/create-watchlist'},
  'GET /watchlist/all': { action: 'watchlist/find-all'},
  'GET /watchlist/add' : { action: 'watchlist/display-token-with-add-button'},
  'GET /watchlist': { action: 'watchlist/find-all'},
  'GET /watchlist/add-token/:tokenId': { action: 'watchlist/add-token' },
  'GET /watchlist/remove-token/:tokenId' : { action: 'watchlist/remove-token' },
  'POST /watchlist/SearchToken/' : { action: 'watchlist/find-by-name' },

  //Routes to leaderboard
  'GET /leaderboard': { action: 'leaderboard/view-leaderboard' },
  'GET /leaderboard/table': { action: 'leaderboard/table' },

  //Routes to email-messages
  'POST /e-mail-messages/create': { action: 'e-mail-messages/create' },
  'GET /e-mail-messages': { action: 'e-mail-messages/view-index-e-mail-message' },


  //Routes to Address
  'POST /address/create': { action: 'address/create' },


  //Routes to Admin Area
  'GET /admin/user-table': { action: 'admin/user-table-admin-area' },
  'GET /admin/view': { action: 'admin/view-admin-area' },
  'GET /admin/delete-user/:userId': { action: 'admin/delete-user' },
  'POST /admin/user-find-by-name': { action: 'admin/user-find-by-name' },


  //Routes to static pages
  'GET /our-team': { action: 'static-pages/view-our-team' },


};
