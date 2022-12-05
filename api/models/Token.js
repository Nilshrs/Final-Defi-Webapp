/**
 * Token.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    type: { type: 'string',  required: false, isIn: ['stock', 'crypto', 'etf', 'commodity'] },

    name: { type: 'string', required: true },

    symbol: { type: 'string', required: true},

    currency: { type: 'string', required: true },

    price: { type: 'number', required: true },

    //data: { type: 'json', allowNull: false, required: true },

    //watchlists: { model: 'watchlist', via: 'tokens' }


  },

};

