import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Palliative Care",
    excerpt:
      "Learn about the holistic approach to care that focuses on improving quality of life for patients and their families.",
    date: "May 15, 2023",
    author: "Dr. Emily Johnson",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Importance of Volunteer Work in Comfort Care",
    excerpt: "Discover how volunteers make a significant impact on the lives of our residents and their families.",
    date: "April 22, 2023",
    author: "Sarah Thompson",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Coping with Grief: A Guide for Families",
    excerpt:
      "Practical advice and resources for dealing with loss and supporting loved ones through the grieving process.",
    date: "March 10, 2023",
    author: "Michael Roberts, LCSW",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Role of Music Therapy in End-of-Life Care",
    excerpt:
      "Explore how music can provide comfort, reduce anxiety, and improve quality of life for terminally ill patients.",
    date: "February 5, 2023",
    author: "Lisa Chen, MT-BC",
    readTime: "4 min read",
  },
]

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Gateway Home Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="group">
            <Card className="h-full transition-shadow hover:shadow-lg">
              <Image
                src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(post.title)}`}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{post.readTime}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
