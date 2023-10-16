import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { ConfigCatPlugin } from 'configcat-vue-ts';

import { PollingMode } from 'configcat-vue-ts';

const app = createApp(App);

app.use(ConfigCatPlugin, {
    sdkKey: "gnLbCJ_nhUCGHl1SZNyC5Q/V794nqFnpkWY_7TuhXTaOw", // SDKKey is required
    pollingMode: PollingMode.AutoPoll,
});

app.provide('message', 'hello')

app.mount('#app')
