<template>
  <div class="resumes-show">
    <h2>Name: {{ student.first_name }} {{ student.last_name }}</h2>

    <p>Email: {{ student.email }}</p>
    <p>Phone Number: {{ student.phone_number }}</p>
    <p>Short Bio: {{ student.short_bio }}</p>
    <!-- <p>Linkedin: <a href="">{{student.linkedin_url}}</a></p> revisit when linked in is established-->
    <!-- <p>Twitter Handle:<a href="">{{ student.twitter_handle }}</a></p> -->
    <!-- <p>Twitter Handle:<a href="">{{ student.twitter_handle }}</a></p> -->
    <!-- <p>Twitter Handle:<a href="">{{ student.twitter_handle }}</a></p> -->
    <!-- <p>Twitter Handle:<a href="">{{ student.twitter_handle }}</a></p> -->

    <img v-bind:src="student.photo_url" v-bind:alt="student.last_name" />
    <h3>Experience:</h3>
    <div v-for="experience in student.experiences">
      <h4>Job Title: {{ experience.job_title }}</h4>
      <p>Company Name: {{ experience.company_name }}</p>
      <p>Details: {{ experience.details }}</p>
      <p>Start Date: {{ experience.start_date }}</p>
      <p>End Date: {{ experience.end_date }}</p>
    </div>
    <div>
      <h3>Capstone:</h3>
      <p>Description: {{ student.capstone.description }}</p>
      <p>Project Link: <a v-bind:href="student.capstone.project_url"> </a></p>
      <p>Screenshot Link: <a v-bind:href="student.capstone.screenshot_url"> </a></p>
    </div>
    <div>
      <h3>Education:</h3>
      <p>University: {{ student.education.university_name }}</p>
      <p>Degree: {{ student.education.degree }}</p>
      <p>Start Date: {{ student.education.start_date }}</p>
      <p>End Date: {{ student.education.end_date }}</p>
      <p>Details: {{ student.education.details }}</p>
    </div>
    <div>
      <h3>Skills:</h3>
      <ul>
        {{
          student.skill.skill_name
        }}
      </ul>
    </div>
  </div>
</template>
<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {
        first_name: "Peter",
        last_name: "Jang",
        email: "jang@email.com",
        phone_number: "111-222-3333",
        short_bio: "Dan sucks",
        linkedin_url: "linkedin url",
        twitter_handle: "twitter handle",
        personal_website: "personal web",
        online_resume_url: "online reusme url",
        github_url: "github url",
        photo_url: "photo",
        experiences: [],
        capstones: [],
        educations: [],
        skills: []
      }
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
    });
  }
  // mounted: function() {
  //   this.experiences.forEach(function(experience) {
  //   })
  // }
};
</script>
