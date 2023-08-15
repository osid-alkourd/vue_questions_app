<template>
  <v-col class="child_element" cols="6" sm="2">
    <v-text-field
      :value="value"
      @input="updateValue"
      :label="label"
      :placeholder="placeholder"
      :name="name"
      :type="type"
      solo
    ></v-text-field>
  </v-col>
</template>

<script>
export default {
  props: ["label", "placeholder", "name", "type", "value"],
  //emits: ["update:modelValue"],
  methods: {
    updateValue(newValue) {
      this.$emit("input", newValue); // Emit input event to update parent
    },
  },
};
</script>

<style>
</style>