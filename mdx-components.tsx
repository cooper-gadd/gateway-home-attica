import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children }) => (
      <main>
        <div className="border-grid border-b">
          <div className="container-wrapper">
            <section className="py-24">
              <div className="container">
                <div className="max-w-3xl mx-auto">
                  <article className="prose prose-zinc dark:prose-invert max-w-none">
                    {children}
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    ),
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "text-4xl font-bold mb-4",
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "text-3xl font-semibold mb-6 mt-12 first:mt-0",
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "text-2xl font-semibold mb-4 mt-8",
          className,
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn("text-lg text-muted-foreground leading-relaxed mb-6", className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn("space-y-2 mb-6", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("space-y-2 mb-6", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("text-lg text-muted-foreground", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn("border-l-2 pl-6 italic text-lg text-muted-foreground mb-6", className)}
        {...props}
      />
    ),
    a: ({ children, href, className, ...props }) => (
      <a
        href={href}
        className={cn(
          "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    ),
    img: ({ className, alt, ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={cn("rounded-lg border my-6", className)}
        alt={alt}
        {...props}
      />
    ),
    hr: ({ ...props }) => <hr className="my-12" {...props} />,
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    thead: ({ children }) => <thead>{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ className, ...props }) => (
      <tr
        className={cn("m-0 border-t p-0 even:bg-muted", className)}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "border px-4 py-2 text-left text-muted-foreground [&[align=center]]:text-center [&[align=right]]:text-right",
          className,
        )}
        {...props}
      />
    ),
  };
}
