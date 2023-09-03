import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../src/theme/Theme";
import { GlobalStyle } from "../src/theme/GlobalStyle.styled";

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

/* TODO: replace with your own global styles, or remove */
/** @type { import('@storybook/react').Preview } */

const withThemeProvider = (Story) => (
  <ThemeProvider theme={theme["light"]}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
);
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [withThemeProvider],
};

export default preview;
