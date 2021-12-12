<template>
<body> 
    

    <div class="registration">
  <div class="registr">  

    <div style="padding-top: 15px;">
    <table class="text">
   <tr>
    <td class="leftcol"><h3><a href="login" class="backIcon"><i class="bi bi-arrow-bar-left"></i></a></h3></td>
    <td class="rightcol"><h2>Регистрация</h2></td>
   </tr>
  </table>
  </div>
       
    <hr class="hrSt">

    <p><input v-model="form.fio" class="inpStyle" placeholder="Фамилия Имя Отчество"> <br></p>

    <p><input v-model="form.pasport" type="text" class="inpStyle mask-pasport" id="pasport" placeholder="Паспорт: (серия, номер)" > <br></p>

    <p><input v-model="form.email" class="inpStyle" placeholder="Email"> <br></p>

    <p><input v-model="form.password" class="inpStyle" placeholder="Пароль"> <br></p>
    
    

<!-- <form action="profil" style="padding-bottom: 20px;">
            <button type="submit" class="btn btn-outline-success">Зарегистрироваться</button>
        </form> -->
   <p ><button type="button" class="osnovnButton" @click="registr()" >Зарегистрироваться</button> <br></p>
<hr class="hrSt">    
</div>
</div>

</body>
</template>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.maskedinput.js" type="text/javascript"></script>


<script lang="ts">
import $ from "jquery";
// import inputmask from "inputmask";
// $(document).ready(function(){

//     // Телефоны
//     $('#phone1').inputmask({"mask": "+7 (999) 999-9999"}); 
//     });


// var Inputmask = require('inputmask');
// //es6
// import Inputmask from "inputmask";

// var pasport = document.getElementById("pasport");
// var im = new Inputmask("99-9999999");
// im.mask(pasport);

// $('.mask-pasport').Inputmask('99 99 9999');

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
    
form = {
        fio : "",
        pasport: "",
        email : "",
        password: ""
    }

    response = "ожидание"

    async registr() {
        const result = await axios.post('http://localhost:4200/login', this.form)
        this.response = result.data
        console.log(this.response)
        console.log(result.data)
        // if (result.data.success === true) {
        //     window.location.href = 'profil'
        // }
        // else{

        // }
        
    }

}
</script>

<style lang="scss">


</style>
