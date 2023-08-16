import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    surveyTableHeader: [
      {
        text: 'survey title',
        align: 'start',
        sortable: false,
        value: 'survey_title',
      },
      { text: 'created at', value: 'created_at' },
      { text: 'expire at', value: 'expire_at' },
      { text: 'status', value: 'status' },
      { text: 'add question', value: 'add_question' },
      { text: 'view questions', value: 'view_questions' },
    ],
    search: '',
    survey_cases: [
      { status: "draft", value: 0 },
      { status: "sent", value: 1 },
      { status: "answered", value: 2 },
    ],
    questions_types: [
      { type: "text", value: 1 },
      { type: "radio", value: 2 },
      { type: "multiple_selection", value: 3 },
      { type: "single_selection", value: 4 },
      { type: "rating", value: 5 },
    ],
    default_survey_status: { status: "send", value: 1 },
    answer_options: [
      { option: 'Optional', value: 1 },
      { option: 'Mandatory', value: 2 }
    ],
    default_answer_option: { option: 'Optional', value: 1 },

    questionTableHeaders: [
      {
        text: 'question id',
        align: 'start',
        sortable: false,
        value: 'question_id',
      },
      { text: 'question serial', value: 'question_serial' },
      { text: 'title', value: 'title' },
      { text: 'type', value: 'type' },
      { text: 'notes', value: 'notes' },
      { text: 'add details', value: 'add_details' },
      { text: 'delete', value: 'delete' },
      { text: 'update', value: 'update' },
      { text: 'view details', value: 'view_details' },

    ],
    searchQuestionValue: '',
    surveys: [],
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmQ4YTQ0YWQyNjc5Y2M4YjYxZmE0ODFmMmY0ZGZiZjJlZDhkYzA1YzczYmU2YmM3NDQ3ZjMwZTE2MTY2Yjk4NzAxZmYwZGI3ZDQ0Yzk3YTciLCJpYXQiOjE2OTEwMDQzMDYuMDkzNzE2LCJuYmYiOjE2OTEwMDQzMDYuMDkzNzMxLCJleHAiOjE3MjI2MjY3MDYuMDY1NTA3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Guhu2LtCSg8aX7X06fmAY_mmpVxkmx5173FDBpivINBo3mcr1O5i2ZLHNfRXLfe_DON1hVlGjLpX4SkljVfPZdBbqJP0kF5rSk_4LK17Y3b-t-prNjeWf3OppNTigcxlfSA41Ehc_GcGYqALfI47lDhFiQALQx-x6Jt9NQo3BBJDUpjFJzQof-lFHN7WG2BB-2JvcxzRf492RJCX91AkdeOTv7k2qNwiBEaFpercF-VoyBIuNyOkf_0pwJ5tT5JRKG9f8_uhakTt3c4s9WReCiwNKnKe4bkfsbugmhJaEMiuYeRPjHgocwxTtjhrfDYhix7luMBxEWRPG3D-U7KdwJDdWl_8VlmJ8sFxx9HDN0aEeeYFI2jDONX8seryYnes_GzBJSgabHWMhRHDC52Spu4HNns2tvXfjFObNDE8k6bPFuE5cbLY_m-QIX8ZyTo_cJvq4kIh3SFPwm6UgWCyM6GLs7Ypq0sdQPuhjvhQdQDX91HcA5vGugs_i8_STucrOo3QNECv9w-CJFiAL0Mplm0wTv7CNSDJi7QFVwlzhQtKZnXRsJDBjDzuaBf4wbwHorIgrE2vlwtYO2pV2KhOuqrusE7VlOcPNBP8RAkqNcCJvimmlGC4cJK7b4Z5ZezkTVTlk1dg-z86R-AGCXazbXP_W26xha6RZEUyaTSkkbQ',
    newSurvey: ''
  },
  mutations: {
    updateSearchValue(state, payload) {
      state.search = payload
    },
    changeSurveyStatus(state, payload) {
      state.default_survey_status = payload
    },
    changeAnswerOption(state, payload) {
      state.default_answer_option = payload
    },
    updateSearchQuestionValue(state, payload) {
      state.searchQuestionValue = payload
    },

    set_surveys(state, payload) {
      state.surveys = payload
    },

    addSurvey(state, newSurvey) {
      state.surveys.push(newSurvey)
    }


    // createSurvey(state , newSurvey){
    //    state.
    // }
  },

  actions: {
    async fetchSurveys({ commit, state }) {
      return await axios.get('http://127.0.0.1:8000/api/surveys', {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then(response => {
          commit('set_surveys', response.data);
          console.log(response.data[0].status);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
     createSurvey({ commit, state }, surveyRequestData) {
      return  axios.post('http://127.0.0.1:8000/api/surveys', surveyRequestData, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },

      }).then((response => {
        commit('addSurvey', response.data);
      })).catch(error => {
        console.error('Error create data:', error);
        //throw error; // Re-throw the error to be caught by the caller
      })
    }
  },
  getters: {
    getSurveys: state => state.surveys,
  },

});

export default store