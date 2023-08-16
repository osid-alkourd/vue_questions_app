<template>
  <v-btn class="mx-2" fab dark small color="indigo" @click="handleClick">
    <v-icon dark> mdi-plus </v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('add'); // Emit an event to trigger the addItem function in the parent
    }
  }
};
</script>

<style>
.mx-2{
    margin-top: 20px;
}
</style>