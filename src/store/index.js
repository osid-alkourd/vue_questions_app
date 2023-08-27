import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
const baseURL = 'http://127.0.0.1:8000/api';
function makeApiRequest(method, url, data, token) {
  return axios({
    method,
    url: baseURL + url,
    data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
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
    newSurvey: '',
    questions: [],
    survey_questions: [],
    singleSurvey:[] , 
    survey_title: ''
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
      state.surveys.push(newSurvey);
    },
    addQuestions(state, newQuestions) {
      state.questions.push(newQuestions);
    },
    set_questions(state, payload) {
      state.survey_questions = payload
    },
    set_single_survey(state, payload){
       state.singleSurvey = payload
    },
    set_survey_title(state , payload){
      state.survey_title = payload
    }

  

    // createSurvey(state , newSurvey){
    //    state.
    // }
  },

  actions: {
   
    fetchSurveys({ commit, state }) {
      return makeApiRequest('get', '/surveys', null, state.token)
        .then(response => {
          commit('set_surveys', response.data);
          console.log(response.status);
        }).catch(error => {
          console.error('Error fetching data:', error);
        })
    },
    // createSurvey({ commit, state }, surveyRequestData) {
    //   return axios.post('http://127.0.0.1:8000/api/surveys', surveyRequestData, {
    //     headers: {
    //       Authorization: `Bearer ${state.token}`,
    //     },

    //   }).then((response => {
    //     commit('addSurvey', response.data);
    //   })).catch(error => {
    //     console.error('Error create data:', error);
    //     //throw error; // Re-throw the error to be caught by the caller
    //   })
    // },
    createSurvey({ commit, state }, surveyRequestData){
         return makeApiRequest('post' , '/surveys' , surveyRequestData , state.token)
         .then((response => {
              commit('addSurvey', response.data);
              console.log(response.status);
         })).catch((error) => {
             console.error('Error create data:', error);
         })
    },
    createQuestions({ commit, state }, questionsData) {
      return axios.post('http://127.0.0.1:8000/api/questions', questionsData, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      }).then(response => {
        if (response.status == 201) {
          commit('addQuestions', response.data)
          alert('Questions created successfully!');
        } else {
           console.log(response.data) ;
        }

      }).catch(error => {
        console.error('Error create data:', error);
      })
    },
    
    viewSurveyQuestions({ commit, state }, id) {
      return makeApiRequest('get', `/surveys/${id}/showQuestions`, null, state.token)
        .then(response => {
          if (response.status == 200) {
            commit('set_questions', response.data)
            console.log(response.data);
          }
        }).catch(error => {
          console.error('Error in view data:', error);
        })
    },
    deleteSingleDetail({state}, id){
      return makeApiRequest('delete' , `/details/question/${id}` , null , state.token)
          .then((response => {
                 if(response.status == 200){
                    alert('success delete');
                 }
          })).catch((error => {
            console.error('Error in delete data:', error);
    }))
    },
    
    showSurvey({state , commit} , id){
      return makeApiRequest('get' , `/surveys/${id}`, null , state.token)
             .then((response => {
              if(response.status == 200){
                commit('set_single_survey' , response.data.questions)
                commit('set_survey_title' , response.data.survey_caption)
                console.log(response.data);
                //alert('success delete');
             }
             }))
             .catch((error => {
              console.error('Error in display surveys:', error);
             }))
    } , 
    async deleteQuestion({state} , id){
       try{
          const response = await makeApiRequest('delete' , `/questions/${id}` , null , state.token);
           if(response.status == 200){
              alert('success delete');
           }
       }catch(err){
            console.error(`error message with ${err}`)
       }
    }
  },
  getters: {
    getSurveys: state => state.surveys,
    getQuestions: state => state.questions,
    getSurveyQuestion: state => state.survey_questions,
    getSingleSurvey:  state => state.singleSurvey
  },

});

export default store
// viewSurveyQuestions({commit,state} ,id){ 
    //   return axios.get(`http://127.0.0.1:8000/api/surveys/${id}/showQuestions` , {
    //     headers: {
    //       Authorization: `Bearer ${state.token}`,
    //     },
    //   }).then(response=>{
    //     if(response.status == 200){
    //       commit('set_questions' , response.data)
    //       // alert('Questions created successfully!');
    //       console.log(response.data);
    //     }

    //   }).catch(error => {
    //     console.error('Error create data:', error);
    //   })
    // }