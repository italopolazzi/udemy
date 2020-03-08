import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$firebase = axios.create({
                baseURL: 'https://my-vue-course.firebaseio.com/',
                headers: {

                }
            }),
            Vue.prototype.$firebase.interceptors.response.use(config => {
                // console.log(config)
                return config
            }, error => Promise.reject(error))
    }
})