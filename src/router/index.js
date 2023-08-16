import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import SurveyCreate from '../views/surveys/SurveyCreate.vue'
import AllSurveys from '../views/surveys/AllSurveys.vue'
import CreateQuestion from '../views/questions/CreateQuestions.vue'
import AllQuestions from '../views/questions/AllQuestions.vue'
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/create/survey',
            component: SurveyCreate
        } , 
        {
            path: '/surveys',
            component: AllSurveys
        } , 
        {
            path: '/surveys/:surveyId/questions/create',
            name: 'createQuestion',
            component: CreateQuestion
        },
        {
            path: '/surveys/questions',
            component: AllQuestions
        }

    ]
})
export default router