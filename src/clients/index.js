import {config, getContent, getIDs, getWeb} from './erescambio/config/config'
import eresCambioRouter from './erescambio/router/router'
import commonStyle from './erescambio/components/Style'

const clientsConf = {
  erescambio: {
    conf: config,
    getContent,
    getIDs,
    getWeb,
    router: eresCambioRouter,
    commonStyle: commonStyle
  }
}

export default clientsConf
