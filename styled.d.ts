import "styled-components";

declare module "styled-components" {
  export interface ThemeType {
    app: {
      colors: {
        body: string;
        header: string;
        color: string;
        btn_blue: string;
        author_color: string;
        black: string;
        gray: string;
        lightgray: string;
        post_bg: string;
      };
    };
  }
}
