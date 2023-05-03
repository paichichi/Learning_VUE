<template>
  <div class="Function-two">
    <TwoCompoment />
  </div>
</template>

<script>
import TwoCompoment  from '../components/List_Transitions.vue';

export default {
  components: {
    TwoCompoment
  }
}
</script>

<style>
.Function-two{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>