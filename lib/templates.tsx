import {
  emailSchema,
  employmentFormSchema,
  volunteerFormSchema,
} from "@/lib/schemas";
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

export const VolunteerApplicationTemplate: FC<{
  formData: z.infer<typeof volunteerFormSchema>;
}> = ({ formData }) => (
  <div>
    <h1>New Volunteer Application</h1>
    <p>A new volunteer application has been submitted:</p>

    <h2>Contact Information</h2>
    <p>
      <strong>Name:</strong> {formData.firstName} {formData.lastName}
    </p>
    <p>
      <strong>Email:</strong> {formData.email}
    </p>
    <p>
      <strong>Date of Birth:</strong> {formData.dateOfBirth}
    </p>
    <p>
      <strong>Home Phone:</strong> {formData.homePhone || "Not provided"}
    </p>
    <p>
      <strong>Mobile Phone:</strong> {formData.mobilePhone || "Not provided"}
    </p>
    <p>
      <strong>Address:</strong> {formData.streetAddress}, {formData.city},{" "}
      {formData.state} {formData.zipCode}
    </p>

    <h2>Volunteer Preferences</h2>
    <p>
      <strong>Interested Roles:</strong> {formData.interestedRoles.join(", ")}
    </p>
    <p>
      <strong>Has Volunteered Before:</strong> {formData.hasVolunteeredBefore}
    </p>
    <p>
      <strong>Available Days:</strong> {formData.availableDays.join(", ")}
    </p>
    <p>
      <strong>Available Times:</strong> {formData.availableTimes.join(", ")}
    </p>

    <h2>Experience & Background</h2>
    <p>
      <strong>Volunteer Reason:</strong> {formData.volunteerReason}
    </p>
    <p>
      <strong>Caregiver Experience:</strong> {formData.caregiverExperience}
    </p>
    <p>
      <strong>Special Talents:</strong> {formData.specialTalents}
    </p>
    <p>
      <strong>Hobbies:</strong> {formData.hobbies}
    </p>
    <p>
      <strong>Loss Experience:</strong> {formData.lossExperience}
    </p>

    <h2>References</h2>
    <p>
      <strong>Reference 1:</strong> {formData.reference1FirstName}{" "}
      {formData.reference1LastName} - {formData.reference1Phone}
    </p>
    <p>
      <strong>Reference 2:</strong> {formData.reference2FirstName}{" "}
      {formData.reference2LastName} - {formData.reference2Phone}
    </p>

    <hr />
    <p>
      This is an automated message from your website volunteer application
      system.
    </p>
  </div>
);

export const EmploymentApplicationTemplate: FC<{
  formData: z.infer<typeof employmentFormSchema>;
}> = ({ formData }) => (
  <div>
    <h1>New Employment Application</h1>
    <p>A new employment application has been submitted:</p>

    <h2>Personal Information</h2>
    <p>
      <strong>Name:</strong> {formData.firstName} {formData.middleName || ""}{" "}
      {formData.lastName}
    </p>
    <p>
      <strong>Email:</strong> {formData.email}
    </p>
    <p>
      <strong>Phone:</strong> {formData.phone}
    </p>
    <p>
      <strong>Address:</strong> {formData.address}, {formData.city},{" "}
      {formData.state} {formData.zipCode}
    </p>

    <h2>Eligibility</h2>
    <p>
      <strong>18 Years or Older:</strong> {formData.is18YearsOld}
    </p>
    <p>
      <strong>Currently Employed:</strong> {formData.isEmployed}
    </p>
    <p>
      <strong>Legally Eligible to Work:</strong> {formData.isLegallyEligible}
    </p>
    <p>
      <strong>Criminal Record:</strong> {formData.isFelonOrMisdemeanant}
    </p>
    <p>
      <strong>Previous Crossroads Experience:</strong>{" "}
      {formData.isEmployedOrVolunteeredAtCrossroads}
    </p>

    <h2>Education & Qualifications</h2>
    <p>
      <strong>Education Level:</strong> {formData.educationLevel}
    </p>
    <p>
      <strong>Special License/Certification:</strong>{" "}
      {formData.specialLicenseOrCertification}
    </p>

    <h2>Work History</h2>
    <h3>Most Recent Position</h3>
    <p>
      <strong>Company:</strong> {formData.companyName1}
    </p>
    <p>
      <strong>Position:</strong> {formData.position1}
    </p>
    <p>
      <strong>Duration:</strong>{" "}
      {formData.startDate1?.toLocaleDateString() || "Not provided"} -{" "}
      {formData.endDate1?.toLocaleDateString() || "Not provided"}
    </p>

    <h3>Previous Position</h3>
    <p>
      <strong>Company:</strong> {formData.companyName2}
    </p>
    <p>
      <strong>Position:</strong> {formData.position2}
    </p>
    <p>
      <strong>Duration:</strong>{" "}
      {formData.startDate2?.toLocaleDateString() || "Not provided"} -{" "}
      {formData.endDate2?.toLocaleDateString() || "Not provided"}
    </p>

    <h3>Additional Position</h3>
    <p>
      <strong>Company:</strong> {formData.companyName3}
    </p>
    <p>
      <strong>Position:</strong> {formData.position3}
    </p>
    <p>
      <strong>Duration:</strong>{" "}
      {formData.startDate3?.toLocaleDateString() || "Not provided"} -{" "}
      {formData.endDate3?.toLocaleDateString() || "Not provided"}
    </p>

    <h2>References</h2>
    <p>
      <strong>Reference 1:</strong> {formData.reference1FirstName}{" "}
      {formData.reference1LastName} - {formData.reference1Phone}
    </p>
    <p>
      <strong>Reference 2:</strong> {formData.reference2FirstName}{" "}
      {formData.reference2LastName} - {formData.reference2Phone}
    </p>

    <hr />
    <p>
      This is an automated message from your website employment application
      system.
    </p>
  </div>
);
