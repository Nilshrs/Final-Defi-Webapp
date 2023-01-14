
module.exports = {


  friendlyName: 'Create',


  description: 'Create address.',


  inputs: {
    street: { type: 'string', required: true },
    plz: { type: 'string', required: true },
    town: { type: 'string', required: true },
    country: { type: 'string', required: true }
  },

  exits: {

  },

  //TODO maybe not needed stripe will handle it
  fn: async function ( { street, plz, town, country }) {

    // eslint-disable-next-line no-undef
    const userHasAddress= await Address.find( { owner: this.session.userId } );
    if(userHasAddress) { throw {error: 'only one address per user allowed'};}

    // eslint-disable-next-line no-undef
    const newAddress = await Address.create(
      { owner: this.session.userId,
        street,
        plz,
        town,
        country
      }
    ).fetch();
    if(!newAddress) { throw {error: 'failed to create address'}; }
  }
};
