import { createContext, useContext } from "react";

const ThemeContext = createContext<string>("light");

export default function Box() {
  const theme = useContext(ThemeContext);
  return <p>{theme}</p>;
}