<template>
  <DataTable
    :data="questions"
    :headers="headers"
    :search.sync="search"
  />
</template>


<script>
import DataTable from "../../components/tables/DataTable.vue";
export default {
  components: {
    DataTable,
  },
  data() {
    return {
      questions: [
        {
          question_id: "osid",
          question_serial: 159,
          title: 6.0,
          type: 24,
          notes: 4.0,
          add_details: 1,
          delete: 1,
          update: 1,
          view_details: 2
        },
      ],
    };
  },
  computed: {
    headers() {
      return this.$store.state.questionTableHeaders;
    },
    search: {
      get() {
        return this.$store.state.searchQuestionValue;
      },
      set(value) {
        this.$store.commit("updateSearchQuestionValue", value);
      },
    },
  },
};
</script>

<style scoped>
.custom_data_table {
  margin: auto;
  margin-top: 100px;
}
</style>>