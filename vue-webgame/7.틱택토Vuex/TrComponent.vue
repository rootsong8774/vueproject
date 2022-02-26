<template>
  <tr>
    <td-component v-for="(cellData, index) in rowData"  :cell-index="index" :row-index="rowIndex" :key="index"/>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent";

export default {
  name: "TrComponents",
  props: {
    rowIndex: Number
  },
  components: {
    TdComponent
  },
  computed: {
    rowData() {
      return this.$store.state.tableData[this.rowIndex];
    }
  }

}
</script>

<style scoped>

</style>