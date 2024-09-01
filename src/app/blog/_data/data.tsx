import {
  BookOpen,
  BrickWall,
  Car,
  Flag,
  Hammer,
  HandHeart,
  Heart,
  HelpCircle,
  type LucideProps,
  Newspaper,
  Smile,
  Target,
  Users,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";

export const posts: {
  id: string;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  author: string;
  lead: string;
  content?: JSX.Element;
  images?: { src: string; alt: string }[];
  link?: string;
}[] = [
  {
    id: "our-history",
    title: "Our History",
    icon: BookOpen,
    author: "Doug Domes",
    lead: "Gateway Home was founded a group of concerned citizens who recognized the need for a comfort care home in the community.",
    content: (
      <div>
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
          for the support of our donors, volunteers, and community partners, who
          help us to provide comfort care to those in need. We are committed to
          continuing our mission of providing compassionate care to our
          residents and their families, and we look forward to serving the
          community for many years to come.
        </p>
      </div>
    ),
  },
  {
    id: "leadership",
    title: "Leadership",
    icon: Users,
    author: "Various Authors",
    lead: "Meet the team of dedicated professionals who lead Gateway Home.",
    content: (
      <div>
        <div className="mb-6">
          <p className="text-xl text-muted-foreground">
            Gateway Home is led by a team of dedicated professionals who are
            committed to providing compassionate care to our residents and their
            families. Our leadership team includes:
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Doug Domes
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Doug has lived his life as a resident of Attica with wife Rosie of
            55 years. He has four children who have blessed him with 16
            beautiful grandchildren. As a businessman in the timber industry,
            Doug knows trees to be God’s only renewable natural resource for all
            of us to use wisely and has learned to respect this resource.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Doug recognizes the value of a human’s heart, soul, and body and as
            a result sees “Gateway Home” as a chance to give back or pass onto
            those in need the blessing God has bestowed on him. He wants to help
            those who are facing their last days, weeks, or possible months on
            this earth not fearing their ultimate departure from this earth.
            Doug believes it is important for them to know they are loved and
            valued by being cared for physically, emotionally, and spiritually.
            The bible states the Golden Rule as “Do unto others as you would
            have them do unto you.” Showing love and caring for others is the
            means by which we all should live.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Jim Russell
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Jim has lived in Batavia for over 50 years, many of which he owned
            and operated a fire and safety company. He has 3 children and 4
            grandchildren. Over the years he has volunteered and served on many
            committees such as Volunteer Firefighter for the Town of Stafford
            and Town of Batavia Fire Departments, Batavia City Councilman, City
            of Batavia Zoning Board and Knights of Columbus Council 11728.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Jim first became involved with Gateway Home in February 2020 when he
            brought his wife, Judy of 47 years to Gateway Home as her battle
            with lung cancer was coming to an end. After Judy’s passing Jim
            wanted to give back to Gateway Home for the support they provided.
            Jim organized a Chicken BBQ fundraiser that summer at Gateway Home.
            After that he began serving on the Board of Directors in 2021. Jim
            continues to honor Judy’s memory by organizing and cooking two
            Chicken BBQ fundraisers each year for Gateway Home. In July 2022, he
            also started the First Annual Judy Russell Memorial Golf Tournament
            with all the proceeds raised donated to Gateway Home.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Todd Gadd
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Todd Gadd was led to be involved with a comfort care facility
            following an opportunity to serve others on a short-term mission
            trip to the Dominican Republic. This was following the passing of
            his mother during her illness in which her family had the privilege
            to take care of her at home until her passing. He has been part of
            the group that has organized Gateway Home and is now serving on the
            Board of Directors. Todd is married to Brittany and has two
            children, Cooper and Chloe. He grew up in Attica and currently lives
            in Cowlesville, NY. Being involved with such a much-needed
            organization whose purpose is to only help others has been very
            rewarding.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Carolyn Gadd
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Carolyn Gadd lives in Alden, NY with her two daughters Alyssa, and
            Madison. She has been a volunteer for Gateway Home since 2016
            helping to spread the word of Gateway Home outside of Attica. She
            has also hosted fundraisers in Alden on behalf of Gateway Home,
            volunteered at various Gateway events and works at the Darien Lake
            Concert concession stands to raise money for Gateway.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Carolyn has 25 plus years of experience working in a business
            environment where her experience is utilized as Treasurer for
            Gateway Home.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Carolyn feels fortunate to be in an organization that allows her to
            help others and apply her skills to make a difference in the life of
            others.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Donna Ferry
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Donna Ferry lives in Darien and retired several years ago from
            S.J.F. Construction, Inc. She has volunteered for several
            organizations that have allowed her to connect with the community
            including serving on the Board of Trustees at Genesee Community
            College.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            After losing her mother to a short illness in 2021 her thoughts
            turned to the importance of end-of-life care and she began
            volunteering at Gateway Home in 2022 along with assisting with
            fundraising endeavors.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Serving alongside amazing volunteers and care givers has been a
            truly humbling experience for Donna and has strengthen her resolve
            to support Gateway Home in their mission. Donna joined the board in
            January 2023 and looks forward to working with the staff,
            volunteers, care givers, and fellow board members.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Kimberly Kadziolka
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Member starting 2025
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Sara Brunner
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Sara&apos;s journey to Gateway Home is deeply rooted in her personal
            experiences and professional background. Residing in Batavia with
            her beloved family, she found her calling in end-of-life care
            following the loss of her close friend Wendy. Witnessing the
            profound impact of love and compassion during Wendy&apos;s final
            moments solidified Sara&apos;s commitment to this field.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            In February 2023, Sara joined Gateway Home as an overnight aide,
            while continuing her role as a volunteer coordinator at Crossroads
            House during the day. Her transition from hospitality management to
            end-of-life care reflects her dedication to providing meaningful
            support to families. Sara is excited to leverage her empathy and
            leadership skills at Gateway Home, aiming to expand its reach and
            positively impact as many lives as possible.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Sue Herman
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Sue joined our team when we opened our doors in December 2019 and
            handles the day to day office tasks such as bookkeeping, mail and
            telephone. She also helps coordinate our volunteer scheduling and is
            often the voice behind the One Call messaging system. She is a
            graduate of Canisius College and is a certified public accountant.
            She previously worked for Farm Credit East as an agricultural income
            tax preparer. Sue keeps her hands in agriculture by continuing to do
            some on-farm bookkeeping as time permits. She enjoys volunteering
            with Attica Youth Athletics and is a member of the Attica Central
            School Board of Education.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Sue lives in Attica with her husband, Don and son, Isaac. Sue and
            Don also have 3 adult children and 4 grandchildren. She is excited
            to add her creativity and enthusiasm to help promote Gateway Home’s
            mission.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "fequently-asked-questions",
    title: "Frequently Asked Questions",
    icon: HelpCircle,
    author: "Various Authors",
    lead: "Here are some of the most frequently asked questions about Gateway Home.",
    content: (
      <div>
        <div className="mb-6">
          <p className="text-xl text-muted-foreground">
            Here are some of the most frequently asked questions about Gateway
            Home.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            What are Palliative Care, Hospice and Comfort Care?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Palliative care can be appropriate at any stage of an illness. It is
            a holistic approach to health care that goes beyond the physical
            wellbeing of the resident, attending to their spiritual, emotional
            and psychological needs. Hospice care is a specialized form of
            palliative care designed to support those in the final stages of a
            terminal illness. Comfort Care is available during the last 90 days
            of someone’s life with the resident and family agreeing there will
            be no heroic measures taken to prolong life.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            How is Gateway Home Funded?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Our services are provided free-of-charge to our home’s residents. We
            are an independent, not-for-profit organization and money to run
            Gateway Home is generated entirely through community support,
            donations and grants. Our annual operating expenses must be covered
            by monies received from memorials, honorary donations, bequests,
            donations from people, corporations, service organizations, plus
            grants and fund-raising events.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            A nonprofit grant is financial support given to nonprofits by
            corporations, foundations, or government agencies. They are
            beneficial for nonprofits because they provide the opportunity for
            additional funding that doesn’t need to be paid back and they
            increase awareness of their organization. Grants have also allowed
            us to make some improvements to our property that wouldn’t have been
            possible without the additional funding. Gateway Home relies solely
            on fundraising, memorials, donations, and grants for funding. With
            operating expenses exceeding $200k per year a lot of hard work and
            research is done to apply for grants in hopes of receiving funds to
            help keep our doors open. Gateway Home has been fortunate enough to
            be granted several grants over the years that allowed the doors to
            open and that have helped make it possible for us to serve our
            community.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We have been generously supported by various grant sources. The{" "}
            <strong>Hope</strong> grant was used for home improvement. The{" "}
            <strong>Conable Family Foundation</strong> and the{" "}
            <strong>East Hill Foundation</strong> grants were utilized for
            renovations. The <strong>William F. Thiel Trust</strong> provided us
            with funds for medical equipment. The{" "}
            <strong>Ralph C. Wilson Legacy Funds</strong> were used for
            caregiver training and operating expenses.{" "}
            <strong>Home Depot</strong> provided us with a grant for an ADA
            compliant ramp. The <strong>Garman Family Foundation</strong> funded
            a generator for us. <strong>United Way</strong> contributed to our
            operating expenses, and the <strong>Odd Fellow & Rebekah</strong>{" "}
            grant was used for nurses and care aid payroll. These grants have
            played a significant role in helping us continue to fulfill our
            mission.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Do you receive help from the government?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We do not receive any financial funding from the government or from
            insurance companies.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Who provides direct care at Gateway Home?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            All care given at Gateway Home is provided by volunteers or staff
            members who are trained to provide the best possible care. We change
            caregivers every two hours during our day and evening shifts so our
            caregivers come in renewed and refreshed. Our overnight shift from
            10-8 is usually manned by one caregiver. Interested individuals do
            not need to have any healthcare experience to become a volunteer –
            just an open heart and a willingness to learn how to care for
            another person. We help volunteers do the rest!
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Who is eligible for admission to Gateway Home?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Admission to Gateway Home is based on an assessment of those who
            have the greatest need and the fewest options. A physician must have
            determined that the person has a terminal illness and is in their
            last three months of life. We are not able to accept every person
            who is referred and can only care for up to two dying residents at
            one time. Each case is evaluated carefully by our Assessment
            Caregivers and Director of Resident Care and priority is given to
            those people who have the greatest need at the time; i.e., those who
            are at home with limited adequate care giving support. Other
            considerations involve the complexity of nursing care that some
            people may require.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We do not use intravenous fluids, feeding tubes or CPR
            (resuscitation). It ensures that comfort care, pain management, and
            symptom control will accompany a natural death process, in an
            atmosphere filled with love. It is not uncommon to have multiple
            people waiting for the next available bed. When a bed is available,
            our Assessment team evaluates all who are waiting, and choose the
            one who has the greatest need; not who is next on the list for
            admission.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            What is the process for admission to Gateway Home?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The process for admission to Gateway Home begins with a referral
            from a physician, social worker, family member, friend, or other
            healthcare provider. Once a referral is received, our Assessment
            team will contact the person who is referred to schedule an
            assessment. The assessment is done in the person’s home or hospital
            room and takes about an hour. During the assessment, the person’s
            medical history, current symptoms, and care needs are discussed. The
            person’s family members or caregivers are also encouraged to
            participate in the assessment. After the assessment is completed,
            the person is placed on our waiting list. When a bed becomes
            available, the person is admitted to Gateway Home. The person’s
            family members or caregivers are encouraged to visit Gateway Home
            before the person is admitted to become familiar with the facility
            and meet the staff. Once the person is admitted, the person’s family
            members or caregivers are encouraged to visit as often as they like.
            We also encourage family members or caregivers to participate in the
            person’s care as much as they are able. We believe that family
            members and caregivers are an important part of the person’s care
            team and we welcome their involvement. We also provide support and
            education to family members and caregivers to help them care for
            their loved one. We believe that involving family members and
            caregivers in the person’s care helps to improve the person’s
            quality of life and provides comfort and support to the person and
            their family members or caregivers. We also provide support and
            education to family members and caregivers to help them care for
            their loved one. We believe that involving family members and
            caregivers in the person’s care helps to improve the person’s
            quality of life and provides comfort and support to the person and
            their family members or caregivers.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            What items should my loved one bring to Gateway Home?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            When a person is admitted to Gateway Home, they are encouraged to
            bring personal items that will make them feel more at home. We
            encourage residents to bring their own clothing, personal care
            items, and any other items that will make them feel more
            comfortable. We provide all the necessary medical equipment and
            supplies, as well as snacks. We also provide all the necessary
            linens and towels. We have a washer and dryer on site for residents
            to use. We also have a small library of books, puzzles, and games
            for residents to enjoy. We have a beautiful garden and patio area
            for residents to enjoy the outdoors. We also have a large living
            room with a fireplace and a television for residents to enjoy. We
            encourage residents to bring their own personal items to make their
            stay more comfortable. We also encourage family members to visit
            often and to participate in the care of their loved one. We have a
            family room with a kitchenette and a dining area for family members
            to use. We also have a small chapel for residents and family members
            to use for prayer and reflection.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            What if my loved one who is residing at Gateway Home lives beyond
            three months?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            At times there may be remission of a person’s disease, and it may be
            necessary to be discharged from Gateway Home to an alternative
            placement: such as home, or moving in with a family member, or to a
            Nursing home. It’s amazing to see, and such a blessing, that with
            some conditions, proper symptom control management, socialization
            and tender loving care, people do go into remission and live longer
            than what was expected. The staff at Gateway Home will work closely
            with the Hospice team and family to determine the best alternative
            placement for our resident. Residents may return to Gateway Home and
            die peacefully when that time is appropriate and a bed is available.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Are volunteer opportunities available?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              YES! In fact, we could not operate without volunteers. There are
              many volunteer roles, so please consider your individual gifts and
              how you might utilize those to support the Gateway Home. The
              greatest need is resident care volunteers. If you prefer not to
              work with residents, there are numerous other opportunities
              available.
            </p>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "3rd-annual-junkyard-reunion",
    title: "3rd Annual Junkyard Reunion",
    icon: Car,
    author: "Sara Brunner",
    lead: "The Junkyard Reunion was an absolute HOOT!",
    content: (
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The Junkyard Reunion was an absolute HOOT! A wonderful success put on
          by some awesome folks. Thank you to Angela and Steve Zymowski who did
          the legwork on this and managed a fabulous event. Thank you to the
          Folsom Trailblazers, Vintage Cow, and Beer Justice Brewing for the
          incredible food! Thank you to Ken Barrett Chevrolet and ProX Window
          and Door for their generous sponsorship. All of our beautiful basket
          donors! Lastly, all of you who attended, brought cars, tried for
          baskets, and ate some phenomenal food! We couldn’t do what we do
          without each of you!
        </p>
      </div>
    ),
    images: [
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-1.jpg",
        alt: "Cars 1",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-2.jpg",
        alt: "Cars 2",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-3.jpg",
        alt: "Cars 3",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-4.jpg",
        alt: "Cars 4",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/cars-5.jpg",
        alt: "Cars 5",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/rosie.jpg",
        alt: "Rosie",
      },
      {
        src: "/images/blog/3rd-annual-junkyard-reunion/baskets.jpg",
        alt: "Baskets",
      },
    ],
  },
  {
    id: "7th-annual-golfing-for-gateway",
    title: "7th Annual Golfing for Gateway",
    icon: Flag,
    author: "Sara Brunner",
    lead: "We had a phenomenal day on the course today in our 7th Annual Golfing for Gateway event!",
    content: (
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We had a phenomenal day on the course today in our 7th Annual Golfing
          for Gateway event! Thank you to Quiet Times for hosting us, thank you
          to the planning crew, to the volunteers, to the donors and basket
          makers, and to the golfers! Gateway Home is better for knowing each of
          you.
        </p>
      </div>
    ),
    images: [
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/pink-ladies.jpg",
        alt: "Pink Ladies",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/couple.jpg",
        alt: "Couple",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/ladies.jpg",
        alt: "Ladies",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/putting-contest.jpg",
        alt: "Putting Contest",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/club-car.jpg",
        alt: "Club Car",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/sponsors.jpg",
        alt: "Sponsors",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/sue-sara.jpg",
        alt: "Sue and Sara",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/shots.jpg",
        alt: "Shots",
      },
      {
        src: "/images/blog/7th-annual-golfing-for-gateway/19-shot.jpg",
        alt: "19 Shot",
      },
    ],
  },
  {
    id: "3rd-annual-judy-russell-memorial-golf-tournament",
    title: "3rd Annual Judy Russell Memorial Golf Tournament",
    icon: Flag,
    author: "Sara Brunner",
    lead: "Thanks to the Russell family for another successful Judy Russell Memorial golf tournament!",
    content: (
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Thanks to the Russell family for another successful Judy Russell
          Memorial golf tournament! We would also like to sincerely thank every
          golfer, sponsor, volunteer, and basket donation. Our community rocks!!
        </p>
      </div>
    ),
    images: [
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/carts.jpg",
        alt: "Carts",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/dudes-cart.jpg",
        alt: "Dudes Cart",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/people-cart.jpg",
        alt: "People Cart",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/jim.jpg",
        alt: "Jim",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/drawing.jpg",
        alt: "Drawing",
      },
      {
        src: "/images/blog/3rd-annual-judy-russell-memorial-golf-tournament/winners.jpg",
        alt: "Winners",
      },
    ],
  },
  {
    id: "gateway-home-dedicates-brick-walkways",
    title: "Gateway Home Dedicates Brick Walkways",
    icon: BrickWall,
    author: "Brain Quinn",
    lead: "Brick by brick, those who wanted to honor the memory of a Gateway Home resident contributed to walkways at the comfort care facility. They were able to see the results when the walkways were dedicated recently.",
    content: (
      <div>
        <p className="text-xl text-muted-foreground">
          Brick by brick, those who wanted to honor the memory of a Gateway Home
          resident contributed to walkways at the comfort care facility. They
          were able to see the results when the walkways were dedicated
          recently.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Gateway Director Sara Brunner said the brick walkways part of the
          project took about a year. Gateway, 91 Main St., is a home for the
          terminally ill offering free comfort care for those in their last
          three months of a terminal illness.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          “We collected brick orders and printed bricks,” she said. “There’s the
          back walkway and the front walkway. They have a checkered pattern.”
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Each brick, Brunner said, is a representation of love and memories
          from everyone at the dedication.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          “Piece by piece, the road to Gateway is truly paved with the beloved
          remembrances of those who have gone before us. In this way, you have
          chosen to have their name and their legacy remembered. You have also
          supported this mission to move forward and make a lasting contribution
          to others whom we have yet to meet,” she said. “Walking in every
          morning brings a smile to my face to think of these beautiful souls
          that we have cared for and the lovely supporters who think that what
          we’re doing here is worth investing in.”
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Brunner invited those who had bought bricks for the walkways to come
          to Gateway Home when they need to feel close to the loved ones in
          whose memory they bought them.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          “Sit in the garden so exquisitely done by Rosie Domes. It truly is a
          place of peace,” Brunner said, talking about the effort by Domes, a
          volunteer.
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Brunner told family members of former residents that Gateway thinks of
          them often and wonders how they’re doing these days.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          “Today, we dedicate this memorial and we are not simply erecting a
          monument or a walkway made of stone, but we’re creating a lasting
          testament to people’s enduring impact,” she said. “This memorial will
          serve as a reminder of their contributions and as a symbol of the
          values they held dear. We appreciate each and every one of you.
          Without every person in this audience, what we do here and the impact
          that we make would not be possible.”
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Gateway President Doug Domes said the East Hill Foundation has been
          good to Gateway Home in terms of giving funds, for the brick walkways
          and also for improvements made at Gateway. He said when East Hill Vice
          President Warren Greatbatch came to see the home, it was an honor to
          have him.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          “The East Hill Foundation has helped us with, right in the beginning,
          with some of the demolition that took place, helped us with our
          kitchen, our shower facilities, roof repair, porch, pergola and our
          brick and walkway,” he said.
        </blockquote>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Gateway received more than $121,000 in grant funds, through East Hill,
          for the improvements, he said.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          Brunner said, “Eventually, we’re going to have to be at the end of our
          journey here. To know that there is something in this community and a
          whole group of beautiful people waiting to help you makes that thought
          just a little bit easier. Once you have been here you know that you’re
          our family. We are honored to be here today to present to you this
          memorial brick walkway.”
        </blockquote>
      </div>
    ),
    images: [
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/doug-speaking.jpg",
        alt: "Doug Speaking",
      },
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/sara-speaking.jpg",
        alt: "Sara Speaking",
      },
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/doug-sara.jpg",
        alt: "Doug and Sara",
      },
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/sara.jpg",
        alt: "Sara",
      },
      {
        src: "/images/blog/gateway-home-dedicates-brick-walkways/bricks.jpg",
        alt: "Bricks",
      },
    ],
  },
  {
    id: "spring-summer-2024-newletter",
    title: "Spring/Summer 2024 Newsletter",
    icon: Newspaper,
    author: "Various Authors",
    lead: "This month's newsletter highlights the compassionate care provided by Gateway Home, our upcoming fundraising events, and a special feature on the dedicated volunteers who make our mission possible. Learn about our resident stories, see how your donations are making an impact, and get a sneak peek into our future plans.",
    link: "/pdfs/spring-summer-2024-newletter.pdf",
  },
  {
    id: "new-patio-and-pergola",
    title: "New Patio and Pergola",
    icon: Hammer,
    author: "Nathan Montford",
    lead: "Another wonderful project for the Gateway Home done and ready for the resident families to enjoy spending time with loved ones on the decorative concrete pad and underneath the new fancy pergola. Once again, it was a project that just simply couldn’t have gotten done without the help of the community stepping up and volunteering.",
    content: (
      <div>
        <p className="text-xl text-muted-foreground">
          Another wonderful project for the Gateway Home done and ready for the
          resident families to enjoy spending time with loved ones on the
          decorative concrete pad and underneath the new fancy pergola. Once
          again, it was a project that just simply couldn’t have gotten done
          without the help of the community stepping up and volunteering.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The hands-on portion of this project started Memorial Day weekend as
          Doug Domes, Todd Gadd, Greg Scholand and I began digging and prepping
          the area for concrete. Once the dirt and stone settled through time,
          the next step was to form and pour the concrete pad. That’s when we
          needed the expertise of masons. Dave Reding and brothers, Guy and
          Dustin Westermeier graciously volunteered and stepped in to pour the
          decorative concrete pad. The team nailed it by doing an absolutely
          amazing job that shows in the pictures, yet only gives justice when
          you see it in person.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Last week was the final step to the project. With the help and
          carpentry skills of Roger Blair, Bill Hulme and Bob Rebmann, the
          pergola was finally erected. This just brought everything all together
          in a way that exceeded our expectations since planning the project
          many months ago.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This project was yet another eye opener. Each volunteer did this not
          for the pat on the back or praise, but for their community and in some
          cases, in memory of loved ones of their own. It was truly an honor
          working with all of them to see this project through.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I’d like to personally thank everyone who helped make this community
          project possible from start to finish. I know the folks at the Gateway
          Home are extremely pleased with the outcome and the families who will
          use it, I’m sure will appreciate what you’ve all done to provide this
          to them.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          If any of you are looking to volunteer at the Gateway Home in any
          capacity, please feel free to reach out to see what you can do to
          help.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          “It takes a village”
        </blockquote>
      </div>
    ),
    images: [
      {
        src: "/images/blog/new-patio-and-pergola/truck.jpg",
        alt: "Truck",
      },
      {
        src: "/images/blog/new-patio-and-pergola/pouring.jpg",
        alt: "Pouring",
      },
      {
        src: "/images/blog/new-patio-and-pergola/memory.jpg",
        alt: "Memory",
      },
      {
        src: "/images/blog/new-patio-and-pergola/drying.jpg",
        alt: "Drying",
      },
      {
        src: "/images/blog/new-patio-and-pergola/pillars.jpg",
        alt: "Pillars",
      },
      {
        src: "/images/blog/new-patio-and-pergola/roof.jpg",
        alt: "Roof",
      },
      {
        src: "/images/blog/new-patio-and-pergola/final.jpg",
        alt: "Final",
      },
    ],
  },
  {
    id: "donors",
    title: "Donors",
    icon: HandHeart,
    author: "Various Authors",
    lead: "We would like to thank the following donors for their generous contributions to Gateway Home.",
    content: (
      <div>
        <p className="mb-6 text-xl text-muted-foreground">
          We would like to thank the following donors for their generous
          contributions to Gateway Home.
        </p>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Platinum
          </h2>
          <ul className="mt-6 list-inside list-disc">
            <li>Attica Lions Club</li>
            <li>Attica Package Company, Inc.</li>
            <li>Donna Ferry</li>
            <li>Louise M Schiltz</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Gold
          </h2>
          <ul className="mt-6 list-inside list-disc">
            <li>Advanced Dairy Services, Inc.</li>
            <li>Doug & Rosie Domes</li>
            <li>Dr. Joseph & Marcy Craddock</li>
            <li>James & Jane Frankenberger</li>
            <li>L Toal Plumbing, LLC</li>
            <li>Marley Funeral Home LLC</li>
            <li>Providence Fellowship</li>
            <li>Ralph A. Janes</li>
            <li>Robinson & Hackemer Funeral Home</li>
            <li>S.J.F. Construction, Inc</li>
            <li>Shirley Teachen</li>
            <li>Todd & Brittany Gadd</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Silver
          </h2>
          <ul className="mt-6 list-inside list-disc">
            <li>Connie Tartick</li>
            <li>County Line Stone Co., Inc.</li>
            <li>Durin Rogers & Paula Campbell</li>
            <li>Harding&apos;s Attica Furniture</li>
            <li>Joseph & Carol Pilc</li>
            <li>Michael & Marybeth Whiting</li>
            <li>Paul & Diane Luderman</li>
            <li>Ron & Peach Merrill</li>
            <li>Sandy Ewert</li>
            <li>Shirley F. Peters</li>
            <li>Zehler Excavating, LLC</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Bronze
          </h2>
          <ul className="mt-6 list-inside list-disc">
            <li>Alan & Kelly Heizmann</li>
            <li>Alfonso J. Ficarella</li>
            <li>Andrew & Carla Gasiewicz</li>
            <li>Angela Milillo & Doug Patti</li>
            <li>Ann & Deane Foster</li>
            <li>Anna Nutty</li>
            <li>Arch & Peggy Snyder</li>
            <li>Barbara C. Schiltz</li>
            <li>Barbara Myers</li>
            <li>Bernard & Janet Meinweiser</li>
            <li>Brennan & Shelly Burdett</li>
            <li>Can Can Redemption</li>
            <li>Charles & J. Terri Woodruff</li>
            <li>Clarence & Mary Weaver</li>
            <li>Connie Holt</li>
            <li>Cooke & Steffan - Mr. Tom Steffan</li>
            <li>Daniel & Barbara Krazmien</li>
            <li>Daniel & Jean Burling</li>
            <li>Daniel & Shannon Ford</li>
            <li>Daniel & Susan Boss</li>
            <li>Dave & Joanne Thornton</li>
            <li>David & Connie Rethlake</li>
            <li>David & Judith Brockner</li>
            <li>Dennis & Carol Piechowiak</li>
            <li>Diane Phelps</li>
            <li>Don & Jude Carpenter</li>
            <li>Don & Patti Almeter</li>
            <li>Donald & Linda Schmidt</li>
            <li>Donald and Jane Beechler</li>
            <li>Empire Access</li>
            <li>Gary & Carol Barrow</li>
            <li>Gary & Karen Beideck</li>
            <li>Gary & Renee Hanley</li>
            <li>Gerald & Deborah Landowski</li>
            <li>Gina M. Morrison</li>
            <li>Grace Strollo</li>
            <li>Helen Leonard</li>
            <li>Helen Nichols</li>
            <li>Herbert Hammond</li>
            <li>Howard & Muriel Herman</li>
            <li>J & S Agen, Inc. - Design Art</li>
            <li>Janet Romesser</li>
            <li>Jeannie K. Bates</li>
            <li>Jerry & Sue Elmore</li>
            <li>Jerilyn Clark</li>
            <li>John E. Jaszko</li>
            <li>Joseph & Laura Schmieder</li>
            <li>Kelly Nelson</li>
            <li>Kevin & Lisa Cochrane</li>
            <li>Kirk & Nina Reisdorf</li>
            <li>Laurie Valenti</li>
            <li>Logel Appliance, Inc.</li>
            <li>Lor-Rob Dairy Farm</li>
            <li>Lynn & Linda Camp</li>
            <li>Lynn Herman</li>
            <li>Martha Whittington</li>
            <li>Matthew & Mary Mest</li>
            <li>Melissa Spink</li>
            <li>Michael & Peggy Morrissey</li>
            <li>Mike & Karen Shadbolt</li>
            <li>M&M Meats</li>
            <li>Norb & Marilyn Fuest</li>
            <li>Norma Gerhardt</li>
            <li>Orangeville Immanuel United Church of Chr</li>
            <li>Pat Forsha Truck and Auto Collision, Inc.</li>
            <li>Patricia Herman</li>
            <li>Paul & Carol George</li>
            <li>Paul & Maryann Simonsen</li>
            <li>Peter & Dawn Mark</li>
            <li>Randy & Mary Szczesniak</li>
            <li>Richard & Linda VanDette</li>
            <li>Richard H. & Maria Walczak</li>
            <li>Robert & Barbara Peters</li>
            <li>Robert & Eileen Disinger</li>
            <li>Robert & Maureen Kirby</li>
            <li>Robert A. Koerner Construction</li>
            <li>Ronald J. Demers</li>
            <li>Rose Bartz</li>
            <li>Sandra C. Green</li>
            <li>Sandra Urquhart</li>
            <li>Sons of the American Legion Post 1720</li>
            <li>Springtyme Landscaping & Design Inc.</li>
            <li>Stuart & Janis Hempel</li>
            <li>Susan Grew</li>
            <li>The Greenery</li>
            <li>Tim & Louise Royce</li>
            <li>Timothy J. & Donna Embt</li>
            <li>Toshmin D. Duncan</li>
            <li>Virginia & Burt Fugle</li>
            <li>Warsaw Pennysaver</li>
            <li>Wilkins Insurance Agency, Inc</li>
            <li>William Errington</li>
            <li>William J. Renz Jr.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "mission-statement",
    title: "Mission Statement",
    icon: Target,
    author: "Various Authors",
    lead: "Our goal at Gateway Home is to provide a loving, caring, and peaceful environment for our residents and their families.",
    content: (
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Gateway Home is established to give comfort care to people who are
        medically determined to be in their last stages of life (three months or
        less). Our organization will provide both medical and spiritual care to
        support the residents as they pass from this life to the next. Gateway
        Home staff and volunteers are committed to provide dignified care,
        comfort, and support for our residents and their families. Gateway Home
        is a nonprofit organization, and does not charge for services provided.
        Funding is accomplished through donations, bequests, and community
        support. Admission is based solely on need.
      </p>
    ),
  },
  {
    id: "resident-care",
    title: "Resident Care",
    icon: Heart,
    author: "Various Authors",
    lead: "All the needs of the resident are provided for 24 hours a day, 7 days per week.",
    content: (
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Gateway Home is an empathetic and loving comfort care home for the
          terminally ill. It is a home-like setting that offers free comfort
          care for those in their last three months of a terminal illness.
          Gateway Home’s staff and trained volunteers are able to care for two
          residents at a time, 24 hours a day, 365 days a year.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Our primary goal is to provide comfort care, symptom control and pain
          management for our residents, as well as to be a source of respite
          care for the families and friends. Hands-on resident care is provided
          around the clock, along with meals, laundry, companionship, as well as
          emotional, and spiritual support. Comfort care honors the well-being
          of every person and respects the dignity of human life.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Admission to Gateway Home is based solely on need, regardless of age,
          sex, race, religion or other distinctions . Referrals come from
          several sources: Hospice, health care agencies, hospitals, physicians,
          social workers, clergy, family, friends or the person themselves.
          Priority is given to those who cannot receive adequate care at home.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          There is no cost to the families that we serve, nor do we receive any
          reimbursement from insurance companies. Gateway Home is funded solely
          by donations, fundraising, memorial contributions and through the
          generosity of our community.
        </p>
      </div>
    ),
  },
  {
    id: "life-at-gateway-home",
    title: "Life at Gateway Home",
    icon: Smile,
    author: "Various Authors",
    lead: "Gateway Home is a place where residents can live out their final days in comfort and dignity.",
    content: (
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Gateway Home is a place where residents can live out their final days
          in comfort and dignity. Our staff and volunteers are dedicated to
          providing the highest quality care to our residents, and we strive to
          create a warm and welcoming environment where residents can feel at
          home. We offer a range of services to meet the unique needs of each
          resident, including medical care, emotional support, and spiritual
          care. Our goal is to create a sense of community and belonging for all
          who live here, and we are committed to providing personalized care
          that meets the individual needs of each resident.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          At Gateway Home, we believe that every person deserves to live their
          final days with dignity and respect. We are dedicated to providing
          compassionate care to our residents and their families, and we strive
          to create a peaceful and supportive environment where residents can
          feel safe and cared for. Our staff and volunteers are committed to
          providing the highest quality care to our residents, and we work
          closely with families to ensure that their loved ones receive the care
          and support they need. We are proud to be a part of the Gateway Home
          family, and we look forward to welcoming you to our community.
        </p>
      </div>
    ),
  },
];
