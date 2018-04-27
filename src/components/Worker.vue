<template>
    <div class="full-screen">
        <div class="style-form">
            <h2>Исполнитель {{name}}
              <router-link to="/">
              <button  class="exit">Выход</button>
              </router-link>
            </h2>
            <div class="madeReport">
                <made-Report :name="name" :idReport=idReport :reports="newReport" />
            </div>
            <div class="reports">
                <reports :userId=this.$route.params.id :new-Report="reports"></reports>
            </div>
        </div>
    </div>
</template>

<script>
import MadeReport from "./layouts/MadeReport";
import Reports from "./layouts/Reports";
import { mapGetters } from "vuex";

export default {
  name: "Worker",
  components: {
    MadeReport,
    Reports
  },
  data() {
    return {
      newReport: {},
      name: localStorage.getItem("name"),
    };
  },
  computed: {
    ...mapGetters(["reports"]),
    idReport: function() {
        return this.reports.length;
    }
  },
};
</script>

<style lang="stylus">

</style>
