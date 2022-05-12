<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-menu-button slot="start"/>
        <ion-title >Movie</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating">Movie Name</ion-label>
            <ion-input v-model="movie.name"
                       type="text"
                       class="form-control-sm form-control"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Movie Description</ion-label>
            <ion-input v-model="movie.description"
                       type="text"
                       class="form-control-sm form-control"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Movie Year</ion-label>
            <ion-input v-model="movie.year"
                       type="text"
                       class="form-control-sm form-control"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Movie Rating</ion-label>
            <ion-input v-model="movie.rating"
                       type="text"
                       class="form-control-sm form-control"></ion-input>
          </ion-item>
          <ion-button expand="full"
                      v-if="!isUpdate"
                      class="btn btn-primary col-4"
                      @click="createMovie">Save</ion-button>
          <ion-button expand="full"
                      v-if="isUpdate"
                      class="btn btn-primary col-4"
                      @click="updateMovie">Update</ion-button>
          <ion-button expand="full"
                      class="btn btn-secondary col-4"
                      @click="cancelOperation">Cancel</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonCardContent, IonInput} from '@ionic/vue';
// import {defineComponent} from 'vue';
import {videocam} from 'ionicons/icons';
import router from "../router";
import { APIService } from "../http/APIService";
const apiService = new APIService();

export default {
  name: 'MovieCreate',
  showError: false,
  // movie:{},
  data:()=>({
    movie: {},
  }),

  pageTitle: "Add New Movie",
  isUpdate: false,
  showMsg: "",
  components: {
    IonContent,
    IonMenuButton,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardContent,
    IonInput,
  }, setup() {
    return {
      videocam
    }
  },
  mounted() {
    if (this.$route.params.pk) {
      this.pageTitle = "Edit Movie";
      this.isUpdate = true;
      apiService
          .getMovie(this.$route.params.pk)
          .then((response) => {
            this.movie = response.data;
            console.log("hitting"+this.movie.name)
            console.log("hitting"+this.movie.name)
          })
          .catch((error) => {
            if (error.response.status === 401) {
              router.push("/auth");
            }
          });
    }
  },
  methods: {
    createMovie() {
      apiService
          .addNewMovie(this.movie)
          .then((response) => {
            if (response.status === 201) {
              this.movie = response.data;
              this.showMsg = "";
              router.push("/movie-list/new");
            } else {
              this.showMsg = "error";
            }
          })
          .catch((error) => {
            if (error.response.status === 401) {
              router.push("/auth");
            } else if (error.response.status === 400) {
              this.showMsg = "error";
            }
          });
    },
    cancelOperation() {
      router.push("/movie-list");
    },
    updateMovie() {
      apiService
          .updateMovie(this.movie)
          .then((response) => {
            if (response.status === 200) {
              this.movie = response.data;
              localStorage.removeItem("pk");
              router.push("/movie-list");
            } else {
              this.showMsg = "error";
            }
          })
          .catch((error) => {
            if (error.response.status === 401) {
              router.push("/auth");
            } else if (error.response.status === 400) {
              this.showMsg = "error";
            }
          });
    },
  },
};
</script>

<style>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-toolbar {
  height: 80px;
}

ion-menu-button {
}

/*ion-icon {*/
/*  font-size: 500px;*/
/*}*/
</style>
