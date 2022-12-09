module.exports = {


  friendlyName: 'Display token with add button',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/watchlist/addToWatchlist'
    },
    redirect: {
      responseType: 'redirect',
      description: 'Requesting user has not create a watchlist, redirect to create watchlist'
    },

  },


  fn: async function () {

    // eslint-disable-next-line no-undef
    const watchlist = await WatchList.findOne( { owner: this.req.session.userId} ).populate('tokens');

    const tokenAlreadyInWatchlist = [];
    watchlist.tokens.forEach( token => {
      tokenAlreadyInWatchlist.push(token.id);
    } );


    // eslint-disable-next-line no-undef
    const tokenData = await Token.find( {
      id: { '!=' : tokenAlreadyInWatchlist }
    } );

    return ( { tokenData } );






    /*if( tokenData.length === 0 ) {
      throw { invalid: {error: 'No token found' } };
    }else {
      this.res.view('pages/watchlist/addToWatchlist.ejs', { tokenData: tokenData });
    }*/



  }


};
