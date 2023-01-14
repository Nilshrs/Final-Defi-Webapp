module.exports = {


  friendlyName: 'Find by name',


  description: 'Find token by name',


  inputs: {

    name : { type: 'string', required: true }

  },


  exits: {

  },


  fn: async function (inputs) {

    console.log('Trying to find token by name ' + inputs.name);
    // All done.

    // eslint-disable-next-line no-undef
    const tokens = await Token.find( { name: { startsWith: inputs.name }  } );

    if(tokens.length === 0){
      this.res.redirect('/livePrices');
      return;
    }

    //TODO make this the success exit
    this.res.view('pages/livePrices/index', { tokens: tokens });
  }
};
