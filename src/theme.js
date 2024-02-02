import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/800.css'

const styles = {
  global: (props) => ({
    body: {
      color: mode('#0F0F0F', '#F1F6F9')(props),
      fontFamily: 'Poppins',
      bg: mode('#F1F6F9', '#0F0F0F')(props)
    }

  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}
export const theme = extendTheme({
  config, styles
})
