<template>
  <div id="header" class="headerOpaque">
    <div id="logo">
      <img src="../../assets/bitsLogo.svg" alt="BITS Pilani Logo" />
    </div>
    <div id="nav">
      <div class="navElement"><router-link to="/">Home</router-link></div>
      <div class="navElement">
        <a target="_blank" href="https://bitsaa.org">Community</a>
      </div>
      <div class="navElement">Events &#38; Reunions</div>
      <div class="navElement">
        <router-link to="/daa">Distinguished Alumni</router-link>
      </div>
      <div class="navElement">
        <router-link to="/team">Alumni relations team</router-link>
      </div>
      <div class="dropdown navElement">
        <div class="dropdownHeading navElement">More ▼</div>
        <div class="dropdownContent">
          <div class="dropdownElement">
            <router-link to="/newsletters">Newsletters</router-link>
          </div>
          <div class="dropdownElement">Link 2</div>
          <div class="dropdownElement">Link 3</div>
        </div>
      </div>
      <router-link to="/givingback" class="gb">
        <!-- <OrangeButton
          displayText="Giving Back"
          type="outline"
          style="margin-left: 40px"
        /> -->
        <div class="givingBackButton">Giving Back</div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import OrangeButton from "./Buttons/OrangeButton";
export default {
  name: "HeaderComponent",
  components: {
    // OrangeButton,
  },
  props: {
    isOpaque: Boolean,
  },
};
</script>

<style scoped>
.headerOpaque {
  background-color: #ffffff;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 3.3333vw;
  user-select: none;
  font-weight: 600;
  font-family: "AmsiProNarw", sans-serif;
  width: calc(100vw);
  color: white;
}

#logo > img {
  width: 200px;
}

#nav {
  display: flex;
  flex-direction: row;
  font-size: 19px;
  position: relative;
}

.navElement {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  border-bottom: 0px solid #f1f1f1;
  transition: all 0.13s ease;
  padding-bottom: 1px;
  color: #1d74b7;
}

.navElement:hover {
  padding-bottom: 0px;
  border-bottom: 1px solid #1d74b7;
}

.navElement a {
  color: #1d74b7;
  text-decoration: none;
}

.navElement a.router-link-exact-active {
  color: #f95a78;
}

.givingBackButton {
  background-color: #4f53ff;
  color: white;
  padding: 15px 20px;
  box-shadow: 0px 0px 4px 2px rgba(245, 117, 21, 0.25);
  border-radius: 2px;
  transition: background-color 0.4s ease;
}

.givingBackButton:hover {
  background-color: #f95a78;
}

.dropdownContent {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease-in;
  margin-top: 100px;
  color: #211912;
  white-space: nowrap;
}

.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.dropdownHeading:hover {
  padding-bottom: 1px;
  border-bottom: 0px !important;
}

.gb {
  text-decoration: none;
}

.dropdown:hover {
  padding-bottom: 1px;
  border-bottom: 0px !important;
}

.dropdownElement {
  padding: 12px 16px;
  text-decoration: none;
  display: none;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.2s ease;
  cursor: pointer;
}

.dropdownElement:hover {
  background-color: #ddd;
}
.dropdownElement p {
  color: black;
}
.dropdown:hover .dropdownContent {
  opacity: 1;
  transition: opacity 0.2s ease-out;
}

.dropdown:hover .dropdownElement {
  opacity: 1;
  display: flex;
}

#BITScolors {
  bottom: -40px;
  position: absolute;
}

#BITScolors > svg {
  width: 100%;
}
</style>
