<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-menu-button slot="start"/>
        <ion-title >Movie List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-card style="		background: #333; color: white; ">
          <ion-card-content>
        <ion-row>
          <ion-col style="font-weight: bold; font-size: 15px">Name</ion-col>
          <ion-col style="font-weight: bold; font-size: 15px">Description</ion-col>
          <ion-col style="font-weight: bold; font-size: 15px">year</ion-col>
          <ion-col style="font-weight: bold; font-size: 15px">rating</ion-col>
          <ion-col style="font-weight: bold; font-size: 15px">Actions</ion-col>
        </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-card v-for="movie in movies" v-bind:key="movie">
        <ion-card-content>
        <ion-row >
          <ion-col>{{movie.name}}</ion-col>
          <ion-col>{{ movie.description }}</ion-col>
          <ion-col>{{movie.year}}</ion-col>
          <ion-col>{{movie.rating}}</ion-col>
          <ion-col>
            <ion-button color="medium" @click="updateMovie(movie)">Edit</ion-button>
            <ion-button color="dark" @click="deleteMovie(movie)">Delete</ion-button>
          </ion-col>
        </ion-row>
          </ion-card-content>
        </ion-card>
        <ion-card>
        <ion-button color="dark" @click="addNewMovie(movie)" expand="full">Add Movie</ion-button>
        </ion-card>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonCardContent, IonRow, IonCol} from '@ionic/vue';
import {defineComponent} from 'vue';
import {videocam} from 'ionicons/icons';
import router from "../router";
import { APIService } from "../http/APIService";
const apiService = new APIService();

export default defineComponent({
  name: 'MovieList',
  data(){
    return{
      movies:{},
    }
  },
  components: {
    IonContent,
    IonMenuButton,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCardContent,
    IonRow,
    IonCol,
  }, setup() {
    return {
      videocam
    }
  },
  mounted() {
    // location.reload();
    // this.getMovies();
    // if (localStorage.getItem('reloaded2')) {
    //   localStorage.removeItem('reloaded2');
    // } else {
    //   localStorage.setItem('reloaded2', '1');
    //   location.reload();
      // localStorage.removeItem('reloaded2');
    // }
  },
  created(){
    this.getMovies();
    if (localStorage.getItem('reloaded')) {
      localStorage.removeItem('reloaded');
    } else {
      localStorage.setItem('reloaded', '1');
      location.reload();
      // localStorage.removeItem('reloaded');
    }
  },
  methods: {
    getMovies() {
      apiService
          .getMovieList()
          .then((response) => {
            this.movies = response.data.data;
            this.movieSize = this.movies.length;
            if (
                localStorage.getItem("isAuthenticates") &&
                JSON.parse(localStorage.getItem("isAuthenticates")) === true
            ) {
              this.validUserName = JSON.parse(localStorage.getItem("log_user"));
            }
          })
          .catch((error) => {
            if (error.response.status === 401) {
              localStorage.removeItem("isAuthenticates");
              localStorage.removeItem("log_user");
              localStorage.removeItem("token");
              router.push("/auth");
            }
          });
    },
    addNewMovie() {
      if (
          localStorage.getItem("isAuthenticates") &&
          JSON.parse(localStorage.getItem("isAuthenticates")) === true
      ) {
        router.push("/movie-create");
      } else {
        router.push("/auth");
      }
    },
    updateMovie(movie) {
      router.push("/movie-create/" + movie.pk);
    },
    deleteMovie(movie) {
      if (confirm("Do you really want to delete?")) {
        apiService
            .deleteMovie(movie.pk)
            .then((response) => {
              if (response.status === 204) {
                router.push("/movie-list");
                this.getMovies();
              }
            })
            .catch((error) => {
              if (error.response.status === 401) {
                localStorage.removeItem("isAuthenticates");
                localStorage.removeItem("log_user");
                localStorage.removeItem("token");
                router.push("/auth");
              }
            });
      }
    },
  }
});
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
