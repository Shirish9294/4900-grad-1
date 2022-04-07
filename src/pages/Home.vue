<template>
<ion-page>
  <ion-header :translucent="true">
    <ion-toolbar>
    <ion-title>
      <ion-row>
        <ion-col>
          <ion-menu-button slot="start/"></ion-menu-button>
          <ion-icon :src="videocam"></ion-icon>
        </ion-col>
        <ion-col>
          <h1>Movie App</h1>
        </ion-col>
      </ion-row></ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
      <ion-item>Menu Item</ion-item>
    </ion-list>
  </ion-content>
</ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonRow, IonCol, IonMenuButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import {videocam} from 'ionicons/icons';
export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonRow,
    IonCol,
    IonMenuButton
  }, setup(){
    return{
      videocam
    }
  }
});
</script>
<style>
ion-icon {
  font-size: 60px;
}
</style>