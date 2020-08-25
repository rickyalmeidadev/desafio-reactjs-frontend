import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string;
      dark: string;
      gray: string;
      shade: string;
    };
    margins: {
      smaller: string;
      small: string;
      normal: string;
      large: string;
      larger: string;
    };
    paddings: {
      smaller: string;
      small: string;
      normal: string;
      large: string;
      larger: string;
    };
    maxWidth: string;
    transition: string;
  }
}
