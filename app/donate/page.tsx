import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
    amount: 180,
    description: "Three months of fresh linen and bedding services for a resident",
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

const sponsorshipTiers: {
  name: string;
  amount: number;
  tickets: string;
  badge?: string;
}[] = [
  {
    name: "Porterhouse",
    amount: 750,
    tickets: "8",
    badge: "Corporate & advertising",
  },
  {
    name: "Prime Rib",
    amount: 500,
    tickets: "6",
  },
  {
    name: "Sirloin",
    amount: 375,
    tickets: "4",
  },
  {
    name: "Roast",
    amount: 250,
    tickets: "2",
  },
  {
    name: "Chuck",
    amount: 100,
    tickets: "—",
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
                <h1 className="text-4xl font-bold mb-4">Support Gateway Home</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Your generous donations help us continue providing exceptional care and creating a
                  nurturing environment for our residents. Every contribution, no matter the size,
                  makes a significant impact on the lives of those we serve.
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
              <h2 className="text-3xl font-semibold text-center mb-12">How Your Donation Helps</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {donationOptions.map((option) => (
                  <Card key={option.amount} className="bg-muted/40">
                    <CardHeader>
                      <CardTitle className="text-2xl">${option.amount}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div id="sponsorship" className="border-grid border-b scroll-mt-20">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-semibold text-center mb-4">Sponsorship Opportunities</h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Sponsors of the November 14 meat raffle are acknowledged before and during the
                event. Gateway Home is a 501(c)(3) comfort care home.
              </p>
              <div className="overflow-hidden rounded-xl border shadow">
                <Table>
                  <TableHeader className="bg-muted/40">
                    <TableRow>
                      <TableHead className="px-3 whitespace-normal sm:px-4">Level</TableHead>
                      <TableHead className="px-3 whitespace-normal sm:px-4">Amount</TableHead>
                      <TableHead className="px-3 whitespace-normal sm:px-4">Tickets</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sponsorshipTiers.map((tier) => (
                      <TableRow key={tier.name}>
                        <TableCell className="px-3 font-medium whitespace-normal sm:px-4">
                          <span className="inline-flex flex-wrap items-center gap-2">
                            {tier.name}
                            {tier.badge && <Badge variant="secondary">{tier.badge}</Badge>}
                          </span>
                        </TableCell>
                        <TableCell className="px-3 whitespace-normal sm:px-4">
                          ${tier.amount}
                        </TableCell>
                        <TableCell className="px-3 whitespace-normal text-muted-foreground sm:px-4">
                          {tier.tickets}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mt-12">
                Mail a check to Gateway Home, 91 Main Street, Attica, NY 14011. Include the sponsor
                name, contact name, phone, address, and amount.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <h2 className="text-3xl font-semibold text-center mb-12">Other Ways to Give</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="md:col-span-2 bg-muted/40">
                  <CardHeader>
                    <CardTitle className="text-2xl">Charitable Giving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground mb-6">
                      Learn about tax-advantaged giving options through IRA distributions and other
                      charitable giving programs that support our mission.
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
                      Discover ways to create a lasting impact through estate planning, trusts, and
                      other legacy giving options that ensure our future.
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
                      The engraved bricks will be a permanent memorial to our residents, volunteers,
                      families and businesses that wish to support Gateway Home.
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
                        <Link target="_blank" href="/legacy-brick-sale-form.pdf">
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
                      We always happily accept premade baskets, but we are also happy to make a
                      basket for you! Thank you for your constant support of our mission.
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
                      We are always in need of items. Please consider patronizing our kind partner,
                      Attica Pharmacy for many of the resident care items. We also have an Amazon
                      Wish List for your convenience.
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

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-start gap-12">
                <div className="lg:w-1/2 text-center md:text-start">
                  <h2 className="text-3xl font-semibold mb-6">The Impact of Your Generosity</h2>
                  <div className="space-y-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Your donations directly improve the lives of our residents. From enhancing our
                      facilities to providing engaging activities and therapies, every contribution
                      helps create a more comfortable and enriching environment for those in our
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
                        Thanks Wyoming County Correctional Facility Employees for their generous
                        annual donation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
