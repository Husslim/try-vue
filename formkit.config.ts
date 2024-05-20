import { defaultConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme'
import { genesisIcons } from '@formkit/icons'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep'

export default defaultConfig({
  plugins: [createMultiStepPlugin()],

  config: {
    rootClasses,
    
  icons: {
      ...genesisIcons
    },
  },
})