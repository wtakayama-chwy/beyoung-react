import React from "react";
import styled, { ThemeProvider } from 'styled-components';
// import { mediaQuery } from '../Helpers/mediaQuery';

const ThemeToggleContext = React.createContext({
    toggle: () => {},
});

export const useTheme = () => React.useContext(ThemeToggleContext);

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
`;

export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = React.useState({
    mode: 'light'
  });


  const toggle = () => {
    const mode = (themeState.mode === 'light' ? `dark` : `light`);
    setThemeState({ mode: mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;