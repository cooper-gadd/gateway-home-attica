"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const roles = [
  "Resident Care",
  "End of Life Doula",
  "Household Needs/Cleaning",
  "Grounds/Maintenance",
  "Fundraising Support",
] as const;

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

const times = [
  "Morning (8am-12pm)",
  "Afternoon (12pm-4pm)",
  "Evening (4pm-8pm)",
  "Night (8pm-12am)",
] as const;

const volunteerOptions = ["Yes", "No"] as const;

const formSchema = z.object({
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

export function VolunteerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      dateOfBirth: "",
      homePhone: "",
      mobilePhone: "",
      email: "",
      interestedRoles: [],
      availableDays: [],
      availableTimes: [],
      hasVolunteeredBefore: "",
      volunteerReason: "",
      caregiverExperience: "",
      specialTalents: "",
      hobbies: "",
      lossExperience: "",
      reference1FirstName: "",
      reference1LastName: "",
      reference1Phone: "",
      reference2FirstName: "",
      reference2LastName: "",
      reference2Phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Contact Details */}
        <Card className="border-0">
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="homePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Home Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mobilePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-2 grid grid-cols-1 md:grid-cols-6 gap-6">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="md:col-span-3">
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="md:col-span-1">
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Volunteer Preferences */}
        <Card className="border-0">
          <CardHeader>
            <CardTitle>Volunteer Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {" "}
            {/* Added space between sections */}
            <FormField
              control={form.control}
              name="interestedRoles"
              render={() => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-base font-medium">
                    Interested Roles
                  </FormLabel>
                  <div className="space-y-2">
                    {roles.map((role) => (
                      <FormField
                        key={role}
                        control={form.control}
                        name="interestedRoles"
                        render={({ field }) => (
                          <FormItem
                            key={role}
                            className="flex items-center space-x-3"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(role)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, role])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== role,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {role}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hasVolunteeredBefore"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-base font-medium">
                    Have you volunteered before?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      {volunteerOptions.map((option) => (
                        <FormItem
                          key={option}
                          className="flex items-center space-x-3"
                        >
                          <FormControl>
                            <RadioGroupItem value={option} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availableDays"
              render={() => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-base font-medium">
                    Available Days
                  </FormLabel>
                  <div className="space-y-2">
                    {days.map((day) => (
                      <FormField
                        key={day}
                        control={form.control}
                        name="availableDays"
                        render={({ field }) => (
                          <FormItem
                            key={day}
                            className="flex items-center space-x-3"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(day)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, day])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== day,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{day}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availableTimes"
              render={() => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-base font-medium">
                    Available Times
                  </FormLabel>
                  <div className="space-y-2">
                    {times.map((time) => (
                      <FormField
                        key={time}
                        control={form.control}
                        name="availableTimes"
                        render={({ field }) => (
                          <FormItem
                            key={time}
                            className="flex items-center space-x-3"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(time)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, time])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== time,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {time}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Experience Questions */}
        <Card className="border-0">
          <CardHeader>
            <CardTitle>Experience & Background</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="volunteerReason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Why do you want to become a Gateway Home Volunteer?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please share your motivation..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="caregiverExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Please describe your experience as a caregiver (if any)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your caregiving experience..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialTalents"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What special talents can you share?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List your special skills or talents..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hobbies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your hobbies and interests?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your hobbies and interests..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lossExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Please describe your experience with loss (if any)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your experience with loss..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* References */}
        <Card className="border-0">
          <CardHeader>
            <CardTitle>References</CardTitle>
            <p className="text-sm text-muted-foreground">
              Please provide two personal or professional references
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Reference 1 */}
              <div>
                <h4 className="font-medium mb-4">Reference 1</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="reference1FirstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reference1LastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reference1Phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Reference 2 */}
              <div>
                <h4 className="font-medium mb-4">Reference 2</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="reference2FirstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reference2LastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reference2Phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Submit Application
          </Button>
        </div>
      </form>
    </Form>
  );
}
