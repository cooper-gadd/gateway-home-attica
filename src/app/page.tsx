import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          At Gateway Home, we pride ourselves on delivering comprehensive care
          through our team of trained, licensed, professional medical support
          staff. This care is further enhanced by the dedication of our trained
          volunteers. We are equipped to provide support for up to two residents
          and their families simultaneously. Our referrals come from a variety
          of sources, including medical professionals, clergy, family, friends,
          and other healthcare agencies. Our care extends beyond the physical,
          as we also cater to the spiritual and emotional needs of our
          residents, ensuring a holistic approach to their well-being.
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Angel Supporters</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Gateway Home Comfort Care’s 2023 Annual Campaign Angel Supporters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="platinum">
            <TabsList>
              <TabsTrigger value="platinum" className="text-gray-300">
                Platinum
              </TabsTrigger>
              <TabsTrigger value="gold" className="text-yellow-400">
                Gold
              </TabsTrigger>
              <TabsTrigger value="silver" className="text-gray-200">
                Silver
              </TabsTrigger>
              <TabsTrigger value="bronze" className="text-amber-600">
                Bronze
              </TabsTrigger>
            </TabsList>
            <TabsContent value="platinum">
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Attica Package Company, Inc.</li>
                <li>Attica Lions Club</li>
                <li>Louise M Schiltz</li>
                <li>Donna Ferry</li>
              </ul>
            </TabsContent>
            <TabsContent value="gold">
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
            </TabsContent>
            <TabsContent value="silver">
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
            </TabsContent>
            <TabsContent value="bronze">
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle> Frequently Asked Questions </CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            We understand that you may have questions. We have compiled a list
            of frequently asked questions to help you better understand Gateway
            Home.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What are Palliative Care, Hospice and Comfort Care?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Palliative care can be appropriate at any stage of an illness.
                  It is a holistic approach to health care that goes beyond the
                  physical wellbeing of the resident, attending to their
                  spiritual, emotional and psychological needs. Hospice care is
                  a specialized form of palliative care designed to support
                  those in the final stages of a terminal illness. Comfort Care
                  is available during the last 90 days of someone’s life with
                  the resident and family agreeing there will be no heroic
                  measures taken to prolong life.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How is Gateway Home Funded?</AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Our services are provided free-of-charge to our home’s
                  residents. We are an independent, not-for-profit organization
                  and money to run Gateway Home is generated entirely through
                  community support, donations and grants. Our annual operating
                  expenses must be covered by monies received from memorials,
                  honorary donations, bequests, donations from people,
                  corporations, service organizations, plus grants and
                  fund-raising events.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  A nonprofit grant is financial support given to nonprofits by
                  corporations, foundations, or government agencies. They are
                  beneficial for nonprofits because they provide the opportunity
                  for additional funding that doesn’t need to be paid back and
                  they increase awareness of their organization. Grants have
                  also allowed us to make some improvements to our property that
                  wouldn’t have been possible without the additional funding.
                  Gateway Home relies solely on fundraising, memorials,
                  donations, and grants for funding. With operating expenses
                  exceeding $200k per year a lot of hard work and research is
                  done to apply for grants in hopes of receiving funds to help
                  keep our doors open. Gateway Home has been fortunate enough to
                  be granted several grants over the years that allowed the
                  doors to open and that have helped make it possible for us to
                  serve our community.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  We have been generously supported by various grant sources.
                  The <strong>Hope</strong> grant was used for home improvement.
                  The <strong>Conable Family Foundation</strong> and the{" "}
                  <strong>East Hill Foundation</strong> grants were utilized for
                  renovations. The <strong>William F. Thiel Trust</strong>{" "}
                  provided us with funds for medical equipment. The{" "}
                  <strong>Ralph C. Wilson Legacy Funds</strong> were used for
                  caregiver training and operating expenses.{" "}
                  <strong>Home Depot</strong> provided us with a grant for an
                  ADA compliant ramp. The{" "}
                  <strong>Garman Family Foundation</strong> funded a generator
                  for us. <strong>United Way</strong> contributed to our
                  operating expenses, and the{" "}
                  <strong>Odd Fellow & Rebekah</strong> grant was used for
                  nurses and care aid payroll. These grants have played a
                  significant role in helping us continue to fulfill our
                  mission.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you receive help from the government?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  We do not receive any financial funding from the government or
                  from insurance companies.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Who provides direct care at Gateway Home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  All care given at Gateway Home is provided by volunteers or
                  staff members who are trained to provide the best possible
                  care. We change caregivers every four hours during our day and
                  evening shifts so our caregivers come in renewed and
                  refreshed. Our overnight shift from 11-7 is usually manned by
                  one caregiver. Interested individuals do not need to have any
                  healthcare experience to become a volunteer – just an open
                  heart and a willingness to learn how to care for another
                  person. We help volunteers do the rest!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Who is eligible for admission to Gateway Home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Admission to Gateway Home is based on an assessment of those
                  who have the greatest need and the fewest options. A physician
                  must have determined that the person has a terminal illness
                  and is in their last three months of life. We are not able to
                  accept every person who is referred and can only care for up
                  to two dying residents at one time. Each case is evaluated
                  carefully by our Assessment Caregivers and Director of
                  Resident Care and priority is given to those people who have
                  the greatest need at the time; i.e., those who are at home
                  with limited adequate care giving support. Other
                  considerations involve the complexity of nursing care that
                  some people may require.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  We do not use intravenous fluids, feeding tubes or CPR
                  (resuscitation). It ensures that comfort care, pain
                  management, and symptom control will accompany a natural death
                  process, in an atmosphere filled with love. It is not uncommon
                  to have multiple people waiting for the next available bed.
                  When a bed is available, our Assessment team evaluates all who
                  are waiting, and choose the one who has the greatest need; not
                  who is next on the list for admission.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What if my loved one who is residing at Gateway Home lives
                beyond three months?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  At times there may be remission of a person’s disease, and it
                  may be necessary to be discharged from Gateway Home to an
                  alternative placement: such as home, or moving in with a
                  family member, or to a Nursing home. It’s amazing to see, and
                  such a blessing, that with some conditions, proper symptom
                  control management, socialization and tender loving care,
                  people do go into remission and live longer than what was
                  expected. The staff at Gateway Home will work closely with the
                  Hospice team and family to determine the best alternative
                  placement for our resident. Residents may return to Gateway
                  Home and die peacefully when that time is appropriate and a
                  bed is available.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Are volunteer opportunities available?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  YES! In fact, we could not operate without volunteers. There
                  are many volunteer roles, so please consider your individual
                  gifts and how you might utilize those to support the Gateway
                  Home. The greatest need is resident care volunteers. If you
                  prefer not to work with residents, there are numerous other
                  opportunities available.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
