module.exports = {


  friendlyName: '03 transaction amount',


  description: '',


  inputs: {
    amount: { type: 'number', required: true }
  },


  exits: {

    success: {
      responseType: 'redirect',
      description: 'redirect to view portfolio'
    },
    tokenAmountNegative: {
      responseType: 'redirect',
      description: 'redirect to trans 2'
    },
  },

  fn: async function ( { amount } ) {

    const trans = this.req.session.trans;
    const tokenId = trans.tokenData.id;


    //check on the server side if total amount would be negative, if yes put something in the msg so an alert is shown on the view
    if( (trans.amountInPortfolio + amount) < 0 ) {
      console.log('==> Error, Token amount in portfolio would be negative, not allowed');
      this.req.session.message = 'Error total amount in portfolio cant be negative';
      throw { tokenAmountNegative: `/trans-02/${tokenId}` };
    }

    //reset msg so no alert will be shown
    this.req.session.message = 0;

    //Create the transaction:
    // eslint-disable-next-line no-undef
    await PortfolioTransaction.create({
      portfolio: trans.portfolioId,
      token: tokenId,
      amount: amount,
      value: trans.tokenData.price * amount
    });

    return ('/portfolio');
  }
};
