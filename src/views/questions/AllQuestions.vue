<template>
  <v-form class="mt-14">
    <v-container>
      <v-row align="center" v-for="item in items" :key="item.id">
        <template v-if="item.question_type == 2">
        <v-col cols="12" md="4" xl="4" >
          <RadioButton :question_text="item.title" :details="item.details" />
        </v-col>
        </template>
        <template v-else-if="item.question_type == 1">
          <v-col cols="6" md="2" xl="4">
            <v-subheader>{{ item.title }}</v-subheader>
          </v-col>
          <v-col cols="6" md="4" xl="4">
            <EntryInput
              v-model="respones.answer_text"
              :placeholder="item.title"
            />
          </v-col>
        </template>
        <template v-else-if="item.question_type == 4">
          <v-col cols="6" md="2" xl="4">
            <v-subheader>{{ item.title }}</v-subheader>
          </v-col>
          <v-col cols="12" md="4" xl="4">
            <SingleSelectForm v-model="respones.answer_text" :details="item.details"/>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import RadioButton from "../../components/forms/RadioButton.vue";
import SingleSelectForm from "../../components/forms/SingleSelectForm.vue";
import InputForm from "../../components/forms/InputForm.vue";
import EntryInput from "../../components/forms/EntryInput.vue";
//import SingleSelectForm from '../../components/forms/SingleSelectForm.vue';
import { mapGetters } from "vuex";

export default {
  components: { RadioButton, SingleSelectForm, InputForm, EntryInput },
  data: () => {
    return {
      items: [],
      respones: [{}],
      //answer_text: ''
    };
  },
  methods: {
    showSurvey() {
      this.$store.dispatch("showSurvey", this.$route.params.surveyId);
    },
  },
  computed: {
    survey_title() {
      return this.$store.state.survey_title;
    },
    //...mapGetters(["getSingleSurvey"]),
    survey() {
      return this.$store.state.singleSurvey;
    },
  },
  created() {
    this.showSurvey();
    // console.log(this.$store.state.survey_title);
    this.$watch("survey_title", (title) => {
      if (title != "") {
        console.log(title);
        //this.items  =
      }
    });
    this.$watch("survey", (survey) => {
      if (survey.length != 0) {
        //console.log(this.survey[0].id);
        this.items = survey;
        // console.log(this.items[0].details[0].answer_option);
      }
    });
  },
};
</script>

<style scoped>
.custom_data_table {
  margin: auto;
  margin-top: 100px;
}
</style>>