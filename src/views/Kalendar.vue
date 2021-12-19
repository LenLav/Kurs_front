<template>
<body>

    <div class="news">


        <!-- <div v-show="Block_news_TRUE"> -->

        <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked>
  <label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
  <label class="form-check-label" for="inlineRadio3">3</label>
</div>

        

    </div>

</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.maskedinput.js" type="text/javascript"></script>

<script lang="ts">
import {    Component,    Vue} from "vue-property-decorator";
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
    }

}


</script>
