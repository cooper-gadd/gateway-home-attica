import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function MissionStatement() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Gateway Home</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Mission Statement
        </CardDescription>
      </CardHeader>
      <CardContent>
        Gateway Home is established to give “comfort care” to people who are
        medically determined to be in their last stages of life (three months or
        less). Our organization will provide both medical and spiritual care to
        support the residents as they pass from this life to the next. Gateway
        Home staff and volunteers are committed to provide dignified care,
        comfort, and support for our residents and their families. Gateway Home
        is a nonprofit organization, and does not charge for services provided.
        Funding is accomplished through donations, bequests, and community
        support. Admission is based solely on need.
      </CardContent>
    </Card>
  );
}
