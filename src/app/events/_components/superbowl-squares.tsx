export function SuperbowlSquares() {
  return (
    <div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Get your football squares for the Super Bowl game (Sun, Feb 9th).
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">Each square is $25</p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Quarterly pay outs will be as follows:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st quarter: $150</li>
        <li>Halftime: $250</li>
        <li>3rd quarter: $150</li>
        <li>Final: $450</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        To purchase squares contact Gateway Home at{" "}
        <a href="tel:5857084331">(585) 708-4331</a>
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        or visit us at{" "}
        <a
          href="https://maps.google.com/?q=91+Main+St+Attica+NY"
          target="_blank"
          rel="noopener noreferrer"
        >
          91 Main St. Attica, NY
        </a>
      </p>
    </div>
  );
}
