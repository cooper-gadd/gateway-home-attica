import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Donate() {
  const wishList = [
    { category: "Food/Household", item: "Cookie mixes", details: "" },
    { category: "Food/Household", item: "Cake mixes", details: "" },
    {
      category: "Food/Household",
      item: "Storage bags of all sizes",
      details: "",
    },
    { category: "Food/Household", item: "Clear shipping tape", details: "" },
    {
      category: "Food/Household",
      item: "Coffee",
      details: "regular & decaf, bags or cans or K-cups",
    },
    {
      category: "Food/Household",
      item: "Juices",
      details: "in cans or bottles",
    },
    { category: "Food/Household", item: "Canned soda", details: "" },
    { category: "Food/Household", item: "Canned soups", details: "" },
    { category: "Food/Household", item: "Butter", details: "" },
    { category: "Food/Household", item: "Bottled water", details: "" },
    { category: "Food/Household", item: "Paper napkins", details: "" },
    { category: "Food/Household", item: "Paper towels", details: "" },
    { category: "Food/Household", item: "Toilet paper", details: "" },
    { category: "Food/Household", item: "Kleenex", details: "" },
    {
      category: "Food/Household",
      item: "Tall kitchen garbage bags",
      details: "13 gallon",
    },
    {
      category: "Food/Household",
      item: "Small garbage bags",
      details: "4 gallon",
    },
    {
      category: "Food/Household",
      item: "Swiffer solution & dry cloths",
      details: "",
    },
    { category: "Resident Care", item: "Lip Balm", details: "" },
    { category: "Resident Care", item: "Non-Latex Gloves", details: "L & XL" },
    { category: "Resident Care", item: "Distilled Water", details: "" },
    {
      category: "Resident Care",
      item: "Disposable Oral Mouth Swabs",
      details: "",
    },
    { category: "Resident Care", item: "Baby Wipes", details: "" },
    { category: "Resident Care", item: "Slip Resistant Socks", details: "" },
    { category: "Miscellaneous", item: "Postage stamps", details: "" },
    {
      category: "Miscellaneous",
      item: "Brother Printer Ink",
      details: "LC30333PKS",
    },
    {
      category: "Miscellaneous",
      item: "Gift Cards",
      details:
        "Tops, Dollar General, Walmart, Home Depot, Aldi’s, Tim Horton’s, Local Restaurants",
    },
    {
      category: "Miscellaneous",
      item: "Folding chairs",
      details: "with seat cushions",
    },
    { category: "Miscellaneous", item: "Easy up tents", details: "" },
    {
      category: "Miscellaneous",
      item: "Items and Baskets",
      details: "for basket auctions",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Donate Today</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              If you would like to support the work that we do, please consider
              donating to our cause. Your donation will help us to continue to
              provide free resources to the community and to support our team of
              volunteers. Thank you for making a better tomorrow for Gateway
              Home!
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Donate Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Wish Lists</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              If you would like to support the work we do, please consider
              purchasing items from the wish lists below. Your donation will
              help us to continue to provide free resources to the community and
              to support our team of volunteers.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-4">
              <Button>Amazon</Button>
              <Button>Walmart</Button>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Legacy Brick Sale</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Buy a brick! The engraved bricks will be a permanent memorial to
              our residents, volunteers, families and businesses that wish to
              support Gateway Home. The bricks will be placed in the walkway at
              the entrance of Gateway Home. Please fill out the form below to
              get started.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center gap-4">
              <Button>Form</Button>
              <Button>Purchase</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Wish List</CardTitle>
          <CardDescription>
            If you would like to support the work we do, please consider
            purchasing items from the wish list below. Your donation will help
            us to continue to provide free resources to the community and to
            support our team of volunteers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden sm:table-cell">Category</TableHead>
                <TableHead className="table-cell">Item</TableHead>
                <TableHead className="text-right">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wishList
                .slice()
                .sort((a, b) => a.item.localeCompare(b.item))
                .map((item) => {
                  return (
                    <TableRow key={item.item}>
                      <TableCell className="hidden sm:table-cell">
                        {item.category}
                      </TableCell>
                      <TableCell>{item.item}</TableCell>
                      <TableCell className="text-right">
                        {item.details}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          Please consider patronizing our kind partner, Attica Pharmacy for many
          of the resident care items.
        </CardFooter>
      </Card>
    </div>
  );
}
