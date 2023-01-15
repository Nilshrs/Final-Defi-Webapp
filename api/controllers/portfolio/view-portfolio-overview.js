module.exports = {


  friendlyName: 'View portfolio overview',


  description: 'Display "Portfolio overview" page.',


  // Define the possible exits for this action
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
      console.log('To create portfolio page');
      throw { redirectToCreatePortfolio:'/create-portfolio' }; }

    //TODO put this in a helper funktion
    //Find all transactions associated with the user's portfolio
    // eslint-disable-next-line no-undef
    const transactions = await PortfolioTransaction.find( { portfolio: portfolio.id } );


    // if user has a portfolio but no transactions rediect to create a transaction
    if( transactions.length === 0 ){
      throw { redirectToCreateTrans: '/trans' };
    }


    //Call helper function to get token data
    const tokenData = await sails.helpers.getTokenAndAmount.with( { transactions } );
    // Call helper function to calculate the value of the portfolio
    let portfolioValue =  await sails.helpers.getPortfolioValue.with( { transactions });

    //TODO put this into the helper function
    portfolioValue = portfolioValue.toFixed(2);

    //return tokenData, portfolioValue to view portfolio-overview
    return { tokenData, portfolioValue };
  }
};
