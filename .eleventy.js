const markdownIt = require("markdown-it");
const prism = require("prismjs");

module.exports = async function (eleventyConfig) {
  const { HtmlBasePlugin } = await import("@11ty/eleventy");

  // Passthrough static assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Markdown with syntax highlighting
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  }).use(require("markdown-it-prism"));

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("date", function (dateObj, format = "yyyy-LL-dd") {
    if (!dateObj) return "";
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    if (isNaN(d.getTime())) return "";
    if (format === "yyyy-LL-dd") {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${day}`;
    }
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(d);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
