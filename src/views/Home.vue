<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="This is my new app - DAN. Welcome to our app - Lindsey, back end is taking too long!" />
    <Tweet :id="'759043035355312128'"></Tweet>
    <Tweet :id="'1119573367961661441'"></Tweet>
    <Timeline :id="'RealHughJackman'" :sourceType="'profile'" :options="{ tweetLimit: '3' }" />
    <Timeline :id="'RealHughJackman'" :sourceType="'likes'" :options="{ theme: 'dark' }" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Tweet } from "vue-tweet-embed";
import { Timeline } from "vue-tweet-embed";

export default {
  name: "home",
  components: {
    HelloWorld,
    Tweet,
    Timeline
  }
};
</script>
