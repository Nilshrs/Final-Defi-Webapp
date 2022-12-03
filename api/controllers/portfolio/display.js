module.exports = {


  friendlyName: 'Display',


  description: 'Display portfolio.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/portfolio/index.ejs'
    }

  },


  fn: async function () {

    const userId = this.req.session.userId;
    const transactions = await PortfolioTransaction.find( { owner: userId } )
    // returns a array with objects consisting of token data and the value in the portfolio
    const token = await sails.helpers.getTokenAndValue.with( { transactions } );
    const portfolioValue =  await sails.helpers.getPortfolioAmount.with( { transactions });

    return { token, portfolioValue }

  }



};
