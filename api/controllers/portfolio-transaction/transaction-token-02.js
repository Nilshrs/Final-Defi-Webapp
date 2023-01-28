module.exports = {


  friendlyName: '02 transaction token',


  description: 'Second step, action to look if portfolio has already some transactions with the selected token,' +
      ' if yes: return the amount of the selected portfolio for validation ',


  inputs: {

    token: {type: 'number', required: true}

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/portfolio/trans03.ejs'
    }

  },


  fn: async function ({token}) {

    const tokenType = this.req.session.trans.type;
    this.req.session.trans.amountInPortfolio = 0;

    //flush msg, needed for error message in trans 03, because of dire ct access from portfolio token (±-Button)
    this.req.session.message = 0;

    // eslint-disable-next-line no-undef
    const tokenData = await Token.findOne({id: token});
    if(!tokenData) {
      throw { error: 'token not found' };
    }
    this.req.session.trans['tokenData'] = tokenData;
    // eslint-disable-next-line no-undef
    const portfolio = await Portfolio.findOne({owner: this.req.session.userId});

    //needed later for trans creation
    this.req.session.trans.portfolioId = portfolio.id;

    // eslint-disable-next-line no-undef
    const transactions = await PortfolioTransaction.find({portfolio: portfolio.id, token});

    // if user has no previous transaction with the selected token, return empty token data
    if (!transactions[0]) {
      return {tokenData, transData: 0, tokenType};
    }

    //find all the transaction data and send it to the view for form validation
    const transData = await sails.helpers.getTokenAndAmount.with({transactions});

    //save it also in the session for server side validation in trans 03
    this.req.session.trans.amountInPortfolio = transData[0].amount;

    return {transData, tokenData, tokenType};
  }
};
