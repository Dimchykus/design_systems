import { MantineTheme, ButtonStylesParams, MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  fontSizes: {
    xs: '0.6rem',
    sm: '0.75rem',
    md: '0.9rem',
    lg: '1rem',
    xl: '1.2rem',
  },
  headings: {
    fontWeight: 400,
    fontFamily: 'Roboto',
    sizes: {
      h1: { fontWeight: 100, fontSize: '3rem', lineHeight: 1.4 },
      h2: { fontSize: '2.2rem', lineHeight: 1.2 },
      h3: { fontSize: '1.8rem', lineHeight: 1.2 },
      h4: { fontSize: '1.6rem', lineHeight: 1.2 },
      h5: { fontSize: '1.4rem', lineHeight: 1.2 },
      h6: { fontSize: '1rem', fontWeight: 900, lineHeight: 1.2 },
    },
  },
  components: {
    Button: {
      styles: (theme: MantineTheme, params: ButtonStylesParams, { variant }) => ({
        root: {
          height: '2.625rem',
          padding: '0 1.875rem',
          backgroundColor:
            variant === 'filled'
              ? theme.colors[params.color || theme.primaryColor][9]
              : undefined,
        },
      }),
    },

    Badge: {
      styles: {
        root: { borderWidth: '0.125rem' },
      },
    },
    Title: {
      styles: {
        root: {
          '&:is(h1)': { color: 'red' },
          '&:is(h3)': { color: 'blue' },
        },
      },
    },
    TypographyStylesProvider: {
      styles: {
        root: {
          '& h1': { color: 'red' },
          '& h3': { color: 'blue' },
        },
      },
    },
  },
}

export default theme;