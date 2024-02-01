import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      color: mode('#0F0F0F', '#F1F6F9')(props),
      bg: mode('#F1F6F9', '#0F0F0F')(props)
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}
export const theme = extendTheme({
  config, styles
})
