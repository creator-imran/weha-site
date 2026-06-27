import { useEffect } from "react";

const BASE_URL = "https://wehelpautomate.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * useSEO — sets <title>, meta description, canonical, and all OG/Twitter tags.
 * Call once at the top of each page component.
 *
 * @param {object} opts
 * @param {string} opts.title        — full <title> string (include brand at end)
 * @param {string} opts.description  — 140–160 char meta description
 * @param {string} [opts.canonical]  — canonical path, e.g. "/services" (default: current pathname)
 * @param {string} [opts.ogImage]    — absolute OG image URL (defaults to site-wide OG image)
 * @param {string} [opts.ogType]     — "website" | "article" (default: "website")
 */
export default function useSEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
}) {
  useEffect(() => {
    // --- <title> ---
    document.title = title;

    // --- helpers ---
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = selector
          .replace("meta[", "")
          .replace("]", "")
          .split("=")
          .map((s) => s.replace(/"/g, ""));
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const canonicalPath = canonical ?? window.location.pathname;
    const canonicalUrl = `${BASE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

    // --- standard meta ---
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", "index, follow");
    setLink("canonical", canonicalUrl);

    // --- Open Graph ---
    setMeta('meta[property="og:type"]', "content", ogType);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[property="og:site_name"]', "content", "WeHA — We Help Automate");
    setMeta('meta[property="og:locale"]', "content", "en_US");

    // --- Twitter / X Card ---
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
  }, [title, description, canonical, ogImage, ogType]);
}
