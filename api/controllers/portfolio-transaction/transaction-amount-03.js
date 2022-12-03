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
      viewTemplatePath: 'pages/portfolio/portfolio-overview.ejs'
    }

  },


  fn: async function ( { amount } ) {

    const session = this.req.session;
    const tokenId = session.token.id
    const tokenPrice = session.token.price

    const portfolio = Portfolio.findOne({owner: session.userId})
    const transactions = PortfolioTransaction.find({portfolio: portfolio.id, token: tokenId})

    let currentAmount = 0;

    for (const transaction of transactions) {
      currentAmount += transaction.amount

      if (currentAmount - amount < 0) return "is in minus"
      else {

        const promise = await PortfolioTransaction.create({
          portfolio: portfolio.id,
          token: tokenId,
          amount: amount,
          price: tokenPrice
        }).fetch()

        if (promise.length === 0) throw error
      }
    }
  }
}
