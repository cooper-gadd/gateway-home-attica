import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { wishList } from "@/data/data";
import Link from "next/link";

export default function Donate() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Financial Donations</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Your financial support is crucial to our mission.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link
                target="_blank"
                href={
                  "https://gatewayhomeattica.networkforgood.com/projects/96096-main-giving-page"
                }
              >
                Donate now
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Legacy Brick Sale</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Purchase a brick to be placed in our walkway.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link
                target="_blank"
                href={
                  "https://gatewayhomeattica.networkforgood.com/projects/199955-legacy-brick-sale"
                }
              >
                Buy a Brick
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Raffle Baskets</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Create your own basket, or donate funds for us to create one.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link
                target="_blank"
                href={
                  "https://gatewayhomeattica.networkforgood.com/projects/96096-main-giving-page"
                }
              >
                Buy a Basket
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Wish List</CardTitle>
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
            <Button asChild>
              <Link
                target="_blank"
                href={
                  "https://www.amazon.com/registries/gl/guest-view/2R4ZT42FVZQW1"
                }
              >
                Amazon
              </Link>
            </Button>
            <Button asChild>
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
    </div>
  );
}
