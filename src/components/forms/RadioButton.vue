<template>
    <v-radio-group v-model="answer_text">
      <template v-slot:label>
        <div>{{question_text}}</div>
      </template>
      <v-radio  v-for="detail in details" :key="detail.id" :value="detail.answer_option">
        <template v-slot:label>
          <div>
            {{detail.answer_option}}
          </div>
        </template>
      </v-radio>
    </v-radio-group>
  
</template>

<script>
export default {
   data: () => {
    return {
      answer_text: ''
    };
  },
    props: ['question_text' , 'details'],
  
  created() {
    console.log(this.details.length)
  }
};
</script>

<style>
</style>