<template>
  <div class="home">
    <h1>Welcome to your Vue.js App</h1>
    <div>{{ name }}</div>
    <div>
      <button @click="onClick">Click Me</button>
    </div>
    <div><button @click="reverseMessage">Reverse Message</button></div>
    <div><a href="https://vuejs.org" @click.prevent="notify">VUE.JS(link prevent)</a></div>
    <div><a href="https://vuejs.org">VUE.JS</a></div>
    <div><button @click="addItem">add Item</button></div>
    <div v-for="i in collection" :key="i.name">{{ i.name }}</div>
  </div>
</template>

<script>
import {ref, reactive} from "vue"
export default {
  setup(){
    const name = ref("Neil");
    const collection = reactive([]);

    function onClick() {
      name.value = name.value + "+";
    }

    function addItem() {
      collection.push({ name: "Hello World!"})
    }

    function reverseMessage() {
      name.value = name.value.split('').reverse().join('')
    }

    function notify() {
      alert("navigation was prevented.")
    }

    return {
      name, onClick, collection, addItem, reverseMessage, notify
    }
  }
}
</script>
