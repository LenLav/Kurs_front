<template>
<body>

    <div class="news">

        <!-- <div v-show="Block_news_TRUE"> -->

        <div v-for="neew in news.slice().reverse()" :key="neew.id">

            <div class="block_news color_DB">
                <h4 class="h4_new">{{neew.Head}}</h4>
                <hr class="HR_news">
                <p class="block_news_P">{{neew.info}}</p>
                <hr class="HR_news">
                <p class="data_news">{{ new Date(neew.createdAt).toLocaleString() }}</p>

                <p v-show="ADMIN"><button class="osnovnButton" @click="get_id_new(neew.id)">Удалить </button></p>
            </div>

            <hr class="hrSt color_LB">
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
