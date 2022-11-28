module.exports = {


  friendlyName: 'Get token and value',


  description: '',


  inputs: {

    transactions : { type: 'json' }

  },

  exits: {

    success: {
      outputFriendlyName: 'Token and value',
    },

  },


  fn: async function (inputs) {

    // Get token and value.
    const tokenAndValue = new Map();

    for ( const transaction of inputs.transactions ) {
      let tokenData = await Token.findOne( { id: transaction.token })

      if (!tokenAndValue.has(tokenData)) {
        tokenAndValue.set(tokenData, 0);
      }
      tokenAndValue.set(tokenData, tokenAndValue.get(transaction.token) + transaction.amount);
    }

   let tokenData = Array.from(tokenAndValue).map(([key, value]) => ({ token: key, amount:value }));

    //TODO move that in the row above...
    tokenData.forEach( (e) =>  {
      e.token.valueInUsd = e.token.price * e.amount
    })

    return tokenData;
  }

};

