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

    console.log(this.req.session);

    return { tokenData };



  }


};
