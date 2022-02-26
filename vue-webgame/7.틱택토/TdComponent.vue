<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
export default {
  name: "TdComponent",
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      if (this.cellData) return;
      let rootData = this.$root.$data; // variable로 지정하여 한번에 변경할 때 ctrl+alt+v 사용
      // this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn; 화면에 미반영
      this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn)

      let win = false;
      if (rootData.tableData[this.rowIndex][0] === rootData.turn
          && rootData.tableData[this.rowIndex][1] === rootData.turn
          && rootData.tableData[this.rowIndex][2] === rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][this.cellIndex] === rootData.turn
          && rootData.tableData[1][this.cellIndex] === rootData.turn
          && rootData.tableData[2][this.cellIndex] === rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][2] === rootData.turnt
          && rootData.tableData[1][1] === rootData.turn
          && rootData.tableData[2][0] === rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][0] === rootData.turnt
          && rootData.tableData[1][1] === rootData.turn
          && rootData.tableData[0][2] === rootData.turn) {
        win = true;
      }
      if (win) {
        rootData.winner = rootData.turn;
        rootData.turn = 'O';
        rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']]
      } else {
        let all = true;
        rootData.tableData.forEach((row) => {
          row.forEach((cell) => {
            if (!cell) {
              all = false;
            }
          })
        });
        if (all) {
          rootData.turn = 'O';
          rootData.winner = '';
          rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
        } else {
          rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
        }

      }


    },
  }
}
</script>

<style scoped>

</style>