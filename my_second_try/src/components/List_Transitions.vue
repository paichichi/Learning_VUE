<template>
    <div class="button-class">
        <button class="button" @click="insert">insert at random index</button>
        <button class="button" @click="reset">reset</button>
        <button class="button" @click="shuffle">shuffle</button>
    </div>

  <TransitionGroup tag="ul" name="fade" class="transitionGroup">
    <div v-for="item in items" class="item" :key="item">
      <img :src="'https://picsum.photos/100?random=' + item" class="item-image">
      <div class="item-text">{{ item }} </div>
      <button @click="remove(item)">Remove</button>
    </div>
  </TransitionGroup>
</template>

<script>
import {shuffle} from 'lodash-es'

const getInitialItems = () => [1,2,3,4,5,6]

let id = getInitialItems().length +1

export default {
    data() {
        return {
            items: getInitialItems()
        }
    },
    methods: {
        insert() {
            const i = Math.round(Math.random() * this.items.length)
            this.items.splice(i, 0, id++)
        },
        reset() {
            this.items = getInitialItems()
        },
        shuffle() {
            this.items = shuffle(this.items)
        },
        remove(item) {
            const i = this.items.indexOf(item)
            if (i > -1) {
                this.items.splice(i, 1)
            }
        }
    }
}

</script>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}

.button-class {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
  border-radius: 10px;
}

.transitionGroup {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 300px;
  transition: all 0.3s ease-in-out;
}

.item-image {
    padding: 10px;
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.item-text {
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #4CAF50;
}

button {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.item:hover,
button:hover {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

</style>
