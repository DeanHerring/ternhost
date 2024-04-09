import {createApp} from 'vue';
import './style.scss';
import App from './App.vue';

// Font Awesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {
    faChevronRight,
    faBars,
    faCircleXmark,
    faChevronDown,
    faChevronUp,
    faPlus,
    faBasketShopping,
    faCheck,
    faXmark,
    faTrashCan,
    faHouse,
    faShieldHalved,
    faServer,
    faDesktop,
    faMicrochip,
    faLocationDot,
    faShieldDog,
    faCircleDollarToSlot,
    faFingerprint,
    faCircleQuestion,
    faCubes,
    faGear,
    faShield,
    faHeadset,
    faRightLeft,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faShield,
    faHeadset,
    faRightLeft,
    faGear,
    faCubes,
    faCircleQuestion,
    faFingerprint,
    faShieldDog,
    faCircleDollarToSlot,
    faLocationDot,
    faTrashCan,
    faXmark,
    faChevronRight,
    faBars,
    faCircleXmark,
    faChevronDown,
    faChevronUp,
    faPlus,
    faBasketShopping,
    faCheck,
    faHouse,
    faShieldHalved,
    faServer,
    faDesktop,
    faMicrochip,
);

// Vue Router
import {createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue';

import ViewHome from "@/components/home/ViewHome.vue";
import ViewDomain from "@/components/home/ViewDomain.vue";
import ViewHosting from "@/components/home/ViewHosting.vue";
import ViewBuilder from "@/components/home/ViewBuilder.vue";

import LoginPage from './pages/LoginPage.vue';

import ViewLogin from "@/components/login/ViewLogin.vue";
import ViewSignup from "@/components/login/ViewSignup.vue";
import ViewEmail from "@/components/login/ViewEmail.vue";
import ViewForgot from "@/components/login/ViewForgot.vue";
import ViewNew from "@/components/login/ViewNew.vue";

import DashboardPage from './pages/DashboardPage.vue';

import DashboardViewHome from '@/components/dashboard/DashboardViewHome.vue';
import DashboardViewDomain from '@/components/dashboard/DashboardViewDomain.vue';
import DashboardViewHosting from '@/components/dashboard/DashboardViewHosting.vue';
import DashboardViewBuilder from '@/components/dashboard/DashboardViewBuilder.vue';
import DashboardViewServices from '@/components/dashboard/DashboardViewServices.vue';

import OrderPage from "@/pages/OrderPage.vue";

import OrderViewDomain from "@/components/order/domain/OrderViewDomain.vue";
import OrderViewHosting from "@/components/order/hosting/OrderViewHosting.vue";
import OrderViewPay from "@/components/order/pay/OrderViewPay.vue";

import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            children: [
                {
                    path: '',
                    component: ViewHome,
                },
                {
                    path: 'home/domain',
                    component: ViewDomain,
                },
                {
                    path: 'home/hosting',
                    component: ViewHosting,
                },
                {
                    path: 'home/builder',
                    component: ViewBuilder,
                },
            ]
        },
        {
            path: '/users',
            component: LoginPage,
            children: [
                {
                    path: 'login',
                    component: ViewLogin,
                },
                {
                    path: 'signup',
                    component: ViewSignup,
                },
                {
                    path: 'email/check',
                    component: ViewEmail,
                },
                {
                    path: 'password/forgot',
                    component: ViewForgot,
                },
                {
                    path: 'password/new',
                    component: ViewNew,
                },
            ]
        },
        {
            path: '/dashboard',
            component: DashboardPage,
            children: [
                {
                    path: '',
                    component: DashboardViewHome,
                },
                {
                    path: 'domain',
                    component: DashboardViewDomain,
                },
                {
                    path: 'hosting',
                    component: DashboardViewHosting,
                },
                {
                    path: 'builder',
                    component: DashboardViewBuilder,
                },
                {
                    path: 'service',
                    component: DashboardViewServices,
                },
            ],
        },

        {
            path: "/order",
            component: OrderPage,
            children: [
                {
                    path: 'domain',
                    component: OrderViewDomain
                },
                {
                    path: 'hosting',
                    component: OrderViewHosting
                },
                {
                    path: 'pay',
                    component: OrderViewPay
                }
            ]
        },

        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage
        },
    ],
});

// Event Bus
import mitt from 'mitt';

export const emitter = mitt();

// Swiper
import {register} from 'swiper/element/bundle';

register();

// Pinia
import {createPinia} from 'pinia';

const pinia = createPinia();

// Plugins
import discount from '@/plugins/discount.js';

// Notification
import Notifications from '@kyvg/vue3-notification'

// Vue
const app = createApp(App);

app.config.globalProperties.$emitter = emitter;

app.use(router);
app.use(pinia);
app.use(Notifications)
app.use(discount);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
