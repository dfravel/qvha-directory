<template>
    <q-card>
        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-card-section class="row">
                <div class="text-h6">Add Address</div>
                <q-space />
                <q-btn v-close-popup flat round dense icon="close" />
            </q-card-section>
            <q-card-section>
                <div class="row q-mb-sm">
                    <q-input
                        outlined
                        v-model="addressToSubmit.physicalStreetNumber"
                        type="number"
                        label="Street Number"
                        autofocus
                        class="q-mr-sm"
                        :rules="[val => !!val || 'Field is required']"
                    />

                    <q-input
                        outlined
                        v-model="addressToSubmit.physicalStreetName"
                        label="Street Name"
                        style="width: 300px"
                        :rules="[val => !!val || 'Field is required']"
                    />
                </div>

                <div class="row q-mb-sm">
                    <q-input
                        outlined
                        v-model="addressToSubmit.physicalCity"
                        label="City"
                        class="q-mr-sm"
                        :rules="[val => !!val || 'Field is required']"
                    />

                    <q-input
                        outlined
                        v-model="addressToSubmit.physicalState"
                        label="State"
                        class="q-mr-sm"
                        :rules="[val => !!val || 'Field is required']"
                    />

                    <q-input
                        outlined
                        v-model="addressToSubmit.physicalZip"
                        label="Zip"
                        :rules="[val => !!val || 'Field is required']"
                    />
                </div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn
                    label="Save this address"
                    type="submit"
                    color="primary"
                />
                <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                />
            </q-card-actions>
        </q-form>
    </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            addressToSubmit: {
                physicalStreetNumber: "",
                physicalStreetName: "",
                physicalCity: "",
                physicalState: "",
                physicalZip: ""
            }
        };
    },

    methods: {
        ...mapActions("address", ["addAddress"]),
        onSubmit() {
            this.addAddress(this.addressToSubmit);
            this.$emit("close");
        },

        onReset() {
            this.addressToSubmit.physicalStreetNumber = null;
            this.addressToSubmit.physicalStreetName = null;
            this.addressToSubmit.physicalCity = null;
            this.addressToSubmit.physicalState = null;
            this.addressToSubmit.physicalZip = null;
        }
    }
};
</script>

<style lang="scss" scoped></style>
