module.exports = {


  friendlyName: 'Add token',


  description: '',


  inputs: {

    tokenId: { type: 'number', required: true }

  },

  exits: {

  },


  fn: async function (inputs) {

    //TODO do with name that the user created
    const record = await  WatchList.create( {
      token: inputs.tokenId,
      name: 'Test Watchlist'
    }).fetch();

    console.log(record);


    if( record.length === 0 ){
      throw { invalid: { error: ' Failed adding token to watchlist ' } };
    } else {
      console.log(' Added token' +  ' to watchlist ');
    }

    this.res.redirect('/watchlist');

    //this.res.view('pages/watchlist/all-Items');
  }
};
