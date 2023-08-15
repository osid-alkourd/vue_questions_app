<template>
  <div>
    <DataTable :data="surveys" :headers="headers" :search.sync="search" />
  </div>
</template>
<script>
import DataTable from "../../components/tables/DataTable.vue";
//import axios from 'axios';
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      // surveys: [
      //   {
      //     survey_title: "KitKat",
      //     created_at: 518,
      //     expire_at: 26.0,
      //     status: 65,
      //     add_question: 7,
      //     view_questions: 6,
      //   },
      // ],
    };
  },
  computed: {
    headers() {
      return this.$store.state.surveyTableHeader;
    },
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("updateSearchValue", value);
      },
    },
    surveysData() {
      return this.$store.state.surveys;
    },

    ...mapGetters(["getSurveys"]),
    surveys() {
      // return this.getSurveys; // Assuming you have a getter named 'getSurveys'
      return this.getSurveys.map((survey) => ({
        survey_title: survey.survey_caption,
        created_at: survey.created_at,
        expire_at: survey.expire_at,
        status: survey.status,
        add_question: 7,
        view_questions: 6,
      }));
    },
  },
  mounted() {
    //console.log(this.$store.state.surveys)
    this.fetchSurveys();
  },
  methods: {
    ...mapActions(["fetchSurveys"]),
  },
};
</script>
<style scoped>
.custom_data_table {
  margin: auto;
  margin-top: 100px;
  width: 50%;
}
</style>