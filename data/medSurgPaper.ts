import { Question } from '../types';

export const MED_SURG_EXAM_PAPER: Question[] = [
  {
    id: "MS-Q1",
    text: "A patient with venous thrombo-embolism is initially treated with:",
    options: ["Heparin and warfarin", "Heparin alone", "Warfarin and Aspirin", "Alteplase and Heparin"],
    correctAnswerIndex: 0,
    category: "Cardiovascular System",
    topic: "Venous Thrombo-embolism Treatment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Venous thrombo-embolism (VTE) — which includes deep vein thrombosis (DVT) and pulmonary embolism (PE) — requires anticoagulation to prevent the clot from growing and to allow the body's own clot-dissolving system to work. The standard initial treatment is to start both heparin AND warfarin at the same time. Here is why:\n\n- **Heparin** works immediately (within minutes to hours) by activating antithrombin III, which rapidly blocks clot formation.\n- **Warfarin** takes 3–5 days to reach therapeutic levels because it works by blocking vitamin K-dependent clotting factors, which must first be depleted.\n- By overlapping them, there is no gap in anticoagulation protection. Heparin is continued until warfarin reaches a therapeutic INR (2.0–3.0), then heparin is stopped.\n\n**Why each option is wrong:**\n\n- **B. Heparin alone** — Using only heparin initially is not wrong, but warfarin must eventually be started and is typically initiated concurrently from day one to avoid delays. Heparin alone long-term is impractical.\n- **C. Warfarin and Aspirin** — Aspirin is an antiplatelet drug, not a primary anticoagulant for VTE. Warfarin alone without heparin leaves the patient unprotected for days while warfarin takes effect. This combination is inappropriate for acute VTE.\n- **D. Alteplase and Heparin** — Alteplase is a thrombolytic (clot-buster). It is reserved only for massive, life-threatening PE with haemodynamic instability. It is not used for routine VTE.",
    memoryTip: "START both at once. Heparin = FAST guard. Warfarin = SLOW builder. They overlap until warfarin is ready, then heparin steps aside.",
    difficulty: 2
  },
  {
    id: "MS-Q2",
    text: "Sympathetic stimulation of the cardiovascular system causes:",
    options: [
      "Increased heart rate and constriction of coronary arteries",
      "Constriction of GIT secretory gland vessels with increased flow of digestive juices",
      "Increased peripheral resistance and dilatation of coronary arteries",
      "Increased force of heart contraction and reduced peripheral resistance"
    ],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "Sympathetic Stimulation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The sympathetic nervous system activates the \"fight or flight\" response. Its effects on the cardiovascular system include:\n\n- **Increased heart rate and force of contraction** (via beta-1 receptors in the heart)\n- **Vasoconstriction of most peripheral vessels** (via alpha-1 receptors) → increases peripheral resistance → diverts blood away from the skin and gut toward muscles\n- **Vasodilation of coronary arteries** (via beta-2 receptors) → delivers more oxygen and fuel to the hardworking heart muscle\n- **Constriction of GIT vessels** — reduces blood to the digestive system, as digestion is not a priority during emergencies\n\n**Why each option is wrong:**\n\n- **A.** Increased heart rate is correct ✓ but constriction of coronary arteries is wrong ✗ — Sympathetic stimulation dilates coronary arteries to supply the heart with more oxygen during stress.\n- **B.** Constriction of GIT vessels is correct ✓ but increased digestive juices is wrong ✗ — Sympathetic activity suppresses digestion; it's the parasympathetic system that increases digestive secretions.\n- **D.** Increased force of contraction is correct ✓ but reduced peripheral resistance is wrong ✗ — Sympathetic stimulation increases peripheral resistance to redirect blood to vital organs.",
    memoryTip: "FIGHT or FLIGHT = pump HARDER, redirect blood to HEART and MUSCLES. Gut and skin can wait. Coronaries open wide = heart gets fuel. Peripheral vessels clamp down = blood pressure goes up.",
    difficulty: 2
  },
  {
    id: "MS-Q3",
    text: "In myocardial infarction, Morphine is administered to:",
    options: ["Dilate coronary blood vessels", "Prevent fibrillation of the ventricles", "Decrease anxiety and restlessness", "Prevent shock and relieve pain"],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "Morphine in Myocardial Infarction",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "In myocardial infarction (heart attack), morphine is given because:\n\n1. It is a powerful **analgesic** — it relieves the severe chest pain, which in turn reduces the massive sympathetic (\"fight or flight\") activation caused by pain.\n2. It has a strong **anxiolytic** effect — it calms the patient, reducing anxiety and restlessness.\n3. By reducing pain and anxiety, it decreases the heart's oxygen demand (because a stressed, anxious heart beats faster and harder, needing more oxygen — which is exactly what an ischaemic heart cannot afford).\n4. Morphine also causes mild vasodilation, slightly reducing the work the heart must do.\n\n**Why each option is wrong:**\n\n- **A. Dilate coronary blood vessels** — Coronary vasodilation is the role of nitrates (GTN/nitroglycerin), not morphine.\n- **B. Prevent fibrillation** — Anti-arrhythmic drugs (like amiodarone or lidocaine) prevent ventricular fibrillation. Morphine has no direct anti-arrhythmic action.\n- **D. Prevent shock and relieve pain** — Morphine actually carries the risk of causing hypotension (low blood pressure), especially if given too fast. It does relieve pain, but \"preventing shock\" is not a recognised indication.",
    memoryTip: "MORPHINE in MI = Calm the patient, ease the pain. A calm heart uses less oxygen. Less oxygen demand = less damage to an already starving heart muscle.",
    difficulty: 2
  },
  {
    id: "MS-Q4",
    text: "Treatment of megaloblastic anaemia includes:",
    options: [
      "Chemotherapy, radiotherapy, hydration",
      "Oxygen therapy, hydration and iron supplements",
      "Blood transfusion, iron supplements, splenectomy",
      "Oxygen therapy, folate supplements, alcohol restriction"
    ],
    correctAnswerIndex: 3,
    category: "Haematology",
    topic: "Megaloblastic Anaemia Treatment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Megaloblastic anaemia is caused by deficiency of folate (vitamin B9) or vitamin B12, which are needed for proper DNA synthesis and red blood cell maturation. Without them, red cells become abnormally large and dysfunctional (megaloblasts). The treatment targets the cause:\n\n- **Folate supplements** — replace the deficient nutrient needed to make healthy red cells.\n- **Alcohol restriction** — alcohol is a common cause of folate deficiency because it interferes with folate absorption and metabolism. Eliminating alcohol removes the ongoing cause.\n- **Oxygen therapy** — when anaemia is severe, supplemental oxygen supports tissues that are not getting enough oxygen due to low haemoglobin.\n\n**Why each option is wrong:**\n\n- **A.** Chemotherapy and radiotherapy are cancer treatments — they actually cause megaloblastic changes, not treat them.\n- **B.** Iron supplements treat iron-deficiency anaemia (microcytic, hypochromic). Megaloblastic anaemia is a different disease — iron will not help.\n- **C.** Splenectomy is used in hereditary spherocytosis or refractory immune thrombocytopenia — not in megaloblastic anaemia.",
    memoryTip: "MEGALO = big cells due to FOLATE/B12 shortage. Give FOLATE back, cut the ALCOHOL, and support with OXYGEN. Don't give iron — wrong anaemia, wrong treatment.",
    difficulty: 2
  },
  {
    id: "MS-Q5",
    text: "Factors that can lead to myocardial ischaemia include:",
    options: [
      "Anaemia, aortic valve stenosis, polycythaemia",
      "Mitral valve stenosis, anaemia, left ventricular hypertrophy",
      "Anaemia, aortic valve stenosis, mitral valve stenosis",
      "Polycythaemia, mitral valve stenosis, left ventricular hypertrophy"
    ],
    correctAnswerIndex: 0,
    category: "Haematology",
    topic: "Factors Leading to Myocardial Ischaemia",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Myocardial ischaemia means the heart muscle is not getting enough oxygen. This happens when oxygen supply falls or oxygen demand increases. All three in option A achieve this:\n\n- **Anaemia** — fewer red cells means less oxygen delivered to the heart muscle even though blood flow may be adequate.\n- **Aortic valve stenosis** — the narrowed aortic valve forces the left ventricle to work much harder (increased O₂ demand), and it also reduces coronary perfusion pressure (reduced O₂ supply).\n- **Polycythaemia** — too many red cells thickens the blood (increased viscosity), slowing flow through small coronary vessels and reducing oxygen delivery to cardiac tissue.\n\n**Why each option is wrong:**\n\n- **B & D** — Mitral valve stenosis primarily affects the left atrium and causes pulmonary problems (pulmonary hypertension, right heart failure); it is less directly linked to myocardial ischaemia.\n- **C** — Mitral valve stenosis (see above) is not a direct cause of myocardial ischaemia in the same reliable way as the three factors in option A.",
    memoryTip: "Ischaemia = NOT ENOUGH OXYGEN to heart. Less O₂ carriers (anaemia), blocked outflow (aortic stenosis), sticky thick blood (polycythaemia) — all starve the heart.",
    difficulty: 2
  },
  {
    id: "MS-Q6",
    text: "Which of the following statements is TRUE:",
    options: [
      "Colloids are administered in patients with cardiogenic shock to expand circulatory volume",
      "Atherosclerosis is more common in males than females",
      "Alcohol intake is a leading cause of aortic aneurism",
      "Virchow's triad describes pathogenesis of leukemia"
    ],
    correctAnswerIndex: 1,
    category: "Haematology",
    topic: "True Statement",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Males have significantly higher rates of atherosclerosis (hardening and narrowing of arteries due to plaque build-up) compared to pre-menopausal women. This is because oestrogen in women has a protective effect — it raises HDL (\"good\") cholesterol and lowers LDL. After menopause, women lose this protection and their risk rises to approach that of men. However, at all ages before menopause, atherosclerosis is more prevalent in males.\n\n**Why each option is wrong:**\n\n- **A. Cardiogenic shock** is caused by a failing heart pump. Giving volume expanders (colloids) would overload an already struggling heart, worsening the condition. Fluid resuscitation is used in hypovolaemic, not cardiogenic, shock.\n- **C.** Smoking and hypertension are the leading causes of aortic aneurysm. Alcohol is associated with liver disease, cardiomyopathy, and pancreatitis — not primarily aortic aneurysm.\n- **D. Virchow's triad** describes the three factors that lead to venous thrombosis: (1) endothelial injury, (2) blood stasis, (3) hypercoagulability. It has nothing to do with leukaemia.",
    memoryTip: "VIRCHOW's triad = DVT risk. ATHEROSCLEROSIS = more in MEN before menopause. Oestrogen = women's heart shield. Smoking + hypertension = aortic aneurysm culprits.",
    difficulty: 2
  },
  {
    id: "MS-Q7",
    text: "How much exercise each week is advised to help prevent heart disease:",
    options: ["60 minutes on average", "90 minutes on average", "120 minutes on average", "150 minutes on average"],
    correctAnswerIndex: 3,
    category: "Haematology",
    topic: "Exercise to Prevent Heart Disease",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Both the World Health Organization (WHO) and the American Heart Association (AHA) recommend at least 150 minutes of moderate-intensity aerobic physical activity per week (equivalent to 30 minutes on 5 days a week) for adults to reduce cardiovascular disease risk. Alternatively, 75 minutes of vigorous-intensity exercise per week is equivalent. Regular exercise reduces blood pressure, improves cholesterol levels, maintains healthy weight, reduces blood clotting tendency, and strengthens the heart muscle.\n\n**Why each option is wrong:**\n\n- **A, B, C** — These amounts fall below the established minimum threshold recommended by international health guidelines for cardiovascular protection.",
    memoryTip: "150 minutes = the GOLDEN NUMBER. Think of it as 30 minutes × 5 days a week. Less than this and the heart does not get the full protective benefit of exercise.",
    difficulty: 1
  },
  {
    id: "MS-Q8",
    text: "In a severely anaemic patient, the nurse would expect to find:",
    options: ["Dyspnoea and tachycardia", "Cyanosis and pulmonary oedema", "Cardiomegaly and pulmonary fibrosis", "Dysrhythmias and wheezing"],
    correctAnswerIndex: 0,
    category: "Haematology",
    topic: "Severe Anaemia Clinical Findings",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "In severe anaemia, the blood carries much less oxygen than normal. The body compensates in two main ways:\n\n1. **Tachycardia** — the heart beats faster to circulate the remaining oxygen-carrying red cells more rapidly around the body.\n2. **Dyspnoea** — the patient feels breathless because tissues are not getting enough oxygen; the respiratory centre responds by increasing the breathing rate.\n\nBoth are classic, expected compensatory responses to severe anaemia.\n\n**Why each option is wrong:**\n\n- **B. Cyanosis** — Cyanosis (blue colouration) occurs when there is too much deoxygenated haemoglobin in the blood. In anaemia, there is actually too little haemoglobin — so the patient appears pale/pallid, not cyanotic. Pulmonary oedema is a cardiac, not anaemia-specific, finding.\n- **C.** Cardiomegaly can develop in chronic anaemia (the heart enlarges from overwork), but pulmonary fibrosis is unrelated to anaemia.\n- **D.** Dysrhythmias can occur in severe anaemia, but wheezing is a respiratory finding related to airway obstruction, not anaemia.",
    memoryTip: "ANAEMIA = PALE patient + FAST heart (tachycardia) + SHORT of breath (dyspnoea). The heart tries to compensate by pumping faster. Anaemia = pale, not blue.",
    difficulty: 2
  },
  {
    id: "MS-Q9",
    text: "When obtaining assessment data from a patient with a microcytic, hypochromic anaemia, the nurse would question the patient about:",
    options: ["Folic acid intake", "Dietary intake of iron", "A history of gastric surgery", "A history of sickle cell anaemia"],
    correctAnswerIndex: 1,
    category: "Haematology",
    topic: "Microcytic Hypochromic Anaemia Assessment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Microcytic = small red blood cells. Hypochromic = pale red blood cells with less haemoglobin than normal. Together, these features point specifically to iron deficiency anaemia — the most common type of anaemia worldwide. Iron is an essential component of haemoglobin; without enough iron, the cells made are smaller and contain less haemoglobin.\n\nThe nurse should assess dietary iron intake (red meat, legumes, leafy greens, fortified foods) to identify if the diet is the source of the deficiency.\n\n**Why each option is wrong:**\n\n- **A. Folic acid intake** — Folic acid deficiency causes megaloblastic anaemia (large red cells — the opposite of microcytic). Not relevant here.\n- **C. History of gastric surgery** — This would be relevant for vitamin B12 deficiency (since intrinsic factor, needed for B12 absorption, is produced in the stomach), leading to pernicious/megaloblastic anaemia — not microcytic anaemia.\n- **D. Sickle cell anaemia** — Sickle cell produces normocytic (normal size) red cells, with an abnormal shape. Not microcytic hypochromic.",
    memoryTip: "SMALL + PALE cells = IRON is missing. Ask what they EAT. Microcytic + hypochromic = iron deficiency = dietary assessment first.",
    difficulty: 2
  },
  {
    id: "MS-Q10",
    text: "The most common type of leukaemia in older adults is:",
    options: ["Acute myelocytic leukaemia", "Acute lymphocytic leukaemia", "Chronic myelocytic leukaemia", "Chronic lymphocytic leukaemia"],
    correctAnswerIndex: 3,
    category: "Haematology",
    topic: "Most Common Leukaemia in Older Adults",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Chronic lymphocytic leukaemia (CLL) is the most common leukaemia in adults over 65 years of age in Western countries and is the most common adult leukaemia overall. It is a slow-growing (indolent) cancer of B-lymphocytes. Many patients are asymptomatic at diagnosis and are only identified on routine blood count. It rarely occurs below age 40.\n\n**Quick reference — who gets which leukaemia:**\n\n- **Acute lymphocytic (ALL)**: Children\n- **Acute myelocytic (AML)**: Adults (all ages), most common acute leukaemia in adults\n- **Chronic myelocytic (CML)**: Middle-aged adults\n- **Chronic lymphocytic (CLL)**: Elderly (>65 years) — most common overall adult leukaemia",
    memoryTip: "CLL = CLever Leukaemia of the eLdeLy. Slow, sneaky, and most common in the elderly. ALL = 'All Little (children)' — it's the paediatric one.",
    difficulty: 2
  },
  {
    id: "MS-Q11",
    text: "Which is a priority nursing intervention for a patient during the acute phase of rheumatic fever:",
    options: [
      "Administration of antibiotics as ordered",
      "Management of pain with opioid analgesics",
      "Encouragement of fluid intake for hydration",
      "Performance of frequent active range-of-motion exercises"
    ],
    correctAnswerIndex: 0,
    category: "Haematology",
    topic: "Priority Nursing: Acute Rheumatic Fever",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Rheumatic fever is an inflammatory disease that occurs as a complication of throat infection with Group A beta-haemolytic Streptococcus (Strep). The body's immune response attacks not only the bacteria but also the heart valves (carditis), joints, and other tissues. The priority is to administer antibiotics (typically penicillin or amoxicillin) to:\n\n1. Eradicate any remaining streptococcal organisms in the body.\n2. Prevent reinfection — repeated strep infections worsen cardiac damage progressively.\n3. Reduce ongoing inflammation by removing the trigger.\n\n**Why each option is wrong:**\n\n- **B.** Pain management is important but is not the priority. Aspirin (not opioids) is typically used for rheumatic fever pain and inflammation.\n- **C.** Hydration is a supportive measure, not a priority intervention that affects disease course.\n- **D.** Active range-of-motion exercises are contraindicated in the acute phase — the joints are severely inflamed and the patient needs bed rest to reduce the workload on the inflamed heart.",
    memoryTip: "RHEUMATIC FEVER = strep trigger. Kill the STREP first with ANTIBIOTICS. No strenuous activity — the heart is inflamed and needs REST.",
    difficulty: 2
  },
  {
    id: "MS-Q12",
    text: "The appropriate medication to administer to a 14-day-old baby weighing 4 kg who is convulsing will be:",
    options: ["Per rectal diazepam 2 mg", "IV Diazepam 1.2 mg", "IM Phenobarbital 10 mg", "IM Phenobarbitone 80 mg"],
    correctAnswerIndex: 3,
    category: "Paediatric Nursing",
    topic: "Neonatal Convulsions: Drug and Dose",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "In neonates, phenobarbitone (phenobarbital) is the first-line drug for seizures. The loading dose is 20 mg/kg IM or IV. For a 4 kg baby: 20 mg/kg × 4 kg = 80 mg. This dose is correct and appropriate.\n\nDiazepam is generally avoided or used with extreme caution in neonates because it can cause respiratory depression, apnoea, and accumulate to toxic levels due to the immature neonatal liver. Phenobarbitone is safer and more effective for neonatal seizures.\n\n**Why each option is wrong:**\n\n- **A. Per rectal diazepam 2 mg** — unreliable absorption in neonates; diazepam is not first-line in this age group.\n- **B. IV Diazepam 1.2 mg (0.3 mg/kg)** — diazepam is not recommended as first-line in neonates; risk of apnoea is high.\n- **C. IM Phenobarbital 10 mg** — a dose of only 10 mg for a 4 kg baby is far below the therapeutic loading dose (should be 80 mg). Underdosing will not control seizures.",
    memoryTip: "NEONATE SEIZURE = PHENOBARBITONE FIRST. DOSE = 20 mg/kg. Baby is 4 kg → 80 mg. Diazepam = risk of stopping breathing in a tiny baby. Don't use it first.",
    difficulty: 3
  },
  {
    id: "MS-Q13",
    text: "The most commonly used index for nutritional status is:",
    options: ["Height for age", "Weight for height", "Weight for age", "Mid upper arm circumference"],
    correctAnswerIndex: 2,
    category: "Paediatric Nursing",
    topic: "Nutritional Status Index",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Weight for age is the most widely used index for assessing nutritional status in children at the community and clinical level. It reflects the child's overall nutritional well-being relative to their age and is used to classify children as underweight, normal, or overweight. It is simple, quick, and requires only a scale and the child's birth date.\n\n**Understanding all the indices:**\n\n- **Weight for age**: General undernutrition (underweight) — most common screening tool\n- **Height/length for age**: Chronic malnutrition (stunting)\n- **Weight for height**: Acute malnutrition (wasting)\n- **MUAC**: Used for rapid field screening for severe acute malnutrition",
    memoryTip: "WEIGHT for AGE = the most BASIC and COMMON check. Just put the child on a scale and know their birthday. It's the starting point for all nutritional assessments.",
    difficulty: 1
  },
  {
    id: "MS-Q14",
    text: "A developmental milestone at 10 months of age is:",
    options: ["Pincer grasp", "Arranging 3 cubes", "Walks few steps without support", "Says mama, Dada"],
    correctAnswerIndex: 0,
    category: "Paediatric Nursing",
    topic: "Developmental Milestone at 10 Months",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The pincer grasp — using the thumb and index finger to pick up small objects — develops between 9 and 10 months of age. This is a critical fine motor milestone representing the maturation of hand coordination and cortical control. It allows babies to feed themselves small foods and explore the world in detail.\n\n**Why each option is wrong:**\n\n- **B. Arranging 3 cubes** — This milestone typically appears around 18 months.\n- **C. Walks few steps without support** — Walking independently usually begins between 12–15 months.\n- **D. Says mama, Dada specifically** — Saying \"mama\" and \"dada\" with meaning occurs around 10–12 months, but the pincer grasp is more precisely placed at 9–10 months and is the textbook answer for this age.",
    memoryTip: "9–10 months = PINCER GRASP. Baby picks up a Cheerio with thumb and finger. One year = walks. 18 months = stacks blocks. Learn the milestones in order — they always follow the same sequence.",
    difficulty: 2
  },
  {
    id: "MS-Q15",
    text: "A ten-year-old child with history of asthma is diagnosed with status asthmaticus; this child has:",
    options: ["Has severe wheezing", "Hasn't responded to treatment", "Requires emergency intubation", "Has underlying pneumonia"],
    correctAnswerIndex: 1,
    category: "Paediatric Nursing",
    topic: "Status Asthmaticus Definition",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Status asthmaticus is defined as a severe asthma attack that does not respond to standard bronchodilator treatment (repeated doses of beta-2 agonists such as salbutamol). The patient remains in severe respiratory distress despite initial treatment. This is a medical emergency because the bronchospasm is persistent and life-threatening, potentially leading to respiratory failure.\n\n**Why each option is wrong:**\n\n- **A. Severe wheezing** — All moderate-to-severe asthma attacks involve wheezing. Status asthmaticus is defined specifically by the failure to respond to treatment, not merely by the severity of wheezing.\n- **C. Requires emergency intubation** — Intubation may eventually be needed in status asthmaticus, but it is not the defining feature. Many patients with status asthmaticus are managed without intubation using IV steroids, magnesium, and heliox.\n- **D. Underlying pneumonia** — Pneumonia is not a defining feature of status asthmaticus, though infection can sometimes trigger it.",
    memoryTip: "STATUS ASTHMATICUS = the asthma that WON'T QUIT. Given salbutamol again and again — still no relief. That non-response is the definition. STATUS = STUCK in bronchospasm.",
    difficulty: 2
  },
  {
    id: "MS-Q16",
    text: "Which of the following statements is true about tetanus?",
    options: [
      "Spasms are common initially but do not cause significant pain",
      "Risus sardonicus can be present",
      "Neonatal transmission is through wounds from C-Sections",
      "Anti-tetanospasmin immunoglobulin is worthless once the disease is clinically present"
    ],
    correctAnswerIndex: 1,
    category: "Paediatric Nursing",
    topic: "True Statement About Tetanus",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Risus sardonicus (Latin for \"sardonic grin\") is a characteristic facial muscle spasm in tetanus that causes a fixed, grotesque grimace. It results from the toxin (tetanospasmin) causing sustained contraction of the facial muscles. It is one of the classic, recognisable signs of tetanus — particularly trismus (lockjaw) which affects the jaw muscles, and risus sardonicus which affects the face.\n\n**Why each option is wrong:**\n\n- **A.** Tetanus spasms are extremely painful — they are one of the most agonising features of the disease. This statement is completely false.\n- **C.** Neonatal tetanus (tetanus neonatorum) occurs from contaminated cutting of the umbilical cord, not from C-sections.\n- **D. Anti-tetanospasmin immunoglobulin** (human tetanus immunoglobulin, HTIG) is still useful even after symptoms appear — it neutralises any unbound toxin still circulating in the body. It cannot reverse damage already done to nerve tissue, but it limits further damage.",
    memoryTip: "RISUS SARDONICUS = the sinister SMILE of tetanus. Toxin locks the facial muscles into a grin. Remember: Lockjaw + Sardonic grin + Painful spasms = tetanus.",
    difficulty: 2
  },
  {
    id: "MS-Q17",
    text: "The most common congenital heart defect with a left-right shunt causing congestive heart failure in paediatrics is:",
    options: ["Atrial septal defect", "Atrioventricular canal", "Ventricular septal defect", "Patent ductus arteriosus"],
    correctAnswerIndex: 2,
    category: "Paediatric Nursing",
    topic: "Most Common Congenital Heart Defect with L→R Shunt",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Ventricular septal defect (VSD) — a hole in the wall separating the two ventricles — is the single most common congenital heart defect, accounting for approximately 25–30% of all congenital heart disease. Because the left ventricle generates higher pressure than the right, blood flows from left to right through the defect (left-to-right shunt), overloading the pulmonary circulation and the right heart. Large VSDs cause congestive heart failure (CHF) in infants and children.\n\n**Why each option is wrong:**\n\n- **A. Atrial septal defect (ASD)** — also a left-to-right shunt, but less common than VSD and less likely to cause CHF in infancy.\n- **B. Atrioventricular canal** — a combination defect affecting both atria and ventricles; less common overall.\n- **D. Patent ductus arteriosus (PDA)** — also causes a left-to-right shunt and CHF, but is less common than VSD and occurs specifically when the ductus arteriosus fails to close after birth.",
    memoryTip: "VSD = the MOST COMMON congenital heart defect — the classic answer for paediatric CHF with a left-to-right shunt. Think of it as the 'hole in the heart' you see most often.",
    difficulty: 2
  },
  {
    id: "MS-Q18",
    text: "An 18-month-old has been brought to the emergency room with irritability, lethargy over 2 days, dry skin and increased pulse. Based upon these initial findings, the nurse would assess the child for additional findings of:",
    options: ["Septicaemia", "Dehydration", "Hypokalaemia", "Hypercalcaemia"],
    correctAnswerIndex: 1,
    category: "Paediatric Nursing",
    topic: "18-Month-Old: Irritability and Dry Skin",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The clinical picture — irritability, lethargy, dry skin, and tachycardia (increased pulse) — are all classic early-to-moderate signs of dehydration in a toddler. These occur because fluid loss reduces blood volume, stimulating the sympathetic system (raising heart rate) and manifesting in the skin (reduced skin turgor, dryness).\n\nAdditional findings the nurse should assess for include: sunken anterior fontanelle (in infants), sunken eyes, dry mucous membranes, reduced or absent tears, decreased urine output, and prolonged capillary refill time.\n\n**Why each option is wrong:**\n\n- **A. Septicaemia** would present with fever, shock features (very fast heart rate, poor perfusion), petechiae, or other signs of infection — not the classic picture described.\n- **C. Hypokalaemia** causes muscle weakness, cramps, and cardiac arrhythmias — not dry skin and irritability primarily.\n- **D. Hypercalcaemia** causes lethargy and weakness, but dry skin and tachycardia in this context are much more consistent with dehydration.",
    memoryTip: "DRY skin + FAST pulse + IRRITABLE toddler = the body is SHORT on FLUIDS. Dehydration is the most common paediatric emergency in developing countries. Think fluids first.",
    difficulty: 2
  },
  {
    id: "MS-Q19",
    text: "Which of the following disorders leads to cyanosis from deoxygenated blood entering the systemic arterial circulation?",
    options: ["Aortic stenosis", "Coarctation of aorta", "Patent ductus arteriosus", "Tetralogy of Fallot"],
    correctAnswerIndex: 3,
    category: "Paediatric Nursing",
    topic: "Cyanosis from Deoxygenated Blood in Systemic Circulation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Tetralogy of Fallot (TOF) is the most common cyanotic congenital heart disease. It consists of four defects: (1) pulmonary stenosis, (2) ventricular septal defect, (3) overriding aorta, and (4) right ventricular hypertrophy. Due to pulmonary stenosis, it is harder for blood to flow into the lungs, so deoxygenated blood from the right ventricle shunts through the VSD into the aorta (a right-to-left shunt) — entering systemic circulation without being oxygenated. This causes central cyanosis (\"blue baby\").\n\n**Why each option is wrong:**\n\n- **A. Aortic stenosis** — causes obstruction of blood leaving the left ventricle; does not cause mixing of deoxygenated blood with the systemic circulation.\n- **B. Coarctation of aorta** — a narrowing of the aorta that causes hypertension; not a cause of cyanosis.\n- **C. Patent ductus arteriosus (PDA)** — this is typically a left-to-right shunt (oxygenated blood flows to the pulmonary artery), not causing cyanosis under normal conditions.",
    memoryTip: "BLUE BABY = TETRALOGY of FALLOT. Right-to-left shunt = dirty blood goes to the body. Remember the 4 features: PS + VSD + overriding aorta + RVH = FALLOT.",
    difficulty: 2
  },
  {
    id: "MS-Q20",
    text: "A child newly diagnosed with diabetes mellitus has been stabilized with insulin injections daily. A nurse prepares a discharge teaching plan regarding insulin. The teaching plan should reinforce which of the following concepts?",
    options: [
      "Always keep insulin vials frozen",
      "Increase the amount of insulin before exercise",
      "Ketones in the urine signify a need for less insulin",
      "Systematically rotate injection sites"
    ],
    correctAnswerIndex: 3,
    category: "Paediatric Nursing",
    topic: "Insulin Injection Education",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Rotating injection sites is essential for two reasons:\n\n1. **Prevention of lipodystrophy** — repeatedly injecting into the same site causes fat tissue to harden (hypertrophy) or break down (atrophy), creating lumps that affect insulin absorption unpredictably.\n2. **Consistent insulin absorption** — rotating ensures reliable and predictable insulin uptake each time.\n\n**Why each option is wrong:**\n\n- **A.** Insulin should NEVER be frozen — freezing destroys insulin. It is stored in the refrigerator (2–8°C) or at room temperature for up to 28–30 days once opened.\n- **B.** Exercise lowers blood glucose because muscles use glucose without needing as much insulin. Before exercise, the insulin dose should be decreased (or a carbohydrate snack given), not increased — to prevent hypoglycaemia.\n- **C.** Ketones in the urine indicate insulin deficiency and DKA — the body is breaking down fat because there is not enough insulin. This means the patient needs more insulin, not less.",
    memoryTip: "ROTATE sites = ROTATE regularly = RELIABLE absorption + no lumps. Never freeze insulin. Exercise → blood sugar DROPS → need LESS insulin. Ketones → need MORE insulin.",
    difficulty: 2
  },
  {
    id: "MS-Q21",
    text: "Which stage of development is most unstable and challenging regarding development of personal identity?",
    options: ["Adolescence", "Toddlerhood", "Childhood", "Infancy"],
    correctAnswerIndex: 0,
    category: "Paediatric Nursing",
    topic: "Stage of Identity Development",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "According to Erik Erikson's stages of psychosocial development, adolescence (approximately ages 12–18) is characterised by the conflict of Identity vs. Role Confusion. This is the stage where individuals actively explore and question who they are — their values, beliefs, sexual identity, career goals, and social roles. It is the most turbulent stage for personal identity development, as teenagers try to reconcile their childhood self with their emerging adult self.\n\n**Why each option is wrong:**\n\n- **B. Toddlerhood** — Erikson's conflict here is Autonomy vs. Shame/Doubt. Toddlers struggle with independence, not identity formation.\n- **C. Childhood (school age)** — Erikson's conflict is Industry vs. Inferiority — developing competence and skills, not exploring personal identity.\n- **D. Infancy** — Erikson's conflict is Trust vs. Mistrust — the baby learns whether the world is safe and reliable, far from identity development.",
    memoryTip: "ADOLESCENCE = WHO AM I? This is Erikson's IDENTITY CRISIS stage. Teenagers are trying on different personalities, roles, and values to find out who they are. The most unstable and challenging stage for identity.",
    difficulty: 1
  },
  {
    id: "MS-Q22",
    text: "A 10-year-old is admitted for acute appendicitis, and an appendectomy is performed. Which nursing intervention is most appropriate to facilitate normal growth and development?",
    options: [
      "Allow the family to bring in the child's favourite computer games",
      "Encourage the parents to room-in with the child",
      "Encourage the child to rest and read",
      "Allow the child to participate in activities with other individuals in the same age group when the condition permits"
    ],
    correctAnswerIndex: 3,
    category: "Paediatric Nursing",
    topic: "Facilitating Development: 10-Year-Old Post-Appendectomy",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A 10-year-old is in Erikson's stage of Industry vs. Inferiority and Piaget's concrete operational stage. At this age, peer interaction and cooperation are the developmental priorities. Children learn social skills, team work, and a sense of competence through activities with peers. Facilitating contact with other children in the hospital or ward (when medically safe) best supports normal development.\n\n**Why each option is wrong:**\n\n- **A.** Computer games are solitary activities that do not promote social development, which is the priority for this age group.\n- **B.** Parental rooming-in is more important for infants and toddlers who need primary attachment figures; a 10-year-old benefits more from peer interaction.\n- **C.** Resting and reading are appropriate recovery activities but are passive and do not actively facilitate developmental needs.",
    memoryTip: "School-age child (6–12) = INDUSTRY stage = needs to feel COMPETENT and CONNECTED to PEERS. Isolating them in bed doesn't support development. Let them interact with other kids safely.",
    difficulty: 2
  },
  {
    id: "MS-Q23",
    text: "Dysentery is classified if:",
    options: ["There is dehydration", "Stools are watery", "Fast breathing is present", "There is blood in the stool"],
    correctAnswerIndex: 3,
    category: "Paediatric Nursing",
    topic: "Dysentery Classification",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Dysentery is defined as diarrhoea that contains visible blood in the stool. This distinguishes it from simple, watery diarrhoea. The blood indicates invasive inflammation of the gut wall — typically caused by bacteria such as Shigella or Entamoeba histolytica. In the IMCI (Integrated Management of Childhood Illness) framework used in developing countries, the presence of blood in stool is the key criterion for classifying a child's diarrhoea as dysentery, which requires antibiotic treatment.\n\n**Why each option is wrong:**\n\n- **A.** Dehydration can occur with any type of diarrhoea — watery or bloody — and is assessed separately, not as part of dysentery classification.\n- **B.** Watery stools describe typical acute diarrhoea or cholera-type diarrhoea — not dysentery.\n- **C.** Fast breathing is not a criterion for dysentery — it may indicate pneumonia or respiratory distress, a separate condition assessed under IMCI.",
    memoryTip: "DYSENTERY = DIRTY RED STOOLS. Blood in stool = gut wall is INVADED. No blood = simple watery diarrhoea. One word: BLOOD = dysentery.",
    difficulty: 1
  },
  {
    id: "MS-Q24",
    text: "One of the factors associated with congenital heart defects is:",
    options: [
      "Maternal hypertension",
      "Maternal age under 18 years",
      "Maternal insulin-dependent diabetes",
      "Maternal infection with malaria"
    ],
    correctAnswerIndex: 2,
    category: "Paediatric Nursing",
    topic: "Factors in Congenital Heart Defects",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Maternal diabetes mellitus (especially Type 1/insulin-dependent diabetes) significantly increases the risk of congenital heart defects and other foetal malformations. Elevated blood glucose during early pregnancy — when the foetal heart is forming (3–8 weeks gestation) — disrupts normal cardiac development. Women with pre-gestational diabetes have a 2–5 times higher risk of having a baby with a congenital heart defect compared to non-diabetic mothers.\n\n**Why each option is wrong:**\n\n- **A.** Maternal hypertension is a risk factor for intrauterine growth restriction and placental problems, but it is not a primary risk factor for congenital heart defects.\n- **B.** Young maternal age (under 18) is associated with preterm birth and low birth weight, but not specifically with congenital heart defects.\n- **D.** Malaria in pregnancy causes anaemia and low birth weight; it is not a recognised cause of congenital heart defects.",
    memoryTip: "DIABETIC MOTHER = BABY'S HEART AT RISK. High sugar during heart formation (weeks 3–8) scrambles the blueprint. Tight glucose control in early pregnancy protects the foetal heart.",
    difficulty: 2
  },
  {
    id: "MS-Q25",
    text: "The following is true about Patent Ductus Arteriosus:",
    options: [
      "It occurs when the opening between the atria does not close immediately after birth",
      "The ductus arteriosus closes completely at birth; failure to which there is patent ductus arteriosus",
      "The ductus arteriosus closes completely by three months",
      "The child gains weight rapidly"
    ],
    correctAnswerIndex: 2,
    category: "Paediatric Nursing",
    topic: "Patent Ductus Arteriosus",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The ductus arteriosus is a foetal blood vessel that connects the pulmonary artery to the aorta, allowing blood to bypass the non-functional foetal lungs. At birth, when the baby takes its first breath:\n\n- Oxygen causes the ductus to constrict functionally within 24–72 hours.\n- Permanent anatomical closure (fibrosis) occurs by 6–8 weeks to 3 months in term infants.\n\nIf it remains open (patent) beyond this time, it is a PDA — a left-to-right shunt that overloads the lungs and can cause heart failure.\n\n**Why each option is wrong:**\n\n- **A.** The opening between the atria describes the **foramen ovale** — a different structure. Its closure gives rise to the fossa ovalis.\n- **B.** The ductus arteriosus does NOT close completely at birth. Functional closure begins at birth, but complete (anatomical) closure takes weeks to months.\n- **D.** Children with PDA typically have **poor weight gain** (failure to thrive) because of the increased cardiac workload and frequent respiratory infections — they do not gain weight rapidly.",
    memoryTip: "PDA = the PIPE between aorta and pulmonary artery that FORGOT to CLOSE. Should seal within 3 months of birth. PDA babies = poor weight gain + loud machinery murmur.",
    difficulty: 2
  },
  {
    id: "MS-Q26",
    text: "Black water fever that occurs in malaria is due to:",
    options: ["Impaired microcirculation", "Intravascular haemolysis", "Tissue hypoxia", "Adherence of red blood cells to blood vessels"],
    correctAnswerIndex: 1,
    category: "Paediatric Nursing",
    topic: "Blackwater Fever in Malaria",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Blackwater fever is a severe, life-threatening complication of Plasmodium falciparum malaria. The name comes from the dark (brown-black) colour of the urine. The mechanism is:\n\n1. Massive **intravascular haemolysis** — red blood cells are destroyed in large numbers inside the blood vessels.\n2. This releases large quantities of **haemoglobin** into the bloodstream.\n3. Excess free haemoglobin is filtered by the kidneys and excreted in urine, turning it dark (**haemoglobinuria**).\n4. This can lead to **acute kidney injury** as the haemoglobin precipitates in the renal tubules.\n\n**Why each option is wrong:**\n\n- **A.** Impaired microcirculation occurs in severe malaria but is not the specific cause of the black urine or the defining feature of blackwater fever.\n- **C.** Tissue hypoxia is a consequence of the haemolysis (less oxygen-carrying capacity), not the primary cause of blackwater fever.\n- **D.** Adherence of RBCs to blood vessels (cytoadherence) is characteristic of cerebral malaria, not blackwater fever.",
    memoryTip: "BLACKWATER = RED cells BURST inside blood vessels → FREE haemoglobin goes to urine → BLACK urine. Intravascular HAEMOLYSIS is the key. Think: blood cells pop = dark urine.",
    difficulty: 3
  },
  {
    id: "MS-Q27",
    text: "Ethylene Oxide gas is used for sterilisation of:",
    options: [
      "Bulky equipment which can withstand very high temperatures",
      "Heat-sensitive equipment and those that cannot be soaked in chemicals",
      "Laparotomy packs and cardiac catheters",
      "All surgical supplies and equipment"
    ],
    correctAnswerIndex: 1,
    category: "Surgical Nursing",
    topic: "Ethylene Oxide Sterilisation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Ethylene oxide (EtO) is a chemical gas used for low-temperature sterilisation of items that would be damaged by heat (like autoclaving) or cannot safely be soaked in liquid disinfectants. Common examples include: flexible endoscopes, electrical equipment, complex plastic surgical instruments, some catheters, and cardiac pacemakers. EtO penetrates packaging and kills all microorganisms including spores.\n\n**Why each option is wrong:**\n\n- **A.** Equipment that can withstand high temperatures (metal instruments, glass, laparotomy packs) is sterilised by steam autoclave — there is no need for EtO.\n- **C.** Laparotomy packs (cloth/linen) are sterilised by autoclaving, not EtO. Some catheters may use EtO, but this pairing is inconsistent.\n- **D.** EtO is NOT used for all surgical supplies — it is reserved specifically for heat-sensitive items. It is more expensive, takes longer, and requires special facilities.",
    memoryTip: "EtO = for things that MELT or BREAK in the autoclave. If it's plastic, electronic, or can't take heat — EtO is the solution. Heat-SENSITIVE = EtO-SAVED.",
    difficulty: 2
  },
  {
    id: "MS-Q28",
    text: "The ideal suture material should be:",
    options: [
      "Cheap and easily cut",
      "Small, strong and friendly to bacteria",
      "Tear easily through tissues, rigid and flexible",
      "Flexible, tear easily through tissue and unfriendly to bacteria"
    ],
    correctAnswerIndex: 3,
    category: "Surgical Nursing",
    topic: "Ideal Suture Material",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "An ideal suture has several characteristics:\n\n- **Flexible** — easy for the surgeon to handle and tie securely.\n- **Tears easily through tissue** — this is called having minimal \"tissue drag\"; the suture glides smoothly without causing extra trauma to delicate tissue.\n- **Unfriendly to bacteria (bacteriostatic)** — sutures that harbour bacteria create a nidus for infection (surgical site infection, SSI). The ideal suture resists bacterial colonisation.\n- Other ideal properties include: adequate tensile strength, minimal tissue reaction, and predictable absorption.\n\n**Why each option is wrong:**\n\n- **A.** Being \"cheap\" alone is not an ideal quality. Being friendly to bacteria would cause infection — the opposite of what is needed.\n- **B.** \"Friendly to bacteria\" is the opposite of ideal — this would encourage surgical infection.\n- **C.** \"Rigid\" is undesirable — sutures need to be flexible, not stiff.",
    memoryTip: "IDEAL SUTURE = FLEXIBLE (easy to tie) + GLIDES through tissue + ANTI-BACTERIAL. No bacteria, no infection. No rigidity, easy handling.",
    difficulty: 2
  },
  {
    id: "MS-Q29",
    text: "Surgery done to relieve symptoms is:",
    options: ["Curative", "Palliative", "Emergency", "Constructive"],
    correctAnswerIndex: 1,
    category: "Surgical Nursing",
    topic: "Palliative Surgery",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Palliative surgery is performed to relieve symptoms and improve quality of life — NOT to cure the underlying disease. For example, a bowel bypass in inoperable colon cancer relieves obstruction without removing the cancer. Debulking a tumour to reduce pain is another example. The goal is comfort and symptom management, not cure.\n\n**Why each option is wrong:**\n\n- **A. Curative** — Surgery intended to completely remove or cure the disease (e.g., tumour resection with curative intent).\n- **C. Emergency** — Surgery done urgently to save life (e.g., ruptured appendix, trauma). The urgency — not the purpose — defines it as emergency.\n- **D. Constructive** — Surgery that rebuilds or repairs a structure (also called reconstructive surgery); for example, cleft palate repair.",
    memoryTip: "PALLIATIVE surgery = PALLIATE symptoms = make the patient COMFORTABLE, not cure them. Like removing a painful but incurable tumour to reduce suffering.",
    difficulty: 1
  },
  {
    id: "MS-Q30",
    text: "Limb exercises after surgery prevent:",
    options: ["Aspiration pneumonia", "Hypovolaemic shock", "Urinary retention", "Pulmonary embolism"],
    correctAnswerIndex: 3,
    category: "Surgical Nursing",
    topic: "Limb Exercises After Surgery",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Post-operative patients are at high risk for deep vein thrombosis (DVT) — blood clots forming in the deep veins of the legs — because of immobility, dehydration, and the hypercoagulable state induced by surgery. If a DVT clot breaks off, it travels to the lungs and causes a pulmonary embolism (PE), which can be fatal.\n\nLimb exercises (ankle pumps, leg circles, calf flexions) activate the leg muscles, which act as a pump to push venous blood back toward the heart, preventing stasis — one of Virchow's triad of DVT risk factors.\n\n**Why each option is wrong:**\n\n- **A.** Aspiration pneumonia is prevented by elevating the head, checking NG tube position, and ensuring the gag reflex is present — not by limb exercises.\n- **B.** Hypovolaemic shock is prevented by adequate fluid replacement and haemostasis — not by limb exercises.\n- **C.** Urinary retention is prevented by ensuring adequate hydration, early mobilisation, and bladder care — not specifically limb exercises.",
    memoryTip: "MOVE the LEGS = PUMP the BLOOD = prevent CLOTS = prevent PULMONARY EMBOLISM. Static legs = blood pools = clot forms = travels to lung. Exercise is the prevention.",
    difficulty: 2
  },
  {
    id: "MS-Q31",
    text: "An example of disinfection method is:",
    options: ["Boiling", "Autoclaving", "Dry heat", "Moist heat (high-temperature)"],
    correctAnswerIndex: 0,
    category: "Surgical Nursing",
    topic: "Example of Disinfection",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Disinfection destroys most harmful microorganisms but does NOT reliably destroy all bacterial spores — it does not achieve sterility. Boiling at 100°C for 10–20 minutes kills most vegetative bacteria, viruses, and fungi, but cannot reliably destroy heat-resistant spores. It is therefore classified as high-level disinfection, not sterilisation.\n\n**Why each option is wrong:**\n\n- **B. Autoclaving** — steam under pressure (121°C at 15 psi) kills ALL microorganisms including spores = sterilisation.\n- **C. Dry heat** — at 160–180°C for 1–2 hours = sterilisation.\n- **D. Moist heat (high-temperature, as in autoclaving)** — at sterilisation temperatures = sterilisation.",
    memoryTip: "BOILING = DISINFECTION (not sterile). Spores survive boiling. AUTOCLAVE = STERILISATION (spores killed under pressure and heat). Boiling = good, but NOT perfect.",
    difficulty: 1
  },
  {
    id: "MS-Q32",
    text: "The most appropriate position for a patient undergoing abdominal surgery is:",
    options: ["Lithotomy", "Supine", "Trendelenburg", "Prone"],
    correctAnswerIndex: 1,
    category: "Surgical Nursing",
    topic: "Position for Abdominal Surgery",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The supine position (lying flat on the back) provides the surgeon with full exposure and access to the entire abdominal cavity. It allows anaesthetic monitoring, IV access, and ventilation without compromise. It is the standard position for most laparotomies, cholecystectomies, hernia repairs, and bowel surgeries.\n\n**Why each option is wrong:**\n\n- **A. Lithotomy** — legs elevated in stirrups, used for perineal, gynaecological, and rectal procedures — not general abdominal surgery.\n- **C. Trendelenburg** — head tilted down, feet up; used in pelvic surgery and some laparoscopic procedures to shift bowel away from the pelvis — not standard for all abdominal surgeries.\n- **D. Prone** — lying face down; used for spinal and posterior surgeries — incompatible with abdominal access.",
    memoryTip: "ABDOMEN surgery = SUPINE = belly UP = surgeon can reach everything. Lying on your back, belly facing the ceiling. Simple and fundamental.",
    difficulty: 1
  },
  {
    id: "MS-Q33",
    text: "Mrs. X, 74 years old, is 2 hours post-operative after repair of her fractured femur. The nurse meets her urine elimination needs by:",
    options: ["Giving a bedpan", "Using a condom catheter", "Giving a commode", "Using an indwelling catheter"],
    correctAnswerIndex: 3,
    category: "Surgical Nursing",
    topic: "Urine Elimination for Post-Op 74-Year-Old",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "For an elderly patient who is 2 hours post-operative after major orthopaedic surgery (femur repair), an indwelling (Foley) urinary catheter is most appropriate because:\n\n- She cannot safely mobilise or bear weight on the repaired femur so early post-operatively.\n- Accurate urine output monitoring is critical in the early post-operative period to detect complications like haemorrhage, shock, or renal impairment.\n- The risks of moving her onto a bedpan (pain, further injury, haemodynamic compromise) outweigh the risks of short-term catheterisation.\n\n**Why each option is wrong:**\n\n- **A.** A bedpan requires the patient to move or be moved — unsafe and painful 2 hours after femur repair surgery.\n- **B.** A condom catheter is used for males only. Mrs. X is female.\n- **C.** A commode requires the patient to stand or transfer — completely inappropriate 2 hours post-operatively after femur repair.",
    memoryTip: "2 hours post femur repair = patient CANNOT MOVE safely. Indwelling catheter = monitor urine output + no painful movement. Safety first, then convenience.",
    difficulty: 2
  },
  {
    id: "MS-Q34",
    text: "Hypoxia is:",
    options: [
      "Decreased oxygen concentration in tissue",
      "Infection caused by bacteria in the lungs",
      "A bluish tinge to the skin or other tissues",
      "Decreased oxygen concentration in blood"
    ],
    correctAnswerIndex: 0,
    category: "Surgical Nursing",
    topic: "Hypoxia Definition",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Hypoxia = insufficient oxygen at the tissue level — the cells and organs are not receiving or cannot use enough oxygen to meet their metabolic needs. This can occur even when blood oxygen is adequate (e.g., anaemia, carbon monoxide poisoning, mitochondrial dysfunction).\n\n**Critical distinction:**\n\n- **Hypoxia** = decreased O₂ at the tissue level\n- **Hypoxaemia** = decreased O₂ in the blood (low PaO₂ or SpO₂)\n\n**Why each option is wrong:**\n\n- **B.** Bacterial lung infection describes pneumonia — not hypoxia.\n- **C.** Bluish skin colouration is **cyanosis**, which is a sign of severe hypoxaemia — not the definition of hypoxia.\n- **D.** Decreased O₂ in blood is **hypoxaemia** — often leads to hypoxia, but is not the same thing. Hypoxia is at the tissue level.",
    memoryTip: "HYPOXIA = TISSUES are STARVED of O₂. HypoxAEMIA = BLOOD has low O₂. Tissue vs Blood. CYANOSIS = blue skin = a sign of hypoxaemia. Three related but different concepts.",
    difficulty: 1
  },
  {
    id: "MS-Q35",
    text: "A method used to confirm proper endotracheal tube placement is:",
    options: [
      "Auscultation for breath sounds, inspection for bilateral chest rise",
      "Mechanical ventilator functioning, chest CT scan",
      "Chest radiograph, SpO₂ >90%",
      "Chest in-drawing, spontaneous breathing"
    ],
    correctAnswerIndex: 0,
    category: "Surgical Nursing",
    topic: "Confirming ET Tube Placement",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Immediately after intubation, the priority is rapid clinical confirmation of correct tube placement:\n\n1. **Bilateral chest rise** — both sides of the chest should rise symmetrically with each ventilation.\n2. **Auscultation** — breath sounds should be heard bilaterally in the lung fields and absent over the epigastrium (stomach). If sounds are only heard on one side, the tube may have gone into the right main bronchus.\n\nThese are the primary, immediate bedside confirmations. Capnography (end-tidal CO₂ detection) is the gold standard if available. A chest X-ray confirms position but takes time.\n\n**Why each option is wrong:**\n\n- **B.** CT scan is not practical in an emergency and takes too long.\n- **C.** Chest X-ray is a secondary confirmation tool, not the immediate first step. SpO₂ >90% alone is insufficient — the tube could be in the oesophagus and SpO₂ remains elevated briefly due to pre-oxygenation.\n- **D.** Chest in-drawing indicates airway obstruction or respiratory distress — a sign of difficulty breathing, not confirmation of correct placement.",
    memoryTip: "RIGHT after intubation: LOOK (chest rise), LISTEN (auscultate both sides), CONFIRM (capnography, then CXR). Chest rise + breath sounds = tube is in the right place.",
    difficulty: 2
  },
  {
    id: "MS-Q36",
    text: "The most common indication for orchiectomy is:",
    options: ["Cancer of the prostate", "To lower level of testosterone hormone", "Tumours at the testis", "Castration to lower sexual desire"],
    correctAnswerIndex: 0,
    category: "Surgical Nursing",
    topic: "Most Common Indication for Orchiectomy",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Bilateral orchiectomy (surgical removal of both testes) is a form of surgical castration performed most commonly as treatment for hormone-sensitive prostate cancer. By removing the primary source of testosterone (the testes), cancer cell growth is dramatically slowed (since most prostate cancers are androgen-dependent). It is a simple, irreversible, and cost-effective alternative to medical androgen deprivation therapy (GnRH agonists). Prostate cancer is far more common than testicular cancer, making this the most common overall indication.\n\n**Why each option is wrong:**\n\n- **B.** Lowering testosterone is the mechanism — prostate cancer is the indication.\n- **C.** Tumours at the testis — while orchiectomy IS used for testicular cancer, testicular cancer is much less common than prostate cancer, making it a less common indication overall.\n- **D.** Castration to lower sexual desire — this is not a medical indication for orchiectomy in modern medicine.",
    memoryTip: "ORCHIECTOMY removes testes → removes testosterone → prostate cancer STARVES. Prostate cancer is common in older men → prostate cancer is the most common indication.",
    difficulty: 2
  },
  {
    id: "MS-Q37",
    text: "Separation of different types of waste at the point of generation in theatre and keeping them isolated from each other is called:",
    options: ["Waste management", "Waste minimisation", "Waste segregation", "Waste transportation"],
    correctAnswerIndex: 2,
    category: "Surgical Nursing",
    topic: "Waste Segregation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Waste segregation is the act of separating different categories of waste (sharp waste, infectious waste, pharmaceutical waste, general waste) at the exact point where they are generated — for example, at the operating table, dressing trolley, or medication preparation area. This is critical because it:\n\n- Prevents contamination of non-hazardous waste with hazardous waste.\n- Ensures correct disposal of each category.\n- Reduces infection risk to healthcare workers and the community.\n\n**Why each option is wrong:**\n\n- **A. Waste management** — a broader term encompassing all steps from generation, segregation, collection, transport, treatment, and disposal.\n- **B. Waste minimisation** — refers to strategies to reduce the amount of waste generated (e.g., using reusable instruments).\n- **D. Waste transportation** — moving waste from one location to another for treatment/disposal.",
    memoryTip: "SEGREGATE = SEPARATE at the SOURCE. Sharp waste = yellow sharp box. Infectious waste = yellow bag. General waste = black bag. Separate NOW, before it mixes and becomes hazardous.",
    difficulty: 1
  },
  {
    id: "MS-Q38",
    text: "A client is scheduled for surgery in the morning. Preoperative orders have been written. What is most important to do before surgery?",
    options: ["Remove all jewellery or tape wedding ring", "Verify that all laboratory work is complete", "Inform family or next of kin", "Have all consent forms signed"],
    correctAnswerIndex: 3,
    category: "Surgical Nursing",
    topic: "Most Important Pre-Operative Action",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Informed consent is the single most important legal and ethical requirement before any surgical procedure. Without a properly signed and witnessed consent form, no surgery can legally or ethically proceed — even in an otherwise fully prepared patient. Informed consent ensures the patient understands the procedure, its risks, benefits, and alternatives, and has freely agreed to it.\n\n**Why each option is wrong:**\n\n- **A.** Removing jewellery is important (prevents burns during diathermy, pressure injuries) but is not the priority — it can be done just before surgery begins.\n- **B.** Laboratory work is important for risk assessment but not the absolute priority.\n- **C.** Informing family is good practice but is not a legal requirement that can halt surgery.",
    memoryTip: "NO CONSENT = NO SURGERY — no exceptions. Before anything else, check that the patient (or their legal guardian) has SIGNED the CONSENT FORM. Everything else can follow.",
    difficulty: 1
  },
  {
    id: "MS-Q39",
    text: "When performing instrument preparation process, the recommended concentration of sodium hypochlorite (Jik) solution is:",
    options: [
      "One part of sodium hypochlorite to six parts of water",
      "One part of sodium hypochlorite to nine parts of water",
      "Depends with manufacturer's instructions",
      "Depends with workplace policies"
    ],
    correctAnswerIndex: 1,
    category: "Surgical Nursing",
    topic: "Sodium Hypochlorite Concentration for Instruments",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The standard recommendation for instrument decontamination using sodium hypochlorite (household bleach/Jik, which is typically 5% concentration) is to dilute it to 0.5% (5000 ppm) for use on instruments — which is achieved by mixing 1 part bleach with 9 parts water (a 1:10 dilution, giving 0.5%). This is the WHO and infection prevention guideline standard for pre-cleaning/decontamination of used instruments before sterilisation.\n\n**Why each option is wrong:**\n\n- **A.** 1:6 gives a stronger (approximately 0.7%) solution — too concentrated for routine instrument decontamination; may also accelerate corrosion of metal instruments.\n- **C & D.** While manufacturer's instructions and workplace policies are important references, the question is asking for the standard recommended concentration, which is the 1:9 dilution.",
    memoryTip: "NINE parts water + ONE part Jik = 0.5% solution = the standard for INSTRUMENT DECONTAMINATION. 1 + 9 = 10 parts total. One part Jik in nine parts water = safe and effective.",
    difficulty: 2
  },
  {
    id: "MS-Q40",
    text: "Which of the following conditions would be managed by a medical-surgical nurse?",
    options: ["Type 2 diabetes", "Urinary tract infection", "Depression", "Anxiety disorder"],
    correctAnswerIndex: 0,
    category: "Medical-Surgical Fundamentals",
    topic: "Conditions Managed by Med-Surg Nurse",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Medical-surgical nursing focuses on the care of adult patients with medical illnesses and those recovering from surgery. Type 2 diabetes is a quintessential medical-surgical condition involving complex monitoring (blood glucose, HbA1c), medication management (oral hypoglycaemics, insulin), wound care (diabetic foot ulcers), dietary education, and management of complications (nephropathy, neuropathy, retinopathy). This falls clearly within the med-surg scope.\n\n**Why each option is wrong:**\n\n- **B.** A UTI can be managed by a med-surg nurse, but it is also routinely managed in primary care, community nursing, and outpatient settings — it is less specifically \"medical-surgical.\"\n- **C & D.** Depression and anxiety disorder are primarily managed by psychiatric/mental health nurses — not medical-surgical nurses.",
    memoryTip: "MED-SURG = medical diseases + surgical patients. Diabetes = the classic complex medical condition requiring comprehensive nursing care — blood sugar monitoring, medications, complications, education.",
    difficulty: 1
  },
  {
    id: "MS-Q41",
    text: "A patient is admitted with a fractured femur. What would be the priority nursing intervention?",
    options: ["Administering pain medication", "Assessing neurovascular status", "Initiating physical therapy", "Providing emotional support"],
    correctAnswerIndex: 1,
    category: "Medical-Surgical Fundamentals",
    topic: "Fractured Femur Priority",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "With a fractured femur, the priority is to assess the neurovascular status of the affected limb (the \"5 Ps\"): Pain, Pulse, Pallor, Paraesthesia, and Paralysis. This is done to detect two life-threatening and limb-threatening complications:\n\n1. **Vascular injury** — the femoral artery runs close to the femur; fracture can damage it, causing limb-threatening ischaemia.\n2. **Compartment syndrome** — pressure builds up in muscle compartments, cutting off circulation → permanent damage within hours if not treated.\n\n**Why each option is wrong:**\n\n- **A.** Pain medication is important but is not the first priority — you must first ensure the limb is viable and not facing a vascular emergency.\n- **C.** Physical therapy is a rehabilitation intervention for later — not a priority on admission.\n- **D.** Emotional support is important but does not address the immediate physiological danger.",
    memoryTip: "FRACTURED LIMB → NEUROVASCULAR CHECK FIRST. The 5 Ps: Pain, Pulse, Pallor, Paraesthesia, Paralysis. Miss these = miss compartment syndrome = lose the limb.",
    difficulty: 2
  },
  {
    id: "MS-Q42",
    text: "Which of the following is a primary responsibility of a medical-surgical nurse?",
    options: ["Providing dietary counselling", "Performing diagnostic tests", "Administering anaesthesia", "Monitoring vital signs"],
    correctAnswerIndex: 3,
    category: "Medical-Surgical Fundamentals",
    topic: "Primary Responsibility of Med-Surg Nurse",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Monitoring vital signs is a core, continuous, primary responsibility of the medical-surgical nurse. Vital signs (blood pressure, heart rate, respiratory rate, temperature, oxygen saturation) are the earliest indicators of deterioration or improvement in a patient's condition. Regular monitoring allows the nurse to detect changes early and intervene promptly.\n\n**Why each option is wrong:**\n\n- **A.** Dietary counselling is the primary role of a dietitian/nutritionist, though nurses provide basic nutrition education.\n- **B.** Diagnostic tests (imaging, laboratory) are ordered by physicians and performed by technicians/radiographers — not med-surg nurses.\n- **C.** Anaesthesia is administered by anaesthesiologists or nurse anaesthetists — a specialised, separate role entirely.",
    memoryTip: "VITAL SIGNS = VITAL to the nurse's role. The nurse is at the bedside continuously — monitoring these signs is the cornerstone of nursing surveillance.",
    difficulty: 1
  },
  {
    id: "MS-Q43",
    text: "During the postoperative phase, a patient exhibits signs of hemorrhage. What action should the nurse take first?",
    options: ["Notify the surgeon", "Reassure the patient", "Apply pressure to the site", "Administer pain medication"],
    correctAnswerIndex: 2,
    category: "Medical-Surgical Fundamentals",
    topic: "Post-Op Hemorrhage First Action",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "In the ABCs of emergency care, controlling bleeding is the immediate, life-saving priority. Applying direct pressure to the haemorrhaging site is the first action because:\n\n- It physically slows or stops blood loss.\n- It buys time while simultaneously calling for help.\n- Every minute of uncontrolled haemorrhage worsens haemodynamic status and increases mortality risk.\n\n**Why each option is wrong:**\n\n- **A.** Notifying the surgeon is important but is done concurrently — not before controlling bleeding. You apply pressure while someone else calls for help.\n- **B.** Reassuring the patient does nothing to stop blood loss and is not the first priority.\n- **D.** Pain medication has no role in haemorrhage control and may worsen hypotension.",
    memoryTip: "BLEEDING = PRESSURE FIRST. Stop the blood loss immediately. Then call for help. Then further assess. PRESSURE → CALL → ASSESS. Don't call first while blood pours out.",
    difficulty: 2
  },
  {
    id: "MS-Q44",
    text: "When educating a patient with congestive heart failure about medication management, which instruction is most important?",
    options: [
      "\"Take your medications with grapefruit juice.\"",
      "\"Skip your medication if you feel better.\"",
      "\"Take your medications at the same time each day.\"",
      "\"Double the dose if you forget to take it.\""
    ],
    correctAnswerIndex: 2,
    category: "Medical-Surgical Fundamentals",
    topic: "CHF Medication Teaching",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Medication adherence is the cornerstone of CHF management. Taking medications consistently at the same time each day:\n\n- Maintains stable therapeutic blood levels.\n- Prevents fluctuations that can trigger acute decompensation.\n- Builds habit and reduces the chance of missed doses.\n\nCHF medications (ACE inhibitors, beta-blockers, diuretics, digoxin) must be taken regularly — stopping or missing doses, even when feeling well, can cause rapid deterioration.\n\n**Why each option is wrong:**\n\n- **A.** Grapefruit juice interacts with many cardiovascular medications (especially certain calcium channel blockers) by blocking CYP3A4 — it can cause dangerously elevated drug levels. Patients should AVOID grapefruit.\n- **B.** Feeling better with CHF medications is because the medications are working — stopping them will cause the heart to fail again.\n- **D.** Doubling a dose is dangerous — it can cause toxicity (e.g., digoxin toxicity = lethal arrhythmias; diuretic overdose = severe electrolyte imbalance).",
    memoryTip: "SAME TIME every day = STEADY blood levels = STABLE heart. Never skip 'because you feel well' — you feel well BECAUSE you take the medicine.",
    difficulty: 2
  },
  {
    id: "MS-Q45",
    text: "A patient with chronic obstructive pulmonary disease (COPD) is prescribed bronchodilator medication. Which assessment finding indicates a therapeutic response?",
    options: ["Increased respiratory rate", "Decreased oxygen saturation", "Improved dyspnoea", "Increased wheezing"],
    correctAnswerIndex: 2,
    category: "Medical-Surgical Fundamentals",
    topic: "Bronchodilator Therapeutic Response in COPD",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Bronchodilators (salbutamol, ipratropium) work by relaxing and widening the bronchial smooth muscle → opens the airways → allows more air to flow → reduces the effort of breathing → **dyspnoea improves**. Improved dyspnoea (less breathlessness) is the clearest indicator that the drug is working.\n\n**Why each option is wrong:**\n\n- **A.** An increased respiratory rate would indicate worsening distress — the opposite of a therapeutic response.\n- **B.** Decreased oxygen saturation indicates hypoxaemia — worsening, not improvement.\n- **D.** Increased wheezing indicates worsening bronchoconstriction — an adverse or ineffective response. A therapeutic response would show reduced or absent wheezing.",
    memoryTip: "BRONCHODILATOR = OPENS the airways = patient can BREATHE EASIER. Therapeutic response = LESS breathlessness (improved dyspnoea). More wheezing or faster breathing = not working.",
    difficulty: 2
  },
  {
    id: "MS-Q46",
    text: "Which of the following actions should the nurse prioritise when caring for a patient with a nasogastric tube?",
    options: ["Providing oral hygiene", "Securing the tube in place", "Administering medication through the tube", "Checking tube placement before feeding"],
    correctAnswerIndex: 3,
    category: "Medical-Surgical Fundamentals",
    topic: "Priority for Patient with NG Tube",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Patient safety is the priority. Before every feeding or medication administration through an NG tube, the nurse MUST verify that the tube is correctly positioned in the stomach — not accidentally displaced into the lungs (bronchus) or curled in the oesophagus. Feeding into a misdirected tube can cause aspiration pneumonia or even death.\n\nVerification methods include:\n\n- Aspirating gastric contents and checking pH (should be ≤5.5).\n- Auscultating for air over the epigastrium while injecting air.\n- X-ray confirmation (gold standard for initial placement).\n\n**Why each option is wrong:**\n\n- **A.** Oral hygiene is important to prevent mouth dryness and infection, but it is not the priority.\n- **B.** Securing the tube prevents accidental removal — important but secondary to verifying position.\n- **C.** Medication can only be administered AFTER placement is confirmed — C cannot come before D.",
    memoryTip: "BEFORE EVERY FEED = CHECK THE TUBE. One wrong feed into the lung = aspiration pneumonia. Placement verification = the non-negotiable safety step.",
    difficulty: 2
  },
  {
    id: "MS-Q47",
    text: "Which of the following structures is responsible for storing and releasing urine from the body?",
    options: ["Urethra", "Ureter", "Bladder", "Kidney"],
    correctAnswerIndex: 2,
    category: "Renal / Urinary System",
    topic: "Structure Storing and Releasing Urine",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The **urinary bladder** is a hollow, muscular organ that stores urine produced by the kidneys until it is ready to be released. It can hold approximately 400–600 mL. When full, stretch receptors signal the need to urinate. The detrusor muscle contracts and the internal and external urethral sphincters relax, allowing urine to pass through the urethra and exit the body.\n\n**Why each option is wrong:**\n\n- **A. Urethra** — the tube through which urine is **expelled** from the bladder to outside the body. It transports, not stores.\n- **B. Ureter** — the tubes that carry urine from each kidney down to the bladder. They transport, not store.\n- **D. Kidney** — produces urine through filtration, reabsorption, and secretion — it does not store it.",
    memoryTip: "BLADDER = BAG for urine. Kidneys MAKE it. Ureters CARRY it. Bladder HOLDS it. Urethra RELEASES it. One-way journey from kidney to outside.",
    difficulty: 1
  },
  {
    id: "MS-Q48",
    text: "What is the term for a procedure in which kidney stones are fragmented into smaller pieces using shock waves?",
    options: ["Lithotripsy", "Nephrectomy", "Cystoscopy", "Ureteroscopy"],
    correctAnswerIndex: 0,
    category: "Renal / Urinary System",
    topic: "Kidney Stone Fragmentation by Shock Waves",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Extracorporeal Shock Wave Lithotripsy (ESWL) uses focused shock waves generated outside the body to shatter kidney stones (calculi) into small fragments that can then pass naturally in the urine. \"Litho\" = stone, \"tripsy\" = crushing. It is a non-invasive procedure requiring no incisions.\n\n**Why each option is wrong:**\n\n- **B. Nephrectomy** — surgical removal of a kidney (partial or total); used for kidney cancer, not stones.\n- **C. Cystoscopy** — visual examination of the bladder using a cystoscope inserted through the urethra. Used for diagnosis and some minor procedures, not stone fragmentation.\n- **D. Ureteroscopy** — a scope is passed through the urethra and bladder into the ureter to visualise or remove ureteral stones. Can be combined with a laser to break stones, but the question specifically refers to shock wave fragmentation.",
    memoryTip: "LITHOTRIPSY = LITHO (stone) + TRIPSY (crush). Shock waves shatter the stone from outside the body — no surgery needed. Stones come out in urine as gravel.",
    difficulty: 2
  },
  {
    id: "MS-Q49",
    text: "The hormone responsible for regulating water reabsorption in the kidneys is:",
    options: ["Insulin", "Aldosterone", "Antidiuretic hormone (ADH)", "Parathyroid hormone"],
    correctAnswerIndex: 2,
    category: "Renal / Urinary System",
    topic: "Hormone Regulating Water Reabsorption",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "ADH (also called vasopressin) is produced by the hypothalamus and released from the posterior pituitary gland. It acts on the **collecting ducts and distal tubules** of the kidney, making them more permeable to water — allowing water to be reabsorbed back into the bloodstream rather than being excreted as urine. When ADH levels are high, urine is concentrated and small in volume. When ADH is absent (as in diabetes insipidus), the kidneys cannot reabsorb water and produce large volumes of dilute urine.\n\n**Why each option is wrong:**\n\n- **A. Insulin** — regulates blood glucose by facilitating glucose uptake into cells. Has no direct role in water reabsorption.\n- **B. Aldosterone** — regulates **sodium** reabsorption (and secondarily water follows sodium) in the distal tubule. Water reabsorption specifically is ADH's role.\n- **D. Parathyroid hormone (PTH)** — regulates calcium and phosphate levels in the blood.",
    memoryTip: "ADH = ANTI-Diuretic Hormone = ANTI = against losing water. It PREVENTS excess urine loss by telling kidneys to reabsorb water. No ADH = floods of dilute urine.",
    difficulty: 2
  },
  {
    id: "MS-Q50",
    text: "Which anatomical structure of the urinary tract is most commonly affected by urinary tract infections?",
    options: ["Urethra", "Bladder", "Kidneys", "Ureters"],
    correctAnswerIndex: 1,
    category: "Renal / Urinary System",
    topic: "Most Commonly Affected Structure in UTIs",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Cystitis (bladder infection) is by far the most common form of urinary tract infection. Most UTIs are ascending infections — bacteria (usually E. coli) travel from the perineum into the urethra, and from there into the bladder. The bladder is the primary site where bacteria colonise and cause infection. Symptoms include dysuria (painful urination), frequency, urgency, and suprapubic pain.\n\n**Why each option is wrong:**\n\n- **A. Urethra** — urethritis can occur but is less common. The urethra is more of a passageway; the bladder is where bacteria establish infection.\n- **C. Kidneys** — kidney infection (pyelonephritis) is a more serious, upper UTI that occurs when infection ascends from the bladder. Less common than cystitis but more dangerous.\n- **D. Ureters** — ureteritis (infection of the ureters) is the least common; ureters are typically involved only when infection spreads from above or below.",
    memoryTip: "UTI = most often CYSTITIS = BLADDER infection. Bacteria travel UP the urethra and SET UP HOME in the BLADDER. Kidney infection is the dangerous, upper UTI.",
    difficulty: 1
  },
  {
    id: "MS-Q51",
    text: "Which diagnostic test is commonly used to confirm urinary tract infections?",
    options: ["Electrocardiogram (ECG)", "Urinalysis", "MRI (Magnetic Resonance Imaging)", "Complete Blood Count (CBC)"],
    correctAnswerIndex: 1,
    category: "Renal / Urinary System",
    topic: "Diagnostic Test for UTIs",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Urinalysis is the standard first-line diagnostic test for UTIs. It tests for:\n\n- **Nitrites** — produced by bacteria breaking down nitrates (positive in most gram-negative UTIs).\n- **Leucocyte esterase** — indicates white blood cells (pyuria) = inflammation/infection.\n- White blood cells on microscopy.\n\nA urine culture and sensitivity is the gold standard for confirming the specific organism and its antibiotic sensitivities.\n\n**Why each option is wrong:**\n\n- **A.** ECG assesses cardiac electrical activity — completely unrelated to UTI diagnosis.\n- **C.** MRI is an advanced imaging tool used for soft tissue and structural abnormalities — not for UTI diagnosis.\n- **D.** CBC shows white cell count (raised in infection/inflammation) but is non-specific; it cannot identify a UTI specifically.",
    memoryTip: "URINE problem → test the URINE. Urinalysis = first test for UTI. Check for nitrites + leukocyte esterase. Culture = confirms which bacteria and which antibiotic to use.",
    difficulty: 1
  },
  {
    id: "MS-Q52",
    text: "Which population group is at the highest risk for developing urinary tract infections?",
    options: ["Adolescents", "Elderly individuals", "Infants", "Young adults"],
    correctAnswerIndex: 1,
    category: "Renal / Urinary System",
    topic: "Highest Risk Group for UTIs",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The **elderly** are at the highest risk for UTIs due to multiple compounding factors:\n\n- **Reduced immune function** with age.\n- **Urinary stasis** from incomplete bladder emptying (due to enlarged prostate in men, prolapse in women).\n- **Decreased oestrogen** in post-menopausal women → thinner urethral and vaginal mucosa, reduced protective lactobacillus flora.\n- **Catheter use** — elderly patients are more likely to have indwelling catheters (catheter-associated UTIs are common).\n- **Immobility and incontinence** — promote perineal contamination.",
    memoryTip: "ELDERLY = perfect storm for UTIs. Old urethra, incomplete bladder emptying, weak immunity, catheters. Often present atypically — confusion or falls rather than classic dysuria.",
    difficulty: 1
  },
  {
    id: "MS-Q53",
    text: "Which type of kidney stone is most commonly associated with urinary tract infections?",
    options: ["Uric acid stones", "Calcium oxalate stones", "Struvite stones", "Cystine stones"],
    correctAnswerIndex: 2,
    category: "Renal / Urinary System",
    topic: "Kidney Stone Associated with UTIs",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Struvite stones (also called infection stones or triple phosphate stones) form specifically as a result of urinary tract infections caused by **urease-producing bacteria** (e.g., Proteus, Klebsiella, Pseudomonas). These bacteria split urea into ammonia, which alkalinises the urine and creates conditions for struvite (magnesium ammonium phosphate) to crystallise. They can grow very large (staghorn calculi — filling the entire renal pelvis) and are almost exclusively associated with chronic UTIs.\n\n**Why each option is wrong:**\n\n- **A. Uric acid stones** — form in acidic urine; associated with gout and high purine diets — not UTIs.\n- **B. Calcium oxalate stones** — most common overall type (80% of stones), but linked to dehydration, dietary oxalate, hyperparathyroidism — not UTIs.\n- **D. Cystine stones** — rare; caused by an inherited disorder (cystinuria) — not UTIs.",
    memoryTip: "STRUVITE = INFECTION stone. Bacteria make ammonia → urine becomes alkaline → crystals form. Struvite + Infection = always together. Staghorn shape = classic struvite.",
    difficulty: 2
  },
  {
    id: "MS-Q54",
    text: "Which of the following is the most common causative agent of urinary tract infections?",
    options: ["Streptococcus pneumoniae", "Escherichia coli (E. coli)", "Staphylococcus aureus", "Pseudomonas aeruginosa"],
    correctAnswerIndex: 1,
    category: "Renal / Urinary System",
    topic: "Most Common Causative Agent of UTIs",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "E. coli causes approximately **80–85% of all community-acquired urinary tract infections**. It is a normal inhabitant of the gut and perineum. Its virulence factors — including type 1 and P fimbriae (hair-like appendages that allow it to stick to urothelial cells) — allow it to ascend the urethra, colonise the bladder, and resist being washed out by urine flow.\n\n**Why each option is wrong:**\n\n- **A. Streptococcus pneumoniae** — causes respiratory infections (pneumonia, meningitis); rarely causes UTIs.\n- **C. Staphylococcus aureus** — can cause UTIs in hospitalised patients (especially with catheters) but is not the most common community cause.\n- **D. Pseudomonas aeruginosa** — an opportunistic pathogen causing hospital-acquired UTIs (especially in catheterised/immunocompromised patients); not the most common community cause.",
    memoryTip: "E. COLI = king of UTIs (80%). It lives in the gut, travels to the urinary tract. Short female urethra makes this journey easy. E. COLI = UTI almost always means E. COLI first.",
    difficulty: 1
  },
  {
    id: "MS-Q55",
    text: "What is the primary component of most urinary calculi?",
    options: ["Uric acid", "Calcium oxalate", "Magnesium phosphate", "Cystine"],
    correctAnswerIndex: 1,
    category: "Renal / Urinary System",
    topic: "Primary Component of Most Urinary Calculi",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Calcium oxalate stones account for approximately **75–80% of all kidney stones**, making them by far the most common type. They form when urine contains high levels of calcium and/or oxalate (found in spinach, nuts, chocolate, tea). Dehydration concentrates these substances, promoting crystallisation.\n\n**Why each option is wrong:**\n\n- **A. Uric acid** — accounts for approximately 5–10% of stones; associated with gout and high-protein diets.\n- **C. Magnesium phosphate (struvite)** — accounts for approximately 10–15%; infection-related.\n- **D. Cystine** — rare (1–2%); hereditary condition.",
    memoryTip: "CALCIUM OXALATE = the MOST COMMON kidney stone by far (75–80%). Drink lots of water — the most important prevention. Spinach, nuts, chocolate = high oxalate = stone risk.",
    difficulty: 1
  },
  {
    id: "MS-Q56",
    text: "Which of the following conditions predisposes individuals to the development of pyelonephritis?",
    options: ["Hyperthyroidism", "Diabetes mellitus", "Osteoarthritis", "Asthma"],
    correctAnswerIndex: 1,
    category: "Renal / Urinary System",
    topic: "Condition Predisposing to Pyelonephritis",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Diabetes mellitus predisposes to pyelonephritis (kidney infection) through several mechanisms:\n\n1. **Impaired immune function** — high blood glucose impairs neutrophil function and reduces the body's ability to fight bacterial infection.\n2. **Glycosuria (sugar in urine)** — provides a culture medium for bacterial growth in the urine.\n3. **Neuropathy** — diabetic bladder neuropathy causes incomplete bladder emptying (urinary stasis) → bacteria multiply.\n4. **Vascular disease** — reduced blood flow impairs immune surveillance in the kidneys.\n\n**Why each option is wrong:**\n\n- **A. Hyperthyroidism** — elevated thyroid hormones cause metabolic effects; no direct link to urinary infections.\n- **C. Osteoarthritis** — a joint condition; no predisposition to renal infection.\n- **D. Asthma** — a respiratory condition; no link to urinary/renal infections.",
    memoryTip: "DIABETES = sweet urine (bacteria love sugar) + weak immune cells + stagnant bladder. Triple threat for kidney infection. Diabetic patients need regular urine checks.",
    difficulty: 2
  },
  {
    id: "MS-Q57",
    text: "Which of the following is a hallmark feature of nephrotic syndrome?",
    options: ["Hypertension", "Proteinuria", "Haematuria", "Urinary tract infection"],
    correctAnswerIndex: 1,
    category: "Renal / Urinary System",
    topic: "Hallmark Feature of Nephrotic Syndrome",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The hallmark (defining) feature of nephrotic syndrome is **massive proteinuria** — defined as greater than **3.5 grams of protein per day** in the urine. This occurs because the glomerular filtration membrane is damaged, allowing large protein molecules (mainly albumin) to leak into the urine. The consequences cascade:\n\n- Loss of albumin → decreased plasma oncotic pressure → fluid leaks into tissues → **generalised oedema** (puffy face, legs, ascites).\n- Liver compensates by producing more lipoproteins → **hyperlipidaemia**.\n- Lipids spill into urine → **lipiduria**.\n\nThe tetrad of nephrotic syndrome: **Proteinuria + Hypoalbuminaemia + Oedema + Hyperlipidaemia**\n\n**Why each option is wrong:**\n\n- **A. Hypertension** — is more characteristic of **nephritic** syndrome (which also includes haematuria and oliguria).\n- **C. Haematuria** — is characteristic of nephritic syndrome (damaged capillaries bleed into filtrate), not typically nephrotic.\n- **D. Urinary tract infection** — an unrelated condition; not a feature of nephrotic syndrome.",
    memoryTip: "NEPHROTIC = PROTEIN falls out of urine like water through a broken sieve. MASSIVE PROTEINURIA → low albumin → whole body SWELLS. Think: Protein ROBS the plasma → OEDEMA.",
    difficulty: 2
  },
  {
    id: "MS-Q58",
    text: "Which gland is often referred to as the \"master gland\" because of its regulatory role over other endocrine glands?",
    options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Hypothalamus"],
    correctAnswerIndex: 2,
    category: "Endocrine System",
    topic: "The Master Gland",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The pituitary gland (about the size of a pea, located at the base of the brain) is called the \"master gland\" because it produces hormones that control and regulate other endocrine glands:\n\n- **TSH** (thyroid-stimulating hormone) → stimulates the thyroid gland.\n- **ACTH** (adrenocorticotropic hormone) → stimulates the adrenal cortex.\n- **FSH & LH** → control the gonads (ovaries/testes).\n- **GH** (growth hormone) → stimulates growth throughout the body.\n- **Prolactin** → stimulates milk production.\n\n**Why each option is wrong:**\n\n- **A. Thyroid gland** — controlled by the pituitary; regulates metabolism, not other glands.\n- **B. Adrenal gland** — controlled by the pituitary; not a master gland.\n- **D. Hypothalamus** — the hypothalamus is actually the \"master of the master\" — it controls the pituitary via releasing hormones. However, the traditional answer for the \"master gland\" is the pituitary.",
    memoryTip: "PITUITARY = the BOSS of the endocrine system. It sends orders (tropic hormones) to other glands telling them what to do. Without pituitary signals, most other glands would stop working.",
    difficulty: 1
  },
  {
    id: "MS-Q59",
    text: "Which test measures average blood glucose levels over the past 2–3 months and is used for long-term monitoring of diabetes mellitus?",
    options: [
      "Fasting plasma glucose (FPG) test",
      "Oral glucose tolerance test (OGTT)",
      "Random plasma glucose test",
      "Haemoglobin A1c (HbA1c) test"
    ],
    correctAnswerIndex: 3,
    category: "Endocrine System",
    topic: "HbA1c Test",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "HbA1c measures the percentage of haemoglobin molecules that have glucose attached to them (glycated haemoglobin). Since red blood cells live for approximately **120 days (about 3 months)**, the HbA1c reflects the average blood glucose level over that entire period. It cannot be manipulated by single-day changes in diet or medication — it shows the \"true picture\" of long-term blood glucose control. Normal HbA1c is below 5.7%; values ≥6.5% are diagnostic of diabetes; target for diabetic patients is usually <7%.\n\n**Why each option is wrong:**\n\n- **A. FPG** — measures glucose after 8 hours of fasting. Gives a **current** glucose reading, not a long-term average.\n- **B. OGTT** — measures glucose response to a standard glucose drink over 2 hours. Used to diagnose gestational diabetes and impaired glucose tolerance.\n- **C. Random plasma glucose** — taken at any time, without fasting. A snapshot reading, not long-term.",
    memoryTip: "HbA1c = the 3-MONTH REPORT CARD for blood glucose. Red cells live 3 months — the glucose stuck to them shows how sweet the blood has been for 3 months. Cannot cheat with one good day.",
    difficulty: 2
  },
  {
    id: "MS-Q60",
    text: "What is the primary function of the thyroid gland?",
    options: ["Regulation of blood glucose levels", "Regulation of calcium levels in the blood", "Regulation of metabolism", "Regulation of blood pressure"],
    correctAnswerIndex: 2,
    category: "Endocrine System",
    topic: "Primary Function of the Thyroid Gland",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The thyroid gland produces two primary hormones — **thyroxine (T4) and triiodothyronine (T3)** — that regulate the body's metabolic rate. They affect virtually every cell in the body by controlling how fast cells burn energy, produce heat, and synthesise proteins. A hyperactive thyroid (hyperthyroidism) speeds everything up (weight loss, sweating, fast heart rate). An underactive thyroid (hypothyroidism) slows everything down (weight gain, fatigue, cold intolerance).\n\n**Why each option is wrong:**\n\n- **A.** Blood glucose regulation is the primary function of the **pancreas** (insulin and glucagon).\n- **B.** Calcium regulation is the primary function of the **parathyroid glands** (PTH). The thyroid also produces calcitonin, which lowers calcium, but this is secondary.\n- **D.** Blood pressure regulation is primarily managed by the kidneys, adrenal glands (aldosterone, adrenaline), and the renin-angiotensin system — not the thyroid gland.",
    memoryTip: "THYROID = THROTTLE of the body. Controls how fast or slow everything runs. High thyroid = revving engine. Low thyroid = sluggish, slow engine. METABOLISM is the primary function.",
    difficulty: 1
  },
  {
    id: "MS-Q61",
    text: "Which gland produces melatonin, a hormone involved in regulating the sleep-wake cycle?",
    options: ["Thymus", "Pineal gland", "Pituitary", "Parathyroid gland"],
    correctAnswerIndex: 1,
    category: "Endocrine System",
    topic: "Melatonin-Producing Gland",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The pineal gland is a tiny gland (about the size of a grain of rice) located deep in the brain. It produces **melatonin**, a hormone that regulates circadian rhythm — the body's internal 24-hour sleep-wake clock. Melatonin secretion increases in darkness (telling the body it is night-time) and is suppressed by light. Disruption of melatonin secretion is linked to jet lag, shift work disorders, and some sleep conditions.\n\n**Why each option is wrong:**\n\n- **A. Thymus** — plays a role in immune system development (T-cell maturation), particularly in childhood. Not involved in sleep regulation.\n- **C. Pituitary** — the \"master gland\" that secretes TSH, ACTH, GH, FSH, LH, and ADH. Does not produce melatonin.\n- **D. Parathyroid gland** — produces parathyroid hormone (PTH), which regulates calcium and phosphate balance — not sleep.",
    memoryTip: "PINEAL = PINE CONE shaped = in the PINE of your brain. It watches the DARKNESS and releases MELATONIN = the SLEEP hormone. Light = off. Dark = on.",
    difficulty: 1
  },
  {
    id: "MS-Q62",
    text: "In hypoparathyroidism, which of the following is a potential complication?",
    options: ["Hypertension", "Hypercalcaemia", "Tetany", "Hyperglycaemia"],
    correctAnswerIndex: 2,
    category: "Endocrine System",
    topic: "Hypoparathyroidism Complication",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Hypoparathyroidism = the parathyroid glands produce too little or no PTH. PTH is responsible for raising blood calcium levels (by stimulating bone resorption, renal reabsorption of calcium, and vitamin D activation). Without PTH, blood calcium falls → **hypocalcaemia**. Low calcium destabilises nerve and muscle membranes, making them hyper-excitable, leading to:\n\n- **Tetany** — involuntary, sustained muscle contractions (cramps, spasms)\n- **Trousseau's sign** (carpal spasm when blood pressure cuff inflated)\n- **Chvostek's sign** (facial twitch when tapping the facial nerve)\n- In severe cases: laryngospasm and seizures\n\n**Why each option is wrong:**\n\n- **A. Hypertension** — not a direct complication of hypoparathyroidism. PTH deficiency → low calcium → muscles are hyperexcitable, not hypertensive.\n- **B. Hypercalcaemia** — this is the opposite. Hyperparathyroidism (too much PTH) causes hypercalcaemia. Hypoparathyroidism causes hypocalcaemia.\n- **D. Hyperglycaemia** — relates to insulin deficiency or resistance; no connection to parathyroid function.",
    memoryTip: "HYPO-parathyroid = HYPO-calcaemia = TETANY. Low calcium = nerves and muscles become JUMPY and go into SPASM. No PTH → no calcium control → body TWITCHES and CRAMPS.",
    difficulty: 2
  },
  {
    id: "MS-Q63",
    text: "The pancreas has both endocrine and exocrine functions. Which part of the pancreas is responsible for producing insulin and glucagon?",
    options: ["Islets of Langerhans", "Acinar cells", "Duct cells", "Pancreatic lobules"],
    correctAnswerIndex: 0,
    category: "Endocrine System",
    topic: "Insulin and Glucagon Production",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The Islets of Langerhans are clusters of endocrine cells scattered throughout the pancreas. They contain:\n\n- **Beta (β) cells** — produce **insulin** (lowers blood glucose).\n- **Alpha (α) cells** — produce **glucagon** (raises blood glucose).\n- **Delta (δ) cells** — produce somatostatin (regulates both insulin and glucagon release).\n\nThese hormones are secreted directly into the bloodstream, making them **endocrine** products.\n\n**Why each option is wrong:**\n\n- **B. Acinar cells** — are **exocrine** cells that produce and secrete digestive enzymes (amylase, lipase, proteases) into the pancreatic duct → small intestine.\n- **C. Duct cells** — transport the exocrine secretions (digestive juices) from the acinar cells to the duodenum; not involved in hormone production.\n- **D. Pancreatic lobules** — the structural divisions of the pancreas containing both acinar and islet cells; not the specific producing unit.",
    memoryTip: "ISLETS of Langerhans = the ISLANDS of endocrine cells in a SEA of exocrine tissue. Islets produce INSULIN (from beta) and GLUCAGON (from alpha). Think: Islands = endocrine; Ocean (acini) = exocrine (enzymes).",
    difficulty: 1
  },
  {
    id: "MS-Q64",
    text: "Which gland produces cortisol, a hormone involved in the body's stress response?",
    options: ["Pituitary gland", "Adrenal gland", "Pineal gland", "Thymus"],
    correctAnswerIndex: 1,
    category: "Endocrine System",
    topic: "Cortisol Production",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Cortisol is produced by the **adrenal cortex** — the outer layer of the adrenal glands, which sit on top of each kidney. Cortisol is a **glucocorticoid** hormone that:\n\n- Raises blood glucose (by stimulating gluconeogenesis and reducing glucose uptake).\n- Suppresses the immune system and reduces inflammation.\n- Helps the body respond to physical and psychological stress.\n- Is regulated by the HPA axis: Hypothalamus → CRH → Pituitary → ACTH → Adrenal Cortex → Cortisol.\n\n**Why each option is wrong:**\n\n- **A. Pituitary gland** — the pituitary produces ACTH, which tells the adrenal cortex to make cortisol. The pituitary orders; the adrenal gland manufactures.\n- **C. Pineal gland** — produces melatonin (sleep hormone).\n- **D. Thymus** — produces thymosin (involved in T-cell development); active in childhood, shrinks after puberty.",
    memoryTip: "ADRENAL = ADrenal = ADD to stress response. Sits on top of the kidney. Makes CORTISOL (stress hormone) + ALDOSTERONE (salt/water) + ADRENALINE. Adrenal gland = the STRESS gland.",
    difficulty: 1
  },
  {
    id: "MS-Q65",
    text: "Which condition is caused by the deficiency of antidiuretic hormone (ADH), leading to excessive urination and thirst?",
    options: ["Cushing's syndrome", "Diabetes insipidus", "Addison's disease", "Hyperthyroidism"],
    correctAnswerIndex: 1,
    category: "Endocrine System",
    topic: "ADH Deficiency Causing Excessive Urination",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Diabetes insipidus (DI) is caused by:\n\n- **Central DI**: The pituitary gland fails to produce or release enough ADH.\n- **Nephrogenic DI**: The kidneys fail to respond to ADH.\n\nWithout ADH, the kidneys cannot concentrate urine → large volumes (3–20 litres/day) of very **dilute urine** are produced (called polyuria). The resulting fluid loss triggers intense **polydipsia** (excessive thirst). Despite the word \"diabetes,\" blood glucose is normal — the \"diabetes\" refers only to the high urine output.\n\n**Why each option is wrong:**\n\n- **A. Cushing's syndrome** — caused by excess cortisol; presents with weight gain, moon face, central obesity, hypertension, and hyperglycaemia.\n- **C. Addison's disease** — caused by adrenal cortex insufficiency (low cortisol and aldosterone); presents with fatigue, weight loss, hyperpigmentation, and hypotension.\n- **D. Hyperthyroidism** — caused by excess thyroid hormones; presents with weight loss, heat intolerance, palpitations, and nervousness — not excessive urination as the primary feature.",
    memoryTip: "Diabetes INSIPIDUS = INSIPID (tasteless) urine = dilute urine = gallons of watery pee. No ADH = kidneys cannot hold water = floods of urine + unquenchable thirst. Not sweet like diabetes mellitus.",
    difficulty: 2
  },
  {
    id: "MS-Q66",
    text: "Hormones are chemical messengers produced by endocrine glands that:",
    options: [
      "Are released directly into the bloodstream",
      "Act only locally at the site of production",
      "Transmit electrical signals between neurons",
      "Stimulate muscle contraction"
    ],
    correctAnswerIndex: 0,
    category: "Endocrine System",
    topic: "How Hormones Are Released",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Endocrine glands are **ductless glands** — they have no tube or duct to carry their products away. Instead, they secrete hormones directly into the **bloodstream (blood capillaries)** surrounding the gland cells. The blood then carries hormones to target organs throughout the body. This is what distinguishes endocrine glands (internal secretion into blood) from **exocrine glands** (which secrete products through ducts onto surfaces — e.g., sweat glands, salivary glands).\n\n**Why each option is wrong:**\n\n- **B. Act only locally at the site of production** — hormones that act locally are called **paracrine** or **autocrine** messengers. True endocrine hormones travel long distances through the blood to distant target organs.\n- **C. Transmit electrical signals between neurons** — this describes **neurotransmitters** released at synapses by the nervous system — not hormones.\n- **D. Stimulate muscle contraction** — some hormones can indirectly affect muscle, but this is not the defining characteristic of all hormones. Acetylcholine (a neurotransmitter) directly stimulates muscle contraction.",
    memoryTip: "ENDOCRINE = ENDO (inside/internal) secretion = into the BLOOD. No ducts, no tubes. Hormones hitch a ride on the BLOOD to reach their target organ far away.",
    difficulty: 1
  },
  {
    id: "MS-Q67",
    text: "Which disorder is characterised by an underactive thyroid gland and is often associated with symptoms such as fatigue, weight gain, and cold intolerance?",
    options: ["Graves' disease", "Hashimoto's thyroiditis", "Hypopituitarism", "Cushing's syndrome"],
    correctAnswerIndex: 1,
    category: "Endocrine System",
    topic: "Underactive Thyroid with Fatigue and Weight Gain",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Hashimoto's thyroiditis (also called autoimmune or chronic lymphocytic thyroiditis) is the most common cause of hypothyroidism in iodine-sufficient regions. The immune system attacks the thyroid gland, progressively destroying its tissue and reducing thyroid hormone production. With low T3/T4:\n\n- Metabolism slows → **weight gain**\n- Energy production decreases → **fatigue**\n- Less heat generation → **cold intolerance**\n- Other features: dry skin, constipation, bradycardia, depression, goitre.\n\n**Why each option is wrong:**\n\n- **A. Graves' disease** — the most common cause of **hyperthyroidism** (overactive thyroid). Presents with weight loss, heat intolerance, palpitations, exophthalmos (bulging eyes) — the opposite of the symptoms described.\n- **C. Hypopituitarism** — can cause secondary hypothyroidism (pituitary fails to secrete TSH), but it is not the primary cause of an underactive thyroid.\n- **D. Cushing's syndrome** — caused by excess cortisol; features include weight gain (central obesity), not cold intolerance. Not related to thyroid function.",
    memoryTip: "HASHIMOTO'S = immune system ATTACKS the thyroid → thyroid gets TIRED (hypoTHYROIDism). SLOW everything down: slow metabolism, slow heart, weight up, energy down, always cold.",
    difficulty: 2
  },
  {
    id: "MS-Q68",
    text: "Growth hormone (GH) primarily acts on:",
    options: ["Bone and muscle tissue", "Kidneys", "Liver", "Adrenal glands"],
    correctAnswerIndex: 0,
    category: "Endocrine System",
    topic: "Growth Hormone Primary Target",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Growth hormone (GH), produced by the anterior pituitary, primarily stimulates:\n\n- **Bone growth** — GH stimulates the liver to produce IGF-1 (Insulin-like Growth Factor-1), which directly drives bone elongation at the epiphyseal growth plates and increases bone density.\n- **Muscle growth** — GH promotes protein synthesis and increases muscle mass.\n\nGH also promotes lipolysis (fat breakdown) and raises blood glucose. Deficiency in childhood causes short stature (dwarfism); excess in childhood causes gigantism; excess in adults causes acromegaly (enlarged hands, feet, jaw).\n\n**Why each option is wrong:**\n\n- **B. Kidneys** — ADH (from the posterior pituitary) acts on the kidneys; GH's primary targets are bone and muscle.\n- **C. Liver** — GH does act on the liver to stimulate IGF-1 production, but the liver is an intermediary (producing the signal) rather than the primary target where growth occurs.\n- **D. Adrenal glands** — ACTH (from the anterior pituitary) acts on the adrenal glands — not GH.",
    memoryTip: "GROWTH HORMONE = grows BONES and MUSCLES. Tall, strong body = GH working. Too much GH in child = GIANT. Too much in adult = ACROMEGALY (huge hands, feet, head).",
    difficulty: 1
  },
  {
    id: "MS-Q69",
    text: "Diabetic ketoacidosis (DKA) is a serious complication primarily associated with which type of diabetes?",
    options: ["Type 1 diabetes mellitus", "Type 2 diabetes mellitus", "Gestational diabetes mellitus", "Latent autoimmune diabetes in adults (LADA)"],
    correctAnswerIndex: 0,
    category: "Endocrine System",
    topic: "DKA and Diabetes Type",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "DKA occurs when there is an absolute deficiency of insulin (as in Type 1 DM), causing the body to break down fat as an alternative energy source. This produces **ketone bodies** (acetoacetate, beta-hydroxybutyrate), which are acidic — lowering blood pH and causing **metabolic acidosis**. The classic triad of DKA: **hyperglycaemia + ketosis + metabolic acidosis**.\n\nType 1 DM patients have no functioning beta cells → zero insulin production → they are far more prone to DKA. Type 2 DM patients usually retain some insulin production — enough to prevent ketosis (though can develop a variant called hyperosmolar hyperglycaemic state — HHS).\n\n**Why each option is wrong:**\n\n- **B.** Type 2 DM can occasionally develop DKA (especially under severe stress or sepsis), but it is not the primary associated type.\n- **C & D.** Gestational DM and LADA are not the primary associations with classic DKA.",
    memoryTip: "DKA = Type 1 = NO insulin at all. Body burns FAT for fuel → KETONES form → blood turns ACIDIC. Type 1 = ZERO insulin = risk of DKA always present if they miss their injection.",
    difficulty: 2
  },
  {
    id: "MS-Q70",
    text: "The intravenous (IV) administered drugs are:",
    options: ["100% bioavailable", "Rapidly absorbed", "Undergo the first-pass metabolism", "Rapidly excreted by renal"],
    correctAnswerIndex: 0,
    category: "Pharmacology",
    topic: "IV Drug Bioavailability",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Bioavailability is the fraction of a dose that reaches the systemic circulation unchanged and in active form. When a drug is administered intravenously, it is injected directly into the bloodstream — there is no absorption step and no first-pass metabolism. The entire dose immediately reaches systemic circulation, giving **100% bioavailability** by definition. This is why IV dosing allows precise control of drug levels and is used in emergencies.\n\n**Why each option is wrong:**\n\n- **B. Rapidly absorbed** — IV drugs are not absorbed at all; they bypass absorption entirely by being placed directly into the blood.\n- **C. First-pass metabolism** — this occurs when oral drugs are absorbed from the gut, pass through the portal vein, and are partially metabolised by the liver before reaching systemic circulation. IV drugs skip the gut and liver entirely — no first-pass effect.\n- **D. Rapidly excreted by renal** — IV drugs have normal excretion patterns; rapid renal excretion is not a defining characteristic of IV administration.",
    memoryTip: "IV = INTO the VEIN = INTO the blood directly. No absorption, no first-pass. 100% bioavailable. The drug you inject is the drug that reaches the target — nothing is lost getting there.",
    difficulty: 1
  },
  {
    id: "MS-Q71",
    text: "Mrs. Johansson's physician has prescribed tetracycline 500 mg PO q6h. The nurse notes that Mrs. Johansson is also taking oral contraceptives. What is the most appropriate initial nursing intervention?",
    options: [
      "Administer the dose of tetracycline",
      "Notify the physician that Mrs. Johansson is taking oral contraceptives",
      "Tell Mrs. Johansson she should stop taking oral contraceptives since they are inactivated by tetracycline",
      "Tell Mrs. Johansson to use another form of birth control for at least two months"
    ],
    correctAnswerIndex: 1,
    category: "Pharmacology",
    topic: "Tetracycline and Oral Contraceptives",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "This is a **drug-drug interaction** concern. Tetracycline (an antibiotic) can reduce the effectiveness of combined oral contraceptive pills by altering the gut flora that assist in the enterohepatic recycling of oestrogen. This could increase the risk of unintended pregnancy. The nurse's **first action** when identifying a potential interaction is to **notify the prescribing physician** so that the doctor can:\n\n- Decide whether to continue both medications.\n- Advise the patient appropriately regarding contraception.\n- Make any necessary changes to the prescription.\n\n**Why each option is wrong:**\n\n- **A.** Administering the tetracycline without addressing the interaction is unsafe. Identifying interactions requires action — not simply proceeding.\n- **C.** The nurse should not instruct a patient to stop a prescribed medication without physician direction — that is outside the nursing scope.\n- **D.** Advising an additional form of contraception is reasonable but should come from the physician, not initiated unilaterally by the nurse without first consulting the prescriber.",
    memoryTip: "DRUG INTERACTION identified → NOTIFY the DOCTOR first. The nurse's role is to RECOGNIZE and REPORT — not to change the prescription or stop medications independently.",
    difficulty: 2
  },
  {
    id: "MS-Q72",
    text: "An asthmatic client is put on montelukast (Singulair). During therapy, which of the following laboratories should be monitored?",
    options: [
      "Complete blood count",
      "Sodium and potassium",
      "Calcium and platelet count",
      "Alanine transaminase (ALT) and aspartate transaminase (AST)"
    ],
    correctAnswerIndex: 3,
    category: "Pharmacology",
    topic: "Montelukast Monitoring",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Montelukast is a leukotriene receptor antagonist used for asthma and allergic rhinitis. It is metabolised by the liver (CYP3A4 enzyme system). Rare but reported cases of **hepatotoxicity** (liver cell damage) have been associated with montelukast. ALT and AST are the standard liver function markers — elevated levels indicate liver cell damage. Monitoring these enzymes ensures early detection of liver toxicity before it becomes serious.\n\n**Why each option is wrong:**\n\n- **A. CBC** — montelukast does not primarily affect blood cell counts.\n- **B. Sodium and potassium** — electrolyte disturbances are not a known adverse effect of montelukast.\n- **C. Calcium and platelet count** — not associated with montelukast's adverse effects.",
    memoryTip: "MONTELUKAST = liver-metabolised drug = monitor the LIVER. ALT + AST = liver INJURY markers. If liver enzymes rise → possible hepatotoxicity → notify physician.",
    difficulty: 2
  },
  {
    id: "MS-Q73",
    text: "Which of the following drugs works by interfering with bacterial protein synthesis through reversible action at the 50S ribosomal subunit?",
    options: ["Erythromycin", "Gentamicin", "Doxycycline", "Both A and B"],
    correctAnswerIndex: 0,
    category: "Pharmacology",
    topic: "Drug Acting at 50S Ribosomal Subunit",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Erythromycin is a **macrolide** antibiotic that binds reversibly to the **50S ribosomal subunit** of bacteria, blocking the translocation step of protein synthesis (preventing the ribosome from moving along the mRNA). This inhibits bacterial growth (bacteriostatic). Other macrolides (azithromycin, clarithromycin) share this mechanism.\n\n**Why each option is wrong:**\n\n- **B. Gentamicin** — an aminoglycoside that binds to the **30S ribosomal subunit** (irreversibly), causing misreading of mRNA → abnormal, non-functional proteins → bactericidal effect.\n- **C. Doxycycline** — a tetracycline that also binds the **30S ribosomal subunit**, blocking attachment of aminoacyl-tRNA → bacteriostatic effect.\n- **D. Both A and B** — incorrect because gentamicin works at the 30S subunit, not the 50S.\n\n**Ribosomal targets quick reference:**\n\n- **50S**: Macrolides (erythromycin), Chloramphenicol, Clindamycin, Linezolid\n- **30S**: Aminoglycosides (gentamicin), Tetracyclines (doxycycline)",
    memoryTip: "50S = MACRO means BIG = MACROlides. 30S = AMINO (gentamicin) + TETRA (doxycycline). Remember: CLASSify by SIZE of subunit: 30S = smaller drugs, 50S = macrolides go big.",
    difficulty: 3
  },
  {
    id: "MS-Q74",
    text: "Pyridoxine deficiency is a side effect of which of these drugs?",
    options: ["Clofazimine", "Isoniazid", "Dapsone", "Streptomycin"],
    correctAnswerIndex: 1,
    category: "Pharmacology",
    topic: "Pyridoxine Deficiency Side Effect",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Isoniazid (INH) — a first-line anti-tuberculosis drug — causes **pyridoxine (vitamin B6) deficiency** as a well-known side effect. INH structurally resembles pyridoxine and competes with it, leading to depletion. Without adequate B6, peripheral nerves are damaged → **peripheral neuropathy** (numbness, tingling, burning in hands and feet). To prevent this, pyridoxine 25–50 mg daily is routinely co-prescribed with INH, especially in high-risk patients (malnourished, pregnant, elderly, HIV-positive, alcoholics).\n\n**Why each option is wrong:**\n\n- **A. Clofazimine** — used for leprosy and drug-resistant TB; causes skin discolouration (reddish-brown), not pyridoxine deficiency.\n- **C. Dapsone** — used for leprosy and PCP prophylaxis; can cause haemolytic anaemia and methaemoglobinaemia — not pyridoxine deficiency.\n- **D. Streptomycin** — an aminoglycoside anti-TB drug; causes ototoxicity (hearing loss) and nephrotoxicity — not pyridoxine deficiency.",
    memoryTip: "ISONIAZID = VITAMIN B6 ROBBER. Give pyridoxine alongside INH — especially to malnourished TB patients. Numb, tingling feet after starting TB treatment = think B6 deficiency from INH.",
    difficulty: 2
  },
  {
    id: "MS-Q75",
    text: "Nurse Kate is taking care of a client taking ibuprofen. Which of the following should be included in her assessment and monitoring?",
    options: [
      "Blood pressure and bowel sounds",
      "Weight and appetite",
      "Muscle strength and range of motion",
      "Respiratory rate, depth, and rhythm"
    ],
    correctAnswerIndex: 0,
    category: "Pharmacology",
    topic: "Ibuprofen Monitoring",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Ibuprofen is an NSAID (Non-Steroidal Anti-Inflammatory Drug). Its main adverse effects that require monitoring are:\n\n- **GI effects** — NSAIDs inhibit prostaglandin synthesis (which normally protects the stomach lining) → gastric irritation, peptic ulcers, GI bleeding. Monitoring **bowel sounds** and watching for abdominal pain, blood in stool, or black tarry stools is essential.\n- **Renal/cardiovascular effects** — NSAIDs cause sodium and water retention → can raise **blood pressure** and worsen heart failure or renal function. Monitoring blood pressure is critical in patients with hypertension, heart disease, or kidney disease.\n\n**Why each option is wrong:**\n\n- **B.** Weight and appetite are non-specific and not the priority for ibuprofen monitoring.\n- **C.** Muscle strength and ROM are assessed in physiotherapy; not specific ibuprofen adverse effects.\n- **D.** Respiratory effects are more associated with opioids, not NSAIDs.",
    memoryTip: "IBUPROFEN = NSAID = targets the GUT (peptic ulcer risk) and BLOOD PRESSURE (salt/water retention). CHECK BOWEL SOUNDS (GI bleeding) + CHECK BP (renal/cardiovascular effects).",
    difficulty: 2
  },
  {
    id: "MS-Q76",
    text: "Half-life (t½) is the time required to:",
    options: [
      "Change the amount of a drug in plasma by half during elimination",
      "Metabolise half of an introduced drug into the active metabolite",
      "Absorb half of an introduced drug",
      "Bind half of an introduced drug to plasma proteins"
    ],
    correctAnswerIndex: 0,
    category: "Pharmacology",
    topic: "Half-Life Definition",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Drug half-life (t½) is the time it takes for the plasma concentration (or amount) of a drug to decrease by 50% during the elimination phase. It is a key pharmacokinetic parameter that:\n\n- Determines how frequently a drug is dosed (drugs with short t½ are dosed more frequently).\n- Predicts how long a drug stays in the body.\n- Guides dosing intervals to maintain therapeutic levels.\n- Determines time to steady state (approximately 4–5 half-lives to reach steady state; 4–5 half-lives to be eliminated).\n\n**Why each option is wrong:**\n\n- **B.** Half-life specifically refers to elimination, not metabolism into active metabolites.\n- **C.** The time to absorb half the drug relates to absorption kinetics (not half-life, which is about elimination).\n- **D.** Protein binding is a separate concept; half-life measures plasma drug concentration decline during elimination.",
    memoryTip: "HALF-LIFE = time for blood level to DROP BY HALF. Like a radioactive countdown. After 1 half-life = 50% left. After 2 = 25%. After 4–5 = almost all gone from the body.",
    difficulty: 1
  },
  {
    id: "MS-Q77",
    text: "Renal damage is a potential adverse effect of aminoglycosides. In what part of the kidney are aminoglycosides retained which causes this effect?",
    options: ["Distal tubule", "Proximal tubule", "Loop of Henle", "Glomerulus"],
    correctAnswerIndex: 1,
    category: "Pharmacology",
    topic: "Aminoglycoside Nephrotoxicity Site",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Aminoglycosides (gentamicin, amikacin, tobramycin) are **actively taken up** by the cells of the **proximal tubule** and accumulate there. Once inside the tubular cells, they interfere with lysosomal function, generate reactive oxygen species, and cause cell death → **acute tubular necrosis (ATN)** → acute kidney injury. This is why monitoring **serum creatinine and urine output** is essential when patients are on aminoglycosides. Their dosing interval is also adjusted in patients with reduced renal function.\n\n**Why each option is wrong:**\n\n- **A. Distal tubule** — site of action for thiazide diuretics and some tubular secretion; not where aminoglycosides accumulate.\n- **C. Loop of Henle** — site of action for loop diuretics (furosemide); not where aminoglycosides cause toxicity.\n- **D. Glomerulus** — filters the blood; aminoglycoside toxicity is tubular (proximal), not glomerular.",
    memoryTip: "AMINOGLYCOSIDES accumulate in the PROXIMAL TUBULE and KILL those cells → tubular NECROSIS → kidney failure. Monitor creatinine. Proximal = PROXIMAL to the glomerulus = first part of tubule.",
    difficulty: 3
  },
  {
    id: "MS-Q78",
    text: "A client is prescribed Guaifenesin (Mucinex). The nurse determines that the client understands proper administration if the client states that he or she will:",
    options: [
      "Take an additional dose once fever and cough persist",
      "Limit oral fluid intake",
      "Drink extra fluid while taking this medication",
      "Take the medication with meals only"
    ],
    correctAnswerIndex: 2,
    category: "Pharmacology",
    topic: "Guaifenesin Administration",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Guaifenesin is an **expectorant** — it thins and loosens mucus/phlegm in the respiratory tract, making it easier to cough up. For it to work effectively, **adequate hydration** is essential because:\n\n- Water is needed to thin (reduce viscosity of) the mucus.\n- Without fluid, the mucus remains thick and the expectorant cannot act effectively.\n- Extra fluid intake also soothes the irritated respiratory mucosa.\n\n**Why each option is wrong:**\n\n- **A.** Taking additional doses for fever is not appropriate without medical advice. Guaifenesin is a symptomatic drug, not a treatment for fever or infection.\n- **B.** Limiting fluid is the opposite of what is needed. Dehydration thickens mucus — exactly what guaifenesin aims to prevent.\n- **D.** There is no requirement to take guaifenesin with meals only. It can be taken with or without food.",
    memoryTip: "GUAIFENESIN = MUCUS THINNER. For it to work, ADD WATER to the mix. Drink lots of fluids = thin the mucus = easier to cough it out. Limiting fluids defeats the purpose.",
    difficulty: 1
  },
  {
    id: "MS-Q79",
    text: "Which immune stimulant is usually used for treatment of blood-related cancer?",
    options: ["Interferons", "Interleukins", "Colony-stimulating factors", "Steroids"],
    correctAnswerIndex: 2,
    category: "Pharmacology",
    topic: "Immune Stimulants for Blood Cancer",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Colony-stimulating factors (CSFs) — such as G-CSF (granulocyte colony-stimulating factor, e.g., filgrastim) and GM-CSF — stimulate the bone marrow to produce more blood cells (white cells, red cells, platelets). They are used in blood-related cancers (leukaemia, lymphoma) and after chemotherapy to:\n\n- Stimulate recovery of bone marrow after chemotherapy-induced suppression.\n- Boost white blood cell production to prevent life-threatening infections.\n- Help mobilise stem cells for bone marrow transplant.\n\n**Why each option is wrong:**\n\n- **A. Interferons** — are used in some blood cancers (e.g., hairy cell leukaemia, CML), but they act by inhibiting cancer cell division and stimulating immune cells — not specifically as bone marrow stimulants for blood-related cancers.\n- **B. Interleukins** — play various immunomodulatory roles; IL-2 is used in some cancers but not primarily blood-related cancers.\n- **D. Steroids** — are immunosuppressants, not immune stimulants. They are used in some blood cancers (leukaemia treatment protocols) but as chemotherapy agents, not immune stimulants.",
    memoryTip: "COLONY-stimulating factors = tell the BONE MARROW to make MORE COLONIES of blood cells. After chemo destroys the marrow, CSFs bring it BACK to life. G-CSF = more granulocytes.",
    difficulty: 2
  },
  {
    id: "MS-Q80",
    text: "Peter is experiencing diarrhoea after consuming his prescribed antibiotics for a whole week. This is because:",
    options: [
      "The drugs render food indigestible",
      "Gastric flora is disturbed",
      "Fluid is added into the intestines",
      "Normal intestinal bacteria are destroyed"
    ],
    correctAnswerIndex: 3,
    category: "Pharmacology",
    topic: "Antibiotic-Induced Diarrhoea",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The human gut contains trillions of **normal (commensal) bacteria** that form the **gut microbiome** — playing crucial roles in digestion, vitamin synthesis, immune function, and keeping harmful bacteria in check. Broad-spectrum antibiotics kill not only the target pathogen but also these beneficial bacteria → disruption of the normal flora (**dysbiosis**). Without the natural flora to compete, harmful bacteria (most notably *Clostridioides difficile*) can multiply, producing toxins that cause **antibiotic-associated diarrhoea or colitis**.\n\n**Why each option is wrong:**\n\n- **A.** Antibiotics do not make food indigestible.\n- **B.** The **intestinal** flora (not gastric flora) is what is disrupted. The stomach's environment is primarily acidic and not the main microbiome site.\n- **C.** Some antibiotics can draw fluid into the intestine as a minor mechanism, but the primary cause of antibiotic-associated diarrhoea is disruption of the normal intestinal bacterial flora.",
    memoryTip: "ANTIBIOTICS kill both BAD and GOOD gut bacteria. Without good bacteria = harmful bacteria TAKE OVER = diarrhoea (often C. diff). Probiotics can help restore normal flora.",
    difficulty: 1
  },
  {
    id: "MS-Q81",
    text: "Humatrope (somatropin) is being given to a client with Turner syndrome. Which of the following findings is associated with this medication?",
    options: ["Decreases ALT and AST level", "Mild hyperglycaemia", "Hypotension", "Water intoxication"],
    correctAnswerIndex: 1,
    category: "Pharmacology",
    topic: "Somatropin in Turner Syndrome",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Somatropin (Humatrope) is recombinant human growth hormone. Its metabolic effects include **insulin resistance** — growth hormone counteracts insulin's action, reducing glucose uptake by cells. This results in **mild hyperglycaemia** (elevated blood glucose). This is particularly important to monitor in patients predisposed to diabetes. Regular blood glucose monitoring is necessary during somatropin therapy.\n\n**Why each option is wrong:**\n\n- **A.** Somatropin can actually *elevate* liver enzymes (ALT/AST) in some patients — it does not decrease them.\n- **C. Hypotension** — growth hormone tends to promote fluid retention (retains sodium and water), which may slightly raise rather than lower blood pressure.\n- **D. Water intoxication** — while somatropin does cause mild fluid retention, clinical water intoxication is not a recognised side effect.",
    memoryTip: "GROWTH HORMONE = raises blood sugar. It OPPOSES insulin (anti-insulin effect) → glucose stays higher. Monitor blood sugar in patients on somatropin — especially if they have a family history of diabetes.",
    difficulty: 2
  },
  {
    id: "MS-Q82",
    text: "Which of the following clients is most likely to experience adverse effects from treatment with diuretics?",
    options: ["A 21-year-old student", "A 40-year-old unmarried man", "A 60-year-old widower", "A 75-year-old man"],
    correctAnswerIndex: 3,
    category: "Pharmacology",
    topic: "Diuretic Adverse Effects Risk Group",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The **elderly** (especially those over 70–75) are at the highest risk for diuretic adverse effects because:\n\n- **Reduced renal function** with age → impaired drug elimination → drug accumulates to higher levels.\n- **Less physiological reserve** → smaller fluid losses cause significant hypotension, dizziness, and falls.\n- **Electrolyte homeostasis** is more fragile → diuretics more easily cause dangerous hypokalaemia (low potassium → arrhythmias) or hyponatraemia (low sodium → confusion, seizures).\n- **Orthostatic hypotension** → increased falls and fractures.\n- More likely to be on multiple medications (**polypharmacy**) → drug interactions.",
    memoryTip: "ELDERLY + DIURETICS = HIGH RISK. Old kidneys can't handle the drug. Fluid loss tips old, fragile physiology into crisis. The older the patient, the more carefully diuretics must be dosed and monitored.",
    difficulty: 1
  },
  {
    id: "MS-Q83",
    text: "Which of the following drugs can cause severe haematological disorders?",
    options: ["Digoxin", "Quinine", "Disopyramide", "Procainamide"],
    correctAnswerIndex: 3,
    category: "Pharmacology",
    topic: "Drug Causing Severe Haematological Disorders",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Procainamide (an anti-arrhythmic drug) is well known for causing severe haematological adverse effects, most notably:\n\n- **Agranulocytosis** — severe reduction in granulocytes (mainly neutrophils), leaving the patient dangerously vulnerable to life-threatening infections.\n- **Drug-induced lupus erythematosus (DILE)** — presents with lupus-like symptoms and can involve haematological abnormalities.\n\nRoutine monitoring of full blood count (FBC) is required during procainamide therapy.\n\n**Why each option is wrong:**\n\n- **A. Digoxin** — causes cardiac toxicity (arrhythmias, bradycardia) and GI effects; not severe haematological disorders.\n- **B. Quinine** — can cause haemolysis and thrombocytopenia, particularly in G6PD-deficient patients, but procainamide is more classically associated with agranulocytosis.\n- **C. Disopyramide** — an anti-arrhythmic with anticholinergic side effects and negative inotropic effects; not primarily haematological.",
    memoryTip: "PROCAINAMIDE = PROBLEM for BLOOD cells. It can cause AGRANULOCYTOSIS (white cells wiped out) + DRUG-INDUCED LUPUS. Monitor FBC regularly. If WBC drops — STOP the drug.",
    difficulty: 3
  },
  {
    id: "MS-Q84",
    text: "For an asthmatic client put on cromolyn sodium (Intal) inhaler, the nurse asks him to immediately report which of the following side effects?",
    options: ["Sore throat", "Drowsiness", "Wheezing", "Hypotension"],
    correctAnswerIndex: 2,
    category: "Pharmacology",
    topic: "Cromolyn Sodium: Report Immediately",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Cromolyn sodium is a mast cell stabiliser used as a preventive (prophylactic) treatment in asthma. A rare but serious and potentially life-threatening side effect is **paradoxical bronchospasm** — where the inhaled drug actually triggers bronchoconstriction rather than preventing it. If the patient notices **wheezing** after using cromolyn, this must be reported immediately, as it indicates the medication is worsening rather than helping the asthma. The inhaler should be stopped immediately.\n\n**Why each option is wrong:**\n\n- **A. Sore throat** — a mild, common side effect from inhaled medications; not urgent.\n- **B. Drowsiness** — not a typical or serious side effect of cromolyn sodium.\n- **D. Hypotension** — not a common side effect of inhaled cromolyn sodium. Hypotension is more associated with systemic medications.",
    memoryTip: "CROMOLYN = PREVENTS bronchospasm. So WHEEZING after using it = the drug is CAUSING bronchospasm instead of preventing it = PARADOXICAL reaction = STOP the drug and call for help IMMEDIATELY.",
    difficulty: 2
  },
  {
    id: "MS-Q85",
    text: "A client has just returned to a nursing unit following bronchoscopy. A nurse would implement which of the following nursing interventions?",
    options: [
      "Encouraging additional fluids for the next 24 hours",
      "Ensuring the return of the gag reflex before offering foods or fluids",
      "Administering atropine intravenously",
      "Administering small doses of midazolam (Versed)"
    ],
    correctAnswerIndex: 1,
    category: "Respiratory System",
    topic: "Post-Bronchoscopy Nursing Intervention",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Bronchoscopy requires the patient's throat to be sprayed with a **local anaesthetic** (such as lidocaine) to suppress the gag reflex and allow the scope to pass. After the procedure, the gag reflex remains suppressed for **1–2 hours**. If the patient eats or drinks before the gag reflex returns, they cannot protect their airway from aspiration → **aspiration pneumonia** risk.\n\nThe nurse MUST test the gag reflex before allowing any oral intake.\n\n**Why each option is wrong:**\n\n- **A.** Encouraging additional fluids is appropriate eventually, but ONLY after the gag reflex returns. Offering fluids before this point risks aspiration.\n- **C.** Atropine is a pre-procedure medication to dry secretions; it is not needed post-procedure.\n- **D.** Midazolam is a sedative used for the procedure; administering more sedation post-procedure would further suppress protective reflexes — dangerous.",
    memoryTip: "POST-BRONCHOSCOPY = WAIT for the GAG REFLEX. Throat was numbed. No gag = no protection against choking or aspiration. TEST the gag first. Offer water only after the reflex comes back.",
    difficulty: 1
  },
  {
    id: "MS-Q86",
    text: "A nurse is assessing a client with chronic airflow limitation and notes that the client has a \"barrel chest.\" The nurse interprets that this client has which form of chronic airflow limitation?",
    options: ["Chronic obstructive bronchitis", "Emphysema", "Bronchial asthma", "Bronchial asthma and bronchitis"],
    correctAnswerIndex: 1,
    category: "Respiratory System",
    topic: "Barrel Chest and Emphysema",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Barrel chest** — where the anteroposterior (front-to-back) diameter of the chest equals the lateral (side-to-side) diameter, giving a round, barrel-like appearance — is the hallmark physical finding of **emphysema**. In emphysema:\n\n- Alveolar walls are progressively destroyed.\n- Air is chronically trapped in the alveoli (**air trapping**).\n- The lungs remain over-inflated, pushing the chest wall outward into a permanently expanded barrel shape.\n- The diaphragm is also pushed flat and low.\n\n**Why each option is wrong:**\n\n- **A. Chronic obstructive bronchitis** — characterised by excessive mucus production and productive cough (\"blue bloater\" phenotype); does not typically cause barrel chest.\n- **C & D.** Bronchial asthma may cause temporary hyperinflation during attacks, but the permanent barrel chest is not associated with asthma.",
    memoryTip: "EMPHYSEMA = AIR TRAPPER = barrels of trapped air = BARREL CHEST. The \"PINK PUFFER\" — thin patient, purse-lip breathing, barrel chest. Lungs never fully deflate = chest expands permanently.",
    difficulty: 2
  },
  {
    id: "MS-Q87",
    text: "A client with allergic rhinitis asks the nurse what he should do to decrease his symptoms. Which instruction is most appropriate?",
    options: [
      "\"Use your nasal decongestant spray regularly to help clear your nasal passages.\"",
      "\"Ask the doctor for antibiotics. Antibiotics will help decrease the secretion.\"",
      "\"It is important to increase your activity. A daily brisk walk will help promote drainage.\"",
      "\"Keep a diary when your symptoms occur. This can help you identify what precipitates your attacks.\""
    ],
    correctAnswerIndex: 3,
    category: "Respiratory System",
    topic: "Allergic Rhinitis Patient Education",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The most effective long-term strategy for allergic rhinitis is **trigger identification and avoidance**. By keeping a diary of when symptoms occur (season, location, activities, foods, animals encountered), the patient can identify specific allergens (pollen, dust, pet dander, mould) and modify their environment to minimise exposure. This addresses the root cause rather than only treating symptoms.\n\n**Why each option is wrong:**\n\n- **A.** Regular use of nasal decongestant sprays (e.g., oxymetazoline) is limited to **3–5 days only**. Long-term use causes **rebound congestion (rhinitis medicamentosa)** — the nose becomes more congested than before. Not recommended for regular use.\n- **B.** Allergic rhinitis is caused by an **allergic (immune) response** — not infection. Antibiotics have no role in treating allergies.\n- **C.** Exercise can actually worsen allergic rhinitis by increasing nasal airflow and exposure to outdoor allergens. It does not promote drainage of allergic secretions.",
    memoryTip: "ALLERGIC RHINITIS = KNOW YOUR TRIGGERS. Diary = detective work = find the culprit allergen = AVOID it = symptoms improve at the source. Decongestant sprays = only 3–5 days max!",
    difficulty: 1
  },
  {
    id: "MS-Q88",
    text: "A client with acute asthma is prescribed short-term corticosteroid therapy. What is the rationale for the use of steroids in clients with asthma?",
    options: [
      "Corticosteroids promote bronchodilation",
      "Corticosteroids act as an expectorant",
      "Corticosteroids have an anti-inflammatory effect",
      "Corticosteroids prevent development of respiratory infections"
    ],
    correctAnswerIndex: 2,
    category: "Respiratory System",
    topic: "Corticosteroids in Asthma",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Asthma is fundamentally an **inflammatory** disease of the airways. Allergens, irritants, or exercise trigger an inflammatory cascade — mast cells and eosinophils release histamine, leukotrienes, and cytokines, causing bronchial wall oedema, mucus hypersecretion, and smooth muscle spasm. **Corticosteroids** (prednisolone, dexamethasone) suppress this inflammation by:\n\n- Inhibiting the production of inflammatory mediators.\n- Reducing airway wall oedema.\n- Decreasing mucus production.\n- Over time, reducing airway hyper-reactivity.\n\n**Why each option is wrong:**\n\n- **A. Bronchodilation** is the role of **beta-2 agonists** (salbutamol) and anticholinergics, not corticosteroids. Steroids reduce inflammation; they do not directly relax bronchial smooth muscle.\n- **B. Expectorant action** (loosening mucus) is the role of **guaifenesin** — not corticosteroids.\n- **D.** Corticosteroids actually **suppress** the immune system, which can *increase* susceptibility to respiratory infections — the opposite of preventing them.",
    memoryTip: "ASTHMA = inflamed airways. STEROIDS = ANTI-INFLAMMATORY. They douse the FIRE of inflammation in the airways. They don't directly open the airway — that's the bronchodilator's job.",
    difficulty: 2
  },
  {
    id: "MS-Q89",
    text: "Immediately following a thoracentesis, which clinical manifestations indicate that a complication has occurred and the physician should be notified?",
    options: [
      "Serosanguineous drainage from the puncture site",
      "Increased temperature and blood pressure",
      "Increased pulse and pallor",
      "Hypotension and hypothermia"
    ],
    correctAnswerIndex: 2,
    category: "Respiratory System",
    topic: "Complication After Thoracentesis",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Thoracentesis (draining fluid from the pleural space using a needle) can cause complications including:\n\n- **Haemorrhage** — the needle can nick an intercostal blood vessel or the lung → internal bleeding → patient develops **tachycardia (increased pulse)** (compensating for blood loss) and **pallor** (blood directed away from skin to vital organs as volume drops).\n- **Pneumothorax** — air enters the pleural space → lung collapses.\n\nIncreased pulse + pallor = the body is compensating for significant blood loss or cardiovascular compromise → **urgent physician notification** required.\n\n**Why each option is wrong:**\n\n- **A.** Small amounts of serosanguineous (pink-tinged serous) drainage from the puncture site are an expected, normal post-procedure finding.\n- **B.** Increased temperature may suggest infection (later complication); blood pressure rise is not a typical post-thoracentesis complication.\n- **D.** Hypothermia is not a direct post-thoracentesis complication.",
    memoryTip: "After THORACENTESIS: TACHYCARDIA + PALLOR = bleeding inside. The body is compensating for blood loss. Heart beats FASTER, skin goes PALE. CALL the doctor — this is an emergency.",
    difficulty: 2
  },
  {
    id: "MS-Q90",
    text: "A male patient has a sucking stab wound to the chest. Which action should the nurse take first?",
    options: [
      "Drawing blood for haematocrit and haemoglobin level",
      "Applying a dressing over the wound and taping it on three sides",
      "Preparing a chest tube insertion tray",
      "Preparing to start an IV line"
    ],
    correctAnswerIndex: 1,
    category: "Respiratory System",
    topic: "Sucking Stab Wound to Chest",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A **sucking chest wound** (open pneumothorax) allows air to enter the pleural space directly through the chest wall with each breath, collapsing the lung on that side and potentially causing a tension pneumothorax. The **immediate treatment** is to apply an **occlusive dressing taped on three sides** (leaving one side open):\n\n- The three sealed sides prevent air from entering the chest during inspiration.\n- The unsealed side acts as a flutter valve, allowing trapped air to escape during expiration.\n- This converts the open pneumothorax to a closed one while definitive treatment is arranged.\n\n**Why each option is wrong:**\n\n- **A.** Blood tests are important but are not the immediate life-saving priority.\n- **C.** Chest tube insertion may be needed, but the nurse's first action is sealing the wound — preparation of the tray comes after immediate wound management.\n- **D.** IV access is needed but is not the first priority when air is actively entering the chest.",
    memoryTip: "SUCKING CHEST WOUND = SEAL IT with 3-SIDED dressing. 3 sealed + 1 open = air can EXIT but not ENTER. Think of it as a ONE-WAY VALVE. Seal first, then prepare for chest tube.",
    difficulty: 2
  },
  {
    id: "MS-Q91",
    text: "A nurse is assessing a client with a history of heart failure. Which clinical manifestation would the nurse expect to find if the client is experiencing left-sided heart failure?",
    options: ["Peripheral oedema", "Jugular venous distension", "Crackles on lung auscultation", "Hepatomegaly"],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "Left-Sided Heart Failure Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "In **left-sided heart failure**, the left ventricle fails to pump blood effectively into the systemic circulation. Blood backs up into the left atrium and then into the **pulmonary veins and lungs**. This increases pulmonary capillary pressure, forcing fluid into the alveoli (**pulmonary oedema**). The hallmark sign is **crackles (rales)** heard on lung auscultation. Other signs include dyspnea, orthopnea, and paroxysmal nocturnal dyspnea (PND).\n\n**Why each option is wrong:**\n\n- **A. Peripheral oedema** — a sign of **right-sided** heart failure (blood backs up into the systemic venous system).\n- **B. Jugular venous distension (JVD)** — a sign of **right-sided** heart failure.\n- **D. Hepatomegaly (enlarged liver)** — a sign of **right-sided** heart failure due to venous congestion in the liver.",
    memoryTip: "LEFT = LUNGS. Right = REST of the body. Left-sided failure = fluid in the LUNGS = crackles and shortness of breath. Right-sided failure = fluid in the REST of the body = swollen legs (oedema) and neck veins (JVD).",
    difficulty: 1
  },
  {
    id: "MS-Q92",
    text: "A client with a diagnosis of myocardial infarction (MI) is receiving intravenous (IV) nitroglycerin. Which assessment finding would indicate that the medication is effective?",
    options: ["Increased blood pressure", "Decreased heart rate", "Relief of chest pain", "Increased urine output"],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "Nitroglycerin Effectiveness in MI",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Nitroglycerin is a potent **vasodilator** (primarily venous, but also arterial at higher doses). In MI, its primary goal is to **reduce myocardial oxygen demand** by decreasing preload (venous return) and afterload. It also dilates coronary arteries, improving blood flow to ischaemic areas. The most direct clinical indicator that it is achieving these goals is the **relief of chest pain (angina)**.\n\n**Why each option is wrong:**\n\n- **A. Increased blood pressure** — nitroglycerin causes vasodilation, which typically **decreases** blood pressure. Hypotension is a common side effect.\n- **B. Decreased heart rate** — nitroglycerin may cause **reflex tachycardia** as the body compensates for the drop in blood pressure.\n- **D. Increased urine output** — not a direct indicator of nitroglycerin effectiveness in MI.",
    memoryTip: "NITRO = RELIEF. It opens the pipes (vessels) so the heart doesn't have to work so hard. If the PAIN goes away, the heart is getting enough oxygen. Watch for the \"Nitro Headache\" and LOW blood pressure.",
    difficulty: 1
  },
  {
    id: "MS-Q93",
    text: "A nurse is providing discharge instructions to a client who had a permanent pacemaker inserted. Which statement by the client indicates a need for further teaching?",
    options: [
      "\"I will avoid standing near microwave ovens.\"",
      "\"I will carry my pacemaker identification card at all times.\"",
      "\"I will check my pulse daily and report any significant changes.\"",
      "\"I will notify my dentist about the pacemaker before any procedures.\""
    ],
    correctAnswerIndex: 0,
    category: "Cardiovascular System",
    topic: "Pacemaker Discharge Teaching",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Modern pacemakers are well-shielded and **safe to use around household microwave ovens**. This is a common myth that needs correction during patient teaching. Patients do not need to avoid microwaves. However, they should avoid strong magnetic fields (like MRI machines, unless the pacemaker is MRI-compatible) and large industrial motors.\n\n**Why each option is wrong (these are CORRECT actions):**\n\n- **B.** Carrying the ID card is essential for emergencies and airport security.\n- **C.** Daily pulse checks ensure the pacemaker is maintaining the set minimum heart rate.\n- **D.** Dentists and other healthcare providers need to know about the pacemaker because certain equipment (like electrocautery) can interfere with it.",
    memoryTip: "PACEMAKERS and MICROWAVES are FRIENDS now. Modern shielding means the kitchen is safe. But MRI machines and big magnets are still FOES. Always carry the ID card!",
    difficulty: 2
  },
  {
    id: "MS-Q94",
    text: "A client is admitted with a diagnosis of deep vein thrombosis (DVT) in the right leg. Which nursing intervention is the priority?",
    options: [
      "Applying a heating pad to the right leg",
      "Massaging the right calf to promote circulation",
      "Elevating the right leg above the level of the heart",
      "Encouraging the client to ambulate frequently"
    ],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "DVT Nursing Intervention Priority",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The priority in DVT management is to **promote venous return and reduce oedema** while preventing the clot from dislodging. **Elevating the affected leg** above the heart level uses gravity to help blood flow back to the heart and reduces swelling and pain.\n\n**Why each option is wrong:**\n\n- **A. Heating pad** — while warm compresses can be used, a heating pad carries a risk of burns and excessive vasodilation. Elevation is a higher priority.\n- **B. Massaging** — **ABSOLUTELY CONTRAINDICATED**. Massaging a DVT can dislodge the clot, causing a life-threatening **pulmonary embolism (PE)**.\n- **D. Frequent ambulation** — initially, bed rest with leg elevation is often prescribed until anticoagulation is therapeutic to prevent clot dislodgement (though early ambulation is becoming more common in some protocols, elevation remains a standard priority intervention).",
    memoryTip: "DVT = DON'T VIGOROUSLY TOUCH. Never massage! Elevate the leg to let gravity help the blood flow back. Think: UP for venous return, DOWN for arterial flow.",
    difficulty: 1
  },
  {
    id: "MS-Q95",
    text: "A nurse is assessing a client for signs of digitalis toxicity. Which finding is the most common early sign of toxicity?",
    options: ["Visual disturbances (yellow-green halos)", "Bradycardia", "Anorexia, nausea, and vomiting", "Confusion"],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "Early Signs of Digitalis Toxicity",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The **earliest** signs of digoxin (Digitalis) toxicity are usually **gastrointestinal**: anorexia (loss of appetite), nausea, and vomiting. These often appear before cardiac or visual changes. Because digoxin has a narrow therapeutic index, any new GI symptoms in a patient taking it should be investigated immediately.\n\n**Why each option is wrong:**\n\n- **A. Visual disturbances** — (seeing yellow-green halos or blurred vision) are classic signs of digoxin toxicity but usually occur **later** than GI symptoms.\n- **B. Bradycardia** — is a common sign of toxicity (digoxin slows the heart rate) but may not be the very first sign noticed by the patient.\n- **D. Confusion** — can occur in the elderly but is less specific than GI symptoms.",
    memoryTip: "DIGOXIN toxicity starts in the GUT. Anorexia and Nausea are the early warning bells. Halos in the eyes and a slow heart come later. Think: GI before Eye/Heart.",
    difficulty: 2
  },
  {
    id: "MS-Q96",
    text: "A client with hypertension is prescribed propranolol (Inderal). Which condition in the client's history would lead the nurse to question this prescription?",
    options: ["Migraine headaches", "Bronchial asthma", "Angina pectoris", "Glaucoma"],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "Propranolol Contraindication",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Propranolol is a **non-selective beta-blocker**, meaning it blocks both Beta-1 receptors (in the heart) and **Beta-2 receptors (in the lungs)**. Blocking Beta-2 receptors causes **bronchoconstriction**. In a patient with **bronchial asthma** or COPD, this can trigger a severe, potentially fatal asthma attack. Selective beta-blockers (like atenolol or metoprolol) are preferred if a beta-blocker is absolutely necessary for an asthmatic.\n\n**Why each option is wrong:**\n\n- **A. Migraines** — propranolol is actually used for migraine prophylaxis.\n- **C. Angina** — propranolol is used to treat angina by reducing the heart's workload.\n- **D. Glaucoma** — beta-blockers (usually topical) are used to treat glaucoma by reducing intraocular pressure.",
    memoryTip: "PROPRANOLOL = NON-selective. It blocks the heart AND the lungs. If the lungs are already tight (Asthma), propranolol will SQUEEZE them shut. Avoid in Asthma/COPD!",
    difficulty: 2
  },
  {
    id: "MS-Q97",
    text: "A nurse is caring for a client who is 24 hours post-operative following an abdominal aortic aneurysm (AAA) repair. Which assessment finding is most important to report to the physician?",
    options: ["Urine output of 20 mL/hr", "Bowel sounds are absent", "Pain at the incision site", "Serosanguineous drainage on the dressing"],
    correctAnswerIndex: 0,
    category: "Cardiovascular System",
    topic: "Post-AAA Repair Complication",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Following AAA repair, **renal failure** is a major risk due to clamping of the aorta above the renal arteries during surgery or embolization of plaque. A urine output of **less than 30 mL/hr** (oliguria) is a critical indicator of poor renal perfusion and must be reported immediately to prevent permanent kidney damage.\n\n**Why each option is wrong:**\n\n- **B. Absent bowel sounds** — are expected for 24–48 hours after major abdominal surgery due to paralytic ileus.\n- **C. Incisional pain** — is expected 24 hours post-op and should be managed with analgesics.\n- **D. Serosanguineous drainage** — is a normal finding on a surgical dressing in the first few days.",
    memoryTip: "AAA repair = watch the KIDNEYS. If the pee is LOW (under 30mL/hr), the kidneys are in trouble. The aorta was clamped near the renal arteries — check the flow!",
    difficulty: 2
  },
  {
    id: "MS-Q98",
    text: "A client is diagnosed with Buerger's disease (thromboangiitis obliterans). Which instruction is the most important for the nurse to include in the discharge teaching?",
    options: [
      "\"Wear warm clothing in cold weather.\"",
      "\"Stop smoking completely.\"",
      "\"Check your feet daily for any injuries.\"",
      "\"Avoid wearing tight-fitting shoes.\""
    ],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "Buerger's Disease Teaching",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Buerger's disease is an inflammatory disease of small and medium-sized arteries and veins, strongly associated with **tobacco use**. Smoking causes vasoconstriction and worsens the inflammation. The **only way to stop the progression** of the disease and prevent amputation is the **absolute cessation of all tobacco products** (including smokeless tobacco and nicotine patches).\n\n**Why each option is wrong:**\n\n- **A, C, and D** are all important foot care and protection measures for peripheral vascular disease, but they will not stop the disease progression. Smoking cessation is the absolute priority.",
    memoryTip: "BUERGER'S = NO BURNING. No cigarettes, no tobacco, no nicotine. If they keep smoking, they will lose their fingers and toes. It's that simple.",
    difficulty: 2
  },
  {
    id: "MS-Q99",
    text: "A nurse is assessing a client with peripheral arterial disease (PAD). Which clinical manifestation is the hallmark sign of this condition?",
    options: ["Pitting oedema", "Intermittent claudication", "Brownish discolouration of the skin", "Visible varicose veins"],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "PAD Hallmark Sign",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Intermittent claudication** is the hallmark sign of PAD. It is ischaemic muscle pain that occurs during exercise (like walking) and is relieved by rest. It happens because the narrowed arteries cannot supply enough oxygenated blood to the working muscles.\n\n**Why each option is wrong:**\n\n- **A. Pitting oedema** — is a sign of venous insufficiency or heart failure, not arterial disease.\n- **C. Brownish discolouration (haemosiderin staining)** — is a classic sign of **chronic venous insufficiency**.\n- **D. Varicose veins** — are a venous problem, not an arterial one.",
    memoryTip: "ARTERIAL = AWAY. PAD means blood can't get AWAY from the heart to the legs. Muscles scream (pain) when they work but can't get oxygen. This is CLAUDICATION.",
    difficulty: 1
  },
  {
    id: "MS-Q100",
    text: "A client is receiving a blood transfusion and begins to complain of chills, back pain, and shortness of breath. What is the nurse's first action?",
    options: [
      "Notify the physician",
      "Check the client's vital signs",
      "Stop the transfusion immediately",
      "Slow the rate of the transfusion"
    ],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "Blood Transfusion Reaction Action",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "These symptoms (chills, back pain, dyspnea) suggest a potentially fatal **haemolytic transfusion reaction**. The **absolute first priority** is to **stop the transfusion immediately** to prevent any further incompatible blood from entering the client's system. After stopping the blood, the nurse should maintain the IV line with normal saline (using new tubing), assess the client, and notify the physician and blood bank.\n\n**Why each option is wrong:**\n\n- **A and B** are necessary steps, but they must happen **after** the blood is stopped. Every second counts in a reaction.\n- **D. Slowing the rate** is dangerous and inappropriate. Any suspected reaction requires immediate cessation.",
    memoryTip: "REACTION = STOP. Don't wait, don't check, don't slow down. STOP the blood, then deal with everything else. Save the life first!",
    difficulty: 1
  },
  {
    id: "MS-Q101",
    text: "A nurse is caring for a client with a diagnosis of acute pancreatitis. Which laboratory result would the nurse expect to be significantly elevated?",
    options: ["Serum creatinine", "Serum amylase", "Serum potassium", "Serum bilirubin"],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Acute Pancreatitis Lab Result",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "In acute pancreatitis, the pancreatic enzymes (amylase and lipase) leak out of the damaged pancreatic cells and into the bloodstream. **Serum amylase** usually rises within 2–12 hours of the onset of symptoms and remains elevated for 2–3 days. Serum lipase is even more specific and stays elevated longer.\n\n**Why each option is wrong:**\n\n- **A. Creatinine** — measures kidney function.\n- **C. Potassium** — may be affected by vomiting or fluid shifts, but is not a diagnostic marker for pancreatitis.\n- **D. Bilirubin** — may be elevated if the pancreatitis is caused by a gallstone obstructing the common bile duct, but amylase is the more direct marker for the pancreas itself.",
    memoryTip: "PANCREAS = AMYLASE & LIPASE. When the pancreas is 'angry' (inflamed), it 'spills' its enzymes into the blood. Amylase goes up fast; Lipase stays up longer.",
    difficulty: 1
  },
  {
    id: "MS-Q102",
    text: "A client with cirrhosis of the liver is admitted with hepatic encephalopathy. Which medication would the nurse expect to administer to reduce serum ammonia levels?",
    options: ["Spironolactone", "Lactulose", "Propranolol", "Vitamin K"],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Hepatic Encephalopathy Treatment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Lactulose** is the primary treatment for hepatic encephalopathy. It works by drawing ammonia from the blood into the colon and then acting as a laxative to expel it from the body in the stool. It also acidifies the colon, which converts ammonia (NH3) into ammonium (NH4+), which cannot be reabsorbed into the blood.\n\n**Why each option is wrong:**\n\n- **A. Spironolactone** — is a diuretic used to treat ascites in cirrhosis.\n- **C. Propranolol** — is used to reduce portal hypertension and prevent bleeding from oesophageal varices.\n- **D. Vitamin K** — is used to correct clotting factor deficiencies (prothrombin time) in liver disease.",
    memoryTip: "LACTULOSE = LOOSE STOOLS = LOWER AMMONIA. If the patient has 2–3 soft stools a day, the medicine is working to clear the 'brain fog' caused by ammonia.",
    difficulty: 2
  },
  {
    id: "MS-Q103",
    text: "A nurse is providing discharge instructions to a client following a cholecystectomy. Which dietary instruction is most important for the first few weeks after surgery?",
    options: [
      "Eat a high-protein diet to promote healing.",
      "Avoid high-fat foods.",
      "Increase intake of raw fruits and vegetables.",
      "Limit fluid intake to 1 litre per day."
    ],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Post-Cholecystectomy Diet",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The gallbladder stores and concentrates bile, which is needed to digest fats. After a cholecystectomy (removal of the gallbladder), the liver still produces bile, but it flows continuously into the intestine in a less concentrated form. For the first few weeks, the body needs time to adjust. **Avoiding high-fat foods** prevents symptoms like bloating, gas, and diarrhoea (steatorrhoea).\n\n**Why each option is wrong:**\n\n- **A.** Protein is good for healing, but fat restriction is the specific priority for this surgery.\n- **C.** High-fibre foods should be introduced gradually to avoid gas and discomfort.\n- **D.** Fluid intake should be maintained, not limited.",
    memoryTip: "NO GALLBLADDER = NO FAT STORAGE. Bile is now 'on tap' but weak. Don't overwhelm the system with a greasy burger right after surgery!",
    difficulty: 1
  },
  {
    id: "MS-Q104",
    text: "A client is admitted with a suspected peptic ulcer. Which clinical manifestation is most characteristic of a duodenal ulcer?",
    options: [
      "Pain occurring 30 to 60 minutes after a meal",
      "Pain relieved by eating food",
      "Weight loss and anorexia",
      "Pain worsened by the ingestion of food"
    ],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Duodenal Ulcer Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Duodenal ulcers** are characteristically **relieved by food**. The pain typically occurs 2–5 hours after a meal when the stomach is empty (often waking the patient at night). Eating food buffers the stomach acid, providing relief. This often leads to weight gain.\n\n**Why each option is wrong:**\n\n- **A and D** describe **gastric ulcers**, where pain occurs shortly after eating because food stimulates acid production which irritates the ulcer.\n- **C. Weight loss** — is more common with gastric ulcers because patients avoid eating to prevent pain.",
    memoryTip: "DUODENAL = DINNER. Pain is relieved by dinner (food). GASTRIC = GRIEF. Eating causes grief (pain). Duodenal patients are often well-nourished; Gastric patients often lose weight.",
    difficulty: 2
  },
  {
    id: "MS-Q105",
    text: "A nurse is caring for a client with Crohn's disease. Which assessment finding is most common in this condition?",
    options: [
      "Bloody diarrhoea with mucus",
      "Right lower quadrant abdominal pain",
      "Continuous inflammation of the colon",
      "Weight gain and increased appetite"
    ],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Crohn's Disease Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Crohn's disease most commonly affects the **terminal ileum**, which is located in the **right lower quadrant (RLQ)** of the abdomen. Therefore, RLQ pain and tenderness are very common. Crohn's is characterized by 'skip lesions' (patchy inflammation) and can affect any part of the GI tract from mouth to anus.\n\n**Why each option is wrong:**\n\n- **A. Bloody diarrhoea** — is more characteristic of **ulcerative colitis**.\n- **C. Continuous inflammation** — describes **ulcerative colitis**, which starts in the rectum and moves continuously up the colon.\n- **D.** Weight loss and malnutrition are common in Crohn's due to malabsorption.",
    memoryTip: "CROHN'S = CRUMMY skip lesions. It can be anywhere, but it loves the RLQ (ileum). UC = ULCERS in the COLON. It's continuous and bloody.",
    difficulty: 2
  },
  {
    id: "MS-Q106",
    text: "A client with a history of alcohol abuse is admitted with haematemesis. The nurse suspects bleeding oesophageal varices. Which procedure is the gold standard for both diagnosis and treatment of this condition?",
    options: ["Barium swallow", "Abdominal ultrasound", "Upper GI endoscopy (EGD)", "CT scan of the abdomen"],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "Oesophageal Varices Diagnosis/Treatment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Upper GI endoscopy (Esophagogastroduodenoscopy - EGD)** is the gold standard. It allows the physician to directly visualize the varices (diagnosis) and perform life-saving interventions like band ligation or sclerotherapy (treatment) at the same time.\n\n**Why each option is wrong:**\n\n- **A. Barium swallow** — can show varices but cannot treat them and is not used in an acute bleeding emergency.\n- **B and D** — can show liver disease or portal hypertension but cannot directly visualize or treat bleeding varices.",
    memoryTip: "BLEEDING = LOOK INSIDE. Endoscopy lets you see the 'varicose veins' in the throat and 'tie them off' (banding) to stop the bleeding.",
    difficulty: 1
  },
  {
    id: "MS-Q107",
    text: "A nurse is providing care for a client with a new ileostomy. Which assessment finding would the nurse expect regarding the consistency of the drainage?",
    options: ["Formed stool", "Semi-formed stool", "Liquid to semi-liquid drainage", "Hard, dry stool"],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "Ileostomy Drainage Consistency",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "An **ileostomy** is an opening into the small intestine (ileum). Since the stool bypasses the large intestine (colon), where most water is reabsorbed, the drainage is **liquid to semi-liquid** and continuous. It is also very irritating to the skin because it contains digestive enzymes.\n\n**Why each option is wrong:**\n\n- **A and B** describe drainage from a **colostomy** (especially descending or sigmoid), where the colon has had a chance to absorb water.\n- **D** is never expected from an ostomy and indicates severe constipation or dehydration.",
    memoryTip: "ILEOSTOMY = I for IRRIGATING (liquid). COLOSTOMY = C for COLON (more formed). The higher up the ostomy, the more liquid the stool.",
    difficulty: 1
  },
  {
    id: "MS-Q108",
    text: "A client is admitted with a diagnosis of small bowel obstruction. Which clinical manifestation would the nurse expect to find?",
    options: [
      "Abdominal distension and projectile vomiting",
      "Low-grade fever and bloody diarrhoea",
      "Right upper quadrant pain radiating to the shoulder",
      "Increased bowel sounds in all quadrants"
    ],
    correctAnswerIndex: 0,
    category: "Gastrointestinal System",
    topic: "Small Bowel Obstruction Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Hallmark signs of **small bowel obstruction** include **abdominal distension** (due to trapped gas and fluid) and **vomiting** (often projectile and may become faecal-smelling). Pain is usually colicky and intermittent.\n\n**Why each option is wrong:**\n\n- **B.** Fever might occur if there is strangulation, but bloody diarrhoea is not a typical sign.\n- **C.** Describes **cholecystitis** (gallbladder inflammation).\n- **D.** Bowel sounds are usually **hyperactive above** the obstruction (trying to push past it) and **absent below** it.",
    memoryTip: "OBSTRUCTION = BACKUP. Everything goes UP (vomiting) and the belly goes OUT (distension). Think of a clogged pipe — the pressure builds up behind the clog.",
    difficulty: 2
  },
  {
    id: "MS-Q109",
    text: "A nurse is assessing a client with a suspected appendicitis. Which physical assessment finding is most indicative of this condition?",
    options: ["Murphy's sign", "Rebound tenderness at McBurney's point", "Cullen's sign", "Turner's sign"],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Appendicitis Assessment Finding",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Rebound tenderness at McBurney's point** (located halfway between the umbilicus and the right iliac crest) is a classic sign of appendicitis. Rebound tenderness means pain is felt more when the pressure is *released* than when it is applied, indicating peritoneal irritation.\n\n**Why each option is wrong:**\n\n- **A. Murphy's sign** — is indicative of **cholecystitis** (pain on deep inspiration while the gallbladder is palpated).\n- **C and D. Cullen's and Turner's signs** — are indicative of **retroperitoneal bleeding**, often seen in severe acute pancreatitis.",
    memoryTip: "APPENDIX = McBURNEY. If it hurts in the RLQ when you let go, the appendix is likely the culprit. Murphy is for the Gallbladder.",
    difficulty: 1
  },
  {
    id: "MS-Q110",
    text: "A client with gastroesophageal reflux disease (GERD) is prescribed omeprazole (Prilosec). The nurse explains that this medication works by:",
    options: [
      "Neutralizing gastric acid",
      "Coating the oesophageal lining",
      "Inhibiting the proton pump in the stomach",
      "Increasing lower oesophageal sphincter (LES) tone"
    ],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "Omeprazole Mechanism of Action",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Omeprazole is a **Proton Pump Inhibitor (PPI)**. It works by irreversibly binding to the H+/K+ ATPase enzyme system (the proton pump) in the gastric parietal cells, blocking the final step of acid production. This significantly reduces the amount of acid in the stomach.\n\n**Why each option is wrong:**\n\n- **A.** Describes **antacids** (like Tums or Mylanta).\n- **B.** Describes **mucosal protectants** (like sucralfate).\n- **D.** Describes **prokinetic agents** (like metoclopramide).",
    memoryTip: "PPI = PROTON PUMP INHIBITOR. It 'turns off the pumps' that make the acid. It's much stronger than a simple antacid.",
    difficulty: 1
  },
  {
    id: "MS-Q111",
    text: "A nurse is caring for a client with acute kidney injury (AKI). Which laboratory value is the most sensitive indicator of renal function?",
    options: ["Blood urea nitrogen (BUN)", "Serum creatinine", "Serum potassium", "Urine specific gravity"],
    correctAnswerIndex: 1,
    category: "Genitourinary System",
    topic: "Sensitive Indicator of Renal Function",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Serum creatinine** is the most sensitive and specific indicator of renal function. It is a waste product of muscle metabolism that is excreted solely by the kidneys. If the kidneys are not filtering properly, creatinine levels rise. BUN is also used but can be affected by diet, hydration, and protein breakdown.\n\n**Why each option is wrong:**\n\n- **A. BUN** — is less specific because it can be elevated by dehydration, high-protein diet, or GI bleeding.\n- **C. Potassium** — rises in renal failure but is a consequence of poor function, not the primary measure of it.\n- **D. Specific gravity** — measures urine concentration, which can be affected by many factors.",
    memoryTip: "CREATININE = KIDNEY. If the creatinine is up, the kidneys are down. It's the 'gold standard' lab for checking how well the kidneys are filtering.",
    difficulty: 1
  },
  {
    id: "MS-Q112",
    text: "A client is receiving haemodialysis. Which assessment finding is most important for the nurse to check before the procedure?",
    options: ["Presence of a thrill and bruit at the AV fistula site", "Last bowel movement", "Temperature and respiratory rate", "Weight and blood pressure"],
    correctAnswerIndex: 3,
    category: "Genitourinary System",
    topic: "Pre-Haemodialysis Assessment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Checking **weight and blood pressure** is the priority before haemodialysis. The 'dry weight' (weight after the last session) is compared to the current weight to determine how much fluid needs to be removed. Blood pressure is critical because dialysis can cause significant hypotension as fluid is pulled from the vascular space.\n\n**Why each option is wrong:**\n\n- **A.** Checking the fistula is essential, but weight/BP are the primary drivers for the dialysis prescription and safety monitoring.\n- **B and C** are part of a general assessment but are not the specific priorities for dialysis management.",
    memoryTip: "DIALYSIS = FLUID BALANCE. Weight tells you how much fluid is there; BP tells you if the patient can handle taking it off. Always check 'Pre-Weights'.",
    difficulty: 2
  },
  {
    id: "MS-Q113",
    text: "A nurse is providing discharge instructions to a client with a history of calcium oxalate renal calculi. Which instruction should be included?",
    options: [
      "Limit fluid intake to 1 litre per day.",
      "Increase intake of spinach and rhubarb.",
      "Drink at least 2 to 3 litres of water daily.",
      "Avoid all dairy products."
    ],
    correctAnswerIndex: 2,
    category: "Genitourinary System",
    topic: "Renal Calculi Prevention",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The most important intervention to prevent all types of kidney stones is **high fluid intake (2–3 litres/day)**. This keeps the urine dilute and prevents the crystals (like calcium oxalate) from precipitating and forming stones.\n\n**Why each option is wrong:**\n\n- **A.** Limiting fluid is dangerous and promotes stone formation.\n- **B.** Spinach and rhubarb are **high in oxalate** and should be *limited* in patients with calcium oxalate stones.\n- **D.** Restricting calcium is usually not recommended unless the patient has a specific metabolic disorder, as low calcium can actually increase oxalate absorption.",
    memoryTip: "STONES = WATER. The best way to stop stones from growing is to wash them away with plenty of water. Dilute urine doesn't make stones.",
    difficulty: 1
  },
  {
    id: "MS-Q114",
    text: "A client is admitted with a diagnosis of nephrotic syndrome. Which clinical manifestation is the hallmark of this condition?",
    options: ["Gross haematuria", "Severe proteinuria", "Hypotension", "Weight loss"],
    correctAnswerIndex: 1,
    category: "Genitourinary System",
    topic: "Nephrotic Syndrome Hallmark",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Severe proteinuria** (excreting more than 3.5g of protein in the urine per day) is the hallmark of nephrotic syndrome. This leads to hypoalbuminaemia, which causes severe generalized oedema (anasarca) and hyperlipidaemia.\n\n**Why each option is wrong:**\n\n- **A. Haematuria** — is more characteristic of **nephritic syndrome** (glomerulonephritis).\n- **C. Hypotension** — patients are usually normotensive or hypertensive.\n- **D. Weight loss** — patients actually gain weight due to massive fluid retention (oedema).",
    memoryTip: "NEPHROTIC = PROTEIN. The 'O' in Nephrotic reminds you of the 'O' in Protein (and the massive Oedema). The kidneys are 'leaking' protein like a sieve.",
    difficulty: 2
  },
  {
    id: "MS-Q115",
    text: "A nurse is caring for a client with an indwelling urinary catheter. Which action is most important to prevent a catheter-associated urinary tract infection (CAUTI)?",
    options: [
      "Cleaning the urinary meatus with antiseptic solution every 4 hours",
      "Maintaining a closed urinary drainage system",
      "Irrigating the catheter daily with sterile saline",
      "Applying antibiotic ointment to the meatus"
    ],
    correctAnswerIndex: 1,
    category: "Genitourinary System",
    topic: "CAUTI Prevention",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Maintaining a **closed urinary drainage system** is the single most important intervention to prevent CAUTI. Every time the system is opened (e.g., to irrigate or change the bag), bacteria can enter the sterile environment of the bladder.\n\n**Why each option is wrong:**\n\n- **A.** Routine cleaning with soap and water during daily hygiene is sufficient; aggressive antiseptic cleaning is not proven to prevent CAUTI.\n- **C. Irrigation** — should be avoided unless there is an obstruction, as it opens the closed system.\n- **D.** Antibiotic ointment is not recommended and can promote resistant bacteria.",
    memoryTip: "KEEP IT CLOSED. The best way to keep bugs out of the bladder is to never open the 'sterile loop' of the catheter and bag.",
    difficulty: 1
  },
  {
    id: "MS-Q116",
    text: "A client is diagnosed with benign prostatic hyperplasia (BPH). Which clinical manifestation is most common?",
    options: ["Painful urination (dysuria)", "Difficulty initiating the urinary stream", "Gross haematuria", "Flank pain"],
    correctAnswerIndex: 1,
    category: "Genitourinary System",
    topic: "BPH Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Difficulty initiating the urinary stream (hesitancy)** is a classic 'obstructive' symptom of BPH. As the prostate enlarges, it compresses the urethra, making it hard for the bladder to start the flow. Other symptoms include a weak stream, dribbling, and a feeling of incomplete emptying.\n\n**Why each option is wrong:**\n\n- **A. Dysuria** — is more common with infection (UTI).\n- **C. Haematuria** — can occur but is not the most common initial symptom.\n- **D. Flank pain** — is associated with kidney problems (like stones or pyelonephritis).",
    memoryTip: "BPH = BLOCKAGE. The enlarged prostate acts like a 'clamp' on the garden hose (urethra). It's hard to get the water started!",
    difficulty: 1
  },
  {
    id: "MS-Q117",
    text: "A nurse is assessing a client following a transurethral resection of the prostate (TURP). The client has a continuous bladder irrigation (CBI) system in place. The nurse notes that the drainage is bright red with numerous clots. What is the nurse's priority action?",
    options: [
      "Notify the physician immediately",
      "Increase the rate of the irrigation",
      "Check the client's blood pressure",
      "Irrigate the catheter manually with a syringe"
    ],
    correctAnswerIndex: 1,
    category: "Genitourinary System",
    topic: "Post-TURP CBI Management",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "If the drainage becomes bright red or contains clots, the nurse should **increase the rate of the irrigation**. The goal of CBI is to keep the urine light pink and free of clots. Increasing the flow 'washes out' the blood and prevents clots from forming and blocking the catheter.\n\n**Why each option is wrong:**\n\n- **A.** Notification is necessary if the bleeding doesn't respond to increasing the irrigation or if vital signs change, but increasing the rate is the first nursing action.\n- **C.** Checking BP is important but won't stop the clot formation.\n- **D.** Manual irrigation is done only if the catheter becomes completely blocked.",
    memoryTip: "CBI = KEEP IT PINK. If it turns RED, turn up the FLOW. You want to flush the blood out before it has a chance to clot and plug the tube.",
    difficulty: 2
  },
  {
    id: "MS-Q118",
    text: "A client with chronic kidney disease (CKD) is prescribed epoetin alfa (Epogen). The nurse explains that this medication is given to:",
    options: [
      "Lower serum potassium levels",
      "Treat anaemia by stimulating red blood cell production",
      "Prevent calcium loss from the bones",
      "Reduce blood pressure"
    ],
    correctAnswerIndex: 1,
    category: "Genitourinary System",
    topic: "Epoetin Alfa in CKD",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The kidneys normally produce a hormone called **erythropoietin**, which tells the bone marrow to make red blood cells. In CKD, the kidneys cannot produce enough erythropoietin, leading to **anaemia**. Epoetin alfa is a synthetic version of this hormone that stimulates RBC production.\n\n**Why each option is wrong:**\n\n- **A.** Potassium is managed with diet, binders, or dialysis.\n- **C.** Bone disease in CKD is managed with phosphate binders and Vitamin D.\n- **D.** Blood pressure is managed with antihypertensives.",
    memoryTip: "EPO = ERYTHROCYTES (RBCs). The kidneys are the 'factory' for the signal to make blood. If the factory is broken, we give the signal (EPO) as a shot.",
    difficulty: 1
  },
  {
    id: "MS-Q119",
    text: "A nurse is caring for a client with a suspected urinary tract infection (UTI). Which diagnostic test is the most definitive for identifying the causative organism?",
    options: ["Urinalysis (UA)", "Urine culture and sensitivity (C&S)", "KUB (Kidney, Ureter, Bladder) X-ray", "Cystoscopy"],
    correctAnswerIndex: 1,
    category: "Genitourinary System",
    topic: "UTI Diagnostic Test",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A **urine culture and sensitivity (C&S)** is the definitive test. The culture identifies exactly which bacteria are growing, and the sensitivity tells the doctor which antibiotics will kill that specific strain.\n\n**Why each option is wrong:**\n\n- **A. Urinalysis** — can show signs of infection (like nitrites or WBCs) but cannot identify the specific organism.\n- **C. KUB** — is an X-ray to look for stones or structural problems.\n- **D. Cystoscopy** — is a procedure to look inside the bladder with a scope.",
    memoryTip: "CULTURE = GROW. We grow the 'bugs' in a dish to see who they are. SENSITIVITY = KILL. We see which 'poison' (antibiotic) they are sensitive to.",
    difficulty: 1
  },
  {
    id: "MS-Q120",
    text: "A client is admitted with acute glomerulonephritis. Which assessment finding is most characteristic of this condition?",
    options: ["Grossly bloody urine", "Periorbital oedema", "Hypotension", "Polyuria"],
    correctAnswerIndex: 1,
    category: "Genitourinary System",
    topic: "Glomerulonephritis Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Periorbital oedema** (swelling around the eyes) is a classic early sign of glomerulonephritis, especially in the morning. It occurs because the inflamed glomeruli allow protein to leak out, and the body retains salt and water. Other signs include 'cola-coloured' (smoky) urine and hypertension.\n\n**Why each option is wrong:**\n\n- **A. Grossly bloody urine** — urine is usually 'smoky' or 'cola-coloured' due to old blood, rather than bright red.\n- **C. Hypotension** — patients are typically **hypertensive** due to fluid retention.\n- **D. Polyuria** — patients usually have **oliguria** (decreased urine output).",
    memoryTip: "GLOMERULONEPHRITIS = PUFFY EYES & COLA PEE. It often follows a 'Strep' throat infection. The kidneys are 'clogged' and 'leaking' old blood.",
    difficulty: 2
  },
  {
    id: "MS-Q121",
    text: "A nurse is assessing a client with a history of seizures. Which clinical manifestation is characteristic of a tonic-clonic seizure?",
    options: ["Brief loss of consciousness with no motor activity", "Sudden loss of muscle tone causing the client to fall", "Stiffening of the muscles followed by rhythmic jerking", "Repetitive, purposeless movements like lip-smacking"],
    correctAnswerIndex: 2,
    category: "Nervous System",
    topic: "Tonic-Clonic Seizure Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A **tonic-clonic seizure** (formerly known as grand mal) has two distinct phases: the **tonic phase** (sudden stiffening of the muscles and loss of consciousness) and the **clonic phase** (rhythmic jerking of the extremities). The client may also experience tongue biting, incontinence, and a prolonged post-ictal state (confusion and exhaustion after the seizure).\n\n**Why each option is wrong:**\n\n- **A.** Describes an **absence seizure** (petit mal).\n- **B.** Describes an **atonic seizure** (drop attack).\n- **D.** Describes **automatisms**, which are common in focal impaired awareness seizures (complex partial).",
    memoryTip: "TONIC = TENSE (stiff). CLONIC = CONVULSE (jerking). A tonic-clonic seizure is the 'big one' that involves the whole body and both phases.",
    difficulty: 1
  },
  {
    id: "MS-Q122",
    text: "A client is admitted with a suspected stroke. Which diagnostic test is the priority to perform first to differentiate between an ischaemic and a haemorrhagic stroke?",
    options: ["Magnetic resonance imaging (MRI)", "Computed tomography (CT) scan of the head", "Lumbar puncture", "Carotid duplex ultrasound"],
    correctAnswerIndex: 1,
    category: "Nervous System",
    topic: "Stroke Diagnosis Priority",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A **non-contrast CT scan of the head** is the priority. It is fast and highly effective at identifying **haemorrhage (bleeding)**. This is critical because the treatment for an ischaemic stroke (thrombolytics like tPA) would be fatal if given to a patient with a haemorrhagic stroke.\n\n**Why each option is wrong:**\n\n- **A. MRI** — is more sensitive for early ischaemic changes but takes much longer to perform and is not the first-line test in an emergency.\n- **C. Lumbar puncture** — might be used if a subarachnoid haemorrhage is suspected but the CT is negative, but it is not the first test.\n- **D. Carotid ultrasound** — is used later to find the source of an ischaemic stroke.",
    memoryTip: "TIME IS BRAIN. CT is the FASTEST way to see if there is blood. No blood on CT + stroke symptoms = Ischaemic. Blood on CT = Haemorrhagic.",
    difficulty: 1
  },
  {
    id: "MS-Q123",
    text: "A nurse is caring for a client with Parkinson's disease. Which clinical manifestation is part of the classic triad of this condition?",
    options: ["Muscle spasticity", "Intention tremor", "Bradykinesia", "Hyperreflexia"],
    correctAnswerIndex: 2,
    category: "Nervous System",
    topic: "Parkinson's Disease Classic Triad",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The classic triad of Parkinson's disease is **Tremor (at rest), Rigidity (cogwheel), and Bradykinesia (slowness of movement)**. Postural instability is often considered the fourth major sign. Bradykinesia manifests as a shuffling gait, mask-like facies, and difficulty initiating movement.\n\n**Why each option is wrong:**\n\n- **A. Spasticity** — is seen in upper motor neuron lesions (like MS or stroke), not Parkinson's (which has rigidity).\n- **B. Intention tremor** — (tremor during movement) is characteristic of **cerebellar** disorders. Parkinson's has a **resting** tremor ('pill-rolling').\n- **D. Hyperreflexia** — is not a feature of Parkinson's.",
    memoryTip: "PARKINSON'S = T.R.A.P. Tremor (at rest), Rigidity, Akinesia/Bradykinesia, Postural instability. Everything is SLOW and STIFF.",
    difficulty: 1
  },
  {
    id: "MS-Q124",
    text: "A client is diagnosed with myasthenia gravis. Which clinical manifestation is most characteristic of this condition?",
    options: [
      "Ascending paralysis starting in the legs",
      "Muscle weakness that improves with rest",
      "Constant muscle aching and stiffness",
      "Loss of sensation in the extremities"
    ],
    correctAnswerIndex: 1,
    category: "Nervous System",
    topic: "Myasthenia Gravis Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Myasthenia gravis is an autoimmune disease where antibodies attack acetylcholine receptors at the neuromuscular junction. The hallmark is **fluctuating muscle weakness** that **worsens with activity and improves with rest**. It often first affects the ocular muscles (causing ptosis or diplopia).\n\n**Why each option is wrong:**\n\n- **A.** Describes **Guillain-Barré syndrome**.\n- **C.** Is more characteristic of fibromyalgia or inflammatory myopathies.\n- **D.** Myasthenia gravis is a **purely motor** disorder; there is no loss of sensation.",
    memoryTip: "MYASTHENIA = MY (muscle) ASTHENIA (weakness). GRAVIS = GRAVE (serious). The muscles get 'tired' as the day goes on but 'recharge' with a nap.",
    difficulty: 2
  },
  {
    id: "MS-Q125",
    text: "A nurse is assessing a client with a suspected head injury. Which assessment finding is the most sensitive indicator of increased intracranial pressure (ICP)?",
    options: ["Cushing's triad", "Change in level of consciousness (LOC)", "Dilated and fixed pupils", "Decerebrate posturing"],
    correctAnswerIndex: 1,
    category: "Nervous System",
    topic: "Sensitive Indicator of Increased ICP",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A **change in the level of consciousness (LOC)** is the **earliest and most sensitive** indicator of increased ICP. This can manifest as restlessness, irritability, confusion, or increased lethargy. The brain is extremely sensitive to even small changes in pressure and oxygenation.\n\n**Why each option is wrong:**\n\n- **A. Cushing's triad** — (widening pulse pressure, bradycardia, and irregular respirations) is a **late** sign indicating impending brain herniation.\n- **C and D** are also **late** and very serious signs of brainstem compression or damage.",
    memoryTip: "LOC is the LEADER. If the patient becomes suddenly restless or confused after a head injury, don't wait for the pupils to change — check the ICP immediately!",
    difficulty: 1
  },
  {
    id: "MS-Q126",
    text: "A client with a spinal cord injury at the T4 level complains of a sudden, severe headache and is found to be diaphoretic with a blood pressure of 190/100 mmHg. What is the nurse's priority action?",
    options: [
      "Administer an antihypertensive medication",
      "Check the client's bladder for distension",
      "Lower the head of the bed",
      "Notify the physician immediately"
    ],
    correctAnswerIndex: 1,
    category: "Nervous System",
    topic: "Autonomic Dysreflexia Priority Action",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "This client is experiencing **autonomic dysreflexia**, a life-threatening emergency in spinal cord injuries at or above T6. It is triggered by a noxious stimulus below the level of injury — most commonly a **distended bladder** or impacted bowel. The priority is to **identify and remove the trigger**. Checking for bladder distension (kinked catheter, full bag) is the first step.\n\n**Why each option is wrong:**\n\n- **A.** Antihypertensives may be needed if the BP doesn't drop after removing the trigger, but the trigger must be addressed first.\n- **C.** The head of the bed should be **elevated** (90 degrees) to help lower the blood pressure through orthostatic effect.\n- **D.** The physician must be notified, but life-saving nursing actions (elevate HOB, check bladder) come first.",
    memoryTip: "DYSREFLEXIA = DISTENSION. If the BP is sky-high and they have a T4 injury, check the 'Pee and the Poo'. Usually, it's a full bladder causing the 'storm'.",
    difficulty: 2
  },
  {
    id: "MS-Q127",
    text: "A nurse is caring for a client with bacterial meningitis. Which nursing intervention is essential to include in the plan of care?",
    options: [
      "Maintaining the client in a well-lit room",
      "Implementing droplet precautions",
      "Encouraging frequent range-of-motion exercises",
      "Placing the client in a prone position"
    ],
    correctAnswerIndex: 1,
    category: "Nervous System",
    topic: "Meningitis Nursing Intervention",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Droplet precautions** are essential for bacterial meningitis (especially *Neisseria meningitidis*) to prevent the spread of the infection to others. These precautions should be maintained for at least 24 hours after the start of effective antibiotic therapy.\n\n**Why each option is wrong:**\n\n- **A.** Patients with meningitis often have **photophobia** (sensitivity to light), so a quiet, **darkened** room is preferred.\n- **C.** ROM exercises can increase ICP and pain (due to meningeal irritation) and should be limited during the acute phase.\n- **D.** The head of the bed should be elevated (30 degrees) to promote venous drainage and reduce ICP.",
    memoryTip: "MENINGITIS = MASK. It's spread by droplets, so wear a mask and keep the room dark and quiet for the patient's comfort.",
    difficulty: 1
  },
  {
    id: "MS-Q128",
    text: "A client is diagnosed with Multiple Sclerosis (MS). The nurse understands that the underlying pathophysiology of this disease involves:",
    options: [
      "Depletion of dopamine in the substantia nigra",
      "Destruction of the myelin sheath in the central nervous system",
      "Autoimmune attack on the acetylcholine receptors",
      "Degeneration of lower motor neurons in the spinal cord"
    ],
    correctAnswerIndex: 1,
    category: "Nervous System",
    topic: "Multiple Sclerosis Pathophysiology",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Multiple Sclerosis (MS)** is a chronic, autoimmune disease characterized by the **demyelination** of nerve fibres in the **central nervous system (brain and spinal cord)**. The loss of the myelin sheath slows or blocks nerve impulses, leading to a wide variety of neurological symptoms.\n\n**Why each option is wrong:**\n\n- **A.** Describes **Parkinson's disease**.\n- **C.** Describes **Myasthenia gravis**.\n- **D.** Describes **Amyotrophic Lateral Sclerosis (ALS)**.",
    memoryTip: "MS = MYELIN SHEATH. The 'insulation' on the wires (nerves) is being eaten away, causing 'short circuits' in the brain and spine.",
    difficulty: 1
  },
  {
    id: "MS-Q129",
    text: "A nurse is assessing a client with a suspected lumbar disc herniation. Which clinical manifestation is most common?",
    options: ["Upper extremity weakness", "Low back pain radiating down the leg (sciatica)", "Loss of bowel and bladder control", "Severe headache"],
    correctAnswerIndex: 1,
    category: "Nervous System",
    topic: "Lumbar Disc Herniation Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Low back pain radiating down the leg (sciatica)** is the most common symptom of a lumbar disc herniation. The herniated disc material compresses a spinal nerve root (usually L4-L5 or L5-S1), causing pain, numbness, or tingling along the path of the sciatic nerve.\n\n**Why each option is wrong:**\n\n- **A.** Would be seen in a **cervical** disc herniation.\n- **C. Loss of bowel/bladder control** — is a sign of **cauda equina syndrome**, a surgical emergency, but is not the 'most common' finding.\n- **D.** Is not associated with disc herniation.",
    memoryTip: "LUMBAR = LEG. If the disc in the lower back pops out, it hits the nerve that goes to the leg. This is the classic 'Sciatica' pain.",
    difficulty: 1
  },
  {
    id: "MS-Q130",
    text: "A client is scheduled for a lumbar puncture. In which position should the nurse place the client for the procedure?",
    options: [
      "Prone with the head turned to the side",
      "Side-lying with the knees pulled up to the chest (fetal position)",
      "Supine with the legs extended",
      "High-Fowler's position"
    ],
    correctAnswerIndex: 1,
    category: "Nervous System",
    topic: "Lumbar Puncture Positioning",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The **side-lying, fetal position** (knees to chest, chin to chest) is the standard position for a lumbar puncture. This position arches the back and **widens the space between the lumbar vertebrae**, making it easier for the physician to insert the needle into the subarachnoid space.\n\n**Why each option is wrong:**\n\n- **A, C, and D** do not open the vertebral spaces and would make the procedure difficult or impossible.",
    memoryTip: "LP = LATERAL & LEGS UP. Arch the back like a 'C' to open up the 'windows' between the bones for the needle.",
    difficulty: 1
  },
  {
    id: "MS-Q131",
    text: "A nurse is assessing a client with a fracture of the femur. Which clinical manifestation is a hallmark sign of fat embolism syndrome (FES)?",
    options: ["Severe pain at the fracture site", "Petechiae on the chest and neck", "Increased heart rate", "Decreased urine output"],
    correctAnswerIndex: 1,
    category: "Musculoskeletal System",
    topic: "Fat Embolism Syndrome Hallmark",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Petechiae** (small, red-purple spots) on the chest, neck, and axilla are the hallmark and most specific sign of **fat embolism syndrome**. They occur due to the rupture of small capillaries by fat globules. Other signs include respiratory distress and mental status changes.\n\n**Why each option is wrong:**\n\n- **A. Severe pain** — is expected with any fracture.\n- **C. Tachycardia** — is common in FES but is non-specific (can be due to pain, blood loss, etc.).\n- **D.** Is not a primary sign of FES.",
    memoryTip: "FAT EMBOLISM = FRECKLES (Petechiae). If a patient with a broken long bone (femur) suddenly can't breathe and has 'red dots' on their chest, think Fat Embolism!",
    difficulty: 2
  },
  {
    id: "MS-Q132",
    text: "A client is in skeletal traction for a fractured hip. Which nursing action is essential for maintaining the effectiveness of the traction?",
    options: [
      "Removing the weights once a shift to check the skin",
      "Ensuring the weights are hanging freely and not touching the floor",
      "Allowing the knots in the rope to touch the pulleys",
      "Keeping the client in a side-lying position"
    ],
    correctAnswerIndex: 1,
    category: "Musculoskeletal System",
    topic: "Skeletal Traction Maintenance",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "For traction to be effective, the **weights must hang freely** and the pull must be continuous. If the weights touch the floor or the bed, the traction force is lost. Knots should not touch the pulleys as this also interferes with the pull.\n\n**Why each option is wrong:**\n\n- **A.** Traction weights should **never be removed** without a physician's order, as this can cause muscle spasms and bone misalignment.\n- **C.** Knots touching pulleys block the traction.\n- **D.** The client should be in a supine position to maintain proper body alignment for the traction.",
    memoryTip: "TRACTION = TENSION. The weights must be 'in the air' to keep the tension on the bone. If they hit the floor, the tension is gone.",
    difficulty: 1
  },
  {
    id: "MS-Q133",
    text: "A nurse is providing discharge instructions to a client who had a total hip replacement. Which instruction is most important to prevent dislocation of the new prosthesis?",
    options: [
      "\"Avoid bending your hip more than 90 degrees.\"",
      "\"Keep your legs crossed when sitting.\"",
      "\"Sleep on your stomach.\"",
      "\"Lean forward when getting out of a chair.\""
    ],
    correctAnswerIndex: 0,
    category: "Musculoskeletal System",
    topic: "Post-Hip Replacement Precautions",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "To prevent posterior dislocation after a total hip replacement, the client must avoid **hip flexion greater than 90 degrees**, adduction (crossing legs), and internal rotation. Using a raised toilet seat and avoiding low chairs are practical ways to follow this rule.\n\n**Why each option is wrong:**\n\n- **B. Crossing legs** — (adduction) is a major cause of dislocation.\n- **C and D** involve movements that could exceed the 90-degree flexion limit or cause improper rotation.",
    memoryTip: "HIP = HALT at 90. Don't bend too far, don't cross your legs, and don't turn your toes in. Keep the 'ball in the socket'.",
    difficulty: 1
  },
  {
    id: "MS-Q134",
    text: "A client is diagnosed with rheumatoid arthritis (RA). The nurse understands that the primary difference between RA and osteoarthritis (OA) is that RA is:",
    options: [
      "A degenerative 'wear and tear' disease",
      "A systemic, inflammatory autoimmune disease",
      "Characterized by asymmetrical joint involvement",
      "Primarily affecting weight-bearing joints",
    ],
    correctAnswerIndex: 1,
    category: "Musculoskeletal System",
    topic: "RA vs. OA Pathophysiology",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Rheumatoid Arthritis (RA)** is a **systemic, autoimmune** disease where the immune system attacks the synovium of the joints, causing inflammation and destruction. It often involves multiple joints symmetrically and can have systemic effects (fever, fatigue).\n\n**Why each option is wrong:**\n\n- **A, C, and D** describe **Osteoarthritis (OA)**, which is a localized, non-inflammatory 'wear and tear' disease that often affects weight-bearing joints (knees, hips) asymmetrically.",
    memoryTip: "RA = RHEUM (systemic/autoimmune). OA = OLD (wear and tear). RA is symmetrical (both hands); OA is often just one side.",
    difficulty: 1
  },
  {
    id: "MS-Q135",
    text: "A nurse is assessing a client with a cast on the right arm. Which finding would indicate the development of compartment syndrome?",
    options: ["Warm, pink fingers", "Capillary refill of 2 seconds", "Severe pain that is not relieved by opioids", "Ability to wiggle the fingers"],
    correctAnswerIndex: 2,
    category: "Musculoskeletal System",
    topic: "Compartment Syndrome Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Severe pain that is out of proportion to the injury and not relieved by analgesics** is the earliest and most important sign of compartment syndrome. It occurs because the pressure within the muscle compartment is so high that it cuts off blood flow and damages nerves.\n\n**Why each option is wrong:**\n\n- **A, B, and D** are normal findings indicating good neurovascular status. In compartment syndrome, you would see pallor, slow capillary refill, and inability to move the fingers (late signs).",
    memoryTip: "COMPARTMENT = CRUSHING PAIN. If the pain is 'screaming' and the meds aren't helping, the pressure is too high. This is a surgical emergency (fasciotomy)!",
    difficulty: 2
  },
  {
    id: "MS-Q136",
    text: "A client is diagnosed with osteoporosis. Which medication would the nurse expect to be prescribed to inhibit bone resorption?",
    options: ["Alendronate (Fosamax)", "Allopurinol (Zyloprim)", "Prednisone", "Furosemide"],
    correctAnswerIndex: 0,
    category: "Musculoskeletal System",
    topic: "Osteoporosis Treatment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Alendronate** is a bisphosphonate that works by **inhibiting osteoclast activity** (the cells that break down bone), thereby reducing bone resorption and increasing bone density.\n\n**Why each option is wrong:**\n\n- **B. Allopurinol** — is used to treat gout by lowering uric acid.\n- **C. Prednisone** — is a corticosteroid that can actually *cause* osteoporosis with long-term use.\n- **D. Furosemide** — is a loop diuretic.",
    memoryTip: "ALENDRONATE = ALWAYS UPRIGHT. You must take it with a full glass of water and stay upright for 30 minutes to prevent oesophageal irritation. It 'fixes' the bone.",
    difficulty: 1
  },
  {
    id: "MS-Q137",
    text: "A nurse is providing care for a client with an amputation of the left lower leg. The client complains of pain in the 'missing' foot. How should the nurse respond?",
    options: [
      "\"That's impossible, your foot is gone.\"",
      "\"It's just your imagination; try to ignore it.\"",
      "\"Phantom limb pain is real and can be treated with medication.\"",
      "\"You are just experiencing a psychological reaction to the loss.\""
    ],
    correctAnswerIndex: 2,
    category: "Musculoskeletal System",
    topic: "Phantom Limb Pain Management",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Phantom limb pain** is a very real physiological phenomenon where the brain still perceives pain signals from the nerves that used to go to the amputated limb. It should be acknowledged as real and treated with appropriate medications (like gabapentin or mirror therapy).\n\n**Why each option is wrong:**\n\n- **A, B, and D** are dismissive and non-therapeutic. They ignore the patient's actual experience and the physiological basis of the pain.",
    memoryTip: "PHANTOM = REAL. Even if the limb is gone, the 'ghost' of the pain remains in the brain. Treat it like any other pain.",
    difficulty: 1
  },
  {
    id: "MS-Q138",
    text: "A client is diagnosed with gout. Which dietary instruction is most important to prevent future attacks?",
    options: [
      "Avoid high-purine foods like organ meats and sardines.",
      "Increase intake of dairy products.",
      "Limit fluid intake to 1.5 litres per day.",
      "Eat a high-protein, low-carbohydrate diet."
    ],
    correctAnswerIndex: 0,
    category: "Musculoskeletal System",
    topic: "Gout Dietary Management",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Gout is caused by the accumulation of uric acid crystals in the joints. Uric acid is a byproduct of **purine metabolism**. Therefore, **avoiding high-purine foods** (organ meats, sardines, anchovies, red meat, and alcohol) is essential to prevent attacks.\n\n**Why each option is wrong:**\n\n- **B.** Low-fat dairy may actually help lower uric acid, but purine restriction is the priority.\n- **C.** Fluid intake should be **increased** to help flush uric acid through the kidneys.\n- **D.** High protein diets (especially from animal sources) are often high in purines.",
    memoryTip: "GOUT = NO PURINES. Purines make Uric Acid, and Uric Acid makes the 'needles' (crystals) that hurt the big toe.",
    difficulty: 1
  },
  {
    id: "MS-Q139",
    text: "A nurse is assessing a client with a suspected hip fracture. Which clinical manifestation is most characteristic?",
    options: [
      "The affected leg is longer and internally rotated.",
      "The affected leg is shorter and externally rotated.",
      "The client can bear weight on the affected leg.",
      "There is no visible deformity of the leg."
    ],
    correctAnswerIndex: 1,
    category: "Musculoskeletal System",
    topic: "Hip Fracture Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The classic presentation of a **hip fracture** is that the affected leg is **shorter** (due to muscle spasms pulling the bone up) and **externally rotated** (turned outward). The client will also have severe pain and be unable to bear weight.\n\n**Why each option is wrong:**\n\n- **A.** Describes the opposite of the classic presentation.\n- **C and D** are incorrect as there is usually significant pain, inability to walk, and a visible deformity.",
    memoryTip: "HIP FRACTURE = SHORT & OUT. If the leg looks shorter and the toes are pointing to the side, the hip is likely broken.",
    difficulty: 1
  },
  {
    id: "MS-Q140",
    text: "A client is scheduled for an electromyogram (EMG). The nurse explains that this test is used to:",
    options: [
      "Visualize the structure of the bones",
      "Measure the electrical activity of the muscles",
      "Check the blood flow to the extremities",
      "Identify the presence of joint inflammation"
    ],
    correctAnswerIndex: 1,
    category: "Musculoskeletal System",
    topic: "EMG Purpose",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "An **EMG** measures the **electrical activity of muscles** at rest and during contraction. It is used to diagnose neuromuscular disorders, such as myasthenia gravis, ALS, or peripheral neuropathies.\n\n**Why each option is wrong:**\n\n- **A.** Describes an **X-ray or CT scan**.\n- **C.** Describes a **Doppler ultrasound or angiogram**.\n- **D.** Describes an **arthroscopy or blood tests** (like ESR/CRP).",
    memoryTip: "EMG = ELECTRO (electricity) MYO (muscle) GRAM (record). It records the 'sparks' in the muscles to see if the nerves are talking to them correctly.",
    difficulty: 1
  },
  {
    id: "MS-Q141",
    text: "A nurse is caring for a client with severe burns. Which physiological change occurs during the first 24 to 48 hours (emergent phase)?",
    options: [
      "Fluid shifts from the interstitial space into the vascular space",
      "Massive fluid shift from the vascular space into the interstitial space",
      "Increased urine output (diuresis)",
      "Decreased capillary permeability"
    ],
    correctAnswerIndex: 1,
    category: "Integumentary System",
    topic: "Burn Emergent Phase Fluid Shift",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "In the emergent phase of a burn, there is a **massive increase in capillary permeability**. This causes fluid, electrolytes, and proteins to leak out of the blood vessels and into the surrounding tissues (**interstitial space**). This results in **hypovolaemic shock** and severe oedema.\n\n**Why each option is wrong:**\n\n- **A.** This happens in the **acute phase** (after 48 hours) as the patient begins to recover.\n- **C.** Urine output is **decreased** (oliguria) due to the loss of vascular volume.\n- **D.** Capillary permeability is **increased**, not decreased.",
    memoryTip: "BURNS = LEAKY PIPES. The blood vessels lose their 'seal' and the fluid floods the tissues. This is why we give massive amounts of IV fluids (Parkland formula).",
    difficulty: 2
  },
  {
    id: "MS-Q142",
    text: "A client is admitted with a suspected malignant melanoma. Which characteristic of a skin lesion is most concerning for this type of cancer?",
    options: ["Symmetrical shape", "Regular, smooth borders", "Uniform light brown colour", "Irregular borders and multiple colours"],
    correctAnswerIndex: 3,
    category: "Integumentary System",
    topic: "Melanoma Characteristics",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The **ABCDE rule** is used to identify potential melanoma: **A**symmetry, **B**order irregularity, **C**olour variation (multiple colours), **D**iameter (>6mm), and **E**volving (changing). A lesion with irregular borders and multiple colours is highly suspicious.\n\n**Why each option is wrong:**\n\n- **A, B, and C** are characteristics of benign moles (nevi).",
    memoryTip: "MELANOMA = ABCDE. If it's ugly, uneven, and multi-coloured, it needs to be checked. Melanoma is the most dangerous skin cancer.",
    difficulty: 1
  },
  {
    id: "MS-Q143",
    text: "A nurse is providing discharge instructions to a client with psoriasis. Which statement about the condition is accurate?",
    options: [
      "\"Psoriasis is a highly contagious skin infection.\"",
      "\"Psoriasis is caused by a lack of hygiene.\"",
      "\"Psoriasis is a chronic autoimmune condition characterized by rapid skin cell turnover.\"",
      "\"Psoriasis can be cured with a one-week course of antibiotics.\""
    ],
    correctAnswerIndex: 2,
    category: "Integumentary System",
    topic: "Psoriasis Pathophysiology",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Psoriasis** is a **chronic, non-contagious autoimmune** disorder. It causes skin cells to multiply up to 10 times faster than normal, leading to the characteristic silver-white scales (plaques) on a red base.\n\n**Why each option is wrong:**\n\n- **A.** It is not contagious.\n- **B.** It has nothing to do with hygiene.\n- **D.** There is no cure, and it is not treated with antibiotics (unless there is a secondary infection).",
    memoryTip: "PSORIASIS = FAST CELLS. The body is making skin too fast, and the 'old' skin piles up as silvery scales.",
    difficulty: 1
  },
  {
    id: "MS-Q144",
    text: "A client is diagnosed with Herpes Zoster (shingles). The nurse understands that this condition is caused by the reactivation of which virus?",
    options: ["Herpes simplex virus type 1", "Human papillomavirus", "Varicella-zoster virus", "Epstein-Barr virus"],
    correctAnswerIndex: 2,
    category: "Integumentary System",
    topic: "Herpes Zoster Cause",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Herpes Zoster (shingles)** is caused by the reactivation of the **varicella-zoster virus**, the same virus that causes chickenpox. After a person has chickenpox, the virus stays dormant in the nerve roots and can reactivate years later, usually during times of stress or immunosuppression.\n\n**Why each option is wrong:**\n\n- **A.** Causes cold sores.\n- **B.** Causes warts and cervical cancer.\n- **D.** Causes infectious mononucleosis.",
    memoryTip: "SHINGLES = CHICKENPOX REPLAY. If you've had chickenpox, the virus is 'sleeping' in your nerves. Shingles is when it 'wakes up' and follows a nerve path (dermatome).",
    difficulty: 1
  },
  {
    id: "MS-Q145",
    text: "A nurse is assessing a client for pressure ulcers. Which area is at the highest risk for development in a client who is bedbound and in a supine position?",
    options: ["Ischial tuberosity", "Sacrum", "Lateral malleolus", "Greater trochanter"],
    correctAnswerIndex: 1,
    category: "Integumentary System",
    topic: "Pressure Ulcer Risk Areas",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "In the **supine position** (lying on the back), the **sacrum** is at the highest risk for pressure ulcers because it bears a significant amount of weight against the mattress. Other risk areas in this position include the heels and the back of the head.\n\n**Why each option is wrong:**\n\n- **A. Ischial tuberosity** — is the highest risk when **sitting** in a chair.\n- **C and D** are highest risk when in a **side-lying (lateral)** position.",
    memoryTip: "SUPINE = SACRUM. If they are on their back, check the 'tailbone'. If they are on their side, check the 'hips' (trochanter) and 'ankles' (malleolus).",
    difficulty: 1
  },
  {
    id: "MS-Q146",
    text: "A client with a large wound is prescribed a diet high in which nutrient to promote tissue repair?",
    options: ["Carbohydrates", "Fats", "Protein", "Vitamin K"],
    correctAnswerIndex: 2,
    category: "Integumentary System",
    topic: "Wound Healing Nutrition",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Protein** is essential for tissue repair and wound healing. It provides the amino acids necessary for collagen synthesis and the formation of new tissue. Vitamin C and Zinc are also critical for healing.\n\n**Why each option is wrong:**\n\n- **A and B** provide energy but are not the primary building blocks for tissue.\n- **D. Vitamin K** — is essential for blood clotting, not primarily for tissue repair.",
    memoryTip: "WOUNDS = PROTEIN. You need 'bricks' (protein) to rebuild the 'wall' (skin).",
    difficulty: 1
  },
  {
    id: "MS-Q147",
    text: "A nurse is caring for a client with a full-thickness (third-degree) burn. Which assessment finding is characteristic of this type of burn?",
    options: ["Painful, red skin with blisters", "Painless, waxy white or charred skin", "Painful, pink skin without blisters", "Severe itching and redness"],
    correctAnswerIndex: 1,
    category: "Integumentary System",
    topic: "Full-Thickness Burn Characteristics",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A **full-thickness (third-degree) burn** involves the entire epidermis and dermis, and often extends into the subcutaneous fat. Because the nerve endings are destroyed, the burn itself is **painless**. The skin appears waxy white, leathery, or charred.\n\n**Why each option is wrong:**\n\n- **A.** Describes a **partial-thickness (second-degree)** burn.\n- **C.** Describes a **superficial (first-degree)** burn.\n- **D.** Is not characteristic of any acute burn depth.",
    memoryTip: "3rd DEGREE = NO PAIN. If the burn is so deep it's charred or white, the nerves are gone. It's a 'silent' but very serious injury.",
    difficulty: 2
  },
  {
    id: "MS-Q148",
    text: "A client is diagnosed with Scabies. The nurse explains that this condition is caused by:",
    options: ["A fungal infection", "A bacterial infection", "An infestation of mites", "A viral infection"],
    correctAnswerIndex: 2,
    category: "Integumentary System",
    topic: "Scabies Cause",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Scabies** is caused by an **infestation of the Sarcoptes scabiei mite**. The female mite burrows under the skin to lay eggs, causing intense itching (especially at night) and a characteristic rash of small burrows or bumps.\n\n**Why each option is wrong:**\n\n- **A, B, and D** are incorrect as scabies is a parasitic infestation, not an infection by a microorganism.",
    memoryTip: "SCABIES = SCRATCHY MITES. Tiny bugs are burrowing in the skin. It's highly contagious and needs a 'permethrin' cream to kill the mites.",
    difficulty: 1
  },
  {
    id: "MS-Q149",
    text: "A nurse is assessing a client with systemic lupus erythematosus (SLE). Which clinical manifestation is a classic sign of this condition?",
    options: ["Butterfly rash on the face", "Silvery scales on the elbows", "Painless ulcers on the legs", "Jaundice"],
    correctAnswerIndex: 0,
    category: "Integumentary System",
    topic: "SLE Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The **butterfly rash** (malar rash) — a red, flat or raised rash across the bridge of the nose and cheeks — is a classic and highly characteristic sign of **SLE**. SLE is a systemic autoimmune disease that can affect many organs.\n\n**Why each option is wrong:**\n\n- **B.** Describes **psoriasis**.\n- **C and D** are not classic signs of SLE.",
    memoryTip: "LUPUS = BUTTERFLY. The rash on the face looks like a butterfly. It's the 'signature' sign of Lupus.",
    difficulty: 1
  },
  {
    id: "MS-Q150",
    text: "A client is prescribed silver sulfadiazine (Silvadene) for a burn wound. The nurse understands that this medication is used to:",
    options: [
      "Promote rapid skin grafting",
      "Prevent and treat wound infection",
      "Reduce the pain of the burn",
      "Decrease fluid loss from the wound"
    ],
    correctAnswerIndex: 1,
    category: "Integumentary System",
    topic: "Silver Sulfadiazine Purpose",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Silver sulfadiazine** is a topical antimicrobial agent used to **prevent and treat infection** in burn wounds. Silver has broad-spectrum antibacterial properties, and the cream helps keep the wound moist.\n\n**Why each option is wrong:**\n\n- **A.** It doesn't directly promote grafting.\n- **C.** It doesn't have significant analgesic properties.\n- **D.** While it keeps the wound moist, its primary purpose is antimicrobial.",
    memoryTip: "SILVER = STERILE. We use silver cream to keep the 'bugs' out of the open burn wound.",
    difficulty: 1
  },
  {
    id: "MS-Q151",
    text: "A nurse is caring for a client with a suspected fracture of the ribs. Which clinical manifestation is most characteristic of this injury?",
    options: ["Bradypnea", "Paradoxical chest wall movement", "Pain that worsens with deep breathing and coughing", "Increased breath sounds on the affected side"],
    correctAnswerIndex: 2,
    category: "Respiratory System",
    topic: "Rib Fracture Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Pain that worsens with deep breathing, coughing, or movement** is the most common symptom of a rib fracture. This pain often leads to shallow breathing (splinting), which increases the risk of atelectasis and pneumonia.\n\n**Why each option is wrong:**\n\n- **A. Bradypnea** — is not characteristic; the client may have **tachypnea** due to pain and shallow breathing.\n- **B. Paradoxical chest movement** — is the hallmark of **flail chest** (multiple rib fractures in two or more places).\n- **D.** Breath sounds are usually **decreased** or absent if there is an associated pneumothorax or atelectasis.",
    memoryTip: "RIB FRACTURE = HURTS TO BREATHE. The patient will 'splint' their chest to avoid the sharp pain of the broken bone moving.",
    difficulty: 1
  },
  {
    id: "MS-Q152",
    text: "A client is diagnosed with a pulmonary embolism (PE). Which diagnostic test is considered the 'gold standard' for confirming this diagnosis?",
    options: ["Chest X-ray", "Electrocardiogram (ECG)", "CT pulmonary angiography (CTPA)", "D-dimer assay"],
    correctAnswerIndex: 2,
    category: "Respiratory System",
    topic: "Pulmonary Embolism Diagnosis",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**CT pulmonary angiography (CTPA)** is currently the most commonly used and definitive 'gold standard' for diagnosing a pulmonary embolism. It allows for direct visualization of the clot in the pulmonary arteries.\n\n**Why each option is wrong:**\n\n- **A. Chest X-ray** — is often normal in PE; it's used to rule out other causes of chest pain.\n- **B. ECG** — may show signs of right heart strain (like S1Q3T3) but is not diagnostic.\n- **D. D-dimer** — is a screening tool. A negative result helps rule out PE, but a positive result is non-specific and requires further imaging.",
    memoryTip: "PE = PULMONARY PICTURE (CTPA). We need to see the 'plug' in the 'pipes' of the lungs.",
    difficulty: 1
  },
  {
    id: "MS-Q153",
    text: "A nurse is assessing a client with chronic obstructive pulmonary disease (COPD). Which clinical finding is characteristic of 'pink puffers' (emphysema)?",
    options: ["Productive cough with thick sputum", "Cyanosis and peripheral oedema", "Barrel chest and pursed-lip breathing", "Right-sided heart failure (cor pulmonale)"],
    correctAnswerIndex: 2,
    category: "Respiratory System",
    topic: "Emphysema (Pink Puffer) Characteristics",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Pink puffers** (emphysema) are characterized by the destruction of alveoli, leading to air trapping and a **barrel chest**. They use **pursed-lip breathing** to maintain airway pressure and are often thin and tachypneic but remain relatively well-oxygenated (hence 'pink').\n\n**Why each option is wrong:**\n\n- **A, B, and D** are characteristic of **'blue bloaters'** (chronic bronchitis), who have excessive mucus, cyanosis, and early development of right-sided heart failure.",
    memoryTip: "PINK PUFFER = PUFFING (pursed lips) & PINK (oxygenated). BLUE BLOATER = BLUE (cyanotic) & BLOATED (oedema from heart failure).",
    difficulty: 1
  },
  {
    id: "MS-Q154",
    text: "A client is scheduled for a thoracentesis. What is the nurse's primary responsibility during the procedure?",
    options: [
      "Administering general anaesthesia",
      "Monitoring the client's vital signs and respiratory status",
      "Inserting the needle into the pleural space",
      "Performing the laboratory analysis of the fluid"
    ],
    correctAnswerIndex: 1,
    category: "Respiratory System",
    topic: "Thoracentesis Nursing Responsibility",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "During a **thoracentesis**, the nurse's primary role is to **monitor the client's vital signs, oxygen saturation, and respiratory effort**. The nurse also helps position the client and provides emotional support.\n\n**Why each option is wrong:**\n\n- **A.** Thoracentesis is usually done under local anaesthesia.\n- **C.** This is the physician's responsibility.\n- **D.** This is the laboratory's responsibility.",
    memoryTip: "THORACENTESIS = TAP THE LUNG. The nurse stays at the patient's side to make sure they are breathing okay while the fluid is being drained.",
    difficulty: 1
  },
  {
    id: "MS-Q155",
    text: "A nurse is caring for a client with a chest tube connected to a water-seal drainage system. Which finding would require immediate intervention?",
    options: [
      "Gentle bubbling in the suction control chamber",
      "Fluctuation (tidaling) of the water level in the water-seal chamber",
      "Continuous bubbling in the water-seal chamber",
      "Drainage of 50 mL of serosanguinous fluid in 8 hours"
    ],
    correctAnswerIndex: 2,
    category: "Respiratory System",
    topic: "Chest Tube Drainage System Monitoring",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Continuous bubbling in the water-seal chamber** indicates an **air leak** in the system or the client's pleural space. This requires immediate investigation (checking connections, clamping briefly to locate the leak).\n\n**Why each option is wrong:**\n\n- **A. Gentle bubbling in suction chamber** — is normal and indicates the suction is working.\n- **B. Tidaling** — is a normal finding; it shows the system is patent and responding to the client's breathing.\n- **D.** This amount and type of drainage is usually acceptable post-operatively.",
    memoryTip: "WATER SEAL = NO BUBBLES (unless they just coughed). Continuous bubbles mean there's a 'hole' in the system. Tidaling is 'good' — it means the tube is 'breathing' with the patient.",
    difficulty: 2
  },
  {
    id: "MS-Q156",
    text: "A client is diagnosed with tuberculosis (TB). Which type of isolation precautions should the nurse implement?",
    options: ["Contact precautions", "Droplet precautions", "Airborne precautions", "Standard precautions only"],
    correctAnswerIndex: 2,
    category: "Respiratory System",
    topic: "Tuberculosis Isolation Precautions",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Tuberculosis** is spread through very small droplets that stay suspended in the air for long periods. Therefore, **airborne precautions** are required, including a private, negative-pressure room and the use of an N95 respirator by healthcare workers.\n\n**Why each option is wrong:**\n\n- **A. Contact** — is for skin/wound infections.\n- **B. Droplet** — is for larger particles (like flu or meningitis) that fall to the ground quickly.\n- **D.** Standard precautions are used for everyone, but TB requires additional airborne measures.",
    memoryTip: "TB = AIRBORNE. The 'bugs' are tiny and float in the air. You need a special 'N95' mask to keep them out.",
    difficulty: 1
  },
  {
    id: "MS-Q157",
    text: "A nurse is providing discharge teaching to a client with asthma. The nurse explains that the 'rescue' inhaler (e.g., Salbutamol) should be used:",
    options: [
      "Every morning to prevent attacks",
      "Only when experiencing acute shortness of breath or wheezing",
      "Twice a day regardless of symptoms",
      "Right before going to sleep"
    ],
    correctAnswerIndex: 1,
    category: "Respiratory System",
    topic: "Asthma Rescue Inhaler Use",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Short-acting beta-agonists (SABAs)** like Salbutamol (Albuterol) are **rescue medications**. They work quickly to bronchodilate and should be used only for **acute symptom relief** or before exercise if prescribed.\n\n**Why each option is wrong:**\n\n- **A, C, and D** describe the use of **controller medications** (like inhaled corticosteroids or long-acting beta-agonists), which are taken daily to prevent symptoms.",
    memoryTip: "SALBUTAMOL = SUDDEN. Use it when you need help 'right now'. It's the fire extinguisher, not the smoke alarm.",
    difficulty: 1
  },
  {
    id: "MS-Q158",
    text: "A client is admitted with acute respiratory distress syndrome (ARDS). The nurse understands that the primary pathophysiological change in ARDS is:",
    options: [
      "Obstruction of the large airways",
      "Increased capillary permeability leading to non-cardiogenic pulmonary oedema",
      "Decreased production of red blood cells",
      "Spasm of the bronchial smooth muscle"
    ],
    correctAnswerIndex: 1,
    category: "Respiratory System",
    topic: "ARDS Pathophysiology",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**ARDS** is characterized by a massive inflammatory response that increases **pulmonary capillary permeability**. This allows fluid and proteins to flood the alveoli, causing severe hypoxaemia that does not respond to oxygen therapy (refractory hypoxaemia).\n\n**Why each option is wrong:**\n\n- **A.** ARDS affects the **alveoli** (gas exchange units), not the large airways.\n- **C.** Is not related to ARDS.\n- **D.** Describes **asthma**.",
    memoryTip: "ARDS = ALVEOLI FLOODED. The lungs become 'stiff' and 'wet' because the capillaries are leaking fluid directly into the air sacs.",
    difficulty: 2
  },
  {
    id: "MS-Q159",
    text: "A nurse is assessing a client with a suspected pneumothorax. Which clinical manifestation is most characteristic?",
    options: [
      "Increased breath sounds on the affected side",
      "Tracheal deviation toward the affected side",
      "Sudden chest pain and shortness of breath",
      "Dullness on percussion over the affected side"
    ],
    correctAnswerIndex: 2,
    category: "Respiratory System",
    topic: "Pneumothorax Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A **pneumothorax** (collapsed lung) typically presents with **sudden, sharp chest pain and dyspnoea (shortness of breath)**. On assessment, you would find absent or diminished breath sounds and hyper-resonance on percussion on the affected side.\n\n**Why each option is wrong:**\n\n- **A.** Breath sounds are **absent or decreased**.\n- **B.** In a **tension pneumothorax**, the trachea deviates **away** from the affected side (a late and emergency sign).\n- **D.** Percussion would reveal **hyper-resonance** (due to air), not dullness (which indicates fluid or solid tissue).",
    memoryTip: "PNEUMO = AIR. If air gets into the pleural space, the lung 'pops' like a balloon. It's sudden, painful, and you can't hear any air moving on that side.",
    difficulty: 1
  },
  {
    id: "MS-Q160",
    text: "A client is scheduled for a bronchoscopy. Which nursing action is a priority after the procedure?",
    options: [
      "Encouraging the client to drink plenty of fluids immediately",
      "Assessing for the return of the gag reflex before allowing oral intake",
      "Keeping the client in a supine position for 4 hours",
      "Administering a dose of antibiotics"
    ],
    correctAnswerIndex: 1,
    category: "Respiratory System",
    topic: "Post-Bronchoscopy Nursing Priority",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "During a bronchoscopy, the throat is numbed with a local anaesthetic. The priority after the procedure is to **keep the client NPO until the gag reflex returns** to prevent aspiration.\n\n**Why each option is wrong:**\n\n- **A.** Giving fluids before the gag reflex returns could cause **aspiration**.\n- **C.** The client should be in a semi-Fowler's position to promote lung expansion.\n- **D.** Antibiotics are not routinely given after a bronchoscopy unless an infection is suspected.",
    memoryTip: "BRONCHOSCOPY = CHECK THE GAG. If the throat is 'asleep', the patient can't swallow safely. Wait for the 'gag' to wake up before giving water.",
    difficulty: 1
  },
  {
    id: "MS-Q161",
    text: "A nurse is caring for a client with a history of angina pectoris. The client complains of chest pain. What is the nurse's first action?",
    options: [
      "Administer a dose of morphine IV",
      "Obtain a 12-lead ECG",
      "Instruct the client to stop all activity and rest",
      "Administer sublingual nitroglycerin"
    ],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "Angina Management Priority",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The first action for a client with stable angina experiencing chest pain is to **stop all activity and rest**. This reduces the myocardial oxygen demand, which may be enough to relieve the pain. If pain persists, nitroglycerin is the next step.\n\n**Why each option is wrong:**\n\n- **A. Morphine** — is used for MI pain that is not relieved by nitroglycerin.\n- **B. ECG** — is important but should be done after the client is resting.\n- **D. Nitroglycerin** — is given if rest does not relieve the pain.",
    memoryTip: "ANGINA = STOP & REST. Angina is an 'imbalance' between oxygen supply and demand. Resting is the fastest way to lower the demand.",
    difficulty: 1
  },
  {
    id: "MS-Q162",
    text: "A client is diagnosed with a myocardial infarction (MI). Which laboratory test is the most specific indicator of cardiac muscle damage?",
    options: ["Creatine kinase (CK-MB)", "Myoglobin", "Troponin I or T", "Lactate dehydrogenase (LDH)"],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "MI Specific Indicator",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Troponins (I and T)** are the most specific and sensitive biomarkers for myocardial injury. They are released into the bloodstream only when cardiac muscle cells are damaged and stay elevated for several days.\n\n**Why each option is wrong:**\n\n- **A. CK-MB** — is also specific but returns to normal much faster (24-48 hours).\n- **B. Myoglobin** — is the **earliest** marker to rise but is not specific to cardiac muscle (it's also in skeletal muscle).\n- **D. LDH** — is an older, non-specific marker.",
    memoryTip: "TROPONIN = TRUE HEART DAMAGE. If the Troponin is high, the heart muscle has been injured. It's the 'gold standard' lab for MI.",
    difficulty: 1
  },
  {
    id: "MS-Q163",
    text: "A nurse is assessing a client with left-sided heart failure. Which clinical manifestation is most characteristic?",
    options: ["Peripheral oedema and jugular venous distension", "Dyspnoea and crackles in the lungs", "Hepatomegaly and ascites", "Weight gain and anorexia"],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "Left-Sided Heart Failure Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Left-sided heart failure** causes blood to back up into the **pulmonary circulation**. This leads to pulmonary congestion, manifesting as **dyspnoea (shortness of breath), orthopnoea, and crackles** on lung auscultation.\n\n**Why each option is wrong:**\n\n- **A, C, and D** are characteristic of **right-sided heart failure**, where blood backs up into the systemic circulation, causing peripheral oedema, JVD, and organ congestion.",
    memoryTip: "LEFT = LUNGS. If the left side fails, the fluid goes back into the lungs. RIGHT = REST OF BODY. If the right side fails, the fluid goes to the legs and belly.",
    difficulty: 1
  },
  {
    id: "MS-Q164",
    text: "A client is prescribed Digoxin (Lanoxin) for heart failure. Which assessment finding would indicate potential digoxin toxicity?",
    options: ["Heart rate of 110 bpm", "Visual disturbances like yellow-green halos", "Increased appetite", "Hypertension"],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "Digoxin Toxicity Signs",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Classic signs of **digoxin toxicity** include **visual disturbances (yellow-green halos, blurred vision)**, gastrointestinal upset (anorexia, nausea, vomiting), and cardiac arrhythmias (especially **bradycardia**).\n\n**Why each option is wrong:**\n\n- **A.** Toxicity usually causes **bradycardia** (HR < 60), not tachycardia.\n- **C.** Toxicity causes **anorexia** (loss of appetite).\n- **D.** Is not a sign of digoxin toxicity.",
    memoryTip: "DIGOXIN = DIG THE HALO. If the patient sees 'yellow halos' and feels sick to their stomach, their Digoxin level is likely too high. Check the pulse!",
    difficulty: 1
  },
  {
    id: "MS-Q165",
    text: "A nurse is caring for a client with a deep vein thrombosis (DVT). Which nursing intervention is a priority to prevent a pulmonary embolism?",
    options: [
      "Massaging the affected leg to improve circulation",
      "Encouraging the client to ambulate frequently",
      "Maintaining the client on bed rest and avoiding leg massage",
      "Applying a heating pad to the affected area"
    ],
    correctAnswerIndex: 2,
    category: "Cardiovascular System",
    topic: "DVT Management Priority",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The priority in DVT management is to **prevent the clot from dislodging** and traveling to the lungs (PE). This involves **bed rest** (initially), elevation of the limb, and **strictly avoiding massage** of the affected leg.\n\n**Why each option is wrong:**\n\n- **A. Massage** — is extremely dangerous as it can break the clot loose.\n- **B. Ambulation** — is usually avoided in the very early acute phase until anticoagulation is therapeutic.\n- **D.** Heat may be used for comfort, but it's not the priority for preventing PE.",
    memoryTip: "DVT = DON'T VIBRATE (or massage) THE THROMBUS. Keep the leg still and let the blood thinners do their work so the clot doesn't fly to the lungs.",
    difficulty: 1
  },
  {
    id: "MS-Q166",
    text: "A client is diagnosed with peripheral arterial disease (PAD). Which clinical manifestation is most characteristic of this condition?",
    options: [
      "Painless, red ulcers on the ankles",
      "Intermittent claudication (leg pain with exercise)",
      "Warm, swollen legs with brownish skin discolouration",
      "Strong, bounding pedal pulses"
    ],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "PAD Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Intermittent claudication** — cramping leg pain that occurs during exercise and is relieved by rest — is the hallmark sign of **PAD**. It is caused by inadequate blood flow (ischaemia) to the muscles during activity.\n\n**Why each option is wrong:**\n\n- **A and C** describe **chronic venous insufficiency**. PAD ulcers are usually painful, 'punched out' in appearance, and located on the toes or heels.\n- **D.** PAD causes **weak or absent** pulses due to arterial narrowing.",
    memoryTip: "PAD = PAIN with ACTIVITY. The 'pipes' (arteries) are narrow, so the muscles don't get enough oxygen when they work. It's like 'angina of the legs'.",
    difficulty: 1
  },
  {
    id: "MS-Q167",
    text: "A nurse is providing discharge teaching to a client with a permanent pacemaker. Which instruction is essential?",
    options: [
      "\"Avoid using a microwave oven.\"",
      "\"Check your pulse daily and report any significant changes.\"",
      "\"You can never have an X-ray again.\"",
      "\"Keep the pacemaker site covered with a dressing at all times.\""
    ],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "Pacemaker Discharge Instructions",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Clients with pacemakers must be taught to **monitor their pulse daily** to ensure the pacemaker is maintaining the set rate. They should report any rate significantly lower than the set rate or symptoms like dizziness or fainting.\n\n**Why each option is wrong:**\n\n- **A.** Modern microwaves are safe for pacemaker patients.\n- **C.** X-rays are safe; however, **MRIs** are usually contraindicated (unless it's an MRI-compatible pacemaker).\n- **D.** Once the incision is healed, it does not need to be covered.",
    memoryTip: "PACEMAKER = PULSE. The patient becomes the 'guardian' of their own heart rate. If the pulse is too slow, the 'battery' or the 'wires' might have a problem.",
    difficulty: 1
  },
  {
    id: "MS-Q168",
    text: "A client is admitted with abdominal aortic aneurysm (AAA). Which assessment finding would indicate that the aneurysm is leaking or about to rupture?",
    options: [
      "A pulsating mass in the periumbilical area",
      "Sudden, severe back or abdominal pain",
      "Increased blood pressure",
      "Hyperactive bowel sounds"
    ],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "AAA Rupture Signs",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Sudden, severe back or abdominal pain** is a classic sign of AAA expansion or rupture. This is a life-threatening emergency as it can lead to massive internal haemorrhage and hypovolaemic shock.\n\n**Why each option is wrong:**\n\n- **A.** A pulsating mass is a sign of an **intact** aneurysm.\n- **C.** Rupture causes **hypotension** (low BP) due to blood loss.\n- **D.** Bowel sounds are not a primary indicator of AAA status.",
    memoryTip: "AAA = ABDOMINAL ALARM. If a patient with a known aneurysm suddenly has 'tearing' back pain, they are bleeding out. Call the surgeon immediately!",
    difficulty: 2
  },
  {
    id: "MS-Q169",
    text: "A nurse is assessing a client with Raynaud's phenomenon. What is the characteristic sequence of colour changes in the fingers during an attack?",
    options: ["Red, White, Blue", "White, Blue, Red", "Blue, Red, White", "White, Red, Blue"],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "Raynaud's Colour Changes",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Raynaud's phenomenon involves vasospasm of the small arteries in the fingers/toes. The classic colour sequence is: **White** (pallor due to ischaemia) -> **Blue** (cyanosis due to deoxygenated blood) -> **Red** (rubor due to reactive hyperaemia when blood flow returns).\n\n**Why each option is wrong:**\n\n- The other sequences do not reflect the physiological process of vasospasm and reperfusion.",
    memoryTip: "RAYNAUD'S = W.B.R. (White, Blue, Red). Like the flag of France! Cold makes them white, then they turn blue, then they 'thaw out' and turn red.",
    difficulty: 2
  },
  {
    id: "MS-Q170",
    text: "A client is diagnosed with infective endocarditis. Which clinical manifestation is a characteristic sign of this condition?",
    options: ["Butterfly rash on the face", "Splinter haemorrhages in the nail beds", "Painful, swollen joints", "Jaundice"],
    correctAnswerIndex: 1,
    category: "Cardiovascular System",
    topic: "Infective Endocarditis Signs",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Characteristic signs of **infective endocarditis** include **splinter haemorrhages** (tiny streaks of blood under the nails), **Osler's nodes** (painful nodules on fingers/toes), **Janeway lesions** (painless spots on palms/soles), and a new or changing heart murmur.\n\n**Why each option is wrong:**\n\n- **A.** Is for SLE.\n- **C.** Is more common in rheumatic fever or RA.\n- **D.** Is not a sign of endocarditis.",
    memoryTip: "ENDOCARDITIS = EMBOLI. The 'vegetation' on the heart valves can break off and cause tiny 'splinters' of blood in the nails or spots on the hands.",
    difficulty: 2
  },
  {
    id: "MS-Q171",
    text: "A nurse is caring for a client with a history of peptic ulcer disease. The client suddenly develops severe abdominal pain and a 'board-like' abdomen. What is the nurse's priority action?",
    options: [
      "Administer an antacid",
      "Prepare the client for an emergency endoscopy",
      "Notify the physician and prepare for emergency surgery",
      "Place the client in a supine position"
    ],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "Peptic Ulcer Perforation Priority",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A **board-like, rigid abdomen** with sudden, severe pain indicates **perforation** of the ulcer, leading to peritonitis. This is a surgical emergency. The nurse must notify the physician immediately and prepare the client for surgery.\n\n**Why each option is wrong:**\n\n- **A. Antacid** — will not help a perforation and could worsen the peritonitis.\n- **B. Endoscopy** — is contraindicated if perforation is suspected as the air used during the procedure could worsen the situation.\n- **D.** The client should be in a semi-Fowler's position to localize the peritoneal fluid.",
    memoryTip: "BOARD-LIKE = BAD. If the belly is hard as a board, something has 'popped' (perforated). It's a surgical emergency!",
    difficulty: 2
  },
  {
    id: "MS-Q172",
    text: "A client is diagnosed with gastro-oesophageal reflux disease (GERD). Which dietary instruction should the nurse include in the teaching plan?",
    options: [
      "\"Eat three large meals a day.\"",
      "\"Drink orange juice with every meal.\"",
      "\"Avoid eating within 3 hours of bedtime.\"",
      "\"Lie down for 30 minutes after eating.\""
    ],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "GERD Management",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "To prevent reflux, clients with GERD should **avoid eating close to bedtime**, eat small frequent meals, avoid trigger foods (caffeine, chocolate, spicy foods, citrus), and remain upright for at least 2 hours after eating.\n\n**Why each option is wrong:**\n\n- **A.** Small, frequent meals are better.\n- **B. Orange juice** — is acidic and a common trigger for GERD.\n- **D. Lying down** — promotes reflux; the client should stay upright.",
    memoryTip: "GERD = GRAVITY is your friend. Keep the food down by staying up, and don't eat right before you go to sleep.",
    difficulty: 1
  },
  {
    id: "MS-Q173",
    text: "A nurse is assessing a client with suspected acute cholecystitis. Where would the nurse expect the client to experience pain?",
    options: ["Left upper quadrant radiating to the back", "Right upper quadrant radiating to the right shoulder", "Periumbilical area radiating to the right lower quadrant", "Epigastric area radiating to the left arm"],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Cholecystitis Pain Location",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Acute cholecystitis** (gallbladder inflammation) typically causes pain in the **right upper quadrant (RUQ)** that may radiate to the **right shoulder or scapula**. This is often triggered by a high-fat meal.\n\n**Why each option is wrong:**\n\n- **A.** Describes **pancreatitis**.\n- **C.** Describes **appendicitis**.\n- **D.** Describes **myocardial infarction**.",
    memoryTip: "GALLBLADDER = GONE TO THE RIGHT SHOULDER. RUQ pain after a greasy burger is the classic sign of gallbladder trouble.",
    difficulty: 1
  },
  {
    id: "MS-Q174",
    text: "A client is diagnosed with Crohn's disease. The nurse understands that a key characteristic of this condition is:",
    options: [
      "Inflammation limited to the mucosal layer of the colon",
      "Continuous lesions starting from the rectum",
      "'Skip lesions' that can occur anywhere in the GI tract",
      "A high risk of developing toxic megacolon"
    ],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "Crohn's Disease Characteristics",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Crohn's disease** is characterized by **transmural inflammation** (all layers of the bowel wall) and **'skip lesions'** (areas of healthy tissue between diseased areas). It can affect any part of the GI tract from the mouth to the anus.\n\n**Why each option is wrong:**\n\n- **A, B, and D** are characteristic of **Ulcerative Colitis**, which is limited to the colon and rectum, involves only the mucosa, and has a higher risk of toxic megacolon.",
    memoryTip: "CROHN'S = CAN occur anywhere (Skip lesions). UC = UNDER (mucosa) and UP from the rectum (continuous).",
    difficulty: 2
  },
  {
    id: "MS-Q175",
    text: "A nurse is caring for a client with cirrhosis of the liver. Which laboratory finding is most characteristic of this condition?",
    options: ["Decreased serum ammonia", "Increased serum albumin", "Prolonged prothrombin time (PT/INR)", "Decreased bilirubin"],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "Cirrhosis Laboratory Findings",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "In cirrhosis, the liver's ability to produce clotting factors is impaired, leading to a **prolonged PT/INR**. Other findings include **increased ammonia** (causing encephalopathy), **decreased albumin** (causing ascites), and **increased bilirubin** (causing jaundice).\n\n**Why each option is wrong:**\n\n- **A.** Ammonia is **increased**.\n- **B.** Albumin is **decreased**.\n- **D.** Bilirubin is **increased**.",
    memoryTip: "LIVER = LIFE (Clotting). If the liver is 'scarred' (cirrhosis), it can't make the 'glue' (clotting factors) for the blood, so the PT/INR goes up.",
    difficulty: 1
  },
  {
    id: "MS-Q176",
    text: "A client is admitted with acute pancreatitis. Which nursing intervention is a priority during the acute phase?",
    options: [
      "Encouraging a high-protein, high-fat diet",
      "Maintaining the client on NPO status",
      "Administering oral pancreatic enzymes with meals",
      "Encouraging frequent ambulation"
    ],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Acute Pancreatitis Management",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The priority in acute pancreatitis is to **'rest the pancreas'** to stop the auto-digestion process. This is achieved by keeping the client **NPO** and often using nasogastric suction to reduce pancreatic stimulation.\n\n**Why each option is wrong:**\n\n- **A.** Fat and protein stimulate the pancreas and would worsen the pain and inflammation.\n- **C.** Pancreatic enzymes are used for **chronic** pancreatitis, not the acute phase.\n- **D.** Bed rest is usually preferred to reduce metabolic demand.",
    memoryTip: "PANCREATITIS = PAUSE the eating. NPO is the best way to stop the pancreas from 'eating itself'.",
    difficulty: 1
  },
  {
    id: "MS-Q177",
    text: "A nurse is providing care for a client with a new colostomy. Which finding during the first 24 hours would require immediate notification of the physician?",
    options: [
      "The stoma is red and moist.",
      "The stoma is dark purple or black.",
      "There is a small amount of bloody drainage from the stoma.",
      "The stoma is slightly swollen."
    ],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Colostomy Assessment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A **dark purple or black stoma** indicates **ischaemia or necrosis** (lack of blood flow). This is a surgical emergency. A healthy stoma should be beefy red and moist.\n\n**Why each option is wrong:**\n\n- **A.** This is a normal, healthy finding.\n- **C and D** are expected in the immediate post-operative period due to surgical trauma.",
    memoryTip: "STOMA = STRAWBERRY. It should be red and juicy. If it turns 'grape' (purple) or 'blackberry' (black), the blood supply is gone!",
    difficulty: 1
  },
  {
    id: "MS-Q178",
    text: "A client is diagnosed with viral hepatitis. Which clinical manifestation is characteristic of the icteric phase?",
    options: ["Fever and malaise", "Jaundice and dark-coloured urine", "Increased appetite", "Disappearance of all symptoms"],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Hepatitis Icteric Phase",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The **icteric phase** of hepatitis is characterized by **jaundice** (yellowing of skin/eyes), **dark-coloured urine** (due to bilirubin), and clay-coloured stools. The pre-icteric phase involves flu-like symptoms.\n\n**Why each option is wrong:**\n\n- **A.** Describes the **pre-icteric** phase.\n- **C.** Patients usually have **anorexia** (loss of appetite).\n- **D.** Describes the **convalescent** phase.",
    memoryTip: "ICTERIC = ICKY YELLOW. This is when the jaundice appears and the urine looks like 'tea'.",
    difficulty: 1
  },
  {
    id: "MS-Q179",
    text: "A nurse is assessing a client with suspected appendicitis. Which assessment technique would elicit 'rebound tenderness'?",
    options: [
      "Palpating the left lower quadrant to see if it causes pain on the right",
      "Applying deep pressure to the abdomen and then quickly releasing it",
      "Percussing the liver borders",
      "Auscultating for bowel sounds in all four quadrants"
    ],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Appendicitis Assessment (Rebound Tenderness)",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Rebound tenderness** (Blumberg's sign) is elicited by **applying deep pressure to the abdomen and then releasing it quickly**. Pain that is worse upon release than upon pressure indicates peritoneal irritation, common in appendicitis.\n\n**Why each option is wrong:**\n\n- **A.** Describes **Rovsing's sign**.\n- **C and D** are standard assessment techniques but do not check for rebound tenderness.",
    memoryTip: "REBOUND = RELEASE. It hurts more when you let go than when you push in. This means the 'lining' of the belly is irritated.",
    difficulty: 1
  },
  {
    id: "MS-Q180",
    text: "A client is scheduled for an upper GI series (barium swallow). Which instruction is essential for the nurse to provide after the procedure?",
    options: [
      "\"Stay on bed rest for 24 hours.\"",
      "\"Increase your fluid intake to help pass the barium.\"",
      "\"Expect your stools to be bright red for a few days.\"",
      "\"Avoid eating any solid food for 48 hours.\""
    ],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Post-Barium Swallow Care",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Barium can become very hard and cause constipation or impaction. The priority after a barium study is to **increase fluid intake** and sometimes use a mild laxative to ensure the barium is eliminated. Stools will be **white or chalky** for a few days.\n\n**Why each option is wrong:**\n\n- **A.** Ambulation is encouraged.\n- **C.** Stools should be **white**, not red.\n- **D.** The client can return to a normal diet once the procedure is over.",
    memoryTip: "BARIUM = BEWARE of BLOCKAGE. Drink lots of water to flush out the 'white chalk' so it doesn't get stuck in your bowels.",
    difficulty: 1
  },
  {
    id: "MS-Q181",
    text: "A nurse is caring for a client with an acute exacerbation of ulcerative colitis. Which clinical manifestation is most characteristic?",
    options: ["Constipation and abdominal distension", "Bloody diarrhoea and abdominal cramping", "Steatorrhoea (fatty stools)", "Pain in the right upper quadrant"],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Ulcerative Colitis Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Bloody diarrhoea** (often 10-20 times a day) and **abdominal cramping** are the hallmark signs of an acute exacerbation of **ulcerative colitis**. The inflammation is limited to the mucosa of the colon and rectum.\n\n**Why each option is wrong:**\n\n- **A.** UC causes diarrhoea, not constipation.\n- **C. Steatorrhoea** — is more common in malabsorption syndromes like celiac disease or chronic pancreatitis.\n- **D.** UC pain is usually in the **left lower quadrant**.",
    memoryTip: "UC = URGENT & CRIMSON (bloody). The colon is inflamed and bleeding, leading to frequent, urgent, bloody stools.",
    difficulty: 1
  },
  {
    id: "MS-Q182",
    text: "A client is diagnosed with a hiatal hernia. Which instruction should the nurse provide to help manage symptoms?",
    options: [
      "\"Eat large meals to reduce the number of times you swallow.\"",
      "\"Lie down flat immediately after eating.\"",
      "\"Avoid wearing tight-fitting clothing around the waist.\"",
      "\"Drink plenty of carbonated beverages.\""
    ],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "Hiatal Hernia Management",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Managing a **hiatal hernia** is similar to managing GERD. **Avoiding tight-fitting clothing** reduces intra-abdominal pressure, which helps prevent the stomach from pushing up through the diaphragm.\n\n**Why each option is wrong:**\n\n- **A.** Small, frequent meals are better.\n- **B.** Lying down flat promotes reflux; the client should stay upright.\n- **D. Carbonated beverages** — can increase gas and pressure in the stomach.",
    memoryTip: "HIATAL HERNIA = HELP THE HOLE. Don't put extra pressure on your belly (no tight belts) and use gravity to keep your stomach where it belongs.",
    difficulty: 1
  },
  {
    id: "MS-Q183",
    text: "A nurse is assessing a client with suspected intestinal obstruction. Which finding is characteristic of a small bowel obstruction?",
    options: ["Gradual onset of abdominal distension", "Projectile vomiting and colicky abdominal pain", "Ribbon-like stools", "Low-pitched, infrequent bowel sounds"],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Small Bowel Obstruction Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Small bowel obstruction (SBO)** typically has a rapid onset and is characterized by **projectile vomiting** (often containing bile or faecal material), colicky abdominal pain, and rapid development of dehydration.\n\n**Why each option is wrong:**\n\n- **A.** Large bowel obstruction has a more gradual onset of distension.\n- **C. Ribbon-like stools** — are more common in partial obstructions of the colon or rectum.\n- **D.** Early in an obstruction, bowel sounds are often **high-pitched and hyperactive** (borborygmi) above the site of the blockage.",
    memoryTip: "SBO = SUDDEN & SPEWING. The blockage is 'high up', so everything comes back up quickly as projectile vomit.",
    difficulty: 2
  },
  {
    id: "MS-Q184",
    text: "A client is admitted with a suspected upper GI bleed. Which clinical manifestation is most characteristic?",
    options: ["Bright red blood in the stool (haematochezia)", "Black, tarry stools (melaena)", "Clay-coloured stools", "Steatorrhoea"],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Upper GI Bleed Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Melaena** (black, tarry, foul-smelling stools) is the classic sign of an **upper GI bleed**. The blood has been partially digested by stomach acid and enzymes as it travels through the intestines.\n\n**Why each option is wrong:**\n\n- **A. Haematochezia** — (bright red blood) usually indicates a **lower** GI bleed.\n- **C.** Indicates a lack of bile (biliary obstruction).\n- **D.** Indicates fat malabsorption.",
    memoryTip: "UPPER = UNDER-DIGESTED (Melaena). The blood turns black and sticky like 'tar' because it's been through the stomach acid.",
    difficulty: 1
  },
  {
    id: "MS-Q185",
    text: "A nurse is providing care for a client with dumping syndrome after a gastric bypass. Which instruction is essential?",
    options: [
      "\"Drink large amounts of water with your meals.\"",
      "\"Eat high-carbohydrate, sugary snacks between meals.\"",
      "\"Lie down for 30 minutes after eating.\"",
      "\"Eat three large meals a day.\""
    ],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "Dumping Syndrome Management",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Dumping syndrome** occurs when food moves too quickly from the stomach into the small intestine. **Lying down after meals** helps slow the passage of food. Clients should also eat small, frequent meals and **avoid fluids with meals**.\n\n**Why each option is wrong:**\n\n- **A.** Fluids with meals speed up gastric emptying.\n- **B. High-carb/sugar foods** — trigger the rapid fluid shift and insulin spike that cause the symptoms.\n- **D.** Small, frequent meals are necessary.",
    memoryTip: "DUMPING = DON'T DRINK & DO LIE DOWN. Slow down the 'dump' of food into the intestine by avoiding water with meals and taking a nap after eating.",
    difficulty: 2
  },
  {
    id: "MS-Q186",
    text: "A client is diagnosed with diverticulitis. Which dietary instruction is appropriate during the acute inflammatory phase?",
    options: [
      "High-fibre diet with plenty of seeds and nuts",
      "Low-residue (low-fibre) diet",
      "High-protein, high-fat diet",
      "Clear liquid diet only"
    ],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Diverticulitis Acute Management",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "During the **acute phase of diverticulitis** (inflammation of the diverticula), the goal is to rest the bowel. A **low-residue (low-fibre) diet** or even NPO/clear liquids is used until the inflammation subsides. A high-fibre diet is used for **prevention** (diverticulosis), not during an acute attack.\n\n**Why each option is wrong:**\n\n- **A.** High fibre is for **prevention**, but it's too irritating during an acute attack.\n- **C and D** are not the standard approach for acute diverticulitis management.",
    memoryTip: "DIVERTICULITIS = DIET DOWN. When it's 'itis' (inflamed), keep the fibre low. When it's 'osis' (just there), keep the fibre high to prevent the 'itis'.",
    difficulty: 2
  },
  {
    id: "MS-Q187",
    text: "A nurse is assessing a client with suspected peritonitis. Which clinical manifestation is a hallmark sign?",
    options: ["Hyperactive bowel sounds", "Soft, non-tender abdomen", "Rigid, board-like abdomen and rebound tenderness", "Increased appetite"],
    correctAnswerIndex: 2,
    category: "Gastrointestinal System",
    topic: "Peritonitis Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Peritonitis** (inflammation of the peritoneal lining) is a surgical emergency. Hallmark signs include a **rigid, board-like abdomen**, severe pain, **rebound tenderness**, and absent or diminished bowel sounds.\n\n**Why each option is wrong:**\n\n- **A.** Bowel sounds are usually **absent or diminished** (paralytic ileus).\n- **B.** The abdomen is extremely tender and rigid.\n- **D.** The client will have anorexia, nausea, and vomiting.",
    memoryTip: "PERITONITIS = PERILOUS PAIN. The 'board-like' belly is the body's way of protecting the inflamed organs inside.",
    difficulty: 1
  },
  {
    id: "MS-Q188",
    text: "A client is scheduled for a colonoscopy. What is the nurse's primary responsibility in the pre-operative period?",
    options: [
      "Administering the bowel preparation (e.g., polyethylene glycol)",
      "Performing the biopsy during the procedure",
      "Explaining the risks and benefits of the procedure",
      "Administering general anaesthesia"
    ],
    correctAnswerIndex: 0,
    category: "Gastrointestinal System",
    topic: "Colonoscopy Prep",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The nurse's primary role in preparing a client for a colonoscopy is ensuring the **bowel preparation** is completed successfully. A clear view of the colon is essential for an accurate exam.\n\n**Why each option is wrong:**\n\n- **B.** This is the physician's role.\n- **C.** This is the physician's role (obtaining informed consent).\n- **D.** Colonoscopy is usually done under conscious sedation, not general anaesthesia.",
    memoryTip: "COLONOSCOPY = CLEAN COLON. If the prep isn't done right, the doctor can't see anything. The nurse is the 'coach' for the bowel prep.",
    difficulty: 1
  },
  {
    id: "MS-Q189",
    text: "A nurse is caring for a client with hepatic encephalopathy. Which medication would the nurse expect to administer to reduce serum ammonia levels?",
    options: ["Lactulose", "Spironolactone", "Propranolol", "Vitamin K"],
    correctAnswerIndex: 0,
    category: "Gastrointestinal System",
    topic: "Hepatic Encephalopathy Treatment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Lactulose** is the primary treatment for hepatic encephalopathy. It works by trapping ammonia in the gut and promoting its excretion through **frequent, soft stools**.\n\n**Why each option is wrong:**\n\n- **B. Spironolactone** — is a diuretic used to treat ascites.\n- **C. Propranolol** — is used to prevent bleeding from oesophageal varices.\n- **D. Vitamin K** — is used to correct clotting abnormalities.",
    memoryTip: "LACTULOSE = LOOSE STOOLS = LOWER AMMONIA. The goal is 2-3 soft stools a day to 'poop out' the toxins that make the brain confused.",
    difficulty: 1
  },
  {
    id: "MS-Q190",
    text: "A client is diagnosed with a small bowel obstruction. Which acid-base imbalance is most likely to occur due to persistent vomiting?",
    options: ["Metabolic acidosis", "Metabolic alkalosis", "Respiratory acidosis", "Respiratory alkalosis"],
    correctAnswerIndex: 1,
    category: "Gastrointestinal System",
    topic: "Vomiting and Acid-Base Imbalance",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "Persistent vomiting causes the loss of **hydrochloric acid (HCl)** from the stomach. The loss of acid leads to an excess of bicarbonate in the blood, resulting in **metabolic alkalosis**.\n\n**Why each option is wrong:**\n\n- **A. Metabolic acidosis** — is more common with severe **diarrhoea** (loss of base).\n- **C and D** are respiratory issues related to CO2 levels.",
    memoryTip: "VOMITING = ALKALOSIS (Vomit is 'Up', pH goes 'Up'). DIARRHOEA = ACIDOSIS (Diarrhoea is 'Down', pH goes 'Down').",
    difficulty: 2
  },
  {
    id: "MS-Q191",
    text: "A nurse is caring for a client with a history of chronic kidney disease (CKD). Which electrolyte imbalance is most common and life-threatening in this condition?",
    options: ["Hypokalaemia", "Hyperkalaemia", "Hyponatremia", "Hypocalcaemia"],
    correctAnswerIndex: 1,
    category: "Renal System",
    topic: "CKD Electrolyte Imbalance",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Hyperkalaemia** (high potassium) is the most dangerous electrolyte imbalance in CKD because the kidneys cannot excrete potassium. High levels can lead to fatal cardiac arrhythmias.\n\n**Why each option is wrong:**\n\n- **A.** CKD causes **hyper**kalaemia.\n- **C and D** are common in CKD but are usually not as immediately life-threatening as hyperkalaemia.",
    memoryTip: "CKD = KILLS with K+ (Potassium). If the kidneys stop working, the potassium builds up and can stop the heart.",
    difficulty: 1
  },
  {
    id: "MS-Q192",
    text: "A client is diagnosed with nephrotic syndrome. Which clinical manifestation is a hallmark sign of this condition?",
    options: ["Grossly bloody urine", "Massive proteinuria and severe oedema", "Hypertension and fever", "Decreased serum cholesterol"],
    correctAnswerIndex: 1,
    category: "Renal System",
    topic: "Nephrotic Syndrome Hallmark",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Nephrotic syndrome** is characterized by massive damage to the glomerular membrane, leading to **massive proteinuria**, hypoalbuminaemia, and **severe generalized oedema (anasarca)**. Hyperlipidaemia is also a common finding.\n\n**Why each option is wrong:**\n\n- **A.** Is more common in nephritic syndrome (glomerulonephritis).\n- **C.** Hypertension can occur but is not the hallmark.\n- **D.** Cholesterol is usually **increased**.",
    memoryTip: "NEPHROTIC = PROTEIN. The 'O' in Nephrotic reminds you of the 'O' in Protein. You lose so much protein that the fluid leaks out everywhere (oedema).",
    difficulty: 2
  },
  {
    id: "MS-Q193",
    text: "A nurse is providing care for a client receiving haemodialysis. Which assessment finding is normal for a functioning arteriovenous (AV) fistula?",
    options: ["A palpable thrill and an audible bruit", "Redness and warmth at the site", "Absence of a pulse distal to the fistula", "Pain and swelling in the arm"],
    correctAnswerIndex: 0,
    category: "Renal System",
    topic: "AV Fistula Assessment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "A functioning AV fistula should have a **palpable thrill** (vibration) and an **audible bruit** (whooshing sound). These indicate that blood is flowing at high pressure from the artery into the vein.\n\n**Why each option is wrong:**\n\n- **B.** Indicates infection.\n- **C.** Indicates a lack of blood flow (ischaemia).\n- **D.** Indicates potential complication like thrombosis or infection.",
    memoryTip: "FISTULA = FEEL the THRILL, HEAR the BRUIT. If you don't feel the vibration, the fistula might be clotted.",
    difficulty: 1
  },
  {
    id: "MS-Q194",
    text: "A client is diagnosed with acute kidney injury (AKI). Which phase is characterized by a sudden decrease in urine output to less than 400 mL/day?",
    options: ["Onset phase", "Oliguric phase", "Diuretic phase", "Recovery phase"],
    correctAnswerIndex: 1,
    category: "Renal System",
    topic: "AKI Phases",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "The **oliguric phase** of AKI is characterized by a significant drop in urine output (**<400 mL/day**). This is when electrolyte imbalances (like hyperkalaemia) and fluid overload are most likely to occur.\n\n**Why each option is wrong:**\n\n- **A.** Onset is the initial injury.\n- **C. Diuretic phase** — is when urine output starts to increase rapidly but the kidneys still can't concentrate it.\n- **D.** Recovery is when kidney function returns to normal.",
    memoryTip: "OLIGURIC = ONLY a little urine. This is the most dangerous phase where the body holds onto all the waste and water.",
    difficulty: 1
  },
  {
    id: "MS-Q195",
    text: "A nurse is assessing a client with suspected urolithiasis (kidney stones). Which clinical manifestation is most characteristic?",
    options: ["Dull, aching pain in the lower abdomen", "Severe, colicky flank pain radiating to the groin", "Increased urine output", "Hypotension"],
    correctAnswerIndex: 1,
    category: "Renal System",
    topic: "Urolithiasis Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Renal colic** — severe, sharp, stabbing pain in the flank that radiates to the groin or genitals — is the classic sign of a kidney stone moving through the ureter.\n\n**Why each option is wrong:**\n\n- **A.** The pain is usually sharp and severe, not dull.\n- **C.** Stones often cause **haematuria** (blood in urine) and decreased output if they cause an obstruction.\n- **D.** Pain often causes **hypertension** and tachycardia.",
    memoryTip: "STONES = STABBING pain. The pain 'moves' from the back to the front as the stone moves down the tube.",
    difficulty: 1
  },
  {
    id: "MS-Q196",
    text: "A client is scheduled for an intravenous pyelogram (IVP). Which question is most important for the nurse to ask before the procedure?",
    options: [
      "\"Are you allergic to shellfish or iodine?\"",
      "\"When was the last time you ate?\"",
      "\"Do you have a history of high blood pressure?\"",
      "\"Are you afraid of needles?\""
    ],
    correctAnswerIndex: 0,
    category: "Renal System",
    topic: "IVP Pre-procedure Assessment",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "An **IVP** uses an **iodinated contrast dye** to visualize the urinary tract. It is critical to check for **allergies to iodine or shellfish**, as these clients are at high risk for a severe anaphylactic reaction.\n\n**Why each option is wrong:**\n\n- **B.** NPO status is important but not as critical as the allergy check.\n- **C and D** are relevant but not the priority safety question.",
    memoryTip: "IVP = IODINE. Always check for 'Shrimp and Shellfish' allergies before giving contrast dye!",
    difficulty: 1
  },
  {
    id: "MS-Q197",
    text: "A nurse is caring for a client with polycystic kidney disease (PKD). The nurse understands that the primary goal of management is to:",
    options: [
      "Cure the genetic defect",
      "Control blood pressure and slow the progression of renal failure",
      "Surgically remove all the cysts",
      "Restrict fluid intake to 500 mL per day"
    ],
    correctAnswerIndex: 1,
    category: "Renal System",
    topic: "PKD Management Goal",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "There is no cure for **PKD**. The goal of management is to **control hypertension** (which accelerates the damage) and manage symptoms to slow the progression toward end-stage renal disease (ESRD).\n\n**Why each option is wrong:**\n\n- **A.** It's a genetic disease; there is no cure.\n- **C.** Removing cysts is not practical as they are too numerous and throughout the kidney tissue.\n- **D.** Fluid restriction is usually not needed until the very late stages of renal failure.",
    memoryTip: "PKD = PRESSURE control. Keeping the blood pressure low is the best way to protect the kidneys from the growing cysts.",
    difficulty: 1
  },
  {
    id: "MS-Q198",
    text: "A client is diagnosed with cystitis (bladder infection). Which instruction should the nurse provide to prevent recurrence?",
    options: [
      "\"Wipe from back to front after using the toilet.\"",
      "\"Drink at least 2-3 litres of fluid daily.\"",
      "\"Wear tight-fitting nylon underwear.\"",
      "\"Avoid urinating after sexual intercourse.\""
    ],
    correctAnswerIndex: 1,
    category: "Renal System",
    topic: "Cystitis Prevention",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "To prevent UTIs, clients should **increase fluid intake** to flush bacteria out of the urinary tract. Other measures include wiping from **front to back**, wearing cotton underwear, and urinating after intercourse.\n\n**Why each option is wrong:**\n\n- **A.** Should wipe **front to back** to avoid bringing E. coli from the anus to the urethra.\n- **C.** Cotton is better as it allows for air circulation.\n- **D.** Urinating after sex helps flush out any bacteria that entered the urethra.",
    memoryTip: "UTI = UP the fluids and FRONT to BACK. Flush the system and keep the 'bugs' away from the entrance.",
    difficulty: 1
  },
  {
    id: "MS-Q199",
    text: "A nurse is assessing a client with suspected bladder cancer. Which clinical manifestation is most common?",
    options: ["Painful urination (dysuria)", "Painless haematuria (blood in urine)", "Urinary frequency", "Low back pain"],
    correctAnswerIndex: 1,
    category: "Renal System",
    topic: "Bladder Cancer Manifestation",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Painless haematuria** is the most common and often the only early sign of bladder cancer. Any adult with unexplained blood in the urine should be investigated for malignancy.\n\n**Why each option is wrong:**\n\n- **A, C, and D** can occur but are usually later signs or associated with other conditions like UTIs or stones.",
    memoryTip: "BLADDER CANCER = BLOOD but NO PAIN. If you see red but it doesn't hurt, it's a major 'red flag' for cancer.",
    difficulty: 1
  },
  {
    id: "MS-Q200",
    text: "A client is receiving peritoneal dialysis. The nurse notes that the outflow (effluent) is cloudy. What is the nurse's priority action?",
    options: [
      "Document the finding as normal.",
      "Notify the physician immediately as this indicates peritonitis.",
      "Slow down the rate of the next exchange.",
      "Warm the dialysate before the next exchange."
    ],
    correctAnswerIndex: 1,
    category: "Renal System",
    topic: "Peritoneal Dialysis Complication",
    sourcePaper: "NCK KRN Comprehensive Med-Surg Exam",
    explanation: "**Cloudy outflow** is the earliest and most important sign of **peritonitis** in a client receiving peritoneal dialysis. The nurse must notify the physician immediately so that antibiotics can be started.\n\n**Why each option is wrong:**\n\n- **A.** It is not normal; it's a sign of infection.\n- **C and D** do not address the underlying infection.",
    memoryTip: "PD OUTFLOW = CLEAR. If it looks like 'lemonade' or is cloudy, it's infected. It should look like clear water or light straw-coloured fluid.",
    difficulty: 2
  }
];
