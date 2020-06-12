import VTab from './VTab'


let ComponentCaches ={}

function registerCommonComponent(vue,name,Component,options = {}){
    if(!vue.prototype.$alert){
        vue.prototype.$alert = {}
    }
    vue.prototype.$alert[name] = function () {
        if (ComponentCaches[name]) {
            return ComponentCaches[name]
        }
        var componentClass = vue.extend(Component)
        var component = new componentClass(options).$mount()
        document.body.appendChild(component.$el)
        return ComponentCaches[name] = component
    }
}

export default {
    registerComponent: vue => {
        vue.component('v-tab', VTab)
        // registerCommonComponent(vue,'loading',Loading)
        // registerCommonComponent(vue,'tost',Tost)
    }
}