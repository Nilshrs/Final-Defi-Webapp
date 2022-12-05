module.exports = {


  friendlyName: 'token delete',


  description: '',


  inputs: {

    tokenId: { type: 'string', required: true}

  },


  exits: {

    invalid: {
    description: 'This was an invalid token to delete'}
  },


  fn: async function (inputs) {

    console.log(inputs);
    console.log('Trying to deleate token with id ' + inputs.tokenId );

    const record  = await Token.destroy({id: inputs.tokenId}).fetch();

    if( record.length === 0) {
      throw {invalid: {error: 'Record does not exist' } }
    }
    // All done.
    return record;

  }


};
