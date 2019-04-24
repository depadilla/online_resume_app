<template>
  <div class="resumes-show">
    <h2>Name: {{ student.first_name }} {{ student.last_name }}</h2>
    <img v-bind:src="student.photo_url" v-bind:alt="student.last_name" />
    <p>Email: {{ student.email }}</p>
    <p>Phone Number: {{ student.phone_number }}</p>
    <p>Short Bio: {{ student.short_bio }}</p>
    <p>LinkedIn: <a v-bind:href="student.linkedin_url"> </a></p>
    <p>Twitter: <a v-bind:href="student.twitter_handle"> </a></p>
    <p>Personal Website: <a v-bind:href="student.personal_website_url"> </a></p>
    <p>Online Resume: <a v-bind:href="student.online_resume_url"> </a></p>
    <p>GitHub: <a v-bind:href="student.github_url"> </a></p>

    <h3>Experience:</h3>
    <div v-for="experience in student.experiences">
      <h4>Job Title: {{ experience.job_title }}</h4>
      <p>Company Name: {{ experience.company_name }}</p>
      <p>Details: {{ experience.details }}</p>
      <p>Start Date: {{ experience.start_date }}</p>
      <p>End Date: {{ experience.end_date }}</p>
    </div>
    <h3>Capstone:</h3>
    <div v-for="capstone in student.capstones">
      <h5>Description: {{ capstone.description }}</h5>
      <p>Project Link: <a v-bind:href="capstone.project_url"> </a></p>
      <p>Screenshot Link: <a v-bind:href="capstone.screenshot_url"> </a></p>
    </div>
    <h3>Education:</h3>
    <div v-for="education in student.educations">
      <h4>University: {{ education.university_name }}</h4>
      <p>Degree: {{ education.degree }}</p>
      <p>Start Date: {{ education.start_date }}</p>
      <p>End Date: {{ education.end_date }}</p>
      <p>Details: {{ education.details }}</p>
    </div>
    <h3>Skills:</h3>
    <div v-for="skill in student.skills">
      <ul>
        {{
          skill.skill_name
        }}
      </ul>
    </div>
    <router-link to="/api/students">Back</router-link>
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
        personal_website_url: "personal web",
        online_resume_url: "online reusme url",
        github_url: "github url",
        photo_url: "photo",
        experiences: [
          {
            start_date: "01/01/2000",
            end_date: "01/01/2010",
            job_title: "Administrator",
            company_name: "Uber",
            details: "Worked for Uber as admin"
          },
          {
            start_date: "01/01/2010",
            end_date: "01/01/2012",
            job_title: "Account Manager",
            company_name: "Uber",
            details: "Worked for Uber as account manager"
          },
          {
            start_date: "01/01/2012",
            end_date: " ",
            job_title: "Teacher",
            company_name: "Actualize",
            details: "Works for Actualize as a teacher"
          }
        ],
        capstones: [
          {
            description: "Weather app",
            project_url: "weatherapp.com",
            screenshot_url: "weatherapp.com/screenshot"
          },
          {
            description: "Shopping app",
            project_url: "shoppingapp.com",
            screenshot_url: "shoppingapp.com/screenshot"
          }
        ],
        educations: [
          {
            start_date: "08/01/2006",
            end_date: "05/01/2010",
            degree: "Bachelors",
            university_name: "College 1",
            details: "Went to college 1"
          },
          {
            start_date: "08/01/2010",
            end_date: "05/01/2014",
            degree: "Masters",
            university_name: "College 2",
            details: "Went to college 2"
          }
        ],
        skills: [
          {
            skill_name: "excel"
          },
          {
            skill_name: "rails"
          },
          {
            skill_name: "javascript"
          },
          {
            skill_name: "vue.js"
          }
        ]
      }
    };
  },
  // created: function() {
  //   axios.get("https://salty-gorge-38704.herokuapp.com/api/students" + this.$route.params.id).then(response => {
  //     this.student = response.data;
  //   });
  // }
  created: function() {
    axios.get("https://salty-gorge-38704.herokuapp.com/api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
    });
    // axios.get("/api/students/2").then(response => {
    //   this.student = response.data;
    // });
  }
  // TODO: Add this back when backend is set up
  // }
  // mounted: function() {
  //   this.experiences.forEach(function(experience) {
  //   })
  // }
};
</script>
