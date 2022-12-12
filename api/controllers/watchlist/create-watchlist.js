module.exports = {


  friendlyName: 'Create watchlist',


  description: '',


  inputs: {
    name: { type: 'string', required: true }

  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function ( { name } ) {


    // eslint-disable-next-line no-undef
    const watchlist = await WatchList.create( {
      owner: this.req.session.userId,
      name
    }).fetch();


    // todo maybe add some kind of error message to diesplay to the user
    if(!watchlist){
      console.log('Failed to create watchlist');
      return ('/welcome');
    }

    return ('/watchlist/add');

  }


};
