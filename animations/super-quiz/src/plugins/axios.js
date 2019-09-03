import Vue from "vue";
import axios from "axios";

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://my-vue-course.firebaseio.com/'
        })

        Vue.prototype.$http.interceptors.response.use(response => {
            const temp = []
            for (let id in response.data) {
                temp.push({ id, ...response.data[id] })
            }
            response.data = temp
            return response
        }, error => Promise.reject(error));
    }
})