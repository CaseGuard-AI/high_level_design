import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/cases")({
  head: () => ({ meta: [
    { title: "Cases — CaseGuard AI" },
    { name: "description", content: "Manage active and archived legal matters." },
    { property: "og:title", content: "Cases — CaseGuard AI" },
    { property: "og:description", content: "Manage active and archived legal matters." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="cases" />,
});
