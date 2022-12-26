module.exports = {


  friendlyName: 'Table',


  description: 'Table leaderboard.',

  inputs: {

  },

  exits: {

  },

  fn: async function (inputs) {
    const userData = [];
    const portfolios = await Portfolio.find( {} );

    //finds all the Portfoliodata and the coresponding username and saves it into userData
    for (const portfolio of portfolios) {
      const user = await User.findOne( { id: portfolio.owner } );
      const transactions = await PortfolioTransaction.find( { portfolio: portfolio.id } );
      const tokenData = await sails.helpers.getTokenAndAmount.with( { transactions } );
      let portfolioValue =  await sails.helpers.getPortfolioValue.with( { transactions });
      portfolioValue = Number(portfolioValue.toFixed(2));

      userData.push( {
        username: user.fullName,
        portfolioData: tokenData,
        portfolioValue
      } );
    }

    //Sort userdata by profit in percent
    userData.sort((x, y) =>  y.portfolioData[0].totalProfitInPercent - x.portfolioData[0].totalProfitInPercent);

    // All done.
    return {userData};

  }


};
