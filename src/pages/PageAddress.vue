<template>
    <q-page>
        <div class="q-pa-md absolute full-width full-height column">
            <template v-if="addressesDownloaded">
                <div class="q-pa-md">
                    <q-table
                        title="Address"
                        :columns="columns"
                        :data="addresses"
                        :filter="filter"
                        row-key="index"
                    >
                        <template v-slot:top-right>
                            <q-input
                                borderless
                                dense
                                debounce="300"
                                v-model="filter"
                                placeholder="Search"
                            >
                                <template v-slot:append>
                                    <q-icon name="search" />
                                </template>
                            </q-input>
                        </template>
                    </q-table>
                </div>

                <div
                    class="absolute-bottom text-center q-mb-lg no-pointer-events"
                >
                    <q-btn
                        @click="showAddAddress = true"
                        round
                        class="all-pointer-events"
                        color="primary"
                        size="24px"
                        icon="add"
                    />
                </div>
            </template>

            <template v-else>
                <span class="absolute-center">
                    <q-spinner color="primary" size="6em" />
                </span>
            </template>
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
            filter: "",
            showAddAddress: false,
            columns: [
                {
                    label: "Street Number",
                    sortable: true,
                    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
                    align: "left",
                    name: "streetNumber",
                    field: "physicalStreetNumber"
                },
                {
                    label: "Street Name",
                    sortable: true,
                    align: "left",
                    name: "streetName",
                    field: "physicalStreetName"
                },
                {
                    label: "City",
                    sortable: false,
                    align: "left",
                    field: "physicalCity"
                },
                {
                    label: "State",
                    sortable: false,
                    align: "left",
                    field: "physicalState"
                },
                {
                    label: "Zip Code",
                    sortable: false,
                    align: "left",
                    field: "physicalZip"
                }
            ]
        };
    },
    computed: {
        ...mapGetters({
            addresses: "address/getAddresses"
        }),
        ...mapState("address", ["addressesDownloaded"])
    },

    components: {
        "add-address": AddAddress
    }
};
</script>

<style></style>
