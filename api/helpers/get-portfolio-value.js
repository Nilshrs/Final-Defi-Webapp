module.exports = {


  friendlyName: 'Get portfolio value',


  description: '',


  inputs: {

    transactions: { type: 'json' }

  },


  exits: {

    success: {
      outputFriendlyName: 'Portfolio value',
    },

  },


  fn: async function ( { transactions }) {

    // Get portfolio value.
    let portfolioValue = 0;

    for( const transaction of transactions ) {
      let token = await Token.findOne( { id: transaction.token } )
      portfolioValue += transaction.amount * token.price
    }
    // Send back the result through the success exit.
    return portfolioValue;
  }


};

