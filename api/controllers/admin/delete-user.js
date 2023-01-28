module.exports = {


  friendlyName: 'Delete user',


  description: 'Deletes a user',


  inputs: {

    userId: { type: 'number', required: true}

  },


  exits: {
    success: {
      description: 'redirect admin to admin dashboard',
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

    const admin = await User.findOne( { id: this.req.session.userId } );
    const userToBeDeleted = await User.findOne( { id: userId } );

    //Check if user exists
    if(!userToBeDeleted){
      throw { error: 'could not find user to be deleted'};
    }

    // Admins cannot delete other Admins, only SuperAdmins are allowed to do that
    if(!admin.isSuperAdmin && userToBeDeleted.isAdmin){
      throw { redirect: 'back' };
    }

    //Implemented cascading delete so every thing this user has created will be deleted too
    const deletedUser =  await User.destroyOne({id: userId});

    //Just a check if the deletion worked
    if (!deletedUser) {
      throw{ error: 'failed to delete user' };
    }
    console.log('Successfully deleted user with ID;: ' + deletedUser.id + ' Name: ',deletedUser.fullName );

    return 'back';
  }


};
