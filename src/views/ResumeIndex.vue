<template>
  <div class="ResumeIndex">
    <h1>{{ message }}</h1>
    <div>
      <button v-on:click="setSortAttribute('first_name')">Sort by First Name</button>
      <button v-on:click="setSortAttribute('last_name')">Sort by Last Name</button>
    </div>
    Search by First Name or Last Name:
    <input type="text" v-model="searchFilter" list="first_name" />
    <datalist id="first_name">
      <option v-for="student in students">{{ student.first_name }}</option>
    </datalist>
    <div
      v-for="student in orderBy(
        filterBy(students, searchFilter, 'first_name', 'last_name'),
        sortAttribute,
        sortAscending
      )"
      v-bind:key="student.id"
    >
      <h2>First Name: {{ student.first_name }}</h2>
      <img v-bind:src="student.photo_url" v-bind:alt="student.first_name" />
      <router-link v-bind:to="`/students/${student.id}`">More info</router-link>
    </div>
    <a
      class="twitter-timeline"
      data-width="500"
      data-height="500"
      data-theme="light"
      href="https://twitter.com/Drake?ref_src=twsrc%5Etfw"
    >
      Tweets by Drake
    </a>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<!-- Install Vuew2 Filters by running 'npm install --save vue2-filters' -->

<script>
var axios = require("axios");
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Search Profiles!",
      students: [],
      searchFilter: "",
      sortAttribute: "First Name",
      sortAscending: 1
    };
  },
  created: function() {
    axios
      .get("https://salty-gorge-38704.herokuapp.com/api/students")
      .then(response => {
        this.students = response.data;
        console.log(this.students);
      })
      .catch(error => {
        console.log("Something went wrong...", error);
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        }
      });
  },
  methods: {
    setSortAttribute: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        if (this.sortAscending === 1) {
          this.sortAscending = -1;
        } else {
          this.sortAscending = 1;
        }
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = inputAttribute;
    }
  }
};
</script>
