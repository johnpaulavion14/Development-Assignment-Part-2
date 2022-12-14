<template>
  <div class="box p-5 mt-5 mx-auto column is-half is-flex is-align-items-center is-flex-direction-column has-background-primary ">
    <h1 class="title is-1">Here's Your Answer!</h1>
    <div v-for="answer in answers" class="title is-4">Q1 = {{answer.Q1.charAt(1)}}</div>
    <div v-for="answer in answers" class="title is-4">Q2 = {{answer.Q2.charAt(1)}}</div>
    <div v-for="answer in answers" class="title is-4">Q3 = {{answer.Q3.charAt(1)}}</div>
  </div>
</template>

<script>
//import axios
import axios from "axios";

export default {
  data() {
    return {
      answers: [],
    };
  },
  created() {
    this.getLast();
    this.myFunction();
    //this.answers = JSON.parse(answers);
  },
  methods: {
    //get last row in database
    async getLast() {
      try {
        const response = await axios.get("http://localhost:5000/answers");
        this.answers = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    myFunction() {	
      console.log("asdfsdf");
    }

    
  },
};
</script>







