/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */

//Seed data set when database model is empty
module.exports.seeds = {
  user: [
    //Normal User:
    {
      createdAt: 1673707576233,
      updatedAt: 1674125577424,
      id: 100,
      emailAddress: 'test@gmail.com',
      password: 'test123',
      fullName: 'Normal_User',
      isSuperAdmin: 0,
      isAdmin: 0,
      lastSeenAt: 1674465507875
    },
    //Normal Admin User:
    {
      createdAt: 1673707576233,
      updatedAt: 1674125577424,
      id: 101,
      emailAddress: 'admin@gmail.com',
      password: 'admin123',
      fullName: 'Admin_User',
      isSuperAdmin: 0,
      isAdmin: 1,
      lastSeenAt: 1674465507875
    },
    //Super Admin:
    {
      createdAt: 1673707576233,
      updatedAt: 1674125577424,
      id: 100,
      emailAddress: 'superAdmin@gmail.com',
      password: 'superAdmin123',
      fullName: 'SuperAdmin',
      isSuperAdmin: 1,
      isAdmin: 1,
      lastSeenAt: 1674465507875
    },
  ],

  token: [
    {
      createdAt: 1673707576233,
      updatedAt: 1674125577424,
      id: 1000,
      type: 'stock',
      name: 'Test Token',
      symbol: 'TEST',
      currency: 'USD',
      price: 100.0000,
    }
  ],

  portfolio: [
    {
      createdAt: 1673707576233,
      updatedAt: 1674125577424,
      id: 1000,
      name: 'TestPortfolio',
      owner: 100
    }
  ],

  portfoliotransaction: [
    {
      createdAt: 1673707576233,
      updatedAt: 1674125577424,
      id: 1000,
      amount: 1,
      value: 100,
      portfolio: 100,
      token: 1000,
    }
  ],

};
