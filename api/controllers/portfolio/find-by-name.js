module.exports = {


  friendlyName: 'Find by name',


  description: 'Find token by Name',


  inputs: {

    name: {type: 'string', required: true}

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/portfolio/trans02'
    },
    redirect: {
      responseType: 'redirect',
      description: 'if token is not of search type then redirect to previous page'
    }
  },


  fn: async function (inputs) {

    console.log("Trying to find token by name for portfolio " + inputs.name);

    const type = this.req.session.trans.type;

    // All done.
    const tokens = await Token.find( { name: { startsWith: inputs.name }, type } )


    if(tokens.length === 0){
      throw { redirect: 'back' }
    }

    return { tokens, type};

  }
};
