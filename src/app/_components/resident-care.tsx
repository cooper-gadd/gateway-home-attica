import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function ResidentCare() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Resident Care</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          All the needs of the resident are provided for 24 hours a day, 7 days
          per week.
        </CardDescription>
      </CardHeader>
      <CardContent>
        At Gateway Home, we pride ourselves on delivering comprehensive care
        through our team of trained, licensed, professional medical support
        staff. This care is further enhanced by the dedication of our trained
        volunteers. We are equipped to provide support for up to two residents
        and their families simultaneously. Our referrals come from a variety of
        sources, including medical professionals, clergy, family, friends, and
        other healthcare agencies. Our care extends beyond the physical, as we
        also cater to the spiritual and emotional needs of our residents,
        ensuring a holistic approach to their well-being.
      </CardContent>
    </Card>
  );
}
