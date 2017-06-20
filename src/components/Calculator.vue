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
  .form-select {
    font-size: 6.6rem;
    height: 12rem;
    padding: 0!important;
  }
  select {
    height: 10rem!important;
    line-height: 10rem!important;
    width: 70vw!important;
    justify-content: center;
    display: flex;
  }
  .input-group-addon {
    font-size: 5rem!important;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<template>
  <div class="Calculator">
    <form class="form-horizontal">
    <h1 class="title">Trim Difference in Fractions</h1>
    <div class="columns">
      <div class="column col-12">
        <div class="input-group">
        <span class="input-group-addon addon-lg">Select max Precision:</span>
          <select class="form-select select-lg" v-model="precision">
            <option selected value="16">16ths</option>
            <option value="32">32nds</option>
          </select>

        </div>
      </div>
    </div>

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
    precision: function () {
      this.result = this.toFraction(this.inputOne - this.inputTwo)
    },
    inputOne: function (change) {
      this.result = this.toFraction(change - this.inputTwo)
    },
    inputTwo: function (change) {
      this.result = this.toFraction(this.inputOne - change)
    }
  },
  mounted () {
    // let x = new this.$fraction(242 - 238.5)
    // console.log(x.toFraction(true))
  },
  data () {
    return {
      precision: '16',
      inputOne: '',
      inputTwo: '',
      result: ''
    }
  },
  methods: {
    toFraction (flt) {
      let num = 8
      let decimal = flt
      let whole = String(decimal).split('.')[0]
      decimal = parseFloat('.' + String(decimal).split('.')[1])
      if (!decimal || decimal < 0.032) {
        decimal = 0
      } else if (decimal > 0.968) {
        decimal = 0
        whole++
      } else {
        num = this.precision
        decimal = decimal * num
        decimal = Math.round(decimal)
        while (decimal % 2 === 0) {
          decimal = decimal / 2
          num = num / 2
        }
      }
      return ((whole === 0) ? '' : whole + '  ') + ((decimal === 0) ? '' : decimal + '/' + num)
    }
  }
}
</script>
