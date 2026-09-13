import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/caseguard/app";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [
    { title: "Sign In — CaseGuard AI" },
    { name: "description", content: "Sign in to your trusted legal workspace." },
    { property: "og:title", content: "Sign In — CaseGuard AI" },
    { property: "og:description", content: "Sign in to your trusted legal workspace." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <AuthPage mode="login" />,
});
