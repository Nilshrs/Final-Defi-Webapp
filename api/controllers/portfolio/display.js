module.exports = {


  friendlyName: 'Display',


  description: 'Display portfolio.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/portfolio/portfolio-overview',
    },
    redirect: {
      responseType: 'redirect',
      description: 'Requesting user '
    },

  },


  fn: async function () {

    //TODO i think this can be deletet
    //eslint-disable-next-line no-undef
    const transactions = await PortfolioTransaction.find( { owner: this.req.session.userId } );
    // returns a array with objects consisting of token data and the value in the portfolio
    const token = await sails.helpers.getTokenAndAmount.with( { transactions } );
    const portfolioValue =  await sails.helpers.getPortfolioAmount.with( { transactions });
    console.log('token'+token);
    console.log('p value'+portfolioValue);

    return {token, portfolioValue };

  }


};
