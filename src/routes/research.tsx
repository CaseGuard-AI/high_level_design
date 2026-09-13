import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/research")({
  head: () => ({ meta: [
    { title: "Research Hub — CaseGuard AI" },
    { name: "description", content: "Research Pakistani law with verifiable evidence and sources." },
    { property: "og:title", content: "Research Hub — CaseGuard AI" },
    { property: "og:description", content: "Research Pakistani law with verifiable evidence and sources." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="research" />,
});
