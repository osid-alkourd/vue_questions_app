<template>
  <div class="super_parent">
    <v-container class="parent_container">
          <h1>{{survey_title}}</h1>

      <v-form id="first_form">
        <v-container fluid v-for="(item, index) in items" :key="index">
          <v-row>
            <InputForm
              v-model="item.title"
              label="question title"
              type="text"
              placeholder="question title"
            />
            <SelectForm
              v-model="item.question_type"
              label="question type"
              :items="questions_types"
              itemText="type"
              itemValue="value"
              @change="addQuestionDetail(item)"
            />
            <SelectForm
              v-model="item.answer_option"
              label="answer option"
              :items="answer_options"
              itemText="option"
              itemValue="value"
            />
            <InputForm
              type="text"
              label="notes"
              v-model="item.question_notes"
            />

            <IconAdd v-if="index == items.length - 1" @add="addItem()" />
            <IconDelete v-if="items.length > 0" @delete="deleteItem(index,item.id)" />
          </v-row>
          <v-container v-if="![1, 5].includes(item.question_type)">
            <v-row v-for="(detail, index1) in item.details" :key="index1">
              <InputForm
                v-model="detail.answer_option"
                label="enter asnwer option"
              />
              <IconAdd
                v-if="index1 == item.details.length - 1"
                @add="addQuestionDetail(item)"
              />
              <IconDelete
                v-if="item.details.length > 0"
                @delete="deleteDetail(item.details, index1 , detail.id)"
              />
            </v-row>
          </v-container>
        </v-container>
        <SubmitForm class="custom_btn" @submit="addQuestion" />
      </v-form>
    </v-container>
  </div>
</template>

<script>
import InputForm from "../../components/forms/InputForm.vue";
import SelectForm from "../../components/forms/SelectForm.vue";
import SubmitForm from "../../components/forms/SubmitForm.vue";
import IconAdd from "../../components/forms/IconAdd.vue";
import IconDelete from "../../components/forms/IconDelete.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      items: [],
      //question_details: [],

      //question_title: "",
    };
  },
  methods: {
    addItem() {
      //console.log("test");

      this.items.push({
        survey_id: this.$route.params.surveyId,
        details: [],
      });

      //console.log(this.items[1].question_title);
    },
    deleteItem(index , id) {
      this.items.splice(index, 1);
      this.$store.dispatch('deleteQuestion' , id)
    },
    addQuestion() {
      this.$store.dispatch("createQuestions", { questions: this.items });
      //console.log(this.items)
    },
    addQuestionDetail(item) {
      if (![1, 5].includes(item.question_type)) {
        item.details.push({});
      }
    },
    deleteDetail(details, index , id) {
      details.splice(index, 1);
     this.$store.dispatch('deleteSingleDetail' , id);
    },
    viewQuestions() {
      this.$store.dispatch("viewSurveyQuestions", this.$route.params.surveyId);
    },
    showSurvey(){
      this.$store.dispatch('showSurvey', this.$route.params.surveyId)
    },
    
  },
  components: {
    InputForm,
    SelectForm,
    SubmitForm,
    IconAdd,
    IconDelete,
  },
  computed: {
    answer_options() {
      return this.$store.state.answer_options;
    },
    questions_types() {
      return this.$store.state.questions_types;
    },
    survey_title(){
      return this.$store.state.survey_title;
    },
    ...mapGetters(["getSurveyQuestion" , "getSingleSurvey"]),

    // defaultAnswerOption: {
    //   get() {
    //     return this.$store.state.default_answer_option;
    //   },
    //   set(value) {
    //     this.$store.commit("changeAnswerOption", value);
    //   },
    // },
  },
  created() {
    //console.log(this.items);

    // this.addItem();

    //const surveyId = this.$route.params.surveyId;
    //console.log("Survey ID:", this.surveyId);
    // this.addQuestionDetail();
    //console.log("my name is osid0");
    //document.getElementById('first_form').style.display = 'none';
    // this.viewQuestions();
    // this.$watch(
    //   () => this.getSurveyQuestion,
    //   (newValue) => {
    //     if (newValue.length === 0  && this.items.length === 0) {
    //       this.addItem();
    //     } else {
    //       this.items = newValue;
    //     }
    //   }
    // );
     this.showSurvey();
    this.$watch(
      () => this.getSingleSurvey,
      (newValue) => {
        if (newValue.length === 0  && this.items.length === 0) {
          this.addItem();
        } else {
          this.items = newValue;
        }
      }
    );
    
  },
  // beforeCreate(){
  //      this.$store.dispatch('viewSurveyQuestions', this.$route.params.surveyId);
  // }
};
</script>

<style scoped>
.super_parent {
  margin: 10px;
  margin-top: 50px;
}
.parent_container {
  /* margin: auto;
  width: 40%;
  margin-top: 70px; */
  /* margin-top: 70px;
  display: flex;
  margin-left: 0px;
  width: 30%; */
  margin: 0px;
}
.child_element {
}
.custom_btn {
}
</style>