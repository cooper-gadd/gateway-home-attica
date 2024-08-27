import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { donors, leadership } from "./_data/data";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card id="mission-statement">
        <CardHeader className="pb-3">
          <CardTitle>Gateway Home</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Mission Statement
          </CardDescription>
        </CardHeader>
        <CardContent>
          Gateway Home is established to give comfort care to people who are
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
      <Card id="resident-care">
        <CardHeader className="pb-3">
          <CardTitle>Resident Care</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            All the needs of the resident are provided for 24 hours a day, 7
            days per week.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Gateway Home is an empathetic and loving comfort care home for the
            terminally ill. It is a home-like setting that offers free comfort
            care for those in their last three months of a terminal illness.
            Gateway Home’s staff and trained volunteers are able to care for two
            residents at a time, 24 hours a day, 365 days a year.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our primary goal is to provide comfort care, symptom control and
            pain management for our residents, as well as to be a source of
            respite care for the families and friends. Hands-on resident care is
            provided around the clock, along with meals, laundry, companionship,
            as well as emotional, and spiritual support. Comfort care honors the
            well-being of every person and respects the dignity of human life.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Admission to Gateway Home is based solely on need, regardless of
            age, sex, race, religion or other distinctions . Referrals come from
            several sources: Hospice, health care agencies, hospitals,
            physicians, social workers, clergy, family, friends or the person
            themselves. Priority is given to those who cannot receive adequate
            care at home.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            There is no cost to the families that we serve, nor do we receive
            any reimbursement from insurance companies. Gateway Home is funded
            solely by donations, fundraising, memorial contributions and through
            the generosity of our community.
          </p>
        </CardContent>
      </Card>
      <Card id="life-at-gateway-home">
        <CardHeader className="pb-3">
          <CardTitle>Life at Gateway Home</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Gateway Home is a place where residents can live out their final
            days in comfort and dignity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Gateway Home is a place where residents can live out their final
            days in comfort and dignity. Our staff and volunteers are dedicated
            to providing the highest quality care to our residents, and we
            strive to create a warm and welcoming environment where residents
            can feel at home. We offer a range of services to meet the unique
            needs of each resident, including medical care, emotional support,
            and spiritual care. Our goal is to create a sense of community and
            belonging for all who live here, and we are committed to providing
            personalized care that meets the individual needs of each resident.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            At Gateway Home, we believe that every person deserves to live their
            final days with dignity and respect. We are dedicated to providing
            compassionate care to our residents and their families, and we
            strive to create a peaceful and supportive environment where
            residents can feel safe and cared for. Our staff and volunteers are
            committed to providing the highest quality care to our residents,
            and we work closely with families to ensure that their loved ones
            receive the care and support they need. We are proud to be a part of
            the Gateway Home family, and we look forward to welcoming you to our
            community.
          </p>
        </CardContent>
      </Card>
      <Card id="history">
        <CardHeader className="pb-3">
          <CardTitle>History</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Gateway Home was founded a group of concerned citizens who
            recognized the need for a comfort care home in the community.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The home was established to provide free comfort care for those in
            their last three months of a terminal illness, and to offer support
            and respite care for their families. Since then, Gateway Home has
            cared for hundreds of residents and their families, providing
            compassionate care and support to those in need.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Gateway Home is a non-profit organization that relies on the
            generosity of the community to fund its operations. We are grateful
            for the support of our donors, volunteers, and community partners,
            who help us to provide comfort care to those in need. We are
            committed to continuing our mission of providing compassionate care
            to our residents and their families, and we look forward to serving
            the community for many years to come.
          </p>
        </CardContent>
      </Card>
      <Card id="donors">
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
      <Card id="leadership">
        <CardHeader className="pb-3">
          <CardTitle>Leadership</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Our leadership team is made up of dedicated individuals who are
            passionate about providing comfort and care to those in need.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4 2xl:grid-cols-8">
            {leadership.map((leader) => (
              <Card key={leader.id} className="bg-muted/20">
                <CardHeader>
                  <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      loading="eager"
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                  <CardTitle>{leader.name}</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                {leader.bio && (
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Read Bio</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            About {leader.name.split(" ")[0]}
                          </DialogTitle>
                          <DialogDescription>
                            {leader.bio.map((p) => (
                              <p
                                className="lg:leading-7 lg:[&:not(:first-child)]:mt-6"
                                key={p}
                              >
                                {p}
                              </p>
                            ))}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card id="faq">
        <CardHeader className="pb-3">
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            We understand that you may have questions. We have compiled a list
            of frequently asked questions to help you better understand Gateway
            Home.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-start">
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
              <AccordionTrigger className="text-start">
                How is Gateway Home Funded?
              </AccordionTrigger>
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
              <AccordionTrigger className="text-start">
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
              <AccordionTrigger className="text-start">
                Who provides direct care at Gateway Home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  All care given at Gateway Home is provided by volunteers or
                  staff members who are trained to provide the best possible
                  care. We change caregivers every two hours during our day and
                  evening shifts so our caregivers come in renewed and
                  refreshed. Our overnight shift from 10-8 is usually manned by
                  one caregiver. Interested individuals do not need to have any
                  healthcare experience to become a volunteer – just an open
                  heart and a willingness to learn how to care for another
                  person. We help volunteers do the rest!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-start">
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
              <AccordionTrigger className="text-start">
                What is the process for admission to Gateway Home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The process for admission to Gateway Home begins with a
                  referral from a physician, social worker, or other healthcare
                  provider. Once a referral is received, our Assessment team
                  will contact the person who is referred to schedule an
                  assessment. The assessment is done in the person’s home or
                  hospital room and takes about an hour. During the assessment,
                  the person’s medical history, current symptoms, and care needs
                  are discussed. The person’s family members or caregivers are
                  also encouraged to participate in the assessment. After the
                  assessment is completed, the person is placed on our waiting
                  list. When a bed becomes available, the person is admitted to
                  Gateway Home. The person’s family members or caregivers are
                  encouraged to visit Gateway Home before the person is admitted
                  to become familiar with the facility and meet the staff. Once
                  the person is admitted, the person’s family members or
                  caregivers are encouraged to visit as often as they like. We
                  also encourage family members or caregivers to participate in
                  the person’s care as much as they are able. We believe that
                  family members and caregivers are an important part of the
                  person’s care team and we welcome their involvement. We also
                  provide support and education to family members and caregivers
                  to help them care for their loved one. We believe that
                  involving family members and caregivers in the person’s care
                  helps to improve the person’s quality of life and provides
                  comfort and support to the person and their family members or
                  caregivers. We also provide support and education to family
                  members and caregivers to help them care for their loved one.
                  We believe that involving family members and caregivers in the
                  person’s care helps to improve the person’s quality of life
                  and provides comfort and support to the person and their
                  family members or caregivers.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-start">
                What items should my loved one bring to Gateway Home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  When a person is admitted to Gateway Home, they are encouraged
                  to bring personal items that will make them feel more at home.
                  We encourage residents to bring their own clothing, personal
                  care items, and any other items that will make them feel more
                  comfortable. We provide all the necessary medical equipment
                  and supplies, as well as snacks. We also provide all the
                  necessary linens and towels. We have a washer and dryer on
                  site for residents to use. We also have a small library of
                  books, puzzles, and games for residents to enjoy. We have a
                  beautiful garden and patio area for residents to enjoy the
                  outdoors. We also have a large living room with a fireplace
                  and a television for residents to enjoy. We encourage
                  residents to bring their own personal items to make their stay
                  more comfortable. We also encourage family members to visit
                  often and to participate in the care of their loved one. We
                  have a family room with a kitchenette and a dining area for
                  family members to use. We also have a small chapel for
                  residents and family members to use for prayer and reflection.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-start">
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
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-start">
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
