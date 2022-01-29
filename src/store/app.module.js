import { themeConfig } from "@/core/config";

export const app = {
    namespaced: true,
    state: {
        windowWidth: 0,
        sidebarOpened: false
    },
    getters: {
        currentBreackPoint: state => {
            const { windowWidth } = state;
            if (windowWidth >= themeConfig.xl) return 'xl'
            if (windowWidth >= themeConfig.lg) return 'lg'
            if (windowWidth >= themeConfig.md) return 'md'
            if (windowWidth >= themeConfig.sm) return 'sm'
            return 'xs'
        }
    },
    mutations: {
        UPDATE_WINDOW_WIDTH(state, val) {
            state.windowWidth = val
        },
        TOGGLE_SIDEBAR(state, val) {
            state.sidebarOpened = val
        }
    }
}