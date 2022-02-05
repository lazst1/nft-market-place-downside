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
import {
    faFilter, faExternalLinkAlt, faSearch, faTimes, faQuestionCircle, faMoon, faSun, faSortUp, faSortDown, faCloudUploadAlt, faEllipsisV, faThumbsUp, faUndo,
    faShareAlt, faBars, faCalendarAlt, faCopy, faGlobe, faCog, faEdit
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTelegramPlane, faDiscord, faTwitter, faMediumM, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

library.add(
    faFilter, faExternalLinkAlt, faSearch, faTimes, faQuestionCircle, faFacebookF, faTelegramPlane, faDiscord, faTwitter, faCopy, faGlobe, faCog,
    faMediumM, faMoon, faSun, faCopyright, faSortUp, faSortDown, faCloudUploadAlt, faEllipsisV, faThumbsUp, faUndo, faShareAlt, faBars, faCalendarAlt, faInstagram,
    faEdit
);

createApp(App)
    .provide('$moralis', Moralis)
    .use(store)
    .use(router)
    .use(vClickOutside)
    .use(VCalendar, {})
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
