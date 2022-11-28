// based on the colors from Tailwind CSS
// https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
//
// and AstroUXDS
// https://www.figma.com/community/file/1157371532469023309

import type { Theme } from "@unocss/preset-wind";

const palette = {
  neutral: {
    100: "#ffffff",
    900: "#000000",
  },
  darkblue: {
    50: "#cbdee9",
    100: "#98bdd3",
    200: "#649cbd",
    300: "#2f7aa7",
    400: "#005a8f",
    500: "#004872",
    600: "#1c3f5e",
    700: "#1b2d3e",
    800: "#172635",
    900: "#080c11",
  },
  brightblue: {
    50: "#daeeff",
    100: "#cee9fc",
    200: "#b7dcff",
    300: "#92cbff",
    400: "#4dacff",
    500: "#3a87cf",
    600: "#2b659b",
    700: "#1c3851",
    800: "#142435",
    900: "#101923",
  },
  grey: {
    50: "#f5f6f9",
    100: "#eaeef4",
    200: "#e0e5eb",
    300: "#d4d8dd",
    400: "#bbc1c9",
    500: "#a4abb6",
    600: "#7b8089",
    700: "#51555b",
    800: "#3c3e42",
    900: "#292a2d",
  },
  red: {
    400: "#ff5f60",
    500: "#ff3838",
    600: "#ff2a04",
    700: "#c8102e",
    800: "#8b1703",
    900: "#661102",
  },
  orange: {
    400: "#ffcc57",
    500: "#ffb302",
    600: "#ffaf3d",
    700: "#ff8c00",
    800: "#975f0e",
    900: "#664618",
  },
  yellow: {
    400: "#fded61",
    500: "#fce83a",
    600: "#fad800",
    700: "#c7ab00",
    800: "#917d01",
    900: "#645600",
  },
  green: {
    400: "#99f666",
    500: "#56f000",
    600: "#00e200",
    700: "#00ad23",
    800: "#007a33",
    900: "#005a00",
  },
  cyan: {
    400: "#5ce2ff",
    500: "#64d9ff",
    600: "#2dccff",
    700: "#20a9d5",
    800: "#35798e",
    900: "#285766",
  },
  violet: {
    800: "#502b85",
  },
  blue: {
    800: "#0033a0",
  },
  teal: {
    100: "#d0f4f4",
    200: "#a1e9eb",
    300: "#70dde0",
    400: "#3ed2d6",
    500: "#00c7cb",
    600: "#009fa3",
    700: "#00777a",
    800: "#035051",
    900: "#032828",
  },
  purple: {
    100: "#e4e2f7",
    200: "#c9c5ed",
    300: "#aea8e5",
    400: "#938bdb",
    500: "#786dd3",
    600: "#6058a8",
    700: "#48417f",
    800: "#302c54",
    900: "#18152b",
  },
  pink: {
    100: "#edcef3",
    200: "#da9ce7",
    300: "#c76ada",
    400: "#b534ce",
    500: "#a200c1",
    600: "#81009a",
    700: "#610074",
    800: "#41004d",
    900: "#200227",
  },
  hotorange: {
    100: "#f8ddd1",
    200: "#f0baa3",
    300: "#ea9875",
    400: "#e27545",
    500: "#da5309",
    600: "#af420a",
    700: "#833209",
    800: "#572108",
    900: "#2b1105",
  },
};

export const astroColors: Theme["colors"] = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  ...palette,
  gsb: {
    background: palette.darkblue[800],
    text: palette.neutral[100],
    icon: {
      default: palette.brightblue[400],
      hover: palette.brightblue[300],
    },
  },
  status: {
    critical: palette.red[500],
    serious: palette.orange[500],
    caution: palette.yellow[500],
    normal: palette.green[500],
    standby: palette.cyan[500],
    off: palette.grey[500],
  },
  classification: {
    topsecretsci: palette.yellow[500],
    topsecret: palette.orange[700],
    secret: palette.red[700],
    confidential: palette.blue[800],
    cui: palette.violet[800],
    unclassified: palette.green[800],
  },
};

// assign default color, and color shortcuts
Object.values(astroColors).forEach((color) => {
  if (typeof color !== "string") {
    color.DEFAULT = color.DEFAULT || color[400];
    Object.keys(color).forEach((key) => {
      const short = +key / 100;
      if (short === Math.round(short)) {
        color[short] = color[key];
      }
    });
  }
});
