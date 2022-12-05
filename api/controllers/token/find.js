module.exports = {

  friendlyName: 'Find',

  description: 'Find token.',

  inputs: {

    symbol: { type: 'string', required: true}

  },

  exits: {

  },


  fn: async function (inputs) {

    console.log('Trying to find token with symbol ' + inputs.symbol);

    const token = await Token.findOne( { symbol : inputs.symbol } );

    if(typeof token === 'undefined'){
      console.log('Token does not exist');
      return undefined;
    }else {
      return token;
    }

      // as as ===where: {id: inputs.tokenId}



  }


};
