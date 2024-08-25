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
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Info } from "lucide-react";
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
          <InfiniteMovingCards speed="ultra-slow">
            <div className="grid auto-cols-max grid-flow-col gap-4 md:gap-8">
              {donors.map((donor) => (
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
          <InfiniteMovingCards speed="normal">
            <div className="grid grid-cols-6 gap-4 md:gap-8">
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
                    <CardTitle className="flex items-center justify-between">
                      {leader.name}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant={"ghost"}>
                            <Info className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              About {leader.name.split(" ")[0]}
                            </DialogTitle>
                            <DialogDescription>{leader.bio}</DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </CardTitle>
                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                      {leader.position}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </InfiniteMovingCards>
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
