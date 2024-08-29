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
import Image from "next/image";
import Link from "next/link";
import { donors, leadership, socials } from "./_data/data";
import {
  Bed,
  BookOpen,
  CircleHelp,
  Clock,
  Coins,
  Contact,
  DoorOpen,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  HomeIcon,
  Mail,
  Newspaper,
  RotateCw,
  User,
  Users,
} from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card id="mission-statement">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Gateway Home</CardTitle>
            <HomeIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Providing free, dignified care and spiritual support for those in
            their final stages of life.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
            <Image
              src={`images/placeholder.svg`}
              alt={`placeholder`}
              fill
              loading="eager"
              className="rounded-md object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </AspectRatio>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Compassionate End-of-Life Care</CardTitle>
                  <HeartHandshake className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Providing free, dignified care and spiritual support for
                  individuals in their final months of life.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Community-Funded Support</CardTitle>
                  <HandHeart className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Operations are funded entirely through donations, bequests,
                  and community generosity.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Admission Based on Need</CardTitle>
                  <DoorOpen className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Admission is determined solely by need, ensuring care for
                  those most vulnerable.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={"/blog/mission-statement"}>Lean More</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card id="resident-care">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Resident Care</CardTitle>
            <HeartPulse className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Offering full-time care, emotional support, and a home-like
            environment for terminally ill residents.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
            <Image
              src={`images/placeholder.svg`}
              alt={`placeholder`}
              fill
              loading="eager"
              className="rounded-md object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </AspectRatio>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>24/7 Care</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Around-the-clock care for residents, including pain
                  management, meals, and companionship.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Family Respite</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Offering emotional and spiritual support to both residents and
                  their families.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>No Financial Burden</CardTitle>
                  <Coins className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Care is provided free of charge, with no insurance
                  involvement.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={"/blog/resident-care"}>Lean More</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card id="life-at-gateway">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Life at Gateway Home</CardTitle>
            <Bed className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Creating a welcoming environment where residents receive
            personalized, compassionate care.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
            <Image
              src={`images/placeholder.svg`}
              alt={`placeholder`}
              fill
              loading="eager"
              className="rounded-md object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </AspectRatio>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Homelike Setting</CardTitle>
                  <HomeIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  A warm, welcoming environment where residents feel at home in
                  their final days.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Individualized Support</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Personalized care tailored to the unique needs of each
                  resident.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Sense of Belonging</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Creating a community atmosphere where residents and families
                  feel connected.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={"/blog/life-at-gateway-home"}>Lean More</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card id="history">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>History</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Learn about how we providing free comfort care to those in need,
            supported by our community.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <AspectRatio ratio={16 / 9} className="rounded-md bg-muted">
            <Image
              src={`images/placeholder.svg`}
              alt={`placeholder`}
              fill
              loading="eager"
              className="rounded-md object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </AspectRatio>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Opened 2019</CardTitle>
                  <DoorOpen className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Serving the terminally ill with free comfort care since our
                  opening.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Community-Driven</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Powered by the dedication of donors, volunteers, and community
                  partners.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-muted/20">
              <CardHeader className="pb-3">
                <div className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>Ongoing Mission</CardTitle>
                  <RotateCw className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Continuing our mission to provide compassionate care for years
                  to come.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={"/blog/history"}>Lean More</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card id="donors">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Donors</CardTitle>
            <HandHeart className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Gateway Home is made possible by the generosity of our donors.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
            {donors
              .filter((donor) => donor.level === "Platinum")
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((donor) => (
                <Card key={donor.name} className="bg-muted/20">
                  <CardHeader className="pb-3">
                    <CardTitle>{donor.name}</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {donor.level}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
          </div>
          <InfiniteMovingCards speed="ultra-slow">
            <div className="grid auto-cols-max grid-flow-col gap-4 md:gap-8">
              {donors
                .filter((donor) => donor.level !== "Platinum")
                .map((donor) => (
                  <Card key={donor.name} className="bg-muted/20">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {donor.name}
                      </CardTitle>
                      <CardDescription className="max-w-lg text-balance leading-relaxed">
                        {donor.level}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
            </div>
          </InfiniteMovingCards>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href={"/blog/donors"}>Lean More</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card id="leadership">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Leadership</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Our leadership team is made up of dedicated individuals who are
            passionate about providing comfort and care to those in need.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
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
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CircleHelp className="h-4 w-4 text-muted-foreground" />
          </div>
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
                  referral from a physician, social worker, family member,
                  friend, or other healthcare provider. Once a referral is
                  received, our Assessment team will contact the person who is
                  referred to schedule an assessment. The assessment is done in
                  the person’s home or hospital room and takes about an hour.
                  During the assessment, the person’s medical history, current
                  symptoms, and care needs are discussed. The person’s family
                  members or caregivers are also encouraged to participate in
                  the assessment. After the assessment is completed, the person
                  is placed on our waiting list. When a bed becomes available,
                  the person is admitted to Gateway Home. The person’s family
                  members or caregivers are encouraged to visit Gateway Home
                  before the person is admitted to become familiar with the
                  facility and meet the staff. Once the person is admitted, the
                  person’s family members or caregivers are encouraged to visit
                  as often as they like. We also encourage family members or
                  caregivers to participate in the person’s care as much as they
                  are able. We believe that family members and caregivers are an
                  important part of the person’s care team and we welcome their
                  involvement. We also provide support and education to family
                  members and caregivers to help them care for their loved one.
                  We believe that involving family members and caregivers in the
                  person’s care helps to improve the person’s quality of life
                  and provides comfort and support to the person and their
                  family members or caregivers. We also provide support and
                  education to family members and caregivers to help them care
                  for their loved one. We believe that involving family members
                  and caregivers in the person’s care helps to improve the
                  person’s quality of life and provides comfort and support to
                  the person and their family members or caregivers.
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
      <Card id="contact-us">
        <CardHeader className="pb-3">
          <div className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>Contact Us</CardTitle>
            <Contact className="h-4 w-4 text-muted-foreground" />
          </div>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            If you have any questions or would like to learn more about Gateway
            Home, please contact us. We are here to help you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {socials.map((social) => (
              <Link key={social.id} target="_blank" href={social.link}>
                <Card className="bg-muted/20">
                  <CardHeader className="pb-3">
                    <div className="flex flex-row items-center justify-between space-y-0">
                      <CardTitle>{social.title}</CardTitle>
                      <social.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {social.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card id="newsletter">
        <CardHeader className="pb-3">
          <CardTitle>Newsletter</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Email us to subscribe to our newsletter to receive updates on our
            services and events.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-4">
          <Button asChild>
            <Link target="_blank" href={"/pdfs/newsletter.pdf"}>
              <Newspaper className="mr-2 h-4 w-4" />
              Read Latest
            </Link>
          </Button>
          <Button asChild>
            <Link target="_blank" href={"mailto:info@gatewayhomeattica.org"}>
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
