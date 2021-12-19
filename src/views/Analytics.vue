<template>
<body>
    <div class="analytics">
        <div class="container_chart">
            
            <mdb-container>
                <mdb-bar-chart class="line_chart" :data="barChartData" :options="barChartOptions" :width="600" :height="300"></mdb-bar-chart>
            </mdb-container>
        </div>

    </div>
</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.maskedinput.js" type="text/javascript"></script>

<script  lang="ts">
// import {mdbLineChart,  mdbContainer} from "mdbvue";
// export default {
//     name: "ChartPage",
//     components: {
//         mdbLineChart,
//         mdbContainer
//     },
//     data() {
//         return {
//             lineChartData: {
//                 labels: [
//                     "January",
//                     "February",
//                     "March",
//                     "April",
//                     "May",
//                     "June",
//                     "July"
//                 ],
//                 datasets: [{
//                         label: "Количество уволенных",
//                         backgroundColor: "rgba(155, 199, 32, 0.1)",
//                         borderColor: "rgba(155, 199, 32, 1)",
//                         borderWidth: 0.7,
//                         data: [5, 10, 4, 27, 56, 45, 34]
//                     },
//                     {
//                         label: "Количество новых сотрудников",
//                         backgroundColor: "rgba(255, 99, 132, 0.2)",
//                         borderColor: "rgba(255, 99, 132, 1)",
//                         borderWidth: 0.7,
//                         data: [65, 59, 80, 81, 56, 55, 40]
//                     },
//                     // {
//                     //     label: "My Second dataset",
//                     //     backgroundColor: "rgba(151,187,205,0.2)",
//                     //     borderColor: "rgba(151,187,205,1)",
//                     //     borderWidth: 0.8,
//                     //     data: [28, 48, 40, 19, 86, 27, 90]
//                     // }
//                 ]
//             },
//             lineChartOptions: {
//                 responsive: false,
//                 maintainAspectRatio: false,
//                 scales: {
//                     xAxes: [{
//                         gridLines: {
//                             display: true,
//                             color: "rgba(0, 0, 0, 0.1)"
//                         }
//                     }],
//                     yAxes: [{
//                         gridLines: {
//                             display: true,
//                             color: "rgba(0, 0, 0, 0.1)"
//                         }
//                     }]
//                 }
//             }
//         };
//     }
// };
// </script>

// <script>
import {    Component,    Vue} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";
import {    mdbBarChart,    mdbContainer} from "mdbvue";


@Component({
    components: {
        mdbBarChart,
        mdbContainer},
})
export default class Home extends Vue {
    amount_of_children_mass = [12, 19, 3, 5, 2]

    data() {
        return {
            ADMIN: false,
            amount_of_children_mass: [12, 19, 3, 5, 2],

            barChartData: {
                labels: [
                    "0",
                    "1",
                    "2",
                    "3",
                    "более 3"
                ],
                datasets: [{
                    label: "Количество детей",
                    data:  this.amount_of_children_mass,                  
                    
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        // "rgba(255, 159, 64, 0.2)"
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        // "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 1
                }]
            },

            barChartOptions: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }]
                }
            }
        };
    }


    // data() {
    //     return {
    //         ADMIN: false,            
    //     }
    // }

    token = "";
    

    async mounted() {
        const amount_of_children_mass2 = [12, 19, 3, 5, 2]
        this.token = localStorage.token;
        this.amount_of_children_mass = [12, 19, 3, 5, 2]
    }

}

// export default {
//     name: "ChartPage",
//     components: {
//         mdbBarChart,
//         mdbContainer
//     },

//     amount_of_children_mass: [12, 19, 3, 5, 2],
   
//     data() {
//         return {
//             barChartData: {
//                 labels: [
//                     "0",
//                     "1",
//                     "2",
//                     "3",
//                     "более 3"
//                 ],
//                 datasets: [{
//                     label: "Количество детей",
//                     data: [12, 19, 3, 5, 7],                  
                    
//                     backgroundColor: [
//                         "rgba(255, 99, 132, 0.2)",
//                         "rgba(54, 162, 235, 0.2)",
//                         "rgba(255, 206, 86, 0.2)",
//                         "rgba(75, 192, 192, 0.2)",
//                         "rgba(153, 102, 255, 0.2)",
//                         // "rgba(255, 159, 64, 0.2)"
//                     ],
//                     borderColor: [
//                         "rgba(255,99,132,1)",
//                         "rgba(54, 162, 235, 1)",
//                         "rgba(255, 206, 86, 1)",
//                         "rgba(75, 192, 192, 1)",
//                         "rgba(153, 102, 255, 1)",
//                         // "rgba(255, 159, 64, 1)"
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             barChartOptions: {
//                 responsive: false,
//                 maintainAspectRatio: false,
//                 scales: {
//                     xAxes: [{
//                         barPercentage: 1,
//                         gridLines: {
//                             display: true,
//                             color: "rgba(0, 0, 0, 0.1)"
//                         }
//                     }],
//                     yAxes: [{
//                         gridLines: {
//                             display: true,
//                             color: "rgba(0, 0, 0, 0.1)"
//                         }
//                     }]
//                 }
//             }
//         };
//     },

// };
</script>