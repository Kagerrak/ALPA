/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  main: [
    {
      type: "category",
      label: "Overview",
      collapsible: true,
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "overview" }],
    },
    {
      type: "category",
      label: "Guides",
      collapsible: true,
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "guides" }],
    },
    {
      type: "category",
      label: "Governance",
      collapsible: true,
      collapsed: true,
      items: [{ type: "autogenerated", dirName: "governance" }],
    },

    // {
    //   type: "category",
    //   label: "Contracts",
    //   collapsible: true,
    //   collapsed: true,
    //   items: [{ type: "autogenerated", dirName: "contracts" }],
    // },
    // {
    //   type: "category",
    //   label: "Security",
    //   collapsible: true,
    //   collapsed: true,
    //   items: [{ type: "autogenerated", dirName: "security" }],
    // },
    // {
    //   type: "category",
    //   label: "Publications",
    //   collapsible: true,
    //   collapsed: true,
    //   items: [{ type: "autogenerated", dirName: "publications" }],
    // },
    // {
    //   type: "category",
    //   label: "Legacy",
    //   collapsible: true,
    //   collapsed: true,
    //   items: [{ type: "autogenerated", dirName: "legacy" }],
    // },
    // {
    //   type: "category",
    //   label: "Resources",
    //   collapsible: true,
    //   collapsed: true,
    //   items: [{ type: "autogenerated", dirName: "resources" }],
    // },
  ],
};

module.exports = sidebars;
