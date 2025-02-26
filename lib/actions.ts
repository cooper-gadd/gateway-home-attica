"use server";

import { emailSchema, employmentFormSchema, volunteerFormSchema } from "@/lib/schemas";
import { EmploymentApplicationTemplate, SubscribeTemplate, VolunteerApplicationTemplate } from "@/lib/templates";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSubscriptionEmail({ email }: z.infer<typeof emailSchema>) {
  const { data, error } = await resend.emails.send({
    from: "Gateway Home <no-reply@gatewayhomeattica.org>",
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

export async function sendVolunteerApplication(formData: z.infer<typeof volunteerFormSchema>) {
  const { data, error } = await resend.emails.send({
    from: "Gateway Home <no-reply@gatewayhomeattica.org>",
    to: ["info@gatewayhomeattica.org"],
    bcc: ["coopergadd@yahoo.com"],
    subject: `New Volunteer Application`,
    react: VolunteerApplicationTemplate({ formData }) as React.ReactNode,
  });

  if (error) {
    throw new Error("Failed to submit application.");
  }

  if (!data) {
    throw new Error("Failed to submit application.");
  }
}

export async function sendEmploymentApplication(formData: z.infer<typeof employmentFormSchema>) {
  const { data, error } = await resend.emails.send({
    from: "Gateway Home <no-reply@gatewayhomeattica.org>",
    to: ["info@gatewayhomeattica.org"],
    bcc: ["coopergadd@yahoo.com"],
    subject: `New Employment Application`,
    react: EmploymentApplicationTemplate({ formData }) as React.ReactNode,
  });

  if (error) {
    throw new Error("Failed to submit application.");
  }

  if (!data) {
    throw new Error("Failed to submit application.");
  }
}
