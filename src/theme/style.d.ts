import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      headerSearchBar: string;
      changeThemeButton: "#e8e8ea";
      text: {
        link: string;
        headerSearchBar: string;
        headerSearchBarPlaceholder: string;
      };
    };
    brightness: number;
    invert: number;
  }
}
