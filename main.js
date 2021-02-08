new Vue({
  el: '#app',
  data: {
    disksList:[],
    selected:''
  },
  mounted() {
  const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function(resp){
       const disks = resp.data.response
       console.log(disks);
       self.disksList = disks;
    })

  },


})
Vue.config.devtools = true
