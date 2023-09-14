import { ThemeType } from 'styled-components'

export const lightTheme: ThemeType = {
  app: {
    colors: {
      body: '#dae0e6',
      header: '#1d2535',
      btn_blue: '#0079d3',
      author_color: '#000000',
      color: 'black',
      black: '#000000',
      gray: '#787c7e',
      lightgray: '#908f8f',
      post_bg: 'white',
    },
  },
}

export const darkTheme: ThemeType = {
  app: {
    colors: {
      body: '#353535',
      header: '#1d2535',
      color: 'white',
      btn_blue: '#0079d3',
      author_color: '#0079d3',
      black: '#000000',
      gray: '#353535',
      lightgray: '#908f8f',
      post_bg: '#000000',
    },
  },
}
