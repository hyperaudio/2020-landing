import React from 'react';
import { darken, lighten } from 'polished';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/core/styles';

import colors from '@src/themes/colors';
import defaultTheme from '@src/themes/defaultTheme';

export default function withTheme(Component, color) {
  class HOC extends React.Component {
    render() {
      const theme = {
        ...defaultTheme,
        palette: {
          ...defaultTheme.palette,
          primary: {
            contrastText: createMuiTheme().palette.getContrastText(color || colors.blue),
            dark: darken(0.2, color || colors.blue),
            light: lighten(0.2, color || colors.blue),
            main: color || colors.blue,
          },
        },
      };

      return (
        <ThemeProvider theme={theme}>
          <Component {...this.props} />
        </ThemeProvider>
      );
    }
  }
  return HOC;
}
