module.exports = {


  friendlyName: 'Create',


  description: 'Create portfolio transaction.',


  inputs: {

    token: { type: 'number', required: true },
    amount: { type: 'number', required: true }

  },


  exits: {

    success: {
      description: 'test'
      //viewTemplatePath: 'pages/portfolio/index',
    }

  },

  //TODO this has to be a multipage transaction

  fn: async function ( {token, amount } ) {

    let userId = this.req.session.userId;

    //TODO check if .value works
    let tokenData = await Token.findOne( { id: token } )
    let value = tokenData.value

    await PortfolioTransaction.create( { owner: userId, token, amount, value } )


  }


};
