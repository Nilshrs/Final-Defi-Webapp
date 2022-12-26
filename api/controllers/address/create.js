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

  fn: async function ( { street, plz, town, country }) {
    const userHasAddress= await Address.find( { owner: this.session.userId } );
    if(userHasAddress) { throw {error: 'only one address per user allowed'}};

    const newAddress = await Address.create(
      { owner: this.session.userId,
        street,
        plz,
        town,
        country
      }
    ).fetch();
    if(!newAddress) { throw {error: 'failed to create address'} }
    return;

  }
};
