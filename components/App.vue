<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import login from "./login/login.vue";
export default {
  name: "App",
  components: {
    login
  },
  data() {
    return {
      a: "hello world!"
    };
  }
};
</script>

<style>
</style>