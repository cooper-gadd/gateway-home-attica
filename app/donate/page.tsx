import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Your generous donations help us continue providing exceptional care and creating a nurturing environment for our residents. Every contribution, no matter the size, makes a significant impact on the lives of those we serve.",
};

const donationOptions = [
  {
    amount: 105,
    description:
      "Three months of essential trash and waste collection services",
  },
  {
    amount: 180,
    description:
      "Three months of fresh linen and bedding services for a resident",
  },
  {
    amount: 225,
    description: "Three months of cable television and internet connectivity",
  },
  {
    amount: 300,
    description: "Three months of vital electricity service for our home",
  },
];

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Support Gateway Home
                </h1>
                <p className="text-lg text-muted-foreground">
                  Your generous donations help us continue providing exceptional
                  care and creating a nurturing environment for our residents.
                  Every contribution, no matter the size, makes a significant
                  impact on the lives of those we serve.
                </p>
                <Button asChild className="mt-6">
                  <Link
                    target="_blank"
                    href="https://gatewayhomeattica.networkforgood.com/projects/96096-main-giving-page"
                  >
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Donation Options Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <h2 className="text-2xl font-semibold text-center mb-6">
                How Your Donation Helps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {donationOptions.map((option) => (
                  <Card key={option.amount} className="bg-muted/40">
                    <CardHeader>
                      <CardTitle>${option.amount}</CardTitle>
                    </CardHeader>
                    <CardContent>{option.description}</CardContent>
                  </Card>
                ))}
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
              <h2 className="text-2xl font-semibold text-center mb-6">
                The Impact of Your Generosity
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <figure>
                    <Image
                      src="/donate.jpg"
                      alt="Residents enjoying activities"
                      width={600}
                      height={400}
                      className="rounded-lg"
                    />
                    <figcaption className="text-sm text-center text-muted-foreground mt-2">
                      A big thank you to Wyoming County Correctional Facility
                      Employees for their generous annual donation.
                    </figcaption>
                  </figure>
                </div>
                <div className="md:w-1/2">
                  <p className="text-lg text-end">
                    Your donations directly improve the lives of our residents.
                    From enhancing our facilities to providing engaging
                    activities and therapies, every contribution helps create a
                    more comfortable and enriching environment for those in our
                    care.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Other Ways to Give Section */}
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Other Ways to Give
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="md:col-span-2 bg-muted/40">
                  <CardHeader>
                    <CardTitle>Charitable Giving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Learn about tax-advantaged giving options through IRA
                      distributions and other charitable giving programs that
                      support our mission.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/charitable-giving">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>Legacy Giving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover ways to create a lasting impact through estate
                      planning, trusts, and other legacy giving options that
                      ensure our future.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/legacy-giving">Explore Opportunities</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>Legacy Brick</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      The engraved bricks will be a permanent memorial to our
                      residents, volunteers, families and businesses that wish
                      to support Gateway Home.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link
                          target="_blank"
                          href="https://gatewayhomeattica.networkforgood.com/projects/199955-legacy-brick-sale"
                        >
                          Purchase Brick
                        </Link>
                      </Button>
                      <Button variant="secondary" asChild>
                        <Link
                          target="_blank"
                          href="/legacy-brick-sale-form.pdf"
                        >
                          Brick Form
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>Raffle Baskets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      We always happily accept premade baskets, but we are also
                      happy to make a basket for you! Thank you for your
                      constant support of our mission.
                    </p>
                    <Button variant="outline" asChild>
                      <Link
                        target="_blank"
                        href="https://gatewayhomeattica.networkforgood.com/projects/232986-basket-raffle-page"
                      >
                        Make Basket
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>Wish List</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      We are always in need of items. Please consider
                      patronizing our kind partner, Attica Pharmacy for many of
                      the resident care items. We also have an Amazon Wish List
                      for your convenience.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link href="/wish-list">View Wish List</Link>
                      </Button>
                      <Button variant="secondary" asChild>
                        <Link
                          target="_blank"
                          href="https://www.amazon.com/registries/gl/guest-view/2R4ZT42FVZQW1"
                        >
                          Amazon
                        </Link>
                      </Button>
                    </div>
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
