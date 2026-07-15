import { EmploymentForm } from "@/components/employment-form";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Employment",
  description: "Join our team of dedicated healthcare professionals at Gateway Home.",
};

export default function EmploymentPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Employment at Gateway Home</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Join our team of dedicated healthcare professionals
                </p>
                <Button asChild>
                  <a href="#application">Apply Now</a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="lg:w-1/2 text-center md:text-start">
                  <h2 className="text-3xl font-semibold mb-6">Why Work With Us</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      At Gateway Home, we believe in creating a supportive environment where our
                      team members can thrive while making a meaningful difference in the lives of
                      our residents. Our staff members are the heart of our organization, bringing
                      compassion, dedication, and expertise to their roles every day.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We value each team member&apos;s contribution and provide opportunities for
                      professional growth and development. By joining Gateway Home, you become part
                      of a community committed to providing exceptional end-of-life care with
                      dignity and respect.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                    <Image
                      src="/sue-sara.jpg"
                      alt="Caring staff at Gateway Home"
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section id="openings" className="py-24">
            <div className="container">
              <h2 className="text-3xl font-semibold text-center mb-12">Open Positions</h2>
              <div className="max-w-3xl mx-auto space-y-16">
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold">RN/LPN Position</h3>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Position Overview</h4>
                    <p className="text-lg text-muted-foreground mb-4">
                      24 Hour Shift position, reports to Director of Resident Care.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Responsibilities</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                      The following statements outline primary functions of the job and are not
                      intended as a comprehensive list of all responsibilities.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                      <li>
                        Maintain and document narcotic inventory; prepare doses of medication for
                        residents, with instructions on dosage and administration in clear,
                        understandable terms. Work under the direction of VNA/Hospice.
                      </li>
                      <li>
                        Ensure sufficient medications and supplies are available, especially for
                        holidays and weekends.
                      </li>
                      <li>
                        Assess residents during AM care, update care plans as needed, and provide
                        daily bathing and personal care.
                      </li>
                      <li>
                        Notify VNA/Hospice nurse of any incidents (e.g., falls) or concerns (e.g.,
                        medication or catheter needs).
                      </li>
                      <li>Handle admissions as needed.</li>
                      <li>Provide emotional support and assistance to families.</li>
                      <li>
                        Nurse is responsible for pronouncing death and remaining at Gateway Home
                        until the body is released to the funeral home.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Schedule Details</h4>
                    <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                      <li>
                        Nurses coordinate resident care for a 24-hour period, from 8am to 8am,
                        covering all unmanned shifts in full.
                      </li>
                      <li>
                        Nurses typically work 4 hours with residents in the AM (8am-12noon),
                        followed by 20 hours of paid &quot;on-call&quot; time. Nurses must be
                        reachable during on-call hours for questions.
                      </li>
                      <li>
                        Any shift changes or call-ins must be reported to the director in advance.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold">Care Aide</h3>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Duties and Responsibilities</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                      The following statements reflect the general duties considered necessary to
                      describe the principal functions of the job as identified and shall not be
                      considered as a detailed description of all work requirements that may be
                      inherent in the position.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                      <li>
                        Works under the direction of the nurse in charge, according to the
                        instructions in the resident care plan.
                      </li>
                      <li>
                        Provides basic personal care such as assisting with bathing, oral hygiene,
                        toileting, skin care, ambulating and exercise.
                      </li>
                      <li>
                        Measures and records oral, rectal or axillary temperature, pulse and
                        respiration rates, and blood pressure when ordered (within the training
                        limitations of the aide).
                      </li>
                      <li>
                        Assists with household tasks directly essential to the resident&apos;s
                        health and as directed in the Daily Chore Book.
                      </li>
                      <li>
                        Provides a clean and safe environment within the home, including safe use
                        of the equipment: e.g. foot stools, side rails, wheelchairs, oxygen, etc.
                      </li>
                      <li>
                        Prepares meals based on resident preference and prescribed medical regimen.
                      </li>
                      <li>
                        Assists resident with prescribed medication regimen, as directed in the
                        resident care plan.
                      </li>
                      <li>
                        Performs range of motion and other simple procedures as an extension of
                        therapy services as ordered (within the limitations of the aide).
                      </li>
                      <li>
                        Immediately reports any changes in the resident&apos;s mental, physical or
                        environmental condition and relates these changes to the nurse in charge
                        and/or On-call nurse.
                      </li>
                      <li>
                        Accurately documents the following in a timely manner:
                        <ul className="list-disc pl-6 mt-3 space-y-2">
                          <li>
                            Services provided in accordance with agency policies and procedures on
                            the day of services are rendered.
                          </li>
                          <li>All resident-related activities</li>
                        </ul>
                      </li>
                      <li>
                        Reacts to change productively and performs other job-related tasks and
                        duties assigned.
                      </li>
                      <li>Attends appropriate In-Service and Continuing Education Programs.</li>
                    </ul>
                    <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                      <strong>
                        The Care Aide does NOT take physician&apos;s orders or perform any
                        procedures requiring the knowledge/skill of a licensed nurse. The On-call
                        nurse is available at all times.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section id="application" className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4 text-center">Apply Today</h2>
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Take the first step towards a rewarding career in healthcare
                </p>
                <EmploymentForm />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
