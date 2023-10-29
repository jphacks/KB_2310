import { fileURLToPath } from "url";

/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

const prettierConfig = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  rangeStart: 0,
  requirePragma: true,
  proseWrap: 'preserve',
  endOfLine: 'lf',
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: false
};

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  ...prettierConfig,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
    ],
  tailwindConfig: fileURLToPath(
    new URL("tailwind.config.js", import.meta.url),
    ),
  importOrder: [
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^~/",
    "^[../]",
    "^[./]",
    ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "4.4.0",
};

export default config;
