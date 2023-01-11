module.exports = {


  friendlyName: 'View admin area',


  description: 'Display "Admin area" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/view-admin-area'
    }

  },


  fn: async function () {

    const admin = await User.findOne( { id: this.req.session.userId } )
    // Respond with view.
    return { userName: admin.fullName };

  }


};
