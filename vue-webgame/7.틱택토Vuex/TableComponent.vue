<template>
  <table>
    <slot></slot>
  </table>
</template>

<script>
import TrComponent from "./TrComponent";
export default {
  name: "TableComponent",
  components: {
    TrComponent,
  },
  computed: {
    tableData() {
      return this.$store.state.tableData;
    }
  }
}
</script>

<style scoped>

</style>