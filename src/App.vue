<template>
  <ion-app>
    <ion-split-pane content-id="main">
      <Menu/>
      <ion-router-outlet id="main"/>
    </ion-split-pane>
  </ion-app>
</template>
<script>
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from '@/components/Menu.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu,
    IonSplitPane
  }
});
</script>