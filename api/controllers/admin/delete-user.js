module.exports = {


  friendlyName: 'Delete user',


  description: 'Deletes a user',


  inputs: {

    userId: {type: 'number', required: true}

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/admin/view-admin-area',
      responseType: 'redirect'
    },

    notFound: {
      description: 'No User with specified ID found',
      responseType: 'notFound'
    }
  },


  fn: async function ({userId}) {


    console.log("Trying to find user by ID")

    //checks users for admin status
    const isAdmin = await User.findOne({id: userId})

    //If the deleted user is an admin itself, he can't be deleted by other admins but (Nils und Elias)
    if (isAdmin.isSuperAdmin === true) {
      return this.res.redirect('back');
    } else {
      const userData = await User.destroyOne({id: userId});

      //just a check for me, if the controller works properly
      if (userData) {
        sails.log('Deleted user with `id: 4`.');
      } else {
        sails.log('The database does not have a user with `id: ' + userId);
      }
    }

    return this.res.redirect('back');


  }


};
