import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      headerSearchBar: string;
      changeThemeButton: "#e8e8ea";
      cardBorder: string;
      ads: string;
      text: {
        primary: string;
        secondary: string;
        link: string;
        ads: string;
        headerSearchBar: string;
        headerSearchBarPlaceholder: string;
      };
    };
    brightness: number;
    invert: number;
    borderWidth: string;
  }
}
