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

    this.req.session.type = type;

    //return await Token.find( { type: this.session.trans.type } );
    //TODO change that
    const tokens = await Token.find(  );
    console.log(tokens)
    return { tokens }

  }


};
