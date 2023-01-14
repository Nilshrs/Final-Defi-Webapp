module.exports.cron = {
  updateOrCrateTokenJob: {
    // runs every 15 min
    schedule: '*/1 * * * *',
    onTick: async function () {
      console.log('Cron Job:  Token update or replace runs every 15 min');
      const got = require('got');

      //needed because of production / local environment
      const baseUrl = this.config.custom.baseUrl;
      const createOrUpdateUri = '/create-or-update-token';
      const uriUpdateOrCreateAction = baseUrl + createOrUpdateUri;

      try {
        await got.get(uriUpdateOrCreateAction);
      }catch (error){
        console.log({error});
      }
    }
  }


};
