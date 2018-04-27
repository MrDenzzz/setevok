<template>
    <div>
        <report
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
  methods: {

  },
  computed: mapGetters({reports: "allReport", ReportDates: "ReportDates"})
  }
</script>
<style lang="stylus" scoped>

</style>
