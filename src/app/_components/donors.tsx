import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Donors() {
  const platinumDonors = [
    "Attica Package Company, Inc.",
    "Attica Lions Club",
    "Louise M Schiltz",
    "Donna Ferry",
  ];

  const goldDonors = [
    "Marley Funeral Home LLC",
    "Doug Domes",
    "Advanced Dairy Services, Inc.",
    "Todd & Brittany Gadd",
    "L Toal Plumbing, LLC",
    "Robinson & Hackemer Funeral Home",
    "S.J.F. Construction, Inc",
    "Dr. Joseph & Marcy Craddock",
    "Shirley Teachen",
    "Providence Fellowship",
    "James & Jane Frankenberger",
    "Ralph A. Janes",
  ];

  const silverDonors = [
    "Shirley F. Peters",
    "Michael & Marybeth Whiting",
    "Ron & Peach Merrill",
    "County Line Stone Co., Inc.",
    "Connie Tartick",
    "Sandy Ewert",
    "Paul & Diane Luderman",
    "Zehler Excavating, LLC",
    "Durin Rogers & Paula Campbell",
    "Harding's Attica Furniture",
    "Joseph & Carol Pilc",
  ];

  const bronzeDonors = [
    "Jeannie K. Bates",
    "Richard & Linda VanDette",
    "Gary & Renee Hanley",
    "Martha Whittington",
    "Melissa Spink",
    "Laurie Valenti",
    "Richard H. & Maria Walczak",
    "Clarence & Mary Weaver",
    "Ronald J. Demers",
    "Kevin & Lisa Cochrane",
    "Connie Holt",
    "Lynn & Linda Camp",
    "Stuart & Janis Hempel",
    "David & Judith Brockner",
    "Helen Leonard",
    "Paul & Maryann Simonsen",
    "Diane Phelps",
    "Daniel & Barbara Krazmien",
    "Patricia Herman",
    "Warsaw Pennysaver",
    "Barbara C. Schiltz",
    "Helen Nichols",
    "Joseph & Laura Schmieder",
    "Jerilyn Clark",
    "Brennan & Shelly Burdett",
    "Andrew & Carla Gasiewicz",
    "Ann & Deane Foster",
    "Gary & Carol Barrow",
    "Bernard & Janet Meinweiser",
    "Barbara Myers",
    "Alan & Kelly Heizmann",
    "Timothy J. & Donna Embt",
    "Cooke & Steffan - Mr. Tom Steffan",
    "Laura Feger",
    "Mike & Karen Shadbolt",
    "Daniel & Shannon Ford",
    "Howard & Muriel Herman",
    "Angela Milillo & Doug Patti",
    "Sandra C. Green",
    "Donald & Linda Schmidt",
    "Jerry & Sue Elmore",
    "Orangeville Immanuel United Church of Chr",
    "Anna Nutty",
    "Can Can Redemption",
    "Robert & Eileen Disinger",
    "Rose Bartz",
    "Pat Forsha Truck and Auto Collision, Inc.",
    "Gary & Karen Beideck",
    "Virginia & Burt Fugle",
    "Susan Grew",
    "Randy & Mary Szczesniak",
    "Empire Access",
    "The Greenery",
    "Matthew & Mary Mest",
    "M&M Meats",
    "J & S Agen, Inc. - Design Art",
    "Dennis & Carol Piechowiak",
    "Gina M. Morrison",
    "Toshmin D. Duncan",
    "Kelly Nelson",
    "Paul & Carol George",
    "Robert & Barbara Peters",
    "Don & Patti Almeter",
    "David & Connie Rethlake",
    "Sandra Urquhart",
    "Robert & Maureen Kirby",
    "Daniel & Susan Boss",
    "Robert A. Koerner Construction",
    "Arch & Peggy Snyder",
    "Charles & J. Terri Woodruff",
    "Daniel & Jean Burling",
    "Michael & Peggy Morrissey",
    "Springtyme Landscaping & Design Inc.",
    "Tim & Louise Royce",
    "Dave & Joanne Thornton",
    "Grace Strollo",
    "Dan & Brenda Miller",
    "Jeff & Elizabeth Clark",
    "Wilkins Insurance Agency, Inc",
    "Norb & Marilyn Fuest",
    "Logel Appliance, Inc.",
    "Don & Jude Carpenter",
    "Norma Gerhardt",
    "Gerald & Deborah Landowski",
    "Alfonso J. Ficarella",
    "Lynn Herman",
    "Kirk & Nina Reisdorf",
    "William Errington",
    "Peter & Dawn Mark",
    "Sons of the American Legion Post 1720",
    "Donald and Jane Beechler",
    "Lor-Rob Dairy Farm",
    "Janet Romesser",
    "Herbert Hammond",
    "William J. Renz Jr.",
    "John E. Jaszko",
    "Jeff & Elizabeth Clark",
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Donors</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Gateway Home is a non-profit organization that relies on the
          generosity of our community to provide our services. We are grateful
          for the support of our donors.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="platinum">
          <TabsList>
            <TabsTrigger value="platinum">Platinum</TabsTrigger>
            <TabsTrigger value="gold">Gold</TabsTrigger>
            <TabsTrigger value="silver">Silver</TabsTrigger>
            <TabsTrigger value="bronze">Bronze</TabsTrigger>
          </TabsList>
          <TabsContent value="platinum">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {platinumDonors
                .slice()
                .sort((a, b) => a.localeCompare(b))
                .map((donor) => (
                  <li key={donor}>{donor}</li>
                ))}
            </ul>
          </TabsContent>
          <TabsContent value="gold">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {goldDonors
                .slice()
                .sort((a, b) => a.localeCompare(b))
                .map((donor) => (
                  <li key={donor}>{donor}</li>
                ))}
            </ul>
          </TabsContent>
          <TabsContent value="silver">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {silverDonors
                .slice()
                .sort((a, b) => a.localeCompare(b))
                .map((donor) => (
                  <li key={donor}>{donor}</li>
                ))}
            </ul>
          </TabsContent>
          <TabsContent value="bronze">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {bronzeDonors
                .slice()
                .sort((a, b) => a.localeCompare(b))
                .map((donor) => (
                  <li key={donor}>{donor}</li>
                ))}
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
