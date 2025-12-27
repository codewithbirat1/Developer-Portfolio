import type { MetadataRoute } from "next"

const siteUrl =  "https://birat.nexolinx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/works"].map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  return routes
}
