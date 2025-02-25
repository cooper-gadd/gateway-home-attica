import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VolunteerForm } from "@/components/volunteer-form";
import Image from "next/image";

export default function VolunteerPage() {
  const volunteerOpportunities = [
    {
      title: "Resident Care",
      description: "Providing direct care and support to individuals in need.",
    },
    {
      title: "End of Life Doula",
      description:
        "Trained to provide emotional and spiritual support to individuals nearing the end of their lives.",
    },
    {
      title: "Household Needs/Cleaning",
      description: "Cleaning and organizing spaces within the home.",
    },
    {
      title: "Grounds/Maintenance",
      description: "Maintaining outdoor spaces, landscaping, and garden care.",
    },
    {
      title: "Fundraising Support",
      description:
        "Fundraising and community outreach to support Gateway Home's mission.",
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
                  Volunteer at Gateway Home
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Make a difference in the lives of our residents
                </p>
                <Button asChild>
                  <a href="#application">Apply Now</a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Impact Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-8">
                The Impact of Your Time
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <p className="text-lg mb-6">
                    At Gateway Home, we rely heavily on community fundraising
                    and volunteer support. Our organization&apos;s success comes
                    from dedicated individuals and groups who organize events,
                    participate in campaigns, and help us raise vital funds.
                    These efforts ensure we can continue providing essential
                    care services while maintaining our facility and programs.
                  </p>
                  <p className="text-lg">
                    By participating in our fundraising initiatives, you become
                    part of our mission to provide comfort and care. From annual
                    events to ongoing campaigns, every effort helps sustain our
                    services and enhance the quality of life for our residents.
                    Join us in making a lasting impact through your fundraising
                    support.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/concert.jpg"
                    alt="Volunteer with Resident"
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

      {/* Opportunities Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12">
                Volunteer Opportunities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {volunteerOpportunities.map((opportunity, index) => (
                  <Card key={index} className="bg-muted/40">
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
          <section id="application" className="py-24">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-center mb-8">
                Join our team of compassionate volunteers and help us provide
                comfort and care to those who need it most.
              </p>
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Volunteer Application
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <VolunteerForm />
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
