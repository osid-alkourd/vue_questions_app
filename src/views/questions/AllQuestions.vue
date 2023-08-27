<template>
  <v-form>
    <v-container fluid>
      <RadioButton question_text="Your favourite search engine" />
      <SingleSelectForm/>
    </v-container>
  </v-form>
</template>
<script>
import RadioButton from "../../components/forms/RadioButton.vue";
import SingleSelectForm from "../../components/forms/SingleSelectForm.vue"
export default {
  components: { RadioButton,SingleSelectForm },
  data:()=> {
    return{

    }
  },
  computed: {},
};
</script>

<style scoped>
.custom_data_table {
  margin: auto;
  margin-top: 100px;
}
</style>>