import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Unblock Account | Amanda",
  description:
    "Message Amanda on WhatsApp to unblock your account and restore access.",
};

export default function UnblockAccountPage() {
  redirect(copy.instantBlock.secondaryHref);
}
