"use client"

import { ThemeType } from "@/components/infra/storage/theme";
import { useAppSelector } from "@/hooks/useAppSelector";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { whiteTheme } from "./white-theme";
import { darkTheme } from "./dark-theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useAppSelector((state) => state.theme);

  const themes = {
    [ThemeType.light]: whiteTheme,
    [ThemeType.dark]: darkTheme,
  };

  return (
    <ThemeProviderStyled theme={themes[theme]}>{children}</ThemeProviderStyled>
  );
}
