module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-er-diagram"
  ],
  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
  },
  "framework": "@storybook/react"
}
