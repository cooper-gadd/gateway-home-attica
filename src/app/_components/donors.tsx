import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Donors() {
  const donors = [
    { name: "Attica Package Company, Inc.", level: "Platinum" },
    { name: "Attica Lions Club", level: "Platinum" },
    { name: "Louise M Schiltz", level: "Platinum" },
    { name: "Donna Ferry", level: "Platinum" },
    { name: "Marley Funeral Home LLC", level: "Gold" },
    { name: "Doug Domes", level: "Gold" },
    { name: "Advanced Dairy Services, Inc.", level: "Gold" },
    { name: "Todd & Brittany Gadd", level: "Gold" },
    { name: "L Toal Plumbing, LLC", level: "Gold" },
    { name: "Robinson & Hackemer Funeral Home", level: "Gold" },
    { name: "S.J.F. Construction, Inc", level: "Gold" },
    { name: "Dr. Joseph & Marcy Craddock", level: "Gold" },
    { name: "Shirley Teachen", level: "Gold" },
    { name: "Providence Fellowship", level: "Gold" },
    { name: "James & Jane Frankenberger", level: "Gold" },
    { name: "Ralph A. Janes", level: "Gold" },
    { name: "Shirley F. Peters", level: "Silver" },
    { name: "Michael & Marybeth Whiting", level: "Silver" },
    { name: "Ron & Peach Merrill", level: "Silver" },
    { name: "County Line Stone Co., Inc.", level: "Silver" },
    { name: "Connie Tartick", level: "Silver" },
    { name: "Sandy Ewert", level: "Silver" },
    { name: "Paul & Diane Luderman", level: "Silver" },
    { name: "Zehler Excavating, LLC", level: "Silver" },
    { name: "Durin Rogers & Paula Campbell", level: "Silver" },
    { name: "Harding's Attica Furniture", level: "Silver" },
    { name: "Joseph & Carol Pilc", level: "Silver" },
    { name: "Jeannie K. Bates", level: "Bronze" },
    { name: "Richard & Linda VanDette", level: "Bronze" },
    { name: "Gary & Renee Hanley", level: "Bronze" },
    { name: "Martha Whittington", level: "Bronze" },
    { name: "Melissa Spink", level: "Bronze" },
    { name: "Laurie Valenti", level: "Bronze" },
    { name: "Richard H. & Maria Walczak", level: "Bronze" },
    { name: "Clarence & Mary Weaver", level: "Bronze" },
    { name: "Ronald J. Demers", level: "Bronze" },
    { name: "Kevin & Lisa Cochrane", level: "Bronze" },
    { name: "Connie Holt", level: "Bronze" },
    { name: "Lynn & Linda Camp", level: "Bronze" },
    { name: "Stuart & Janis Hempel", level: "Bronze" },
    { name: "David & Judith Brockner", level: "Bronze" },
    { name: "Helen Leonard", level: "Bronze" },
    { name: "Paul & Maryann Simonsen", level: "Bronze" },
    { name: "Diane Phelps", level: "Bronze" },
    { name: "Daniel & Barbara Krazmien", level: "Bronze" },
    { name: "Patricia Herman", level: "Bronze" },
    { name: "Warsaw Pennysaver", level: "Bronze" },
    { name: "Barbara C. Schiltz", level: "Bronze" },
    { name: "Helen Nichols", level: "Bronze" },
    { name: "Joseph & Laura Schmieder", level: "Bronze" },
    { name: "Jerilyn Clark", level: "Bronze" },
    { name: "Brennan & Shelly Burdett", level: "Bronze" },
    { name: "Andrew & Carla Gasiewicz", level: "Bronze" },
    { name: "Ann & Deane Foster", level: "Bronze" },
    { name: "Gary & Carol Barrow", level: "Bronze" },
    { name: "Bernard & Janet Meinweiser", level: "Bronze" },
    { name: "Barbara Myers", level: "Bronze" },
    { name: "Alan & Kelly Heizmann", level: "Bronze" },
    { name: "Timothy J. & Donna Embt", level: "Bronze" },
    { name: "Cooke & Steffan - Mr. Tom Steffan", level: "Bronze" },
    { name: "Laura Feger", level: "Bronze" },
    { name: "Mike & Karen Shadbolt", level: "Bronze" },
    { name: "Daniel & Shannon Ford", level: "Bronze" },
    { name: "Howard & Muriel Herman", level: "Bronze" },
    { name: "Angela Milillo & Doug Patti", level: "Bronze" },
    { name: "Sandra C. Green", level: "Bronze" },
    { name: "Donald & Linda Schmidt", level: "Bronze" },
    { name: "Jerry & Sue Elmore", level: "Bronze" },
    { name: "Orangeville Immanuel United Church of Chr", level: "Bronze" },
    { name: "Anna Nutty", level: "Bronze" },
    { name: "Can Can Redemption", level: "Bronze" },
    { name: "Robert & Eileen Disinger", level: "Bronze" },
    { name: "Rose Bartz", level: "Bronze" },
    { name: "Pat Forsha Truck and Auto Collision, Inc.", level: "Bronze" },
    { name: "Gary & Karen Beideck", level: "Bronze" },
    { name: "Virginia & Burt Fugle", level: "Bronze" },
    { name: "Susan Grew", level: "Bronze" },
    { name: "Randy & Mary Szczesniak", level: "Bronze" },
    { name: "Empire Access", level: "Bronze" },
    { name: "The Greenery", level: "Bronze" },
    { name: "Matthew & Mary Mest", level: "Bronze" },
    { name: "M&M Meats", level: "Bronze" },
    { name: "J & S Agen, Inc. - Design Art", level: "Bronze" },
    { name: "Dennis & Carol Piechowiak", level: "Bronze" },
    { name: "Gina M. Morrison", level: "Bronze" },
    { name: "Toshmin D. Duncan", level: "Bronze" },
    { name: "Kelly Nelson", level: "Bronze" },
    { name: "Paul & Carol George", level: "Bronze" },
    { name: "Robert & Barbara Peters", level: "Bronze" },
    { name: "Don & Patti Almeter", level: "Bronze" },
    { name: "David & Connie Rethlake", level: "Bronze" },
    { name: "Sandra Urquhart", level: "Bronze" },
    { name: "Robert & Maureen Kirby", level: "Bronze" },
    { name: "Daniel & Susan Boss", level: "Bronze" },
    { name: "Robert A. Koerner Construction", level: "Bronze" },
    { name: "Arch & Peggy Snyder", level: "Bronze" },
    { name: "Charles & J. Terri Woodruff", level: "Bronze" },
    { name: "Daniel & Jean Burling", level: "Bronze" },
    { name: "Michael & Peggy Morrissey", level: "Bronze" },
    { name: "Springtyme Landscaping & Design Inc.", level: "Bronze" },
    { name: "Tim & Louise Royce", level: "Bronze" },
    { name: "Dave & Joanne Thornton", level: "Bronze" },
    { name: "Grace Strollo", level: "Bronze" },
    { name: "Dan & Brenda Miller", level: "Bronze" },
    { name: "Jeff & Elizabeth Clark", level: "Bronze" },
    { name: "Wilkins Insurance Agency, Inc", level: "Bronze" },
    { name: "Norb & Marilyn Fuest", level: "Bronze" },
    { name: "Logel Appliance, Inc.", level: "Bronze" },
    { name: "Don & Jude Carpenter", level: "Bronze" },
    { name: "Norma Gerhardt", level: "Bronze" },
    { name: "Gerald & Deborah Landowski", level: "Bronze" },
    { name: "Alfonso J. Ficarella", level: "Bronze" },
    { name: "Lynn Herman", level: "Bronze" },
    { name: "Kirk & Nina Reisdorf", level: "Bronze" },
    { name: "William Errington", level: "Bronze" },
    { name: "Peter & Dawn Mark", level: "Bronze" },
    { name: "Sons of the American Legion Post 1720", level: "Bronze" },
    { name: "Donald and Jane Beechler", level: "Bronze" },
    { name: "Lor-Rob Dairy Farm", level: "Bronze" },
    { name: "Janet Romesser", level: "Bronze" },
    { name: "Herbert Hammond", level: "Bronze" },
    { name: "William J. Renz Jr.", level: "Bronze" },
    { name: "John E. Jaszko", level: "Bronze" },
    { name: "Jeff & Elizabeth Clark", level: "Bronze" },
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
              {donors
                .filter((donor) => donor.level === "Platinum")
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((donor) => (
                  <li key={donor.name}>{donor.name}</li>
                ))}
            </ul>
          </TabsContent>
          <TabsContent value="gold">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {donors
                .filter((donor) => donor.level === "Gold")
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((donor) => (
                  <li key={donor.name}>{donor.name}</li>
                ))}
            </ul>
          </TabsContent>
          <TabsContent value="silver">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {donors
                .filter((donor) => donor.level === "Silver")
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((donor) => (
                  <li key={donor.name}>{donor.name}</li>
                ))}
            </ul>
          </TabsContent>
          <TabsContent value="bronze">
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {donors
                .filter((donor) => donor.level === "Bronze")
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((donor) => (
                  <li key={donor.name}>{donor.name}</li>
                ))}
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
