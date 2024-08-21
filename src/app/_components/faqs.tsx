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

export function FAQs() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Frequently Asked Questions</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          We understand that you may have questions. We have compiled a list of
          frequently asked questions to help you better understand Gateway Home.
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
                spiritual, emotional and psychological needs. Hospice care is a
                specialized form of palliative care designed to support those in
                the final stages of a terminal illness. Comfort Care is
                available during the last 90 days of someone’s life with the
                resident and family agreeing there will be no heroic measures
                taken to prolong life.
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
                they increase awareness of their organization. Grants have also
                allowed us to make some improvements to our property that
                wouldn’t have been possible without the additional funding.
                Gateway Home relies solely on fundraising, memorials, donations,
                and grants for funding. With operating expenses exceeding $200k
                per year a lot of hard work and research is done to apply for
                grants in hopes of receiving funds to help keep our doors open.
                Gateway Home has been fortunate enough to be granted several
                grants over the years that allowed the doors to open and that
                have helped make it possible for us to serve our community.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                We have been generously supported by various grant sources. The{" "}
                <strong>Hope</strong> grant was used for home improvement. The{" "}
                <strong>Conable Family Foundation</strong> and the{" "}
                <strong>East Hill Foundation</strong> grants were utilized for
                renovations. The <strong>William F. Thiel Trust</strong>{" "}
                provided us with funds for medical equipment. The{" "}
                <strong>Ralph C. Wilson Legacy Funds</strong> were used for
                caregiver training and operating expenses.{" "}
                <strong>Home Depot</strong> provided us with a grant for an ADA
                compliant ramp. The <strong>Garman Family Foundation</strong>{" "}
                funded a generator for us. <strong>United Way</strong>{" "}
                contributed to our operating expenses, and the{" "}
                <strong>Odd Fellow & Rebekah</strong> grant was used for nurses
                and care aid payroll. These grants have played a significant
                role in helping us continue to fulfill our mission.
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
                staff members who are trained to provide the best possible care.
                We change caregivers every four hours during our day and evening
                shifts so our caregivers come in renewed and refreshed. Our
                overnight shift from 11-7 is usually manned by one caregiver.
                Interested individuals do not need to have any healthcare
                experience to become a volunteer – just an open heart and a
                willingness to learn how to care for another person. We help
                volunteers do the rest!
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Who is eligible for admission to Gateway Home?
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Admission to Gateway Home is based on an assessment of those who
                have the greatest need and the fewest options. A physician must
                have determined that the person has a terminal illness and is in
                their last three months of life. We are not able to accept every
                person who is referred and can only care for up to two dying
                residents at one time. Each case is evaluated carefully by our
                Assessment Caregivers and Director of Resident Care and priority
                is given to those people who have the greatest need at the time;
                i.e., those who are at home with limited adequate care giving
                support. Other considerations involve the complexity of nursing
                care that some people may require.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                We do not use intravenous fluids, feeding tubes or CPR
                (resuscitation). It ensures that comfort care, pain management,
                and symptom control will accompany a natural death process, in
                an atmosphere filled with love. It is not uncommon to have
                multiple people waiting for the next available bed. When a bed
                is available, our Assessment team evaluates all who are waiting,
                and choose the one who has the greatest need; not who is next on
                the list for admission.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What if my loved one who is residing at Gateway Home lives beyond
              three months?
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                At times there may be remission of a person’s disease, and it
                may be necessary to be discharged from Gateway Home to an
                alternative placement: such as home, or moving in with a family
                member, or to a Nursing home. It’s amazing to see, and such a
                blessing, that with some conditions, proper symptom control
                management, socialization and tender loving care, people do go
                into remission and live longer than what was expected. The staff
                at Gateway Home will work closely with the Hospice team and
                family to determine the best alternative placement for our
                resident. Residents may return to Gateway Home and die
                peacefully when that time is appropriate and a bed is available.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Are volunteer opportunities available?
            </AccordionTrigger>
            <AccordionContent>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                YES! In fact, we could not operate without volunteers. There are
                many volunteer roles, so please consider your individual gifts
                and how you might utilize those to support the Gateway Home. The
                greatest need is resident care volunteers. If you prefer not to
                work with residents, there are numerous other opportunities
                available.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}