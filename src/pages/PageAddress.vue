<template>
    <q-page>
        <div class="q-pa-md">
            <q-table title="Address" :columns="columns" row-key="id" />
        </div>

        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
            <q-btn
                @click="showAddAddress = true"
                round
                class="all-pointer-events"
                color="primary"
                size="24px"
                icon="add"
            />
        </div>

        <q-dialog v-model="showAddAddress">
            <add-address @close="showAddAddress = false" />
        </q-dialog>
    </q-page>
</template>

<script>
import AddAddress from "../components/Address/Modals/AddAddress.vue";
import { mapGetters, mapState } from "vuex";

export default {
    data() {
        return {
            showAddAddress: false,
            columns: [
                {
                    label: "Street Number",
                    sortable: true
                },
                {
                    label: "Street Name",
                    sortable: true
                },
                {
                    label: "City",
                    sortable: true
                },
                {
                    label: "State",
                    sortable: true
                },
                {
                    label: "Zip Code",
                    sortable: true
                }
            ]
        };
    },
    computed: {
        ...mapGetters("address", "getAddresses"),
        ...mapState("address", "addressesDownloaded")
    },

    components: {
        "add-address": AddAddress
    }
};
</script>

<style></style>
