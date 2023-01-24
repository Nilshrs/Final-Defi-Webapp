module.exports = {


  friendlyName: 'find all',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/watchlist/watchlist'
    },
    redirect: {
      responseType: 'redirect',
      description: 'Requesting user has not create a watchlist, redirect to create watchlist'
    },

  },


  fn: async function () {


    //eslint-disable-next-line no-undef
    const watchlist = await WatchList.findOne( { owner: this.req.session.userId} ).populate('tokens');

    if(!watchlist){
      console.log('User has no watchlist');
      throw { redirect: '/create-watchlist' };
    }

    return({ tokenData: watchlist.tokens, watchlistName: watchlist.name} );
    }
};
