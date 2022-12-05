const {notIn} = require('sails-hook-orm/constants/deprecated-validations.list');
module.exports = {


  friendlyName: 'Display token with add button',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    console.log('Trying to find tokens');

    const tokenData = await Token.find( {} );


    if( tokenData.length === 0 ) {
      throw { invalid: {error: 'No token found' } };
    }else {
      this.res.view('pages/watchlist/addToWatchlist.ejs', { tokenData: tokenData });
    }



  }


};
