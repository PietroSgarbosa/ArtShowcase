<template>
  <div>
    <b-button variant="success" @click="redirect"></b-button>
  </div>
</template>

<script>
import * as config from "@/config.json";

export default {
  component: {},
  data: _ => {
    return {};
  },

  methods:{
    redirect(){
      this.$router.push("register");
    },
  },
};
</script>


<style>
</style>