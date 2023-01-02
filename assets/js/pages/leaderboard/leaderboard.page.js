parasails.registerPage('leaderboard', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    sortedbyDCS: true,
    loading: true,
    leaderboardData: [],
    sortedData: [],

    //for testing purposes
    testData: [
      {
        'username': 'sdfsd',
        'portfolioData': [
          {
            'createdAt': 1671032895670,
            'updatedAt': 1672137900607,
            'id': 1,
            'type': 'stock',
            'name': 'TSLA',
            'symbol': 'TSLA-USD',
            'currency': 'USD',
            'price': 122.73,
            'amount': 5,
            'currentValue': 613.65,
            'profitInUSD': -136.86,
            'profitInPercent': -22.3,
            'totalProfit': -698.74,
            'totalProfitInPercent': -0.02
          },
          {
            'createdAt': 1671032897357,
            'updatedAt': 1672137903215,
            'id': 8,
            'type': 'stock',
            'name': 'AAPL',
            'symbol': 'AAPL-USD',
            'currency': 'USD',
            'price': 132.11,
            'amount': 5,
            'currentValue': 660.55,
            'profitInUSD': -69.95,
            'profitInPercent': -10.59
          },
          {
            'createdAt': 1671032906769,
            'updatedAt': 1672137907186,
            'id': 48,
            'type': 'etf',
            'name': 'URA',
            'symbol': 'URA-USD',
            'currency': 'USD',
            'price': 19.86,
            'amount': 14,
            'currentValue': 278.04,
            'profitInUSD': 1.26,
            'profitInPercent': 0.45
          },
          {
            'createdAt': 1671032896334,
            'updatedAt': 1672137902092,
            'id': 4,
            'type': 'stock',
            'name': 'FB',
            'symbol': 'FB-USD',
            'currency': 'USD',
            'price': 118.35,
            'amount': 135,
            'currentValue': 15977.25,
            'profitInUSD': -537.3,
            'profitInPercent': -3.36
          },
          {
            'createdAt': 1671032900426,
            'updatedAt': 1672137909368,
            'id': 21,
            'type': 'etf',
            'name': 'SPY',
            'symbol': 'SPY-USD',
            'currency': 'USD',
            'price': 383.66,
            'amount': 10,
            'currentValue': 3836.6,
            'profitInUSD': 20.5,
            'profitInPercent': 0.53
          },
          {
            'createdAt': 1671032925982,
            'updatedAt': 1672137943392,
            'id': 128,
            'type': 'crypto',
            'name': 'BTC',
            'symbol': 'BTC-USD',
            'currency': 'USD',
            'price': 16864.33,
            'amount': 1,
            'currentValue': 16864.33,
            'profitInUSD': 25.81,
            'profitInPercent': 0.15
          },
          {
            'createdAt': 1671032924439,
            'updatedAt': 1672137940966,
            'id': 121,
            'type': 'crypto',
            'name': 'EUO',
            'symbol': 'EUO-USD',
            'currency': 'USD',
            'price': 29.82,
            'amount': 44,
            'currentValue': 1312.08,
            'profitInUSD': -2.2,
            'profitInPercent': -0.17
          }
        ],
        'portfolioValue': 39542.5
      },
      {
        'username': 'sdf',
        'portfolioData': [
          {
            'createdAt': 1671032915802,
            'updatedAt': 1672137929890,
            'id': 85,
            'type': 'crypto',
            'name': 'T',
            'symbol': 'T-USD',
            'currency': 'USD',
            'price': 18.33,
            'amount': 1,
            'currentValue': 18.33,
            'profitInUSD': -0.57,
            'profitInPercent': -3.11,
            'totalProfit': -9.54,
            'totalProfitInPercent': -0.02
          },
          {
            'createdAt': 1671032895848,
            'updatedAt': 1672137900912,
            'id': 2,
            'type': 'stock',
            'name': 'GOOGL',
            'symbol': 'GOOGL-USD',
            'currency': 'USD',
            'price': 89.4,
            'amount': 2,
            'currentValue': 178.8,
            'profitInUSD': -10.62,
            'profitInPercent': -5.94
          },
          {
            'createdAt': 1671032904906,
            'updatedAt': 1672137924164,
            'id': 39,
            'type': 'commodity',
            'name': 'GOLD',
            'symbol': 'GOLD-USD',
            'currency': 'USD',
            'price': 17.44,
            'amount': 11,
            'currentValue': 191.84,
            'profitInUSD': 1.65,
            'profitInPercent': 0.86
          }
        ],
        'portfolioValue': 388.97
      },
      {
        'username': 'Markus Eiglsperger',
        'portfolioData': [
          {
            'createdAt': 1671032925548,
            'updatedAt': 1672137942574,
            'id': 126,
            'type': 'crypto',
            'name': 'ETH',
            'symbol': 'ETH-USD',
            'currency': 'USD',
            'price': 1221.94,
            'amount': 100,
            'currentValue': 122194,
            'profitInUSD': -4885,
            'profitInPercent': -4,
            'totalProfit': -10254.5,
            'totalProfitInPercent': -0.03
          },
          {
            'createdAt': 1671032897923,
            'updatedAt': 1672137903895,
            'id': 10,
            'type': 'stock',
            'name': 'UBER',
            'symbol': 'UBER-USD',
            'currency': 'USD',
            'price': 24.69,
            'amount': 50,
            'currentValue': 1234.5,
            'profitInUSD': -69.5,
            'profitInPercent': -5.63
          },
          {
            'createdAt': 1671032917657,
            'updatedAt': 1672137935493,
            'id': 93,
            'type': 'etf',
            'name': 'DAX',
            'symbol': 'DAX-USD',
            'currency': 'USD',
            'price': 25.6,
            'amount': 10000,
            'currentValue': 256000,
            'profitInUSD': -5300,
            'profitInPercent': -2.07
          }
        ],
        'portfolioValue': 379428.5
      },
      {
        'username': 'Der Stils',
        'portfolioData': [
          {
            'createdAt': 1671032925548,
            'updatedAt': 1672137942574,
            'id': 126,
            'type': 'crypto',
            'name': 'ETH',
            'symbol': 'ETH-USD',
            'currency': 'USD',
            'price': 1221.94,
            'amount': 20.2,
            'currentValue': 24683.19,
            'profitInUSD': -6206.97,
            'profitInPercent': -25.15,
            'totalProfit': -30485.18,
            'totalProfitInPercent': -0.09
          },
          {
            'createdAt': 1671032895670,
            'updatedAt': 1672137900607,
            'id': 1,
            'type': 'stock',
            'name': 'TSLA',
            'symbol': 'TSLA-USD',
            'currency': 'USD',
            'price': 122.73,
            'amount': 387.4,
            'currentValue': 47545.6,
            'profitInUSD': -13862.33,
            'profitInPercent': -29.16
          },
          {
            'createdAt': 1671032918229,
            'updatedAt': 1672137929672,
            'id': 96,
            'type': 'crypto',
            'name': 'TAN',
            'symbol': 'TAN-USD',
            'currency': 'USD',
            'price': 75.5,
            'amount': 15,
            'currentValue': 1132.5,
            'profitInUSD': -108.9,
            'profitInPercent': -9.62
          },
          {
            'createdAt': 1671032905288,
            'updatedAt': 1672137924691,
            'id': 41,
            'type': 'stock',
            'name': 'EBAY',
            'symbol': 'EBAY-USD',
            'currency': 'USD',
            'price': 40.26,
            'amount': 125.9,
            'currentValue': 5068.73,
            'profitInUSD': -441.91,
            'profitInPercent': -8.72
          },
          {
            'createdAt': 1671032925982,
            'updatedAt': 1672137943392,
            'id': 128,
            'type': 'crypto',
            'name': 'BTC',
            'symbol': 'BTC-USD',
            'currency': 'USD',
            'price': 16864.33,
            'amount': 13,
            'currentValue': 219236.29,
            'profitInUSD': -9759.07,
            'profitInPercent': -4.45
          },
          {
            'createdAt': 1671032906194,
            'updatedAt': 1672137925567,
            'id': 45,
            'type': 'stock',
            'name': 'BRK.B',
            'symbol': 'BRK.B-USD',
            'currency': 'USD',
            'price': 306.99,
            'amount': 35,
            'currentValue': 10744.65,
            'profitInUSD': -63,
            'profitInPercent': -0.59
          },
          {
            'createdAt': 1671032899970,
            'updatedAt': 1672137908439,
            'id': 19,
            'type': 'stock',
            'name': 'TLRY',
            'symbol': 'TLRY-USD',
            'currency': 'USD',
            'price': 2.8,
            'amount': 100,
            'currentValue': 280,
            'profitInUSD': -43,
            'profitInPercent': -15.36
          }
        ],
        'portfolioValue': 308690.96
      },
      {
        'username': 'Elias',
        'portfolioData': [
          {
            'createdAt': 1671032895670,
            'updatedAt': 1672137900607,
            'id': 1,
            'type': 'stock',
            'name': 'TSLA',
            'symbol': 'TSLA-USD',
            'currency': 'USD',
            'price': 122.73,
            'amount': 123.4,
            'currentValue': 15144.88,
            'profitInUSD': -4197.33,
            'profitInPercent': -27.71,
            'totalProfit': -10374.67,
            'totalProfitInPercent': -0.1
          },
          {
            'createdAt': 1671032925548,
            'updatedAt': 1672137942574,
            'id': 126,
            'type': 'crypto',
            'name': 'ETH',
            'symbol': 'ETH-USD',
            'currency': 'USD',
            'price': 1221.94,
            'amount': 25,
            'currentValue': 30548.5,
            'profitInUSD': -2926.5,
            'profitInPercent': -9.58
          },
          {
            'createdAt': 1671032925982,
            'updatedAt': 1672137943392,
            'id': 128,
            'type': 'crypto',
            'name': 'BTC',
            'symbol': 'BTC-USD',
            'currency': 'USD',
            'price': 16864.33,
            'amount': 2.5,
            'currentValue': 42160.83,
            'profitInUSD': -2997.3,
            'profitInPercent': -7.11
          },
          {
            'createdAt': 1671032909727,
            'updatedAt': 1672137912619,
            'id': 61,
            'type': 'etf',
            'name': 'QQQ',
            'symbol': 'QQQ-USD',
            'currency': 'USD',
            'price': 267.86,
            'amount': 11.11,
            'currentValue': 2975.92,
            'profitInUSD': -251.09,
            'profitInPercent': -8.44
          },
          {
            'createdAt': 1671032915802,
            'updatedAt': 1672137929890,
            'id': 85,
            'type': 'crypto',
            'name': 'T',
            'symbol': 'T-USD',
            'currency': 'USD',
            'price': 18.33,
            'amount': 4,
            'currentValue': 73.32,
            'profitInUSD': -2.5,
            'profitInPercent': -3.41
          },
          {
            'createdAt': 1671032904906,
            'updatedAt': 1672137924164,
            'id': 39,
            'type': 'commodity',
            'name': 'GOLD',
            'symbol': 'GOLD-USD',
            'currency': 'USD',
            'price': 17.44,
            'amount': 1,
            'currentValue': 17.44,
            'profitInUSD': -0.03,
            'profitInPercent': -0.17
          }
        ],
        'portfolioValue': 90920.89
      }
    ],
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
    /*
    //for testing
    this.leaderboardData = this.testData;
     */

    // Get data for table
    this.leaderboardData = await this.getPortfolioData();

    //assign so it can be sorted
    this.sortedData = this.leaderboardData;

    //set loading to false so animation stops
    this.loading = false;
  },
  // hook in Vue.js is a lifecycle hook that is called after a component's data has been updated
  // and the DOM has been re-rendered to reflect the changes.
  updated: function () {
    //gets executed to table is loaded and DOM changed
    this.$nextTick(() => {
      this.changeSymbolFirstTableRow();
    });
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    sortData: function (sortBy) {
      if (!this.sortedbyDCS) {
        // normally much easier, but because i saved the data at index 0 i it doest find it by property for example:  x[sortBy] - y[sortBy]  with sortBy = 'portfolioData[0].totalProfit' does not work bc it cant find the values
        // sort the array inplace descending by 'sortBy'
        this.sortedData.sort((x, y) =>
          (x.portfolioData.at(0)[sortBy] > y.portfolioData.at(0)[sortBy]
            ? -1 : 1)
        );
        this.sortedbyDCS = true;
      } else {
        // sort the array inplace ascending by 'sortBy'
        this.sortedData.sort((x, y) =>
          (x.portfolioData.at(0)[sortBy] < y.portfolioData.at(0)[sortBy]
            ? -1 : 1)
        );
        this.sortedbyDCS = false;
      }
      //to change the first 3 rows in leaderboard table, to display either awards or a shit emoji(only at index 0)
      this.changeSymbolFirstTableRow();
    },

    // get the leaderboad data from http request
    getPortfolioData: async function () {
      let portfolioData;
      await fetch('/leaderboard/table')
        .then((response) => response.json())
        .then((data) => {
          portfolioData = data.userData;
        });
      return portfolioData;
    },

    changeSymbolFirstTableRow: function () {
      //if table sorted by dsc cups, if sorted by asc overwrite them to display last places
      const newSymbol = this.sortedbyDCS ? ['🏆', '🥈', '🥉'] : ['💩', this.sortedData.length - 1, this.sortedData.length - 2];
      // the first 3 rows got classes cold be implementet better but no time
      const elements = document.querySelectorAll('.gold, .silver, .bronze');

      // overwrite each element with their new symbol
      elements.forEach((element, index) => {
        element.textContent = newSymbol[index];
      });
    },

    //function to assign a class to the first three rows in the table
    rowClass(index) {
      return {
        gold: index === 0,
        silver: index === 1,
        bronze: index === 2,
      };
    },
  },
});
