module.exports = {


  friendlyName: 'find all',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/watchlist/all-Items'
    },
    redirect: {
      responseType: 'redirect',
      description: 'Requesting user has not create a watchlist, redirect to create watchlist'
    },

  },


  fn: async function () {

    // eslint-disable-next-line no-undef
    const watchlist = await WatchList.findOne( { owner: this.req.session.userId} ).populate('tokens');

    console.log(watchlist);

    if(!watchlist){
      console.log('User has no watchlist');
      throw { redirect: '/create-watchlist' };
    }

    return({ tokenData: watchlist.tokens } );

    //const watchlistItems = await WatchList.find( {  } );

    /*
    if( watchlistItems.length === 0 ) {
      this.res.view('pages/watchlist/all-Items');
    } else {
     */
   /*   let tokenData = [];

      for (const watchlist of watchlistItems) {
        let token = await Token.findOne( { id: watchlist.token });
        tokenData.push(token);
      }
      this.res.view('pages/watchlist/all-Items', { tokenData: tokenData });*/
    }
};
