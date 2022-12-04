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


  fn: async function ( {transactions} ) {

    // Get token and value.
    // eslint-disable-next-line no-undef
    const tokenAndAmount = new Map();

    for (const transaction of transactions) {
      // eslint-disable-next-line no-undef
      let tokenData = await Token.findOne({id: transaction.token});

      if (!tokenAndAmount.has(tokenData)) {
        tokenAndAmount.set(tokenData, 0);
      }
      tokenAndAmount.set(tokenData, tokenAndAmount.get(transaction.token) + transaction.amount);
    }
    // return an Array with Token like this{ symbol: "TSLA-USD, price: 55... , value: 555, amount: 10}
    return Array
      .from(tokenAndAmount)
      .map(([tokenData, amount]) => {
        // Use Object.assign() to merge the amount and value into the tokenData object
        return Object.assign({}, tokenData, {amount, value: tokenData.price * amount});
      });
  }
};

