<template>
  <v-form>
    <v-container class="parent_container">
      <InputForm
        v-model="item.survey_caption"
        name="survey_caption"
        label="survey_caption"
        type="text"
        placeholder="survey caption"
      />

      <SelectForm
        v-model="item.status"
        name="status"
        label="survey status"
        :items="survey_cases"
        itemText="status"
        itemValue="value"
      />

      <InputForm
        type="date"
        name="expire_at"
        label="expire_at"
        v-model="item.expire_at"
      />

      <SubmitForm @submit="createNewSurvey" />
   
    </v-container>
  </v-form>
</template>

<script>
import InputForm from "../../components/forms/InputForm.vue";
import SelectForm from "../../components/forms/SelectForm.vue";
import SubmitForm from "../../components/forms/SubmitForm.vue";
// import { mapActions } from "vuex";

export default {
  data() {
    return {
      item: {},
      select: { firstName: "osid", id: "20" },
      items: [
        { firstName: "osid", id: "20" },
        { firstName: "mohab", id: "12" },
        { firstName: "ali", id: "2" },
      ],
    //  survey_caption: "",
    //  expire_at: null,
    };
  },
  components: {
    InputForm,
    SelectForm,
    SubmitForm,
  },
  computed: {
    survey_cases() {
      return this.$store.state.survey_cases;
    },

    // defaultStatus: {
    //   get() {
    //     return this.$store.state.default_survey_status;
    //   },
    //   set(value) {
    //     this.$store.commit("changeSurveyStatus", value);
    //    console.log(value)
    //   },
    // },
  },
  methods: {
    // ...mapActions(["createSurvey"]),
    createNewSurvey() {
      this.$store.dispatch("createSurvey", this.item);
      this.item={};
    },
  },
};
</script>

<style scoped>
.parent_container {
  margin: auto;
  margin-top: 70px;
}
.child_element {
  margin: auto;
}
</style>