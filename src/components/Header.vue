<template>
  <div class="headerImage">
    <div class="mx-5">
      <b-navbar
        class="header_style"
        toggleable="lg"
        top="fixed"
        id="navbar"
      >
        <b-navbar-toggle
          target="nav-collapse"
          class="navItems"
        ></b-navbar-toggle>
        <b-collapse class="d-flex justify-content-between" id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link class="text-dark" to="/bio" style="font-family:Georgia"> Writing </router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link class="text-dark" style="font-family:Georgia" to="/CV">CV</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-brand>
            <router-link to="/">
              <img class="nameSpace" src="../assets/name template 1.jpg" />
            </router-link>
          </b-navbar-brand>
          <b-navbar-nav>
            <b-nav-item>
              <router-link class="text-dark" to="/Blog" style="font-family:Georgia">Blog</router-link>
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link class="text-dark" to="/contact" style="font-family:Georgia">Contact</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<style scoped>
.header_style {
  background-color: white; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: between;
  width: 27.5vw;
  border-top: solid 5px black;
  border-right: solid 5px black;
  border-left: solid 5px black;
  margin-top: 20px;
  font-size: 1.5vh;
}

.headerImage {
  background-image: url("../assets/square.jpg");
  background-repeat: repeat;
  height: 10vh;
  width: 100%;
  background-size: contain;
  border-bottom: double 10px black;
}


router-link {
  height: 10vh;
  background-color: #5a7370;
  font-size: 5vh;
}

.navItems {
  height: 10vh;
  background-color: #5a7370;
  font-size: 5vh;
}

.nameSpace {
  height: 10vh;
  width: 20vh;
  font-family: Garamond;
  font: black;
}
</style> 