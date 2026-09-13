import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [
    { title: "Settings — CaseGuard AI" },
    { name: "description", content: "Manage CaseGuard AI profile, security, and verification settings." },
    { property: "og:title", content: "Settings — CaseGuard AI" },
    { property: "og:description", content: "Manage CaseGuard AI profile, security, and verification settings." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="settings" />,
});
