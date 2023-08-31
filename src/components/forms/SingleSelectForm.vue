<template>

     <v-select
            :items="details"
            chips
            item-text="answer_option"
            item-value="id"
            label="Chips"
            solo
          ></v-select>
    
</template>

<script>
export default {
    data: () => ({
      items: ['foo', 'bar', 'fizz', 'buzz'],
    }),
    props: ['details']
};
</script>

<style>
</style>