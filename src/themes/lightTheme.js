import { createMuiTheme } from '@material-ui/core/styles';

import defaultTheme from '@src/themes/defaultTheme';
import colors from '@src/themes/colors';

export default createMuiTheme({
  ...defaultTheme,
  overrides: {
    MuiPaper: {
      ...defaultTheme.overrides.MuiPaper,
      root: {
        ...defaultTheme.overrides.MuiPaper.root,
        backgroundColor: colors.mono[100],
        color: colors.mono[900],
      },
      outlined: {
        ...defaultTheme.overrides.MuiPaper.outlined,
      },
    },
    MuiButton: {
      ...defaultTheme.overrides.MuiButton,
      root: {
        ...defaultTheme.overrides.MuiButton.root,
        '&:focus': {
          backgroundColor: colors.mono[100],
          color: colors.mono[900],
          fill: colors.mono[900],
        },
      },
      outlined: {
        ...defaultTheme.overrides.MuiButton.outlined,
        border: `2px solid ${defaultTheme.palette.type === 'light' ? colors.mono[100] : colors.mono[200]}`,
        '&$disabled': {
          border: `2px solid ${defaultTheme.palette.action.disabledBackground}`,
        },
      },
      outlinedPrimary: {
        border: `2px solid ${colors.black}`,
        '&:hover': {
          border: `2px solid ${colors.black}`,
          backgroundColor: 'transparent',
        },
      },
    },
    MuiIconButton: {
      ...defaultTheme.overrides.MuiIconButton,
      root: {
        ...defaultTheme.overrides.MuiIconButton.root,
        borderRadius: 'none',
        '&:focus': {
          backgroundColor: colors.mono[100],
          color: colors.mono[900],
          fill: colors.mono[900],
        },
      },
    },
    MuiLink: {
      ...defaultTheme.overrides.MuiLink,
      root: {
        ...defaultTheme.overrides.MuiLink.root,
        '&:focus': {
          backgroundColor: colors.mono[100],
          boxShadow: `0 0 0 2px ${colors.mono[100]}`,
          color: colors.mono[900],
          fill: colors.mono[900],
        },
      },
    },
  },
  palette: {
    ...defaultTheme.palette,
    background: {
      ...defaultTheme.palette.background,
      default: colors.mono[800],
      paper: colors.mono[900],
    },
    text: {
      ...defaultTheme.palette.text,
      primary: colors.mono[100],
    },
  },
});
