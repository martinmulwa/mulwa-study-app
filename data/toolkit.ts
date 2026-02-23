
export interface Mnemonic {
  topic: string;
  mnemonic: string;
  meaning: string;
}

export const MNEMONICS: Mnemonic[] = [
  { topic: "Body organisation", mnemonic: "Clever Tigers Often Swim", meaning: "Cell, Tissue, Organ, System" },
  { topic: "Four tissue types", mnemonic: "Every Cell Makes Noise", meaning: "Epithelial, Connective, Muscle, Nervous" },
  { topic: "Skeletal functions", mnemonic: "Seriously Protect My Blood So Move", meaning: "Support, Protection, Movement, Blood, Storage, Metabolic" },
  { topic: "Functional units", mnemonic: "NANS", meaning: "Neuron = Nervous, Alveolus = Airways, Nephron = kiNey, Sarcomere = Skeletal" },
  { topic: "Brain regions", mnemonic: "Cerebrum Thinks, Cerebellum Balances, Medulla Breathes", meaning: "Brain function by region" },
  { topic: "Heart blood flow", mnemonic: "Right = dirty blood to lungs. Left = clean blood to body", meaning: "Cardiac circulation direction" },
  { topic: "Heart valves", mnemonic: "Left side = Mitral + Aortic. Right side = Tricuspid + Pulmonary", meaning: "Valve locations" },
  { topic: "Arteries vs Veins", mnemonic: "Arteries = Away. Veins = back Via heart", meaning: "Blood vessel direction" },
  { topic: "Tendons vs Ligaments", mnemonic: "T = Ties muscle To bone. L = Links bone to bone", meaning: "Connective tissue roles" },
  { topic: "Blood components", mnemonic: "RWPP", meaning: "Red, White, Platelets, Plasma" },
  { topic: "Universal donor", mnemonic: "O = Zero antigens = Zero rejection risk", meaning: "Blood group O" },
  { topic: "Insulin", mnemonic: "INsulin = INvites glucose IN", meaning: "Glucose regulation" },
  { topic: "Prolactin", mnemonic: "PROLACTin = PROduces LACTation", meaning: "Milk production" },
  { topic: "Vitamin D", mnemonic: "Sunshine vitamin = Skin + Sun", meaning: "Vitamin D synthesis" },
  { topic: "Immunity types", mnemonic: "Active = YOUR body acts. Passive = you passively receive", meaning: "Immune categories" },
  { topic: "Digestive process", mnemonic: "Dexter Always Makes Excuses", meaning: "Digestion, Absorption, Metabolism, Excretion" }
];

export const LEITNER_SYSTEM = [
  { box: 1, frequency: "Daily", purpose: "New questions or questions you got wrong" },
  { box: 2, frequency: "Every 3 days", purpose: "Recently learnt, needs reinforcement" },
  { box: 3, frequency: "Every week", purpose: "Getting it right consistently" },
  { box: 4, frequency: "Every 2 weeks", purpose: "Well-known, occasional review" },
  { box: 5, frequency: "Every month", purpose: "Mastered — just maintaining" }
];

export const STUDY_SCHEDULE = {
  week1: {
    title: "Foundation",
    days: [
      { day: "1-2", topics: "Cell Biology and Tissues (Q1, Q34)" },
      { day: "3-4", topics: "Skeletal System (Q2, Q14, Q16, Q35, Q40, Q62, Q67)" },
      { day: "5-6", topics: "Muscular System (Q3, Q4, Q18, Q43, Q50)" },
      { day: "7", topics: "Spaced repetition flashcard review" }
    ]
  },
  week2: {
    title: "Core Systems",
    days: [
      { day: "1-2", topics: "Nervous System Part 1 (Q5, Q15, Q20, Q28)" },
      { day: "3-4", topics: "Nervous System Part 2 (Q41, Q54, Q58, Q64, Q69)" },
      { day: "5-6", topics: "Digestive System (Q6, Q27, Q38, Q39, Q42, Q47, Q61, Q68)" },
      { day: "7", topics: "Active recall — cover answers and test yourself" }
    ]
  },
  week3: {
    title: "Vital Systems",
    days: [
      { day: "1-2", topics: "Respiratory System (Q7, Q21, Q33, Q65)" },
      { day: "3-4", topics: "Cardiovascular System (Q9, Q19, Q24, Q30, Q44, Q51, Q60, Q70)" },
      { day: "5-6", topics: "Blood and Haematology (Q8, Q17, Q26, Q36, Q49, Q53, Q63)" },
      { day: "7", topics: "Feynman Technique — explain the hardest topics out loud" }
    ]
  },
  week4: {
    title: "Consolidation",
    days: [
      { day: "1-2", topics: "Endocrine System (Q10, Q22, Q31, Q37, Q45, Q48, Q59, Q66)" },
      { day: "3-4", topics: "Integumentary, Urinary, Lymphatic, Homeostasis, Special Senses" },
      { day: "5-6", topics: "Full mock paper — attempt all 70 questions from memory" },
      { day: "7", topics: "Targeted revision of weak spots only" }
    ]
  }
};

export const STUDY_TECHNIQUES = [
  {
    name: "Active Recall",
    description: "Read the question and answer choices first. Make your selection before reading the explanation. This is the single most powerful study technique proven by learning science."
  },
  {
    name: "Feynman Technique",
    description: "After each section, close the guide and explain the topic out loud in simple words as if teaching a friend."
  }
];
