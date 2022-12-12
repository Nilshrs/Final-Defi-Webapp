module.exports = {


  friendlyName: 'Find all',


  description: '',


  inputs: {

  },

  exits: {

  },


  fn: async function () {

    console.log('Trying to find tokens');

  //TODO change to load out of DB
    const tokens = await Token.find(  );

    if( tokens.length === 0 ) {
      throw { invalid: {error: 'No token found' } };
    }else {

      this.res.view('pages/livePrices/allToken', { tokens: tokens });
    }
  }


};
