<template>
<v-row align="center"  justify="center">
     <v-col
          cols="12"
          md="6"
          xl="4"
        >
     <v-select
            :items="items"
            chips
            label="Chips"
            solo
          ></v-select>
    </v-col>
</v-row>
</template>

<script>
export default {
    data: () => ({
      items: ['foo', 'bar', 'fizz', 'buzz'],
    }),
};
</script>

<style>
</style>