<template>
  <v-btn class="mx-2" fab dark small color="primary" @click="handleClick">
    <v-icon dark> mdi-minus </v-icon>
  </v-btn>
</template>

<script>
export default {
    methods: {
        handleClick(){
             this.$emit('delete'); 
        }
    }
};
</script>

<style>
</style>