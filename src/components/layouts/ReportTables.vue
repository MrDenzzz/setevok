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
.madeReport {
    background: linear-gradient(to top, #506371, #405361);
    border: inset 1px #405361;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

@media (max-width: 800px) {
    .madeReport {
        flex-direction: column;
        align-self: center;
    }
}

.date {
    // display flex
    // justify-content center
    // flex-direction column
    // align-items center
    padding: 10px;
}
</style>
