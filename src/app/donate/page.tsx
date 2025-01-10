import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Crown,
  Cuboid,
  Gift,
  HandCoins,
  HeartHandshake,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import { wishList } from "./_data/data";

export default function Donate() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card id="financial-donations">
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-orange-400 dark:text-orange-300">
                Financial Donations
              </CardTitle>
              <HandCoins className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Your financial support is crucial to our mission.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant={"secondary"} asChild>
              <Link
                target="_blank"
                href={
                  "https://gatewayhomeattica.networkforgood.com/projects/96096-main-giving-page"
                }
              >
                Donate Now
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card id="legacy-brick-sale">
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-orange-400 dark:text-orange-300">
                Legacy Brick Sale
              </CardTitle>
              <Cuboid className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Purchase a brick to be placed in our walkway.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center gap-4">
            <Button variant={"secondary"} asChild>
              <Link
                target="_blank"
                href={
                  "https://gatewayhomeattica.networkforgood.com/projects/199955-legacy-brick-sale"
                }
              >
                Buy a Brick
              </Link>
            </Button>
            <Button variant={"secondary"} asChild>
              <Link target="_blank" href={"/pdfs/legacy-brick-sale-form.pdf"}>
                Brick Form
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card id="raffle-baskets">
          <CardHeader className="pb-3">
            <div className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-orange-400 dark:text-orange-300">
                Raffle Baskets
              </CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
            </div>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              We raise a good portion of funds via basket raffles.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant={"secondary"} asChild>
              <Link
                target="_blank"
                href={
                  "https://gatewayhomeattica.networkforgood.com/projects/232986-basket-raffle-page"
                }
              >
                Buy a Basket
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Card id="charitable-giving" className="mt-4">
        <CardHeader>
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-orange-400 dark:text-orange-300">
              Charitable Giving
            </CardTitle>
            <HeartHandshake className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
          </div>
          <CardDescription>
            Qualified Charitable Distributions (QCDs) allow eligible IRA owners
            aged 70.5+ to make tax-free transfers directly to charities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="mb-2 font-semibold">How it works:</h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>The IRA trustee sends the funds directly to the charity</li>
            <li>
              The donor can request multiple QCDs in a year, but the total
              amount excluded from income is limited to $105,000 in 2024
            </li>
            <li>
              QCDs can count toward the required minimum distribution (RMD) for
              the year for those who are at least 73 years old
            </li>
            <li>
              The IRA trustee reports the QCD on the account owner&apos;s annual
              tax return, Form 1099-R
            </li>
          </ul>
          <h3 className="mb-2 font-semibold">Who can make a QCD?</h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Eligible IRA owners who are at least 70.5 years old</li>
            <li>
              Married couples who meet the qualifications and have separate IRAs
            </li>
          </ul>
          <h3 className="mb-2 font-semibold">How to make a QCD?</h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Contact the IRA trustee to request a form or instructions for
              making a QCD
            </li>
            <li>
              Provide the trustee with the name and address of the charity, and
              the amount of the donation
            </li>
            <li>Review and submit the request</li>
          </ul>
          <h3 className="mb-2 font-semibold">When to consider making a QCD?</h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              A QCD can be a good way to give to charity before the end of the
              year
            </li>
            <li>A QCD can be a way to claim a state tax deduction</li>
            <li>
              A QCD can be a way to avoid income restrictions on charitable
              deductions
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card id="legacy-giving" className="mt-4">
        <CardHeader>
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-orange-400 dark:text-orange-300">
              Legacy Giving Opportunities
            </CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
          </div>
          <CardDescription>
            If you have already provided for Gateway Home with a planned gift,
            please contact Susan Herman, Office Manager at 585-708-4331. Gateway
            Home cannot provide legal or tax advice - please review any
            charitable gift arrangements with your legal and tax counsel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <strong>Wills or Living Trusts:</strong> Name Gateway Home as a
              beneficiary with a specific amount, percentage, or property.
            </li>
            <li>
              <strong>Life Insurance:</strong> Name Gateway Home as the
              beneficiary/owner of your life insurance policy.
            </li>
            <li>
              <strong>Retirement Plans:</strong> Name Gateway Home as the
              beneficiary to avoid income tax on plan distribution.
            </li>
            <li>
              <strong>Charitable Remainder Trusts:</strong> Receive tax benefits
              while ensuring Gateway Home&apos;s future.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card id="wish-list">
        <CardHeader>
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-orange-400 dark:text-orange-300">
              Wish List
            </CardTitle>
            <ScrollText className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
          </div>
          <CardDescription>
            We are always in need of the following items. Please consider
            patronizing our kind partner, Attica Pharmacy for many of the
            resident care items. We also have an Amazon and Walmart Wish List
            for your convenience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="food">
            <TabsList>
              <TabsTrigger value="food">Food</TabsTrigger>
              <TabsTrigger value="household">House</TabsTrigger>
              <TabsTrigger value="resident-care">Res. Care</TabsTrigger>
              <TabsTrigger value="miscellaneous">Misc.</TabsTrigger>
            </TabsList>
            <TabsContent value="food">
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {wishList
                  .filter((item) => item.category === "Food")
                  .sort((a, b) => a.item.localeCompare(b.item))
                  .map((item) => (
                    <li key={item.item}>{item.item}</li>
                  ))}
              </ul>
            </TabsContent>
            <TabsContent value="household">
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {wishList
                  .filter((item) => item.category === "Household")
                  .sort((a, b) => a.item.localeCompare(b.item))
                  .map((item) => (
                    <li key={item.item}>{item.item}</li>
                  ))}
              </ul>
            </TabsContent>
            <TabsContent value="resident-care">
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {wishList
                  .filter((item) => item.category === "Resident Care")
                  .sort((a, b) => a.item.localeCompare(b.item))
                  .map((item) => (
                    <li key={item.item}>{item.item}</li>
                  ))}
              </ul>
            </TabsContent>
            <TabsContent value="miscellaneous">
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {wishList
                  .filter((item) => item.category === "Miscellaneous")
                  .sort((a, b) => a.item.localeCompare(b.item))
                  .map((item) => (
                    <li key={item.item}>{item.item}</li>
                  ))}
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-4">
            <Button variant={"secondary"} asChild>
              <Link
                target="_blank"
                href={
                  "https://www.amazon.com/registries/gl/guest-view/2R4ZT42FVZQW1"
                }
              >
                Amazon
              </Link>
            </Button>
            <Button variant={"secondary"} asChild>
              <Link
                target="_blank"
                href={
                  "https://www.walmart.com/lists/shared/WL/64dea00b-59b4-4ab4-8d9e-3d13d28b6236"
                }
              >
                Walmart
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
