module.exports = {


  friendlyName: 'Display',


  description: 'Display portfolio.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const userId = this.req.session.userId;
    const transactions = await Portfolio-Transaction.find( { owner: userId } )
    // retruns a array with objects consisting of token data and the value in the portfolio
    const token = await sails.helpers.getTokenAndValue.with({ transactions: transactions });
    const portflioValue =  await sails.helpers.getPortfolioAmount.with( { transactions: transactions });

    this.res.view(' pages/portfolio/index.ejs ',  { token, portflioValue } )
    
  }



};
