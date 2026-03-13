import { Question } from '../types';

export const NCK_KRN_PAPER: Question[] = [
  {
    id: "KRN-Q1",
    text: "A mother rescues two of her four children from a house fire. In the emergency department, she cries, \"I should have gone back in to get them. I should have died, not them.\" What is the nurse's best response?",
    options: [
      "\"The smoke was too thick. You couldn't have gone back in.\"",
      "\"You're feeling guilty because you weren't able to save your children.\"",
      "\"Focus on the fact that you could have lost all four of your children.\"",
      "\"It's best if you try not to think about what happened. Try to move on.\""
    ],
    correctAnswerIndex: 1,
    category: "Professional Practice & Ethics",
    topic: "Therapeutic Communication",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why B is CORRECT\n\nOption B uses a technique called reflection (also called empathic reflection or feeling reflection). This means the nurse acknowledges and names what the patient is feeling — in this case, guilt — without judging, correcting, or redirecting.\n\nWhen someone is experiencing acute grief and trauma, the most therapeutic response is to validate their emotions and show that they have been heard. The mother is not asking for facts about smoke density. She is expressing overwhelming guilt, and she needs someone to witness that pain.\n\nKey principle: In therapeutic communication, the nurse's job is to follow the patient's lead emotionally before offering any information or reassurance.\n\n❌ Why the Other Options are WRONG\n\nOption A — \"The smoke was too thick…\" This response tries to argue against the patient's feelings by providing a factual explanation. This is called defending or giving false reassurance. It implies the patient's feelings are irrational (\"you couldn't have gone back, so stop feeling guilty\"), which shuts down communication and makes the patient feel dismissed. Feelings are not rational — they cannot be corrected with facts.\n\nOption C — \"Focus on the fact that you could have lost all four…\" This is a well-meaning but harmful response. It uses a technique called silver-lining fallacy — trying to reframe a tragedy as \"it could have been worse.\" This minimises the patient's real loss and grief, and can feel invalidating and dismissive. This is not therapeutic communication.\n\nOption D — \"It's best if you try not to think about it…\" This is advising the patient to suppress her emotions, which is called false reassurance combined with blocking. Telling someone to \"move on\" after acute trauma is psychologically harmful and communicates that the nurse is uncomfortable with the patient's distress. Research shows suppression of grief leads to complicated grief disorders.",
    memoryTip: "The \"REFLECT first, DIRECT never\" Rule\n\nIn exam questions about therapeutic communication:\n- WRONG answers use phrases like: \"You should…\", \"Try to…\", \"Focus on…\", \"At least…\", \"The reason is…\"\n- RIGHT answers reflect feelings back: \"You're feeling…\", \"It sounds like…\", \"I hear that you…\"",
    difficulty: 2
  },
  {
    id: "KRN-Q2",
    text: "By which means will the sympathetic response raise blood pressure?",
    options: [
      "Vasoconstriction due to stimulation of alpha receptors",
      "Vasoconstriction due to stimulation of beta receptors",
      "Increase cardiac output due to stimulation of alpha receptors",
      "Increased stroke volume due to stimulation of alpha receptors"
    ],
    correctAnswerIndex: 0,
    category: "Cardiovascular System",
    topic: "Autonomic Nervous System",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why A is CORRECT\n\nThe sympathetic nervous system (the \"fight or flight\" system) raises blood pressure through two main actions:\n1. Alpha-1 (α₁) receptor stimulation → causes vasoconstriction (blood vessels narrow) → increases peripheral resistance → raises blood pressure\n2. Beta-1 (β₁) receptor stimulation → increases heart rate and force of contraction → increases cardiac output\n\nOption A correctly identifies that vasoconstriction is caused by ALPHA receptor stimulation, not beta receptors.\n\nBlood pressure formula: BP = Cardiac Output × Peripheral Resistance. When vessels constrict (via alpha receptors), peripheral resistance rises, so BP rises.\n\n❌ Why the Other Options are WRONG\n\nOption B — \"Vasoconstriction due to beta receptors\" This is incorrect receptor assignment. Beta receptors in the heart (β₁) increase heart rate and contractility — this is cardiac effect, not vasoconstriction. Beta receptors in blood vessels (β₂) actually cause vasodilation, not vasoconstriction. Vasoconstriction is an alpha-1 receptor effect.\n\nOption C — \"Increased cardiac output due to alpha receptors\" Alpha receptors primarily cause vasoconstriction (vascular smooth muscle effect), not direct cardiac output increase. Cardiac output increase is a beta-1 (β₁) receptor effect on the heart.\n\nOption D — \"Increased stroke volume due to alpha receptors\" Stroke volume increase is caused by beta-1 receptor stimulation (increased contractility/inotropy). Alpha receptors act primarily on blood vessel walls, not cardiac contractility.",
    memoryTip: "\"Alpha = ARTERY Squeezer, Beta = BEATS faster\"\n\n- Alpha (α₁) → vessels → VASOCONSTRICTION → ↑ resistance → ↑ BP\n- Beta-1 (β₁) → heart → ↑ heart rate + ↑ contractility → ↑ cardiac output → ↑ BP\n- Beta-2 (β₂) → vessels/bronchi → VASODILATION + bronchodilation (used for asthma inhalers!)",
    difficulty: 2
  },
  {
    id: "KRN-Q3",
    text: "The priority nursing intervention for management of a patient with severe vomiting is:",
    options: [
      "Administration of intravenous fluids",
      "Appropriate patient positioning",
      "Administration of antiemetic agents",
      "Placement of a nasogastric tube"
    ],
    correctAnswerIndex: 0,
    category: "Fundamentals of Nursing",
    topic: "Priority Setting",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why A is CORRECT\n\nIn severe vomiting, the primary physiological threat is dehydration and electrolyte imbalance (especially loss of potassium and hydrogen ions, risking hypokalemia and metabolic alkalosis). IV fluids address this life-threatening priority first by:\n- Restoring circulating volume\n- Correcting fluid deficits\n- Preventing hypovolemic shock\n\nIn nursing, we always address threats using Maslow's Hierarchy and ABC (Airway, Breathing, Circulation) first. Severe vomiting causes fluid loss → circulation threat → fluid replacement is priority.\n\n❌ Why the Other Options are WRONG\n\nOption B — Positioning While positioning (sitting upright, lateral) is important to prevent aspiration, it does not address the primary physiological problem of dehydration. It is a comfort/safety measure, not the priority intervention. It would rank lower on Maslow's hierarchy.\n\nOption C — Antiemetics Antiemetics stop vomiting but do not address the electrolyte/fluid deficit that has already occurred. Also, in severe vomiting, the patient may not be able to retain oral antiemetics, and IV antiemetics require physician orders. Fluid replacement is the more immediately critical action.\n\nOption D — Nasogastric tube NG tubes are useful to decompress the stomach (e.g., in obstruction) or for feeding, but they do not address the fluid loss. Placement of NG tube is not the first priority in simple severe vomiting.",
    memoryTip: "Priority Nursing = \"Water Before Pills, Fluids Before Feelings\"\n\nWhen vomiting is severe, ask: \"What is the patient losing?\" → Water + electrolytes → Replace them → IV fluids first",
    difficulty: 2
  },
  {
    id: "KRN-Q4",
    text: "A client has just returned to a nursing unit following bronchoscopy. A nurse would implement which of the following nursing interventions for this client?",
    options: [
      "Encouraging additional fluids for the next 24 hours",
      "Ensuring the return of the gag reflex before offering foods or fluids",
      "Administering atropine intravenously",
      "Administering small doses of midazolam (Versed)"
    ],
    correctAnswerIndex: 1,
    category: "Respiratory System",
    topic: "Post-Procedure Care",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why B is CORRECT\n\nBronchoscopy is a procedure where a flexible camera (bronchoscope) is inserted down the throat into the airways to examine the lungs. To allow this, a local anaesthetic is sprayed in the throat and airways, which numbs the gag reflex temporarily.\n\nThe gag reflex prevents food, fluid, and secretions from entering the airway (aspiration). If the patient drinks or eats before the gag reflex returns and the anaesthetic is still active, there is a high risk of aspiration pneumonia — a life-threatening complication.\n\nThe nurse's first post-bronchoscopy priority: Check for return of the gag reflex → Only offer fluids/food after confirmed return.\n\n❌ Why the Other Options are WRONG\n\nOption A — Encouraging additional fluids Giving fluids is actually dangerous until the gag reflex returns. Fluids could be aspirated into the now-anaesthetised airway and cause chemical pneumonitis or aspiration pneumonia.\n\nOption C — Atropine IV Atropine is an anticholinergic drug sometimes given before the procedure to reduce secretions. It is not a routine post-procedure intervention after bronchoscopy.\n\nOption D — Midazolam (Versed) Midazolam is a sedative/anxiolytic sometimes used during the procedure for conscious sedation. Giving more post-procedure would further depress the patient's protective reflexes and increase aspiration risk.",
    memoryTip: "\"No Gag = No Grub\"\n\nBefore any procedure that numbs the throat (bronchoscopy, endoscopy, tonsillectomy), check for the gag reflex before allowing anything by mouth. No gag reflex = No eating/drinking = Aspiration risk!",
    difficulty: 2
  },
  {
    id: "KRN-Q5",
    text: "A student is preparing to administer intramuscular vaccines to a 14-weeks-old infant. The following will be the appropriate needle size to use:",
    options: [
      "Gauge 16 with a length of 3/5–3/8 inches",
      "Gauge 25 with a length of 3/8–5/8 inches",
      "Gauge 18 with a length of 1–1.5 inches",
      "Gauge 27 with a length 1–1.5 inches"
    ],
    correctAnswerIndex: 1,
    category: "Paediatric Nursing",
    topic: "IM Injection Technique",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why B is CORRECT\n\nFor infant intramuscular injections, the standard recommendation (WHO, CDC, ACIP) is:\n- Gauge: 22–25 (fine gauge for infants — less pain, less tissue trauma)\n- Length: 5/8 inch (16 mm) for infants under 12 months\n- Site: Anterolateral thigh (vastus lateralis muscle) — preferred for infants\n- Gauge 25, length 3/8–5/8 inch is the appropriate choice for a 14-week-old\n\nKey rule: Higher gauge number = THINNER needle. In infants, thinner + shorter = less traumatic.\n\n❌ Why the Other Options are WRONG\n\nOption A — Gauge 16, 3/5–3/8 inches Gauge 16 is a very large bore needle (used for IV cannulas in adults). Inserting a 16-gauge into an infant would be excessively traumatic and is completely inappropriate.\n\nOption C — Gauge 18, 1–1.5 inches Gauge 18 is still too large for infant IM injections, and 1–1.5 inches is the length used for adult IM injections. An infant's thigh muscle depth does not warrant a 1.5-inch needle.\n\nOption D — Gauge 27, 1–1.5 inches While gauge 27 (very thin) could theoretically be appropriate, the length of 1–1.5 inches is incorrect for an infant. This length is for adults. Using a 1.5-inch needle on an infant's small thigh risks hitting the bone.",
    memoryTip: "\"The Infant Needle Rule: Short and Thin\"\n\nFor infants: Short needle (5/8 inch) + Thin gauge (23–25) = safe IM injection. Remember: Higher gauge = thinner needle. You want THIN (high number) and SHORT for babies.",
    difficulty: 2
  },
  {
    id: "KRN-Q6",
    text: "Which of the following conditions would be managed by a medical-surgical nurse?",
    options: [
      "Type 2 diabetes",
      "Urinary tract infection",
      "Depression",
      "Anxiety disorder"
    ],
    correctAnswerIndex: 0,
    category: "Fundamentals of Nursing",
    topic: "Scope of Practice",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why A is CORRECT\n\nA medical-surgical nurse manages patients with medical and surgical conditions — these are physical illnesses requiring clinical intervention. Type 2 diabetes is a chronic medical condition (endocrine disorder) that is managed on medical wards. It involves blood glucose monitoring, insulin administration, dietary management, and patient education — all within the medical-surgical nurse's scope.\n\nNote: While UTI (B) is also a medical condition, Type 2 diabetes is a better example of a classic medical-surgical nursing case requiring multisystem management.\n\n❌ Why the Other Options are WRONG\n\nOptions C & D — Depression and Anxiety Disorder These are mental health/psychiatric conditions managed by psychiatric nurses or mental health nurses in specialised settings. They are outside the primary scope of medical-surgical nursing unless the patient is admitted for a physical condition that coincides with these mental health issues.\n\nOption B — UTI Urinary tract infection (UTI) is technically a medical condition managed on medical wards. However, Type 2 diabetes is the most correct answer for a condition that is classically treated on medical-surgical wards and involves the comprehensive medical-surgical nursing role. Some questions are about selecting the most appropriate answer — Diabetes involves long-term management, medication, diet, and education that exemplifies the medical-surgical nursing role.",
    memoryTip: "Med-Surg = \"Body diseases. Not mind diseases.\"\n\nMedical-surgical nursing manages physical body conditions. Psychiatric/mental health nursing manages mind/mood conditions. Depression = psychiatric ward. Diabetes = medical ward.",
    difficulty: 1
  },
  {
    id: "KRN-Q7",
    text: "The striated appearance on the renal pyramids is caused by:",
    options: [
      "Parallel blood vessels",
      "Micro-tubules",
      "Connective tissue",
      "Nerve fibre"
    ],
    correctAnswerIndex: 0,
    category: "Renal & Urinary System",
    topic: "Kidney Microstructure",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why A is CORRECT\n\nThe renal medulla (inner portion of the kidney) contains 8–18 cone-shaped structures called renal pyramids. When you look at a cut kidney, the renal pyramids have a striated (striped) appearance — parallel lines running from the cortex toward the renal pelvis.\n\nThis striped pattern is caused by parallel arrangements of:\n- Collecting tubules (ducts of Bellini)\n- Loops of Henle\n- Blood vessels (vasa recta) running in parallel bundles\n\nThe most prominent contribution to the striated appearance comes from the parallel arrangement of tubules and blood vessels running longitudinally through the pyramid.\n\n❌ Why the Other Options are WRONG\n\nOption B — Micro-tubules Microtubules are intracellular protein structures (part of the cytoskeleton) — they are microscopic components inside cells, not visible macroscopic structures that could create striations visible to the naked eye.\n\nOption C — Connective tissue Connective tissue does exist in the kidney but is not arranged in the parallel pattern that creates the striated appearance of pyramids.\n\nOption D — Nerve fibres Kidney nerve fibres (sympathetic innervation) are not arranged in a pattern that creates the visible striations of renal pyramids.",
    memoryTip: "\"Renal Pyramid Stripes = Rail Lines = Parallel Tubes + Vessels\"\n\nThink of a rail track — the parallel lines running down renal pyramids are like parallel rail lines, formed by the tubules and blood vessels all running side-by-side toward the renal papilla.",
    difficulty: 2
  },
  {
    id: "KRN-Q8",
    text: "Nurse Kiplagat needs to interpret ABG results showing PaO₂ of 55 mmHg and PaCO₂ of 50 mmHg. What do these results indicate?",
    options: [
      "Hyperventilation",
      "Respiratory alkalosis",
      "Hypoxemia and hypercapnia",
      "Normal respiratory status"
    ],
    correctAnswerIndex: 2,
    category: "Respiratory System",
    topic: "ABG Interpretation",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why C is CORRECT\n\nNormal ABG Reference Values (memorise these):\n- PaO₂: 75–100 mmHg\n- PaCO₂: 35–45 mmHg\n- pH: 7.35–7.45\n\nThis Patient:\n- PaO₂ = 55 mmHg → Below normal (75–100 mmHg) → Hypoxemia (low oxygen in blood)\n- PaCO₂ = 50 mmHg → Above normal (35–45 mmHg) → Hypercapnia (excess CO₂ in blood)\n\nThis pattern indicates respiratory failure — the lungs are not adequately ventilating (CO₂ is accumulating) or oxygenating (O₂ is low). This is consistent with Type 2 respiratory failure (failure of both oxygenation and ventilation).\n\n❌ Why the Other Options are WRONG\n\nOption A — Hyperventilation Hyperventilation means excessive breathing → more O₂ in (PaO₂ rises) and more CO₂ blown out (PaCO₂ falls). This patient has the opposite — LOW O₂ and HIGH CO₂. This is hypoventilation, not hyperventilation.\n\nOption B — Respiratory alkalosis Respiratory alkalosis occurs when CO₂ is too low (PaCO₂ < 35 mmHg), causing blood to become too alkaline. This patient has HIGH CO₂ (50 mmHg), which would cause respiratory acidosis, not alkalosis.\n\nOption D — Normal respiratory status Neither value is normal. PaO₂ of 55 is critically low (normal is 75–100), and PaCO₂ of 50 is elevated (normal is 35–45). This is decidedly abnormal.",
    memoryTip: "ABG Quick Rule: \"Up CO₂ = Too little breathing. Down O₂ = Not enough oxygen.\"\n\nHypoxemia = Low PaO₂ (think: \"hypo\" = low, \"ox\" = oxygen) Hypercapnia = High PaCO₂ (think: \"hyper\" = high, \"capnia\" = from carbon = CO₂)",
    difficulty: 2
  },
  {
    id: "KRN-Q9",
    text: "Blood pressure is the product of:",
    options: [
      "Cardiac output and peripheral resistance",
      "Cardiac output and diastolic pressure",
      "Heart rate and stroke volume",
      "Diastolic and systolic pressure"
    ],
    correctAnswerIndex: 0,
    category: "Cardiovascular System",
    topic: "Haemodynamics",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why A is CORRECT\n\nThis is a fundamental cardiovascular equation:\nBlood Pressure (BP) = Cardiac Output (CO) × Peripheral Vascular Resistance (PVR)\n\n- Cardiac Output = the volume of blood the heart pumps per minute (= Heart Rate × Stroke Volume)\n- Peripheral Resistance = the resistance blood faces in the blood vessels (depends on vessel diameter, blood viscosity)\n\nWhen either CO or PVR increases, BP rises. This formula is the physiological basis for understanding hypertension (raised PVR) and shock (low CO).\n\n❌ Why the Other Options are WRONG\n\nOption B — CO × diastolic pressure Diastolic pressure is a result of blood pressure, not a component of the equation that creates BP. You cannot calculate BP by multiplying two pressures together in this way.\n\nOption C — Heart rate × stroke volume This is the formula for cardiac output (CO = HR × SV), not blood pressure. It is one step earlier in the calculation.\n\nOption D — Diastolic × systolic pressure Systolic and diastolic are measurements of blood pressure (e.g., 120/80 mmHg). Multiplying them does not give you anything physiologically meaningful.",
    memoryTip: "\"BP = CO × PVR — the PIPELINE equation\"\n\nThink of a garden hose: Water pressure = how hard the pump works (CO) × how narrow the pipe is (PVR). Squeeze the pipe → higher pressure. Pump harder → higher pressure.",
    difficulty: 1
  },
  {
    id: "KRN-Q10",
    text: "Which individual would the nurse consider to have the highest priority for receiving an influenza vaccination?",
    options: [
      "A 60-year-old man with a hiatal hernia",
      "A 36-year-old woman with 3 children",
      "A 50-year-old woman caring for a spouse with cancer",
      "A 60-year-old woman with osteoarthritis"
    ],
    correctAnswerIndex: 2,
    category: "Infection Control & Communicable Diseases",
    topic: "Immunisation Priority",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why C is CORRECT\n\nInfluenza vaccine priority targets groups who are either:\n1. At high risk of severe disease themselves, OR\n2. Close contacts of immunocompromised individuals who cannot safely be vaccinated\n\nA spouse with cancer is likely undergoing chemotherapy or radiation, which causes severe immunosuppression. Such patients are at extreme risk if they contract influenza. The 50-year-old caregiver is in close, constant contact and poses a direct transmission risk. Vaccinating the caregiver protects the immunocompromised patient — this is called cocooning or herd protection.\n\n❌ Why the Other Options are WRONG\n\nOption A — 60-year-old with hiatal hernia Hiatal hernia (part of the stomach pushes up through the diaphragm) is a GI condition with no direct link to immune vulnerability or influenza risk.\n\nOption B — 36-year-old with 3 children Young mothers with children could benefit from vaccination but are generally healthy adults without the high-risk designation that comes with caring for an immunocompromised person.\n\nOption D — 60-year-old with osteoarthritis Age alone (60) is a risk factor, and osteoarthritis is noted, but this is less urgent than protecting a caregiver whose spouse has a life-threatening immunocompromising illness.",
    memoryTip: "\"Protect the protector to protect the most vulnerable\"\n\nVaccinating caregivers of cancer patients = protecting the patient indirectly. Always look for the immunocompromised connection in vaccine priority questions.",
    difficulty: 2
  },
  {
    id: "KRN-Q11",
    text: "Which of the following are the end products of protein hydrolysis?",
    options: [
      "Monoglycerols",
      "Keto acids and non-essential amino acids",
      "Polypeptides",
      "Amino acids and di- and tripeptides"
    ],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Biochemistry",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nProtein digestion (hydrolysis = breaking by water) breaks proteins step by step:\nProteins → Polypeptides → Oligopeptides → Di-peptides + Tri-peptides + Amino acids\n\nThe final products absorbed through the intestinal wall are:\n- Free amino acids (single units)\n- Dipeptides (2 amino acids linked)\n- Tripeptides (3 amino acids linked)\n\nThese are then transported into enterocytes (intestinal cells) via specific transporters, where dipeptides and tripeptides are broken down further into individual amino acids before entering the bloodstream.\n\n❌ Why the Other Options are WRONG\n\nOption A — Monoglycerols Monoglycerides (monoglycerols) are products of fat digestion (lipid hydrolysis), not protein hydrolysis. Fat → Fatty acids + Monoglycerides.\n\nOption B — Keto acids and non-essential amino acids Keto acids come from transamination or deamination of amino acids — a metabolic process that happens after protein has been absorbed. It is not an end product of digestion.\n\nOption C — Polypeptides Polypeptides are intermediate breakdown products — not the final end products. Digestion continues until you reach amino acids and small peptides (di/tri).",
    memoryTip: "\"Fat → Fatty acids. Protein → Amino acids. Carbs → Glucose.\"\n\nRemember the digestive end products:\n- Fats → fatty acids + glycerol\n- Proteins → amino acids (+ di/tri-peptides)\n- Carbohydrates → monosaccharides (glucose, fructose, galactose)",
    difficulty: 2
  },
  {
    id: "KRN-Q12",
    text: "When providing oral care for a patient with dentures, what step should the nurse take to ensure proper hygiene?",
    options: [
      "Use hot water to clean the dentures",
      "Soak the dentures overnight",
      "Brush the dentures with a hard-bristled brush",
      "Store dentures in a dry container"
    ],
    correctAnswerIndex: 1,
    category: "Fundamentals of Nursing",
    topic: "Personal Hygiene",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why B is CORRECT\n\nStandard nursing practice for denture care includes:\n- Remove dentures after meals and at bedtime\n- Soak dentures overnight in a denture cleaning solution or clean water — this keeps them moist (they can warp/crack if dried out), removes accumulated bacteria, and maintains their shape\n- Brush gently with a soft-bristled brush and mild soap or denture paste\n- Rinse before re-insertion\n\nSoaking overnight is a key step in maintaining denture hygiene and preventing bacterial/fungal (candida) colonisation.\n\n❌ Why the Other Options are WRONG\n\nOption A — Hot water Never use hot/boiling water on dentures — heat causes warping and distortion of the acrylic material, making them ill-fitting. Always use cool or lukewarm water.\n\nOption C — Hard-bristled brush Hard bristles can scratch and damage the denture surface, creating microscopic grooves where bacteria accumulate. Always use a soft-bristled denture brush.\n\nOption D — Dry container Storing dentures in a dry container causes them to become brittle and crack over time. Dentures are designed to remain moist — store in water or denture solution.",
    memoryTip: "\"Dentures = Like contact lenses — keep them WET and GENTLE\"\n\nBoth contacts and dentures: no heat, no drying out, no harsh scrubbing. Store in liquid overnight.",
    difficulty: 1
  },
  {
    id: "KRN-Q13",
    text: "In conducting a primary survey on a trauma patient, which of the following is considered one of the priority elements?",
    options: [
      "Palpation and auscultation of the abdomen",
      "Complete set of vital signs",
      "Brief neurologic assessment",
      "Initiation of pulse oximetry"
    ],
    correctAnswerIndex: 2,
    category: "Trauma & Emergency Care",
    topic: "Primary Survey",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why C is CORRECT\n\nThe primary survey in trauma uses the ABCDE framework:\n- A = Airway (with C-spine protection)\n- B = Breathing and ventilation\n- C = Circulation (haemorrhage control)\n- D = Disability (Neurological status) — GCS score, pupil response, motor response\n- E = Exposure/Environment (undress patient, prevent hypothermia)\n\nA brief neurological assessment (the \"D\" step) is part of the primary survey. It involves quickly assessing the patient's level of consciousness using the GCS (Glasgow Coma Scale) or AVPU scale (Alert, Voice, Pain, Unresponsive).\n\n❌ Why the Other Options are WRONG\n\nOption A — Palpation and auscultation of the abdomen This is part of the secondary survey — a head-to-toe physical assessment done after the primary survey has identified and addressed immediate life threats.\n\nOption B — Complete vital signs A full set of vitals is more appropriate for the secondary survey. In the primary survey, only immediate life-threatening circulatory compromise (major haemorrhage, absent pulse) is assessed, not a complete vital sign set.\n\nOption D — Pulse oximetry Pulse oximetry is a monitoring tool that complements the primary survey but is not one of its named priority elements. It provides continuous monitoring but is not a primary survey component per the ATLS protocol.",
    memoryTip: "Primary Survey = \"ABCDE — Always Be Checking Disability & Exposure\"\n\nAirway → Breathing → Circulation → Disability (neuro) → Exposure. This is the universal trauma assessment sequence. Memorise it — it appears frequently in exams.",
    difficulty: 2
  },
  {
    id: "KRN-Q14",
    text: "The best position to put an unconscious patient would be:",
    options: [
      "Reverse Trendelenburg's position",
      "Recovery position",
      "Dorsal/recumbent position",
      "Prone position"
    ],
    correctAnswerIndex: 1,
    category: "Fundamentals of Nursing",
    topic: "Patient Positioning",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why B is CORRECT\n\nThe recovery position (also called the lateral recumbent position or semi-prone position) is the safest position for an unconscious patient because it:\n1. Prevents aspiration — if the patient vomits, gastric contents drain out of the mouth instead of into the lungs\n2. Maintains airway patency — the tongue falls forward, away from the back of the throat, reducing airway obstruction\n3. Allows drainage of secretions from the mouth and pharynx\n\nThis is an essential first aid and nursing intervention for unconscious patients without suspected spinal injury.\n\n❌ Why the Other Options are WRONG\n\nOption A — Reverse Trendelenburg This is a position where the head is raised and legs are down (opposite of Trendelenburg). It is used for conditions like GERD or facial surgery — not appropriate for unconscious patients.\n\nOption C — Dorsal/recumbent (supine) Placing an unconscious patient flat on their back is dangerous — the tongue can fall backward and obstruct the airway, and any vomiting poses severe aspiration risk.\n\nOption D — Prone (face-down) Prone positioning is used therapeutically in ICU for severe ARDS but is not appropriate as the default position for an unconscious patient outside critical care settings.",
    memoryTip: "\"Recovery = Lateral = Left side = LIFE Saver\"\n\nUnconscious = Recovery Position (on the side). Think: If they can't protect their airway, lay them on their SIDE so gravity does it for them.",
    difficulty: 1
  },
  {
    id: "KRN-Q15",
    text: "A client with allergic rhinitis asks what he should do to decrease symptoms. Which instruction would be appropriate?",
    options: [
      "\"Use your nasal decongestant spray regularly to help clear your nasal passages.\"",
      "\"Ask the doctor for antibiotics. Antibiotics will help decrease the secretion.\"",
      "\"It is important to increase your activity. A daily brisk walk will help promote drainage.\"",
      "\"Keep a diary when your symptoms occur. This can help you identify what precipitates your attacks.\""
    ],
    correctAnswerIndex: 3,
    category: "Respiratory System",
    topic: "Allergic Rhinitis",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nAllergic rhinitis is caused by an allergic reaction to specific triggers (allergens) such as pollen, dust mites, pet dander, or mold. The most effective management strategy is allergen avoidance, which requires identifying personal triggers.\n\nA symptom diary is an evidence-based patient education tool that helps patients:\n- Record when symptoms occur (time of day, season, location)\n- Identify patterns → identify allergens\n- Avoid known triggers\n- Work collaboratively with healthcare providers\n\nThis addresses the root cause (allergen exposure) rather than just treating symptoms.\n\n❌ Why the Other Options are WRONG\n\nOption A — Regular decongestant spray Nasal decongestant sprays (like oxymetazoline) should NOT be used for more than 3–5 days due to risk of rhinitis medicamentosa (\"rebound congestion\") — a paradoxical worsening of congestion caused by overuse of the spray.\n\nOption B — Antibiotics Allergic rhinitis is an allergic/immunological condition — it has no bacterial cause. Antibiotics are completely ineffective and inappropriate. They also contribute to antimicrobial resistance.\n\nOption C — Increase physical activity While exercise has general health benefits, it can actually worsen nasal symptoms in some people with allergic rhinitis, especially exercise-induced rhinitis or when outdoors in high pollen environments.",
    memoryTip: "\"Allergies = Detective Work. Find the TRIGGER, avoid it.\"\n\nAllergen diary = finding the enemy. Once you know what triggers your allergies, you can avoid it.",
    difficulty: 2
  },
  {
    id: "KRN-Q16",
    text: "The light-sensitive cell in the retina that responds to colour is called:",
    options: [
      "Macula",
      "Macula lutea",
      "Cone",
      "Rod"
    ],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Special Senses",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why C is CORRECT\n\nThe retina contains two types of photoreceptor cells:\n\n| Cell Type | Function | Location | Requires |\n| :--- | :--- | :--- | :--- |\n| **Cones** | Colour vision + fine detail | Concentrated in fovea (macula) | **Bright light** |\n| **Rods** | Black & white vision, peripheral vision, night vision | Peripheral retina | **Dim light** |\n\nCones contain three types of photopigments (opsins) that respond to red, green, and blue light — allowing colour perception. There are approximately 6–7 million cones in the human retina.\n\n❌ Why the Other Options are WRONG\n\nOption A — Macula The macula (or macula lutea) is the region of the retina with the highest concentration of cones. It is a structure, not a cell type. The macula itself doesn't respond to light — the cones within it do.\n\nOption B — Macula lutea Same as above — this is the yellow-pigmented central zone of the retina (\"lutea\" = yellow). It is an anatomical region, not a photoreceptor cell.\n\nOption D — Rod Rods detect light intensity (brightness), not colour. They are used for night vision and detecting movement in peripheral vision. They contain a single pigment called rhodopsin.",
    memoryTip: "\"CONES = COLOR (both start with C). RODS = black and white ROAD ahead (dim light)\"\n\nCones = Colour (daylight, detail). Rods = Black/White Road vision (night, periphery).",
    difficulty: 1
  },
  {
    id: "KRN-Q17",
    text: "A soft tissue injury that results from blunt force and bleeding into tissue is:",
    options: [
      "Sprain",
      "Concussion",
      "Strain",
      "Contusion"
    ],
    correctAnswerIndex: 3,
    category: "Musculoskeletal System",
    topic: "Soft Tissue Injury",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nA contusion (bruise) is a soft tissue injury caused by blunt force trauma that damages blood vessels without breaking the skin. This causes bleeding into the surrounding tissues (called ecchymosis — bruising visible on the skin), swelling, and pain.\n\n❌ Why the Other Options are WRONG\n\nOption A — Sprain A sprain is an injury to a ligament (the tissue connecting bone to bone), caused by overstretching or tearing. It occurs at joints (e.g., ankle sprain). No blunt force required — it's from excessive stretching.\n\nOption C — Strain A strain is an injury to a muscle or tendon (the tissue connecting muscle to bone), also caused by overstretching or excessive force. Think: \"you strained your back lifting a box.\"\n\nOption B — Concussion A concussion is a traumatic brain injury — a specific type of head injury causing temporary neurological dysfunction. While blunt force to the head causes it, the term specifically refers to brain injury, not general soft tissue injury.",
    memoryTip: "\"SPRAIN = LIGaments (S & L are neighbours). STRAIN = muSCLE (S & S). CONTUSION = BLUNt force BRUISE.\"\n\n| Injury | Structure | Mechanism |\n| :--- | :--- | :--- |\n| Sprain | Ligament | Overstretch at joint |\n| Strain | Muscle/Tendon | Overexertion |\n| Contusion | Soft tissue (any) | Blunt force → bruise |",
    difficulty: 1
  },
  {
    id: "KRN-Q18",
    text: "Which of the following antibacterial drugs works by disrupting cell wall synthesis?",
    options: [
      "Vancomycin",
      "Fusidic acid",
      "Linezolid",
      "Chloramphenicol"
    ],
    correctAnswerIndex: 0,
    category: "Pharmacology",
    topic: "Antibiotics",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why A is CORRECT\n\nVancomycin is a glycopeptide antibiotic that works by inhibiting cell wall synthesis in bacteria. Specifically, it binds to the D-Ala-D-Ala terminal of peptidoglycan precursors, preventing cross-linking of the bacterial cell wall. Without a functional cell wall, bacteria cannot maintain osmotic integrity and die (cell lysis).\n\nVancomycin is particularly important against MRSA (Methicillin-resistant Staphylococcus aureus) — a major hospital superbug.\n\nOther cell wall synthesis inhibitors include: Penicillins, Cephalosporins, Carbapenems, Monobactams (all beta-lactams).\n\n❌ Why the Other Options are WRONG\n\nOption B — Fusidic acid Fusidic acid works by inhibiting protein synthesis — specifically, it inhibits elongation factor G (EF-G), blocking translocation during translation on ribosomes.\n\nOption C — Linezolid Linezolid is an oxazolidinone antibiotic that inhibits protein synthesis by binding to the 23S rRNA of the 50S ribosomal subunit, preventing formation of the initiation complex.\n\nOption D — Chloramphenicol Chloramphenicol inhibits protein synthesis by binding the 50S ribosomal subunit and blocking peptidyl transferase activity.",
    memoryTip: "Antibiotic Targets: \"WRIST\" — Wall, Ribosomes, In the cell, SSDS (nucleic acids), Transcription\"\n\n- Cell wall: Vancomycin, Penicillins, Cephalosporins\n- Ribosomes (protein synthesis): Aminoglycosides, Macrolides, Linezolid, Chloramphenicol\n- DNA/RNA: Fluoroquinolones, Rifampicin\n- Cell membrane: Polymyxins",
    difficulty: 2
  },
  {
    id: "KRN-Q19",
    text: "What is a professional identity?",
    options: [
      "A set of attitudes that are outside the norm",
      "A set of common attitudes, beliefs, experiences, ideals and principles that define a certain profession",
      "A set of attitudes, beliefs, experiences, ideals and principles that a person believes in",
      "A set of attitudes, beliefs, experiences, ideals and principles that define many but not all professions"
    ],
    correctAnswerIndex: 1,
    category: "Professional Practice & Ethics",
    topic: "Nursing Identity",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why B is CORRECT\n\nProfessional identity in nursing is the shared sense of what it means to be a nurse — a collective framework of:\n- Values and beliefs (caring, compassion, dignity)\n- Professional standards (ethical codes, NCK guidelines)\n- Shared experiences (clinical training, patient interactions)\n- Common principles that define nursing as a distinct profession\n\nIt is what distinguishes a nurse from other healthcare workers or laypersons — the professional \"lens\" through which nurses see their role.\n\n❌ Why the Other Options are WRONG\n\nOption A — \"Outside the norm\" This is simply incorrect and contradictory — professional identity is by definition the norm within a profession, not outside it.\n\nOption C — \"That a person believes in\" This describes personal identity or personal values — what an individual believes. Professional identity is collective and shared across all members of the profession.\n\nOption D — \"Define many but not all professions\" This is vague and imprecise. Professional identity is specific to a particular profession (in this case, nursing). The wording \"many but not all\" introduces unnecessary ambiguity.",
    memoryTip: "\"Professional Identity = The DNA of a Profession\"\n\nJust as DNA defines a species, professional identity defines what makes someone a nurse rather than just a healthcare worker. It's collective and shared — not individual.",
    difficulty: 1
  },
  {
    id: "KRN-Q20",
    text: "You expect a patient in the oliguric phase of renal failure to have a 24-hour urine output less than:",
    options: [
      "200 ml",
      "400 ml",
      "800 ml",
      "1000 ml"
    ],
    correctAnswerIndex: 1,
    category: "Renal & Urinary System",
    topic: "Renal Failure",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why B is CORRECT\n\nUrine output terminology — these are important values to memorise for the NCK exam:\n\n| Term | 24-Hour Urine Output | Clinical Significance |\n| :--- | :--- | :--- |\n| **Normal** | 800–2000 ml/day | Healthy kidneys |\n| **Oliguria** | **< 400 ml/day** | Acute kidney injury/failure |\n| **Anuria** | < 50–100 ml/day | Severe kidney failure |\n| **Polyuria** | > 2500 ml/day | Diabetes insipidus, DM, diuretics |\n\nOliguria means abnormally low urine production. The clinical threshold is less than 400 ml in 24 hours (or less than 0.5 ml/kg/hour). In the oliguric phase of acute renal failure, damaged kidney tubules cannot produce adequate urine, leading to fluid retention, electrolyte imbalances, and uraemia (waste buildup).\n\n❌ Why the Other Options are WRONG\n\nOption A — 200 ml 200 ml/day approaches anuria, not just oliguria. The definition of oliguria is < 400 ml — 200 ml is within the oliguria range but the definition threshold is 400 ml, not 200 ml.\n\nOptions C & D — 800 ml and 1000 ml These are within or approaching normal urine output ranges. Oliguria begins at below 400 ml.",
    memoryTip: "\"Oligo = few. 400 = the magic number for oliguric failure\"\n\nOliguria < 400 ml/24 hrs | Anuria < 100 ml/24 hrs | Normal = 800–2000 ml/24 hrs",
    difficulty: 2
  },
  {
    id: "KRN-Q21",
    text: "The following are the elements of the communication process EXCEPT:",
    options: [
      "Sender",
      "Receiver",
      "Message",
      "Noise"
    ],
    correctAnswerIndex: 3,
    category: "Professional Practice & Ethics",
    topic: "Communication",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nThe standard communication model (Berlo's SMCR model or similar) consists of these core elements:\n1. Sender (Source): The person initiating the message.\n2. Message: The information being conveyed.\n3. Channel: The medium used (verbal, written, non-verbal).\n4. Receiver: The person who gets and decodes the message.\n5. Feedback: The receiver's response.\n\nNoise is NOT an element of the process itself; rather, it is a barrier or interference that disrupts the process. While noise is always present in communication theory, it is categorized as a factor that affects the process, not a fundamental component of the process model.\n\n❌ Why the Other Options are WRONG\n\nOptions A, B, & C — Sender, Receiver, and Message These are the three most fundamental elements of any communication. Without a sender, a receiver, and a message, communication cannot exist. They are core components of the process.",
    memoryTip: "\"S-M-C-R-F: Sender, Message, Channel, Receiver, Feedback\"\n\nNoise is the \"enemy\" of communication, not a part of the team.",
    difficulty: 1
  },
  {
    id: "KRN-Q22",
    text: "The following are clinical manifestations of fracture EXCEPT:",
    options: [
      "Pain",
      "Loss of function",
      "Deformity",
      "Increased temperature"
    ],
    correctAnswerIndex: 3,
    category: "Musculoskeletal System",
    topic: "Fractures",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nClinical manifestations of a fracture (the \"6 Ps\" and other signs) include:\n- Pain and tenderness at the site\n- Loss of function (inability to move the limb)\n- Deformity (abnormal alignment)\n- Crepitus (grating sound of bone ends)\n- Swelling and bruising (oedema and ecchymosis)\n- Shortening of the limb (in some fractures)\n\nIncreased temperature (fever) is a systemic sign of infection or inflammation, not a direct clinical manifestation of a fresh fracture. While a fracture causes local inflammation, it does not typically cause a systemic increase in body temperature immediately.\n\n❌ Why the Other Options are WRONG\n\nOptions A, B, & C — Pain, Loss of function, and Deformity These are classic, hallmark signs of a bone fracture. Pain is almost always present due to nerve damage and muscle spasm. Deformity occurs when bone fragments are displaced.",
    memoryTip: "\"Fracture Signs: Pain, Popping (crepitus), Positioning (deformity), Power loss\"\n\nFever = Infection. Fracture = Local damage.",
    difficulty: 1
  },
  {
    id: "KRN-Q23",
    text: "The following are the functions of the liver EXCEPT:",
    options: [
      "Production of bile",
      "Detoxification of drugs",
      "Storage of glycogen",
      "Production of insulin"
    ],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Digestive System",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nInsulin is produced by the beta cells of the Islets of Langerhans in the pancreas, not the liver. The liver's relationship with insulin is that it responds to insulin by taking up glucose and converting it to glycogen.\n\n❌ Why the Other Options are WRONG\n\nOption A — Production of bile This is a primary function of hepatocytes in the liver. Bile is then stored in the gallbladder and used for fat emulsification.\n\nOption B — Detoxification of drugs The liver is the primary site for drug metabolism (biotransformation) and detoxification of toxins (like ammonia into urea).\n\nOption C — Storage of glycogen The liver stores glucose in the form of glycogen (glycogenesis) and releases it when blood sugar is low (glycogenolysis).",
    memoryTip: "\"Liver = The Factory. Pancreas = The Sugar Controller.\"\n\nLiver makes bile. Pancreas makes insulin. Don't mix them up!",
    difficulty: 1
  },
  {
    id: "KRN-Q24",
    text: "The following are the types of muscles EXCEPT:",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Rough muscle"
    ],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Muscular System",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nThere are only three types of muscle tissue in the human body:\n1. Skeletal muscle (striated, voluntary)\n2. Smooth muscle (non-striated, involuntary — found in organs/vessels)\n3. Cardiac muscle (striated, involuntary — found only in the heart)\n\n\"Rough muscle\" is not a biological term for any muscle type.\n\n❌ Why the Other Options are WRONG\n\nOptions A, B, & C — Skeletal, Smooth, and Cardiac These are the three scientifically recognized categories of muscle tissue based on their structure and function.",
    memoryTip: "\"S-S-C: Skeletal, Smooth, Cardiac\"\n\nThink of the heart (cardiac), the stomach (smooth), and the biceps (skeletal).",
    difficulty: 1
  },
  {
    id: "KRN-Q25",
    text: "The following are the parts of the small intestine EXCEPT:",
    options: [
      "Duodenum",
      "Jejunum",
      "Ileum",
      "Cecum"
    ],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Digestive System",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nThe cecum is the first part of the large intestine (colon), where the small intestine (ileum) joins it at the ileocecal valve. The appendix is attached to the cecum.\n\n❌ Why the Other Options are WRONG\n\nOptions A, B, & C — Duodenum, Jejunum, and Ileum These are the three segments of the small intestine in order from the stomach to the large intestine.\n- Duodenum: First part (C-shaped, ~25cm)\n- Jejunum: Middle part (~2.5m)\n- Ileum: Final part (~3.5m)",
    memoryTip: "\"D-J-I: Dow Jones Industrial (Duodenum, Jejunum, Ileum)\"\n\nSmall intestine = DJI. Large intestine starts with the Cecum.",
    difficulty: 1
  },
  {
    id: "KRN-Q26",
    text: "The following are the functions of the skeletal system EXCEPT:",
    options: [
      "Support",
      "Protection",
      "Movement",
      "Production of heat"
    ],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Skeletal System",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nProduction of heat (thermogenesis) is a primary function of the muscular system, not the skeletal system. When muscles contract (including shivering), they release heat as a metabolic byproduct.\n\n❌ Why the Other Options are WRONG\n\nOption A — Support The skeleton provides the structural framework for the body and supports soft tissues.\n\nOption B — Protection Bones protect vital internal organs (e.g., skull protects brain, ribs protect heart/lungs).\n\nOption C — Movement Bones act as levers that muscles pull on to produce movement at joints.",
    memoryTip: "\"Bones = Shield & Frame. Muscles = Engine & Heater.\"\n\nBones protect and support. Muscles move and heat.",
    difficulty: 1
  },
  {
    id: "KRN-Q27",
    text: "The following are the parts of the urinary system EXCEPT:",
    options: [
      "Kidneys",
      "Ureters",
      "Urinary bladder",
      "Uterus"
    ],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Urinary System",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nThe uterus is part of the female reproductive system, not the urinary system. Its function is to house and nourish a developing foetus.\n\n❌ Why the Other Options are WRONG\n\nOption A — Kidneys The primary organs that filter blood and produce urine.\n\nOption B — Ureters The tubes that carry urine from the kidneys to the bladder.\n\nOption C — Urinary bladder The muscular sac that stores urine until it is excreted.",
    memoryTip: "\"Ureter = Tube to bladder. Urethra = Tube to outside. Uterus = Baby house.\"\n\nDon't confuse the 3 'U's!",
    difficulty: 1
  },
  {
    id: "KRN-Q28",
    text: "The following are the types of joints EXCEPT:",
    options: [
      "Fibrous joints",
      "Cartilaginous joints",
      "Synovial joints",
      "Muscular joints"
    ],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Skeletal System",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nJoints are classified structurally into three types based on the material that binds the bones together:\n1. Fibrous joints (immovable, e.g., skull sutures)\n2. Cartilaginous joints (slightly movable, e.g., intervertebral discs)\n3. Synovial joints (freely movable, e.g., knee, shoulder)\n\n\"Muscular joints\" is not a classification of joints. Muscles attach to bones at joints, but they don't form the joint itself.\n\n❌ Why the Other Options are WRONG\n\nOptions A, B, & C — Fibrous, Cartilaginous, and Synovial These are the three standard anatomical classifications of joints.",
    memoryTip: "\"F-C-S: Fibrous (Fixed), Cartilaginous (Cushioned), Synovial (Sliding)\"\n\nFixed → Slightly movable → Freely movable.",
    difficulty: 1
  },
  {
    id: "KRN-Q29",
    text: "The following are the functions of the skin EXCEPT:",
    options: [
      "Protection",
      "Regulation of body temperature",
      "Sensation",
      "Production of vitamin C"
    ],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Integumentary System",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nThe skin produces Vitamin D (specifically D3) when exposed to ultraviolet (UV) radiation from sunlight. It does NOT produce Vitamin C. Vitamin C must be obtained through diet (citrus fruits, vegetables).\n\n❌ Why the Other Options are WRONG\n\nOption A — Protection The skin acts as a physical, chemical, and biological barrier against pathogens, UV light, and dehydration.\n\nOption B — Regulation of body temperature The skin regulates temperature through sweat production and by controlling blood flow to the surface (vasodilation/vasoconstriction).\n\nOption C — Sensation The skin contains sensory receptors for touch, pressure, pain, and temperature.",
    memoryTip: "\"Skin = Sun = Vitamin D (D for Day/Sun). Vitamin C = Citrus.\"\n\nSunlight + Skin = Vitamin D. Orange + Mouth = Vitamin C.",
    difficulty: 1
  },
  {
    id: "KRN-Q30",
    text: "The following are the parts of the respiratory system EXCEPT:",
    options: [
      "Nose",
      "Pharynx",
      "Larynx",
      "Oesophagus"
    ],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Respiratory System",
    sourcePaper: "NCK KRN Diploma Year 1 Study Guide",
    explanation: "✅ Why D is CORRECT\n\nThe oesophagus is part of the digestive system. It is the muscular tube that carries food and liquids from the pharynx to the stomach. The respiratory equivalent (the \"windpipe\") is the trachea.\n\n❌ Why the Other Options are WRONG\n\nOption A — Nose The entry point for air, where it is filtered, warmed, and moistened.\n\nOption B — Pharynx (Throat) A common passageway for both air and food.\n\nOption C — Larynx (Voice box) Contains the vocal cords and acts as a switching mechanism to route air and food into the proper channels (via the epiglottis).",
    memoryTip: "\"Trachea = Air (Tree of life). Oesophagus = Eat (starts with E).\"\n\nAir goes down the Trachea. Food goes down the Oesophagus.",
    difficulty: 1
  }
];
