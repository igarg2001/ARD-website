<template>
  <div id="wrapper">
    <img src="../../assets/images/projectimage.png" id="image" />
    <div id="content">
      <h1>PROJECT NAME</h1>
      <div id="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla interdum volutpat quis iaculis duis vitae parturient. Id pellentesque urna porta ultrices magna. Eros dui convallis sit massa habitant nam lacus, sed. Imperdiet sit et maecenas nunc, scelerisque viverra pretium.  Learn more.</div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectTemplate",
};
</script>

<style scoped>
#wrapper {
  width: 85%;
  border: 1px solid #d8cfe9;
  box-sizing: border-box;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 7.5%;
  padding: 1.5% 1.5%;
}
#image {
  width: 25%;
}
#content {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 5%;
  align-items: flex-start;
  align-content: flex-start;
}
#content h1 {
  font-family: Baloo 2;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 60px;
  /* identical to box height */

  color: #08070a;
}
</style>