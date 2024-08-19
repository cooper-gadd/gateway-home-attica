export default function Contact() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Contact Us
      </h1>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Address
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <a
            target="_blank"
            href="https://www.google.com/maps/search/?api=1&query=91 Main Street, Attica, NY 14011"
          >
            91 Main Street, Attica, NY 14011
          </a>
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Phone
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <a href="tel:585-708-4331">585-708-4331</a>
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Fax
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {" "}
          <a href="fax:5857084333">585-708-4333</a>
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Email
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <a href="mailto:info@gatewayhomeattica.org">
            info@gatewayhomeattica.org
          </a>
        </p>
      </div>
    </div>
  );
}
