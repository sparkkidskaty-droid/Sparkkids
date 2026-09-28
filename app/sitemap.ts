import type { MetadataRoute } from "next";

const BASE = "https://www.sparkkids.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/team", "/programs", "/gallery", "/get-involved", "/contact"];
  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
