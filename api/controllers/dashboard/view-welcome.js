module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {

    const user = await User.findOne({id: this.req.session.userId});


    if(this.req.me.isSuperAdmin || this.req.me.isAdmin){
      this.res.redirect('/admin/view')
    }


    return { userName: user.fullName};

  }

};
