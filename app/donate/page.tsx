import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const donationOptions = [
  { amount: 25, description: "Provides a day of activities for one resident" },
  {
    amount: 50,
    description: "Supplies a week of nutritious meals for one resident",
  },
  { amount: 100, description: "Funds a month of art therapy sessions" },
  { amount: 250, description: "Supports specialized care equipment upgrades" },
  {
    amount: 500,
    description: "Sponsors a room renovation for enhanced comfort",
  },
  { amount: 1000, description: "Enables a year of music therapy programs" },
];

export default function DonatePage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-8">
        Support Gateway Home
      </h1>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-xl mb-4">
          Your generous donations help us continue providing exceptional care
          and creating a nurturing environment for our residents. Every
          contribution, no matter the size, makes a significant impact on the
          lives of those we serve.
        </p>
        <p className="text-lg">
          Gateway Home is a 501(c)(3) non-profit organization. All donations are
          tax-deductible to the extent allowed by law.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Make a One-Time Donation
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Donation Amount ($)
              </label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                min="1"
                step="1"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Donate Now
            </Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Become a Monthly Supporter
          </h2>
          <p className="mb-4">
            Join our community of monthly donors and help us provide consistent,
            quality care to our residents.
          </p>
          <Button className="w-full">Set Up Monthly Donation</Button>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">
          How Your Donation Helps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {donationOptions.map((option) => (
            <Card key={option.amount}>
              <CardHeader>
                <CardTitle>${option.amount}</CardTitle>
              </CardHeader>
              <CardContent>{option.description}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          The Impact of Your Generosity
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Residents+enjoying+activities"
              alt="Residents enjoying activities"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Your donations directly improve the lives of our residents. From
              enhancing our facilities to providing engaging activities and
              therapies, every contribution helps create a more comfortable and
              enriching environment for those in our care.
            </p>
            <p className="text-lg">
              We&apos;re committed to transparency and ensuring that your
              donations are used effectively. Annual reports detailing our
              financial information and the impact of donations are available
              upon request.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Other Ways to Give
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Planned Giving</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Leave a lasting legacy by including Gateway Home in your estate
                planning. Your planned gift can help ensure quality care for
                generations to come.
              </p>
              <Button variant="outline" asChild>
                <Link href="/planned-giving">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Corporate Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Partner with Gateway Home to make a significant impact in your
                community. We offer various sponsorship and volunteer
                opportunities for businesses.
              </p>
              <Button variant="outline" asChild>
                <Link href="/corporate-partnerships">Explore Partnerships</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="text-center mt-12">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
