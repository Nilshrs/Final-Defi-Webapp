module.exports = {


  friendlyName: 'Remove token',

  description: '',

  inputs: {

    tokenId : { type: 'number', required: true}

  },


  exits: {
    success: {
      responseType: 'redirect'
    },

    notFound: {
      description: 'No Token with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },


  fn: async function ( { tokenId } ) {
    console.log('Trying to delete token from watchlist with id ' + tokenId );

    // eslint-disable-next-line no-undef
    const watchlist = await WatchList.findOne( { owner: this.req.session.userId });

    // eslint-disable-next-line no-undef
    const deletedTokenWatchlistPair =  await WatchList.removeFromCollection(watchlist.id, 'tokens', tokenId );

    console.log(deletedTokenWatchlistPair)

    if(deletedTokenWatchlistPair) {
      console.log('Oh error');
      console.log(deletedTokenWatchlistPair);
      throw { notFound: { error: 'Record does not exist' } };
    }

    return('/watchlist');
  }
};
