module.exports = {


  friendlyName: 'Update',


  description: 'Update token.',


  inputs: {
    symbol: { type: 'string', required: true },
    price: { type: 'number', required: true }
  },


  exits: {

  },


  fn: async function (inputs) {

    // eslint-disable-next-line no-undef
    let updatedToken = await Token.updateOne( { symbol: inputs.symbol } ).set( { price: inputs.price });

    if(updatedToken) {
      console.log('Updated Token with Symbol' + inputs.symbol);
    }else{
      console.log('Could not find Token with symbol' + inputs.symbol + 'UPDATE FAILED' );
    }
  }


};
