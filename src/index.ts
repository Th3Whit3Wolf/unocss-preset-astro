import { type Preset } from "@unocss/core";
import { preflights, type Theme } from "@unocss/preset-mini";
import { PresetWindOptions, theme as windTheme } from "@unocss/preset-wind";
import { animatedRules } from "./rules/animated";
import { elevationRules } from "./rules/elevation";
import { sizeRules } from "./rules/size";
import { astroColors } from "./theme/colors";
import { variantColorMix } from "./variants/mix";
export interface PresetAstroOptions extends PresetWindOptions {}

export type { Theme };

import { rules, variants } from "@unocss/preset-wind";

export const presetAstro = (options: PresetWindOptions = {}): Preset<Theme> => {
  options.dark = options.dark ?? "class";
  options.attributifyPseudo = options.attributifyPseudo ?? false;
  options.preflight = options.preflight ?? true;
  return {
    name: "unocss-preset-astro",
    theme: {
      ...windTheme,
      colors: {
        ...windTheme.colors,
        ...astroColors,
      },
    },
    shortcuts: {
      "bg-base-default": "bg-grey-200 dark:bg-brightblue-900",
      "bg-base-header": "bg-grey-100 dark:bg-darkblue-800",
      "bg-base-hover": "bg-darkblue-100 dark:brightblue-800",
      "bg-base-selected": "bg-brightblue-200 dark:bg-darkblue-600",
      "bg-surface-default": "bg-neutral-100 dark:bg-darkblue-700",
      "bg-surface-header": "bg-grey-100 dark:bg-darkblue-800",
      "bg-surface-hover": "bg-brightblue-100 dark:bg-brightblue-700",
      "bg-surface-selected": "bg-brightblue-200 dark:bg-darkblue-600",
      "bg-interactive-default": "bg-darkblue-400 dark:bg-brightblue-400",
      "bg-interactive-header": "bg-darkblue-500 dark:bg-brightblue-300",
      "border-interactive-default":
        "border-darkblue-400 dark:border-brightblue-400",
      "border-interactive-hover":
        "border-darkblue-500 dark:border-brightblue-300",
      "border-interactive-muted":
        "border-darkblue-300 dark:border-brightblue-600",
      "border-error": "border-red-700 dark:border-red-500",
      "border-card": "border-grey-700",
      "border-container": "border-neutral-900",
      "border-log": "border-neutral-900",
      "color-primary": "color-grey-900 dark:color-neutral-100",
      "color-secondary": "color-grey-700 dark:color-grey-300",
      "color-placeholder": "color-grey-600 dark:color-grey-500",
      "color-inverse": "color-neutral-100 dark:color-darkblue-900",
      "color-interactive-default":
        "color-darkblue-400 dark:color-brightblue-400",
      "color-interactive-hover": "color-darkblue-500 dark:color-brightblue-300",
      "color-error": "color-red-700 dark:color-red-500",
      "text-primary": "text-grey-900 dark:text-neutral-100",
      "text-secondary": "text-grey-700 dark:text-grey-300",
      "text-placeholder": "text-grey-600 dark:text-grey-500",
      "text-inverse": "text-neutral-100 dark:text-darkblue-900",
      "text-interactive-default": "text-darkblue-400 dark:text-brightblue-400",
      "text-interactive-hover": "text-darkblue-500 dark:text-brightblue-300",
      "text-error": "text-red-700 dark:text-red-500",
    },
    variants: [...variants(options), variantColorMix],
    options,
    preflights: options.preflight ? preflights : [],
    prefix: options.prefix,
    rules: [...sizeRules, ...elevationRules, ...animatedRules, ...rules],
  };
};
