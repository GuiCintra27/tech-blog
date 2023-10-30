"use client"

import { ThemeType, setTheme, toggleTheme } from "@/components/infra/storage/theme";
import { useAppSelector } from "@/hooks/useAppSelector";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { whiteTheme } from "./white-theme";
import { darkTheme } from "./dark-theme";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();

  const themes = {
    [ThemeType.light]: whiteTheme,
    [ThemeType.dark]: darkTheme,
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if(theme && JSON.parse(theme) === ThemeType.dark) {
      dispatch(setTheme({
        theme: ThemeType.dark
      }));
    }
  }, [])

  return (
    <ThemeProviderStyled theme={themes[theme]}>{children}</ThemeProviderStyled>
  );
}
