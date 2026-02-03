export type FeatureStep = {
  step: string;
  title: string;
  description: string;
  why: string;
  image: string;
  alt: string;
};

export const featureSteps = [
  {
    step: "01",
    title: "Meet the Letter Friend",
    description:
      "Each letter lives inside a short animated story. Children connect with the character before they ever think about the sound.",
    why: "Emotion builds memory.",
    image: "/illustrations/readingalient.png",
    alt: "Friendly alien in a UFO reading a story",
  },
  {
    step: "02",
    title: "Sing the Sound",
    description:
      "A slow, catchy chant introduces the sound clearly, using rhythm and repetition children love.",
    why: "Repetition without boredom.",
    image: "/illustrations/singingalient.png",
    alt: "Alien singing with a glowing music orb",
  },
  {
    step: "03",
    title: "Learn Through Movement",
    description:
      "Simple actions and gestures turn the sound into a full-body experience — no sitting still required.",
    why: "Movement strengthens recall.",
    image: "/illustrations/movementhands.png",
    alt: "Clapping hands with sparkles",
  },
] satisfies FeatureStep[];
