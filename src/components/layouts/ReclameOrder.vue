<template>
    <div class="style-form">
        <form @submit.prevent="orderFilled()">
        <div class="calendar">
            <label for=""> Дата проверки
                <!-- <datepicker :format="customFormatter" v-model="this.orders[orderId].date" language="ru"></datepicker> -->
                <datepicker v-model="orders[orderId].date" language="ru"></datepicker>
            </label>
        </div>
        <label class="ordersDetales" for="input">Плакаты<input v-model="orders[orderId].poster" type="text"/></label>
        <label class="ordersDetales" for="input">Сити-постеры<input v-model="orders[orderId].siti" type="text"/></label>
        <label class="ordersDetales" for="input">Хард-постеры<input v-model="orders[orderId].hard" type="text"/></label>
        <label class="ordersDetales" for="input">Флаеры<input v-model="orders[orderId].flaers" type="text"/></label>
        <label class="ordersDetales" for="input">Стенди-постеры <input v-model="orders[orderId].stand" type="text"/></label>
        <label class="ordersDetales" for="input" @change="onFileSelected">Фото-отчеты 
            {{orderId}}{{this.orders[orderId].date}}
            <vue-clip :options="options">
                
                <template slot="clip-uploader-action">
                    <div class="uploader-action">
                        <div class="dz-message">
                            Бросьте сюда файлы
                        </div>
                    </div>
                </template>

                 <template slot="clip-uploader-body" scope="props">
                     <div class="uploader-files">
                         <div class="uploader-file" v-for="file in props.files">
                             <div class="file-avatar">
                                 <img @change="addPicture(file.dataUrl)" 
                                      :src="file.dataUrl" alt="">
                             </div>
                             {{ file.name }}
                         </div>
                     </div>
                    <div v-for="file in file.props">
                        <img v-bind:src="file.dataUrl" />
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
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    addPicture(picture) {
      console.log(this.pictures, "this.pictures");
      this.pictures[this.pictures.length] = picture;
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
.orderDetales {
    justify-content: space-between;
}

.vdp-datepicker {
    color: black !important;
}

.style-form input[type=text] {
    width: 100%;
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