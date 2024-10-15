import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { donors, leadership, stats } from "./_data/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
            Gateway Home
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Providing free, dignified care and spiritual support for those in
            their final stages of life.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="lg:container">
            <Image
              src={`/images/home/gateway-home/front.jpg`}
              alt={`Front of Gateway Home`}
              width={2000}
              height={1000}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
            Resident Care
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Offering full-time care, emotional support, and a home-like
            environment for terminally ill residents.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/resident-care"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="lg:container">
            <video
              width="2000"
              controls
              preload="none"
              loop
              muted
              playsInline
              className="h-full w-full rounded-md object-cover"
            >
              <source src="/videos/promo.mp4" type="video/mp4" />
              <track
                src="/captions/promo.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            </video>
          </div>
        </CardContent>
      </Card>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
            Life at Gateway Home
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Creating a welcoming environment where residents receive
            personalized, compassionate care.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/life-at-gateway-home"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="lg:container">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/life-at-gateway-home/resident-room.jpg`}
                    alt={`Resident Room at Gateway Home`}
                    fill
                    className="h-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/life-at-gateway-home/kitchen.jpg`}
                  alt={`Kitchen at Gateway Home`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                <Image
                  src={`/images/home/life-at-gateway-home/hallway.jpg`}
                  alt={`Hallway at Gateway Home`}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="md:col-span-2">
                <AspectRatio ratio={4 / 3} className="rounded-md bg-muted">
                  <Image
                    src={`/images/home/life-at-gateway-home/living-room.jpg`}
                    alt={`Living Room at Gateway Home`}
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
            Donors
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Gateway Home is made possible by the generosity of our donors.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/donors"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="lg:container">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
              {donors
                .filter((donor) => donor.level === "Platinum")
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((donor) => (
                  <Card
                    key={donor.name}
                    className="border-gray-300 bg-muted/20"
                  >
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
              <div className="grid auto-cols-max grid-flow-col gap-2 md:gap-4">
                {donors
                  .filter((donor) => donor.level !== "Platinum")
                  .map((donor) => (
                    <Card
                      key={donor.name}
                      className={cn(
                        "bg-muted/20",
                        donor.level === "Gold"
                          ? "border-yellow-400"
                          : donor.level === "Silver"
                            ? "border-gray-400"
                            : donor.level === "Bronze"
                              ? "border-amber-700"
                              : "border-",
                      )}
                    >
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
          </div>
        </CardContent>
      </Card>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
            Leadership
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Our leadership team is made up of dedicated individuals who are
            passionate about providing comfort and care to those in need.
          </CardDescription>
          <div>
            <Button variant={"ghost"} asChild>
              <Link href={"/about/leadership"}>Learn More</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="lg:container">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
              {leadership.map((leader) => (
                <Card key={leader.id} className="border-hidden">
                  <CardHeader>
                    <AspectRatio ratio={3 / 4} className="rounded-md bg-muted">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className={cn(
                          "rounded-md object-cover",
                          leader.image === "/images/placeholder.svg" &&
                            "dark:brightness-[0.2] dark:grayscale",
                        )}
                      />
                    </AspectRatio>
                    <CardTitle>{leader.name}</CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {leader.position}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
            Our Compassionate Approach
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            At Gateway Home, we embrace a holistic philosophy of care, providing
            dignity, comfort, and support to our residents and their families
            during life&apos;s final journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="lg:container">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="">
                  <CardHeader className="pb-3">
                    <div className="flex flex-row items-center justify-between space-y-0">
                      <CardTitle>{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground text-teal-400 dark:text-teal-300" />
                    </div>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {stat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-none bg-transparent">
        <CardHeader className="pb-3 text-center">
          <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight text-orange-400 dark:text-orange-300 lg:text-5xl">
            Curious about Gateway Home?
          </CardTitle>
          <CardDescription className="text-balance leading-relaxed">
            Discover the answers to our most frequently asked questions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="lg:container">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What are Palliative Care, Hospice and Comfort Care?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Palliative care can be appropriate at any stage of an
                    illness. It is a holistic approach to health care that goes
                    beyond the physical wellbeing of the resident, attending to
                    their spiritual, emotional and psychological needs. Hospice
                    care is a specialized form of palliative care designed to
                    support those in the final stages of a terminal illness.
                    Comfort Care is available during the last 90 days of
                    someone’s life with the resident and family agreeing there
                    will be no heroic measures taken to prolong life.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How is Gateway Home Funded?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Our services are provided free-of-charge to our home’s
                    residents. We are an independent, not-for-profit
                    organization and money to run Gateway Home is generated
                    entirely through community support, donations and grants.
                    Our annual operating expenses must be covered by monies
                    received from memorials, honorary donations, bequests,
                    donations from people, corporations, service organizations,
                    plus grants and fund-raising events.
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    A nonprofit grant is financial support given to nonprofits
                    by corporations, foundations, or government agencies. They
                    are beneficial for nonprofits because they provide the
                    opportunity for additional funding that doesn’t need to be
                    paid back and they increase awareness of their organization.
                    Grants have also allowed us to make some improvements to our
                    property that wouldn’t have been possible without the
                    additional funding. Gateway Home relies solely on
                    fundraising, memorials, donations, and grants for funding.
                    With operating expenses exceeding $200k per year a lot of
                    hard work and research is done to apply for grants in hopes
                    of receiving funds to help keep our doors open. Gateway Home
                    has been fortunate enough to be granted several grants over
                    the years that allowed the doors to open and that have
                    helped make it possible for us to serve our community.
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    We have been generously supported by various grant sources.
                    The <strong>Hope</strong> grant was used for home
                    improvement. The <strong>Conable Family Foundation</strong>{" "}
                    and the <strong>East Hill Foundation</strong> grants were
                    utilized for renovations. The{" "}
                    <strong>William F. Thiel Trust</strong> provided us with
                    funds for medical equipment. The{" "}
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
                <AccordionTrigger className="text-left">
                  Do you receive help from the government?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    We do not receive any financial funding from the government
                    or from insurance companies.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Who provides direct care at Gateway Home?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    All care given at Gateway Home is provided by volunteers or
                    staff members who are trained to provide the best possible
                    care. We change caregivers every two hours during our day
                    and evening shifts so our caregivers come in renewed and
                    refreshed. Our overnight shift from 10-8 is usually manned
                    by one caregiver. Interested individuals do not need to have
                    any healthcare experience to become a volunteer – just an
                    open heart and a willingness to learn how to care for
                    another person. We help volunteers do the rest!
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Who is eligible for admission to Gateway Home?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Admission to Gateway Home is based on an assessment of those
                    who have the greatest need and the fewest options. A
                    physician must have determined that the person has a
                    terminal illness and is in their last three months of life.
                    We are not able to accept every person who is referred and
                    can only care for up to two dying residents at one time.
                    Each case is evaluated carefully by our Assessment
                    Caregivers and Director of Resident Care and priority is
                    given to those people who have the greatest need at the
                    time; i.e., those who are at home with limited adequate care
                    giving support. Other considerations involve the complexity
                    of nursing care that some people may require.
                  </p>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    We do not use intravenous fluids, feeding tubes or CPR
                    (resuscitation). It ensures that comfort care, pain
                    management, and symptom control will accompany a natural
                    death process, in an atmosphere filled with love. It is not
                    uncommon to have multiple people waiting for the next
                    available bed. When a bed is available, our Assessment team
                    evaluates all who are waiting, and choose the one who has
                    the greatest need; not who is next on the list for
                    admission.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  What is the process for admission to Gateway Home?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The process for admission to Gateway Home begins with a
                    referral from a physician, social worker, family member,
                    friend, or other healthcare provider. Once a referral is
                    received, our Assessment team will contact the person who is
                    referred to schedule an assessment. The assessment is done
                    in the person’s home or hospital room and takes about an
                    hour. During the assessment, the person’s medical history,
                    current symptoms, and care needs are discussed. The person’s
                    family members or caregivers are also encouraged to
                    participate in the assessment. After the assessment is
                    completed, the person is placed on our waiting list. When a
                    bed becomes available, the person is admitted to Gateway
                    Home. The person’s family members or caregivers are
                    encouraged to visit Gateway Home before the person is
                    admitted to become familiar with the facility and meet the
                    staff. Once the person is admitted, the person’s family
                    members or caregivers are encouraged to visit as often as
                    they like. We also encourage family members or caregivers to
                    participate in the person’s care as much as they are able.
                    We believe that family members and caregivers are an
                    important part of the person’s care team and we welcome
                    their involvement. We also provide support and education to
                    family members and caregivers to help them care for their
                    loved one. We believe that involving family members and
                    caregivers in the person’s care helps to improve the
                    person’s quality of life and provides comfort and support to
                    the person and their family members or caregivers. We also
                    provide support and education to family members and
                    caregivers to help them care for their loved one. We believe
                    that involving family members and caregivers in the person’s
                    care helps to improve the person’s quality of life and
                    provides comfort and support to the person and their family
                    members or caregivers.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  What items should my loved one bring to Gateway Home?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    When a person is admitted to Gateway Home, they are
                    encouraged to bring personal items that will make them feel
                    more at home. We encourage residents to bring their own
                    clothing, personal care items, and any other items that will
                    make them feel more comfortable. We provide all the
                    necessary medical equipment and supplies, as well as snacks.
                    We also provide all the necessary linens and towels. We have
                    a washer and dryer on site for residents to use. We also
                    have a small library of books, puzzles, and games for
                    residents to enjoy. We have a beautiful garden and patio
                    area for residents to enjoy the outdoors. We also have a
                    large living room with a fireplace and a television for
                    residents to enjoy. We encourage residents to bring their
                    own personal items to make their stay more comfortable. We
                    also encourage family members to visit often and to
                    participate in the care of their loved one. We have a family
                    room with a kitchenette and a dining area for family members
                    to use.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  What if my loved one who is residing at Gateway Home lives
                  beyond three months?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    At times there may be remission of a person’s disease, and
                    it may be necessary to be discharged from Gateway Home to an
                    alternative placement: such as home, or moving in with a
                    family member, or to a Nursing home. It’s amazing to see,
                    and such a blessing, that with some conditions, proper
                    symptom control management, socialization and tender loving
                    care, people do go into remission and live longer than what
                    was expected. The staff at Gateway Home will work closely
                    with the Hospice team and family to determine the best
                    alternative placement for our resident. Residents may return
                    to Gateway Home and die peacefully when that time is
                    appropriate and a bed is available.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
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
          </div>
        </CardContent>
      </Card>
    </>
  );
}
