<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Blank</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Blank</ion-title>
                </ion-toolbar>
            </ion-header>

            <div class="logo">
                <img :src="require('@/assets/welcome.jpg')" class="img-fluid" alt="Responsive image"/>
            </div>


            <div class="form">
                <ion-item lines="none" class="items">
                    <div class="item-content">
                        <ion-input placeholder="Enter Username"></ion-input>
                    </div>

                </ion-item>


                <ion-item lines="none" class="items">
                    <ion-input placeholder="Enter Password" type="Password"></ion-input>

                    <ion-icon :icon="eye" />
                </ion-item>

                <ion-button color="dark" expand="block">Login</ion-button>
            </div>

            <ion-button fill="clear">New? Sign up</ion-button>
            <ion-icon :icon="caretUpOutline" />


        </ion-content>
    </ion-page>

</template>

<script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonIcon } from '@ionic/vue';
    import { defineComponent } from 'vue';

    import { caretUpOutline} from "ionicons/icons";
    import { eye} from "ionicons/icons";

    export default defineComponent({
        name: 'Auth',
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar,
            IonItem,
            IonButton,
            IonIcon
        },
        setup() {

            return { caretUpOutline, eye }

        }
    });
</script>

<style scoped>
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

    .logo{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    .items{
        border:2px solid rgb(201,201,201);
        border-radius: 5px;
    }

</style>
