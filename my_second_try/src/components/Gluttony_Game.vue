<template>
    <div id="app" tabindex="0" @keydown="handleKeyPress">
      <div class="game-board">
        <div class="snake" v-for="(place, index) in snake" :key="index" :style="{ top: place.y + 'px', left: place.x + 'px' }"></div>
        <div class="food" :style="{ top: food.y + 'px', left: food.x + 'px' }"></div>
      </div>
      <div class="status-bar">
        <span>Use arrow keys on the Keyboard to move the snake! 🐍</span>
        <span v-if="isGameOver">😞 Game over 😞. Score: {{ score }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // initial state of the snake, food, direction, etc.
        snake: [{ x: 100, y: 100 }],
        food: { x: 200, y: 200 },
        direction: "right",
        isGameOver: false,
        score: 0
      };
    },
    methods: {
      handleKeyPress(event) {
        switch (event.keyCode) {
          case 37: // left arrow - keycode value
            if (this.direction !== "right") {
              this.direction = "left";
            }
            break;
          case 38: // up arrow - keycode value
            if (this.direction !== "down") {
              this.direction = "up";
            }
            break;
          case 39: // right arrow - keycode value
            if (this.direction !== "left") {
              this.direction = "right";
            }
            break;
          case 40: // down arrow - keycode value
            if (this.direction !== "up") {
              this.direction = "down";
            }
            break;
        }
      },
      moveSnake() {
        // move the head of the snake in the current direction
        let head = { x: this.snake[0].x, y: this.snake[0].y };
        switch (this.direction) {
          case "left":
            head.x -= 10;
            break;
          case "up":
            head.y -= 10;
            break;
          case "right":
            head.x += 10;
            break;
          case "down":
            head.y += 10;
            break;
        }
  
        // check if the snake has collided with a wall or with itself
        if (head.x < 0 || head.x >= 500 || head.y < 0 || head.y >= 500) {
          this.isGameOver = true;
          return;
        }
        for (let i = 1; i < this.snake.length; i++) {
          if (head.x == this.snake[i].x && head.y == this.snake[i].y) {
            this.isGameOver = true;
            return;
          }
        }
  
        // check if the snake has eaten the food
        if (head.x == this.food.x && head.y == this.food.y) {
          this.snake.unshift(head);
          this.food.x = Math.floor(Math.random() * 50) * 10;
          this.food.y = Math.floor(Math.random() * 50) * 10;
          this.score++;
        } else {
          // move the rest of the snake forward
          this.snake.pop();
          this.snake.unshift(head);
        }
      }
    },
    mounted() {
      setInterval(this.moveSnake, 100);
      this.$el.focus();
    }
  };
  </script>

<style>
.game-board {
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #333;
  margin: 20px auto;
}

.snake {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
}

.food {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 10px;
  background-color: #ccc;
}
</style>