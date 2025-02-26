import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EmploymentPage() {
  const careerOpportunities = [
    {
      title: "Registered Nurse/Licensed Practical Nurse",
      description:
        "24-hour shift position, reports to Director of Resident Care. Work under direction of the VNA/Hospice.",
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
        "Hourly position, reports to Director of Resident Care. Work under the direction of the nurse in charge.",
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
    <main className="min-h-screen">
      {/* Header Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-16">
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

      {/* Current Openings Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-16">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12">
                Current Openings
              </h2>
              <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                {careerOpportunities.map((opportunity, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {opportunity.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-4 font-medium">
                        {opportunity.description}
                      </p>
                      <h4 className="font-semibold mb-2">Responsibilities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {opportunity.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Application Section */}
      <div className="border-grid">
        <div className="container-wrapper">
          <section className="py-16">
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
