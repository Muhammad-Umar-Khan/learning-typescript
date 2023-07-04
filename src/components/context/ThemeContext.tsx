import { createContext } from "react";
import {
  ThemeContextInterface,
  ThemeContextProviderProps,
} from "../../const/types";
import { theme } from "./theme";

export const ThemeContext = createContext<ThemeContextInterface>({
  primary: {
    main: "",
    text: "",
  },
  secondary: {
    main: "",
    text: "",
  },
});
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
