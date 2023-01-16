module.exports = {


  friendlyName: 'Table',


  description: 'Table leaderboard.',

  inputs: {

  },

  exits: {

  },

  // TODO is this coontroller relevant? @Elias   YES...
  fn: async function () {
    const userData = [];
    // eslint-disable-next-line no-undef
    const portfolios = await Portfolio.find( {} );

    //finds all the Portfoliodata and the corresponding username and saves it into userData
    for (const portfolio of portfolios) {
      const user = await User.findOne( { id: portfolio.owner } );
      // eslint-disable-next-line no-undef
      const transactions = await PortfolioTransaction.find( { portfolio: portfolio.id } );

      // Do not add this portfolio to the Leaderboard because it has no transactions
      if(transactions.length === 0){
        //continue with the next portfolio
        continue;
      }

      const tokenData = await sails.helpers.getTokenAndAmount.with( { transactions } );
      let portfolioValue =  await sails.helpers.getPortfolioValue.with( { transactions } );

      userData.push( {
        username: user.fullName,
        portfolioData: tokenData,
        portfolioValue
      } );
    }

    //Sort userdata by profit in percent
    userData.sort((x, y) =>  y.portfolioData[0].totalProfitInPercent - x.portfolioData[0].totalProfitInPercent);

    // All done.
    return { userData };

  }


};
