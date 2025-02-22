import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function EmploymentPage() {
  const careerOpportunities = [
    {
      title: "Registered Nurse",
      description:
        "Provide professional nursing care and support to residents in our facility.",
    },
    {
      title: "Licensed Practical Nurse",
      description:
        "Assist in delivering quality healthcare services under RN supervision.",
    },
    {
      title: "Certified Nursing Assistant",
      description:
        "Provide direct care and assist residents with daily living activities.",
    },
    {
      title: "Social Worker",
      description:
        "Provide emotional support and care coordination for residents and families.",
    },
    {
      title: "Maintenance Technician",
      description:
        "Maintain facility infrastructure and ensure safe living conditions.",
    },
    {
      title: "Administrative Staff",
      description:
        "Support daily operations through various administrative functions.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Careers at Gateway Home
                </h1>
                <p className="text-lg text-muted-foreground">
                  Join our team of dedicated healthcare professionals
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-8">
                Why Work With Us?
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <p className="text-lg mb-6">
                    At Gateway Home, we value our employees as much as we value
                    our residents. We offer competitive compensation,
                    comprehensive benefits, and opportunities for professional
                    growth. Our collaborative work environment supports both
                    personal and professional development.
                  </p>
                  <p className="text-lg">
                    We&apos;re looking for passionate individuals who share our
                    commitment to providing exceptional care. Join our team and
                    make a meaningful impact while building a rewarding career
                    in healthcare.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg"
                    alt="Team at Gateway Home"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Current Openings Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12">
                Current Openings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {careerOpportunities.map((opportunity, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{opportunity.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{opportunity.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Application Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-4">
                Apply Today
              </h2>
              <p className="text-xl text-center mb-8">
                Take the first step towards a rewarding career in healthcare
              </p>
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Employment Application
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-foreground mb-1"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-foreground mb-1"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Position Applied For
                      </label>
                      <Input
                        id="position"
                        placeholder="Enter the position you're applying for"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Work Experience
                      </label>
                      <Textarea
                        id="experience"
                        placeholder="Describe your relevant work experience"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="resume"
                        className="block text-sm font-medium text-foreground mb-1"
                      >
                        Resume/CV
                      </label>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
