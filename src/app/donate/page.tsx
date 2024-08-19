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
        "Tops, Dollar General, Walmart, Home Depot, Aldi’s, Tim Horton’s, Local Restaurants, etc.",
    },
    {
      category: "Miscellaneous",
      item: "Folding chairs",
      details: "With seat cushions.",
    },
    { category: "Miscellaneous", item: "Easy up tents", details: "" },
    {
      category: "Miscellaneous",
      item: "Items and Baskets",
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
              Your financial support is critical to our mission. Your donation
              will help us provide the best possible care for our residents.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Donate Now</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Legacy Brick Sale</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              The engraved bricks will be a permanent memorial to our residents,
              volunteers, families and businesses that wish to support Gateway
              Home.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Buy a Brick</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Baskets for Actions</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Either create your own basket, or donate financially to a basket
              that we will create for you.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Buy a Basket</Button>
          </CardFooter>
        </Card>
      </div>
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Wish List</CardTitle>
          <CardDescription>
            If you would like to support the work we do, please consider
            purchasing items from the wish list below. Please consider
            patronizing our kind partner, Attica Pharmacy for many of the
            resident care items. We also have an Amazon and Walmart Wish List
            for your convenience.
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
          <div className="flex items-center gap-4">
            <Button>Amazon</Button>
            <Button>Walmart</Button>
          </div>
        </CardFooter>
      </Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Privacy Policy</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              We use the information you provide about yourself online through
              our website only to complete your request. We do not share this
              information with outside parties except to the extent necessary to
              complete your request. We use return email addresses to answer the
              email we receive. Such addresses are not used for any other
              purpose and are not shared with outside parties. We never use or
              share the personally identifiable information provided to us
              online in ways unrelated to the ones described above without also
              providing you an opportunity to opt-out or otherwise prohibit such
              unrelated uses.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Security Policy</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Your payment and personal information is always safe. Our Secure
              Sockets Layer (SSL) software is the industry standard and among
              the best software available today for secure commerce
              transactions. It encrypts all of your personal information,
              including credit card number, name, and address, so that it cannot
              be read over the internet.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Refund Policy</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              No Refunds.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
