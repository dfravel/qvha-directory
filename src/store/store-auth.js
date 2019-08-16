import { Loading, LocalStorage } from "quasar";
import { firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";

const state = {
    loggedIn: false
};

const getters = {};

const mutations = {
    SET_LOGGED_IN(state, value) {
        state.loggedIn = value;
    }
};

const actions = {
    registerUser(commit, payload) {
        Loading.show();
        firebaseAuth
            .createUserWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                console.log("response: ", response);
            })
            .catch(error => {
                showErrorMessage(error.message);
            });
    },
    loginUser(commit, payload) {
        Loading.show();
        firebaseAuth
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                console.log("response: ", response);
            })
            .catch(error => {
                showErrorMessage(error.message);
            });
    },
    logoutUser() {
        firebaseAuth.signOut();
    },
    handleAuthStateChange({ commit, dispatch }) {
        firebaseAuth.onAuthStateChanged(user => {
            Loading.hide();
            if (user) {
                commit("SET_LOGGED_IN", true);
                LocalStorage.set("loggedIn", true);
                this.$router.push("/");
                dispatch("address/fbReadData", null, { root: true });
            } else {
                commit("SET_LOGGED_IN", false);
                LocalStorage.set("loggedIn", false);
                this.$router.replace("/auth");
            }
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
