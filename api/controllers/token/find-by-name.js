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
    const tokens = await Token.find( { name: inputs.name } );


    if(tokens.length === 0){
      this.res.redirect('/livePrices');
      return;
    }

    this.res.view('pages/livePrices/index', { tokens: tokens });
  }
};
