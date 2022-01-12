import AuthService from "@/core/services/auth.service";

export const auth = {
    namespaced: true,
    state: {
        user: {},
        status: {
            loggedIn: false
        }
    },
    actions: {
        login({ commit }, walletAddress) {
            return AuthService.connectWallet(walletAddress).then(
                user => {
                    commit('loginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('loginFailure');
                    return Promise.reject(error);
                }
            )
        }
    },
    getters: {

    },
    mutations: {
        loginSuccess(state, user) {
          state.status.loggedIn = true;
          state.user = user;
        },
        loginFailure(state) {
          state.status.loggedIn = false;
          state.user = null;
        },
    }
}
