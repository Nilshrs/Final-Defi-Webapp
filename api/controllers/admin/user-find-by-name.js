module.exports = {


  friendlyName: 'User find by name',


  description: 'Finds a user by Name',


  inputs: {
    namePrefix: { type: 'string', required: true}
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/admin/user-table-admin-area.ejs'
    },
    redirect: {
      responseType: 'redirect',
      description: 'if user is not found then redirect to previous page'
    }
  },


  fn: async function ( { namePrefix } ) {

    console.log('Trying to find user by name' + namePrefix);

    const userData = await User.find( { fullName: { startsWith: namePrefix } } );

    if(userData.length === 0){
      sails.log('No user with specified name/letter ' + namePrefix + ' found');
      throw { redirect: 'back' };
    }

    const user = await User.findOne({id: this.req.session.userId});


    return { userData, admin: user };

  }


};
