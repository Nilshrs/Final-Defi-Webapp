module.exports = {


  friendlyName: 'View admin area',


  description: 'Display "Admin area" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/user-table-admin-area'
    }

  },


  fn: async function () {

    //Gets the own UserId from Session
    const adminID = this.req.session.userId;

    const user = await User.findOne( {id: adminID} );

    //Creates an array of all users
    const userData = await User.find( {
      id: { '!=': adminID }
    });

    // Respond with view.
    return { userData, userName: user.fullName };

  }


};
