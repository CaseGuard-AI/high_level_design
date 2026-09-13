import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/linter")({
  head: () => ({ meta: [
    { title: "Procedural Linter — CaseGuard AI" },
    { name: "description", content: "Check legal documents against filing and procedural requirements." },
    { property: "og:title", content: "Procedural Linter — CaseGuard AI" },
    { property: "og:description", content: "Check legal documents against filing and procedural requirements." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="linter" />,
});
