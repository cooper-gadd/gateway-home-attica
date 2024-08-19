export default function Policies() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Our Policies
      </h1>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Privacy Policy
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We use the information you provide about yourself online through our
          website only to complete your request. We do not share this
          information with outside parties except to the extent necessary to
          complete your request. We use return email addresses to answer the
          email we receive. Such addresses are not used for any other purpose
          and are not shared with outside parties. We never use or share the
          personally identifiable information provided to us online in ways
          unrelated to the ones described above without also providing you an
          opportunity to opt-out or otherwise prohibit such unrelated uses.
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Security Policy
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Your payment and personal information is always safe. Our Secure
          Sockets Layer (SSL) software is the industry standard and among the
          best software available today for secure commerce transactions. It
          encrypts all of your personal information, including credit card
          number, name, and address, so that it cannot be read over the
          internet.
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Refund Policy
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">No Refunds.</p>
      </div>
    </div>
  );
}
