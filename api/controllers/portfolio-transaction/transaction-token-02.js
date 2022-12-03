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

    /*let userId = this.req.session.userId;
    let portfolio = Portfolio.findOne( { owner: userId } )*/

    const tokenData = await Token.findOne( {id: token });
    this.session.trans.token = tokenData;

    return {tokenData}



  }


};
