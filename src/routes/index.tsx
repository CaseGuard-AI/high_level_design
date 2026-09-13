import { createFileRoute } from "@tanstack/react-router";
import { CaseGuardApp } from "@/components/caseguard/app";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dashboard — CaseGuard AI" },
    { name: "description", content: "Manage cases, research, and verified legal work in CaseGuard AI." },
    { property: "og:title", content: "CaseGuard AI Legal Workspace" },
    { property: "og:description", content: "A verifiable legal workspace for lawyers in Pakistan." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <CaseGuardApp page="dashboard" />;
}
