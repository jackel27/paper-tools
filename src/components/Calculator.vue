<style scoped>
.form-input {
  height: 2em;
  font-size: 6em;
}
  .form-group {
    margin-top: 100px;
  }
  #subtract {
    font-size: 12em;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .col-4 {
    display: flex;
    align-items: center;
  }
  .result {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  small {
    font-size: 4em;
  }
  .title {
    text-align: center;
    padding-top: 20px;
  }
</style>

<template>
  <div class="Calculator">
    <form class="form-horizontal">
    <h1 class="title">Trim Difference in Fractions</h1>
      <div class="form-group">
        <div class="col-1"></div>
        <div class="col-4">
          <input class="form-input" type="number" v-model="inputOne" placeholder="" />
        </div>
        <div class="col-2" id="subtract">-</div>
        <div class="col-4">
          <input class="form-input" type="number" v-model="inputTwo" placeholder="" />
        </div>
        <div class="col-1"></div>
      </div>
      <div class="columns">
        <div class="col-2"></div>
        <div class="col-8 result">
          <h1 class="title"><small class="label"><mark>{{ result }}</mark></small></h1>
        </div>
        <div class="col-2"></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // import 'blah' from './components/blah.vue
  name: 'Calculator',
  components: {
  },
  watch: {
    inputOne: function (change) {
      let x = new this.$fraction(change - this.inputTwo)
      this.result = x.toFraction(true)
      window.localStorage.setItem('startTime', JSON.stringify(this.startTime))
    },
    inputTwo: function (change) {
      let x = new this.$fraction(this.inputOne - change)
      this.result = x.toFraction(true)
      window.localStorage.setItem('endTime', JSON.stringify(this.endTime))
    }
  },
  mounted () {
    let x = new this.$fraction(242 - 238.5)
    console.log(x.toFraction(true))
    if (window.localStorage.getItem('startTime') && window.localStorage.getItem('endTime')) {
      this.startTime = JSON.parse(window.localStorage.getItem('startTime'))
      this.endTime = JSON.parse(window.localStorage.getItem('endTime'))
    } else {
      window.localStorage.setItem('startTime', JSON.stringify(this.startTime))
      window.localStorage.setItem('endTime', JSON.stringify(this.endTime))
    }
  },
  data () {
    return {
      inputOne: '',
      inputTwo: '',
      result: ''
    }
  },
  methods: {
  }
}
</script>
