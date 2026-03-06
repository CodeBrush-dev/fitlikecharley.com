// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.fitlikecharley.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.fitlikecharley.com/","title_tag":"Personal Trainer Los Angeles & Rehab | Fit Like Charley","meta_description":"Personal Trainer in Los Angeles specializing in functional movement, corrective exercise, physical rehabilitation, and personalized workout plans for lasting lifestyle change."},{"page_url":"https://www.fitlikecharley.com/my-facility","title_tag":"Functional Training & Rehabilitation Gym | Fit Like Charley","meta_description":"Los Angeles facility focused on functional movement training, corrective exercise, and physical rehabilitation in a safe, private gym with tailored programs and injury prevention."},{"page_url":"https://www.fitlikecharley.com/book-online","title_tag":"Personal Training & Online Coaching | Fit Like Charley","meta_description":"Book 1-on-1 Personal Trainer Los Angeles sessions, fitness assessments, and online coaching programs. Train in person or online with personalized workout plans to reach your goals."},{"page_url":"https://www.fitlikecharley.com/plans-pricing","title_tag":"Online Coaching & Training Plans | Fit Like Charley","meta_description":"Explore Online Coaching Programs, 1-on-1 training packs, and personalized workout plans. Flexible pricing to support strength, mobility, and long-term lifestyle modification fitness."}],"keywords":["personal trainer los angeles","functional movement training","corrective exercise los angeles","physical rehabilitation los angeles","injury prevention fitness","personalized workout plan","fitness assessment los angeles","online coaching programs","strength and mobility training","lifestyle modification fitness"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.fitlikecharley.com/#localbusiness",
  "name": "Fit Like Charley",
  "description": "Fit Like Charley in Los Angeles offers personal training specializing in functional movement, corrective exercise, and physical rehabilitation, providing personalized workout plans in-gym and online to improve movement patterns, address muscular imbalances, and aid injury recovery.",
  "url": "https://www.fitlikecharley.com/",
  "image": [
    "https://static.wixstatic.com/media/006c15_8c1401363a4f4bbd92cc362989338a71~mv2.jpg/v1/fill/w_213,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Facetune_09-03-2023-17-24-32_edited.jpg",
    "https://static.wixstatic.com/media/006c15_06702db3bb094721802f2f3eea54cdd4~mv2.jpg/v1/crop/x_109,y_10,w_961,h_1452/fill/w_460,h_695,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2765.jpg",
    "https://static.wixstatic.com/media/11062b_2746e0e5dec64a059a020a7d8d6636fa~mv2.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_2746e0e5dec64a059a020a7d8d6636fa~mv2.jpg",
    "https://static.wixstatic.com/media/006c15_8c1401363a4f4bbd92cc362989338a71%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/006c15_8c1401363a4f4bbd92cc362989338a71%7Emv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/006c15_8c1401363a4f4bbd92cc362989338a71%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/006c15_8c1401363a4f4bbd92cc362989338a71%7Emv2.jpg",
  "email": "mailto:fitlikecharley@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Los Angeles"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "06:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday"
      ],
      "opens": "06:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [],
  "founder": {
    "@type": "Person",
    "name": "Charley Santos",
    "description": "Certified personal trainer specializing in functional movement, corrective exercise, and physical rehabilitation with over a decade of experience helping individuals improve movement patterns, address muscular imbalances, and recover from injuries."
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "1-on-1 Personal Training Session",
      "description": "One-on-one personal training session in Los Angeles or online, focused on functional movement, corrective exercise, and physical rehabilitation.",
      "price": "100",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Fitness Assessment",
      "description": "Comprehensive fitness assessment in Los Angeles or online to evaluate movement patterns, imbalances, and goals.",
      "price": "50",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Online Coaching Monthly Membership",
      "description": "Online coaching membership including personalized workout programming and remote support.",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Online Coaching Plan",
      "description": "Monthly online coaching plan with personalized workout program, home or gym workouts, personalized meal plan, progress tracking, motivational videos, and 24/7 priority support. Cancel anytime.",
      "price": "249.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "12 Session Pack",
      "description": "Pack of 12 private training sessions scheduled at the client's convenience, valid for one month.",
      "price": "999",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
