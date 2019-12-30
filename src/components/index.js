/**
 * Created by extra_zhao on 2019/12/30.
 */
/**
 * Created by Admin on 2018/8/31.
 */
import Vue from 'vue'
import vheader from './header'

const publicComponents = {
    'v-header':vheader
}



Vue.use({
    install: Vue => {
        Object.keys(publicComponents).forEach(key => {
            Vue.component(`${key}`, publicComponents[key])
        })
    }
})



