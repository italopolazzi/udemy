import Vue from 'vue'
Vue.component('fa-icon', {
    props: {
        icon: {
            type: String,
            required: true
        }
    },
    render(createElement) {
        const { icon } = this
        const classes = {}
        classes['fas'] = true
        classes[`fa-${icon}`] = true
        classes['fa-lg'] = true
        return createElement(
            'i', {
                class: {...classes }
            }
        )
    }
})