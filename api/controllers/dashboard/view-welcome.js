module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      description: 'Display the welcome page for authenticated users.',
      viewTemplatePath: 'pages/dashboard/welcome'
    },
    adminSuccess: {
      description: 'Redirect to admin area for authenticated admins',
      redirect: '/admin-view'
    }
  },


  fn: async function () {

    const user = await User.findOne({id: this.req.session.userId});

    // TODO are all superAdmins also admins if yes do we need the super admin check ?
    if(this.req.me.isSuperAdmin || this.req.me.isAdmin){
      throw 'adminSuccess';
    }
    return { userName: user.fullName};

  }

};
