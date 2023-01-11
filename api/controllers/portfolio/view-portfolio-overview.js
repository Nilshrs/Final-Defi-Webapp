module.exports = {


  friendlyName: 'View portfolio overview',


  description: 'Display "Portfolio overview" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/portfolio/portfolio-overview'
    },
    redirect: {
      responseType: 'redirect',
      description: 'Requesting user has no portfolio, so redirect to the create portfolio page'
    },

  },


  fn: async function () {

    // eslint-disable-next-line no-undef
    const portfolio = await Portfolio.findOne({ owner: this.req.session.userId });
    //if this user does not have a portfolio let him create one
    if(!portfolio){
      console.log('To create portfolio page');
      throw {redirect:'/create-portfolio'}; }

    //TODO put this in a helper funktion
    // eslint-disable-next-line no-undef
    const transactions = await PortfolioTransaction.find( { portfolio: portfolio.id } );

    // if user has a portfolio but no transactions rediect to create a transaction
    if( transactions.length === 0 ){
      console.log('user has porfolio but no transactions');
      throw { redirect: '/trans' };
    }

    const tokenData = await sails.helpers.getTokenAndAmount.with( { transactions } );
    let portfolioValue =  await sails.helpers.getPortfolioValue.with( { transactions });
    portfolioValue = portfolioValue.toFixed(2);

    console.log(tokenData);
    return { tokenData, portfolioValue };
  }
};
