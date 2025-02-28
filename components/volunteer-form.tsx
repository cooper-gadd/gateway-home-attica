"use client";

import { Button } from "@/components/ui/button";
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
import { sendVolunteerApplication } from "@/lib/actions";
import { volunteerFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof volunteerFormSchema>>({
    resolver: zodResolver(volunteerFormSchema),
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

  async function onSubmit(values: z.infer<typeof volunteerFormSchema>) {
    try {
      await sendVolunteerApplication(values);
      form.reset();
      toast.success("Thank you for your application!");
      setSubmitted(true);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Contact Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Contact Details</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
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
                      <Input placeholder="Smith" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john.smith@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input placeholder="February 28, 2000" {...field} />
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
                      <Input placeholder="5851234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="homePhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="5859876543" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main Street" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="md:col-span-3">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Rochester" {...field} />
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
                      <Input placeholder="NY" {...field} />
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
                      <Input placeholder="14623" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        {/* Volunteer Preferences */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Volunteer Preferences</h3>
          <div className="space-y-4">
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
          </div>
        </div>

        {/* Experience Questions */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Experience & Background</h3>
          <div className="space-y-4">
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
                      placeholder="I want to make a difference in people's lives by..."
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
                      placeholder="I have experience caring for elderly family members..."
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
                      placeholder="I am skilled in music therapy, gardening..."
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
                      placeholder="I enjoy reading, cooking, and spending time outdoors..."
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
                      placeholder="I have experienced the loss of a loved one and understand..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* References */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium">References</h3>
          <p className="text-sm text-muted-foreground">
            Please provide two personal or professional references
          </p>
          <div className="space-y-6">
            {/* Reference 1 */}
            <div>
              <h4 className="font-medium mb-4">Reference 1</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="reference1FirstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane" {...field} />
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
                        <Input placeholder="Doe" {...field} />
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
                        <Input placeholder="5852345678" {...field} />
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="reference2FirstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Robert" {...field} />
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
                        <Input placeholder="Johnson" {...field} />
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
                        <Input placeholder="5853456789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" disabled={submitted} className="w-full">
          Submit Application
        </Button>
      </form>
    </Form>
  );
}
