import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/custom.css'
import router from './router'
import store from './store'
import vClickOutside from "click-outside-vue3"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import VCalendar from 'v-calendar'
import Moralis from './plugins/moralis'
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css'
import VueClipboard from 'vue3-clipboard'
import {
    faFilter, faExternalLinkAlt, faSearch, faTimes, faQuestionCircle, faMoon, faSun, faSortUp, faSortDown, faCloudUploadAlt, faEllipsisV, faThumbsUp, faUndo,
    faShareAlt, faBars, faCalendarAlt, faCopy, faGlobe, faCog, faEdit, faBell
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTelegramPlane, faDiscord, faTwitter, faMediumM, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

library.add(
    faFilter, faExternalLinkAlt, faSearch, faTimes, faQuestionCircle, faFacebookF, faTelegramPlane, faDiscord, faTwitter, faCopy, faGlobe, faCog,
    faMediumM, faMoon, faSun, faCopyright, faSortUp, faSortDown, faCloudUploadAlt, faEllipsisV, faThumbsUp, faUndo, faShareAlt, faBars, faCalendarAlt, faInstagram,
    faEdit, faBell
);

createApp(App)
    .provide('$moralis', Moralis)
    .use(store)
    .use(router)
    .use(vClickOutside)
    .use(VCalendar, {})
    .use(VueClipboard, {
        autoSetContainer: true,
        appendToBody: true,
    })
    .component("font-awesome-icon", FontAwesomeIcon)
    .component('Multiselect', Multiselect)
    .mount('#app')
