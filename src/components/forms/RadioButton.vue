<template>
    <v-row align="center"  justify="center">
         <v-col
          cols="12"
          md="6"
        >
    <v-radio-group>
      <template v-slot:label>
        <div>{{question_text}}</div>
      </template>
      <v-radio value="Google">
        <template v-slot:label>
          <div>
            Of course it's <strong class="success--text">Google</strong>
          </div>
        </template>
      </v-radio>
      <v-radio value="Duckduckgo">
        <template v-slot:label>
          <div>
            Definitely <strong class="primary--text">Duckduckgo</strong>
          </div>
        </template>
      </v-radio>
    </v-radio-group>
    </v-col>
    </v-row>
</template>

<script>
export default {
    props: ['question_text']
};
</script>

<style>
</style>