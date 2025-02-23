"use server";

import { SubscribeTemplate } from "@/lib/templates";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSubscriptionEmail({ email }: { email: string }) {
  const { data, error } = await resend.emails.send({
    from: "Gateway Home <info@gatewayhomeattica.org>",
    to: ["info@gatewayhomeattica.org"],
    bcc: ["coopergadd@yahoo.com"],
    subject: `Email Subscription Update`,
    react: SubscribeTemplate({ email }) as React.ReactNode,
  });

  if (error) {
    throw new Error("Failed to subscribe.");
  }

  if (!data) {
    throw new Error("Failed to subscribe.");
  }
}
