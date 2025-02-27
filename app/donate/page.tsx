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
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Support Gateway Home
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Your generous donations help us continue providing exceptional
                  care and creating a nurturing environment for our residents.
                  Every contribution, no matter the size, makes a significant
                  impact on the lives of those we serve.
                </p>
                <Button asChild>
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

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
                <h2 className="text-3xl font-semibold text-center mb-12">
                  How Your Donation Helps
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {donationOptions.map((option) => (
                    <Card key={option.amount} className="bg-muted/40">
                      <CardHeader>
                        <CardTitle className="text-2xl">${option.amount}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg text-muted-foreground">
                          {option.description}
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
          <section className="py-24">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold mb-6">
                      The Impact of Your Generosity
                    </h2>
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Your donations directly improve the lives of our residents.
                        From enhancing our facilities to providing engaging
                        activities and therapies, every contribution helps create a
                        more comfortable and enriching environment for those in our
                        care.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                      <Image
                        src="/donate.jpg"
                        alt="Residents enjoying activities"
                        width={600}
                        height={800}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-sm text-white">
                          Thanks Wyoming County Correctional Facility Employees for
                          their generous annual donation.
                        </p>
                      </div>
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
                  Other Ways to Give
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="md:col-span-2 bg-muted/40">
                    <CardHeader>
                      <CardTitle className="text-2xl">Charitable Giving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground mb-6">
                        Learn about tax-advantaged giving options through IRA
                        distributions and other charitable giving programs that
                        support our mission.
                      </p>
                      <Button asChild>
                        <Link href="/charitable-giving">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/40">
                    <CardHeader>
                      <CardTitle className="text-2xl">Legacy Giving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground mb-6">
                        Discover ways to create a lasting impact through estate
                        planning, trusts, and other legacy giving options that
                        ensure our future.
                      </p>
                      <Button asChild>
                        <Link href="/legacy-giving">Explore Opportunities</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/40">
                    <CardHeader>
                      <CardTitle className="text-2xl">Legacy Brick</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground mb-6">
                        The engraved bricks will be a permanent memorial to our
                        residents, volunteers, families and businesses that wish
                        to support Gateway Home.
                      </p>
                      <div className="flex gap-2">
                        <Button asChild>
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
                      <CardTitle className="text-2xl">Raffle Baskets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground mb-6">
                        We always happily accept premade baskets, but we are also
                        happy to make a basket for you! Thank you for your
                        constant support of our mission.
                      </p>
                      <Button asChild>
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
                      <CardTitle className="text-2xl">Wish List</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground mb-6">
                        We are always in need of items. Please consider
                        patronizing our kind partner, Attica Pharmacy for many of
                        the resident care items. We also have an Amazon Wish List
                        for your convenience.
                      </p>
                      <div className="flex gap-2">
                        <Button asChild>
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
