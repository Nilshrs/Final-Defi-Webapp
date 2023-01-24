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

    // SuperAdmin = Admin, so admins cannot delete other admins and superAdmins
    if(!admin.isSuperAdmin && userToBeDeleted.isAdmin){
      throw { redirect: 'back' };
    }


    //TODO delete also all the corresponding portfolios/ watchlist and token trans (because cascadeOnDestroy doesent work,)

    const deletedUser =  await User.destroyOne({id: userId}).fetch();

    //Just a check if the deletion worked
    if (!deletedUser) {
      throw{ error: 'failed to delete user' };
    }
    console.log('Deleted user: ',deletedUser.fullName );

    return 'back';
  }


};
