import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/case")({
  head: () => ({ meta: [
    { title: "Ali vs. Federation — CaseGuard AI" },
    { name: "description", content: "Review the complete case workspace and verified legal record." },
    { property: "og:title", content: "Ali vs. Federation — CaseGuard AI" },
    { property: "og:description", content: "Review the complete case workspace and verified legal record." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="case" />,
});
