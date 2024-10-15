import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { Cuboid, Gift, HandCoins, ScrollText, Users } from "lucide-react";
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
      <Card id="donors">
        <CardHeader>
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-orange-400 dark:text-orange-300">
              Donors
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
          </div>
          <CardDescription>
            Gateway Home is made possible by the generosity of our donors.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Platinum</AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc">
                  <li>Attica Lions Club</li>
                  <li>Attica Package Company, Inc.</li>
                  <li>Donna Ferry</li>
                  <li>Louise M Schiltz</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Gold</AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc">
                  <li>Advanced Dairy Services, Inc.</li>
                  <li>Doug & Rosie Domes</li>
                  <li>Dr. Joseph & Marcy Craddock</li>
                  <li>James & Jane Frankenberger</li>
                  <li>L Toal Plumbing, LLC</li>
                  <li>Marley Funeral Home LLC</li>
                  <li>Providence Fellowship</li>
                  <li>Ralph A. Janes</li>
                  <li>Robinson & Hackemer Funeral Home</li>
                  <li>S.J.F. Construction, Inc</li>
                  <li>Shirley Teachen</li>
                  <li>Todd & Brittany Gadd</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Silver</AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc">
                  <li>Connie Tartick</li>
                  <li>County Line Stone Co., Inc.</li>
                  <li>Durin Rogers & Paula Campbell</li>
                  <li>Harding&apos;s Attica Furniture</li>
                  <li>Joseph & Carol Pilc</li>
                  <li>Michael & Marybeth Whiting</li>
                  <li>Paul & Diane Luderman</li>
                  <li>Ron & Peach Merrill</li>
                  <li>Sandy Ewert</li>
                  <li>Shirley F. Peters</li>
                  <li>Zehler Excavating, LLC</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Bronze</AccordionTrigger>
              <AccordionContent>
                <ul className="list-inside list-disc">
                  <li>Alan & Kelly Heizmann</li>
                  <li>Alfonso J. Ficarella</li>
                  <li>Andrew & Carla Gasiewicz</li>
                  <li>Angela Milillo & Doug Patti</li>
                  <li>Ann & Deane Foster</li>
                  <li>Anna Nutty</li>
                  <li>Arch & Peggy Snyder</li>
                  <li>Barbara C. Schiltz</li>
                  <li>Barbara Myers</li>
                  <li>Bernard & Janet Meinweiser</li>
                  <li>Brennan & Shelly Burdett</li>
                  <li>Can Can Redemption</li>
                  <li>Charles & J. Terri Woodruff</li>
                  <li>Clarence & Mary Weaver</li>
                  <li>Connie Holt</li>
                  <li>Cooke & Steffan - Mr. Tom Steffan</li>
                  <li>Daniel & Barbara Krazmien</li>
                  <li>Daniel & Jean Burling</li>
                  <li>Daniel & Shannon Ford</li>
                  <li>Daniel & Susan Boss</li>
                  <li>Dave & Joanne Thornton</li>
                  <li>David & Connie Rethlake</li>
                  <li>David & Judith Brockner</li>
                  <li>Dennis & Carol Piechowiak</li>
                  <li>Diane Phelps</li>
                  <li>Don & Jude Carpenter</li>
                  <li>Don & Patti Almeter</li>
                  <li>Donald & Linda Schmidt</li>
                  <li>Donald and Jane Beechler</li>
                  <li>Empire Access</li>
                  <li>Gary & Carol Barrow</li>
                  <li>Gary & Karen Beideck</li>
                  <li>Gary & Renee Hanley</li>
                  <li>Gerald & Deborah Landowski</li>
                  <li>Gina M. Morrison</li>
                  <li>Grace Strollo</li>
                  <li>Helen Leonard</li>
                  <li>Helen Nichols</li>
                  <li>Herbert Hammond</li>
                  <li>Howard & Muriel Herman</li>
                  <li>J & S Agen, Inc. - Design Art</li>
                  <li>Janet Romesser</li>
                  <li>Jeannie K. Bates</li>
                  <li>Jerry & Sue Elmore</li>
                  <li>Jerilyn Clark</li>
                  <li>John E. Jaszko</li>
                  <li>Joseph & Laura Schmieder</li>
                  <li>Kelly Nelson</li>
                  <li>Kevin & Lisa Cochrane</li>
                  <li>Kirk & Nina Reisdorf</li>
                  <li>Laurie Valenti</li>
                  <li>Logel Appliance, Inc.</li>
                  <li>Lor-Rob Dairy Farm</li>
                  <li>Lynn & Linda Camp</li>
                  <li>Lynn Herman</li>
                  <li>Martha Whittington</li>
                  <li>Matthew & Mary Mest</li>
                  <li>Melissa Spink</li>
                  <li>Michael & Peggy Morrissey</li>
                  <li>Mike & Karen Shadbolt</li>
                  <li>M&M Meats</li>
                  <li>Norb & Marilyn Fuest</li>
                  <li>Norma Gerhardt</li>
                  <li>Orangeville Immanuel United Church of Chr</li>
                  <li>Pat Forsha Truck and Auto Collision, Inc.</li>
                  <li>Patricia Herman</li>
                  <li>Paul & Carol George</li>
                  <li>Paul & Maryann Simonsen</li>
                  <li>Peter & Dawn Mark</li>
                  <li>Randy & Mary Szczesniak</li>
                  <li>Richard & Linda VanDette</li>
                  <li>Richard H. & Maria Walczak</li>
                  <li>Robert & Barbara Peters</li>
                  <li>Robert & Eileen Disinger</li>
                  <li>Robert & Maureen Kirby</li>
                  <li>Robert A. Koerner Construction</li>
                  <li>Ronald J. Demers</li>
                  <li>Rose Bartz</li>
                  <li>Sandra C. Green</li>
                  <li>Sandra Urquhart</li>
                  <li>Sons of the American Legion Post 1720</li>
                  <li>Springtyme Landscaping & Design Inc.</li>
                  <li>Stuart & Janis Hempel</li>
                  <li>Susan Grew</li>
                  <li>The Greenery</li>
                  <li>Tim & Louise Royce</li>
                  <li>Timothy J. & Donna Embt</li>
                  <li>Toshmin D. Duncan</li>
                  <li>Virginia & Burt Fugle</li>
                  <li>Warsaw Pennysaver</li>
                  <li>Wilkins Insurance Agency, Inc</li>
                  <li>William Errington</li>
                  <li>William J. Renz Jr.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
