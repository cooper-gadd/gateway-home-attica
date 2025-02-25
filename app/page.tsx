import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Video } from "@/components/video";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                Gateway Home
              </h2>
              <p className="text-xl text-center max-w-3xl mx-auto mb-8">
                A place of comfort, care, and compassion
              </p>
              <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden">
                <Image
                  src="/front.jpg"
                  alt="Gateway Home Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-8">
                Our Mission
              </h2>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg mb-6">
                  Gateway Home is established to give comfort care to people who
                  are medically deemed to be in their last stages of life (three
                  months or less). Our organization will provide both medical
                  and spiritual care to support the residents as they pass from
                  this life to the next.
                </p>
                <p className="text-lg mb-6">
                  Gateway Home staff and volunteers are committed to provide
                  dignified care, comfort, and support for our residents and
                  their families. Gateway Home is a nonprofit organization, and
                  does not charge for services provided.
                </p>
                <p className="text-lg mb-6">
                  Funding is accomplished through donations, bequests, and
                  community support. Admission is based solely on need.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">
                    Our Approach to Resident Care
                  </h2>
                  <p className="text-lg mb-6">
                    Gateway Home is an empathetic and loving comfort care home
                    for the terminally ill. It is a home-like setting that
                    offers free comfort care for those in their last three
                    months of a terminal illness. Gateway Home&apos;s staff and
                    trained volunteers are able to care for two residents at a
                    time, 24 hours a day, 365 days a year.
                  </p>
                  <p className="text-lg mb-6">
                    Our primary goal is to provide comfort care, symptom control
                    and pain management for our residents, as well as to be a
                    source of respite care for the families and friends.
                    Hands-on resident care is provided around the clock, along
                    with meals, laundry, companionship, as well as emotional,
                    and spiritual support. Comfort care honors the well-being of
                    every person and respects the dignity of human life.
                  </p>
                  <p className="text-lg mb-6">
                    Admission to Gateway Home is based solely on need,
                    regardless of age, sex, race, religion or other distinctions
                    . Referrals come from several sources: Hospice, health care
                    agencies, hospitals, physicians, social workers, clergy,
                    family, friends or the person themselves. Priority is given
                    to those who cannot receive adequate care at home.
                  </p>
                  <p className="text-lg mb-6">
                    There is no cost to the families that we serve, nor do we
                    receive any reimbursement from insurance companies. Gateway
                    Home is funded solely by donations, fundraising, memorial
                    contributions and through the generosity of our community.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/cake.jpg"
                    alt="Resident Care"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">
                    Living at Gateway Home
                  </h2>
                  <p className="text-lg mb-6">
                    Gateway Home is a place where residents can live out their
                    final days in comfort and dignity. Our staff and volunteers
                    are dedicated to providing the highest quality care to our
                    residents, and we strive to create a warm and welcoming
                    environment where residents can feel at home. We offer a
                    range of services to meet the unique needs of each resident,
                    including medical care, emotional support, and spiritual
                    care. Our goal is to create a sense of community and
                    belonging for all who live here, and we are committed to
                    providing personalized care that meets the individual needs
                    of each resident.
                  </p>
                  <p className="text-lg mb-6">
                    At Gateway Home, we believe that every person deserves to
                    live their final days with dignity and respect. We are
                    dedicated to providing compassionate care to our residents
                    and their families, and we strive to create a peaceful and
                    supportive environment where residents can feel safe and
                    cared for. Our staff and volunteers are committed to
                    providing the highest quality care to our residents, and we
                    work closely with families to ensure that their loved ones
                    receive the care and support they need. We are proud to be a
                    part of the Gateway Home family, and we look forward to
                    welcoming you to our community.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <Image
                      src="/resident-room.jpg"
                      alt="Volunteer helping a resident"
                      width={300}
                      height={300}
                      className="rounded-lg w-full h-full object-cover"
                    />
                    <Image
                      src="/kitchen.jpg"
                      alt="Volunteer gardening"
                      width={300}
                      height={300}
                      className="rounded-lg w-full h-full object-cover"
                    />
                    <Image
                      src="/resident-room-2.jpeg"
                      alt="Volunteer organizing an activity"
                      width={300}
                      height={300}
                      className="rounded-lg w-full h-full object-cover"
                    />
                    <Image
                      src="/living-room.jpg"
                      alt="Volunteer reading to residents"
                      width={300}
                      height={300}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                Experience Our Compassionate Care
              </h2>
              <p className="text-xl text-center max-w-3xl mx-auto mb-8">
                Hear from families about the quality of care.
              </p>
              <Video />
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                Get Involved
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>Volunteer with Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Make a difference in the lives of residents by
                      volunteering your time and skills.
                    </p>
                    <Button asChild>
                      <Link href="/volunteer">Learn About Volunteering</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>Support Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Your donations help us continue providing exceptional care
                      to our residents.
                    </p>
                    <Button asChild>
                      <Link href="/donate">Make a Donation</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-muted/40">
                  <CardHeader>
                    <CardTitle>Join Our Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      We&apos;re always looking for compassionate professionals
                      to join our team.
                    </p>
                    <Button asChild>
                      <Link href="/careers">View Open Positions</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-8">
                Our Generous Donors
              </h2>

              <div className="grid grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto">
                {/* Platinum Donors - Full width at top with names in a row */}
                <Card className="bg-muted/40">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-center">Platinum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="p-2 text-center">Attica Lions Club</div>
                      <div className="p-2 text-center">Attica Package Company, Inc.</div>
                      <div className="p-2 text-center">Donna Ferry</div>
                      <div className="p-2 text-center">Louise M Schiltz</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Gold and Silver Donors - Side by side in middle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Gold Donors */}
                  <Card className="bg-muted/40">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-center">Gold</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="p-2 text-center">Advanced Dairy Services, Inc.</li>
                        <li className="p-2 text-center">Doug & Rosie Domes</li>
                        <li className="p-2 text-center">Dr. Joseph & Marcy Craddock</li>
                        <li className="p-2 text-center">James & Jane Frankenberger</li>
                        <li className="p-2 text-center">L Toal Plumbing, LLC</li>
                        <li className="p-2 text-center">Marley Funeral Home LLC</li>
                        <li className="p-2 text-center">Providence Fellowship</li>
                        <li className="p-2 text-center">Ralph A. Janes</li>
                        <li className="p-2 text-center">Robinson & Hackemer Funeral Home</li>
                        <li className="p-2 text-center">S.J.F. Construction, Inc</li>
                        <li className="p-2 text-center">Shirley Teachen</li>
                        <li className="p-2 text-center">Todd & Brittany Gadd</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Silver Donors */}
                  <Card className="bg-muted/40">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold text-center">Silver</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="p-2 text-center">Connie Tartick</li>
                        <li className="p-2 text-center">County Line Stone Co., Inc.</li>
                        <li className="p-2 text-center">Durin Rogers & Paula Campbell</li>
                        <li className="p-2 text-center">Harding&apos;s Attica Furniture</li>
                        <li className="p-2 text-center">Joseph & Carol Pilc</li>
                        <li className="p-2 text-center">Michael & Marybeth Whiting</li>
                        <li className="p-2 text-center">Paul & Diane Luderman</li>
                        <li className="p-2 text-center">Ron & Peach Merrill</li>
                        <li className="p-2 text-center">Sandy Ewert</li>
                        <li className="p-2 text-center">Shirley F. Peters</li>
                        <li className="p-2 text-center">Zehler Excavating, LLC</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Bronze Donors - Full width at bottom with multi-column layout */}
                <Card className="bg-muted/40">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-center">Bronze</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2">
                        <div className="p-2 text-center">Alan & Kelly Heizmann</div>
                        <div className="p-2 text-center">Alfonso J. Ficarella</div>
                        <div className="p-2 text-center">Andrew & Carla Gasiewicz</div>
                        <div className="p-2 text-center">Angela Milillo & Doug Patti</div>
                        <div className="p-2 text-center">Ann & Deane Foster</div>
                        <div className="p-2 text-center">Anna Nutty</div>
                        <div className="p-2 text-center">Arch & Peggy Snyder</div>
                        <div className="p-2 text-center">Barbara C. Schiltz</div>
                        <div className="p-2 text-center">Barbara Myers</div>
                        <div className="p-2 text-center">Bernard & Janet Meinweiser</div>
                        <div className="p-2 text-center">Brennan & Shelly Burdett</div>
                        <div className="p-2 text-center">Can Can Redemption</div>
                        <div className="p-2 text-center">Charles & J. Terri Woodruff</div>
                        <div className="p-2 text-center">Clarence & Mary Weaver</div>
                        <div className="p-2 text-center">Connie Holt</div>
                        <div className="p-2 text-center">Cooke & Steffan - Mr. Tom Steffan</div>
                        <div className="p-2 text-center">Daniel & Barbara Krazmien</div>
                        <div className="p-2 text-center">Daniel & Jean Burling</div>
                        <div className="p-2 text-center">Daniel & Shannon Ford</div>
                        <div className="p-2 text-center">Daniel & Susan Boss</div>
                        <div className="p-2 text-center">Dave & Joanne Thornton</div>
                        <div className="p-2 text-center">David & Connie Rethlake</div>
                        <div className="p-2 text-center">David & Judith Brockner</div>
                        <div className="p-2 text-center">Dennis & Carol Piechowiak</div>
                        <div className="p-2 text-center">Diane Phelps</div>
                        <div className="p-2 text-center">Don & Jude Carpenter</div>
                        <div className="p-2 text-center">Don & Patti Almeter</div>
                        <div className="p-2 text-center">Donald & Linda Schmidt</div>
                        <div className="p-2 text-center">Donald and Jane Beechler</div>
                        <div className="p-2 text-center">Empire Access</div>
                        <div className="p-2 text-center">Gary & Carol Barrow</div>
                        <div className="p-2 text-center">Gary & Karen Beideck</div>
                        <div className="p-2 text-center">Gary & Renee Hanley</div>
                        <div className="p-2 text-center">Gerald & Deborah Landowski</div>
                        <div className="p-2 text-center">Gina M. Morrison</div>
                        <div className="p-2 text-center">Grace Strollo</div>
                        <div className="p-2 text-center">Helen Leonard</div>
                        <div className="p-2 text-center">Helen Nichols</div>
                        <div className="p-2 text-center">Herbert Hammond</div>
                        <div className="p-2 text-center">Howard & Muriel Herman</div>
                        <div className="p-2 text-center">J & S Agen, Inc. - Design Art</div>
                        <div className="p-2 text-center">Janet Romesser</div>
                        <div className="p-2 text-center">Jeannie K. Bates</div>
                        <div className="p-2 text-center">Jerry & Sue Elmore</div>
                        <div className="p-2 text-center">Jerilyn Clark</div>
                        <div className="p-2 text-center">John E. Jaszko</div>
                        <div className="p-2 text-center">Joseph & Laura Schmieder</div>
                        <div className="p-2 text-center">Kelly Nelson</div>
                        <div className="p-2 text-center">Kevin & Lisa Cochrane</div>
                        <div className="p-2 text-center">Kirk & Nina Reisdorf</div>
                        <div className="p-2 text-center">Laurie Valenti</div>
                        <div className="p-2 text-center">Logel Appliance, Inc.</div>
                        <div className="p-2 text-center">Lor-Rob Dairy Farm</div>
                        <div className="p-2 text-center">Lynn & Linda Camp</div>
                        <div className="p-2 text-center">Lynn Herman</div>
                        <div className="p-2 text-center">Martha Whittington</div>
                        <div className="p-2 text-center">Matthew & Mary Mest</div>
                        <div className="p-2 text-center">Melissa Spink</div>
                        <div className="p-2 text-center">Michael & Peggy Morrissey</div>
                        <div className="p-2 text-center">Mike & Karen Shadbolt</div>
                        <div className="p-2 text-center">M&M Meats</div>
                        <div className="p-2 text-center">Norb & Marilyn Fuest</div>
                        <div className="p-2 text-center">Norma Gerhardt</div>
                        <div className="p-2 text-center">Orangeville Immanuel United Church of Chr</div>
                        <div className="p-2 text-center">Pat Forsha Truck and Auto Collision, Inc.</div>
                        <div className="p-2 text-center">Patricia Herman</div>
                        <div className="p-2 text-center">Paul & Carol George</div>
                        <div className="p-2 text-center">Paul & Maryann Simonsen</div>
                        <div className="p-2 text-center">Peter & Dawn Mark</div>
                        <div className="p-2 text-center">Randy & Mary Szczesniak</div>
                        <div className="p-2 text-center">Richard & Linda VanDette</div>
                        <div className="p-2 text-center">Richard H. & Maria Walczak</div>
                        <div className="p-2 text-center">Robert & Barbara Peters</div>
                        <div className="p-2 text-center">Robert & Eileen Disinger</div>
                        <div className="p-2 text-center">Robert & Maureen Kirby</div>
                        <div className="p-2 text-center">Robert A. Koerner Construction</div>
                        <div className="p-2 text-center">Ronald J. Demers</div>
                        <div className="p-2 text-center">Rose Bartz</div>
                        <div className="p-2 text-center">Sandra C. Green</div>
                        <div className="p-2 text-center">Sandra Urquhart</div>
                        <div className="p-2 text-center">Sons of the American Legion Post 1720</div>
                        <div className="p-2 text-center">Springtyme Landscaping & Design Inc.</div>
                        <div className="p-2 text-center">Stuart & Janis Hempel</div>
                        <div className="p-2 text-center">Susan Grew</div>
                        <div className="p-2 text-center">The Greenery</div>
                        <div className="p-2 text-center">Tim & Louise Royce</div>
                        <div className="p-2 text-center">Timothy J. & Donna Embt</div>
                        <div className="p-2 text-center">Toshmin D. Duncan</div>
                        <div className="p-2 text-center">Virginia & Burt Fugle</div>
                        <div className="p-2 text-center">Warsaw Pennysaver</div>
                        <div className="p-2 text-center">Wilkins Insurance Agency, Inc</div>
                        <div className="p-2 text-center">William Errington</div>
                        <div className="p-2 text-center">William J. Renz Jr.</div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion
                type="single"
                collapsible
                className="max-w-2xl mx-auto"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What are Palliative Care, Hospice and Comfort Care?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Palliative care can be appropriate at any stage of an
                      illness. It is a holistic approach to health care that
                      goes beyond the physical wellbeing of the resident,
                      attending to their spiritual, emotional and psychological
                      needs. Hospice care is a specialized form of palliative
                      care designed to support those in the final stages of a
                      terminal illness. Comfort Care is available during the
                      last 90 days of someone&apos;s life with the resident and
                      family agreeing there will be no heroic measures taken to
                      prolong life.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How is Gateway Home Funded?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Our services are provided free-of-charge to our home&apos;s
                      residents. We are an independent, not-for-profit
                      organization and money to run Gateway Home is generated
                      entirely through community support, donations and grants.
                      Our annual operating expenses must be covered by monies
                      received from memorials, honorary donations, bequests,
                      donations from people, corporations, service
                      organizations, plus grants and fund-raising events.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      A nonprofit grant is financial support given to nonprofits
                      by corporations, foundations, or government agencies. They
                      are beneficial for nonprofits because they provide the
                      opportunity for additional funding that doesn&apos;t need to be
                      paid back and they increase awareness of their
                      organization. Grants have also allowed us to make some
                      improvements to our property that wouldn&apos;t have been
                      possible without the additional funding. Gateway Home
                      relies solely on fundraising, memorials, donations, and
                      grants for funding. With operating expenses exceeding
                      $200k per year a lot of hard work and research is done to
                      apply for grants in hopes of receiving funds to help keep
                      our doors open. Gateway Home has been fortunate enough to
                      be granted several grants over the years that allowed the
                      doors to open and that have helped make it possible for us
                      to serve our community.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      We have been generously supported by various grant
                      sources. The <strong>Hope</strong> grant was used for home
                      improvement. The{" "}
                      <strong>Conable Family Foundation</strong> and the{" "}
                      <strong>East Hill Foundation</strong> grants were utilized
                      for renovations. The{" "}
                      <strong>William F. Thiel Trust</strong> provided us with
                      funds for medical equipment. The{" "}
                      <strong>Ralph C. Wilson Legacy Funds</strong> were used
                      for caregiver training and operating expenses.{" "}
                      <strong>Home Depot</strong> provided us with a grant for
                      an ADA compliant ramp. The{" "}
                      <strong>Garman Family Foundation</strong> funded a
                      generator for us. <strong>United Way</strong> contributed
                      to our operating expenses, and the{" "}
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
                      We do not receive any financial funding from the
                      government or from insurance companies.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Who provides direct care at Gateway Home?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      All care given at Gateway Home is provided by volunteers
                      or staff members who are trained to provide the best
                      possible care. We change caregivers every two hours during
                      our day and evening shifts so our caregivers come in
                      renewed and refreshed. Our overnight shift from 10-8 is
                      usually manned by one caregiver. Interested individuals do
                      not need to have any healthcare experience to become a
                      volunteer – just an open heart and a willingness to learn
                      how to care for another person. We help volunteers do the
                      rest!
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Who is eligible for admission to Gateway Home?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Admission to Gateway Home is based on an assessment of
                      those who have the greatest need and the fewest options. A
                      physician must have determined that the person has a
                      terminal illness and is in their last three months of
                      life. We are not able to accept every person who is
                      referred and can only care for up to two residents at one
                      time. Each case is evaluated carefully by our Assessment
                      Caregivers and Director of Resident Care and priority is
                      given to those people who have the greatest need at the
                      time; i.e., those who are at home with limited adequate
                      care giving support. Other considerations involve the
                      complexity of nursing care that some people may require.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      We do not use intravenous fluids, feeding tubes or CPR
                      (resuscitation). It ensures that comfort care, pain
                      management, and symptom control will accompany a natural
                      death process, in an atmosphere filled with love. It is
                      not uncommon to have multiple people waiting for the next
                      available bed. When a bed is available, our Assessment
                      team evaluates all who are waiting, and choose the one who
                      has the greatest need; not who is next on the list for
                      admission.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    What is the process for admission to Gateway Home?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      The process for admission to Gateway Home begins with a
                      referral from a physician, social worker, family member,
                      friend, or other healthcare provider. Once a referral is
                      received, our Assessment team will contact the person who
                      is referred to schedule an assessment. The assessment is
                      done in the person&apos;s home or hospital room and takes about
                      an hour. During the assessment, the person&apos;s medical
                      history, current symptoms, and care needs are discussed.
                      The person&apos;s family members or caregivers are also
                      encouraged to participate in the assessment. After the
                      assessment is completed, the person is placed on our
                      waiting list. When a bed becomes available, the person is
                      admitted to Gateway Home. The person&apos;s family members or
                      caregivers are encouraged to visit Gateway Home before the
                      person is admitted to become familiar with the facility
                      and meet the staff. Once the person is admitted, the
                      person&apos;s family members or caregivers are encouraged to
                      visit as often as they like. We also encourage family
                      members or caregivers to participate in the person&apos;s care
                      as much as they are able. We believe that family members
                      and caregivers are an important part of the person&apos;s care
                      team and we welcome their involvement. We also provide
                      support and education to family members and caregivers to
                      help them care for their loved one. We believe that
                      involving family members and caregivers in the person&apos;s
                      care helps to improve the person&apos;s quality of life and
                      provides comfort and support to the person and their
                      family members or caregivers. We also provide support and
                      education to family members and caregivers to help them
                      care for their loved one. We believe that involving family
                      members and caregivers in the person&apos;s care helps to
                      improve the person&apos;s quality of life and provides comfort
                      and support to the person and their family members or
                      caregivers.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    What items should my loved one bring to Gateway Home?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      For essential documents, please bring current medications,
                      insurance and Social Security cards, and DNR, Health Care
                      Proxy, and MOLST forms.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Personal care items should include comfortable clothing
                      such as pajamas and undergarments, as well as favorite
                      blankets and pillows.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      For comfort and entertainment, we recommend bringing
                      special pictures and photos, favorite foods, snacks, and
                      drinks, as well as music/media players and headphones.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      Please also bring contact information including addresses,
                      phone numbers, and emails for family and friends.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>
                    What if my loved one who is residing at Gateway Home lives
                    beyond three months?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      At times there may be remission of a person&apos;s disease, and
                      it may be necessary to be discharged from Gateway Home to
                      an alternative placement: such as home, or moving in with
                      a family member, or to a Nursing home. It&apos;s amazing to
                      see, and such a blessing, that with some conditions,
                      proper symptom control management, socialization and
                      tender loving care, people do go into remission and live
                      longer than what was expected. The staff at Gateway Home
                      will work closely with the Hospice team and family to
                      determine the best alternative placement for our resident.
                      Residents may return to Gateway Home and die peacefully
                      when that time is appropriate and a bed is available.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>
                    Are volunteer opportunities available?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                      YES! In fact, we could not operate without volunteers.
                      There are many volunteer roles, so please consider your
                      individual gifts and how you might utilize those to
                      support the Gateway Home. The greatest need is resident
                      care volunteers. If you prefer not to work with residents,
                      there are numerous other opportunities available.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
