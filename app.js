new Vue ({
  el:"#app-vue",
  data:{
    name: "Spiderman",
    point: 20,
    type: "Superhero",
    food: "แซลมอน",
    img: "./statics/img/spiderlogo.jpg"
  },
  methods:{
    addAg: function(){
      this.point++;
    },
    decAg: function(){
      this.point--;
    }
  }
})
