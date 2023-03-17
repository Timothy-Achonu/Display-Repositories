<template>
  <div>
    <div class="intro">
      <div>
        <span>Hi, I'm Timothy </span>
        <span>a software developer. </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-view",
};
</script>

<style scoped>
.intro {
  display: flex;
  height: 100px;
  width: 350px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: calc(50vh - 100px);
  margin-bottom: calc(50vh - 100px);
  font-size: 2rem;
}
.intro > div {
    display: flex;
    flex-direction: column;
}
</style>
