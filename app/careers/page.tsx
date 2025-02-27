import { EmploymentForm } from "@/components/employment-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join our team of dedicated healthcare professionals at Gateway Home.",
};

export default function EmploymentPage() {
  const careerOpportunities = [
    {
      title: "Nurse",
      description:
        "Per diem position, reports to Director of Resident Care. Work under direction of the VNA/Hospice.",
      details: [
        "Coordinate care of residents for 24-hour periods (8am-8am)",
        "Maintain, document narcotic inventory, and prepare medication doses",
        "Ensure sufficient medications and supplies are available",
        "Assess residents and revise daily care plans as needed",
        "Notify VNA & Hospice nurse of any resident incidents or concerns",
        "Handle admissions as needed",
        "Provide family emotional support and assistance",
      ],
    },
    {
      title: "Care Aide",
      description:
        "Per diem position, reports to Director of Resident Care. Work under the direction of the nurse in charge.",
      details: [
        "Provide basic personal care (bathing, oral hygiene, toileting, skin care)",
        "Monitor and record vital signs when ordered",
        "Assist with household tasks essential to resident health",
        "Provide a clean and safe environment within the home",
        "Prepare meals based on resident preferences and medical needs",
        "Assist with prescribed medication regimen as directed",
        "Report any changes in resident condition to the nurse in charge",
        "Document services provided and resident-related activities",
      ],
    },
  ];

  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Careers at Gateway Home
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Join our team of dedicated healthcare professionals
                </p>
                <Button asChild>
                  <a href="#openings">View Open Positions</a>
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
                Current Openings
              </h2>
              <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                {careerOpportunities.map((opportunity, index) => (
                  <Card key={index} className="bg-muted/40">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {opportunity.title}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">
                        {opportunity.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-xl font-semibold mb-4">
                        Responsibilities:
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                        {opportunity.details.map((detail, i) => (
                          <li key={i} className="text-lg">
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <Button asChild>
                        <a href="#application">Apply Now</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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
