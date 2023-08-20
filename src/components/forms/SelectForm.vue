<template>
  <v-col class="child_element" cols="12" sm="6" md="2">
    <v-select
      :hint="hint"
      :items="items"
      :label="label"
      :name="name"
      :item-text="itemText"
      :item-value="itemValue"
      persistent-hint
      solo
     v-on="$listeners"
     v-bind="$attrs"
    ></v-select>
  </v-col>
</template>

<script>
export default {
  props: ["name", "label", "items", "itemText", "itemValue", "hint"],
  //emits: ["update:modelValue"],
  // methods: {
  //   updateValue(newValue) {
  //     this.$emit("input", newValue); // Emit input event to update parent
  //   },
  // },

};
</script>

<style>
</style>