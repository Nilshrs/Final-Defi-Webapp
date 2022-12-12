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
    const tokens = await Token.find( { name: { startsWith: inputs.name } } );

    if(tokens.length === 0){
      this.res.redirect('/watchlist/add');
      return;
    }

    this.res.view('pages/watchlist/SearchToken', { tokens: tokens });
  }
};
