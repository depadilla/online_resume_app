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

    <div>
      <h4>Edit student</h4>
      Name:
      <input type="text" v-model="student.name" />
      Price:
      <input type="text" v-model="student.price" />
      Description:
      <input type="text" v-model="student.description" />
      In Stock:
      <input type="text" v-model="student.instock" />
      Supplier ID:
      <input type="text" v-model="student.supplier_id" />
      User Id:
      <input type="text" v-model="student.user_id" />

      <button v-on:click="updateProduct(student)">Update student</button>
      <button v-on:click="destroyProduct(student)">Destroy student</button>
    </div>
    <router-link to="/">Back to all products</router-link>
    <div id="map"></div>
  </div>
</template>
<style>
#map {
  height: 300px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      product: {}
    };
  },
  created: function() {
    axios.get("/api/products/" + this.$route.params.id).then(response => {
      this.product = response.data;
    });
  },
  // mounted: function() {
  //   mapboxgl.accessToken =
  //     "pk.eyJ1IjoicGV0ZXJ4amFuZyIsImEiOiJjam96NnBwZmUycXI4M3FxaTR3aHQwenhkIn0.Fip_rZYF_exdMEDeQTNYoQ";
  //   var map = new mapboxgl.Map({
  //     container: "map", // container id
  //     style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  //     center: [-74.5, 40], // starting position [lng, lat]
  //     zoom: 4 // starting zoom
  //   });
  // },
  methods: {
    updateProduct: function(product) {
      var params = {
        name: product.name,
        price: product.price,
        description: product.description,
        instock: product.instock,
        supplier_id: product.supplier_id,
        user_id: product.user_id
      };
      axios.patch("/api/products/" + product.id, params).then(response => {
        console.log("Successfully updated", response.data);
        product = response.data;
      });
    },
    destroyProduct: function(product) {
      axios.delete("/api/products/" + product.id).then(response => {
        console.log("Successfully destroyed product", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>
