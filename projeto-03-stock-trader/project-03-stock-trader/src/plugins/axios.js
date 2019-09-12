import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
                baseURL: '',
                headers: {

                }
            }),
            Vue.prototype.$http.interceptors.response.use(config => {
                console.log(config)
                return config
            }, error => Promise.reject(error))
    }
})