<template>
  <tr>
    <td-component v-for="(cellData, index) in rowData" :cell-data="cellData" :cell-index="index" :row-index="rowIndex" :key="index"/>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent";

export default {
  name: "TrComponents",
  props: {
    rowData: Array,
    rowIndex: Number
  },
  components: {
    TdComponent
  }

}
</script>

<style scoped>

</style>