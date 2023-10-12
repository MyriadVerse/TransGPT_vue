// Markdown rendering and highlighting
import Markdown from "markdown-it";
import highlight from "highlight.js";

const mdOptions: Markdown.Options = {
  linkify: true,
  typographer: true,
  breaks: true,
  langPrefix: "language-",

  // code highlighting
  highlight(str, lang) {
    // str is the code string to be highlighted
    // lang is the language type of the code
    if (lang && highlight.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          highlight.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }
    return "";
  },
};

// Create a Markdown renderer instance
export const md = new Markdown(mdOptions);
