import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VolunteerForm } from "@/components/volunteer-form";
import Image from "next/image";

export default function VolunteerPage() {
  const volunteerOpportunities = [
    {
      title: "Resident Care",
      description:
        "Experience in providing direct care and support to individuals in need.",
    },
    {
      title: "End of Life Doula",
      description:
        "Experience in providing emotional and spiritual support to individuals nearing the end of their lives.",
    },
    {
      title: "Household Needs/Cleaning",
      description:
        "Experience in maintaining clean and organized living spaces and facilities.",
    },
    {
      title: "Grounds/Maintenance",
      description:
        "Experience in maintaining outdoor spaces, landscaping, and garden care.",
    },
    {
      title: "Fundraising Support",
      description:
        "Experience in fundraising and community outreach to support Gateway Home's mission.",
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
                <p className="text-lg text-muted-foreground">
                  Make a difference in the lives of our residents
                </p>
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
                    Volunteers are the heart of Gateway Home. Your dedication
                    and compassion make a world of difference to our residents,
                    providing comfort, companionship, and support during a
                    crucial time in their lives. Whether you have a few hours a
                    week or a few hours a month, your time is invaluable to us
                    and those we serve.
                  </p>
                  <p className="text-lg">
                    By volunteering, you not only enrich the lives of our
                    residents but also gain a profound and rewarding experience.
                    Join our community of caring individuals and help us create
                    a warm, loving environment for those in our care.
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
