import { createTheme } from '@mui/material/styles';
import { filledInputClasses } from '@mui/material/FilledInput';

const colors = {
  foreground: {
    f100: 'rgba(255, 255, 255, 1)',
    f90: 'rgba(210, 218, 225, 1)',
    f80: 'rgba(141, 146, 149, 1)',
    f70: 'rgba(26, 29, 31, 1)',
    f60: 'rgba(50, 50, 50, 1)',
    f55: 'rgba(80, 80, 80, 1)',
    f50: 'rgba(0, 0, 0, 0.35)',
    f40: 'rgba(0, 0, 0, 1)',
    f30: 'rgba(179, 179, 179, 1)',
  },
  background: {
    b105: 'rgb(28,30,32)',
    b100: 'rgba(35, 38, 40, 0.8)',
    b95: 'rgba(35, 38, 40, 1)',
    b90: 'rgba(13, 15, 16, 1) !important',
    b80: 'rgba(13, 15, 16, 0.8)',
    b60: 'rgba(66, 60, 46, 1) !important',
    b55: 'rgba(26, 29, 31, 1) !important',
    b50: 'rgba(26, 29, 31, 0.6) !important',
    b40: 'rgba(76, 80, 83, 1) !important',
  },
  gradient: {
    g100: 'linear-gradient(180deg, rgba(114, 118, 122, 1), rgba(87, 93, 97, 1), rgba(114, 118, 122, 0)) border-box',
  },
  select: {
    bg: 'rgb(18, 18, 18) !important',
    hover: 'rgba(68, 73, 80, 0.1) !important',
    selected: 'rgba(68, 73, 80, 0.15) !important',
  },
  accent: {
    red: 'rgba(221, 68, 75, 1) !important',
    green: 'rgba(20, 243, 150, 1)',
    yellow: 'rgba(218, 165, 32, 1) !important',
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.foreground.f90,
    },
    secondary: {
      main: colors.foreground.f80,
    },
    white: {
      main: colors.foreground.f100,
    },
    shape: {
      borderRadiusDefault: 10,
    },

    background: {
      content: {
        background: colors.background.b105,
      },
      cryptoForm: { background: colors.background.b90 },
      inputs: {
        background: colors.background.b50,
      },
      searchInput: {
        background: colors.background.b55,
      },
    },

    text: {
      inputs: {
        color: colors.foreground.f80,
      },
      searchInput: { color: colors.background.b40 },
    },

    buttons: {
      default: {
        background: colors.background.b90,
      },
      primary: {
        background: colors.accent.yellow,
      },
      outlined: {
        color: colors.foreground.f90,
      },
      disabled: {
        background: colors.background.b60,
        color: colors.foreground.f70,
      },
    },

    toggleButton: {
      color: colors.foreground.f90,
    },

    depositBtn: {
      background: colors.background.b90,
      color: colors.foreground.f55,
    },

    addressBtn: {
      color: colors.foreground.f30,
    },

    buttonCrypto: {
      background: colors.background.b90,
    },

    border: {
      content: {
        color: colors.foreground.f80,
        background: colors.gradient.g100,
      },
      cryptoForm: { color: colors.accent.yellow },
      depositBtn: { color: colors.accent.yellow },
      buttonCrypto: { color: colors.accent.yellow },
      inputs: {
        color: colors.foreground.f60,
        active: colors.accent.yellow,
      },
    },
    icons: {
      close: {
        color: colors.accent.red,
      },
      check: {
        color: colors.accent.green,
      },
      eye: {
        color: colors.foreground.f80,
      },
      currency: {
        color: colors.foreground.f90,
      },
    },
    progress: {
      color: colors.accent.yellow,
    },
    errors: {
      inputs: {
        color: colors.accent.red,
      },
    },
    alerts: {
      error: {
        color: colors.foreground.f90,
        background: colors.accent.red,
      },
    },
    dialog: {
      background: colors.background.b80,
      paper: {
        background: colors.background.b95,
      },
    },
    select: {
      background: colors.select.bg,
      hover: colors.select.hover,
      selected: colors.select.selected,
    },

    shadow: {
      content: {
        color: colors.foreground.f50,
      },
      login: {
        color: colors.foreground.f50,
      },
    },
  },
  typography: {
    fontFamily: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    fontSize: 13,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    allVariants: {
      color: colors.foreground.f90,
    },
    body1: {
      fontSize: 16,
      color: colors.foreground.f90,
    },
    body2: {
      fontSize: 15,
      color: colors.foreground.f80,
    },
    body3: {
      fontSize: 12,
      fontWeight: 300,
      color: colors.foreground.f90,
    },
    body4: {
      color: colors.foreground.f100,
      fontWeight: 700,
      fontSize: 13,
    },
    body5: {
      color: colors.foreground.f100,
      fontWeight: 600,
      fontSize: 10,
    },
    body6: {
      fontWeight: 600,
      fontSize: 15,
      color: colors.foreground.f100,
    },
    body7: {
      fontSize: 12,
      fontWeight: 300,
      color: colors.foreground.f100,
    },
    body8: {
      fontSize: 14,
      fontWeight: 400,
      color: colors.foreground.f30,
    },
    errorMessage: {
      fontSize: 12,
      color: 'rgba(221, 68, 75, 1) !important',
    },

    h3: {
      fontSize: 19,
      fontWeight: 700,
      lineHeight: '19px',
    },
  },
});

export { colors };

export default theme;
