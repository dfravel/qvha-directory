<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title class="absolute-center"
                    >QVHA Directory</q-toolbar-title
                >

                <q-btn
                    v-if="!loggedIn"
                    to="/auth"
                    flat
                    icon-right="account_circle"
                    label="Login"
                    class="absolute-right"
                />

                <q-btn
                    v-else
                    @click="logoutUser"
                    flat
                    icon-right="exit_to_app"
                    label="Logout"
                    class="absolute-right"
                />
            </q-toolbar>
        </q-header>

        <q-footer>
            <q-tabs>
                <q-route-tab
                    v-for="nav in navs"
                    :key="nav.label"
                    :to="nav.to"
                    :icon="nav.icon"
                    :label="nav.label"
                />
            </q-tabs>
        </q-footer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { openURL } from "quasar";

export default {
    name: "MyLayout",
    data() {
        return {
            navs: [
                {
                    label: "Addresses",
                    icon: "list",
                    to: "/"
                }
            ]
        };
    },
    computed: {
        ...mapState("auth", ["loggedIn"])
    },
    methods: {
        ...mapActions("auth", ["logoutUser"]),
        openURL
    }
};
</script>

<style lang="scss"></style>
