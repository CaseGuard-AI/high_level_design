import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/caseguard/app";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [
    { title: "Create Account — CaseGuard AI" },
    { name: "description", content: "Create your CaseGuard AI account." },
    { property: "og:title", content: "Create Account — CaseGuard AI" },
    { property: "og:description", content: "Create your CaseGuard AI account." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <AuthPage mode="signup" />,
});
