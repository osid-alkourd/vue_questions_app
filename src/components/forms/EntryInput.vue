<template>
  <v-text-field
    :value="value"
    @input="updateValue"
    :placeholder="placeholder"
    solo
  ></v-text-field>
</template>

<script>
export default {
  props: ["placeholder", "type", "value"],
  methods: {
    updateValue(newValue) {
      this.$emit("input", newValue); // Emit input event to update parent
    },
  },
};
</script>

<style>
</style>