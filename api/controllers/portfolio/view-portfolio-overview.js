module.exports = {


  friendlyName: 'View portfolio overview',


  description: 'Display "Portfolio overview" page.',

  exits: {

    success: {
      viewTemplatePath: 'pages/portfolio/portfolio-overview'
    },
    redirectToCreatePortfolio: {
      responseType: 'redirect',
      description: 'Requesting user has no portfolio => redirect to create portfolio'
    },
    redirectToCreateTrans: {
      responseType: 'redirect',
      description: 'Requesting user has a portfolio with no transactions => redirect him to create trans'
    },

  },

  // The function that runs when this action is called
  fn: async function () {

    // Find the portfolio belonging to the currently logged-in user
    // eslint-disable-next-line no-undef
    const portfolio = await Portfolio.findOne({ owner: this.req.session.userId });

    //if this user does not have a portfolio let him create one
    if(!portfolio){
      console.log('==> To create portfolio page');
      throw { redirectToCreatePortfolio:'/create-portfolio' }; }

    //Find all transactions associated with the user's portfolio
    // eslint-disable-next-line no-undef
    const transactions = await PortfolioTransaction.find( { portfolio: portfolio.id } );

    if( transactions.length === 0 ){
      console.log('==> to make transaction');
      throw { redirectToCreateTrans: '/trans' };
    }

    const tokenData = await sails.helpers.getTokenAndAmount.with( { transactions } );
    let portfolioValue =  await sails.helpers.getPortfolioValue.with( { transactions });


    portfolioValue = Number(portfolioValue);

    // If portfolioValue is zero, user removed all token so let him first create a new transaction
    if( portfolioValue === 0.00 ){
      console.log('=> has no Token in portfolio');
      throw { redirectToCreateTrans: '/trans' };
    }

    return { tokenData, portfolioValue };
  }
};
