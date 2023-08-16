<template>
  <div class="super_parent">
    <v-container class="parent_container">
      <v-form>
        <v-row v-for="(item, index) in items" :key="index">
          <InputForm
            v-model="item.question_title"
            name="title"
            label="question title"
            type="text"
            placeholder="question title"
          />
          <SelectForm
            v-model="item.question_type"
            name="question_type"
            label="question type"
            :items="questions_types"
            itemText="type"
            itemValue="value"
          />
          <SelectForm
            v-model="item.answer_option"
            name="answer_option"
            label="answer option"
            :items="answer_options"
            itemText="option"
            itemValue="value"
          />
          <InputForm
            type="text"
            name="notes"
            label="notes"
            v-model="item.notes"
          />
            <IconAdd v-if="index == items.length - 1" @add="addItem()" />
            <IconDelete v-if="items.length > 0" @delete="deleteItem(index)" />
        </v-row>
        <SubmitForm class="custom_btn" />
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
export default {
  data() {
    return {
      items: [{}],
      surveyId: this.$route.params.surveyId,
      //question_title: "",
    };
  },
  methods: {
    addItem() {
      console.log("test");
      this.items.push({});
      //console.log(this.items[1].question_title);
    },
    deleteItem(index){
       this.items.splice(index,1)
    }
    
  },
  components: {
    InputForm,
    SelectForm,
    SubmitForm,
    IconAdd,
    IconDelete
  },
  computed: {
    answer_options() {
      return this.$store.state.answer_options;
    },
    questions_types() {
      return this.$store.state.questions_types;
    },

    // defaultAnswerOption: {
    //   get() {
    //     return this.$store.state.default_answer_option;
    //   },
    //   set(value) {
    //     this.$store.commit("changeAnswerOption", value);
    //   },
    // },
  },
  mounted() {
    //console.log(this.items);
    //const surveyId = this.$route.params.surveyId;
    console.log('Survey ID:', this.surveyId);
  },
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