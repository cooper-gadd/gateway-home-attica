import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

export function Leadership() {
  const leadership = [
    {
      name: "Doug Domes",
      position: "President",
      image: "/images/leadership/doug-domes.jpeg",
      bio: [
        "Doug has lived his life as a resident of Attica with wife Rosie of 48 years. He has four children who have blessed him with 16 beautiful grandchildren. As a businessman in the timber industry, Doug knows trees to be God’s only renewable natural resource for all of us to use wisely and has learned to respect this resource.",
        "Doug recognizes the value of a human’s heart, soul, and body and as a result sees “Gateway Home” as a chance to give back or pass onto those in need the blessing God has bestowed on him. He wants to help those who are facing their last days, weeks, or possible months on this earth not fearing their ultimate departure from this earth. Doug believes it is important for them to know they are loved and valued by being cared for physically, emotionally, and spiritually. The bible states the Golden Rule as “Do unto others as you would have them do unto you.” Showing love and caring for others is the means by which we all should live.",
      ],
    },
    {
      name: "Jim Russell",
      position: "Vice President",
      image: "/images/leadership/jim-russell.jpeg",
      bio: [
        "Jim has lived in Batavia for over 50 years, many of which he owned and operated a fire and safety company. He has 3 children and 4 grandchildren. Over the years he has volunteered and served on many committees such as Volunteer Firefighter for the Town of Stafford and Town of Batavia Fire Departments, Batavia City Councilman, City of Batavia Zoning Board and Knights of Columbus Council 11728.",
        "Jim first became involved with Gateway Home in February 2020 when he brought his wife, Judy of 47 years to Gateway Home as her battle with lung cancer was coming to an end. After Judy’s passing Jim wanted to give back to Gateway Home for the support they provided. Jim organized a Chicken BBQ fundraiser that summer at Gateway Home. After that he began serving on the Board of Directors in 2021.  Jim continues to honor Judy’s memory by organizing and cooking two Chicken BBQ fundraisers each year for Gateway Home. In July 2022, he also started the First Annual Judy Russell Memorial Golf Tournament with all the proceeds raised donated to Gateway Home.",
      ],
    },
    {
      name: "Todd Gadd",
      position: "Treasurer",
      image: "/images/leadership/todd-gadd.jpeg",
      bio: [
        "Todd Gadd was led to be involved with a comfort care facility following an opportunity to serve others on a short-term mission trip to the Dominican Republic. This was following the passing of his mother during her illness in which her family had the privilege to take care of her at home until her passing. He has been part of the group that has organized Gateway Home and is now serving on the Board of Directors. Todd is married to Brittany and has two children, Cooper and Chloe. He grew up in Attica and currently lives in Cowlesville, NY. Being involved with such a much-needed organization whose purpose is to only help others has been very rewarding.",
      ],
    },
    {
      name: "Carolyn Gadd",
      position: "Secretary",
      image: "/images/leadership/carolyn-gadd.jpg",
      bio: [
        "Carolyn Gadd lives in Alden, NY with her two daughters Alyssa, and Madison.  She has been a volunteer for Gateway Home since 2016 helping to spread the word of Gateway Home outside of Attica. She has also hosted fundraisers in Alden on behalf of Gateway Home, volunteered at various Gateway events and works at the Darien Lake Concert concession stands to raise money for Gateway.",
        "Carolyn has 25 plus years of experience working in a business environment where her experience is utilized as Treasurer for Gateway Home.",
        "Carolyn feels fortunate to be in an organization that allows her to help others and apply her skills to make a difference in the life of others.",
      ],
    },
    {
      name: "Sue Herman",
      position: "Office Manager",
      image: "/images/leadership/sue-herman.jpeg",
      bio: [
        "Sue joined our team when we opened our doors in December 2019 and handles the day to day office tasks such as bookkeeping, mail and telephone. She also helps coordinate our volunteer scheduling and is often the voice behind the One Call messaging system. She is a graduate of Canisius College and is a certified public accountant. She previously worked for Farm Credit East as an agricultural income tax preparer. Sue keeps her hands in agriculture by continuing to do some on-farm bookkeeping as time permits. She enjoys volunteering with Attica Youth Athletics and is a member of the Attica Central School Board of Education.",
        "Sue lives in Attica with her husband, Don and son, Isaac. Sue and Don also have 3 adult children and 4 grandchildren. She is excited to add her creativity and enthusiasm to help promote Gateway Home’s mission.",
      ],
    },
    {
      name: "Donna Ferry",
      position: "Board Member",
      image: "/images/leadership/donna-ferry.jpg",
      bio: [
        "Donna Ferry lives in Darien and retired several years ago from S.J.F. Construction, Inc.  She has volunteered for several organizations that have allowed her to connect with the community including serving on the Board of Trustees at Genesee Community College.   ",
        "After losing her mother to a short illness in 2021 her thoughts turned to the importance of end-of-life care and she began volunteering at Gateway Home in 2022 along with assisting with fundraising endeavors.   ",
        "Serving alongside amazing volunteers and care givers has been a truly humbling experience for Donna and has strengthen her resolve to support Gateway Home in their mission. Donna joined the board in January 2023 and looks forward to working with the staff, volunteers, care givers, and fellow board members.",
      ],
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Leadership</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Our leadership team is made up of dedicated individuals who are
          passionate about providing comfort and care to those in need.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {leadership.map((leader) => (
            <Card key={leader.name} className="bg-muted/20">
              <CardHeader>
                <AspectRatio ratio={3 / 4} className="bg-muted">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <CardTitle>{leader.name}</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  {leader.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leader.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}