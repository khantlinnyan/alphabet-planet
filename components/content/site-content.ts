export type LinkItem = { label: string; href: string };

export type MetaChip = { label: string; value: string };

export type BookBenefit = {
  icon: string;
  title: string;
  desc: string;
};

export type BookActions = {
  primary?: LinkItem;
  secondary?: LinkItem;
  tertiary?: LinkItem;
};

export type Book = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  cover: { imageSrc: string; alt: string };
  synopsis: string;
  metaChips?: MetaChip[];
  lookInsideHref?: string;
  benefits?: BookBenefit[];
  bestFor?: string;
  actions?: BookActions;
};

export type LearningMaterialItem = {
  title: string;
  desc: string;
  chips: string[];
  meta: MetaChip[];
  cta: LinkItem;
};

export type CombineStep = { title: string; time: string; desc: string };

export type LearningMaterials = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCtas?: {
    primary: LinkItem;
    secondary: LinkItem;
    tertiary: LinkItem;
  };
  materials: LearningMaterialItem[];
  combine: {
    title: string;
    totalTime: string;
    steps: CombineStep[];
    note: string;
  };
};

export type SiteContent = {
  brand: {
    authorName: string;
    siteTagline: string;
    nav: LinkItem[];
  };

  hero: {
    eyebrow: string;
    title: string;
    promise: string;
    subtext: string;
    ctas: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
    chips: string[];
    cover: { imageSrc: string; alt: string; badge?: string };
  };

  booksSection: {
    eyebrow: string;
    title: string;
    intro: string;
    tabsLabel: string;
    books: Book[];
  };

  learningMaterials: LearningMaterials;

  reviews: {
    eyebrow: string;
    title: string;
    featured: { label: string; quote: string; byline: string };
    cards: { quote: string; byline: string }[];
  };

  author: {
    eyebrow: string;
    title: string;
    portrait: { imageSrc: string; alt: string };
    paragraphs: string[];
    socials: LinkItem[];
  };

  footer: {
    newsletter: {
      eyebrow: string;
      title: string;
      desc: string;
      placeholder: string;
      button: string;
    };
    contactLinks: LinkItem[];
    copyrightName: string;
    builtWith: string;
  };
};

export const siteContent = {
  brand: {
    authorName: "Teacher Terry",
    siteTagline: "Books",
    nav: [
      { label: "Books", href: "#books" },
      { label: "Materials", href: "#materials" },
      { label: "Reviews", href: "#reviews" },
      { label: "About", href: "#about" },
      { label: "Buy", href: "#buy" },
    ],
  },

  hero: {
    eyebrow: "A calm, story-led universe",
    title: "Alphabet Planet",
    promise:
      "A clean, premium story-world that makes letters feel like characters — calm, memorable, and playful.",
    subtext:
      "No classroom vibe. Just gentle pacing, soft repetition, and quiet confidence.",
    ctas: {
      primary: { label: "Explore the books", href: "#books" },
      secondary: { label: "See learning materials", href: "#materials" },
    },
    chips: ["Dark, calm design", "Sparse stars", "One accent color"],
    cover: {
      imageSrc: "/illustrations/astronaut.png",
      alt: "Alphabet Planet main cover",
      badge: "Series",
    },
  },

  booksSection: {
    eyebrow: "Books",
    title: "Three books. One calm system.",
    intro:
      "Pick the entry point that fits your child — then combine with materials for an easy routine.",
    tabsLabel: "Choose a book",
    books: [
      {
        id: "student2",
        label: "Student Book",
        title: "Student Book",
        subtitle: "Story-led core",
        cover: {
          imageSrc: "/illustrations/astronaut.png",
          alt: "Student Book cover",
        },
        synopsis:
          "The main journey: letters as characters, paced like chapters — designed to feel like story-time.",
        metaChips: [
          { label: "Ages", value: "2–5" },
          { label: "Level", value: "Beginner" },
          { label: "Duration", value: "10 min/day" },
        ],
        lookInsideHref: "#", // or /sample/student
        benefits: [
          {
            icon: "spark",
            title: "Story-first pacing",
            desc: "Short scenes that stay calm and engaging.",
          },
          {
            icon: "book",
            title: "Character memory",
            desc: "Letters feel like friends — easier recall.",
          },
          {
            icon: "clock",
            title: "Low-pressure routine",
            desc: "Small daily progress without burnout.",
          },
        ],
        bestFor: "Best for first-time learners and daily read-aloud.",
        actions: {
          primary: { label: "Buy Student Book", href: "#buy" },
          secondary: { label: "See sample pages", href: "#materials" }, // or /sample
          tertiary: { label: "Materials workflow", href: "#materials" },
        },
      },
      {
        id: "student1",
        label: "Workbook",
        title: "Workbook",
        subtitle: "Story-led core",
        cover: {
          imageSrc: "/illustrations/astronaut.png",
          alt: "Student Book cover",
        },
        synopsis:
          "The main journey: letters as characters, paced like chapters — designed to feel like story-time.",
        metaChips: [
          { label: "Ages", value: "2–5" },
          { label: "Level", value: "Beginner" },
          { label: "Duration", value: "10 min/day" },
        ],
        lookInsideHref: "#", // or /sample/student
        benefits: [
          {
            icon: "spark",
            title: "Story-first pacing",
            desc: "Short scenes that stay calm and engaging.",
          },
          {
            icon: "book",
            title: "Character memory",
            desc: "Letters feel like friends — easier recall.",
          },
          {
            icon: "clock",
            title: "Low-pressure routine",
            desc: "Small daily progress without burnout.",
          },
        ],
        bestFor: "Best for first-time learners and daily read-aloud.",
        actions: {
          primary: { label: "Buy Student Book", href: "#buy" },
          secondary: { label: "See sample pages", href: "#materials" }, // or /sample
          tertiary: { label: "Materials workflow", href: "#materials" },
        },
      },
    ],
  },

  learningMaterials: {
    eyebrow: "Learning materials",
    title: "A calm kit that plugs into the books",
    intro:
      "Use these alongside the Student Book + Workbook to create a simple daily rhythm — clear, quiet, and repeatable.",

    // Primary conversion actions for the whole section (used by MaterialsKit)
    primaryCtas: {
      primary: { label: "Get the Materials Pack", href: "#" },
      secondary: { label: "See sample pages", href: "#" },
      tertiary: {
        label: "How the routine works →",
        href: "#materials-workflow",
      },
    },

    materials: [
      {
        title: "Flashcards",
        desc: "A 60-second recall ritual. Quick prompts that keep sounds familiar without pressure.",
        chips: ["Daily", "60 seconds", "Confidence-first"],
        meta: [
          { label: "Format", value: "Printable + digital" },
          { label: "Time", value: "1 min" },
          { label: "Use with", value: "All books" },
        ],
        cta: { label: "Preview", href: "#" },
      },
      {
        title: "Audio (sounds & short stories)",
        desc: "Passive repetition for busy days — play in the car or at bedtime and let it sink in.",
        chips: ["Passive repetition", "Bedtime", "Car rides"],
        meta: [
          { label: "Format", value: "MP3 / streaming" },
          { label: "Time", value: "2–5 min" },
          { label: "Use with", value: "Student Book" },
        ],
        cta: { label: "Listen sample", href: "#" },
      },
      {
        title: "Printable mini-games",
        desc: "Tiny play-based activities that reinforce one sound at a time — no worksheet vibe.",
        chips: ["Play-first", "Low mess", "Short sessions"],
        meta: [
          { label: "Format", value: "Printables" },
          { label: "Time", value: "3–6 min" },
          { label: "Use with", value: "Workbook" },
        ],
        cta: { label: "See examples", href: "#" },
      },
      {
        title: "Posters / wall cues",
        desc: "Soft visual anchors for ambient recall — helps kids remember without constant teaching.",
        chips: ["Ambient learning", "Room-friendly", "Calm design"],
        meta: [
          { label: "Format", value: "A4 / A3" },
          { label: "Time", value: "Always on" },
          { label: "Use with", value: "All books" },
        ],
        cta: { label: "View set", href: "#" },
      },
    ],

    combine: {
      title: "A simple routine (8–12 minutes)",
      totalTime: "8–12 min/day",
      steps: [
        {
          title: "1) Read (Student Book)",
          time: "3–5 min",
          desc: "Read one short scene. Stop early while it still feels fun — leave them wanting more.",
        },
        {
          title: "2) Echo (Audio / Flashcards)",
          time: "1–2 min",
          desc: "Replay that letter’s sound set or do a tiny flashcard loop. Keep it light and quick.",
        },
        {
          title: "3) Practice (Workbook)",
          time: "3–5 min",
          desc: "One page only. Clean, focused, and done. End on an easy win, not a struggle.",
        },
        {
          title: "4) Review loop (next day)",
          time: "30 sec",
          desc: "A fast refresh: 20 seconds of cards + one sentence reread. Consistency beats intensity.",
        },
      ],
      note: "The rule: small + repeatable. Calm attention builds real learning — without pushing.",
    },
  },

  reviews: {
    eyebrow: "Reviews",
    title: "Quiet praise, carefully chosen",
    featured: {
      label: "Featured",
      quote: "It feels like story-time — but the learning still sticks.",
      byline: "— Parent",
    },
    cards: [
      { quote: "Clean, calm, and surprisingly memorable.", byline: "— Reader" },
      {
        quote: "The pages don’t overwhelm. That matters.",
        byline: "— Teacher",
      },
      { quote: "Finally: practice without chaos.", byline: "— Parent" },
    ],
  },

  author: {
    eyebrow: "About the author",
    title: "A builder of small worlds",
    portrait: {
      imageSrc: "/illustrations/astronaut.png",
      alt: "Author portrait",
    },
    paragraphs: [
      "I build calm, story-led learning worlds that feel premium and easy to return to.",
      "I focus on pacing, whitespace, and gentle repetition — so learning doesn’t feel like a fight.",
    ],
    socials: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Email", href: "mailto:hello@example.com" },
    ],
  },

  footer: {
    newsletter: {
      eyebrow: "Newsletter",
      title: "Calm updates. New releases. No noise.",
      desc: "Get a short note when a new book or material drops.",
      placeholder: "you@example.com",
      button: "Subscribe",
    },
    contactLinks: [
      { label: "Contact", href: "mailto:hello@example.com" },
      { label: "Books", href: "#books" },
      { label: "Buy", href: "#buy" },
    ],
    copyrightName: "Teacher Terry",
    builtWith: "Built by KLN & AKS",
  },
} satisfies SiteContent;
