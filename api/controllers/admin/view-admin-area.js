module.exports = {


  friendlyName: 'View admin area',


  description: 'Display "Admin area" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/view-admin-area.ejs'
    }

  },


  fn: async function () {


    const user = await User.findOne( { id: this.req.session.userId } )

    sails.log(user.fullName)
    // Respond with view.
    return { userName: user.fullName };

  }


};
