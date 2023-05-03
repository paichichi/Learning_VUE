# Tech Demo - VUE
Vue.js (or simply Vue) is a lightweight, JavaScript framework for building reactive web user interfaces. Vue extends standard HTML and CSS to create a suite of powerful tools for building the front end of interactive web applications. In this application guide to the Vue front-end framework, we'll discuss and explore the distinctions between Vue and traditional development (JQuery), some in-depth application scenarios, and GUI. We will gradually deepen the depth of the Vue application in the following tasks, so let's get started!

## Step 0 - Development environment setup
### Step 0.1 - VUE CLI - Environment installation package (Optional!!!)❤️
In all of the Vue demos, we have completed the Vue infrastructure and environment setup. So you don't have to worry about setting up your environment. If you want to take a closer look at how the Vue CLI Works, you can try it yourself. We show the process of setting up the environment, you can also check from here(https://cli.vuejs.org/). 

The CLI ( @vue/cli ) is a globally installed npm package and provides the vue command in your terminal. So, open a terminal window and enter the following code to create a new project:

```sh
npm init vue@latest
```

Next, we'll create a new VUE app. Please care about the inital setting, and run the following command:

```sh
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes(select yes)
✔ Add JSX Support? … No / Yes(select yes)
✔ Add Vue Router for Single Page Application development? … No / Yes(select yes)
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

This is the basic framework for Your Vue, information as follow:
- Project name: <your-project-name>
- Framework: VUE
- Variant: VITE + VUE

    
### Step 0.2 - Install the necessary components & run

Now, install dependencies and start the dev environment, open the terminal and enter the following code to install the component and run the environment.
    
```sh
npm install
npm run dev
```

This will start the development environment running. The application will be displayed in a browser window (the local website will be displayed on the terminal, for example, a http://127.0.0.1:5173/). Since we chose to create the base router when we created the base application, you will see that the page loads in your browser and has two routers (these are 'home page' and 'about page').

Familiarise yourself with the basic logic of Vue (very similar to React). When you're done with our example, you can close the web page in your browser and stop the Webpack from running in the terminal ('Ctrl + C'). Next, we'll briefly describe some of the advantages of Vue versus traditional development (JQuery). Also, VUE and React.

### Step 0.3 - Understand the difference between the VUE and JQuery
Vue.js is a JavaScript framework, while jQuery is a cross-platform JavaScript library. They are both open source, but Vue.js is used as an integrated tools framework with its data-driven views and bi-directional data binding so that code changes can be displayed directly in the viewport with direct feedback. Whereas jQuery, a traditional development framework, requires a restart of the viewport to see changes and provide input, jQuery is also the most commonly used and widely deployed JavaScript library.
    
The Difference are shown below:   
![vue_vs_JQuery](https://user-images.githubusercontent.com/94027570/229483217-7fe60d3a-5c52-4ef3-9519-020c7e543b95.png)

### Step 0.4 - Understand the difference between the VUE and React
VUE and React are similar in features, they both use a virtual DOM. They are both lightweight and have a component-based architecture. In terms of differences, React is a library and Vue is a framework. In React, re-rendering does not occur when trying to mutate a state object. In order to trigger a re-render, the setState() method should be used. In Vue, however, state is represented in the data(). Unlike React, mutation of the state object triggers a re-render.

The Difference are shown below:
    
![vue_vs_react](https://user-images.githubusercontent.com/94027570/229492477-c64bbbb6-a77e-4c15-8f7a-a38e9598d856.png)

    
## Step 1 - Basic Logic & Functionality
### Step 1.1 - Basic Logic of vue
In this step we will focus on the `my_first--start` folder, which is the base framework package we generated using the `VUE CLI`.

To begin, open the `my_first--start` file. making sure to type `npm install` dependencies first and then `npm run dev` in Terminal. When the server starts, open the Windows link displayed in the terminal, e.g. http://127.0.0.1:5173/. You can browse to any file within the `src` folder. This folder contains some critical components such as: `app.vue`, `main.ts`, `views`, `router`, `components`, `assets`. Let's take look of the core functionality of vue, as shown below:

- In `main.ts`, Vue3 provides a createApp function for creating application instances. This function takes a component as an argument and becomes the root of the instance. The application instance provides a mount method that mounts the instance to an HTML element. We also use router in the arguments.
    ```
    const app = createApp(App)
    app.use(router)
    app.mount('#app')
    ```

- In `App.vue`, `<Script Setup>` is the recommended way to compose extensible components. It gives Vue developers the freedom to create high-performance components with built-in readability, reusability, maintainability, modularity and even makes them more suitable for TypeScript.
The `<template>` syntax, allows you to declaratively bind the rendered DOM to the data of the underlying component instance. All Vue templates are syntactically valid HTML that can be parsed by specification-compliant browsers and HTML parsers.
    ```
    <script setup lang="ts">
        import { RouterLink, RouterView } from 'vue-router'
        import HelloWorld from './components/HelloWorld.vue'
    </script>
    
    <template>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </template>
    ```
- In the `views` folder, `AboutView.vue` and `HomeView.vue` are router elements embedded in the `<template>` of `App.vue`. Therefore, we need to declare `<RouterLink>` in the `App.vue` and `router` folders. Before we can introduce the router functionality, we need to introduce `{ RouterLink, RouterView } from 'vue-router'` in `<script setup>`. Once this is done, we can add HTML elements, function calls and inline CSS to the views.
    
- The purpose of the `Router` is to define a set of rules to `map` URL patterns to individual components. Assuming that you have at least one component, you can start creating your routes like so:
    ```
    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView
        }
      ]
    })
    ```

  To start out, you'll need to create an array of objects that describe each route. A route typically has a name, a path, and a destination. In this         example, when the root path is specified, it loads a Home component. You then import the createRouter function from the `vue-router` package and use it   to create a router object with the routes. This object is a singleton that you can just return from the file.   

- In the components folder, this contains the elements that have been compiled such as, images, integrated features and so on. If we need to call them repeatedly, we can save time by introducing them in the <script setup>.

### Step 1.2 - vue's simple Functions
From the page, we can see all the elements we have already written in `src/HomeView.vue`, the page style looks simple because the CSS is not optimised. Don't worry, we will introduce splendid decorations and interesting features later in the task. 😊 Let's go over the basic functionality and usage of vue as follows:

![image](https://user-images.githubusercontent.com/94027570/229539367-b6ec48f6-a54e-4f72-94f0-ac7bdcc0b7e7.png)
    
- First, let's see how the function is called? How many ways are there?
    
    ```
    # one way to use funciton()
    <script setup>
        import ... from './MyComponent.vue'
    </script>
    <template>
        <... />
    </template>
    
    # another way use inside the .vue file
    <script>
        export default{
          setup(){
          ...
          return{
           ...
        }
       }
      }
    </script>
    <template>
        <div>{{...}}</div>
    </template>
    ```
    So, in the above example, we introduced two ways, the first one is to import the `function ()` from the `components` folder and the second one is written directly with the vue file. We find that, unlike react, multiple elements are often collected in a single vue file. Of course, we can also write `<script setup>` to the component folder and call it using import. This is similar to react, with the caveat that the code inside the `<script setup>` is compiled into the content of the component `setup()` function.

- Next, let's introduce two classic elements in VUE3, ref and reactive. ref can be used to assign a value to an instance and get a reference to it directly when the instance is mounted, so it is useful for element references. Instances defined with reactive are able to track access and changes to properties of reactive objects, which can be used in situations where interaction is required.
    ```
    const name = ref("Neil");
    const collection = reactive([]);
    ```
  Neil is my name, feel free to change it to any element you want 😊. Here `name` as an instance can be called directly by `<template>`. And for `collection` we use `reactive()` to create an empty list which we can see directly in `<template>` when our function makes updates to the list.
    
- Then, we introduce four functions, they are onClick(), addItem(), reverseMessage(), notify(). 
    - For `onClick()`, the name instance is updated when the user clicks the button, and here it is important to note that I need to use `.value` in order to read out the data.
    ```
    function onClick() {
      name.value = name.value + "+";
    }
    ```
    - For `addItem()`, the list is updated when the user clicks the button.
    ```
    function addItem() {
      collection.push({ name: "Hello World!"})
    }
    ```
    - For `reverseMessage()`, when the user clicks the button, the name instance is updated because of `reverse()`.
    ```
    function reverseMessage() {
      name.value = name.value.split('').reverse().join('')
    }
    ```
    - The `notify()` function will be called when the user clicks on the first link. `.prevent` will prevent the page from popping up.

We showed the basic elements of VUE, including how functions are called, the assignment of variables, vue's router, and the use of <template>. Next, let's take it a step further and showcase the features and interesting functionality of VUE.
    
## Task 2 - vue's Interesting applications
In this task we will take a closer look at how VUE produces applications. We will use 5 routers to wrap 5 different applications separately. I have imported main.css in app.vue to make a simple navigation bar for the overall application and to be able to change the navigation bar display state depending on the activation of the page.
    ![image](https://user-images.githubusercontent.com/94027570/230774110-831f6be3-2236-448c-9e79-483b5775f9ca.png)
   
    
 By the way, don't forget do `npm install` in the terminal 😎.

## Task 2.1 - Pokémon API
    
We can find the source file in `components/API.vue`. The whole program looks as follows in browser:    
    ![image](https://user-images.githubusercontent.com/94027570/230774185-bc7036d0-be63-4420-b7e6-0bf42a58a307.png)
    
This program, encapsulated by a large `<table>`, displays different elements, including pictures of Pokémon, their names, skills, abilities, attributes, etc. We have used another way of writing the vue function and we can see that it contains two main elements, `data(){}`, `created(){}`. `data(){}` returns the value in the function component and the variable is used here as a global variable. `created(){}` is the main function and variable update, here as a local variable.
    
- First, we use `await fetch` here to import the Pokémon API, where we are limited to a total of 50 Pokémon, or you can customise the number. Here we are using sub-API, as the top-level API only shows the `name` and `url` of the Pokemon, so we call the specific API again via the `map()` function for each element of the `pokemonList`, this loop will introduce specific elements for each Pokemon a total of 50 times. Here, we return the Pokemon `name`, `url` and sub-API imported `sub-elements` from the local variable to the global variable `pokemonList`.
 ```
async created() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    const data = await response.json()
    this.pokemonList = await Promise.all(data.results.map(async (poke, index) => {
       const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
       const pokemonData = await pokemonResponse.json()
       console.log(pokemonData)
       return { poke, ...pokemonData }
    }))}
```
    
- We can use the `v-for` directive to render a list of items based on an array. So here we use the VUE format `item in items :key='item.name'`. We show a number of elements, for example `sprites.front_default` is a picture of Pokémon, `name`, `types` (Pokémon may have more than one type so we use `map()` function to retrieve them), `abilities` in the same step. Finally, `moves` represent the skills of the Pokémon, and since the Pokémon will have many skills (slice (0,4) means that only the top 4 skills are displayed).
```
<tr v-for="poke in pokemonList" :key="poke.name">
  <td><img :src="`${poke.sprites.front_default}`"></td>
  <td>{{ poke.name }}</td>
  <td>{{ poke.types.map(type => type.type.name).join(', ') }}</td>
  <td>{{ poke.abilities.map(ability => ability.ability.name).join(', ') }}</td>
  <td>
     <ul>
        <li v-for="skill in poke.moves.slice(0, 4)" :key="skill.move.name">{{ skill.move.name }}</li>
     </ul>
  </td>
</tr>
```
    
## Task 2.2 - List Transitions
    
We can find the source file in `components/List_Transitions.vue`. The whole program looks as follows in browser:    
    ![image](https://user-images.githubusercontent.com/94027570/230775960-13c67057-94b1-4587-94b1-3fc81438e671.png)
    
My aim was to think about how to show some simple animation effects of various elements in vue. For this task we imported a new plugin, `shuffle`. To achieve the shuffle effect, we wrapped each element into a card and displayed it horizontally.
    
- First, we declare a variable `getInitialItems` to store our initial numbers. Wrap `id` around the next card. We just need to return `getInitialItems()` named after `items`, the main function will update `items`.
 ```
const getInitialItems = () => [1,2,3,4,5,6]
let id = getInitialItems().length +1
    
return {
    items: getInitialItems()
}
```
    
- We have created four main functions which are `insert()`, `reset()`, `shuffle()` and `remove(item)`.
    - `insert()` generates a random number from 0 to the length of the array. `splice()` is used to add a specific number to the array.
    ```
    insert() {
            const i = Math.round(Math.random() * this.items.length)
            this.items.splice(i, 0, id++)
        }
    ```
    
    - `reset()` is used to reassign the six numbers from getInitialItems() to items.
    ```
    reset() {
            this.items = getInitialItems()
        }
    ```
    
    - `shuffle()` is used to shuffle the array currently in items.
    ```
    shuffle() {
            this.items = shuffle(this.items)
        }
    ```
    
    - The splice() in `remove(item)` is used to clear a particular number from the array.
    ```
    remove(item) {
            const i = this.items.indexOf(item)
            if (i > -1) {
                this.items.splice(i, 1)
            }
        }
    ```
    
    
## Task 2.3 - Todo List
We can find the source file in `components/TodoList.vue`. The whole program looks as follows in browser: 
![image](https://user-images.githubusercontent.com/94027570/230778254-aae93820-b20a-462e-922f-10270df9f3e8.png)
    
As shown in the picture, this is a simple Todo List application. Users can mark the status of each task, delete tasks, or add tasks. In this attempt, we switched back to the way the main functions in task 1 were written. All the functions are integrated together and are called the Composition API.
- First, use ref to create an array, which is the starting Todos when the program starts, encapsulated by the `tasks` variable. To be able to keep track of the new Todos added, we create a new variable called `newTask`. The purpose of this is to distinguish between existing Todos and new Todos. `v-model="newTask"` in `template` allows the input values to be recorded directly into the array.
```
<form @submit.prevent="addTask">
     <input type="text" v-model="newTask" placeholder="What need to be done? 🤔">
     <button type="submit">Add</button>
</form>
```
- When the button is clicked and the addTask() function is called, we use trim() to remove the extra spaces and test the input value, if it is empty it will not update the `tasks` array. If it is not empty, the id, text, and completed are entered into the `tasks` array.
```
function addTask() {
    if (newTask.value.trim() !== '') {
       tasks.value.push({
          id: Date.now(),
          text: newTask.value.trim(),
          completed: false
    });
    newTask.value = null;
   }
}
```
- When `deleteTask()` is called, `splice()` will remove the particular data from the `tasks` array.
    
    
## Task 2.4 - Quiz game
We can find the source file in `components/Quiz_Game.vue`. The whole program looks as follows in browser: 
![image](https://user-images.githubusercontent.com/94027570/230779246-dff0bc81-2b8e-4abf-958b-4d9154b99c0b.png)
    
This is a quiz program with three questions, and when the user finishes answering the questions the final result is displayed. We have imported a new vue element, `computed `. For complex logic containing reactive data, it is recommended to use the computed attribute, which can help reduce code complexity.

- First, we use `reactive()` to declare our three questions, and since the questions need to be interactive in the template, we use `reactive()` instead of `ref()`. and declare a `state` variable for the state of the question that keeps track of the current state of the question.
```
const state = reactive({
   currentQuestionIndex: 0,
   correctAnswers: 0,
   showResult: false,
});   
```
    `currentQuestionIndex` records the index of the current question, `correctAnswers` records how many questions have been answered correctly, `showResult` will become true when `currentQuestionIndex` equals the number of questions.
    
- The `currentQuestion` variable will record the state of the question currently being answered by calling `state` via `computed()`.
```
const currentQuestion = computed(() => questions[state.currentQuestionIndex]);
```
    
- The `checkAnswer` variable will be triggered each time the user clicks on the answer tab. If the answer is correct, the value of `correctAnswers` is added by one. If `currentQuestionIndex` is less than the total number of questions, the value of `currentQuestionIndex` will be increased by one. If it is equal or greater, the state of `showResult` will change to true, so the three states in the state will be constantly updated in this function.
    ```
    const checkAnswer = (answer) => {
      if (answer.correct) {
        state.correctAnswers++;
      }

      if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex++;
      } else {
        state.showResult = true;
      }
    };
    ```
                                                       
-  `v-if` is used in `template` to detect if a boolean is triggered. The block will only be rendered if the expression of the directive returns a true value.
    ```
      <div v-if="state.showResult">
        <h2>You got {{ state.correctAnswers }} out of {{ questions.length }} correct!</h2>
        <button @click="restartQuiz">Restart Quiz</button>
      </div> 
    ```
    So, when `showResult` is displayed as true, the block is activated. `restartQuiz` will reset the values of the three elements in state.
    
- `currentQuestion` is set in the `template` to display the data in the current array based on the value of `currentQuestionIndex`. So when the data is updated, by assigning the value `computed` the updated data can be passed from the new variable to `template`, thus saving us the need for complicated update calculations.
    
   
## Task 2.5 - Gluttony game
We can find the source file in `components/Gluttony_Game.vue`. The whole program looks as follows in browser:
    ![image](https://user-images.githubusercontent.com/94027570/230781146-72a72d4f-9897-4ef7-9f40-b4289668e6bc.png)
    
As you can see, this is a simple snake game that includes how to use event keydown in VUE, so the difficulty of the program is focused on how to make the snake move and follow the keyboard commands and how to determine the death of the snake. So, let's get started!
- This time we have added a new feature, `mounted()`, which will keep one of the main functions up to date. This time we have designed the snake to move 10 pixels in 10 fractions of a second.
    ```
    mounted() {
      setInterval(this.moveSnake, 100);
      this.$el.focus();
    }
    ```
    `moveSnake()` will read the current position of the snake on the X and Y axes and execute one of the four cases, changing 10 pixels each time it is executed.
    ```
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
       ...
    ```

- In `data()` we introduce global variables such as the initial position of the snake, the initial position of the food, the initial direction of movement, the boolean value for the end of the game, and the initial score. Also, we can note that the variable for `snake` is an array, so each time a snake successfully eats food, each section of the snake's body will be recorded in the array. And it will always be updated.
    ```
    return {
        // initial state of the snake, food, direction, etc.
        snake: [{ x: 100, y: 100 }],
        food: { x: 200, y: 200 },
        direction: "right",
        isGameOver: false,
        score: 0
      }
    ```

- The `handleKeyPress(event)` function solves the problem of how to recognise the keyboard, we looked online and found that the up, down, left and right arrows are 37,38,39,40 in the keyboard code, please check this link:[arrow keycode](https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript).
    ```
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
      }
    ```
    
- To detect if a snake has collided with a wall or died in contact with its body. We have created the variable `head`, our game block is 0 to 500, so `isGameOver` will change to true whether `head` has a value of 0 or 500 on the X or Y axis. The method for detecting whether it has hit its own body is very simple. We will loop through each section of the snake's body and compare it to the current `head` variable. If the coordinate values are equal `isGameOver` will change to true.
    ```
    ...
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
    ...                                      
     ```
                                              
- To detect whether the snake has eaten the food, we introduce the `unshift()` function. This method adds the specified element to the beginning of the array and returns the new length of the array. So when the coordinates of the randomly generated food equal the coordinates of `head`, we add the coordinates of `head` to the beginning of the array `snake` by using the `unshift()` function, and score it plus one. In addition to this, on each move, to make the snake move, we use `pop()` to remove the last coordinate from `snake` and add the new coordinate to the beginning of `snake` using `unshift()`.
   ```
      ...
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
  ``` 
                                             
- When we tried to run the program, we found a problem. When the `tabindex="0"` attribute is set to 0 for the div element with the ID app. This means that the div element can receive focus when the user navigates through the page using the Tab key on the keyboard. When the div element has focus, the @keydown event listener attached to it will call the handleKeyPress method whenever a key is pressed. This allows you to handle keyboard events and perform actions based on the user's input.
   ```
    <div id="app" tabindex="0" @keydown="handleKeyPress">
      <div class="game-board">
        <div class="snake" v-for="(place, index) in snake" :key="index" :style="{ top: place.y + 'px', left: place.x + 'px' }"></div>
        <div class="food" :style="{ top: food.y + 'px', left: food.x + 'px' }"></div>
      </div>
        ...
    </div>
   ```
  Use `v-for` to display the snake's coordinates as a loop in the browser, and food will randomly refresh the coordinates as it is eaten.
                                              

---
                                              
## This tech demos showcases my understanding of vue from a beginner's perspective, so feel free to contact me if you have any questions.❤️
