<template>
<body>
    
    <div v-show="OK_TRUE" class="push" >
        <div class="push_content">
        
        <div id="text_push_id" class="push_content_true">
            <span>{{info_push}}</span>     
<i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_TRUE = !OK_TRUE" ></i>
        </div>
        </div>
    </div>

    <div v-show="OK_FALSE" class="push" >
        <div class="push_content">
        
        <div id="text_push_id" class="push_content_false">
            <span>{{info_push}}</span>
            <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_FALSE = !OK_FALSE" ></i>
        </div>
        </div>
    </div>
    
    <div class="login" >
    <div class="registr" >
        <h2 style="padding-top: 15px;">Вход</h2>
        <b>
            <hr class="hrSt"></b>

        <p><input v-model="form.email" style="width:50%" placeholder="Email"> <br></p>
        <p><input v-model="form.password" type="password" style="width:50%" placeholder="Пароль"> <br></p>
        
        <p><button type="button" class="osnovnButton" @click="vhod()">Войти</button> <br></p>
        
        <hr class="hrSt">

        <p class="podskazka">Ещё не зарегистрированы?</p>
        <hr class="hrSt">
        {{response}}
        <form action="registration" style="padding-bottom: 20px;">
            <button type="submit" class="osnovnButton">Зарегистрироваться</button>
        </form>



<!-- <div v-if="!token">
      Вход в систему
      <input
        placeholder="Email"
        class="form-control"
        v-model="form.email"
      /><br />
      <input
        placeholder="Пароль"
        class="form-control"
        v-model="form.password"
      />
      <button class="btn btn-primary form-control" @click="login()">
        Вход
      </button>
    </div>

    <div v-else class="card">
      <button class="btn btn-outline-primary form-control" @click="logout()">
        Выход
      </button>
      <div class="card-header">accessToken</div>
      <div class="card-body font-xs">
        {{ token }}
      </div>
      <button class="btn btn-sm btn-success form-control" @click="userList()">
        Обновить список пользователей
      </button>
      
    </div> -->


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

@Component({
    components: {
    },
})
export default class Home extends Vue {
     data(){
        return {
OK_TRUE: false,
OK_FALSE: false,
info_push: "Успешная регистрация!!!",
        } 
        
    }


    form = {
        email : "leader@mail.ru",
        password: "123456"
    }

    response = "ожидание"
    token = "";

    OK_TRUE = "false"
    OK_FALSE = "false"
    info_push = ""

//     async login() {
//         alert("клик")
//     const result = await this.$store.dispatch("login", this.form);
//     console.log(result)
//     this.token = result.token;
//   }

    async vhod() {

        const result = await this.$store.dispatch("login", this.form);
        this.token = result.token;
       if (result.success === true) {
            this.OK_TRUE = "true"
            this.info_push = result.message
            window.location.href = 'profil'
        }

        else{
            this.OK_FALSE = "true"
            this.info_push = result.message
        }
    console.log(result)
    console.log(result.success)


// const result = await this.$store.dispatch("login", this.form);
//     this.token = result.token;

        // const result = await axios.post('http://localhost:4200/login', this.form)
        // this.response = result.data

        // this.response = "результат"
        // console.log(this.response)
        // console.log(result.data)
        // this.ffio = result.data.success
        // this.poi = result.data.data.job
        // console.log(this.poi)
        // alert("клик")
        
        // window.location.href = 'profil'

        // if (result.data.success === true) {
        //     window.location.href = 'profil'
        // }
        // else{

        // }
        // this.$emit('vhod',{
        //     fio: this.ffio
        // })
        
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
