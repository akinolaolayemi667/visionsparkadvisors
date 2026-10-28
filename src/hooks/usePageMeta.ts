import { useEffect } from "react";
import { practice } from "../config";

function ensureMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function ensureLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(id: string, data: Record<string, unknown> | null) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function usePageMeta(
  title: string,
  description: string,
  options?: {
    path?: string;
    type?: string;
    jsonLd?: Record<string, unknown> | null;
  },
) {
  useEffect(() => {
    const path = options?.path ?? window.location.pathname;
    const url = `${practice.siteUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

    document.title = title;
    ensureMeta("name", "description", description);
    ensureMeta("property", "og:title", title);
    ensureMeta("property", "og:description", description);
    ensureMeta("property", "og:type", options?.type ?? "website");
    ensureMeta("property", "og:url", url);
    ensureMeta("property", "og:site_name", practice.name);
    ensureMeta("name", "twitter:card", "summary");
    ensureMeta("name", "twitter:title", title);
    ensureMeta("name", "twitter:description", description);
    ensureLink("canonical", url);

    if (practice.portraitAvailable) {
      ensureMeta("property", "og:image", `${practice.siteUrl.replace(/\/$/, "")}${practice.portrait}`);
    }

    if (options?.jsonLd !== undefined) {
      setJsonLd("page-jsonld", options.jsonLd);
    }

    return () => {
      if (options?.jsonLd !== undefined) setJsonLd("page-jsonld", null);
    };
  }, [title, description, options?.path, options?.type, options?.jsonLd]);
}
