<style>
  @import "~spectre.css";

  main { margin-top: 124px; }

  h5 { margin: 0; }

  button { width: 100%; }

  .time-gen {
    display: flex;
    font-size: 2em;
    padding: 20px;
  }

  .time-gen:hover { background: #f0f1f4 !important; }
  .time-gen:nth-child(2n - 1) { background: #f8f9fa; }

  .index {
    margin-right: 10px;
    text-align: right;
    width: 40px;
  }
  .index, .time {
    font-size: 2em;
  }
  .time {
    margin-left: 10vw;
  }
  .select-list, .dropdown{
    width: 100vw!important;
    height: 50vh!important;
    /* font-size: 3em; */
  }
  div.dropdown > div > ul.hours > li, div.dropdown > div > ul.minutes > li {
    font-size: 6em!important;
  }
  .display-time {
    width: 100vw!important;
    height: 4em!important;
    font-size: 3em!important;
  }
  .clear-btn {
    align-items: none!important;
    left: 85vw!important;
    font-size: 8em!important;

  }
</style>
<template>
  <div>
    <header class="columns">
      <div class="column col-12">
      <label class="form-label"><h1 class="subtitle">Start Time</h1></label>
      <vue-timepicker :format="yourFormat" v-model="startTime"></vue-timepicker>
      </div>
      <div class="column col-12">
        <label class="form-label"><h1 class="subtitle">End Time</h1></label>
      <vue-timepicker :format="yourFormat" v-model="endTime"></vue-timepicker>
      </div>
    </header>

    <main>
    <h1 class="title"> Estimated Turnup Times..</h1>
      <div class="time-gen" v-for="(time, index) in generation">
        <span class="index">{{ index + 1 }}.</span>
        <span class="time"><time>{{ time.human }}</time></span>
      </div>
    </main>
  </div>
</template>

<script>
  import moment from 'moment'
  import VueTimepicker from 'vue2-timepicker'

  export default {
    name: 'Timer',
    components: {
      VueTimepicker
    },
    created () {
      this.now = moment()
    },
    data () {
      return {
        date: '',
        isRecording: false,
        startTime: {
          HH: '03',
          mm: '10'
        },
        // endTime: +new Date() + (1000 * 60 * 22),
        endTime: {
          HH: '10',
          mm: '05'
        },
        yourFormat: 'HH:mm',
        yourData: {
          HH: '03',
          mm: '10'
        },
        now: null
      }
    },
    computed: {
      rep () {
        let start = moment().utcOffset(0)
        start.set({
          hour: this.startTime.HH,
          minute: this.startTime.mm,
          second: 0,
          millisecond: 0
        })
        start.toISOString()
        start.format()

        let end = moment().utcOffset(0)
        end.set({
          hour: this.endTime.HH,
          minute: this.endTime.mm,
          second: 0,
          millisecond: 0
        })
        end.toISOString()
        end.format()
      },
      generation () {
        let start = moment().utcOffset(0)
        start.set({
          hour: this.startTime.HH,
          minute: this.startTime.mm,
          second: 0,
          millisecond: 0
        })
        start.toISOString()
        start.format()

        let end = moment().utcOffset(0)
        end.set({
          hour: this.endTime.HH,
          minute: this.endTime.mm,
          second: 0,
          millisecond: 0
        })
        end.toISOString()
        end.format()
        let diff = end.diff(start)
        let times = []

        for (let i = 1; i < 51; i++) {
          console.log(diff)
          let iteration = moment(end).add(diff * i)

          times.push({
            raw: iteration,
            human: moment(iteration).format('LTS')
          })
        }

        return times
      }
    },
    methods: {
    },
    filters: {
      human (time) {
        if (time === 'Recording...') return time

        let seconds = Math.floor(time / 1000)

        return seconds > 60
          ? Math.floor(seconds / 60) + 'm ' + (seconds % 60) + 's'
          : Math.floor(time / 1000) + 's'
      }
    }
  }
</script>

