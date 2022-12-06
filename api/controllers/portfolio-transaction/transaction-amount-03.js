module.exports = {


  friendlyName: '03 transaction amount',


  description: '',


  inputs: {
    amount: { type: 'number', required: true }
  },


  exits: {

    success: {
      responseType: 'redirect',
      //viewTemplatePath: 'pages/portfolio/portfolio-overview.ejs'
    },
  },

  fn: async function ( { amount } ) {

    const session = this.req.session;
    const trans = this.req.session.trans;
    const tokenId = trans.tokenData.id;

    // eslint-disable-next-line no-undef
    const portfolio = await Portfolio.findOne({owner: session.userId});
    sails.log.debug('Portolfio:' + portfolio);
    sails.log.debug('UserID:' + session.userId);
    // eslint-disable-next-line no-undef
    const promise = await PortfolioTransaction.create({
      portfolio: portfolio.id,
      token: tokenId,
      amount: amount,
      value: trans.tokenData.price * amount
    }).fetch();

    console.log(promise);

    return ('/portfolio');


    //TODO check if the selected token value would be negativ and if yes display a warning and let the user retry
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
}
