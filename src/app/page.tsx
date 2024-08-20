import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Gateway Home Attica</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Mission Statement
          </CardDescription>
        </CardHeader>
        <CardContent>
          Gateway Home is established to give “comfort care” to people who are
          medically determined to be in their last stages of life (three months
          or less). Our organization will provide both medical and spiritual
          care to support the residents as they pass from this life to the next.
          Gateway Home staff and volunteers are committed to provide dignified
          care, comfort, and support for our residents and their families.
          Gateway Home is a nonprofit organization, and does not charge for
          services provided. Funding is accomplished through donations,
          bequests, and community support. Admission is based solely on need.
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Resident Care</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            All the needs of the resident are provided for 24 hours a day, 7
            days per week.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The care provided is through trained, licensed, professional,
              medical support staff and is supplemented with trained dedicated
              volunteers.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Gateway Home provides support for up to two residents and their
              families at a time.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Referrals are through medical professionals, clergy, family,
              friends or other health care agencies.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Care is provided in the form of physical, spiritual and emotional
              needs for the residents.
            </p>
          </div>
        </CardContent>
      </Card>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-gray-300">
                Platinum Angel Supporters
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Gateway Home Comfort Care’s 2023 Annual Campaign Angel
                Supporters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <li>Attica Package Company, Inc.</li>
              <li>Attica Lions Club</li>
              <li>Louise M Schiltz</li>
              <li>Donna Ferry</li>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-yellow-400">
                Gold Angel Supporters
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Gateway Home Comfort Care’s 2023 Annual Campaign Angel
                Supporters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Marley Funeral Home LLC</li>
                <li>Doug Domes</li>
                <li>Advanced Dairy Services, Inc.</li>
                <li>Todd Gadd</li>
                <li>L Toal Plumbing, LLC</li>
                <li>Robinson & Hackemer Funeral Home</li>
                <li>S.J.F. Construction, Inc</li>
                <li>Dr. Joseph & Marcy Craddock</li>
                <li>Shirley Teachen</li>
                <li>Providence Fellowship</li>
                <li>James & Jane Frankenberger</li>
                <li>Ralph A. Janes</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-gray-200">
                Silver Angel Supporters
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Gateway Home Comfort Care’s 2023 Annual Campaign Angel
                Supporters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Shirley F. Peters</li>
                <li>Michael & Marybeth Whiting</li>
                <li>Ron & Peach Merrill</li>
                <li>County Line Stone Co., Inc.</li>
                <li>Connie Tartick</li>
                <li>Sandy Ewert</li>
                <li>Paul & Diane Luderman</li>
                <li>Zehler Excavating, LLC</li>
                <li>Durin Rogers & Paula Campbell</li>
                <li>Harding&apos;s Attica Furniture</li>
                <li>Joseph & Carol Pilc</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-amber-600">
                Bronze Angel Supporters
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Gateway Home Comfort Care’s 2023 Annual Campaign Angel
                Supporters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Jeannie K. Bates</li>
                <li>Richard & Linda VanDette</li>
                <li>Gary & Renee Hanley</li>
                <li>Martha Whittington</li>
                <li>Melissa Spink</li>
                <li>Laurie Valenti</li>
                <li>Richard H. & Maria Walczak</li>
                <li>Clarence & Mary Weaver</li>
                <li>Ronald J. Demers</li>
                <li>Kevin & Lisa Cochrane</li>
                <li>Connie Holt</li>
                <li>Lynn & Linda Camp</li>
                <li>Stuart & Janis Hempel</li>
                <li>David & Judith Brockner</li>
                <li>Helen Leonard</li>
                <li>Paul & Maryann Simonsen</li>
                <li>Diane Phelps</li>
                <li>Daniel & Barbara Krazmien</li>
                <li>Patricia Herman</li>
                <li>Warsaw Pennysaver</li>
                <li>Barbara C. Schiltz</li>
                <li>Helen Nichols</li>
                <li>Joseph & Laura Schmieder</li>
                <li>Jerilyn Clark</li>
                <li>Brennan & Shelly Burdett</li>
                <li>Andrew & Carla Gasiewicz</li>
                <li>Ann & Deane Foster</li>
                <li>Gary & Carol Barrow</li>
                <li>Bernard & Janet Meinweiser</li>
                <li>Barbara Myers</li>
                <li>Alan & Kelly Heizmann</li>
                <li>Timothy J. & Donna Embt</li>
                <li>Cooke & Steffan - Mr. Tom Steffan</li>
                <li>Laura Feger</li>
                <li>Mike & Karen Shadbolt</li>
                <li>Daniel & Shannon Ford</li>
                <li>Howard & Muriel Herman</li>
                <li>Angela Milillo & Doug Patti</li>
                <li>Sandra C. Green</li>
                <li>Donald & Linda Schmidt</li>
                <li>Jerry & Sue Elmore</li>
                <li>Orangeville Immanuel United Church of Chr</li>
                <li>Anna Nutty</li>
                <li>Can Can Redemption</li>
                <li>Robert & Eileen Disinger</li>
                <li>Rose Bartz</li>
                <li>Pat Forsha Truck and Auto Collision, Inc.</li>
                <li>Gary & Karen Beideck</li>
                <li>Virginia & Burt Fugle</li>
                <li>Susan Grew</li>
                <li>Randy & Mary Szczesniak</li>
                <li>Empire Access</li>
                <li>The Greenery</li>
                <li>Matthew & Mary Mest</li>
                <li>M&M Meats</li>
                <li>J & S Agen, Inc. - Design Art</li>
                <li>Dennis & Carol Piechowiak</li>
                <li>Gina M. Morrison</li>
                <li>Toshmin D. Duncan</li>
                <li>Kelly Nelson</li>
                <li>Paul & Carol George</li>
                <li>Robert & Barbara Peters</li>
                <li>Don & Patti Almeter</li>
                <li>David & Connie Rethlake</li>
                <li>Sandra Urquhart</li>
                <li>Robert & Maureen Kirby</li>
                <li>Daniel & Susan Boss</li>
                <li>Robert A. Koerner Construction</li>
                <li>Arch & Peggy Snyder</li>
                <li>Charles & J. Terri Woodruff</li>
                <li>Daniel & Jean Burling</li>
                <li>Michael & Peggy Morrissey</li>
                <li>Springtyme Landscaping & Design Inc.</li>
                <li>Tim & Louise Royce</li>
                <li>Dave & Joanne Thornton</li>
                <li>Grace Strollo</li>
                <li>Dan & Brenda Miller</li>
                <li>Jeff & Elizabeth Clark</li>
                <li>Wilkins Insurance Agency, Inc</li>
                <li>Norb & Marilyn Fuest</li>
                <li>Logel Appliance, Inc.</li>
                <li>Don & Jude Carpenter</li>
                <li>Norma Gerhardt</li>
                <li>Gerald & Deborah Landowski</li>
                <li>Alfonso J. Ficarella</li>
                <li>Lynn Herman</li>
                <li>Kirk & Nina Reisdorf</li>
                <li>William Errington</li>
                <li>Peter & Dawn Mark</li>
                <li>Sons of the American Legion Post 1720</li>
                <li>Donald and Jane Beechler</li>
                <li>Lor-Rob Dairy Farm</li>
                <li>Janet Romesser</li>
                <li>Herbert Hammond</li>
                <li>William J. Renz Jr.</li>
                <li>John E. Jaszko</li>
                <li>Jeff & Elizabeth Clark</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
