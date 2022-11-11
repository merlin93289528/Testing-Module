<template>
  <div>
    <div>
      <label for="hours">Години: </label>
      <input name="hours" v-model="hours"/>
    </div>
    <div>
      <label for="minutes">Хвилини: </label>
      <input name="minutes" v-model="minutes"/>
    </div>
    <div>
      <button class="inc-minutes" @click="minutes += 1">+1 хвилина</button>
      <button class="inc-hours" @click="hours += 1">+1 година</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 't-time',

    data() {
      return {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes()
      }
    }
  }
</script>