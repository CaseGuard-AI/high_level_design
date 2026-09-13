import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/claims")({
  head: () => ({ meta: [
    { title: "Opponent Claims — CaseGuard AI" },
    { name: "description", content: "Analyze opposing claims against evidence and current law." },
    { property: "og:title", content: "Opponent Claims — CaseGuard AI" },
    { property: "og:description", content: "Analyze opposing claims against evidence and current law." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="claims" />,
});
