const {error} = require("sails-hook-orm/lib/datastore-method-utils/help-send-native-query");
module.exports = {


  friendlyName: '03 transaction amount',


  description: '',


  inputs: {
    amount: { type: 'number', required: true }
  },


  exits: {

    //TODO change to next page
    success: {
      viewTemplatePath: 'pages/portfolio/index.ejs'
    }

  },


  fn: async function ( { amount } ) {

    let session = this.req.session;
    let transactions = PortfolioTransaction.find( {owner: session.userId, token: session.trans.token} )
    let tokenAndAmount = new Map();

    for ( const transaction of transactions ) {
      let tokenData = await Token.findOne( { id: transaction.token })

      if (!tokenAndAmount.has(tokenData)) {
        tokenAndAmount.set(tokenData.id, 0);
      }
      tokenAndAmount.set(tokenData.id, tokenAndAmount.get(transaction.token) + transaction.amount);
    }
    let amountOfSelectedToken = tokenAndAmount(session.trans.token)

    if(amountOfSelectedToken - amount < 0) return "is in minus"
    else {

      //TODO change code only quick fix
      let userId = session.userId;
      let price = Token.findOne( { id: session.trans.token } ).price

      let portfolio = Portfolio.findOne( { owner: userId } )
      const promise = await PortfolioTransaction.create( {
        portfolio,
        token: session.trans.token,
        amount: session.trans.amount,
        price

      } ).fetch()

      if(promise.length === 0) throw error
    }





    //





    this.session.trans.amount;


  }


};
