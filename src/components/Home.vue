<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-menu-button slot="start"/>
        <ion-title >Movie App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Movie App</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-icon :src="videocam"></ion-icon>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonIcon,} from '@ionic/vue';
import {defineComponent} from 'vue';
import {videocam} from 'ionicons/icons';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonMenuButton,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
  }, setup() {
    return {
      videocam
    }
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
