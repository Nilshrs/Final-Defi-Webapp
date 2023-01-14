module.exports = {


  friendlyName: '02 transaction token',


  description: '',


  inputs: {

    token: {type: 'number', required: true}

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/portfolio/trans03.ejs'
    }

  },


  fn: async function ({token}) {

    // eslint-disable-next-line no-undef
    const tokenData = await Token.findOne({id: token});
    //TODO check if empty if yes thow error
    this.req.session.trans['tokenData'] = tokenData;
    const tokenType = this.req.session.trans.type;

    // eslint-disable-next-line no-undef
    const portfolio = await Portfolio.findOne({owner: this.req.session.userId});
    // eslint-disable-next-line no-undef
    const transactions = await PortfolioTransaction.find({portfolio: portfolio.id, token});

    // if user has no previous transaction with the selected token, return empty token data
    if (!transactions[0]) {
      return {tokenData, transData: 0, tokenType};
    }

    //find all the transaction data and send it to the view for form validation
    const transData = await sails.helpers.getTokenAndAmount.with({transactions});
    return {transData, tokenData, tokenType};
  }
};
