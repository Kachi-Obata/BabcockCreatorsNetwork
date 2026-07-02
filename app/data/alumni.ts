export interface BCNAlumnus {
  id: string;
  name: string;
  realName?: string;
  field: string;
  title: string;
  quote?: string;
  bio: string[];
  tags: string[];
  photo?: string;
  externalUrl?: string;
  graduationYear?: string;
  degree?: string;
}

export const alumni: BCNAlumnus[] = [
  {
    id: "davido",
    name: "Davido",
    realName: "David Adedeji Adeleke",
    field: "MUSIC",
    title: "The voice that made Afrobeats impossible to ignore.",
    quote: "Music is the only thing that has ever made complete sense to me.",
    bio: [
      "David Adedeji Adeleke — known globally as Davido — studied Business Administration at Babcock University before dropping out to pursue what would become one of the most consequential careers in the history of African music.",
      "His debut single 'Dami Duro' in 2011 announced something the world hadn't heard quite like before. What followed — three decades of Afrobeats singles, international collaborations, and stadium tours — turned a genre into a global export. Davido didn't just make music. He made infrastructure for everything that came after him.",
      "He is proof that the creative instinct doesn't wait for permission. And that what starts in a campus studio can end up on every continent.",
    ],
    tags: ["Afrobeats", "Fall", "Dami Duro", "Timeless", "Grammy-nominated"],
    externalUrl: "https://en.wikipedia.org/wiki/Davido",
    degree: "Business Administration",
  },
  {
    id: "diary-of-a-kitchen-lover",
    name: "Diary of a Kitchen Lover",
    field: "FOOD & CONTENT",
    title: "Turned a kitchen into a camera and a recipe into a story.",
    bio: [
      "What began as a personal food diary became one of Nigeria's most followed culinary content platforms. Diary of a Kitchen Lover — a Babcock University alumna — built an audience by doing something simple and radical: treating Nigerian food with the same editorial care that international food media gave French cuisine.",
      "Her work is a study in consistency, visual storytelling, and genuine love for craft. She didn't wait for a TV deal or a production budget. She started in her kitchen, with what she had, and made it mean something.",
      "She represents a generation of Babcock creatives who understood that the creative economy doesn't have a single entry point — and that showing up with quality, every time, is its own strategy.",
    ],
    tags: ["Food Content", "Nigerian Cuisine", "Content Creation", "YouTube"],
  },
];
