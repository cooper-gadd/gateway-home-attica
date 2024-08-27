import fs from "fs";
import path from "path";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get("name");
  const pdfPath = path.resolve(`./public/pdfs/${name}.pdf`);
  const fileBuffer = fs.readFileSync(pdfPath);

  return new NextResponse(fileBuffer, {
    headers: { "Content-Type": "application/pdf" },
  });
}
