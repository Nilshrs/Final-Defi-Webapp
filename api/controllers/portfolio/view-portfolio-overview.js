module.exports = {


  friendlyName: 'View portfolio overview',


  description: 'Display "Portfolio overview" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/portfolio/portfolio-overview'
    }

  },


  fn: async function () {
    // eslint-disable-next-line no-undef
    const portfolio = await Portfolio.findOne({ owner: this.req.session.userId });
    //if this user does not have a portfolio let him create one
    if(!portfolio){ return this.res.view('pages/portfolio/create-portfolio'); }
    // eslint-disable-next-line no-undef
    const transactions = await PortfolioTransaction.find( { portfolio: portfolio.id } );
    const tokenData = await sails.helpers.getTokenAndAmount.with( { transactions } );
    const portfolioValue =  await sails.helpers.getPortfolioValue.with( { transactions });
    return { tokenData, portfolioValue };
  }
};
