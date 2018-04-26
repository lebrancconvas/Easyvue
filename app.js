new Vue ({
  el:"#app-vue",
  data:{
    name: "แมวน้ำ",
    age: 20,
    type: "สัตว์น้ำ",
    food: "แซลมอน"
  },
  methods:{
    addAg: function(){
      this.age++;
    },
    decAg: function(){
      this.age--;
    }
  }
})
