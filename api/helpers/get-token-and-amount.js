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
    const amountByTokenSymbol = new Map();
    const tokenData = [];

    for (const transaction of transactions) {
      // eslint-disable-next-line no-undef
      let token = await Token.findOne({id: transaction.token});
      if (!amountByTokenSymbol.has(token.symbol)) {
        amountByTokenSymbol.set(token.symbol, 0);
        tokenData.push(token);
      }
      amountByTokenSymbol.set(token.symbol, amountByTokenSymbol.get(token.symbol) + transaction.amount);
    }
    tokenData.forEach( token => {
      token['amount'] = amountByTokenSymbol.get(token.symbol);
      token['value'] = amountByTokenSymbol.get(token.symbol) * token.price;
    } );


    console.log(tokenData)

    return ( tokenData );
  }
};

