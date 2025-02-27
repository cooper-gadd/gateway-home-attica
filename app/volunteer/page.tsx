import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VolunteerForm } from "@/components/volunteer-form";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Join our team of compassionate volunteers at Gateway Home.",
};

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
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Volunteer at Gateway Home
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Make a difference in the lives of our residents by joining our
                  team of compassionate volunteers.
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
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-semibold mb-6">
                    The Impact of Your Time
                  </h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      At Gateway Home, we rely heavily on community fundraising
                      and volunteer support. Our organization&apos;s success
                      comes from dedicated individuals and groups who organize
                      events, participate in campaigns, and help us raise vital
                      funds.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      By participating in our fundraising initiatives, you
                      become part of our mission to provide comfort and care.
                      From annual events to ongoing campaigns, every effort
                      helps sustain our services and enhance the quality of life
                      for our residents.
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <Image
                      src="/concert.jpg"
                      alt="Volunteer with Resident"
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
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-semibold text-center mb-12">
                Volunteer Opportunities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {volunteerOpportunities.map((opportunity, index) => (
                  <Card key={index} className="bg-muted/40">
                    <CardHeader>
                      <CardTitle>{opportunity.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {opportunity.description}
                      </p>
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
                  Ready to Make a Difference?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center">
                  Join our team of compassionate volunteers and help us provide
                  comfort and care to those who need it most.
                </p>
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Volunteer Application
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <VolunteerForm />
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
