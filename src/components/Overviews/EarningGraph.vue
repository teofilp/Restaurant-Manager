<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Jun 1st",
          "Jun 2nd",
          "Jun 3rd",
          "Jun 4th",
          "Jun 5th",
          "Jun 6th",
          "Jun 7th"
        ],
        datasets: [
          {
            label: "earnings",
            data: [1200, 1900, 300, 500, 250, 3560, 1300],
            backgroundColor: ["rgba(159, 150, 224, .5)"],
            borderColor: ["#8272f7"],
            borderWidth: 3
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                color: "rgba(0, 0, 0, 0)"
              }
            }
          ]
        }
      }
    );
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>
