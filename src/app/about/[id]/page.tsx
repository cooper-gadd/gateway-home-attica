import { abouts } from "../_data/data";

export const dynamic = "force-dynamic";

export default function About({
  params: { id: aboutId },
}: {
  params: { id: string };
}) {
  const about = abouts.find((about) => about.id === aboutId)!;

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {about.title}
      </h1>
      <p className="text-sm text-muted-foreground">{about.author}</p>
      {about.content}
    </>
  );
}
