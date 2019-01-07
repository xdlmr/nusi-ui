import './styles/index.scss'


import Button from './components/button/index'
import Icon from './components/icon/index'

const components = {
  Button,
  ButtonGroup: Button.group,
  Icon
}

const install = function (Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
