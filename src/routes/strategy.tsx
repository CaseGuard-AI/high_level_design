import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/strategy")({
  head: () => ({ meta: [
    { title: "Strategy Builder — CaseGuard AI" },
    { name: "description", content: "Create evidence-backed legal strategies with visible trust indicators." },
    { property: "og:title", content: "Strategy Builder — CaseGuard AI" },
    { property: "og:description", content: "Create evidence-backed legal strategies with visible trust indicators." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="strategy" />,
});
