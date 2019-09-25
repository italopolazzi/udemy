import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pt from 'vuetify/es5/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        dark: false,
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#6200EE',
                'primary-variant': '#3700B3',
                secondary: '#03DAC6',
                'secondary-variant': '#018786',
                accent: '#82B1FF',
                error: '#B00020',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
            dark: {
                primary: '#FFDE03',
                'primary-variant': '#3700B3',
                secondary: '#03DAC6',
                'secondary-variant': '#018786',
                accent: '#82B1FF',
                error: '#B00020',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
        },
    },
    lang: {
        locales: { pt },
        current: 'pt',
    },
    icons: {
        iconfont: 'mdi',
    },
});