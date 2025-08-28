export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Portfolio",
  description: "Projects exploring design and engineering.",
  author: {
    name: "Mandy Rafferty",
    bio: "Mechanical Engineering Master's Student at Carnegie Mellon University.",
    avatar: "/images/headshot.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    // github: "https://github.com/yourusername",
    // twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/mandyrafferty",
    email: "mraffert@andrew.cmu.com"
  },
  siteUrl: "http://mandyrafferty.github.io/"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;