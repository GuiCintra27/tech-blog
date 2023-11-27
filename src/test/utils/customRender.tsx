import React, { ReactElement } from "react";
import { render } from "@testing-library/react";

import { ThemeProvider } from "@/theme/theme";
import { ReduxProvider } from "@/lib/reduxProvider";

export const ComponentWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

type Options = Parameters<typeof render>[1];

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
