module.exports = {


  friendlyName: 'Find all',


  description: '',


  inputs: {

  },

  exits: {

  },


  fn: async function () {

    console.log('Trying to find tokens');


    // eslint-disable-next-line no-undef
    const tokens = await Token.find(  );

    if( tokens.length === 0 ) {
      throw { invalid: {error: 'No token found' } };
    }
    //TODO make this the success exit
    this.res.view('pages/livePrices/allToken', { tokens: tokens });
  }


};
