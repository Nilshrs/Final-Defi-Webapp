module.exports = {


  friendlyName: '01 transaction type',


  description: 'First set of transaction return token which have the selected type',


  inputs: {

    type: { type: 'string', required: true }

  },

  exits: {
    success: {
      viewTemplatePath: 'pages/portfolio/trans02'
    },
    redirect: {
      responseType: 'redirect',
      description: 'if type unknown redirect to start of transaction'
    }
  },


  fn: async function ( { type } ) {
    //find all token tokens with the type
    // eslint-disable-next-line no-undef
    const tokens = await Token.find( { type } );

    // if there are no token with the type redirect to start of trans
    if(tokens.length === 0){
      throw { redirect: '/trans' };
    }
    //save the type to the session and view trans2
    this.req.session.trans = {type};

    //flush msg, needed for error message in trans 03 ;
    this.req.session.message = 0;

    return { tokens, type };
  }



};
