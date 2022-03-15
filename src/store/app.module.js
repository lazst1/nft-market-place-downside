import { themeConfig } from "@/core/config";

export const app = {
    namespaced: true,
    state: {
        windowWidth: 0,
        sidebarOpened: false,
        notificationOpened: false
    },
    getters: {

    },
    mutations: {
        UPDATE_WINDOW_WIDTH(state, val) {
            state.windowWidth = val
        },
        TOGGLE_SIDEBAR(state, val) {
            state.sidebarOpened = val
        },
        TOGGLE_NOTIFICATION_BAR(state, val) {
            state.notificationOpened = val
        }
    }
}
