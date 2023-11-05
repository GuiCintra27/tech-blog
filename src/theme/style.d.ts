import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      footer: string;
      headerSearchBar: string;
      changeThemeButton: string;
      border: string;
      ads: string;
      mention: {
        background: string;
        border: string;
      };
      text: {
        primary: string;
        secondary: string;
        link: string;
        ads: string;
        post: string;
        headerSearchBar: string;
        headerSearchBarPlaceholder: string;
      };
    };
    brightness: number;
    invert: number;
    borderWidth: string;
  }
}
