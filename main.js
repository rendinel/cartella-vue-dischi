new Vue({
  el: '#app',
  data: {
    disksList:[],
    genre:[
      'jazz',
      'pop',
      'metal',
      'rock'
    ],
    selected:'',
  },
  methods: {
    searchGenre: function() {
    this.genre.forEach((element) => {
    if(genre.item == disksList.genre) {
      element.visible = true;
    } else {
      element.visible = false;
    }
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
