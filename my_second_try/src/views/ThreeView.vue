<template>
    <div class="Function-three">
      <threeCompoment />
    </div>
  </template>
  
  <script>
  import threeCompoment  from '../components/TodoList.vue';
  
  export default {
    components: {
        threeCompoment
    }
  }
  </script>

<style>
.Function-three {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>