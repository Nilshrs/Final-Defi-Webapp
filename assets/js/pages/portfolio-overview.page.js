// eslint-disable-next-line no-undef
parasails.registerPage('portfolio-overview', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    tokenData: 'y',
    //portfolioValue: undefined
    //…
  },
  //tokenData: {tokenData:undefined},
  //portfolioValue: undefined



  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {



    //…
  },
  mounted: async function(){
    this.createChart();


    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    createChart: function () {
      let tokenDataRaw = document.getElementById('token');
      let token = JSON.parse(tokenDataRaw.innerText);


      const labels = [];
      const usdValue = [];
      const tokenAmount = [];
      const label = 'USD value';


      token.forEach((token) => {
        labels.push(token.symbol);
        usdValue.push(token.value);
        tokenAmount.push(token.amount);
      });

      const data = {
        labels,
        datasets: [{
          label,
          data: usdValue,
          backgroundColor: [
            'rgba(255,99,132,0.4)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(216,2,255,0.2)',
            'rgb(26,139,31)',
            'rgba(136,42,153,0.2)',
            'rgba(215,0,255,0.2)',
            'rgba(255,255,255,0.2)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(215,0,255,0.2)',
            'rgba(215,0,255,0.2)',
            'rgba(215,0,255,0.2)',
            'rgba(215,0,255,0.2)',
            'rgba(215,0,255,0.2)',
          ],
          borderWidth: 1,
          responsive: false,
        }]
      };

      const options = {

        plugins: {
          legend: {
            display: false
          }
        }
      };

      //config
      const config = {
        type: 'doughnut',
        data,
        options
      };

      // eslint-disable-next-line no-undef

      let myChart =document.getElementById('myChart');

      //render block

      // eslint-disable-next-line no-undef
       new Chart(
        myChart,
        config
      );




    }
    //…
  }
});
