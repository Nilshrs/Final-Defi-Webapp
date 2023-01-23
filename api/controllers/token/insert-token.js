const {request} = require('sails/lib/app/configuration/default-hooks');

module.exports = {


  friendlyName: 'Insert token',


  description: '',


  inputs: {

    type: { type: 'string',  required: false, isIn: ['stock', 'crypto', 'etf', 'commodity'] },

    name: { type: 'string', required: true },

    symbol: { type: 'string', required: true},

    currency: { type: 'string', required: true },

    price: { type: 'number', required: true },

  },

  exits: {

  },


  fn: async function(inputs) {

    console.log('Token with value ' + inputs + ' will be inserted');

    // eslint-disable-next-line no-undef
    const createdToken  = await Token.create({
      name: inputs.name,
      type: inputs.type,
      symbol: inputs.symbol,
      currency: inputs.currency,
      price: inputs.price
    }).fetch();

    if (!createdToken) {
      throw {invalid: {error:  'Failed to create Token '}};

    } else { console.log( 'It worked ' + createdToken.data );}

    return createdToken;
  }

};
