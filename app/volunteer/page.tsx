import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Volunteer at Gateway Home</h1>
        <p className="text-lg text-muted-foreground">
          Make a difference in the lives of our residents
        </p>
      </div>

      <section className="py-24 bg-muted/40 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            The Impact of Your Time
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Volunteers are the heart of Gateway Home. Your dedication and
                compassion make a world of difference to our residents,
                providing comfort, companionship, and support during a crucial
                time in their lives. Whether you have a few hours a week or a
                few hours a month, your time is invaluable to us and those we
                serve.
              </p>
              <p className="text-lg">
                By volunteering, you not only enrich the lives of our residents
                but also gain a profound and rewarding experience. Join our
                community of caring individuals and help us create a warm,
                loving environment for those in our care.
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
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

      <section className="py-24 bg-muted/40 rounded-lg">
        <div className="container mx-auto px-4">
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
                    htmlFor="interests"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Areas of Interest
                  </label>
                  <Textarea
                    id="interests"
                    placeholder="Tell us which volunteer opportunities interest you"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-foreground mb-1"
                  >
                    Relevant Experience
                  </label>
                  <Textarea
                    id="experience"
                    placeholder="Describe any relevant experience or skills"
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
    </main>
  );
}
