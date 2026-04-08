import { projects, siteConfig } from "@/data/site";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        email: siteConfig.email,
        url: siteConfig.url,
        sameAs: [siteConfig.socialLinks.github, siteConfig.socialLinks.linkedin],
      },
      ...projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: `${siteConfig.url}/projects/${project.slug}`,
        image: `${siteConfig.url}${project.image}`,
        keywords: project.techStack.join(", "),
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
