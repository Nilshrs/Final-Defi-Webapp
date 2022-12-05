module.exports = {


  friendlyName: 'find all',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function () {


    console.log('Trying to find  all token in all watchlists ');

    const watchlistItems = await WatchList.find( {  } );

    /*
    if( watchlistItems.length === 0 ) {
      this.res.view('pages/watchlist/all-Items');
    } else {
     */
      let tokenData = [];

      for (const watchlist of watchlistItems) {
        let token = await Token.findOne( { id: watchlist.token });
        tokenData.push(token);
      }
      this.res.view('pages/watchlist/all-Items', { tokenData: tokenData });
    }
};
