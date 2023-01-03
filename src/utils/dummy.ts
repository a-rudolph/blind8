import { LoremIpsum } from "lorem-ipsum";

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const generateBio = () => lorem.generateParagraphs(1);
