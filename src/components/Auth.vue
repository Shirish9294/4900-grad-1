<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-menu-button slot="start"/>
        <ion-title>Sign in</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">User Name</ion-label>
            <ion-input v-model="credentials.username"
                       :counter="70"
                       label="Username"
                       :rules="rules.username"
                       maxlength="70"
                       required
                       type="text"
                       class="form-control mb-3"
                       placeholder="Username"
                       aria-describedby="inputGroupPrepend2"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input :type="showPassword ? 'text' : 'Password'"
                       v-model="credentials.password"
                       label="Password"
                       :rules="rules.password"
                       maxlength="20"
                       required
                       class="form-control"
                       placeholder="Password"
                       aria-describedby="inputGroupPrepend2"></ion-input>
          </ion-item>
          <span class="input-group-text"
                @click="showPassword = !showPassword">
            <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i>
          </span>
          <ion-button expand="full" @click="login" >Login</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonItem,
  IonButton,
  IonCard,
  IonCardContent,
  IonLabel,
  IonInput,
  IonHeader,
  IonToolbar,
  IonContent,
  IonMenuButton
} from '@ionic/vue';
import {defineComponent} from 'vue';
import {APIService} from "@/http/APIService";
import router from "@/router";
const apiService = new APIService();
// import App from "@/components/Menu";

export default defineComponent({
  name: 'Auth',
  components: {
    IonPage,
    IonItem,
    IonButton,
    IonCard,
    IonCardContent,
    IonLabel,
    IonInput,
    IonHeader,
    IonToolbar,
    IonContent,
    IonMenuButton
  },
  data: () => ({
    credentials: {},
    valid: true,
    showMsg: "",
    loading: false,
    rules: {
      username: [
        (v) => !!v || "Username is required",
        (v) =>
            (v && v.length > 3) ||
            "A username must be more than 3 characters long",
        (v) =>
            /^[a-z0-9_]+$/.test(v) ||
            "A username can only contain letters and digits",
      ],
      password: [
        (v) => !!v || "Password is required",
        (v) =>
            (v && v.length > 7) ||
            "The password must be longer than 7 characters",
      ],
    },
    showPassword: false,
  }),
  methods: {
    login() {
      this.loading = true;
      apiService
          .authenticateLogin(this.credentials)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("isAuthenticates", JSON.stringify(true));
            localStorage.setItem(
                "log_user",
                JSON.stringify(this.credentials.username)
            );
            router.push("/");
          })
          .catch(() => {
            this.loading = false;
            localStorage.removeItem("isAuthenticates");
            localStorage.removeItem("log_user");
            localStorage.removeItem("token");
            this.showMsg = "error";
          });
    }
  },
});
</script>