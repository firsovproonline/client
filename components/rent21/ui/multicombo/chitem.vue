<template>
  <div>
    <label  class="container">{{item.name}}
      <input  v-if="values && values.indexOf(item.id) !== -1" @click="click" :id="'inline-sqr-'+index" type="checkbox" checked="">
      <input  v-else @click="click" :id="'inline-sqr-'+index" type="checkbox" >
      <span class="checkmark" ></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "chitem",
  props:{
    item : null,
    index : null,
    values: []
  },
  methods:{
    click(){
      this.item.ch = !this.item.ch
    }
  }
}
</script>

<style scoped>
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 8px;
  height: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>
