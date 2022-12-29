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
    },

    redirect: {
      responseType: 'redirect',
      description: 'if user cannot be deleted then redirect to previous page'
    }
  },


  fn: async function ({userId}) {


    console.log("Trying to find user by ID")

    const user = await User.findOne({id: this.req.session.userId});
    const userToBeDeleted = await User.findOne({id: userId});


    if(user.isSuperAdmin){
      const userData = await User.destroyOne({id: userId});

      //just a check for me, if the controller works properly
      if (userData) {
        sails.log('Deleted user with `id: 4`.');
      } else {
        sails.log('The database does not have a user with `id: ' + userId);
      }
    } else if(user.isAdmin){
      //If the deleted user is an admin itself, he can't be deleted by other admins but (Nils und Elias)
      if (userToBeDeleted.isAdmin === true || userToBeDeleted.isSuperAdmin) {
        console.log("Admins are not allowed to delete other admins/super-Admins")
        throw { redirect: 'back' };
      } else {
        const userData = await User.destroyOne({id: userId});

        //just a check for me, if the controller works properly
        if (userData) {
          sails.log('Deleted user with `id: 4`.');
        } else {
          sails.log('The database does not have a user with `id: ' + userId);
        }
      }
    }

    return this.res.redirect('back');

  }


};
