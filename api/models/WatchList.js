/**
 * WatchList.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


  attributes: {

    name: { type: 'string', allowNull: false, required: true },
    token: { model: 'token'},
    owner: { model: 'user' },
    tokens: {
      collection: 'token',
      via: 'watchlists'
    }



    //tokens: {  collection: 'token', via: 'watchlists' },
    //customer: { model: 'Customer' },


  },

};
