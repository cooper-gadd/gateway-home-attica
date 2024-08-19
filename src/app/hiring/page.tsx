import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Hiring() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>We&apos;re Hiring</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Contact us if you are interested in a position.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Phone: </strong>
            <a href="tel:585-708-4331">585-708-4331</a>
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:info@gatewayhomeattica.org">
              info@gatewayhomeattica.org
            </a>
          </p>
        </CardContent>
      </Card>
      <Tabs defaultValue="Volunteer">
        <TabsList>
          <TabsTrigger value="Volunteer">Volunteer</TabsTrigger>
          <TabsTrigger value="Care-Aide">Care Aide</TabsTrigger>
          <TabsTrigger value="RN/LPN">RN/LPN</TabsTrigger>
        </TabsList>
        <TabsContent value="Volunteer">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Volunteer</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Gateway Home Needs your Help!
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  There are many opportunities to help Gateway Home in different
                  ways:
                </p>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>
                    Use your experience or be trained by us to care for our
                    residents physical needs
                  </li>
                  <li>
                    Give Support to the emotional needs of our residents and
                    their families. Listen and offer a helping hand!
                  </li>
                  <li>
                    Fundraising for the benefit of Gateway Home means that our
                    mission to help others can be accomplished. Many hands make
                    light work!
                  </li>
                  <li>
                    Grounds keeping and housekeeping are necessary to maintain a
                    clean, quality home Environment. Just another way you can
                    help!
                  </li>
                  <li>
                    Maintenance and Building Repair. All types of carpentry,
                    electrical and/or plumbing repairs are needed to make our
                    Home the best it can be and one of which we all can be proud
                    of.
                  </li>
                  <li>
                    Not sure what to do? Just ask, we can help you find a way
                    for you to feel accomplished and satisfied in knowing you
                    have made a difference in someone’s life!
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Care-Aide">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Care Aide</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Hourly, Reports to Director of Resident Care
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <strong>Position Definition:</strong> The Care Aide is
                  responsible for providing various client-related services to
                  meet personal care needs and to promote comfort and
                  independence in the home setting.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <strong>Qualifications:</strong>
                </p>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>
                    Adequately completes orientation and training as given by
                    nurses prior to employment.
                  </li>
                  <li>
                    Is able to function in a comfort care environment with
                    minimal direct supervision.
                  </li>
                  <li>
                    Is in good physical condition to allow standing, bending,
                    stretching, walking, pulling, pushing, and/or lifting of
                    light to moderate loads.
                  </li>
                </ul>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <strong>Duties and Responsibilities:</strong> The following
                  statements reflect the general duties considered necessary to
                  describe the principal functions of the job as identified and
                  shall not be considered as a detailed description of all work
                  requirements that may be inherent in the position.
                </p>
                <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                  <li>
                    Works under the direction of the nurse in charge, according
                    to the instructions in the resident care plan.
                  </li>
                  <li>
                    Provides basic personal care such as assisting with bathing,
                    oral hygiene, toileting, skin care, ambulating and exercise.
                  </li>
                  <li>
                    Measures and records oral, rectal or axillary temperature,
                    pulse and respiration rates, and blood pressure when ordered
                    (within the training limitations of the aide).
                  </li>
                  <li>
                    Assists with household tasks directly essential to the
                    resident’s health and as directed in the Daily Chore Book.
                  </li>
                  <li>
                    Provides a clean and safe environment within the home,
                    including safe use of the equipment: e.g. foot stools, side
                    rails, wheelchairs, oxygen, etc.
                  </li>
                  <li>
                    Prepares meals based on resident preference and prescribed
                    medical regimen.
                  </li>
                  <li>
                    Assists resident with prescribed medication regimen, as
                    directed in the resident care plan.
                  </li>
                  <li>
                    Performs range of motion and other simple procedures as an
                    extension of therapy services as ordered (within the
                    limitations of the aide).
                  </li>
                  <li>
                    Immediately reports any changes in the resident’s mental,
                    physical or environmental condition and relates these
                    changes to the nurse in charge and/or On-call nurse.
                  </li>
                  <li>
                    Accurately documents the following in a timely manner:{" "}
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                      <li>
                        Services provided in accordance with agency policies and
                        procedures on the day of services are rendered.
                      </li>
                      <li>All resident-related activities.</li>
                    </ul>
                  </li>
                  <li>
                    Reacts to change productively and performs other job-related
                    tasks and duties assigned.
                  </li>
                  <li>
                    Attends appropriate In-Service and Continuing Education
                    Programs.
                  </li>
                </ol>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The Care Aide does NOT take physician’s orders or perform any
                  procedures requiring the knowledge/skill of a licensed nurse.
                  <strong>The On-call nurse is available at all times.</strong>
                </p>
              </div>
            </CardContent>
            <CardFooter>
              All employees must adhere to the Gateway Home confidentiality
              policy. Anyone not adhering to this policy faces immediate
              dismissal.
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="RN/LPN">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>RN/LPN</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                24 Hour Shift, Reports to Director of Resident Care
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Works under direction of the VNA/Hospice.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  On duty nurse is responsible for coordination of care of
                  resident for 24 hour period 8am – 8am.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <strong>Duties:</strong> The following statements reflect the
                  general duties considered necessary to describe the principal
                  functions of the job as identified and shall not be considered
                  as a detailed description of all work requirements that may be
                  inherent in the position.
                </p>
                <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                  <li>
                    Maintain, document narcotic inventory, and prepare doses of
                    medications that will be given to resident by volunteers in
                    that 24 hour period. Instructions on how much & how to give
                    will be included in simple understandable terms.
                  </li>
                  <li>
                    Ensuring enough medications & supplies are available for the
                    following days (especially through holidays & weekends).
                  </li>
                  <li>
                    Assessing resident during the AM care and revise daily care
                    plan as needed.
                  </li>
                  <li>
                    Notifying VNA & Hospice nurse of any resident incident (i.e.
                    fall) or concerns (i.e. need more or different medications,
                    catheter).
                  </li>
                  <li>Responsible for admissions on an as needed basis.</li>
                  <li>Providing family emotional support and assistance.</li>
                </ol>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <strong>Schedule:</strong> Nurse usually works 4 hours with
                  resident in AM (8am-12noon); followed by 20 hours of paid “on
                  call” time. Staff must be able to reach nurse if needed to
                  answer questions in that time.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Nurse to come to Gateway when resident passes and follow
                  directions on “Death Action Sheet” provided in chart.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  Nurse to also be responsible to cover the hours when no one is
                  scheduled to come in for resident care – or find someone who
                  can.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              All employees must adhere to the Gateway Home confidentiality
              policy. Anyone not adhering to this policy faces immediate
              dismissal.
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
