<template>
    <div>
      <h1>Todo List</h1>
      <form @submit.prevent="addTask">
        <input type="text" v-model="newTask" placeholder="What need to be done? 🤔">
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="task.id">
            <td>{{ task.text }}</td>
            <td><input type="checkbox" v-model="task.completed"></td>
            <td><button @click="deleteTask(index)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const tasks = ref([
        { id: 1, text: 'Write Tech Demo', completed: true },
        { id: 2, text: 'Buy iphone 14 Pro Max 📱', completed: false },
        { id: 3, text: 'Holiday Travel', completed: false },
        { id: 4, text: 'Get Out of the Single 😞', completed: false }
      ]);
      const newTask = ref('');
  
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
  
      function deleteTask(index) {
        tasks.value.splice(index, 1);
      }
  
      return {
        tasks,
        newTask,
        addTask,
        deleteTask
      };
    }
  };
  </script>
  
<style>

h1 {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}

form {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

button[type="submit"] {
  margin-left: 10px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button[type="submit"]:hover {
  background-color: #0069d9;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
}

thead th {
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #ddd;
}

tbody td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

td input[type="checkbox"] {
  margin-right: 10px;
}
</style>
