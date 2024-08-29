import {
  Activity,
  HandHeart,
  Stethoscope,
  type LucideProps,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";

export const hirings: {
  id: string;
  role: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  aboutTheRole: string;
  whatYouWillDo: string[];
  aboutYou: string;
  bonusIfYouHave: string;
  department: string;
  location: string;
  locationType: string;
  type: string;
}[] = [
  {
    id: "volunteer",
    role: "Volunteer",
    icon: HandHeart,
    aboutTheRole: "Pro Bono, Reports to the Director",
    whatYouWillDo: [
      "Use your experience or be trained by us to care for our residents physical needs",
      "Give Support to the emotional needs of our residents and their families. Listen and offer a helping hand!",
      "Fundraising for the benefit of Gateway Home means that our mission to help others can be accomplished. Many hands make light work!",
      "Grounds keeping and housekeeping are necessary to maintain a clean, quality home environment. Just another way you can help!",
      "Maintenance and Building Repair. All types of carpentry, electrical and/or plumbing repairs are needed to make our Home the best it can be and one of which we all can be proud of.",
      "Not sure what to do? Just ask, we can help you find a way for you to feel accomplished and satisfied in knowing you have made a difference in someone’s life!",
    ],
    aboutYou:
      "Someone who is willing to volunteer their time and skills to help others.",
    bonusIfYouHave:
      "Have experience in care giving, fundraising, grounds keeping, housekeeping, or maintenance and building repair.",
    department: "Miscellaneous",
    location: "Attica, New York",
    locationType: "In Person",
    type: "Part Time",
  },
  {
    id: "care-aide",
    role: "Care Aide",
    icon: Stethoscope,
    aboutTheRole: "Hourly, Reports to Director of Resident Care",
    whatYouWillDo: [
      "Work under the direction of the nurse in charge, according to the instructions in the resident care plan.",
      "Provide basic personal care such as assisting with bathing, oral hygiene, toileting, skin care, ambulating and exercise.",
      "Measure and record oral, rectal or axillary temperature, pulse and respiration rates, and blood pressure when ordered (within the training limitations of the aide).",
      "Assist with household tasks directly essential to the resident’s health and as directed in the Daily Chore Book.",
      "Provide a clean and safe environment within the home, including safe use of the equipment: e.g. foot stools, side rails, wheelchairs, oxygen, etc.",
      "Prepare meals based on resident preference and prescribed medical regimen.",
      "Assist resident with prescribed medication regimen, as directed in the resident care plan.",
      "Perform range of motion and other simple procedures as an extension of therapy services as ordered (within the limitations of the aide).",
      "Immediately report any changes in the resident’s mental, physical or environmental condition and relates these changes to the nurse in charge and/or On-call nurse.",
      "Accurately document the following in a timely manner: Services provided in accordance with agency policies and procedures on the day of services are rendered. All resident-related activities.",
      "React to change productively and performs other job-related tasks and duties assigned.",
      "Attend appropriate In-Service and Continuing Education Programs.",
    ],
    aboutYou:
      "Someone who has completed orientation and training as given by nurses prior to employment, can function in a comfort care environment with minimal direct supervision, and is in good physical condition to allow standing, bending, stretching, walking, pulling, pushing, and/or lifting of light to moderate loads.",
    bonusIfYouHave: "Have previous experience in a similar role.",
    department: "Resident Care",
    location: "Attica, New York",
    locationType: "In Person",
    type: "Part Time",
  },
  {
    id: "rn-lpn",
    role: "RN/LPN",
    icon: Activity,
    aboutTheRole: "24 Hour Shift, Reports to Director of Resident Care",
    whatYouWillDo: [
      "Work under direction of the VNA/Hospice.",
      "Be an duty nurse who is responsible for coordination of care of resident for 24 hour period 8am – 8am.",
      "Maintain, document narcotic inventory, and prepare doses of medications that will be given to resident by volunteers in that 24 hour period. Instructions on how much & how to give will be included in simple understandable terms.",
      "Ensure enough medications & supplies are available for the following days (especially through holidays & weekends).",
      "Assess resident during the AM care and revise daily care plan as needed.",
      "Notify VNA & Hospice nurse of any resident incident (i.e. fall) or concerns (i.e. need more or different medications, catheter).",
      "Be Responsible for admissions on an as needed basis.",
      "Provide family emotional support and assistance.",
    ],
    aboutYou:
      "A registered nurse or licensed practical nurse who can work under the direction of the VNA/Hospice and is responsible for the coordination of care of residents.",
    bonusIfYouHave: "Have previous experience in a similar role.",
    department: "Resident Care",
    location: "Attica, New York",
    locationType: "In Person",
    type: "Part Time",
  },
];
