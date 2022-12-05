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

    const record  = await Token.create({
      name: inputs.name,
      type: inputs.type,
      symbol: inputs.symbol,
      currency: inputs.currency,
      price: inputs.price
    }).fetch();

    if ( record.length === 0 ) {
      throw {invalid: {error:  'Failed to create Token '}};
    } else { console.log( 'It worked ' + record.data );}

    return record;
  }

};
