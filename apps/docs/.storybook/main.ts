import { join, dirname } from "path";
import {StorybookConfig} from "@storybook/react-vite";

type FrameworkNames = "@storybook/react-vite"

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value:string) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.{tsx,mdx}"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
      getAbsolutePath("@storybook/addon-a11y")
  ],

  core: {},

  framework: {
    name: getAbsolutePath("@storybook/react-vite") as FrameworkNames,
    options: {},
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
