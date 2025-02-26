import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
});

export const volunteerFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  streetAddress: z.string().min(5, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid zip code format"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  homePhone: z.string().optional(),
  mobilePhone: z.string().optional(),
  email: z.string().email("Invalid email address"),
  interestedRoles: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Please select at least one role.",
    }),
  availableDays: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Please select at least one day.",
    }),
  availableTimes: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Please select at least one time.",
    }),
  hasVolunteeredBefore: z.string().min(1, "Please select an option"),
  volunteerReason: z.string().min(10, "Please provide more detail"),
  caregiverExperience: z.string().min(10, "Please provide more detail"),
  specialTalents: z.string().min(10, "Please provide more detail"),
  hobbies: z.string().min(10, "Please provide more detail"),
  lossExperience: z.string().min(10, "Please provide more detail"),
  reference1FirstName: z.string().min(2, "Required"),
  reference1LastName: z.string().min(2, "Required"),
  reference1Phone: z.string().min(10, "Valid phone number required"),
  reference2FirstName: z.string().min(2, "Required"),
  reference2LastName: z.string().min(2, "Required"),
  reference2Phone: z.string().min(10, "Valid phone number required"),
});
