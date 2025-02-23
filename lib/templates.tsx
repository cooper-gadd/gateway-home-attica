import { emailSchema } from "@/lib/schemas";
import { FC } from "react";
import { z } from "zod";

export const SubscribeTemplate: FC<Readonly<z.infer<typeof emailSchema>>> = ({
  email,
}) => (
  <div>
    <h1>New Mailing List Subscription</h1>
    <p>A new user has requested to join the mailing list:</p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>Please add this email address to the mailing list distribution.</p>
    <hr />
    <p>This is an automated message from your website subscription system.</p>
  </div>
);
