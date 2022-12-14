module.exports = {


  friendlyName: '02 transaction token',


  description: '',


  inputs: {

    token: { type: 'number', required: true }

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/portfolio/trans03.ejs'
    }

  },


  fn: async function ( { token } ) {

    // eslint-disable-next-line no-undef
    const tokenData = await Token.findOne( {id: token });
    this.req.session.trans['tokenData'] = tokenData;

    const portfolio = await Portfolio.findOne( {owner : this.req.session.userId} );
    const transactions = await PortfolioTransaction.find( { portfolio: portfolio.id, token} );

    const tokenType = this.req.session.trans.type;

    if(transactions[0]){
      const transData= await sails.helpers.getTokenAndAmount.with( { transactions } );
      return { transData, tokenData, tokenType};
    }

    return { tokenData, transData: 0, tokenType };



    //let result= portfolioTokenData.filter(obj => obj.id === token);

    //console.log(result.at(0).amount);



    //console.log(this.req.session);




  }


};
