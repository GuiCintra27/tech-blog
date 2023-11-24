import React from "react";

import { ThemeProvider } from "@/theme/theme";
import { ReduxProvider } from "@/lib/reduxProvider";

export const ComponentWrapper: React.FC<{ children: React.ReactNode}> = ({children}) => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};