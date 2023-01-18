module.exports = {


  friendlyName: 'Delete user',


  description: 'Deletes a user',


  inputs: {

    userId: { type: 'number', required: true}

  },


  exits: {
    success: {
      //TODO test if still works there shold be no viewTemplatePath
      //viewTemplatePath: 'pages/admin/view-admin-area',
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


    //TODO better error message
    //Check if user exists
    if(!userToBeDeleted){
      throw { error: 'could not find user to be deleted'};
    }

    // SuperAdmin = Admin, so admins cannot delete other admins and superAdmins
    if(!admin.isSuperAdmin && userToBeDeleted.isAdmin){
      throw { redirect: 'back' };
    }


    //TODO delete also all the corresponding portfolios/ watchlist and token trans (because cascadeOnDestroy doesent work,)

    //TODO change to display error or redirect to error site
    //TODO check if need for fetch
    const deletedUser =  await User.destroyOne({id: userId});

    //Just a check if the deletion worked
    if (!deletedUser) {
      throw{ error: 'failed to delete user' };
    }

    return 'back';
  }


};
