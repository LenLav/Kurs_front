<template>
<body>
    <div class="analytics">

        <div>
            <div class="form-check form-check-inline">
                <input @click="check_month()" class="form-check-input" type="radio" name="inlineRadioOptions" id="month" value="option1">
                <label class="form-check-label" for="inlineRadio1">месяц</label>
            </div>
            <div class="form-check form-check-inline">
                <input @click="check_quarter()" class="form-check-input" type="radio" name="inlineRadioOptions" id="quarter" value="option2" checked>
                <label class="form-check-label" for="inlineRadio2">квартал</label>
            </div>
            <div class="form-check form-check-inline">
                <input @click="check_half_year()" class="form-check-input" type="radio" name="inlineRadioOptions" id="half_year" value="option3">
                <label class="form-check-label" for="inlineRadio3">полугодие</label>
            </div>
            <div class="form-check form-check-inline">
                <input @click="check_year()" class="form-check-input" type="radio" name="inlineRadioOptions" id="year" value="option4">
                <label class="form-check-label" for="inlineRadio3">год</label>
            </div>
        </div>

        <div class="container_chart">
            <!-- <mdb-container> -->
            <mdb-bar-chart class="line_chart" :data="barChartData_salary" :options="barChartOptions_salary" :width="600" :height="300"></mdb-bar-chart>
            <!-- </mdb-container> -->
        </div>

        <div class="container_chart">
            <p>Семейное положение</p>
            <mdb-pie-chart class="line_chart" datalabels :data="pieChartData_marital" :options="pieChartOptions_marital" :width="300" :height="300" />
        </div>

        <div class="container_chart">
            <!-- <mdb-container> -->
            <mdb-bar-chart class="line_chart" :data="barChartData_child" :options="barChartOptions_child" :width="600" :height="300"></mdb-bar-chart>
            <!-- </mdb-container> -->
        </div>

    </div>
</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="jquery.maskedinput.js" type="text/javascript"></script><script lang="ts">
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
// 
</script><script>
// 
import {
    Component,
    Vue
} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    mdbBarChart,
    mdbContainer,
    mdbPieChart,
} from "mdbvue";

@Component({
    components: {
        mdbBarChart,
        mdbContainer,
        mdbPieChart
    },
})
export default class Home extends Vue {
    data() {
        return {
            ADMIN: false,

            barChartData_salary: this.datacollection_salary,

            barChartOptions_salary: {
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
            },

            barChartData_child: this.datacollection_children,

            barChartOptions_child: {
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
            },

            pieChartData_marital: this.datacollection_marital,

            pieChartOptions_marital: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        color: "white",
                        align: "center",
                        font: {
                            size: 16
                        },
                        formatter: value => {
                            const [dataset] = this.pieChartData_marital.datasets;
                            const setValue = dataset.data.reduce((a, b) => a + b);

                            return `${Math.round((value / setValue) * 100)}%`;
                        }
                    }
                }
            },

        };
    }

    async mounted() {
        this.token = localStorage.token;

        this.GetDataChild()
        console.log(this.datacollection_children)

        this.check_quarter()
    }

    datacollection_salary = {}
    datacollection_children = {}
    datacollection_marital = {}

    async GetDataSalary() {
        this.columnNames_salary = ["менее 20", "20-40", "40-60", "60-80", "80-100", "100-120", "120-150", "более 150"]

        this.datacollection_salary = {
            labels: this.columnNames_salary,
            datasets: [{
                label: "Заработная плата",
                data: this.salary_mass,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                ],

                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                ],

                borderWidth: 1
            }, ]
        }

        console.log(this.datacollection_salary)
        this.barChartData_salary = this.datacollection_salary

    }

    async GetDataChild() {
        this.columnNames_children = ["0", "1", "2", "3", "более 3"]

        this.datacollection_children = {
            labels: this.columnNames_children,
            datasets: [{
                label: "Количество детей",
                data: this.children_mass,
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
            }, ]
        }

        console.log(this.datacollection_children)
        this.barChartData_child = this.datacollection_children

    }

    async GetDataMarital() {
        this.columnNames_marital = ["Жен/ЗМ", "Хол/НЗ", "Разв.", "Вдов."]

        this.datacollection_marital = {
            labels: this.columnNames_marital,
            datasets: [{
                data: this.marital_mass,
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1"
                ],
                hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5"
                ]
            }]
        }

        console.log(this.datacollection_marital)
        this.pieChartData_marital = this.datacollection_marital
    }

    check_month() {
        console.log("check_month")
        this.salary_mass = [5, 7, 15, 3, 4, 15, 3, 4]
        this.children_mass = [5, 7, 15, 3, 4]
        this.marital_mass = [12, 7, 3, 0]

        this.GetDataSalary()
        this.GetDataChild()
        this.GetDataMarital()
    }

    check_quarter() {
        console.log("check_quarter")
        this.salary_mass = [5, 7, 15, 3, 4, 15, 3, 4]
        this.children_mass = [9, 17, 33, 7, 5]
        this.marital_mass = [30, 15, 10, 1]

        this.GetDataSalary()
        this.GetDataChild()
        this.GetDataMarital()
    }

    check_half_year() {
        console.log("check_half_year")
        this.salary_mass = [5, 7, 15, 3, 4, 15, 3, 4]
        this.children_mass = [15, 27, 43, 12, 7]
        this.marital_mass = [47, 22, 12, 3]

        this.GetDataSalary()
        this.GetDataChild()
        this.GetDataMarital()
    }

    check_year() {
        console.log("check_year")
        this.salary_mass = [5, 7, 15, 3, 4, 15, 3, 4]
        this.children_mass = [33, 58, 89, 20, 12]
        this.marital_mass = [80, 69, 46, 12]

        this.GetDataSalary()
        this.GetDataChild()
        this.GetDataMarital()
    }

}
</script>
