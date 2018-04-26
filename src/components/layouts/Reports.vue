<template>
    <div>
      <Report
        class="madeReport"
        v-for="item in reports"
        :key="item.id"
        :report="item"/>
    </div>
</template>
<script>
import Report from "./Report";
import { mapGetters } from 'vuex';

export default {
  components: {
    Report
  },
  computed: {
    ...mapGetters(["reports"]),
    getIdReport() {
      return localStorage.setItem("id", this.reports.length);
    }
  },
}
</script>
<style lang="stylus" scoped>

@media (max-width: 800px) {
    .madeReport {
        flex-direction: column;
        align-self: center;
    }
}

</style>
