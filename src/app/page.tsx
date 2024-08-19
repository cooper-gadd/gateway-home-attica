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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-gray-300">
                Platinum Angel Supporters
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Gateway Home Comfort Care’s 2022 Annual Campaign Angel
                Supporters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <li>Ralph Janes</li>
              <li>Attica Package Company Inc.</li>
              <li>Jane A.C. Schmieder, Attorney</li>
              <li>Attica Lyons Club</li>
              <li>Wyoming Correctional Facility- Employee Benefit Fund</li>
              <li>Darlene Collins</li>
              <li>Bengo’s</li>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-yellow-400">
                Gold Angel Supporters
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Gateway Home Comfort Care’s 2022 Annual Campaign Angel
                Supporters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Robinson Hackemer</li>
                <li>Attica Real Estate Partnership</li>
                <li>Advanced Dairy</li>
                <li>Craddock Family Dental</li>
                <li>Providence Fellowship</li>
                <li>Charles & Carol Leah Klotzbach</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-gray-200">
                Silver Angel Supporters
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Gateway Home Comfort Care’s 2022 Annual Campaign Angel
                Supporters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>L Toal Plumbing</li>
                <li>Hardings Attica Furniture</li>
                <li>Ron & Evelyn (Peach) Merrill</li>
                <li>County Line Stone</li>
                <li>Whiting Door</li>
                <li>Western NY Concrete</li>
                <li>Michael & Judith Trauscht</li>
                <li>Connie Tartick</li>
                <li>Jodi Rospierski</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-amber-600">
                Bronze Angel Supporters
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Gateway Home Comfort Care’s 2022 Annual Campaign Angel
                Supporters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Lor-Rob Dairy Farm</li>
                <li>Excel Fence</li>
                <li>Joseph & Carol Pilc</li>
                <li>Attica Rodeo Show & Association</li>
                <li>Peter & Dawn Mark</li>
                <li>Donald & Jane Beechler</li>
                <li>Donna Ferry</li>
                <li>Alden State Bank</li>
                <li>Mary Rudolph</li>
                <li>Willam Renz Jr.</li>
                <li>Can-Can Redemption</li>
                <li>Wendy McArthur</li>
                <li>American Legion, Bliss</li>
                <li>Trank Real Estate</li>
                <li>Paul & Diane Luderman</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
