<template>
    <div>
        <h2>Администратор {{name}}</h2>
            <div class="reports">
                <reports></reports>
            </div>
    </div>
</template>

<script>
import Reports from "./layouts/Reports";

export default {
  name: "Admin",
  components: {
    Reports
  },
  data() {
    return {
      name: localStorage.getItem("name")
    };
  }
};
</script>

<style lang="stylus" scoped>
.reports {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
}
</style>
