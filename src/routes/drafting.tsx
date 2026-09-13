import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/drafting")({
  head: () => ({ meta: [
    { title: "Drafting Studio — CaseGuard AI" },
    { name: "description", content: "Draft legal documents with verified sources and case data." },
    { property: "og:title", content: "Drafting Studio — CaseGuard AI" },
    { property: "og:description", content: "Draft legal documents with verified sources and case data." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="drafting" />,
});
