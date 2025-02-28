import { EmploymentForm } from "@/components/employment-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Employment",
  description:
    "Join our team of dedicated healthcare professionals at Gateway Home.",
};

export default function EmploymentPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Employment at Gateway Home
                </h1>
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
                  <h2 className="text-3xl font-semibold mb-6">
                    Why Work With Us
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      At Gateway Home, we believe in creating a supportive
                      environment where our team members can thrive while making
                      a meaningful difference in the lives of our residents. Our
                      staff members are the heart of our organization, bringing
                      compassion, dedication, and expertise to their roles every
                      day.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We value each team member&apos;s contribution and provide
                      opportunities for professional growth and development. By
                      joining Gateway Home, you become part of a community
                      committed to providing exceptional end-of-life care with
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
              <h2 className="text-3xl font-semibold text-center mb-12">
                RN/LPN Position
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Position Overview
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      24 Hour Shift position, reports to Director of Resident
                      Care.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Responsibilities
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                      The following statements outline primary functions of the
                      job and are not intended as a comprehensive list of all
                      responsibilities.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                      <li>
                        Maintain and document narcotic inventory; prepare doses
                        of medication for residents, with instructions on dosage
                        and administration in clear, understandable terms. Work
                        under the direction of VNA/Hospice.
                      </li>
                      <li>
                        Ensure sufficient medications and supplies are
                        available, especially for holidays and weekends.
                      </li>
                      <li>
                        Assess residents during AM care, update care plans as
                        needed, and provide daily bathing and personal care.
                      </li>
                      <li>
                        Notify VNA/Hospice nurse of any incidents (e.g., falls)
                        or concerns (e.g., medication or catheter needs).
                      </li>
                      <li>Handle admissions as needed.</li>
                      <li>
                        Provide emotional support and assistance to families.
                      </li>
                      <li>
                        Nurse is responsible for pronouncing death and remaining
                        at Gateway Home until the body is released to the
                        funeral home.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Schedule Details
                    </h3>
                    <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
                      <li>
                        Nurses coordinate resident care for a 24-hour period,
                        from 8am to 8am, covering all unmanned shifts in full.
                      </li>
                      <li>
                        Nurses typically work 4 hours with residents in the AM
                        (8am-12noon), followed by 20 hours of paid
                        &quot;on-call&quot; time. Nurses must be reachable
                        during on-call hours for questions.
                      </li>
                      <li>
                        Any shift changes or call-ins must be reported to the
                        director in advance.
                      </li>
                    </ul>
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
                <h2 className="text-3xl font-semibold mb-4 text-center">
                  Apply Today
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Take the first step towards a rewarding career in healthcare
                </p>
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Employment Application
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <EmploymentForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
