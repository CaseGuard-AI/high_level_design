import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/precedents")({
  head: () => ({ meta: [
    { title: "Precedent Intelligence — CaseGuard AI" },
    { name: "description", content: "Explore current and historical relationships between Pakistani precedents." },
    { property: "og:title", content: "Precedent Intelligence — CaseGuard AI" },
    { property: "og:description", content: "Explore current and historical relationships between Pakistani precedents." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="precedents" />,
});
