
module.exports = {


  friendlyName: 'Delete',


  description: 'Delete token.',


  inputs: {
    tokenId: { type: 'string', required: true}
  },


  exits: {
    invalid: {
      description: 'This was an invalid token to delete'}
  },


  fn: async function (inputs) {

    //TODO can be deletet i think or only for free for admins in an manage token area ...

    console.log(inputs);
    console.log('Trying to deleate token with id ' + inputs.tokenId );

    // eslint-disable-next-line no-undef
    const record  = await Token.destroy({id: inputs.tokenId}).fetch();

    if( record.length === 0) {
      throw {invalid: {eroor: 'Record does not exist' } };
    }
    // All done.
    return record;
  }


};
