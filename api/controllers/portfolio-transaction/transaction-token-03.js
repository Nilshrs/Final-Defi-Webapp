module.exports = {


  friendlyName: '02 transaction token',


  description: '',


  inputs: {

    token: { type: 'number', required: true }

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/portfolio/index.ejs'
    }

  },


  fn: async function ( { token } ) {

    /*let userId = this.req.session.userId;
    let portfolio = Portfolio.findOne( { owner: userId } )*/

    this.session.trans.token = token;


  }


};
