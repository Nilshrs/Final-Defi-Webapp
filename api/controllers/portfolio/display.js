module.exports = {


  friendlyName: 'Display',


  description: 'Display portfolio.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/portfolio/index.ejs'
    },
    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is has no portfolio, so redirect to the create portfolio page'
    },

  },


  fn: async function () {

    const userId = this.req.session.userId;
    // eslint-disable-next-line no-undef
    const transactions = await PortfolioTransaction.find( { owner: userId } );
    // returns a array with objects consisting of token data and the value in the portfolio
    const token = await sails.helpers.getTokenAndAmount.with( { transactions } );
    const portfolioValue =  await sails.helpers.getPortfolioAmount.with( { transactions });
    return { token, portfolioValue }

  }



};
