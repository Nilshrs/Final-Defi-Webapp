module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      description: 'Display the welcome page for authenticated users.',
      viewTemplatePath: 'pages/dashboard/welcome',
    },
    redirect: {
      description: 'Redirect to admin area for authenticated admins',
      responseType: 'redirect'
    }
  },


  fn: async function () {

    const user = await User.findOne({id: this.req.session.userId});

    if(this.req.me.isSuperAdmin || this.req.me.isAdmin){
      throw { redirect: 'admin/view'}
    }
    return { userName: user.fullName};

  }

};
