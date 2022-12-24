module.exports.cron = {
  myFirstJob: {
    schedule: '*/5 * * * *',
    onTick: async function () {
      console.log('Cron Job Token update or replace every 5 min');
      //console.log(`Also, sails object is available as this, e.g. ${this.config.environment}`);

      const got = require('got');
      const baseUrl = this.config.custom.baseUrl;
      const createOrUpdateUri = '/create-or-update-token';

      try {
        await got.post(
          baseUrl+createOrUpdateUri,
          { json: true } );
      }catch (e) {
        console.log(e.response.body);
      }
    }
  }


};
