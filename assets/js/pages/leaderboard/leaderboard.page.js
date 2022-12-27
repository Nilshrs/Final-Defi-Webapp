parasails.registerPage('leaderboard', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    sortedbyDCS: true,
    loading: true,
    leaderboardData: [],
    sortedData: [],
    //…
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  // hook to execute a function after the component's DOM has been mounted
  mounted: async function () {
    // Get data for table
    this.leaderboardData  = await this.getPortfolioData();
    //assign so it can be sorted
    this.sortedData = this.leaderboardData;
    //set loading to false so animation stops
    this.loading = false;
  },
  // hook in Vue.js is a lifecycle hook that is called after a component's data has been updated
  // and the DOM has been re-rendered to reflect the changes.
  updated: function (){
    //gets executed to table is loaded and DOM changed
    this.$nextTick(() => {
      this.changeSymbolFirstTableRow();
  });
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    //TODO does only work by the by totalProfitInPercent dont know why
    sortData: function (sortBy) {
      if (!this.sortedbyDCS) {
        this.sortedData.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
        this.sortedbyDCS = true;
      } else {
        this.sortedData.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
        this.sortedbyDCS = false;
      }
      this.changeSymbolFirstTableRow();
    },

    getPortfolioData: async function () {
      let portfolioData;
      await fetch('/leaderboard/table')
        .then(response => response.json())
        .then(data => {
          portfolioData = data.userData;
        });
      return portfolioData;
    },

    changeSymbolFirstTableRow: function () {
      const newSymbol = this.sortedbyDCS ? ['🏆', '🥈', '🥉'] : ['💩', this.sortedData.length -1 , this.sortedData.length - 2];
      const elements = document.querySelectorAll('.gold, .silver, .bronze');

      elements.forEach((element, index) => {
        element.textContent = newSymbol[index];
      });
    },

    //function to assign a class to the first three rows in the table
    rowClass(index) {
      return {
        gold: index === 0,
        silver: index === 1,
        bronze: index === 2
      };
    },

  }

});
