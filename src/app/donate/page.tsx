import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

export default function Donate() {
  const wishList = [
    { category: "Food", item: "Cookie mixes", details: "" },
    { category: "Food", item: "Cake mixes", details: "" },
    {
      category: "Household",
      item: "Storage bags of all sizes",
      details: "",
    },
    { category: "Food", item: "Clear shipping tape", details: "" },
    {
      category: "Food",
      item: "Coffee",
      details: "Bags, cans or K-cups of regular & decaf.",
    },
    {
      category: "Food",
      item: "Juices",
      details: "Cans or bottles.",
    },
    { category: "Food", item: "Canned soda", details: "" },
    { category: "Food", item: "Canned soups", details: "" },
    { category: "Food", item: "Butter", details: "" },
    { category: "Food", item: "Bottled water", details: "" },
    { category: "Household", item: "Paper napkins", details: "" },
    { category: "Household", item: "Paper towels", details: "" },
    { category: "Household", item: "Toilet paper", details: "" },
    { category: "Household", item: "Kleenex", details: "" },
    {
      category: "Household",
      item: "Tall kitchen garbage bags",
      details: "13 gallon",
    },
    {
      category: "Household",
      item: "Small garbage bags",
      details: "4 gallon",
    },
    {
      category: "Household",
      item: "Swiffer solution & dry cloths",
      details: "",
    },
    { category: "Resident Care", item: "Lip balm", details: "" },
    { category: "Resident Care", item: "Non-Latex gloves", details: "L & XL" },
    { category: "Resident Care", item: "Distilled water", details: "" },
    {
      category: "Resident Care",
      item: "Disposable oral mouth swabs",
      details: "",
    },
    { category: "Resident Care", item: "Baby wipes", details: "" },
    { category: "Resident Care", item: "Slip resistant socks", details: "" },
    { category: "Miscellaneous", item: "Postage stamps", details: "" },
    {
      category: "Miscellaneous",
      item: "Brother printer ink",
      details: "LC30333PKS",
    },
    {
      category: "Miscellaneous",
      item: "Gift cards",
      details:
        "Tops, Dollar General, Walmart, Home Depot, Aldi’s, Tim Horton’s, Local Restaurants, etc.",
    },
    {
      category: "Miscellaneous",
      item: "Folding chairs",
      details: "With seat cushions.",
    },
    { category: "Miscellaneous", item: "Easy up tents", details: "10 x 10" },
    {
      category: "Miscellaneous",
      item: "Items and baskets",
      details: "For basket auctions.",
    },
  ];

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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <CardTitle>Food</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  We are always in need of the following food items.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  {wishList
                    .filter((item) => item.category === "Food")
                    .sort((a, b) => a.item.localeCompare(b.item))
                    .map((item) => (
                      <li key={item.item}>
                        {item.item}
                        {item.details && ` - ${item.details}`}
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <CardTitle>Household</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  We are always in need of the following household items.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  {wishList
                    .filter((item) => item.category === "Household")
                    .sort((a, b) => a.item.localeCompare(b.item))
                    .map((item) => (
                      <li key={item.item}>
                        {item.item}
                        {item.details && ` - ${item.details}`}
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <CardTitle>Resident Care</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  We are always in need of the following resident care items.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  {wishList
                    .filter((item) => item.category === "Resident Care")
                    .sort((a, b) => a.item.localeCompare(b.item))
                    .map((item) => (
                      <li key={item.item}>
                        {item.item}
                        {item.details && ` - ${item.details}`}
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <CardTitle>Miscellaneous</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  We are always in need of the following miscellaneous items.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  {wishList
                    .filter((item) => item.category === "Miscellaneous")
                    .sort((a, b) => a.item.localeCompare(b.item))
                    .map((item) => (
                      <li key={item.item}>
                        {item.item}
                        {item.details && ` - ${item.details}`}
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </div>
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
