<template>
<body>

    <div class="news">

        <!-- <div v-show="Block_news_TRUE"> -->

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

</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.maskedinput.js" type="text/javascript"></script><script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";
// import {    mdbBarChart,    mdbContainer} from "mdbvue";

@Component({
    components: {},
})

export default class Home extends Vue {
    data() {
        return {
            ADMIN: false,
        }
    }

    token = "";

    async mounted() {
        this.token = localStorage.token;
        var rates = document.getElementById('inlineRadio2')
        var monthChecked = (<HTMLInputElement>document.getElementById('month')).checked;
        var monthQuarter = (<HTMLInputElement>document.getElementById('quarter')).checked;
        var monthHalf_year = (<HTMLInputElement>document.getElementById('half_year')).checked;
        var monthYear = (<HTMLInputElement>document.getElementById('year')).checked;
        
        console.log(monthChecked)
        console.log(monthQuarter)
        console.log(monthHalf_year)
        console.log(monthYear)
        
    }

    async check_month() {
        var monthChecked = (<HTMLInputElement>document.getElementById('month')).checked;
        var monthQuarter = (<HTMLInputElement>document.getElementById('quarter')).checked;
        var monthHalf_year = (<HTMLInputElement>document.getElementById('half_year')).checked;
        var monthYear = (<HTMLInputElement>document.getElementById('year')).checked;
        
        console.log(monthChecked)
        console.log(monthQuarter)
        console.log(monthHalf_year)
        console.log(monthYear)
    }

}
</script>
