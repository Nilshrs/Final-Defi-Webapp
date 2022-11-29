module.exports = {


  friendlyName: 'Create',


  description: 'Create portfolio transaction.',


  inputs: {
    
    token: { type: 'number', required: true },
    value: { type: 'number', required: true }

  },


  exits: {

    success: {
      description: 'test'
      //viewTemplatePath: 'pages/portfolio/index',
    }

  },


  fn: async function ( {token, value} ) {

    let userId = this.req.session.userId;
    
    await Portfolio-Transaction.create( { owner: userId, token, value } )
    
    return;

  }


};
