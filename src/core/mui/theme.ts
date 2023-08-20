import { ThemeOptions, PaletteOptions, createTheme } from "@mui/material";

const colors = {
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

const paletteOptions: PaletteOptions = {
  ...colors,
  text: {
    primary: "#212121",
    secondary: "#666666",
    disabled: "#9e9e9e",
  },
  primary: {
    main: "#2196F3",
    dark: "#1E88E5",
    light: "#42A5F5",
    contrastText: "#fff",
  },
  secondary: {
    main: "#9C27B0",
    dark: "#7B1FA2",
    light: "#BA68C8",
  },
  //error: {},
  //warning: {},
  //info: {},
  //success: {},
};

const paletteTheme = createTheme({ palette: paletteOptions });

const themeOptions: ThemeOptions = {
  palette: paletteOptions,
  components: {
    MuiButton: {
      styleOverrides: {},
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: paletteTheme.palette.primary.main,
          },
        },
        {
          props: { disabled: true },
          style: {
            backgroundColor: paletteTheme.palette.grey[300],
            cursor: "not-allowed",
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: 96,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 60,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 48,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 34,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: 24,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: 20,
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: 1.2,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.2,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.2,
    },
    caption: {
      fontSize: 14,
      lineHeight: 1.2,
    },
    overline: {
      fontSize: 12,
      lineHeight: 1.2,
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
