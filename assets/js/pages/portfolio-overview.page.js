parasails.registerPage('portfolio-overview', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝

  //  Data properties for this component.
  data: {
    tokenData:'',
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
  },
  // Mounted function, which runs after the component is mounted to the DOM
  mounted: async function(){
    this.createChart();
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    /**
     * createChart - creates a doughnut chart using the Chart.js library to visualize a portfolio's token data
     * @return none
     */
    createChart: function () {

      //get sever rendered data form SAILS_LOCALS because of exposeLocalsToBrowser() in ejs
      const token = window.SAILS_LOCALS.tokenData;
      const portfolioValue = window.SAILS_LOCALS.portfolioValue;
      /*
      //gets the token data from an element with id 'token'
      let tokenDataRaw = document.getElementById('token');
      // parses the token data as JSON
      let token = JSON.parse(tokenDataRaw.innerText);
       const portfolioValue =document.getElementById('pV').innerText;*/

      //defining various properties for the chart
      const labels = [];
      const usdValue = [];
      const tokenAmount = [];
      const label = 'USD value';

      //iterating over the token data
      token.forEach((token) => {
        labels.push(token.symbol);
        usdValue.push(token.currentValue);
        tokenAmount.push(token.amount);
      });

      // create data object for the chart
      const data = {
        labels,
        datasets: [{
          label,
          data: usdValue,
          backgroundColor: [
            'rgba(255,0,173,0.7)',
            'rgba(236,110,167,0.7)',
            'rgba(195,97,201,0.7)',
            'rgba(111,25,154,0.7)',
            'rgba(128,50,232,0.7)',
            'rgba(78,26,243,0.7)',
            'rgba(0,5,150,0.7)',
            'rgba(25,125,169,0.7)',
            'rgba(153,153,245,0.7)',
          ],
          borderColor: [
            'rgba(255,0,173,0.7)',
            'rgba(236,110,167,0.7)',
            'rgba(195,97,201,0.7)',
            'rgba(111,25,154,0.7)',
            'rgba(128,50,232,0.7)',
            'rgba(78,26,243,0.7)',
            'rgba(0,5,150,0.7)',
            'rgba(25,125,169,0.7)',
            'rgba(153,153,245,0.7)',
          ],
          borderWidth: 1,
          responsive: true,
          cutout: '90%',
          borderRadius: 0,
          hoverOffset: 5
        }]
      };

      //center text properties
      const centerText = {
        id: 'centerText',
        //function for displaying the center text
        afterDatasetsDraw(chart,args,pluginOptions) {
          const {ctx, data} = chart;

          //save the current state of the canvas
          ctx.save();

          //get the location of the center of the chart
          const x = chart.getDatasetMeta(0).data[0].x;
          const y = chart.getDatasetMeta(0).data[0].y;

          //set the text align to center
          ctx.textAlign = 'center';

          //set center text propeties
          ctx.font = ' 25px sans-serif';
          ctx.fillStyle = 'white';

          //add center text to chart
          ctx.fillText(portfolioValue+'$', x, y);
        }
      };

      // config for chart
      const config = {
        type: 'doughnut',
        data,
        options: {
          plugins: {
            legend: {
              display: false
            }
          }
        },
        plugins: [centerText]
      };


      //render chart in the canvas element with id 'myChart'
      let myChart =document.getElementById('myChart').getContext('2d');
      // eslint-disable-next-line no-undef
      new Chart( myChart, config );
    }
    //…
  }
});
