<template>
  <div class="box p-2 mt-5 mx-auto column is-half is-flex is-align-items-center is-flex-direction-column has-background-primary ">
    <h1 class="title is-1">Survey Prototype</h1>
      <h3 class="title is-4"> Q1: DELIVER THROUGH OTHERS </h3>
      <select v-model="q1" size="3" required class='has-text-centered column is-half is-size-6'>
        <option value="A">A. NOT EFFECTIVE</option>
        <option value="B">B. NEITHER INEFFECTIVE OR EFFECTIVE</option>
        <option value="C">C. EFFECTIVE</option>
      </select>

      <h3 class="title is-4 mt-5"> Q2: UNDERSTAND OTHERS PERSPECTIVES </h3>
      <select v-model="q2" size="3" class='has-text-centered column is-half is-size-6'>
        <option value="A" >A. NOT EFFECTIVE</option>
        <option value="B">B. NEITHER INEFFECTIVE OR EFFECTIVE</option>
        <option value="C">C. EFFECTIVE</option>
      </select>

      <h3 class="title is-4 mt-5"> Q3: SOLVE COMPLEX PROBLEMS </h3>
      <select v-model="q3" size="3" class='has-text-centered column is-half is-size-6'>
        <option value="A" >A. NOT EFFECTIVE</option>
        <option value="B">B. NEITHER INEFFECTIVE OR EFFECTIVE</option>
        <option value="C">C. EFFECTIVE</option>
      </select>
    
    <div class="control mt-5 column is-half">
      <button class="button is-success column is-full is-flex is-align-items-center has-text-weight-bold" @click="saveAnswer">SAVE</button>
    </div>
  </div>
</template>

<script>
//import axios
import axios from "axios";

export default {
  data() {
    return {
      q1: "",
      q2: "",
      q3: ""
    }
  },
  methods: {
    //create new product
    async saveAnswer() {
      try {
        await axios.post("http://localhost:5000/answer", {
          q_a: `{"Q1": "${this.q1}", "Q2":"${this.q2}", "Q3":"${this.q3}"}` 
        });
        this.$router.push("/answer");
      } catch (err) {
        console.log(err);
      }
    },
  },

};
</script>


