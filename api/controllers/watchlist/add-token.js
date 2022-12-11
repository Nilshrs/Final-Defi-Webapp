module.exports = {


  friendlyName: 'Add token',


  description: '',


  inputs: {

    tokenId: { type: 'number', required: true }

  },

  exits: {

    success: {
      responseType: 'redirect'
    }

  },


  fn: async function ( { tokenId } ) {


    // eslint-disable-next-line no-undef
    const watchlist = await WatchList.findOne( { owner: this.req.session.userId } );

    // eslint-disable-next-line no-undef
    const watchlistTokenPair = await WatchList.addToCollection(watchlist.id, 'tokens', tokenId);

    console.log(watchlistTokenPair);

    return ('/watchlist');
  }
};
