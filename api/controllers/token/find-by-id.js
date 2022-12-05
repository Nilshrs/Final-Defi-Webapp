module.exports = {


  friendlyName: 'Find by id',


  description: '',


  inputs: {

    id: { type: 'number', required: true }

  },


  exits: {

  },


  fn: async function (inputs) {

    console.log('Trying to find token with symbol ' + inputs.id);

    const token = await Token.findOne( { id : inputs.id } );

    if(token.length === 0){
      throw {invalid: {error: 'Token does not exist' } };
    }

    return token;


  }


};
