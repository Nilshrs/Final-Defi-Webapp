module.exports = {


  friendlyName: 'Create',


  description: 'Create portfolio.',


  inputs: {

    name: { type: 'string', allowNull: false, required: true },

  },


  exits: {

    success: {
      description: 'created new portfolio'
      //viewTemplatePath: 'pages/portfolio/index',
    }

  },


  fn: async function ( { name } ) {

    let userId = this.req.session.userId
    // get all userdata with this.req.me

    await Portfolio.create( { name, owner: userId })
    
    // All done.
    return;

  }


};
