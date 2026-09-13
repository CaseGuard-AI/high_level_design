import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/caseguard/app";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [
    { title: "Reset Password — CaseGuard AI" },
    { name: "description", content: "Reset your CaseGuard AI password." },
    { property: "og:title", content: "Reset Password — CaseGuard AI" },
    { property: "og:description", content: "Reset your CaseGuard AI password." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <AuthPage mode="forgot" />,
});
