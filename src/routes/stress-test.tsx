import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

export const Route = createFileRoute("/stress-test")({
  head: () => ({ meta: [
    { title: "Opposition Stress-Test — CaseGuard AI" },
    { name: "description", content: "Challenge a legal strategy against likely opposing arguments." },
    { property: "og:title", content: "Opposition Stress-Test — CaseGuard AI" },
    { property: "og:description", content: "Challenge a legal strategy against likely opposing arguments." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <CaseGuardApp page="stress-test" />,
});
