import { AngelSupporters } from "./_components/angel-supporters";
import { FAQs } from "./_components/faqs";
import { MissionStatement } from "./_components/mission-statement";
import { ResidentCare } from "./_components/resident-care";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <MissionStatement />
      <ResidentCare />
      <AngelSupporters />
      <FAQs />
    </div>
  );
}
