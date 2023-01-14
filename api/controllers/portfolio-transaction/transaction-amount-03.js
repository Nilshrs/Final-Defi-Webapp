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
  },

  fn: async function ( { amount } ) {

    const session = this.req.session;
    const trans = this.req.session.trans;
    const tokenId = trans.tokenData.id;

    // eslint-disable-next-line no-undef
    const portfolio = await Portfolio.findOne({owner: session.userId});

    //TODO check if the selected token value would be negativ and if yes display a warning and let the user retry

    //TODO maybe some error handeling if create fails
    // eslint-disable-next-line no-undef
    await PortfolioTransaction.create({
      portfolio: portfolio.id,
      token: tokenId,
      amount: amount,
      value: trans.tokenData.price * amount
    }).fetch();

    return ('/portfolio');

    /*
       const transactions = await PortfolioTransaction.find({portfolio: portfolio.id, token: tokenId})
       console.log(transactions)


       let currentAmount = 0;
       for (const transaction of transactions) {
         currentAmount += transaction.amount

         if (currentAmount - amount < 0) return "is in minus"
         else {
           const promise = await PortfolioTransaction.create({
             portfolio: portfolio.id,
             token: tokenId,
             amount: amount,
             price: tokenPrice
           }).fetch()

           if (promise.length === 0) throw error
         }
       }*/

  }
};
