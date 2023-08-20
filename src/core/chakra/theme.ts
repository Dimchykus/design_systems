import { defineStyleConfig, extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  white: {
    1200: "#FFFFFF",
  },
  black: {
    1200: "#151515",
    1100: "#292929",
    1000: "#3E3E3E",
    900: "#525252",
    800: "#676767",
    700: "#7C7C7C",
    600: "#909090",
    500: "#A5A5A5",
    400: "#BABABA",
    300: "#CECECE",
    200: "#E3E3E3",
    150: "#EAEAEA",
    100: "#F7F7F7",
  },
  grey: {
    1200: "#222C31",
    1100: "#2E3C43",
    1000: "#3B4C55",
    900: "#475D67",
    800: "#546D79",
    700: "#607D8B",
    600: "#79929D",
    500: "#92A6B0",
    400: "#ACBBC2",
    300: "#C5CFD5",
    200: "#DEE4E7",
    150: "#EAEEF1",
    100: "#F7F9F9",
  },
  blue: {
    1200: "#002F59",
    1100: "#003E72",
    1000: "#004C87",
    900: "#005997",
    800: "#0065A4",
    700: "#0970AC",
    600: "#288AC5",
    500: "#51A2D9",
    400: "#79BAE9",
    300: "#A2D0F5",
    200: "#CAE5FC",
    150: "#E1F1FE",
    100: "#F2F9FF",
  },
  purple: {
    1200: "#312043",
    1100: "#442B5C",
    1000: "#563775",
    900: "#68438D",
    800: "#7B4EA6",
    700: "#8D5ABF",
    600: "#9F6DD0",
    500: "#B183DF",
    400: "#C39BEB",
    300: "#D5B6F4",
    200: "#E7D4FA",
    150: "#F2E8FD",
    100: "#F9F4FE",
  },
  red: {
    1300: "#350E08",
    1200: "#4E150C",
    1100: "#6B1D10",
    1000: "#882515",
    900: "#A52D19",
    800: "#C2351E",
    700: "#DF3D22",
    600: "#E45C45",
    500: "#E97A68",
    400: "#EE998B",
    300: "#F3B8AE",
    200: "#F8D7D1",
    150: "#FCEBE9",
    100: "#FDF5F4",
  },
  orange: {
    1300: "#38220A",
    1200: "#55330F",
    1100: "#754614",
    1000: "#AD590C",
    900: "#B56B1F",
    800: "#D47E25",
    700: "#F4912A",
    600: "#FFA33E",
    500: "#FFB456",
    400: "#FFC679",
    300: "#FFD7A2",
    200: "#FFE8CA",
    150: "#FFF3E0",
    100: "#FFFAF2",
  },
  yellow: {
    1200: "#594711",
    1100: "#7A6118",
    1000: "#9C7B1E",
    900: "#BD9624",
    800: "#DEB02B",
    700: "#FFCA31",
    600: "#FFD252",
    500: "#FFDB72",
    400: "#FFE393",
    300: "#FFECB4",
    200: "#FFF4D4",
    150: "#FFF9EB",
    100: "#FFFCF5",
  },
  green: {
    1400: "#0E2F1B",
    1300: "#154929",
    1200: "#195731",
    1100: "#1F6B3C",
    1000: "#27874C",
    900: "#2D9C58",
    800: "#31A960",
    700: "#36BA69",
    600: "#53CD82",
    500: "#9AE2B5",
    400: "#CAF0D9",
    300: "#D6F3E2",
    200: "#E3F7EA",
    150: "#EBF9F0",
    100: "#F3FBF6",
  },
};


const breakpoints = {
  xs: '500px',
  sm: '768px',
  md: '960px',
  lg: '1200px',
  xl: '1440px',
  '2xl': '1920px',
}

const spacing = {
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
}

const sizes = {
  sizes: {
    ...spacing.space,
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '500px',
    sm: '768px',
    md: '960px',
    lg: '1200px',
    xl: '1440px',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
}

const borderRadius = {
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
}

const zIndices = {
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
}

const Card = defineStyleConfig({
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    alignItems: 'center',
    gap: 6,
  },
  variants: {
    rounded: {
      padding: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
  },
  defaultProps: {
    variant: 'smooth',
  },
})

export const theme = extendTheme({
  colors,
  breakpoints,
  sizes,
  borderRadius,
  zIndices,
  spacing,
  components: {
    Card,
  },
  styles: {
    global: {
      body: {
        bg: 'grey.400',
        color: 'white',
      },
      a: {
        color: 'blue.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  layerStyles: {
    base: {
      bg: 'grey.500',
      border: '2px solid',
      borderColor: 'grey.500',
    },
    selected: {
      bg: 'black.500',
      color: 'white.1200',
      borderColor: 'green.500',
    },

  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  textStyles: {
    h1: {
      fontSize: 96,
      lineHeight: 1.2,
      sizes: {
        sm: {
          fontSize: 48,
        }
      }
    },
    h2: {
      fontSize: 60,
      lineHeight: 1.2,
      sizes: {
        sm: {
          fontSize: 48,
        }
      }
    },
    h3: {
      fontSize: 48,
      lineHeight: 1.2,
      sizes: {
        sm: {
          fontSize: 36,
        }
      }
    },
    h4: {
      fontSize: 34,
      lineHeight: 1.2,
      sizes: {
        sm: {
          fontSize: 24,
        }
      }
    },
    h5: {
      fontSize: 24,
      lineHeight: 1.2,
      sizes: {
        sm: {
          fontSize: 20,
        }
      }
    },
    h6: {
      fontSize: 20,
      lineHeight: 1.2,
      sizes: {
        sm: {
          fontSize: 16,
        }
      }
    },

  }
})