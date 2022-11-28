import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index"],
  clean: true,
  declaration: true,
  externals: [
    "unconfig",
    "magic-string",
    "@unocss/core",
    "@unocss/config",
    "@unocss/preset-mini",
    "@unocss/preset-wind",
  ],
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false,
    },
  },
});
