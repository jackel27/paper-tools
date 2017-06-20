<style>
  @import "~spectre.css";
  .panel-title {
    font-size: 5em!important;
  }
  .panel-subtitle {
    font-size: 3em;
  }
  a {
    font-size: 3em;
  }
  .btn-lg {
    height: 80px!important;
    font-size: 3em!important;
  }
</style>
<template>
  <div id="app">
    <div class="column col-12">
      <div class="panel">
        <div class="panel-header text-center">
<!--           <figure class="avatar avatar-lg">
            <img src="img/avatar-2.png">
          </figure> -->
          <div class="panel-title mt-10">Paper Tools</div>
          <div class="panel-subtitle">DAVID KAISER</div>
        </div>
        <nav class="panel-nav">
          <ul class="tab tab-block">
            <li class="tab-item" :class="[$route.name === 'Timer' ? 'active' : '']">
              <router-link to="Timer">Timer</router-link>
            </li>
            <li class="tab-item" :class="[$route.name === 'Calculator' ? 'active' : '']">
              <router-link to="Calculator">Calculator</router-link>
            </li>
            <li class="tab-item" :class="[$route.name === 'Diameter' ? 'active' : '']">
              <router-link to="Diameter">Diameter</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  // import 'blah' from './components/blah.vue
  name: 'App',
  components: {
  },
  mounted () {
    console.log(this.$route.name)
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
