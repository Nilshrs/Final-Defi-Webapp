module.exports = {


  friendlyName: 'Create',


  description: 'Create portfolio.',


  inputs: {

    name: { type: 'string', allowNull: false, required: true }

  },


  exits: {

    success: {
      description: 'created new portfolio',
      responseType: 'redirect',
    },
  },


  fn: async function ( { name } ) {
    // eslint-disable-next-line no-undef
    const portfolio  = await Portfolio.create( { name, owner: this.req.session.userId }).fetch();
    if(portfolio){
      console.log('Successfully created portfolio=' + portfolio);
    }else {
      console.log('SHIT');
    }
    //return with route
    return ('/trans');
  }
};
