export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article className="max-w-4xl mx-auto px-4 py-8">{children}</article>;
}
