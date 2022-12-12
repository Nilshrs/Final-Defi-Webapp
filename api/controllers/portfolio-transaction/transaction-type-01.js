module.exports = {


  friendlyName: '01 transaction type',


  description: '',


  inputs: {

    type: { type: 'string', required: true }

  },

  exits: {
    success: {
      viewTemplatePath: 'pages/portfolio/trans02'
    }

  },


  fn: async function ( { type } ) {

    this.req.session.trans = {type};



    console.log(this.req.session);

    //this.req.session.trans.type = type;
    //return await Token.find( { type: this.session.trans.type } );

    //TODO change that to view only the token with the categorie
    // eslint-disable-next-line no-undef
    const tokens = await Token.find( { type } );
    return { tokens };
  }


};
