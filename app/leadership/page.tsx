import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the dedicated team who guide Gateway Home's mission to provide exceptional care and support for our residents.",
};

const leadershipTeam = [
  {
    id: 1,
    name: "Doug Domes",
    role: "Board President",
    image: "/doug-domes.jpeg",
    bio: [
      "Doug has lived his life as a resident of Attica with wife Rosie of 55 years. He has four children who have blessed him with 16 beautiful grandchildren. As a businessman in the timber industry, Doug knows trees to be God's only renewable natural resource for all of us to use wisely and has learned to respect this resource.",
      "Doug recognizes the value of a human's heart, soul, and body and as a result sees 'Gateway Home' as a chance to give back or pass onto those in need the blessing God has bestowed on him. He wants to help those who are facing their last days, weeks, or possible months on this earth not fearing their ultimate departure from this earth. Doug believes it is important for them to know they are loved and valued by being cared for physically, emotionally, and spiritually. The bible states the Golden Rule as 'Do unto others as you would have them do unto you.' Showing love and caring for others is the means by which we all should live.",
    ],
  },
  {
    id: 2,
    name: "Jim Russell",
    role: "Board Vice President",
    image: "/jim-russell.jpeg",
    bio: [
      "Jim has lived in Batavia for over 50 years, many of which he owned and operated a fire and safety company. He has 3 children and 4 grandchildren. Over the years he has volunteered and served on many committees such as Volunteer Firefighter for the Town of Stafford and Town of Batavia Fire Departments, Batavia City Councilman, City of Batavia Zoning Board and Knights of Columbus Council 11728.",
      "Jim first became involved with Gateway Home in February 2020 when he brought his wife, Judy of 47 years to Gateway Home as her battle with lung cancer was coming to an end. After Judy's passing Jim wanted to give back to Gateway Home for the support they provided. Jim organized a Chicken BBQ fundraiser that summer at Gateway Home. After that he began serving on the Board of Directors in 2021.  Jim continues to honor Judy's memory by organizing and cooking two Chicken BBQ fundraisers each year for Gateway Home. In July 2022, he also started the First Annual Judy Russell Memorial Golf Tournament with all the proceeds raised donated to Gateway Home.",
    ],
  },
  {
    id: 3,
    name: "Todd Gadd",
    role: "Board Treasurer",
    image: "/todd-gadd.jpeg",
    bio: [
      "Todd Gadd was led to be involved with a comfort care facility following an opportunity to serve others on a short-term mission trip to the Dominican Republic. This was following the passing of his mother during her illness in which her family had the privilege to take care of her at home until her passing. He has been part of the group that has organized Gateway Home and is now serving on the Board of Directors. Todd is married to Brittany and has two children, Cooper and Chloe. He grew up in Attica and currently lives in Cowlesville, NY. Being involved with such a much-needed organization whose purpose is to only help others has been very rewarding.",
    ],
  },
  {
    id: 6,
    name: "Donna Ferry",
    role: "Board Member",
    image: "/donna-ferry.jpg",
    bio: [
      "Donna Ferry lives in Darien and retired several years ago from S.J.F. Construction, Inc.  She has volunteered for several organizations that have allowed her to connect with the community including serving on the Board of Trustees at Genesee Community College.   ",
      "After losing her mother to a short illness in 2021 her thoughts turned to the importance of end-of-life care and she began volunteering at Gateway Home in 2022 along with assisting with fundraising endeavors.   ",
      "Serving alongside amazing volunteers and care givers has been a truly humbling experience for Donna and has strengthen her resolve to support Gateway Home in their mission. Donna joined the board in January 2023 and looks forward to working with the staff, volunteers, care givers, and fellow board members.",
    ],
  },
  {
    id: 7,
    name: "Kimberly Kadziolka",
    role: "Board Member",
    image: "/kimberly-kadziolka.jpg",
    bio: [
      "Kimberly Kadziolka, BA, MS, EdD, is a seasoned human services professional who has a long career working with vulnerable populations in WNY. Currently, she is the executive director of Parent Network of WNY, however her experience includes working with children and adults with disabilities, children in the child welfare system, survivors of domestic violence, County, and individuals returning to WNY following incarceration in the federal prison system. Kimberly has a deep sense of equity and works for the day when everyone in our community has access to all they need to reach their full potential throughout their life.",
      "Kimberly was introduced to Gateway Home when her sister, Jammie, was a resident in July 2023. Witnessing the compassionate care provided to her sister and family, she felt moved to offer her skills in helping to spread the mission of Gateway Home. Recognizing that comfort care is an incredible gift to our community, she is excited to be a part of Gateway Home.",
      "In addition to the various leadership positions held, Kimberly sits on the boards of several local and statewide organizations that empower people: Unique Theatre Company, BRICK Buffalo Academy, the Care Management Coalition of WNY, and Families Together in NYS. She is well respected in the social services fields in Western New York and throughout New York State.",
      "Kimberly grew up in Pembroke NY and continues to have ties in the GLOW region. She earned her BA in Social Sciences and Community Mental Health from SUNY Buffalo, an MS in Human Services Administration from SUNY Buffalo State College, and an EdD in Health Administration from D'Youville University. Her dissertation focused on the impact of compassion satisfaction and compassion fatigue on human service workers and how it impacts their decision to change jobs; this research influences her leadership decisions in her many roles.",
    ],
  },
  {
    id: 8,
    name: "Sara Brunner",
    role: "Director",
    image: "/sara-brunner.jpg",
    bio: [
      "Sara's journey to Gateway Home is deeply rooted in her personal experiences and professional background. Residing in Batavia with her beloved family, she found her calling in end-of-life care following the loss of her close friend Wendy. Witnessing the profound impact of love and compassion during Wendy's final moments solidified Sara's commitment to this field.",
      "In February 2023, Sara joined Gateway Home as an overnight aide, while continuing her role as a volunteer coordinator at Crossroads House during the day. Her transition from hospitality management to end-of-life care reflects her dedication to providing meaningful support to families. Sara is excited to leverage her empathy and leadership skills at Gateway Home, aiming to expand its reach and positively impact as many lives as possible.",
    ],
  },
  {
    id: 9,
    name: "Sue Herman",
    role: "Office Manager",
    image: "/sue-herman.jpeg",
    bio: [
      "Sue joined our team when we opened our doors in December 2019 and handles the day to day office tasks such as bookkeeping, mail and telephone. She also helps coordinate our volunteer scheduling and is often the voice behind the One Call messaging system. She is a graduate of Canisius College and is a certified public accountant. She previously worked for Farm Credit East as an agricultural income tax preparer. Sue keeps her hands in agriculture by continuing to do some on-farm bookkeeping as time permits. She enjoys volunteering with Attica Youth Athletics and is a member of the Attica Central School Board of Education.",
      "Sue lives in Attica with her husband, Don and son, Isaac. Sue and Don also have 3 adult children and 4 grandchildren. She is excited to add her creativity and enthusiasm to help promote Gateway Home's mission.",
    ],
  },
];

export default function LeadershipPage() {
  return (
    <main>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <section className="py-24">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Our Leadership Team</h1>
                <p className="text-lg text-muted-foreground">
                  Meet the dedicated team who guide Gateway Home&apos;s mission
                  to provide exceptional care and support for our residents.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {leadershipTeam.map((member) => (
        <div key={member.name} className="border-grid border-b">
          <div className="container-wrapper">
            <section className="py-24">
              <div className="container">
                  <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-[300px] flex-shrink-0">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-[3/4]">
                          <Image
                            src={member.image ?? "/placeholder.svg?height=400&width=300"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                          <h2 className="text-2xl font-semibold mb-1">{member.name}</h2>
                          <p className="text-lg text-gray-200">{member.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      {member.bio?.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-muted-foreground text-lg leading-relaxed [&:not(:first-child)]:mt-6"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ))}
    </main>
  );
}
