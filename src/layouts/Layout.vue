<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title class="absolute-center"
                    >QVHA Directory</q-toolbar-title
                >

                <q-btn
                    to="/auth"
                    flat
                    icon-right="account_circle"
                    label="Login"
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

        <q-drawer
            v-model="leftDrawerOpen"
            :breakpoint="767"
            :width="250"
            bordered
            content-class="bg-primary"
        >
            <q-list dark>
                <q-item-label header>Navigation</q-item-label>

                <q-item
                    v-for="nav in navs"
                    :key="nav.label"
                    :to="nav.to"
                    class="text-grey-4"
                    exact
                    clickable
                >
                    <q-item-section avatar>
                        <q-icon :name="nav.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ nav.label }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
    name: "MyLayout",
    data() {
        return {
            leftDrawerOpen: this.$q.platform.is.desktop,
            navs: [
                {
                    label: "Todo",
                    icon: "list",
                    to: "/"
                },
                {
                    label: "Settings",
                    icon: "settings",
                    to: "/settings"
                }
            ]
        };
    },
    methods: {
        openURL
    }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
    // .q-footer {
    //   display: none;
    // }
}

.q-drawer {
    .q-router-link--exact-active {
        color: white !important;
    }
}
</style>
