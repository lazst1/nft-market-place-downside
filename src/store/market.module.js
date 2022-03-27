export const market = {
    namespaced: true,
    state: {
    },
    actions: {
        // seller do cancel unsold order
        async cancelOrderBySeller({ commit, rootState }, orderId) {
            rootState.marketContract.methods.cancelOrder(
                orderId
            ).send({ from: rootState.user.walletAddress, gas: 250000 });
        },
        // buyer do cancel an downside protection order
        cancelOrderByBuyer({ commit, rootState }, orderId) {
            rootState.marketContract.methods.claimDownsideProtectionAmount(
                orderId
            ).send({ from: rootState.user.walletAddress, gas: 250000 });
        },
    },
    getters: {
        etherFromWei: (state, getters, rootState) => (wei) => {
            if (typeof wei === 'number') {
                wei = wei.toFixed();
            }
            return parseFloat(rootState.web3.utils.fromWei(wei));
        }
    },
    mutations: {
    }
}
