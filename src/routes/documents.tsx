import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/documents")({
  head: () => ({ meta: [
    { title: "Documents — CaseGuard AI" },
    { name: "description", content: "Manage and analyze legal case documents." },
    { property: "og:title", content: "Documents — CaseGuard AI" },
    { property: "og:description", content: "Manage and analyze legal case documents." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="documents" />,
});
