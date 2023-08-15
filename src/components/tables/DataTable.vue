<template>
  <v-card  class="custom_data_table">
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="localSearch"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    
    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  props: ['data' , 'headers' , 'search'],
  //emits: ["update:modelValue"],
   data() {
    return {
      localSearch: this.search,
    };
  },
  watch: {
    localSearch(newVal) {
      this.$emit('update:search', newVal);
    },
  },
};
</script>
<style>

</style>