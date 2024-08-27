import { AspectRatio } from "@/components/ui/aspect-ratio";

export const dynamic = "force-dynamic";

export default function File({
  params: { id: pdfName },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <AspectRatio ratio={1 / 1.414} className="rounded-md bg-muted">
        <iframe
          src={`/api/file?name=${pdfName}`}
          className="z-10 h-full w-full rounded-md object-cover"
        ></iframe>
      </AspectRatio>
    </div>
  );
}

//http://localhost:3000/api/file?name=newsletter
