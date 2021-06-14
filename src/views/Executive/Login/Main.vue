<template>
    <b-container>
        <div class="e-login">
            <div class="w-100">
                <b-row>
                    <b-col cols="12 pt-5" md="8" offset-md="2" lg="6" offset-lg="3">
                        <div class="e-box">
                            <div class="text-center">
                                <div class="mb-3"><img src="/assets/logo.png" alt="" width="60px"></div>
                                <h4 class="font-weight-bold d-block mb-2">Login</h4>
                                <span>{{ appName }}</span>
                            </div>
                            <b-row>
                                <b-col cols="10" offset="1">
                                    <b-form @submit.prevent="login" class="mt-5">
                                        <b-row>
                                            <b-col cols="12">
                                                <b-form-group>
                                                    <b-form-input v-model="username" placeholder="Username" autocomplete="off"/>
                                                </b-form-group>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col cols="12">
                                                <b-form-group class="e-password">
                                                    <div class="position-relative">
                                                        <b-form-input :type="typePassword ? 'password' : 'text'" v-model.trim="password" placeholder="Password"/>
                                                        <ph-eye :class="`phospor ${typePassword ? 'active' : ''}`" @click="typePassword = !typePassword" />
                                                        <ph-eye-closed :class="`phospor ${!typePassword ? 'active' : ''}`" @click="typePassword = !typePassword" />
                                                    </div>
                                                </b-form-group>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col cols="12">
                                                <b-button variant="primary" class="btn-block" :disabled="isBusy" type="submit">Login</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-form>
                                    <center class="mt-4"> &copy; {{ getYear() }}</center>
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </b-container>
</template>
<script>
    export default {
        name: 'login',
        data () {
            return {
                isBusy: false,
                appName: appName,
                username: null,
                password: null,
                typePassword: true,
            }
        },
        methods: {
            login () {
                this.$router.push({ name: 'Executive' })
            },
            getYear() {
                return new Date().getFullYear()
            }
        }
    }
</script>
<style>

</style>