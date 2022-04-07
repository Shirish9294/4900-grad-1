<template>
  <ion-menu side="start" menu-id="app-menu" content-id="main">
    <ion-header>
      <ion-toolbar color="grey">
        <ion-row>
          <ion-col>
            <ion-icon :src="videocam"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item button @click="home">Home</ion-item>
        <ion-item>Movie List</ion-item>
        <ion-item v-if="!authenticated" button @click="login">Login</ion-item>
        <ion-item v-if="!authenticated">Signup</ion-item>
        <ion-item v-if="authenticated" button @click="logout">Logout</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {IonMenu, IonHeader, IonToolbar, IonList, IonContent, IonIcon, IonRow, IonCol, menuController} from '@ionic/vue';
import {defineComponent} from 'vue';
import {videocam} from 'ionicons/icons';
import router from "@/router";
// import { APIService } from "@/http/APIService";
// const apiService = new APIService();

export default defineComponent({
  name: 'App',
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonList,
    IonContent,
    IonIcon,
    IonRow,
    IonCol,
  },
  data: () => ({
    authenticated: localStorage.getItem("isAuthenticates"),
  }),
  setup() {
    return {
      videocam
    }
  }, methods: {
    home() {
      menuController.close("app-menu");
      router.push("/");
    },
    login() {
      menuController.close("app-menu");
      router.push("Auth")
      this.events.subscribe('user:loggedIn', (user) => { this.currentLoggedUser = user; });
    },
    logout(){
      localStorage.removeItem("isAuthenticates");
      localStorage.removeItem("log_user");
      localStorage.removeItem("token");
      this.authenticated = false;
      router.push('/');
    },
  },
});

</script>
<style>
ion-title {
  padding-top: 15px;
  font-size: 30px;
}

ion-icon {
  font-size: 60px;
}

ion-item {
  font-size: 19px;
}
</style>