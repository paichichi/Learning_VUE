<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
</script>

<template>
  <header>

    <div class="container">

      <nav>
        <router-link class-active="active" to="/">Function one</router-link>
        <router-link class-active="active" to="/two">Function two</router-link>
        <router-link class-active="active" to="/three">Function three</router-link>
        <router-link class-active="active" to="/four">Function four</router-link>
        <router-link class-active="active" to="/five">Function five</router-link>

      </nav>

    </div>
  </header>

  <RouterView />
</template>