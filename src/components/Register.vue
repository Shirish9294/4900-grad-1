<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-menu-button slot="start"/>
                <ion-title>Sign up</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-card>
                <ion-card-content>
                    <ion-item>
                        <ion-label position="floating">User Name</ion-label>
                        <ion-input name="username"
                                   v-model="credentials.username"
                                   type="text"
                                   class="form-control-sm form-control"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Password</ion-label>
                        <ion-input v-model="credentials.password"
                                   type="password"
                                   class="form-control-sm form-control"></ion-input>

                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Re-enter password</ion-label>
                        <ion-input v-model="credentials.password2"
                                   type="password"
                                   class="form-control-sm form-control"></ion-input>

                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Email</ion-label>
                        <ion-input v-model="credentials.email"
                                   type="email"
                                   class="form-control-sm form-control"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">First Name</ion-label>
                        <ion-input v-model="credentials.first_name"
                                   type="text"
                                   class="form-control-sm form-control"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Last Name</ion-label>
                        <ion-input v-model="credentials.last_name"
                                   type="text"
                                   class="form-control-sm form-control"></ion-input>
                    </ion-item>

                    <ion-button expand="full" @click="register" >Register</ion-button>
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
        name: 'Register',
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
            password: "",
            repassword: "",
            valid: true,
            showMsg: '',
            loading: false,
            rules: {
                username: [
                    v => !!v || "Username is required",
                    v => (v && v.length > 3) || "A username must be more than 3 characters long",
                    v => /^[a-z0-9_]+$/.test(v) || "A username can only contain letters and digits"
                ],
                password: [
                    v => !!v || "Password is required",
                    v => (v && v.length > 7) || "The password must be longer than 7 characters"
                ],
                email: [
                    v => !!v || "Email is required"
                ],
                repassword: [
                    v => (v == this.password) || 'Passwords must match'
                ]
            },
            showPassword: false,
        }),
        methods: {
            register() {
                apiService.registerUser(this.credentials).then(response => {
                    if (response.status === 201) {
                        this.movie = response.data;
                        this.showMsg = "";
                        router.push('/');
                    }else{
                        this.showMsg = "error";
                    }
                }).catch(error => {
                    if (error.response.status === 401) {
                        router.push("/auth");
                    }else if (error.response.status === 400) {
                        this.showMsg = "error";
                    }
                });
            },
        },
        computed: {
            passwordConfirmationRule() {
                return (this.password === this.repassword) || 'Password must match'
            }
        }
    });

</script>