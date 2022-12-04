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
    // eslint-disable-next-line no-undef
    const tokenAndAmount = new Map();


    for ( const transaction of inputs.transactions ) {
      let tokenData = await Token.findOne( { id: transaction.token })

      if (!tokenAndAmount.has(tokenData)) {
        tokenAndAmount.set(tokenData, 0);
      }
      tokenAndAmount.set(tokenData, tokenAndAmount.get(transaction.token) + transaction.amount);
    }

    return Array
        .from(tokenAndAmount)
        .map(([tokenData, amount]) => ({ tokenData, amount, value: tokenData.price * amount}));
  }

};

