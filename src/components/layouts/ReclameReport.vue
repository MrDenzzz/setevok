<template>
    <div class="style-form">
        <form @submit.prevent="ReportFilled()">
        <div @submit.prevent="ReportFilled()" class="ReportDetail">
          <label for="datepicker"> Дата проверки</label>
          <datepicker :format="customFormatter(this.reports[ReportId].date)" v-model="reports[ReportId].date" language="ru"></datepicker>
        </div>

        <div class="ReportDetail">
        <label class="reportsDetales" for="input">Плакаты</label>
          <input onclick="this.select();" v-model="reports[ReportId].poster[0]" type="text"/>
          <label class="checkbox">
            <input v-model="reports[ReportId].poster[1]" type="checkbox"/>
            <div class="checkbox__text">Обещали повесить</div>
          </label>
        </div>

          <div class="ReportDetail">
          <label class="reportsDetales" for="input">Сити-постеры</label>
          <input onclick="this.select();" v-model="reports[ReportId].siti[0]" type="text"/>

            <label class="checkbox">
            <input v-model="reports[ReportId].siti[1]" type="checkbox"/>
            <div class="checkbox__text">Обещали повесить</div>
            </label>
          </div>

          <div class="ReportDetail">
          <label class="reportsDetales" for="input">Хард-постеры</label>
          <input onclick="this.select();" v-model="reports[ReportId].hard[0]" type="text"/>

            <label class="checkbox">
            <input v-model="reports[ReportId].hard[1]" type="checkbox"/>
            <div class="checkbox__text">Обещали повесить</div>
          </label>
          </div>

          <div class="ReportDetail">
          <label class="reportsDetales" for="input">Флаеры</label>
          <input onclick="this.select();" v-model="reports[ReportId].flaers[0]" type="text"/>

            <label class="checkbox">
          <input v-model="reports[ReportId].flaers[1]" type="checkbox"/>
            <div class="checkbox__text">Обещали повесить</div>
          </label>
          </div>

          <div class="ReportDetail">
          <label class="reportsDetales" for="input">Стенди-постеры </label>
          <input onclick="this.select();" v-model="reports[ReportId].stand[0]" type="text"/>

            <label class="checkbox">
            <input v-model="reports[ReportId].stand[1]" type="checkbox"/>
            <div class="checkbox__text">Обещали повесить</div>
          </label>
          </div>

          <div class="ReportDetail">
          <label style="justify-content: space-between;" class="reportsDetales" for="input">Фото-отчеты</label>
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
          </div>
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
  name: "ReclameReport",
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
    ...mapGetters(["reports"])
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

  .ReportDetail
    margin 10px
    margin-bottom 20px
.style-form
    display flex
    flex-direction: row;

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

  .checkbox input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin: 10px 0 0 20px;
  }
  .checkbox__text {
    position: relative;
    padding: 0 0 0 60px;
    cursor: pointer;
  }
  .checkbox__text:before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    width: 50px;
    height: 26px;
    border-radius: 13px;
    background: #CDD1DA;
    box-shadow: inset 0 2px 3px rgba(0,0,0,.2);
    transition: .2s;
  }
  .checkbox__text:after {
    content: '';
    position: absolute;
    top: -2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 2px 5px rgba(0,0,0,.3);
    transition: .2s;
  }
  .checkbox input:checked + .checkbox__text:before {
    background: #9FD468;
  }
  .checkbox input:checked + .checkbox__text:after {
    left: 26px;
  }
  .checkbox input:focus + .checkbox__text:before {
    box-shadow: inset 0 2px 3px rgba(0,0,0,.2), 0 0 0 3px rgba(255,255,0,.7);
  }
</style>
