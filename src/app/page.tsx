export default function Home() {
  const platinumAngels = [
    "Ralph Janes",
    "Attica Package Co.",
    "Jane A.C. Schmieder, Attorney",
    "Attica Lyons Club",
    "Wyoming Correctional Facility- Employee Benefit Fund",
    "Darlene Collins",
    "Bengo’s",
  ];

  const goldAngels = [
    "Robinson Hackemer",
    "Attica Real Estate Partnership",
    "Advanced Dairy",
    "Craddock Family Dental",
    "Providence Fellowship",
    "Charles & Carol Leah Klotzbach",
  ];

  const silverAngels = [
    "L Toal Plumbing",
    "Hardings Attica Furniture",
    "Ron & Evelyn (Peach) Merrill",
    "County Line Stone",
    "Whiting Door",
    "Western NY Concrete",
    "Michael & Judith Trauscht",
    "Connie Tartick",
    "Jodi Rospierski",
  ];

  const bronzeAngels = [
    "Lor-Rob Dairy Farm",
    "Excel Fence",
    "Joseph & Carol Pilc",
    "Attica Rodeo Show & Association",
    "Peter & Dawn Mark",
    "Donald & Jane Beechler",
    "Donna Ferry",
    "Alden State Bank",
    "Mary Rudolph",
    "Willam Renz Jr.",
    "Can-Can Redemption",
    "Wendy McArthur",
    "American Legion, Bliss",
    "Trank Real Estate",
    "Paul & Diane Luderman",
  ];

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Gateway Home Mission Statement
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Gateway Home is established to give “comfort care” to people who are
        medically determined to be in their last stages of life (three months or
        less). Our organization will provide both medical and spiritual care to
        support the residents as they pass from this life to the next. Gateway
        Home staff and volunteers are committed to provide dignified care,
        comfort, and support for our residents and their families. Gateway Home
        is a nonprofit organization, and does not charge for services provided.
        Funding is accomplished through donations, bequests, and community
        support. Admission is based solely on need.
      </p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Gateway Home Comfort Care’s 2022 Annual Campaign Angel Supporters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-300">
            Platinum Angel
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {platinumAngels.map((platinumAngel) => (
              <li key={platinumAngel}>{platinumAngel}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-yellow-400">
            Gold Angel
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {goldAngels.map((goldAngel) => (
              <li key={goldAngel}>{goldAngel}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-200">
            Silver Angel
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {silverAngels.map((silverAngel) => (
              <li key={silverAngel}>{silverAngel}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-amber-600">
            Bronze Angel
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {bronzeAngels.map((bronzeAngel) => (
              <li key={bronzeAngel}>{bronzeAngel}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
