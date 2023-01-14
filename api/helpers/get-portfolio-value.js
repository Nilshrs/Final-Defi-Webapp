module.exports = {


  friendlyName: 'Calculate portfolio value',


  description: 'Calculates the current value of a portfolio based on the transactions.',


  inputs: {

    // Transactions array used to calculate the portfolio value
    transactions: { type: 'json', required: true }

  },


  exits: {

    success: {
      description: 'Calculated portfolio value',
    },

  },


  fn: async function ( { transactions }) {

    // Initialize variable to hold the portfolio value
    let portfolioValue = 0;

    // Iterate over the transactions array
    for( const transaction of transactions ) {
      // Find the token associated with the transaction
      // eslint-disable-next-line no-undef
      let token = await Token.findOne( { id: transaction.token } );

      // add transaction value to portfolio value
      portfolioValue += transaction.amount * token.price;
    }
    // Send back the result through the success exit.
    return portfolioValue;
  }


};
