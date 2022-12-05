module.exports = {


  friendlyName: 'Remove token',


  description: '',


  inputs: {

    tokenId : { type: 'number', required: true}

  },


  exits: {

    notFound: {
      description: 'No Token with the specified ID was found in the database.',
      responseType: 'notFound'
    }

  },


  fn: async function (inputs) {

    console.log(inputs);
    console.log('Trying to delete token from watchlist with id ' + inputs.tokenId );

    //const token = await Token.findOne({id: inputs.tokenId});

    //console.log(token);

    const record = await WatchList.destroy( { token: inputs.tokenId } ).fetch();

    if( record.length === 0) {
      throw { invalid: { error: 'Record does not exist' } };
    }
    this.res.redirect('/watchlist');
  }


};
