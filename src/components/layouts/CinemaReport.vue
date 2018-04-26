<template>
    <div class="style-form">
        <form @submit.prevent="ReportFilled()">
        <div @submit.prevent="ReportFilled()" class="calendar">
            <label for=""> Дата проверки
                <datepicker :format="customFormatter(this.reports[ReportId].date)" v-model="reports[ReportId].date" language="ru"></datepicker>
            </label>
        </div>
          <label class="reportsDetales" for="input">Время</label>
          <input onclick="this.select();" v-model="reports[ReportId].time" type="text"/>
          <label class="reportsDetales" for="input">Количество сеансов в этот день</label>
          <input onclick="this.select();" v-model="reports[ReportId].sessions" type="text"/>
          <label class="reportsDetales" for="input">Количество зрителей</label>
          <input onclick="this.select();" v-model="reports[ReportId].people" type="text"/>
          <label class="reportsDetales" for="input">Цена билета</label>
          <input onclick="this.select();" v-model="reports[ReportId].cost" type="text"/>
          <label class="reportsDetales" for="input">Зал </label>
          <input onclick="this.select();" v-model="reports[ReportId].hall" type="text"/>
          <label class="reportsDetales" for="input">Ряд </label>
          <input onclick="this.select();" v-model="reports[ReportId].row" type="text"/>
          <label class="reportsDetales" for="input">Место </label>
          <input onclick="this.select();" v-model="reports[ReportId].seat" type="text"/>
          <label class="reportsDetales" for="input">Фото-отчеты</label>
            <vue-clip :options="options">

                <template slot="clip-uploader-action">
                    <div class="uploader-action">
                        <div @click="addPicture(file.dataUrl)" class="dz-message">
                            <i class="fa fa-upload"></i> <button>Добавтить фото</button>
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
        <button type="submit">Upload</button>
        </form>
      <router-link to="/worker/userId"><button>Отчеты</button></router-link>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import Moment from 'moment';
import { mapGetters } from "vuex";

export default {
  name: "cinemaReport",
  components: {
    Datepicker
  },
  data() {
    return {
      ReportId: this.$route.params.id,
      file: "",
      sejectedFile: null,
      options: {
        url: "/upload"
      }
    };
  },
  computed: {
    ...mapGetters(["reports"]),
  },
  methods: {
    onFileSelected(event) {
      selectedFile = event.target.files[0];
    },
    customFormatter(date) {
    this.reports[this.ReportId].date = Moment(date).format("YYYY-MM-DD");
      return Moment(date).format("YYYY-MM-DD");
    },
    addPicture(picture) {
      console.log(this.picture, "this.picture");
      this.$store
            .dispatch("addPicture", this.file.dataUrl, this.ReportId)
            .then(() => {
              console.log("Success Report data request");
            })
            .catch(() => {
              console.log("Error Report data request", file.dataUrl, this.ReportId);
            });
      console.log(this.reports[this.ReportId].pictures, "this.pictures");
    },
    ReportFilled() {
      for (let i = 0; i > this.reports[this.reports.lenght]; i++) {
        if (this.reports[i] === false) {
          this.reports.filled = true;
          console.log(this.reports, "ReportFilled true");
          this.$store
            .dispatch("reportsRequest", this.reports)
            .then(() => {
              console.log("Success Report data request");
            })
            .catch(() => {
              console.log("Error Report data request");
            });
          return;
        } else {
          this.reports.filled = false;
          console.log(this.reports, "ReportFilled false");
          this.$store
            .dispatch("reportsRequest", this.reports)
            .then(() => {
              console.log("Success Report data request");
            })
            .catch(() => {
              console.log("Error Report data request");
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

.reportsDetales {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
}

.vdp-datepicker {
    color: black !important;
}


.style-form input[type=text] {
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
