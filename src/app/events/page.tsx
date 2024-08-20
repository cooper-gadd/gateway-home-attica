import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

export default function Events() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid grid-cols-1 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Gateway Home Fall Chicken BBQ Fundraiser</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Sunday, September 8th, 2024
            </CardDescription>
          </CardHeader>
          <CardContent>
            Gateway Home is holding a drive-thru Chicken BBQ fundraiser on
            Sunday, September 8th. The dinner includes ½ chicken, salt potatoes,
            cole slaw, roll & butter and a homemade cookie. Pick up is in the
            Attica Elementary School parking lot on Prospect Street from noon
            until 2:00pm. Ticket cost is $15.
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link
                target="_blank"
                href="/https://gatewayhomeattica.networkforgood.com/events/74632-fall-chicken-bbq-sun-sept-8th"
              >
                Buy Tickets
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
