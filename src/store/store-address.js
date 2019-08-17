import Vue from "vue";
import { uid } from "quasar";
import { firebaseDb } from "boot/firebase";

const state = {
    addresses: {},
    addressesDownloaded: false
};

const mutations = {
    ADD_ADDRESS(state, payload) {
        Vue.set(state.addresses, payload.id, payload.address);
    },

    UPDATE_ADDRESS(state, payload) {
        Object.assign(state.addresses[payload.id], payload.updates);
    },

    DELETE_TASK(state, id) {
        Vue.delete(state.addresses, id);
    },

    SET_ADDRESSES_DOWNLOADED(state, value) {
        state.addressesDownloaded = value;
    }
};

const getters = {
    getAddresses(state) {
        return state.addresses;
    }
};

const actions = {
    addAddress({ dispatch }, address) {
        let addressId = uid();
        let payload = {
            id: addressId,
            address: address
        };
        dispatch("fbAddAddress", payload);
    },

    updateAddress({ dispatch }, payload) {
        dispatch("fbUpdateTask", payload);
    },

    deleteAddress({ dispatch }, id) {
        dispatch("fbDeleteAddress", id);
    },

    // firebase add a new address
    fbAddAddress(commit, payload) {
        let addressRef = firebaseDb.ref("addresses/" + payload.id);
        addressRef.set(payload.address);
    },

    fbUpdateAddress(commit, payload) {
        let addressRef = firebaseDb.ref("addresses/" + payload.id);
        addressRef.update(payload.updates);
    },

    fbDeleteAddress(commit, addressId) {
        let addressRef = firebaseDb.ref("addresses/" + addressId);
        addressRef.remove();
    },

    fbReadData({ commit }) {
        // console.log("reading from firebase");
        // console.log(firebaseAuth.currentUser);
        let addresses = firebaseDb.ref("addresses/");

        // address added
        addresses.on("child_added", snapshot => {
            // console.log("snapshot: ", snapshot);
            let address = snapshot.val();
            // console.log("address: ", address);
            let payload = {
                id: snapshot.key,
                address: address
            };
            commit("ADD_ADDRESS", payload);
        });

        // address updated
        addresses.on("child_changed", snapshot => {
            let address = snapshot.val();
            let payload = {
                id: snapshot.key,
                updates: address
            };

            commit("UPDATE_ADDRESS", payload);
        });

        // address deleted
        addresses.on("child_removed", snapshot => {
            let addressId = snapshot.key;

            commit("DELETE_ADDRESS", addressId);
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
