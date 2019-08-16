const state = () => ({});

const getters = {};

const mutations = {};

const actions = {
    registerUser({ commit }, payload) {
        console.log(payload);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
