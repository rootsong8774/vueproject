<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('rock')">Rock</button>
      <button @click="onClickButton('scissors')">Scissors</button>
      <button @click="onClickButton('paper')">Paper</button>
    </div>
    <div>{{ result }}</div>
    <div>Current Points: {{ score }}</div>
  </div>
</template>

<script>
  const rspCoords = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px'
  }
  const scores = {
    scissors: 1,
    rock: 0,
    paper: -1
  }
  const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v){
      return v[1]===imgCoord;
    })[0];
  }
  let interval = null;
  export default {
    data() {
      return {
        imgCoord: rspCoords.rock,
        result: '',
        score: 0,
      }
    },
    computed: {
      computedStyleObject() {
        return {
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
          fontsize: '14px'
        }
      }
    },
    methods: {
      changeHand() {
        interval = setInterval(() => {
          if (this.imgCoord === rspCoords.rock) {
            this.imgCoord = rspCoords.scissors;
          } else if (this.imgCoord === rspCoords.scissors) {
            this.imgCoord = rspCoords.paper;
          } else if (this.imgCoord === rspCoords.paper) {
            this.imgCoord = rspCoords.rock;
          }
        }, 100);
      },
      onClickButton(choice) {
        clearInterval(interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(this.imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0 ) {
          this.result = 'Draw';
        } else if ([-1, 2].includes(diff)) {
          this.result = 'Win';
          this.score += 1;
        } else {
          this.result = 'Lose';
          this.score -= 1;
        }
        setTimeout(() => {
          this.changeHand();
        }, 1000)
      }
    },
    mounted() {
      console.log('mounted');
      this.changeHand();
    },
    beforeDestroy() {
      console.log('beforeDestroy');
      clearInterval(interval);
    }
  };
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
