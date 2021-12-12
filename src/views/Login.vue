<template>
<body>
    <div class="login" >
    <div class="registr" >
        <h2 style="padding-top: 15px;">Вход</h2>
        <b>
            <hr class="hrSt"></b>

        <p><input v-model="form.email" style="width:50%" placeholder="Email"> <br></p>
        <p><input v-model="form.password" type="password" style="width:50%" placeholder="Пароль"> <br></p>
        <!-- <form action="profil" >
            <button type="submit" class="btn btn-outline-success" >Войти</button>
        </form> -->
        <p><button type="button" class="osnovnButton" @click="vhod()">Войти</button> <br></p>
        <!-- <p><button type="button" class="btn btn-outline-success" @click="vhod2()">Войти2</button> <br></p> -->
        <hr class="hrSt">

        <p class="podskazka">Ещё не зарегистрированы?</p>
        <hr class="hrSt">
        {{response}}
        <form action="registration" style="padding-bottom: 20px;">
            <button type="submit" class="osnovnButton">Зарегистрироваться</button>
        </form>

    </div>
    </div>
</body>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
    components: {
        // HelloWorld,
    },
})
export default class Home extends Vue {
    data (){
        return{
            fio: ''
        }
    }


    form = {
        email : "",
        password: ""
    }

    response = "ожидание"
    ffio = "qwe"
    poi = "0"

    async vhod() {
        const result = await axios.post('http://localhost:4200/entry', this.form)
        this.response = result.data
        // console.log(this.response)
        // console.log(result.data)
        // this.ffio = result.data.success
        // this.poi = result.data.data.job
        // console.log(this.poi)
        // alert(this.response)
        
        window.location.href = 'profil'

        // if (result.data.success === true) {
        //     window.location.href = 'profil'
        // }
        // else{

        // }
        this.$emit('vhod',{
            fio: this.ffio
        })
        
    }





    // async vhod() {
    //     alert("вход")
         
    //     // document.getElementById("LKab").className = "nav-link";
    //     window.location.href = 'profil'
    //     // document.location.href = "http://localhost:8080/profil";
        
    // }

    // async vhod2() {
    //     alert("вход2")
         
    //     // document.getElementById("LKab").className = "nav-link";
    //     window.location.href = 'profil2'
    //     // document.location.href = "http://localhost:8080/profil";
        
    // }
}
</script>

<style lang="scss">

</style>
