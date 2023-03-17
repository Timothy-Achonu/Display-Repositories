<template>
  <div class="container">
    <div class="links">
      <RouterLink active-class="active" to="/"> Home</RouterLink>
      <RouterLink active-class="active" to="/repos"> My Repos</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
};
</script>

<style scoped>
/* .container {

} */
.links {
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  border-bottom: 0.03px solid white;
  width: 70%;
}
.links > a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 600;
  font-size: 1rem;
}
.links > .active {
  /* color: red !important; */
  text-decoration: underline;
  text-underline-position: calc();
  
}
</style>
