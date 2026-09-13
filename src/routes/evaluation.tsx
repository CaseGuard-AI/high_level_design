import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/evaluation")({
  head: () => ({ meta: [
    { title: "Evaluation Dashboard — CaseGuard AI" },
    { name: "description", content: "Evaluate retrieval quality, faithfulness, and citation trust performance." },
    { property: "og:title", content: "Evaluation Dashboard — CaseGuard AI" },
    { property: "og:description", content: "Evaluate retrieval quality, faithfulness, and citation trust performance." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="evaluation" />,
});
