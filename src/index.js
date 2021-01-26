import Vue from 'vue'
import HelloWorld from "./components/HelloWorld";

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(HelloWorld)
})