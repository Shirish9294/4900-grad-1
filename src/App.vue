<template>
  <ion-app>
    <ion-menu side="start" menu-id="first" content-id="main">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Start Menu</ion-title>
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
    </ion-menu>
    <ion-router-outlet id="main"/>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonContent, IonItem, IonList, IonMenu } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonItem,
    IonContent,
    IonList,
    IonMenu
  }
});
</script>