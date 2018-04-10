<template>
    <div class="style-form">
        <form @submit.prevent="orderFilled()">
        <div class="calendar">
            <label for=""> Дата проверки
                <datepicker :format="customFormatter(this.orders[orderId].date)" v-model="orders[orderId].date" language="ru"></datepicker>
            </label>
        </div>
        <label class="ordersDetales" for="input">Плакаты<input v-model="orders[orderId].poster[0]" type="text"/><input v-model="orders[orderId].poster[1]" type="checkbox"/><p>Обещали повесить</p></label>
        <label class="ordersDetales" for="input">Сити-постеры<input v-model="orders[orderId].siti[0]" type="text"/><input v-model="orders[orderId].siti[1]" type="checkbox"/><p>Обещали повесить</p></label>
        <label class="ordersDetales" for="input">Хард-постеры<input v-model="orders[orderId].hard[0]" type="text"/><input v-model="orders[orderId].hard[1]" type="checkbox"/><p>Обещали повесить</p></label>
        <label class="ordersDetales" for="input">Флаеры<input v-model="orders[orderId].flaers[0]" type="text"/><input v-model="orders[orderId].flaers[1]" type="checkbox"/><p>Обещали повесить</p></label>
        <label class="ordersDetales" for="input">Стенди-постеры <input v-model="orders[orderId].stand[0]" type="text"/><input v-model="orders[orderId].stand[1]" type="checkbox"/><p>Обещали повесить</p></label>
        <label class="ordersDetales" for="input">Фото-отчеты
            <vue-clip :options="options">
                
                <template slot="clip-uploader-action">
                    <div class="uploader-action">
                        <div @click="addPicture(file.dataUrl)" class="dz-message">
                            <i class="fa fa-upload"></i> Бросьте сюда файлы
                        </div>
                    </div>
                </template>

                 <template slot="clip-uploader-body" scope="props">
                     <div class="uploader-files">
                         <div class="uploader-file" v-for="file in props.files">
                             <div class="file-avatar">
                                 <img  
                                       :src="file.dataUrl" alt=""> 
                                       <!-- Отсюда как-то надо достать file.dataUrl -->
                             </div>
                             {{ file.name }}
                         </div>
                     </div>
                    <div v-for="file in file.props">
                        <img :src="file.dataUrl" />
                        {{ file.name }} {{ file.status }}
                    </div>
                </template>
            
            </vue-clip>
        </label>
        <button type="submit">Upload</button>
        </form>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import Moment from 'moment';
import { mapGetters } from "vuex";

export default {
  name: "ReclameOrder",
  components: {
    Datepicker
  },
  data() {
    return {
      orderId: this.$route.params.id,
      file: "",
      sejectedFile: null,
      options: {
        url: "/upload"
      }
    };
  },
  computed: {
    ...mapGetters(["orders"])
  },
  methods: {
    onFileSelected(event) {
      selectedFile = event.target.files[0];
    },
    customFormatter(date) {
    this.orders[this.orderId].date = Moment(date).format("YYYY-MM-DD");
      return Moment(date).format("YYYY-MM-DD");
    },
    addPicture(picture) {
      console.log(this.picture, "this.picture");
      this.$store
            .dispatch("addPicture", this.file.dataUrl, this.orderId)
            .then(() => {
              console.log("Success order data request");
            })
            .catch(() => {
              console.log("Error order data request", file.dataUrl, this.orderId);
            });
      console.log(this.orders[this.orderId].pictures, "this.pictures");
    },
    orderFilled() {
      for (let i = 0; i > this.orders[this.orders.lenght]; i++) {
        if (this.orders[i] === false) {
          this.orders.filled = true;
          console.log(this.orders, "orderFilled true");
          this.$store
            .dispatch("ordersRequest", this.orders)
            .then(() => {
              console.log("Success order data request");
            })
            .catch(() => {
              console.log("Error order data request");
            });
          return;
        } else {
          this.orders.filled = false;
          console.log(this.orders, "orderFilled false");
          this.$store
            .dispatch("ordersRequest", this.orders)
            .then(() => {
              console.log("Success order data request");
            })
            .catch(() => {
              console.log("Error order data request");
            });
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.style-form
    display flex

.ordersDetales {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
}

.vdp-datepicker {
    color: black !important;
}


.style-form input[type=text] {
    width: 30%;
    display: flex;
    padding: 8px 4px 8px 10px;
    margin-bottom: 15px;
    border: 1px solid #4e3043;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    -webkit-transition: all 0.7s linear;
    -moz-transition: all 0.7s linear;
    -ms-transition: all 0.7s linear;
    -o-transition: all 0.7s linear;
    transition: all 0.7s linear;
    /* Font styles */
    font-family: 'Raleway', 'Lato', Arial, sans-serif;
    color: #fff;
    font-size: 16px;
}

.style-form input[type=text]:hover {
    border-color: #435664;
    box-shadow: inset 123px 108px -198px #435664;
    transition: all 0.4s linear;
}

.style-form input[type=text]:focus {
    box-shadow: 0px 0px 0.1px rgba(0, 0, 0, 1);
}

.no-boxshadow .style-form input[type=text]:focus {
    outline: -10px solid rgba(255, 255, 255, 0.1);
}

label {
    color: white;
}
</style>