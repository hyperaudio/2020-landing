import { darken, lighten } from 'polished';

import { createMuiTheme } from '@material-ui/core/styles';

import colors from '@src/themes/colors';
import setType from '@src/utils/setType';

export const fonts = {
  body: 'Roboto, Helvetica, Arial, sans-serif',
  head: 'Work Sans, Helvetica, Arial, sans-serif',
  foot: 'Roboto Mono, Helvetica, Arial, sans-serif',
};

export const mui = createMuiTheme({});

export default createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: mui.spacing(12),
      '@media (min-width: 0px) and (orientation: landscape)': {
        minHeight: mui.spacing(14),
      },
      [mui.breakpoints.up('md')]: {
        minHeight: mui.spacing(16),
      },
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 100,
        transition: mui.transitions.create(['background-color', 'box-shadow', 'border', 'color', 'fill'], {
          duration: mui.transitions.duration.standard,
        }),
        '&:focus': {
          backgroundColor: colors.mono[900],
          color: colors.mono[100],
          fill: colors.mono[100],
          outline: 'none',
        },
      },
      outlined: {
        padding: `${mui.spacing(1)}px ${mui.spacing(2)}px`,
        border: `2px solid ${mui.palette.type === 'light' ? colors.mono[900] : colors.mono[100]}`,
        '&$disabled': {
          border: `2px solid ${mui.palette.action.disabledBackground}`,
        },
      },
      outlinedPrimary: {
        border: `2px solid ${colors.black}`,
        '&:hover': {
          border: `2px solid ${colors.black}`,
          backgroundColor: 'transparent',
        },
      },
      containedSizeLarge: {
        padding: mui.spacing(1.5, 2.5),
        ...setType(300),
      },
      outlinedSizeLarge: {
        padding: mui.spacing(1.5, 2.5),
        ...setType(300),
      },
    },
    MuiIconButton: {
      root: {
        // borderRadius: 'none',
        transition: mui.transitions.create(['background-color', 'box-shadow', 'border', 'color', 'fill'], {
          duration: mui.transitions.duration.standard,
        }),
        '&:focus': {
          backgroundColor: colors.mono[900],
          color: colors.mono[100],
          fill: colors.mono[100],
          outline: 'none',
        },
      },
    },
    MuiLink: {
      root: {
        transition: mui.transitions.create(['background-color', 'box-shadow', 'border', 'color', 'fill'], {
          duration: mui.transitions.duration.standard,
        }),
        '&:focus': {
          backgroundColor: colors.mono[900],
          boxShadow: `0 0 0 2px ${colors.mono[900]}`,
          color: colors.mono[100],
          fill: colors.mono[100],
          outline: 'none',
        },
      },
    },
    MuiPaper: {
      root: {
        background: colors.mono[100],
        color: mui.palette.text.primary,
        transition: mui.transitions.create('box-shadow'),
      },
      outlined: {
        backgroundColor: mui.palette.background.paper,
        border: `5px solid ${colors.mono[900]}`,
      },
    },
    MuiTooltip: {
      tooltip: {
        ...setType(100),
        backgroundColor: colors.mono[900],
        color: colors.mono[100],
        fontFamily: fonts.foot,
      },
    },
  },
  palette: {
    background: {
      default: '#6100DE',
      paper: '#9C53F8',
    },
    divider: colors.mono[900],
    text: {
      primary: colors.mono[100],
      secondary: colors.flare[500],
    },
    primary: {
      contrastText: mui.palette.getContrastText(colors.blue),
      dark: darken(0.2, colors.blue),
      light: lighten(0.2, colors.blue),
      main: colors.blue,
    },
  },
  props: {
    MuiAppBar: {
      elevation: 0,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiPaper: {
      elevation: 0,
      square: false,
    },
  },
  shape: {
    borderRadius: 5,
  },
  typography: {
    fontFamily: fonts.body,
    fontWeight: '500',
    body1: { ...setType(400) },
    body2: { ...setType(200) },
    button: { ...setType(200), fontFamily: fonts.foot, fontWeight: '600', letterSpacing: '0.15em' },
    h1: { ...setType(900), fontFamily: fonts.head, fontWeight: '600' },
    h2: { ...setType(800), fontFamily: fonts.head, fontWeight: '600' },
    h3: { ...setType(700), fontFamily: fonts.head, fontWeight: '600' },
    h4: { ...setType(600), fontFamily: fonts.head, fontWeight: '600' },
    h5: { ...setType(500), fontFamily: fonts.head, fontWeight: '600' },
    h6: { ...setType(400), fontFamily: fonts.head, fontWeight: '600' },
    overline: { ...setType(200), fontFamily: fonts.foot, fontWeight: '500', letterSpacing: '0.4em' },
    caption: { ...setType(100), fontFamily: fonts.body, fontWeight: '400' },
    subtitle1: { ...setType(500), fontFamily: fonts.head, fontWeight: '500' },
    subtitle2: { ...setType(400), fontFamily: fonts.head, fontWeight: '500' },
    code: { fontSize: 'inherit', fontFamily: fonts.foot, fontWeight: 400 },
  },
});
