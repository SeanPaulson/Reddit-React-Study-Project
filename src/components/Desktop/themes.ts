export const lightTheme : DesktopThemeType = {
  app: {
    colors: {
      body: '#DAE0E6',
      header: '#FFFFFF',
      btn_blue: '#0079d3',
      author_color: '#000000',
      color: 'black',
      default: '#000000',
      gray: '#EDEFF1',
      lightgray: '#F6F7F8',
      post_bg: 'white'
    }
  }
}

export const darkTheme : DesktopThemeType = {
  app: {
    colors: {
      body: '#030303',
      header: '#1A1A1B',
      color: '#D7DADC',
      btn_blue: '#D7DADC',
      author_color: '#0079d3',
      default: '#FFFFFF',
      gray: '#353535',
      lightgray: '#272729',
      post_bg: '#1A1A1B'
    }
  }
}

export type DesktopThemeType = {
  app: {
    colors: {
      body: string,
      header: string,
      color: string,
      btn_blue: string,
      author_color: string,
      default: string,
      gray: string,
      lightgray: string,
      post_bg: string,
    }
  }
}