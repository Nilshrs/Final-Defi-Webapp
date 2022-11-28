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


  fn: async function (inputs) {

    // Get portfolio value.
    var portfolioValue;

    inputs.transactions.forEach( async (transaction) => {
      let token = await Token.findOne( {  id: token  } )
      portfolioValue += transaction.amount * token.price
    })
    // Send back the result through the success exit.
    return portfolioValue;
  }


};

