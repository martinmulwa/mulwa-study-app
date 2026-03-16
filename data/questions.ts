
import { Question } from '../types';
import { SEPTEMBER_2023_PAPER_2 } from './paper2';
import { MED_SURG_EXAM_PAPER_PART1, MED_SURG_EXAM_PAPER_PART2 } from './medSurgPaper';
import { NCK_KRN_PAPER } from './nckKrnPaper';

export const SEPTEMBER_2023_PAPER: Question[] = [
  {
    id: "Q1",
    text: "What is the basic unit of life?",
    options: ["Tissue", "Organ", "Cell", "System"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Cell Biology",
    subtopic: "Cell Structure",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cell is the smallest unit that can carry out all basic functions of life on its own — it takes in nutrients, produces energy, grows, responds to its environment, and reproduces. The human body contains approximately 37 trillion cells. This is one of the central principles of Cell Theory.\n\n**Why each option is wrong:**\n\n- **A. Tissue** — a tissue is a group of similar cells working together (e.g. muscle tissue, nerve tissue). It is bigger and more complex than a cell, so it cannot be the basic (smallest) unit.\n- **B. Organ** — an organ is made of two or more different tissues working together (e.g. the heart is made of cardiac muscle tissue, connective tissue, and nerve tissue). Even more complex than a tissue.\n- **D. System** — a system (e.g. digestive system, nervous system) is the largest level of organisation, made of several organs working together. The complete opposite of \"basic.\"",
    memoryTip: "Clever Tigers Often Swim = Cell, Tissue, Organ, System. Cell is always first because it is the smallest and most basic.",
    difficulty: 1
  },
  {
    id: "Q2",
    text: "Which of the following is NOT a function of the skeletal system?",
    options: ["Support", "Protection", "Movement", "Digestion"],
    correctAnswerIndex: 3,
    unit: "Anatomy & Physiology",
    topic: "Skeletal System",
    subtopic: "Functions of the Skeleton",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The skeleton has nothing to do with digestion — the breakdown and absorption of food. Digestion is entirely the job of the digestive system (stomach, intestines, liver, etc.). Bone is hard, rigid tissue that does not produce digestive enzymes, does not break down food, and does not absorb nutrients.\n\n**Why each option is wrong (i.e. they ARE genuine skeletal functions):**\n\n- **A. Support** — the skeleton is the body's structural framework. Without it, your body would collapse like a deflated balloon. Bones give the body its shape and hold up its weight.\n- **B. Protection** — the skull protects the brain; the rib cage protects the heart and lungs; the vertebrae protect the spinal cord; the pelvis protects pelvic organs.\n- **C. Movement** — bones act as levers that muscles pull on to create movement. Without bones, muscles would have nothing to pull against.",
    memoryTip: "Seriously Protect My Blood So Move: Support, Protection, Movement, Blood cell production, Storage of minerals, Metabolic function.",
    difficulty: 1
  },
  {
    id: "Q3",
    text: "The muscular system is responsible for:",
    options: ["Protection of organs", "Movement of the body", "Production of blood cells", "Storage of minerals"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Muscular System",
    subtopic: "Functions of Muscles",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The primary function of the muscular system is movement. Muscles contract (shorten) and relax to pull on bones, move joints, and create all body movements — from walking and running to swallowing and blinking. There are over 600 muscles in the human body, accounting for approximately 40% of total body weight.\n\n**Why each option is wrong:**\n\n- **A. Protection of organs** — protection is primarily a function of the skeletal system (skull, rib cage, vertebral column). While abdominal muscles do provide some soft-tissue protection, this is not the muscular system's primary function.\n- **C. Production of blood cells** — blood cell production (haematopoiesis) occurs in the red bone marrow inside certain bones. This is a skeletal system function.\n- **D. Storage of minerals** — calcium and phosphorus are stored in bone (skeletal system). Muscles store glycogen (energy fuel) but not minerals.",
    memoryTip: "Muscles Move. Both start with M. Think of your muscles as the body's motors.",
    difficulty: 1
  },
  {
    id: "Q4",
    text: "Which type of muscle is found in the heart?",
    options: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Voluntary muscle"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Muscular System",
    subtopic: "Types of Muscle Tissue",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Cardiac muscle is found only in the heart — and nowhere else in the body. It is involuntary (you cannot consciously control your heartbeat — your heart beats automatically even when you sleep). It is striated (has a striped appearance under a microscope). It contains intercalated discs — special connections between cells that allow electrical signals to pass rapidly so all heart cells contract together as one coordinated unit. It is extremely fatigue-resistant, beating approximately 100,000 times per day.\n\n**Why each option is wrong:**\n\n- **A. Skeletal muscle** — attached to bones and creates voluntary movement (e.g. biceps, quadriceps). You consciously control it. Not found in the heart.\n- **B. Smooth muscle** — lines the walls of hollow organs and tubes (blood vessels, intestines, stomach, bladder, uterus). It is involuntary but does not have striations and is not found in the heart.\n- **D. Voluntary muscle** — this is simply another name for skeletal muscle. Since heart muscle is involuntary (you cannot choose to stop it), it is by definition not voluntary muscle.\n\n| Muscle Type | Location | Control | Striations |\n| :--- | :--- | :--- | :--- |\n| Skeletal | Attached to bones | Voluntary | Yes |\n| Cardiac | Heart only | Involuntary | Yes |\n| Smooth | Hollow organs/vessels | Involuntary | No |",
    memoryTip: "CARDIAC = CARDIO = HEART. The word cardiac literally means 'relating to the heart' (from Greek kardia).",
    difficulty: 2
  },
  {
    id: "Q5",
    text: "The nervous system is divided into:",
    options: ["Sensory and motor systems", "Central and peripheral nervous systems", "Sympathetic and parasympathetic systems", "Somatic and autonomic systems"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "System Organisation",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The primary anatomical division of the nervous system — the most fundamental way it is classified — is into the Central Nervous System (CNS) and the Peripheral Nervous System (PNS). The CNS consists of the brain and spinal cord (the command centre). The PNS consists of all nerves outside the brain and spinal cord (the wiring connecting the CNS to the rest of the body).\n\n**Why each option is wrong:**\n\n- **A. Sensory and motor** — these describe the direction of nerve signal travel. Sensory (afferent) carries signals toward the CNS; motor (efferent) carries commands away from the CNS. These are functional descriptions of nerve fibres, not the primary structural division.\n- **C. Sympathetic and parasympathetic** — these are the two branches of the Autonomic Nervous System (ANS), which is itself a subdivision of the PNS. This is a third-level division, not the primary one.\n- **D. Somatic and autonomic** — these are the two divisions of the peripheral nervous system specifically. A correct division, but it is the second level — a subdivision of the PNS — not the top-level primary division.\n\n**Nervous system hierarchy:**\n\n- Nervous System\n  - CNS (Brain + Spinal Cord)\n  - PNS (All other nerves)\n    - Somatic (voluntary — skeletal muscles)\n    - Autonomic (involuntary — organs)\n      - Sympathetic (fight or flight)\n      - Parasympathetic (rest and digest)",
    memoryTip: "Central = Brain/Spine (the center). Peripheral = Everything else (the edges/periphery).",
    difficulty: 2
  },
  {
    id: "Q6",
    text: "Which organ is part of the digestive system?",
    options: ["Kidney", "Liver", "Lung", "Heart"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Digestive System",
    subtopic: "Digestive Organs",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The liver is a major digestive organ. Its digestive functions include producing bile (a fluid stored in the gallbladder and released into the small intestine to break down fats), metabolising nutrients absorbed from the intestines (processing sugars, proteins, and fats), and detoxifying drugs, alcohol, and toxins from the blood. It is also the largest internal organ, weighing approximately 1.5 kg.\n\n**Why each option is wrong:**\n\n- **A. Kidney** — part of the urinary system. It filters blood and produces urine.\n- **C. Lung** — part of the respiratory system. It exchanges gases (oxygen in, carbon dioxide out).\n- **D. Heart** — part of the cardiovascular system. It pumps blood around the body.",
    memoryTip: "Digestive organs: Mouth → Pharynx → Esophagus → Stomach → Small intestine → Large intestine → Rectum → Anus. Accessory organs: Liver, Gallbladder, Pancreas.",
    difficulty: 1
  },
  {
    id: "Q7",
    text: "The respiratory system is responsible for:",
    options: ["Pumping blood", "Gas exchange", "Filtering waste", "Producing hormones"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Respiratory System",
    subtopic: "System Functions",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The primary function of the respiratory system is gas exchange — bringing oxygen (O₂) into the body and expelling carbon dioxide (CO₂). This process occurs in the alveoli (tiny air sacs in the lungs), where O₂ crosses from inhaled air into the bloodstream and CO₂ crosses from the blood back into the air to be exhaled. All body cells need oxygen to produce energy; CO₂ is a waste product of that energy production.\n\n**Why each option is wrong:**\n\n- **A. Pumping blood** — this is the function of the heart (cardiovascular system). The lungs receive blood for oxygenation but do not pump it.\n- **C. Filtering waste** — filtering blood waste is primarily the function of the kidneys (urinary system). While the lungs do remove CO₂ (a metabolic waste gas), they are not described primarily as a waste filtering organ.\n- **D. Producing hormones** — this is the function of the endocrine system (pituitary, thyroid, adrenal glands, etc.). The respiratory system does not produce hormones.",
    memoryTip: "Respiration = Re-oxygenation. Breathing in O2, out CO2. Think of the lungs as the body's air filter.",
    difficulty: 1
  },
  {
    id: "Q8",
    text: "Which of the following is a component of blood?",
    options: ["Neurons", "Nephrons", "Platelets", "Alveoli"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Blood & Haematology",
    subtopic: "Blood Components",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Platelets (thrombocytes) are one of the four main components of blood. They are tiny cell fragments produced in the bone marrow from large cells called megakaryocytes. Their primary function is haemostasis (blood clotting) — when a blood vessel is damaged, platelets rush to the site, stick together, and form a plug to stop bleeding. Without enough platelets, even a minor cut would bleed uncontrollably.\n\n**The four components of blood:**\n\n1. Red blood cells (erythrocytes) — carry oxygen\n2. White blood cells (leucocytes) — fight infection\n3. Platelets (thrombocytes) — blood clotting\n4. Plasma — the liquid component that carries everything\n\n**Why each option is wrong:**\n\n- **A. Neurons** — nerve cells that transmit electrical signals. They are part of the nervous system. They do not circulate in the blood.\n- **B. Nephrons** — the microscopic functional units of the kidney that filter blood to form urine. They are kidney tissue structures, not blood cells.",
    memoryTip: "RWPP = Red, White, Platelets, Plasma. None of the wrong options (neurons, nephrons, alveoli) are blood components — they each belong to a completely different organ system.",
    difficulty: 1
  },
  {
    id: "Q9",
    text: "The cardiovascular system consists of:",
    options: ["Heart and blood vessels", "Lungs and airways", "Kidneys and bladder", "Stomach and intestines"],
    correctAnswerIndex: 0,
    unit: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "System Overview",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cardiovascular system (also called the circulatory system) consists of the heart (the muscular pump that drives blood circulation) and blood vessels (arteries, veins, and capillaries — the network of tubes through which blood travels). Together they form a closed loop that continuously circulates blood, delivering oxygen and nutrients to all cells and removing waste products.\n\n**Why each option is wrong:**\n\n- **B. Lungs and airways** — these form the respiratory system. The lungs interact closely with the cardiovascular system (receiving blood for oxygenation) but are not part of it.\n- **C. Kidneys and bladder** — these form the urinary system.\n- **D. Stomach and intestines** — these are part of the digestive system.",
    memoryTip: "CARDIOvascular = CARDIO (heart) + VASCULAR (blood vessels). The word itself tells you exactly what the system contains.",
    difficulty: 1
  },
  {
    id: "Q10",
    text: "Which gland is known as the \"master gland\"?",
    options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Pineal gland"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Pituitary Gland",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The pituitary gland is a pea-sized gland at the base of the brain, connected to the hypothalamus by a stalk. It is called the \"master gland\" because it controls most other endocrine glands by secreting tropic hormones — hormones whose job is to target and regulate other glands. Pituitary hormones include: TSH (stimulates the thyroid), ACTH (stimulates the adrenal gland), FSH and LH (control reproductive organs), GH (growth hormone), ADH (controls kidney water reabsorption), oxytocin, and prolactin.\n\n**Why each option is wrong:**\n\n- **A. Thyroid gland** — produces thyroxine to regulate metabolism. It is controlled by the pituitary (via TSH). It is a subject, not the master.\n- **B. Adrenal gland** — produces cortisol, aldosterone, and adrenaline. It is also controlled by the pituitary (via ACTH). Not the master.\n- **D. Pineal gland** — produces melatonin, which regulates the sleep-wake cycle (circadian rhythm). It does not control other glands.",
    memoryTip: "Pituitary = the Principal of the endocrine school — it tells all the other glands what to do.",
    difficulty: 2
  },
  {
    id: "Q11",
    text: "The integumentary system includes:",
    options: ["Bones and joints", "Skin, hair, and nails", "Muscles and tendons", "Nerves and brain"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Integumentary System",
    subtopic: "System Components",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The integumentary system (from Latin integumentum = covering) is the body's external covering system. It includes the skin (the body's largest organ), hair, nails, sweat glands, and sebaceous (oil) glands. Its functions include protection (from UV radiation, pathogens, and physical damage), temperature regulation, sensation (touch, pain, temperature, pressure), vitamin D synthesis, and minor excretion through sweat.\n\n**Why each option is wrong:**\n\n- **A. Bones and joints** — these form the skeletal system. They are internal hard structures, not the external covering.\n- **C. Muscles and tendons** — these form the muscular system. They are internal soft tissue structures.\n- **D. Nerves and brain** — these form the nervous system. While sensory nerves do extend into the skin to provide sensation, the skin itself belongs to the integumentary system, not the nervous system.",
    memoryTip: "INtegumentary = the body's INtegument (outer envelope/wrapper) = skin + hair + nails.",
    difficulty: 1
  },
  {
    id: "Q12",
    text: "Which organ filters blood and produces urine?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Urinary System",
    subtopic: "Kidney Function",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The kidneys are two bean-shaped organs sitting behind the peritoneum (the lining of the abdominal cavity), one on each side of the spine. They filter approximately 180 litres of blood per day through millions of tiny filtering units called nephrons, producing approximately 1–2 litres of urine per day. The kidneys also regulate blood pressure (via the hormone renin), maintain blood pH, control water and electrolyte balance, and produce erythropoietin (which stimulates red blood cell production).\n\n**Why each option is wrong:**\n\n- **A. Liver** — detoxifies the blood and converts ammonia to urea (which the kidneys then excrete as part of urine), but the liver does not filter blood the same way kidneys do and does not produce urine.\n- **B. Pancreas** — produces digestive enzymes and hormones (insulin and glucagon). Has no role in blood filtration or urine production.\n- **D. Spleen** — filters blood by removing old and damaged red blood cells, and is part of the lymphatic/immune system. However, it does not produce urine.",
    memoryTip: "KIDNEY = KID-ney = the body's built-in KID-ney filter. It filters blood and makes urine. Think of it as the body's water treatment plant.",
    difficulty: 1
  },
  {
    id: "Q13",
    text: "The lymphatic system is involved in:",
    options: ["Digestion", "Immunity", "Reproduction", "Respiration"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Lymphatic & Immune System",
    subtopic: "System Functions",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The lymphatic system has three main functions, with immunity being a primary one. Immunity: lymph nodes contain lymphocytes (T-cells and B-cells) and macrophages that identify and destroy pathogens, cancer cells, and foreign substances. When you have an infection, your lymph nodes often swell and become tender as they fill with immune cells actively fighting the infection. The system also maintains fluid balance (returning excess tissue fluid to the bloodstream, preventing oedema/swelling) and absorbs dietary fats from the small intestine via specialised lymphatic vessels called lacteals.\n\n**Why each option is wrong:**\n\n- **A. Digestion** — digestion is a function of the digestive system. While lymphatic lacteals absorb fats from the digestive tract, the lymphatic system does not digest food.\n- **C. Reproduction** — reproduction is the function of the reproductive system.\n- **D. Respiration** — gas exchange is the function of the respiratory system.",
    memoryTip: "Lymph nodes = the body's security checkpoints. They screen lymph fluid for pathogens, like security at an airport screening passengers.",
    difficulty: 2
  },
  {
    id: "Q14",
    text: "Which bone protects the brain?",
    options: ["Vertebrae", "Skull", "Ribs", "Pelvis"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Skeletal System",
    subtopic: "Axial Skeleton / Cranial Bones",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The skull (cranium) is a set of 22 fused bones forming a hard protective shell around the brain. The cranium (8 bones) surrounds the brain directly, while the facial bones (14 bones) form the face. The skull is specifically designed to absorb and distribute impacts to minimise brain injury.\n\n**Why each option is wrong:**\n\n- **A. Vertebrae** — the 33 bones of the spinal column protect the spinal cord, not the brain. The vertebrae have holes in their centres that align to form the vertebral canal, through which the spinal cord runs.\n- **C. Ribs** — the 12 pairs of ribs form the rib cage, which protects the heart and lungs.\n- **D. Pelvis** — the hip bones protect the pelvic organs (bladder, uterus, rectum).\n\n**Protection summary:**\n\n- Brain → Skull\n- Spinal cord → Vertebrae\n- Heart and lungs → Ribs\n- Pelvic organs → Pelvis",
    memoryTip: "A skull cap/helmet is worn on your head to protect your brain. The skull IS the body's permanent, built-in helmet.",
    difficulty: 1
  },
  {
    id: "Q15",
    text: "The functional unit of the nervous system is:",
    options: ["Nephron", "Neuron", "Alveolus", "Sarcomere"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Nerve Cell Structure",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The neuron (nerve cell) is the basic functional and structural unit of the nervous system, specialised to receive, process, and transmit electrical signals (nerve impulses). The human brain alone contains approximately 86 billion neurons. Each neuron has four main parts: dendrites (receive incoming signals), cell body / soma (processes signals, contains the nucleus), axon (transmits the signal away from the cell body), and axon terminals (release neurotransmitters to pass the signal across to the next cell).\n\n**Why each option is wrong:**\n\n- **A. Nephron** — the functional unit of the kidney. This is the most common exam trap — \"nephron\" and \"neuron\" look and sound very similar. Remember: Nephron = kidney. Neuron = nervous system.\n- **C. Alveolus** — the functional unit of the lungs. These are the tiny air sacs where gas exchange occurs.\n- **D. Sarcomere** — the functional unit of muscle contraction, not the nervous system.",
    memoryTip: "The NANS rule for functional units: Neuron = Nervous system | Alveolus = Airways (lungs) | Nephron = kidNey | Sarcomere = Skeletal muscle.",
    difficulty: 2
  },
  {
    id: "Q16",
    text: "Which type of joint allows the most movement?",
    options: ["Fibrous joint", "Cartilaginous joint", "Synovial joint", "Fixed joint"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Skeletal System",
    subtopic: "Joints",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "A synovial joint is the most common and most freely movable type of joint in the body. They are called \"synovial\" because they contain synovial fluid — a slippery, lubricating liquid inside a sealed joint cavity that allows smooth, frictionless movement. Examples include the knee, hip, shoulder, elbow, wrist, and all finger joints. There are six subtypes of synovial joints (hinge, ball-and-socket, pivot, gliding, saddle, condyloid), each allowing different ranges of movement.\n\n**Why each option is wrong:**\n\n- **A. Fibrous joint** — held together by dense fibrous connective tissue. Allows little to no movement. Best example: the sutures between skull bones — they are fused together and cannot move.\n- **B. Cartilaginous joint** — connected by cartilage (rubbery, flexible tissue). Allows limited movement but not full range. Examples: intervertebral discs between vertebrae, the pubic symphysis (front of the pelvis).\n- **D. Fixed joint** — this is simply another name for a fibrous/immovable joint, the same concept as option A. Fixed = no movement.\n\n| Joint Type | Movement | Example |\n| :--- | :--- | :--- |\n| Fibrous (Fixed) | None or minimal | Skull sutures |\n| Cartilaginous | Limited | Intervertebral discs |\n| Synovial | Most / freely movable | Knee, hip, shoulder |",
    memoryTip: "Synovial = Smooth and Slippery. Synovial fluid is the body's own lubricant. Lubricated = moves freely.",
    difficulty: 2
  },
  {
    id: "Q17",
    text: "The main function of red blood cells is to:",
    options: ["Fight infection", "Clot blood", "Transport oxygen", "Produce antibodies"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Blood & Haematology",
    subtopic: "Red Blood Cell Function",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Red blood cells (RBCs / erythrocytes) are the most abundant cells in blood (approximately 5 million per microlitre). They contain haemoglobin — the iron-containing protein that binds oxygen in the lungs and releases it to body tissues. Each haemoglobin molecule can carry four oxygen molecules. RBCs are biconcave disc-shaped and lack a nucleus when mature, maximising the space available for haemoglobin. They also transport approximately 20–23% of carbon dioxide back to the lungs.\n\n**Why each option is wrong:**\n\n- **A. Fight infection** — this is the role of white blood cells (leucocytes) — neutrophils, lymphocytes, and macrophages. Red blood cells have no immune function.\n- **B. Clot blood** — blood clotting is the role of platelets and clotting factors such as fibrinogen. Red blood cells are not involved in initiating clotting.\n- **D. Produce antibodies** — antibodies (immunoglobulins) are produced by B lymphocytes (specifically plasma cells, which are differentiated B lymphocytes). Red blood cells do not produce antibodies.",
    memoryTip: "When RBCs are full of oxygen, blood is bright red (oxyhaemoglobin). Low haemoglobin = anaemia = tiredness, paleness, and breathlessness, because tissues are not receiving enough oxygen.",
    difficulty: 1
  },
  {
    id: "Q18",
    text: "Which structure connects muscle to bone?",
    options: ["Ligament", "Tendon", "Cartilage", "Fascia"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Muscular System",
    subtopic: "Connective Tissue / Muscle Attachments",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "A tendon is a tough, flexible cord of dense connective tissue (made mainly of collagen fibres) that attaches a muscle to a bone. When a muscle contracts, the force is transmitted through the tendon to pull on the bone and create movement. The most famous example is the Achilles tendon at the back of the ankle, connecting the calf muscles (gastrocnemius and soleus) to the heel bone (calcaneus). Tendons are incredibly strong but have a limited blood supply, which is why tendon injuries heal slowly.\n\n**Why each option is wrong:**\n\n- **A. Ligament** — a ligament connects bone to bone, not muscle to bone. Ligaments stabilise joints and prevent excessive movement. For example, the anterior cruciate ligament (ACL) in the knee connects the femur to the tibia.\n- **C. Cartilage** — a firm, flexible connective tissue that covers the ends of bones at joints (articular cartilage) and acts as a shock absorber. It does not connect muscle to bone.\n- **D. Fascia** — a sheet of connective tissue that wraps around and encloses muscles, providing organisation and separating muscle groups. It surrounds muscles but does not specifically attach them to bone.",
    memoryTip: "Tendons = Tie muscle To bone (three T's). Ligaments = Link bone to bone (two L's).",
    difficulty: 2
  },
  {
    id: "Q19",
    text: "The smallest blood vessels are called:",
    options: ["Arteries", "Veins", "Capillaries", "Venules"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Blood Vessels",
    subtopic: "Capillaries",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Capillaries are the tiniest blood vessels in the body. Their walls are only one cell thick (a single layer of endothelial cells). This ultra-thin wall is essential because it allows the exchange of gases, nutrients, hormones, and waste between the blood and the surrounding tissues. Capillaries are so narrow (approximately 5–10 micrometres in diameter) that red blood cells must pass through them single file. If you uncoiled all the capillaries in your body and laid them end to end, they would stretch approximately 40,000 km.\n\n**Why each option is wrong:**\n\n- **A. Arteries** — the largest blood vessels. They carry blood away from the heart under high pressure and have thick, muscular, elastic walls. The aorta is the largest artery in the body.\n- **B. Veins** — carry blood toward the heart. They are larger than capillaries, have thinner walls than arteries, and contain valves to prevent backflow (particularly important in the legs, where blood must travel against gravity).\n- **D. Venules** — small veins that collect blood from capillaries and drain it into larger veins. They are larger than capillaries but smaller than veins — still not the smallest.\n\n**Blood vessel size order:** Aorta → Arteries → Arterioles → Capillaries (smallest) → Venules → Veins → Vena cava",
    memoryTip: "CAPillaries = CAPture the exchange. All real substance exchange between blood and body tissues happens at the capillary level.",
    difficulty: 1
  },
  {
    id: "Q20",
    text: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Brain Anatomy",
    subtopic: "Cerebellum",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cerebellum (Latin: \"little brain\") is located at the back and bottom of the brain. Despite being only about 10% of brain volume, it contains over 50% of all brain neurons. Its main functions are: coordination of voluntary movement (making movements smooth and precise), balance and equilibrium (maintaining upright posture), fine motor control (precise movements like writing and playing instruments), and muscle tone. When the cerebellum is damaged, people develop ataxia — a wide, staggering, uncoordinated gait that can look similar to intoxication.\n\n**Why each option is wrong:**\n\n- **A. Cerebrum** — the largest part of the brain, forming the two large cerebral hemispheres. It controls conscious thought, voluntary movement, sensation, language, memory, emotions, and intelligence. It does not primarily control balance.\n- **C. Medulla oblongata** — the lowest part of the brainstem, controlling vital automatic functions like breathing, heart rate, and blood pressure. Not responsible for balance.\n- **D. Hypothalamus** — deep inside the brain, it controls homeostasis — regulating body temperature, hunger, thirst, sleep cycles, and emotions. It also controls the pituitary gland. Not responsible for balance.\n\n| Brain Part | Key Function |\n| :--- | :--- |\n| Cerebrum | Thinking, consciousness, voluntary movement |\n| Cerebellum | Balance, coordination, fine motor control |\n| Medulla oblongata | Breathing, heart rate, blood pressure |\n| Hypothalamus | Homeostasis, temperature, hunger, thirst |",
    memoryTip: "CereBELLum = BELL = BALANCE. Or: 'Little brain at the BACK = BALANCE and coordination.'",
    difficulty: 2
  },
  {
    id: "Q21",
    text: "The trachea is part of which system?",
    options: ["Digestive system", "Respiratory system", "Circulatory system", "Nervous system"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Respiratory System",
    subtopic: "Respiratory Tract Anatomy",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The trachea (windpipe) is a rigid tube approximately 12 cm long and 2.5 cm wide, reinforced by C shaped rings of cartilage that keep it permanently open. It carries air from the larynx (voice box) down to the bronchi, which then branch into each lung. It is a central structure of the respiratory tract: nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.\n\n**Why each option is wrong:**\n\n- **A. Digestive system** — the digestive tube is the esophagus (oesophagus), which runs immediately behind the trachea in the neck. The esophagus carries food; the trachea carries air. They are side by side but go to completely different destinations — which is why food can occasionally \"go down the wrong way\" and cause choking.\n- **C. Circulatory system** — consists of the heart and blood vessels. The trachea is an airway tube, not a blood vessel.\n- **D. Nervous system** — consists of nerve tissue (brain, spinal cord, nerves). The trachea is cartilaginous airway tissue, not neural tissue.",
    memoryTip: "You can feel the ridges of the trachea in your neck — those ridges are the cartilage rings. It is your windpipe. Wind = air = respiratory system.",
    difficulty: 1
  },
  {
    id: "Q22",
    text: "Which hormone regulates blood sugar levels?",
    options: ["Thyroxine", "Adrenaline", "Insulin", "Cortisol"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Pancreatic Hormones",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Insulin is produced by the beta cells of the islets of Langerhans in the pancreas. It is the primary regulator of blood glucose. After eating, blood glucose rises → the pancreas releases insulin → insulin acts like a key that unlocks cells so glucose can enter → blood glucose returns to normal. In type 1 diabetes, the pancreas does not produce insulin. In type 2 diabetes, cells become resistant to insulin's effects. Both result in high blood sugar (hyperglycaemia), which is harmful to blood vessels, nerves, and organs over time.\n\n**Why each option is wrong:**\n\n- **A. Thyroxine** — produced by the thyroid gland, it regulates the body's overall metabolic rate (how fast the body uses energy). While it affects metabolism and therefore glucose utilisation, it is not the primary blood glucose regulator.\n- **B. Adrenaline** — the fight-or-flight hormone from the adrenal medulla. It actually raises blood sugar (by breaking down glycogen stores for quick energy during stress) but is not the primary blood glucose regulator.\n- **D. Cortisol** — the stress hormone from the adrenal cortex. It also raises blood sugar during stress. However, it is not the primary, ongoing blood glucose regulator — insulin is.",
    memoryTip: "INsulin = INvites glucose IN to cells. No insulin = glucose locked outside cells = accumulates in the blood = dangerously high blood sugar.",
    difficulty: 1
  },
  {
    id: "Q23",
    text: "The largest organ in the human body is:",
    options: ["Liver", "Brain", "Skin", "Heart"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Integumentary System",
    subtopic: "Skin",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The skin is the largest organ of the human body by both surface area (approximately 1.5–2 square metres in an average adult) and weight (approximately 3–4 kg). It has three layers: the epidermis (outermost waterproof layer containing melanocytes and keratinocytes), the dermis (middle layer containing hair follicles, sweat glands, sebaceous glands, nerve endings, and blood vessels), and the hypodermis / subcutaneous tissue (deepest layer, mostly fat, providing insulation and shock absorption).\n\n**Why each option is wrong:**\n\n- **A. Liver** — the liver is the largest internal organ (approximately 1.5 kg). This is a common and important exam distinction. The liver IS the largest internal organ, but the skin surpasses it as the largest organ overall. Know both facts.\n- **B. Brain** — weighs approximately 1.3–1.4 kg. Large and vital, but far smaller than the skin.\n- **D. Heart** — weighs approximately 250–350 g. Much smaller than the skin.",
    memoryTip: "Skin = the body's SUIT. Your suit covers your entire body; the skin IS the biggest organ. Important exam distinction: 'Largest internal organ = Liver. Largest organ overall = Skin.'",
    difficulty: 1
  },
  {
    id: "Q24",
    text: "Which chamber of the heart pumps oxygenated blood to the body?",
    options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
    correctAnswerIndex: 3,
    unit: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Heart Anatomy",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The left ventricle (LV) is the most powerful chamber of the heart. It receives oxygenated blood from the left atrium (which received it from the lungs via the pulmonary veins) and pumps it through the aortic valve into the aorta — the largest artery in the body — distributing oxygenated blood to the entire body (systemic circulation). Because the left ventricle must pump blood against the high resistance of the entire systemic circulation, it has the thickest muscular walls of all four chambers.\n\n**Why each option is wrong:**\n\n- **A. Right atrium** — receives deoxygenated blood returning from the body via the superior and inferior vena cava. It pumps blood a short distance down into the right ventricle. It does not send blood to the body.\n- **B. Right ventricle** — receives deoxygenated blood from the right atrium and pumps it to the lungs (via the pulmonary artery) to be oxygenated. This is pulmonary circulation. It does not pump oxygenated blood to the body.\n- **C. Left atrium** — receives oxygenated blood from the lungs (via the pulmonary veins) and passes it downward to the left ventricle. It collects and passes on; it does not pump to the body.\n\n**Heart blood flow:**\n\nBody (deoxygenated) → Right Atrium → Right Ventricle → Lungs (oxygenation)\nLungs (oxygenated) → Left Atrium → Left Ventricle → Body (oxygen delivery)",
    memoryTip: "Left Ventricle = the body's Lifeline pump. Left side = oxygenated (bright red) blood. Left ventricle is the last stop before blood goes to the body.",
    difficulty: 2
  },
  {
    id: "Q25",
    text: "The process by which the body maintains a stable internal environment is called:",
    options: ["Metabolism", "Homeostasis", "Adaptation", "Evolution"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Homeostasis",
    subtopic: "Body Regulation",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Homeostasis (from Greek: homoios = similar + stasis = standing still) is the body's ability to maintain a stable internal environment despite constant changes in the external environment. Every body system participates in homeostasis. Examples of what homeostasis maintains: body temperature (37°C), blood glucose (70–110 mg/dL), blood pH (7.35–7.45), blood pressure (120/80 mmHg), and fluid and electrolyte balance.\n\nHomeostasis works through negative feedback loops: when something deviates from normal, the body detects it and takes corrective action to bring it back. Example: body temperature rises → sweat glands activate → sweating cools the body → temperature returns to normal.\n\n**Why each option is wrong:**\n\n- **A. Metabolism** — refers to all chemical reactions occurring in body cells to sustain life (including energy production and building of molecules). While metabolism contributes to homeostasis, metabolism is the process; homeostasis is the state of balance being maintained. They are not the same thing.\n- **C. Adaptation** — refers to long-term changes an organism makes to better survive in its environment (either evolutionary over generations, or physiological over time). Not the same as moment-to-moment internal regulation.\n- **D. Evolution** — the change in genetic characteristics of populations over many generations. Completely unrelated to maintaining internal stability.",
    memoryTip: "HOMEostasis = keeping the body 'HOME' (comfortable and in balance). Think of it as the body's smart home system — constantly monitoring and automatically adjusting temperature, chemistry, and pressure.",
    difficulty: 1
  },
  {
    id: "Q26",
    text: "Which cells are responsible for immune response?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Blood & Haematology",
    subtopic: "Immune Cells",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "White blood cells (WBCs / leucocytes) are the soldiers of the immune system. They are produced in the bone marrow and circulate in much lower numbers than red blood cells (approximately 5,000– 10,000 per microlitre vs. approximately 5 million RBCs). The main types: neutrophils (most common; first responders to bacterial infection, engulf and destroy bacteria), lymphocytes (B-cells make antibodies; T-cells kill infected cells and direct the immune response), monocytes (become macrophages that engulf debris and pathogens), eosinophils (fight parasites; involved in allergic reactions), and basophils (release histamine; involved in allergic and inflammatory responses).\n\n**Why each option is wrong:**\n\n- **A. Red blood cells** — transport oxygen. They have absolutely no immune function.\n- **C. Platelets** — involved in blood clotting (haemostasis). They are not immune cells.\n- **D. Plasma cells** — technically these are immune cells (they are differentiated B lymphocytes that produce antibodies). However, they are a specific subset of white blood cells. The broader, more encompassing correct answer is \"white blood cells,\" which includes all immune cell types including plasma cells.",
    memoryTip: "WHITE = WARRIOR. When a doctor checks your blood count during an infection, they look for a raised white cell count — proof that white blood cells are your immune fighters.",
    difficulty: 1
  },
  {
    id: "Q27",
    text: "The esophagus connects the:",
    options: ["Mouth to the stomach", "Stomach to the small intestine", "Small intestine to the large intestine", "Pharynx to the trachea"],
    correctAnswerIndex: 0,
    unit: "Anatomy & Physiology",
    topic: "Digestive System",
    subtopic: "Upper GI Tract",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The esophagus (oesophagus) is a muscular tube approximately 25 cm long that carries food from the pharynx (throat, at the back of the mouth) down through the chest and diaphragm to the stomach. Food moves through it by rhythmic muscular contractions called peristalsis. The esophagus does not digest food — it is purely a transport tube.\n\n**Why each option is wrong:**\n\n- **B. Stomach to the small intestine** — this connection is controlled by the pyloric valve (pyloric sphincter). The first section of the small intestine, which receives stomach contents, is called the duodenum.\n- **C. Small intestine to the large intestine** — this junction is called the ileocecal valve, where the ileum (final section of the small intestine) meets the cecum (first section of the large intestine).\n- **D. Pharynx to the trachea** — the trachea (windpipe) is the airway, not the food path. The pharynx connects to both the esophagus (food) and the trachea (air). The esophagus and trachea run side by side in the neck — which is why there is a risk of choking if food enters the trachea.",
    memoryTip: "Esophagus = Eating pipe. It carries food down to the stomach. Think of it as the body's food slide.",
    difficulty: 1
  },
  {
    id: "Q28",
    text: "Which part of the neuron receives signals?",
    options: ["Axon", "Dendrite", "Cell body", "Synapse"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Neuron Structure",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Dendrites are the short, branching projections extending from the neuron's cell body. Their name comes from the Greek dendron meaning \"tree\" — they look like tree branches. Their function is to receive incoming signals from other neurons or from sensory receptors, and carry those signals toward the cell body for processing. A single neuron can have thousands of dendrites, allowing it to receive information from thousands of other neurons simultaneously.\n\n**Why each option is wrong:**\n\n- **A. Axon** — carries the nerve impulse away from the cell body, toward the next neuron or a target organ (muscle or gland). The axon SENDS signals out. It is the output of the neuron, not the receiver.\n- **C. Cell body (soma)** — the metabolic centre of the neuron, containing the nucleus and organelles. It processes and integrates incoming signals, but the initial reception of signals from outside the neuron is done by the dendrites.\n- **D. Synapse** — this is not actually a part of the neuron. A synapse is the gap (junction) between two neurons, where signals pass from one cell to the next using chemical messengers called neurotransmitters. It is a space, not a neuron structure.",
    memoryTip: "Signal flow through a neuron: Dendrite → Cell body → Axon = Receive → Process → Send. 'D for Dendrite = D for Detection (detects/receives incoming signals).'",
    difficulty: 2
  },
  {
    id: "Q29",
    text: "The functional unit of the kidney is:",
    options: ["Alveolus", "Nephron", "Neuron", "Hepatocyte"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Urinary System",
    subtopic: "Kidney Microstructure",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The nephron is the microscopic functional unit of the kidney — it is the actual filtration structure that processes blood and produces urine. Each kidney contains approximately one million nephrons. Each nephron consists of: the glomerulus (a knot of capillaries that filters blood under pressure), the Bowman's capsule (cup-shaped structure collecting the filtrate), the proximal tubule (reabsorbs glucose, amino acids, and water), the Loop of Henle (concentrates the filtrate; reabsorbs more water), the distal tubule (fine-tunes reabsorption), and the collecting duct (final water reabsorption, concentrating the urine).\n\n**Why each option is wrong:**\n\n- **A. Alveolus** — the functional unit of the lungs. Tiny air sacs where gas exchange occurs. Nothing to do with the kidney.\n- **C. Neuron** — the functional unit of the nervous system. Transmits electrical signals. Nothing to do with the kidney.\n- **D. Hepatocyte** — a liver cell (hepato = liver in Greek). Hepatocytes are the functional cells of the liver, not the kidney.",
    memoryTip: "NANS rule: Neuron = Nervous system | Alveolus = Airways (lungs) | Nephron = kidNey | Sarcomere = Skeletal muscle. The 'N' in nephron reminds you of kidNey.",
    difficulty: 2
  },
  {
    id: "Q30",
    text: "Which valve prevents backflow of blood from the left ventricle to the left atrium?",
    options: ["Tricuspid valve", "Pulmonary valve", "Mitral valve", "Aortic valve"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Heart Valves",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The mitral valve (also called the bicuspid valve because it has 2 leaflets/cusps) sits between the left atrium and the left ventricle. When the left ventricle contracts to pump blood into the aorta, the mitral valve closes to prevent blood from flowing back up into the left atrium. When the left ventricle relaxes and fills, the mitral valve opens to allow blood to flow down from the left atrium. Mitral valve disease (stenosis or regurgitation) is one of the most common heart valve disorders.\n\n**Why each option is wrong:**\n\n- **A. Tricuspid valve** — sits between the right atrium and right ventricle (3 leaflets/cusps). It performs the same backflow prevention function, but on the RIGHT side of the heart, not the left.\n- **B. Pulmonary valve** — sits between the right ventricle and the pulmonary artery. It prevents blood from flowing back from the pulmonary artery into the right ventricle. This is a semilunar valve (half moon shaped), not an atrioventricular valve.\n- **D. Aortic valve** — sits between the left ventricle and the aorta. It prevents blood from flowing back from the aorta into the left ventricle after contraction. This is a different valve from the mitral — the aortic is on the output side of the left ventricle, while the mitral is on the input side.",
    memoryTip: "Mitral = named after a bishop's mitre hat. Left side of heart = Mitral + Aortic valves. Right side = Tricuspid + Pulmonary valves.",
    difficulty: 2
  },
  {
    id: "Q31",
    text: "The hormone produced by the thyroid gland is:",
    options: ["Insulin", "Thyroxine", "Cortisol", "Testosterone"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Thyroid Gland",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The thyroid gland is a butterfly-shaped gland in the neck that produces two main hormones: thyroxine (T4) (contains 4 iodine atoms) and triiodothyronine (T3) (contains 3 iodine atoms, the more active form). Together they regulate: basal metabolic rate (how fast the body uses energy), body temperature, heart rate, and growth and development (especially brain development in infants). Low levels = hypothyroidism (fatigue, weight gain, cold intolerance, slow heart rate). High levels = hyperthyroidism (weight loss, heat intolerance, rapid heart rate, anxiety).\n\n**Why each option is wrong:**\n\n- **A. Insulin** — produced by the beta cells of the pancreas. Regulates blood sugar. Not produced by the thyroid.\n- **C. Cortisol** — produced by the adrenal cortex (outer layer of the adrenal gland). The primary stress hormone. Not produced by the thyroid.\n- **D. Testosterone** — the primary male sex hormone, produced mainly by the testes (and in small amounts by the ovaries and adrenal glands). Not produced by the thyroid.",
    memoryTip: "THYROxine = THYROid gland. The hormone is literally named after its gland of origin — same root word!",
    difficulty: 1
  },
  {
    id: "Q32",
    text: "Which structure in the eye focuses light?",
    options: ["Cornea", "Retina", "Lens", "Pupil"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Special Senses",
    subtopic: "Eye Anatomy",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The lens is a transparent, biconvex (curved on both sides) structure located behind the pupil and iris. Its job is to focus light rays onto the retina — specifically onto the fovea centralis (the point of sharpest vision). Crucially, the lens changes its shape to focus at different distances — a process called accommodation: the lens becomes rounder and thicker for near objects, and flatter and thinner for far objects (controlled by the ciliary muscles). With age, the lens loses flexibility, causing presbyopia (difficulty focusing on near objects). Clouding of the lens = cataract.\n\n**Why each option is wrong:**\n\n- **A. Cornea** — the clear dome at the very front of the eye. It actually performs the majority (approximately 70–75%) of total light bending (refraction), but its curvature is fixed. It cannot change shape to adjust for different distances. The lens provides the adjustable, fine-tuning focus. Since the question asks which structure focuses (implying adjustable focus), the lens is the intended answer.\n- **B. Retina** — the light-sensitive layer at the back of the eye containing photoreceptors (rods for dim light and peripheral vision; cones for colour and detail). The retina detects the already-focused light and converts it into nerve signals. It does not focus light.\n- **D. Pupil** — the opening (hole) in the centre of the iris. It dilates (widens) in dim light to let more light in, and constricts (narrows) in bright light. It controls the quantity of light entering the eye, but does not focus it.\n\n| Eye Structure | Function |\n| :--- | :--- |\n| Cornea | Initial, fixed light bending |\n| Pupil | Controls amount of light entering |\n| Iris | Moves the pupil |\n| Lens | Adjustable fine-focusing |\n| Retina | Detects light (rods and cones) |\n| Optic nerve | Sends visual signal to brain |",
    memoryTip: "LENS = LIGHT focusing. Just as a camera lens makes images sharp, the eye's lens focuses light for sharp vision.",
    difficulty: 2
  },
  {
    id: "Q33",
    text: "The diaphragm is primarily involved in:",
    options: ["Digestion", "Circulation", "Breathing", "Urination"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Respiratory System",
    subtopic: "Mechanics of Breathing",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The diaphragm is the primary muscle of breathing — a large, dome-shaped muscle that separates the thoracic (chest) cavity from the abdominal cavity. Inhalation: the diaphragm contracts and flattens downward → the chest cavity volume increases → pressure inside decreases → air rushes in to equalise pressure. Exhalation: the diaphragm relaxes and domes upward → chest cavity volume decreases → pressure rises → air is pushed out. This follows Boyle's Law (pressure and volume are inversely related in a gas). The diaphragm provides approximately 60–80% of the work of normal, quiet breathing.\n\n**Why each option is wrong:**\n\n- **A. Digestion** — digestion is the function of digestive system organs (stomach, intestines, liver, pancreas). While the esophagus passes through an opening in the diaphragm (the esophageal hiatus — relevant in hiatal hernias), the diaphragm itself is not a digestive organ.\n- **B. Circulation** — the circulation of blood is the function of the heart and blood vessels. The diaphragm does not pump blood.\n- **D. Urination** — urination is controlled by the urinary bladder's detrusor muscle and urethral sphincters. The diaphragm is not involved.",
    memoryTip: "Hiccups are involuntary, sudden spasms of the diaphragm — direct proof that the diaphragm is the breathing muscle. Every hiccup is an involuntary inhalation caused by a diaphragm spasm.",
    difficulty: 1
  },
  {
    id: "Q34",
    text: "Which type of tissue covers body surfaces?",
    options: ["Connective tissue", "Epithelial tissue", "Muscle tissue", "Nervous tissue"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Cell Biology",
    subtopic: "Tissue Types",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Epithelial tissue (say: ep-ih-THEE-lee-ul) covers and lines all body surfaces — both external surfaces (like the skin) and internal surfaces (like the lining of the intestines, lungs, and blood vessels). Think of it as the body's wallpaper or tiling. It forms protective barriers, controls what enters and exits the body, and is also involved in secretion (producing substances like sweat, mucus, digestive enzymes, and hormones). The name comes from Greek: epi = upon + thele = nipple/surface — it sits upon surfaces.\n\n**Why each option is wrong:**\n\n- **A. Connective tissue** — does not primarily cover surfaces. Its job is to connect, support, and bind structures together. Examples: bone, cartilage, blood, fat (adipose tissue), tendons, and ligaments. The most abundant tissue type, but not the covering one.\n- **C. Muscle tissue** — specialised for contraction and movement. Found in muscles throughout the body. Does not cover surfaces.\n- **D. Nervous tissue** — specialised for transmitting electrical signals (nerve impulses). Forms the brain, spinal cord, and nerves. Does not cover surfaces.",
    memoryTip: "Every Cell Makes Noise = Epithelial, Connective, Muscle, Nervous. Of these four, only Epithelial covers surfaces. 'Epi' = upon/above → sits upon surfaces.",
    difficulty: 2
  },
  {
    id: "Q35",
    text: "The spinal cord is protected by:",
    options: ["Skull", "Ribs", "Vertebrae", "Pelvis"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Skeletal System",
    subtopic: "Axial Skeleton / Spine",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The vertebrae are the 33 individual bones that make up the spinal column (backbone). Each vertebra has a hole in its centre called the vertebral foramen. When all the vertebrae are stacked on top of each other, these holes align to form the vertebral canal — a bony tunnel through which the spinal cord runs safely, protected from external forces on all sides.\n\n**Why each option is wrong:**\n\n- **A. Skull** — protects the brain (up in the head). The spinal cord begins at the base of the skull and runs down the back — it is the vertebrae, not the skull, that protect it along its length.\n- **B. Ribs** — protect the heart and lungs in the thoracic cavity. Ribs attach to thoracic vertebrae but do not directly form a protective canal for the spinal cord.\n- **D. Pelvis** — protects the pelvic organs (bladder, uterus, rectum). The spinal cord ends around the level of the first or second lumbar vertebra (L1–L2), above the pelvis.",
    memoryTip: "SPINal cord → SPINE (vertebrae) protects it. The spinal cord runs inside the spinal column just as electrical wires run inside a conduit pipe — the pipe surrounds and protects the wires.",
    difficulty: 1
  },
  {
    id: "Q36",
    text: "Which blood type is considered the universal donor?",
    options: ["A", "B", "AB", "O"],
    correctAnswerIndex: 3,
    unit: "Anatomy & Physiology",
    topic: "Blood & Haematology",
    subtopic: "Blood Groups / ABO System",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Blood type O (specifically O-negative, O−) is the universal donor because type O-negative red blood cells lack both A antigens and B antigens on their surface, as well as the Rh factor. Since there are no antigens that another person's immune system could recognise as foreign and attack, O-negative blood can be given to patients of any blood type in emergency situations without causing an immune rejection reaction. This is why O-negative blood is kept ready in trauma centres and emergency departments for situations where there is no time to cross-match blood.\n\n**Why each option is wrong:**\n\n- **A. Type A** — has A antigens on the red cell surface. It cannot be given to type B or type O individuals, whose immune systems carry anti-A antibodies and would attack type A cells.\n- **B. Type B** — has B antigens. Cannot be given to type A or O individuals (who carry anti-B antibodies).\n- **C. Type AB** — is actually the universal RECIPIENT — people with AB blood can receive any blood type. However, AB blood has both A and B antigens and cannot be donated to type A, B, or O individuals. AB is the opposite of the universal donor.\n\n| Blood Type | Antigens on RBC | Can donate to | Special name |\n| :--- | :--- | :--- | :--- |\n| A | A | A, AB | — |\n| B | B | B, AB | — |\n| AB | A and B | AB only | Universal recipient |\n| O | None | All types | Universal donor |",
    memoryTip: "O = Zero antigens = Zero risk of rejection = can go to anyone. 'AB = Anything goes in = universal recipient.' O and AB are opposites.",
    difficulty: 2
  },
  {
    id: "Q37",
    text: "The pancreas produces:",
    options: ["Bile", "Insulin", "Pepsin", "Mucus"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Pancreatic Functions",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The pancreas is a unique organ with both endocrine (hormonal) and exocrine (digestive) functions. Its endocrine function is performed by the islets of Langerhans — clusters of cells within the pancreas that produce: insulin (beta cells — lowers blood sugar), glucagon (alpha cells — raises blood sugar), and somatostatin (delta cells — regulates insulin and glucagon). Its exocrine function involves producing digestive enzymes (amylase, lipase, protease) released through the pancreatic duct into the small intestine.\n\n**Why each option is wrong:**\n\n- **A. Bile** — bile is produced by the liver (not the pancreas) and stored in the gallbladder. Both the liver's bile duct and the pancreatic duct drain into the duodenum (first part of the small intestine), which is a common source of confusion.\n- **C. Pepsin** — a protein-digesting enzyme produced by chief cells in the stomach lining. Not produced by the pancreas.\n- **D. Mucus** — produced by mucous glands and goblet cells throughout the body (in the digestive tract, respiratory tract, etc.). Not specifically a pancreatic product.",
    memoryTip: "PANcreas = PANhandles insulin AND digestive enzymes. It handles two completely different jobs — the endocrine and the exocrine.",
    difficulty: 2
  },
  {
    id: "Q38",
    text: "Which structure prevents food from entering the trachea?",
    options: ["Uvula", "Epiglottis", "Pharynx", "Larynx"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Digestive System",
    subtopic: "Swallowing / Upper Airway",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The epiglottis is a leaf-shaped flap of cartilage located at the back of the throat, just above the opening to the larynx (voice box). During normal breathing, the epiglottis is upright and the airway is open. During swallowing, the epiglottis folds down like a trapdoor, covering the entrance to the trachea and directing food and liquid into the esophagus instead. This prevents aspiration — food or liquid entering the lungs — which can cause choking or a serious infection called aspiration pneumonia. In infants, epiglottitis (bacterial inflammation of the epiglottis) is a life-threatening emergency because swelling can completely block the airway.\n\n**Why each option is wrong:**\n\n- **A. Uvula** — the small, fleshy, dangling piece of tissue visible at the back of the soft palate (you can see it when you open your mouth wide and say \"ahh\"). It helps close off the nasal passage during swallowing, preventing food from going up into the nose. It does not prevent food from entering the trachea.\n- **C. Pharynx** — the throat — is the shared passage through which both air and food pass. It is a tube, not a flap or valve. It does not actively direct food away from the trachea; that is the epiglottis's job.\n- **D. Larynx** — the voice box, which sits below the epiglottis and opens into the trachea. The epiglottis protects the entrance to the larynx/trachea. The larynx itself does not do the protecting.",
    memoryTip: "Think of the epiglottis as a trapdoor lid — when you swallow, the lid closes to protect the airway. Epiglottis = EPIc GATEKEEPER of the airway.",
    difficulty: 1
  },
  {
    id: "Q39",
    text: "The main function of the large intestine is:",
    options: ["Nutrient absorption", "Water absorption", "Protein digestion", "Fat emulsification"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Digestive System",
    subtopic: "Large Intestine Function",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The large intestine (colon, approximately 1.5 metres long) receives indigestible material from the small intestine and absorbs water and electrolytes (salts) from it, converting the liquid waste into solid faeces (stool). By the time material arrives at the large intestine, the small intestine has already extracted virtually all the nutrients. The large intestine also houses billions of beneficial gut bacteria (the gut microbiome) that produce some vitamins (vitamin K, some B vitamins), further break down certain waste products, and protect against harmful bacteria.\n\n**Why each option is wrong:**\n\n- **A. Nutrient absorption** — the primary absorption of proteins, fats, carbohydrates, vitamins, and minerals occurs in the small intestine. By the time material reaches the large intestine, this job is complete.\n- **C. Protein digestion** — protein digestion begins in the stomach (by the enzyme pepsin in an acidic environment) and is completed in the small intestine (by pancreatic enzymes). The large intestine does not digest proteins.\n- **D. Fat emulsification** — fats are emulsified (broken into tiny droplets for easier digestion) by bile (from the liver/gallbladder) in the small intestine. Not a function of the large intestine.",
    memoryTip: "Small intestine = Sucks up nutrients (S for Small = Sustenance). Large intestine = Last stop, reclaims Liquid (L for Large = Last, Liquid recovery).",
    difficulty: 1
  },
  {
    id: "Q40",
    text: "Which bone is commonly known as the collarbone?",
    options: ["Scapula", "Clavicle", "Humerus", "Sternum"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Skeletal System",
    subtopic: "Appendicular Skeleton / Pectoral Girdle",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The clavicle is a long, slender, S-shaped bone that runs horizontally across the top of the chest from the breastbone (sternum) to the shoulder. You can feel it under your skin — that ridge running from your neck to your shoulder is your clavicle. It is called the collarbone because it sits at collar level. It connects the arm to the rest of the skeleton and helps with shoulder movement. The clavicle is one of the most commonly fractured bones in the body, often injured by falls onto an outstretched hand.\n\n**Why each option is wrong:**\n\n- **A. Scapula** — the flat, triangular bone on the upper back known as the shoulder blade. Not the collarbone.\n- **C. Humerus** — the long bone of the upper arm, running from the shoulder joint to the elbow. Not the collarbone.\n- **D. Sternum** — the flat bone in the centre of the chest called the breastbone. Ribs attach to it. Not the collarbone.",
    memoryTip: "ClaviCLE = CoLLar. Both contain the letters C, L. The clavicle sits at the level of a shirt collar. Shoulder area: Scapula = shoulder blade (back). Clavicle = collarbone (front). Humerus = upper arm.",
    difficulty: 1
  },
  {
    id: "Q41",
    text: "The medulla oblongata controls:",
    options: ["Voluntary movements", "Memory", "Vital functions like breathing and heart rate", "Vision"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Brainstem Functions",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The medulla oblongata is the lowest portion of the brainstem, directly connecting the brain to the spinal cord. It contains the vital centres that automatically and continuously control life-sustaining functions without any conscious effort: the respiratory centre (controls breathing rate and depth), the cardiac centre (controls heart rate and rhythm), the vasomotor centre (controls blood vessel diameter and blood pressure), and reflex centres for vomiting, coughing, sneezing, swallowing, and hiccupping. Severe damage to the medulla oblongata is immediately fatal because these automatic functions cease.\n\n**Why each option is wrong:**\n\n- **A. Voluntary movements** — deliberate, conscious movements are controlled by the motor cortex of the cerebrum (specifically the precentral gyrus / primary motor cortex).\n- **B. Memory** — memory formation and storage primarily involve the cerebrum, particularly the hippocampus and various areas of the cerebral cortex. The medulla has no role in memory.\n- **D. Vision** — visual processing occurs in the occipital lobe of the cerebrum. The optic nerve (CN II) carries visual information to the occipital cortex. The medulla is not involved in vision.",
    memoryTip: "Medulla Oblongata = MOB = Manages Our Breathing (and heart rate). Or: 'Medulla = the MUST-have part of the brain — damage it and you cannot survive even one minute.'",
    difficulty: 2
  },
  {
    id: "Q42",
    text: "Which organ stores bile?",
    options: ["Liver", "Pancreas", "Gallbladder", "Spleen"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Digestive System",
    subtopic: "Accessory Digestive Organs",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The gallbladder is a small, pear-shaped sac located on the underside of the liver. Its sole function is to store and concentrate bile produced by the liver. When you eat fatty food, the hormone cholecystokinin (CCK) is released from the small intestine, signalling the gallbladder to contract and squeeze bile through the common bile duct into the duodenum (first section of the small intestine), where bile emulsifies (breaks up into tiny droplets) dietary fats to make them easier to digest. When the gallbladder is removed (cholecystectomy), bile drips continuously from the liver into the intestine — patients can still digest fats but may have some difficulty with very fatty meals.\n\n**Why each option is wrong:**\n\n- **A. Liver** — the liver produces bile (from the breakdown of old red blood cells) but does not store it. Bile produced by the liver is immediately sent to the gallbladder for storage. Production is not the same as storage.\n- **B. Pancreas** — produces digestive enzymes (amylase, lipase, protease) and hormones (insulin, glucagon). Has no role in bile production or storage.\n- **D. Spleen** — a lymphatic/immune organ that filters blood and removes old red blood cells. Not a digestive organ and has no connection to bile.",
    memoryTip: "GALL-bladder holds GALL. Gall is the historical/old English word for bile — the organ's very name tells you exactly what it stores. Liver MAKES it → Gallbladder STORES it → Small intestine USES it.",
    difficulty: 1
  },
  {
    id: "Q43",
    text: "The functional unit of muscle contraction is:",
    options: ["Nephron", "Neuron", "Sarcomere", "Alveolus"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Muscular System",
    subtopic: "Muscle Microstructure",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The sarcomere is the basic contractile (contracting) unit of skeletal and cardiac muscle. Think of a muscle fibre as a long train, and a sarcomere as one individual train carriage. Each sarcomere contains overlapping protein filaments: actin (thin filaments) and myosin (thick filaments). When a muscle contracts, myosin filaments grab onto actin filaments and pull them closer together — this is the sliding filament theory of muscle contraction. Thousands of sarcomeres shortening simultaneously along the length of a muscle fibre produce the visible shortening of the entire muscle. The word \"sarco\" comes from Greek sarx = flesh/muscle.\n\n**Why each option is wrong:**\n\n- **A. Nephron** — the functional unit of the kidney. Filters blood to produce urine. Completely unrelated to muscle.\n- **B. Neuron** — the functional unit of the nervous system. While neurons do trigger muscle contractions by sending electrical signals to muscle fibres, the neuron is a nerve cell, not a muscle unit.\n- **D. Alveolus** — the functional unit of the lungs. Tiny air sacs for gas exchange. Completely unrelated to muscle.",
    memoryTip: "NANS rule: Neuron = Nervous | Alveolus = Airways | Nephron = kidNey | Sarcomere = Skeletal muscle. 'Sarco' = flesh = muscle — the word tells you it belongs to muscle.",
    difficulty: 2
  },
  {
    id: "Q44",
    text: "Which artery carries deoxygenated blood?",
    options: ["Aorta", "Pulmonary artery", "Carotid artery", "Coronary artery"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Blood Vessels",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "This is a classic exam trick question. Students often assume \"arteries always carry oxygenated blood,\" but the real definition of an artery is: a vessel that carries blood away from the heart — regardless of the oxygen content of that blood. The pulmonary artery carries blood from the right ventricle away to the lungs — and this blood is deoxygenated (it is heading to the lungs specifically to pick up oxygen). This makes the pulmonary artery the one major exception to the generalisation that arteries carry oxygenated blood.\n\n**Why each option is wrong:**\n\n- **A. Aorta** — carries highly oxygenated blood from the left ventricle to the entire body. The largest artery.\n- **C. Carotid artery** — carries oxygenated blood to the brain and head. A branch of the aorta.\n- **D. Coronary artery** — supplies oxygenated blood to the heart muscle itself. When coronary arteries are blocked, the result is a heart attack (myocardial infarction) because the heart muscle is starved of oxygen.",
    memoryTip: "Arteries = Away from heart (regardless of oxygen content). Remember the paired exception: Pulmonary ARTERY = deoxygenated (going TO lungs). Pulmonary VEINS = oxygenated (coming BACK from lungs). Both pulmonary vessels are the opposite of what you'd expect from their vessel type.",
    difficulty: 2
  },
  {
    id: "Q45",
    text: "The hormone that stimulates milk production is:",
    options: ["Oxytocin", "Prolactin", "Cestrogen", "Progesterone"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Pituitary Hormones / Lactation",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Prolactin (PRL) is produced by the anterior pituitary gland. Its primary function is to stimulate the mammary glands (breast tissue) to produce milk — a process called lactogenesis. Prolactin levels rise significantly during pregnancy and remain elevated during breastfeeding. The act of a baby suckling on the breast stimulates prolactin release (a positive feedback mechanism), maintaining the milk supply as long as breastfeeding continues.\n\n**Why each option is wrong:**\n\n- **A. Oxytocin** — produced by the posterior pituitary gland. It has two main roles: stimulating uterine contractions during labour, and causing the milk let-down reflex — the ejection/release of milk from the breast when the baby suckles. Oxytocin causes milk to be released; prolactin causes milk to be produced. Both are needed but they do different jobs.\n- **C. Estrogen (Oestrogen)** — a sex hormone produced mainly by the ovaries. During pregnancy, high oestrogen levels actually inhibit prolactin's milk-producing effect. After childbirth, when oestrogen levels fall sharply, prolactin can finally act and milk production begins.\n- **D. Progesterone** — another sex hormone from the ovaries and placenta. Like oestrogen, high progesterone during pregnancy suppresses milk production. It also drops after delivery, allowing prolactin to take effect.",
    memoryTip: "PROLACTin = PROduces LACTation (milk). The word lactation is built directly into the hormone's name — it cannot be any clearer.",
    difficulty: 2
  },
  {
    id: "Q46",
    text: "Which part of the ear is responsible for hearing?",
    options: ["Outer ear", "Middle ear", "Inner ear (cochlea)", "Eustachian tube"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Special Senses",
    subtopic: "Ear Anatomy",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cochlea (from Latin for \"snail\" — it is coiled like a snail shell) is the structure in the inner ear responsible for converting sound vibrations into nerve impulses that the brain interprets as hearing. Inside the cochlea are specialised hair cells (mechanoreceptors) that are stimulated by fluid waves created by incoming sound vibrations. These hair cells send electrical signals through the cochlear nerve (part of CN VIII, the vestibulocochlear nerve) to the brain's auditory cortex (in the temporal lobe).\n\n**The complete sound journey through the ear:**\n\n1. **Outer ear** — collects and funnels sound waves toward the eardrum\n2. **Tympanic membrane (eardrum)** — vibrates in response to sound waves\n3. **Middle ear ossicles** (three tiny bones — malleus, incus, stapes) — amplify and transmit vibrations to the inner ear\n4. **Inner ear cochlea** — converts vibrations into nerve impulses → hearing\n\n**Why each option is wrong:**\n\n- **A. Outer ear** — the pinna (auricle) and ear canal collect and channel sound toward the eardrum. It is the sound collector, not the hearing transducer.\n- **B. Middle ear** — the three ossicles (hammer, anvil, stirrup) amplify vibrations and transfer them to the inner ear via the oval window. Amplification is not hearing — it is just preparing the signal.\n- **D. Eustachian tube** — connects the middle ear to the throat (nasopharynx). Its only function is to equalise air pressure on both sides of the eardrum. The \"popping\" sensation you feel in your ears when swallowing or yawning in an aeroplane is the Eustachian tube equalising pressure. It plays no role in hearing.",
    memoryTip: "COCHLea = CONverts vibration → hearing CONcludes here. The cochlea's snail-like coiled shape is visually memorable.",
    difficulty: 2
  },
  {
    id: "Q47",
    text: "The appendix is attached to the:",
    options: ["Stomach", "Small intestine", "Large intestine (cecum)", "Liver"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Digestive System",
    subtopic: "Large Intestine Anatomy",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The appendix (vermiform appendix = \"worm-shaped appendage\") is a narrow, finger-like pouch approximately 5–10 cm long. It is attached to the cecum — the first and widest section of the large intestine — located in the lower right abdomen. Its function in humans is debated; it may play a minor immune role and serve as a \"safe house\" for beneficial gut bacteria after illness. When the appendix becomes infected and inflamed, it causes appendicitis. Classic sign: pain starting around the navel, then moving to the right lower quadrant — specifically to McBurney's point (one-third of the way from the right hip bone to the navel). This is a key clinical landmark.\n\n**Why each option is wrong:**\n\n- **A. Stomach** — located in the upper left abdomen. The appendix is in the lower right. They are far apart.\n- **B. Small intestine** — the appendix attaches specifically to the cecum, which is the junction piece at the very start of the large intestine, not the small intestine.\n- **D. Liver** — located in the upper right abdomen, under the diaphragm. Completely separate from the appendix.",
    memoryTip: "AppendIX = attaches at the end of the Ileum/start of LARGE intestine (cecum) = lower RIGHT abdomen. Appendicitis pain = right lower quadrant (RLQ) — knowing the anatomy explains the pain location.",
    difficulty: 2
  },
  {
    id: "Q48",
    text: "Which gland regulates metabolism?",
    options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Parathyroid gland"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Thyroid Gland Functions",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The thyroid gland produces thyroxine (T3/T4), which is the body's primary metabolic regulator — it determines the \"speed setting\" for virtually all the body's chemical reactions. Thyroid hormones increase oxygen consumption and energy expenditure at the cellular level and affect almost every cell in the body. Low thyroid hormones = hypothyroidism (slowed metabolism — fatigue, weight gain, cold intolerance, slow heart rate, constipation). High thyroid hormones = hyperthyroidism (accelerated metabolism — weight loss, heat intolerance, rapid heart rate, anxiety, diarrhoea).\n\n**Why each option is wrong:**\n\n- **A. Pituitary gland** — the \"master gland\" that controls the thyroid by secreting TSH (thyroid-stimulating hormone). The pituitary orders the thyroid to act; the thyroid actually does the metabolic regulation. The pituitary indirectly affects metabolism through the thyroid, but does not directly regulate it.\n- **C. Adrenal gland** — regulates the stress response (cortisol, adrenaline), blood pressure (aldosterone), and some sex hormones. While cortisol affects metabolic processes, the primary metabolic regulator is the thyroid.\n- **D. Parathyroid gland** — four tiny glands embedded in the back of the thyroid gland. They produce parathyroid hormone (PTH), which regulates calcium and phosphate levels in the blood and bones. Not involved in metabolism regulation.",
    memoryTip: "THYROID = THERMOSTAT + THROTTLE of the body. It controls the body's temperature (thermostat) and the speed of metabolism (throttle). Hypo = slow (HYPOthyroid = everything slowed down). Hyper = fast (HYPERthyroid = everything speeded up).",
    difficulty: 1
  },
  {
    id: "Q49",
    text: "The production of red blood cells is called:",
    options: ["Hematopoiesis", "Erythropoiesis", "Leukocytosis", "Hemostasis"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Blood & Haematology",
    subtopic: "Blood Cell Production",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Erythropoiesis (from Greek: erythros = red + poiesis = making/production) specifically refers to the production of red blood cells (erythrocytes). This occurs in the red bone marrow of certain bones (sternum, vertebrae, ribs, iliac bones of the pelvis, and the proximal ends of the femur and humerus in adults). The process is triggered by the hormone erythropoietin (EPO), produced by the kidneys in response to low blood oxygen levels. Red blood cells mature over approximately 7 days and live for approximately 120 days before being removed and recycled by the spleen and liver.\n\n**Why each option is wrong:**\n\n- **A. Hematopoiesis (Haematopoiesis)** — the production of all blood cells — red cells, white cells, AND platelets. It is the broad umbrella term. Erythropoiesis is the more specific, precise answer for red blood cells specifically. The question asks specifically about red blood cells.\n- **C. Leukocytosis** — means an abnormal increase in white blood cell count above normal levels, typically seen in response to infection or inflammation. It is a clinical finding/condition, not a production process. (Leuko = white; cytosis = increase in cells).\n- **D. Hemostasis (Haemostasis)** — the process of stopping bleeding through blood clotting (platelet plug formation and fibrin clot). Nothing to do with red blood cell production.",
    memoryTip: "ERYTHROcytes (red blood cells) → ERYTHROpoiesis (making red blood cells). The same root word erythro appears in both — once you know erythro means red, the connection is clear.",
    difficulty: 2
  },
  {
    id: "Q50",
    text: "Which muscle is responsible for breathing?",
    options: ["Intercostal muscles", "Diaphragm", "Abdominal muscles", "Both A and B"],
    correctAnswerIndex: 3,
    unit: "Anatomy & Physiology",
    topic: "Muscular System",
    subtopic: "Respiratory Muscles",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Breathing (ventilation) requires two main muscle groups working together:\n\n- **The Diaphragm** is the primary breathing muscle — a large dome-shaped muscle below the lungs, separating the chest cavity from the abdominal cavity. When it contracts it flattens downward, increasing chest volume and drawing air in (inhalation). When it relaxes it domes upward, reducing chest volume and pushing air out (exhalation). It provides approximately 60–80% of the work of normal, quiet breathing.\n- **The Intercostal muscles** (between the ribs — inter = between, costal = ribs) are the secondary breathing muscles. The external intercostals lift the ribs upward and outward during inhalation, further expanding the chest. The internal intercostals assist with forced exhalation. Both muscle groups work together, making D the most complete and correct answer.\n\n**Why each option is wrong:**\n\n- **A. Intercostal muscles alone** — incomplete. This ignores the dominant role of the diaphragm, which does the majority of the breathing work.\n- **B. Diaphragm alone** — incomplete. While the diaphragm is the primary breathing muscle, the intercostals contribute significantly and cannot be excluded.\n- **C. Abdominal muscles** — these are accessory muscles used only during forced exhalation (coughing, sneezing, blowing out candles, vigorous exercise). They are not involved in normal quiet breathing and are not primary breathing muscles.",
    memoryTip: "Breathing = Both Diaphragm and Intercostals. The diaphragm is the floor of the chest, and the intercostals are the walls. Both must move to change the room's volume.",
    difficulty: 2
  },
  {
    id: "Q51",
    text: "The sinoatrial (SA) node is located in the:",
    options: ["Left atrium", "Right atrium", "Left ventricle", "Right ventricle"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Cardiac Conduction System",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The sinoatrial (SA) node is the heart's natural pacemaker — it spontaneously generates the electrical impulse that initiates every heartbeat. It is located in the upper wall of the right atrium, near the opening of the superior vena cava. At rest it fires approximately 60–100 times per minute. From the SA node, the electrical impulse spreads across both atria (causing atrial contraction) → reaches the AV node (atrioventricular node, at the junction of atria and ventricles) → travels down the Bundle of His → splits into left and right bundle branches → spreads through Purkinje fibres throughout the ventricles (causing ventricular contraction). This coordinated sequence ensures the atria contract just before the ventricles, maximising pumping efficiency.\n\n**Why each option is wrong:**\n\n- **A. Left atrium** — receives oxygenated blood from the lungs. The SA node is in the right atrium, not the left.\n- **C. Left ventricle** — the most powerful pumping chamber. The SA node is located in an atrium (upper chamber), not in a ventricle (lower chamber).\n- **D. Right ventricle** — pumps blood to the lungs. Again, the SA node is in the atrium above, not the ventricle.",
    memoryTip: "SA node = Starts All (heartbeats), sits in the Right Atrium — where blood first arrives at the heart from the body. The SA node is the starter gun of every heartbeat.",
    difficulty: 2
  },
  {
    id: "Q52",
    text: "Which vitamin is produced in the skin?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Integumentary System",
    subtopic: "Skin Functions / Vitamin D",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The skin synthesises vitamin D when ultraviolet B (UVB) rays from sunlight strike it. The process: skin contains a cholesterol-like compound (7-dehydrocholesterol) → UVB converts it to previtamin D3 (cholecalciferol) → the liver converts it to calcidiol (25-hydroxyvitamin D, the storage form) → the kidneys convert it to calcitriol (1,25-dihydroxyvitamin D, the active form). Vitamin D functions: promotes calcium and phosphate absorption from the intestines, drives bone mineralisation, and regulates immune function. Deficiency causes rickets in children (soft, deformed bones) or osteomalacia in adults (soft, painful bones).\n\n**Why each option is wrong:**\n\n- **A. Vitamin A (retinol)** — found in animal products (liver, dairy, eggs) and plant-based carotenoids (carrots, sweet potato). It is NOT produced in the skin. It must be obtained from the diet or supplements. Functions: night vision, immune function, skin cell turnover.\n- **B. Vitamin C (ascorbic acid)** — an antioxidant found in fruits and vegetables (citrus, bell peppers, berries). Humans cannot synthesise vitamin C — it must come entirely from the diet. Deficiency causes scurvy (bleeding gums, poor wound healing, fragile blood vessels).\n- **D. Vitamin K** — found in leafy green vegetables and produced by gut bacteria in the large intestine. It is NOT produced in the skin. Essential for blood clotting (activates clotting factors) and bone metabolism.",
    memoryTip: "Vitamin D = the SUNSHINE vitamin. Skin + sun = vitamin D. 'D for Daylight.' Without enough sun exposure or dietary vitamin D, bones weaken — a major public health issue even in sunny countries when people stay indoors or cover their skin.",
    difficulty: 1
  },
  {
    id: "Q53",
    text: "The plasma protein involved in blood clotting is:",
    options: ["Albumin", "Globulin", "Fibrinogen", "Hemoglobin"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Blood & Haematology",
    subtopic: "Blood Proteins and Coagulation",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Fibrinogen is a soluble plasma protein produced by the liver. It is the critical clotting protein in the coagulation cascade. When bleeding occurs, a series of reactions (the clotting cascade) ultimately converts fibrinogen into fibrin — an insoluble mesh of tough fibres that traps red blood cells and platelets to form a firm, stable blood clot that seals the damaged vessel. Think of fibrinogen as the raw material and fibrin as the finished net. Without fibrinogen, clots cannot form (a condition called afibrinogenemia, which causes life-threatening bleeding).\n\n**Why each option is wrong:**\n\n- **A. Albumin** — the most abundant plasma protein. Its main function is maintaining oncotic pressure (drawing water back into blood vessels from surrounding tissues by osmosis, preventing oedema/swelling). It also transports hormones, drugs, and fatty acids in the blood. Not a clotting protein.\n- **B. Globulin** — a group of plasma proteins with various functions. Immunoglobulins (antibodies) fight infection; alpha and beta globulins transport lipids, vitamins, hormones, and metal ions. Not directly involved in clot formation (note: some clotting factors are technically globulins, but the plasma protein specifically tested here for clotting is fibrinogen).\n- **D. Haemoglobin** — the oxygen-carrying protein found inside red blood cells. It is an intracellular protein, NOT a plasma protein (it is enclosed within the cell, not dissolved freely in plasma). It has absolutely no role in blood clotting.",
    memoryTip: "FIBRINogen → makes FIBRIN → creates a FIBROUS clotting net. The product name (fibrin) is contained within the precursor name (fibrinogen) — this is one of the clearest naming relationships in physiology.",
    difficulty: 2
  },
  {
    id: "Q54",
    text: "Which structure connects the two cerebral hemispheres?",
    options: ["Corpus callosum", "Cerebellum", "Thalamus", "Hypothalamus"],
    correctAnswerIndex: 0,
    unit: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Brain Anatomy",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The corpus callosum (Latin: corpus = body + callosum = tough/hard) is a large, C-shaped band of white matter (myelinated nerve fibres) that forms a bridge connecting the left and right cerebral hemispheres. It contains approximately 200–250 million nerve fibres and allows the two halves of the brain to communicate and coordinate with each other. For example, when your right hand picks something up (controlled by the left brain), the corpus callosum ensures the right brain also receives this information. People born without a corpus callosum (agenesis) or who have it surgically cut (as a treatment for severe epilepsy — \"split-brain\" procedure) show distinct impairments in cross-hemisphere communication.\n\n**Why each option is wrong:**\n\n- **A, B, C, D — Cerebellum, Thalamus, Hypothalamus** — none of these connect the two cerebral hemispheres. The cerebellum is a separate brain structure at the back controlling balance; the thalamus is a deep relay station for sensory signals; the hypothalamus regulates homeostasis. None of them bridge the two cerebral hemispheres.",
    memoryTip: "Corpus Callosum = Communication Corridor between the two brain halves. It is the brain's own internal telephone cable, connecting left to right.",
    difficulty: 2
  },
  {
    id: "Q55",
    text: "The urinary bladder stores:",
    options: ["Blood", "Bile", "Urine", "Lymph"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Urinary System",
    subtopic: "Urinary Bladder",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The urinary bladder is a hollow, muscular organ made of smooth muscle (called the detrusor muscle) that stores urine until it is voluntarily released. Urine is produced continuously by the kidneys, travels down two tubes called ureters (one from each kidney) into the bladder, and is stored there. The bladder can hold approximately 400–600 mL comfortably, with the urge to urinate typically beginning at around 300–400 mL. Urine is released through the urethra when both the internal and external urethral sphincters relax (the internal is involuntary; the external is under voluntary control).\n\n**Why each option is wrong:**\n\n- **A. Blood** — blood is stored in and circulates within the cardiovascular system (heart, arteries, veins, capillaries). The bladder has no connection to blood storage.\n- **B. Bile** — bile is stored in the gallbladder (a completely different organ in the digestive system in the upper right abdomen). \"Gallbladder\" and \"urinary bladder\" are both called \"bladders\" (meaning hollow storage sacs), but they are entirely different organs storing entirely different fluids.\n- **D. Lymph** — lymph (the clear fluid derived from tissue fluid) circulates through the lymphatic system in lymphatic vessels and lymph nodes. It does not pass through or get stored in the urinary bladder.",
    memoryTip: "URINary bladder = stores URINE. Critical exam distinction: Gallbladder = stores BILE. URINary bladder = stores URINE. Different organ, different system, different fluid.",
    difficulty: 1
  },
  {
    id: "Q56",
    text: "Which type of immunity is acquired through vaccination?",
    options: ["Natural active immunity", "Natural passive immunity", "Artificial active immunity", "Artificial passive immunity"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Lymphatic & Immune System",
    subtopic: "Types of Immunity",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Vaccination produces artificial active immunity. Breaking down the terminology: Artificial = produced through a medical or man-made intervention (a vaccine), as opposed to natural disease exposure. Active = your own immune system is actively stimulated to produce antibodies and memory immune cells (you do the immune work yourself — the vaccine just provides the trigger). A vaccine contains weakened or killed pathogens, pathogen components, or mRNA instructions that teach your immune system what to recognise and attack, leading to the production of memory B-cells and antibodies that provide long-lasting protection.\n\n**Why each option is wrong:**\n\n- **A. Natural active immunity** — acquired by actually getting the disease naturally (surviving a real infection). Your immune system fights the real pathogen and develops memory. Example: surviving chickenpox gives long-lasting natural active immunity — you generally will not get it again.\n- **B. Natural passive immunity** — antibodies transferred naturally from one individual to another, without the recipient's immune system making them. Example: a mother's antibodies crossing the placenta to the foetus during pregnancy, or transferred through breast milk (colostrum). The baby's immune system does not produce these antibodies — it simply receives them. Short-lived (weeks to months) because the baby's body eventually breaks them down.\n- **D. Artificial passive immunity** — ready-made antibodies (produced by another person or animal) injected into someone. Example: snake antivenom (contains antibodies against snake venom toxins), rabies immunoglobulin, or tetanus antitoxin. Provides immediate but short-lived protection (weeks) because the recipient's own immune system was not stimulated to make the antibodies.\n\n| Type | Who Makes Antibodies | How Acquired | Duration |\n| :--- | :--- | :--- | :--- |\n| Natural Active | YOU | Getting the disease | Long-lasting |\n| Artificial Active | YOU | Vaccination | Long-lasting |\n| Natural Passive | Someone else | Placenta or breast milk | Short (weeks–months) |\n| Artificial Passive | Someone else | Injected ready-made antibodies | Short (weeks) |",
    memoryTip: "ACTIVE = YOUR body is ACTIVE (making its own antibodies). PASSIVE = you PASSIVELY RECEIVE ready-made antibodies. 'NATURAL = no medical intervention. ARTIFICIAL = medical intervention involved.'",
    difficulty: 2
  },
  {
    id: "Q57",
    text: "The glomerulus is found in the:",
    options: ["Heart", "Liver", "Kidney", "Spleen"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Urinary System",
    subtopic: "Nephron Components",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The glomerulus (from Latin glomerulus = little ball; plural: glomeruli) is a tiny, tightly coiled knot of capillaries located at the beginning of each nephron in the kidney. It is the first and most critical stage of blood filtration. Blood enters the glomerulus under high pressure (through the afferent arteriole), forcing water and small solutes (salts, urea, glucose, amino acids, creatinine) through the glomerular membrane into Bowman's capsule, forming the glomerular filtrate (the starting material for urine). Large proteins and blood cells are too big to pass through the membrane and remain in the blood. When the glomerulus is inflamed (glomerulonephritis), protein appears in the urine (proteinuria) — a key clinical sign of kidney damage.\n\n**Why each option is wrong:**\n\n- **A. Heart** — a pumping organ in the cardiovascular system. Contains no glomeruli.\n- **B. Liver** — a digestive and metabolic organ. Contains no glomeruli.\n- **D. Spleen** — a lymphatic/immune organ that filters blood by removing old red blood cells. Has no glomeruli and does not produce urine.\n\n**Nested structure to memorise:** KIDNEY contains NEPHRONS, and each NEPHRON contains a GLOMERULUS.",
    memoryTip: "GLOMErulus = GLOMerated (clustered) capillaries = the kidney's microscopic filter ball. Glomerulonephritis = inflammation of these kidney filter balls.",
    difficulty: 2
  },
  {
    id: "Q58",
    text: "Which cranial nerve is responsible for vision?",
    options: ["Optic nerve (II)", "Oculomotor nerve (III)", "Trigeminal nerve (V)", "Facial nerve (VII)"],
    correctAnswerIndex: 0,
    unit: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Cranial Nerves",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The optic nerve (Cranial Nerve II) carries visual information from the retina of each eye to the brain's visual cortex (in the occipital lobe at the back of the brain). \"Optic\" comes from the Greek optikos = relating to sight. It is a purely sensory nerve — it only carries information toward the brain; it does not send motor commands to the eye. The two optic nerves from each eye meet at the optic chiasm, where fibres partially cross over, allowing the brain to process the complete visual field from both eyes.\n\n**Why each option is wrong:**\n\n- **B. Oculomotor nerve — CN III** — controls most of the eye movements (moves the eyeball in several directions via the extraocular muscles), controls eyelid opening (levator palpebrae superioris), and controls pupil constriction (via the ciliary and sphincter pupillae muscles). CN III is about moving the eye and controlling the pupil, not about seeing. Damage causes a drooping eyelid (ptosis) and a dilated pupil (blown pupil).\n- **C. Trigeminal nerve — CN V** — the largest cranial nerve. Responsible for sensation across the face (touch, pain, temperature on the forehead, cheek, and jaw) and controls the muscles of chewing (mastication). Nothing to do with vision.\n- **D. Facial nerve — CN VII** — controls the muscles of facial expression (smiling, frowning, blinking, raising the eyebrows), provides taste sensation from the anterior two-thirds of the tongue, and innervates some glands (salivary and lacrimal). Nothing to do with vision. Damage causes Bell's palsy (one-sided facial drooping).",
    memoryTip: "OPTic = OPTical = seeing with OPTics. The word 'optics' in everyday language refers to lenses, light, and sight — the OPTic nerve is literally the sight nerve. Optic nerve = optics = eyesight.",
    difficulty: 2
  },
  {
    id: "Q59",
    text: "The hormone epinephrine is produced by the:",
    options: ["Thyroid gland", "Pituitary gland", "Adrenal gland", "Pancreas"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Adrenal Medulla",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Epinephrine (adrenaline) is produced by the adrenal medulla — the inner portion of the adrenal glands, which sit on top of the kidneys (one adrenal gland on each kidney). When the brain perceives stress, fear, danger, or vigorous exercise, the sympathetic nervous system stimulates the adrenal medulla to rapidly release epinephrine into the bloodstream. The effects of epinephrine constitute the fight-or-flight response: increased heart rate and cardiac output, raised blood pressure, elevated blood glucose (by breaking down glycogen stores), dilated airways (bronchodilation — easier breathing), dilated pupils, and redirection of blood to skeletal muscles.\n\n**Why each option is wrong:**\n\n- **A. Thyroid gland** — produces thyroxine (T3/T4) to regulate metabolic rate, and calcitonin to regulate calcium. Does not produce epinephrine.\n- **B. Pituitary gland** — the master gland, producing TSH, GH, ACTH, FSH, LH, ADH, oxytocin, and prolactin. Does not produce epinephrine.\n- **D. Pancreas** — produces insulin (lowers blood sugar), glucagon (raises blood sugar), and digestive enzymes. Does not produce epinephrine.",
    memoryTip: "ADRENALine = from the ADRENAl gland. The hormone's very name was derived from the gland that produces it — adrenaline literally means 'from the adrenal (gland).' 'AD-renal = glands sitting AD-jacent to (on top of) the RENAL (kidney).'",
    difficulty: 2
  },
  {
    id: "Q60",
    text: "Which layer of the heart wall is responsible for contraction?",
    options: ["Endocardium", "Myocardium", "Epicardium", "Pericardium"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Heart Wall Layers",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The myocardium (from Greek myo = muscle + kardia = heart) is the middle and thickest layer of the heart wall. It is composed entirely of cardiac muscle and is the layer that actually contracts and pumps blood. The myocardium is supplied with oxygen and nutrients by the coronary arteries. When a coronary artery is blocked (e.g. by atherosclerosis — fatty plaque), the myocardium it supplies is starved of oxygen, resulting in myocardial infarction (heart attack) — death of myocardial tissue. The myocardium of the left ventricle is the thickest of all four chambers because it must pump blood against the highest pressure (the full systemic circulation).\n\n**Why each option is wrong:**\n\n- **A. Endocardium** — the innermost layer lining the interior of all four chambers and covering the heart valves. It is a thin, smooth layer of endothelial cells that provides a frictionless surface so blood flows without clotting. It does NOT contract.\n- **C. Epicardium** — the outermost layer of the heart wall (also called the visceral pericardium). It is a thin serous membrane containing the coronary blood vessels and some fat. It does NOT contract.\n- **D. Pericardium** — the double-layered fibrous sac that surrounds the entire heart, anchoring it in place and protecting it. It is NOT a layer of the heart wall itself — it is the external housing. Does NOT contract.\n\n**Heart wall layers from outside to inside:**\n\nPericardium (outer sac) → Epicardium (outer wall) → Myocardium (muscle — contracts) → Endocardium (inner lining)",
    memoryTip: "MYO = MUSCle — you see the prefix myo in many muscle-related terms: myocyte = muscle cell; myopathy = muscle disease; myocardial infarction = heart muscle death. MYOcardium = heart MUSCLE layer = the one that contracts.",
    difficulty: 2
  },
  {
    id: "Q61",
    text: "The process of breaking down food into nutrients is called:",
    options: ["Absorption", "Digestion", "Metabolism", "Excretion"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Digestive System",
    subtopic: "Digestive Process",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Digestion is the process of mechanically and chemically breaking down food into smaller molecules (nutrients) that can be absorbed into the bloodstream. Mechanical digestion includes chewing (in the mouth) and churning (in the stomach). Chemical digestion involves enzymes (biological catalysts that speed up the breakdown) and acids that break down: carbohydrates into simple sugars (glucose), proteins into amino acids, and fats into fatty acids and glycerol — all small enough to pass through the intestinal wall into the blood.\n\n**Why each option is wrong:**\n\n- **A. Absorption** — occurs after digestion. It is the passage of already-digested, small nutrient molecules through the intestinal wall into the bloodstream and lymphatic system. Absorption ≠ breaking down food. You cannot absorb food until digestion has broken it down first.\n- **C. Metabolism** — refers to all the chemical reactions occurring in body cells after nutrients have been absorbed. It includes using glucose for energy (catabolism) and building new molecules like proteins and hormones (anabolism). Metabolism happens at the cellular level, downstream of digestion and absorption.\n- **D. Excretion** — the removal of waste products from the body: urine from the kidneys, CO₂ from the lungs, faeces from the bowel, sweat from the skin. Excretion is the final step, not the first.",
    memoryTip: "The four-step process in order: Dexter Always Makes Excuses = Digestion → Absorption → Metabolism → Excretion.",
    difficulty: 1
  },
  {
    id: "Q62",
    text: "Which bone forms the forehead?",
    options: ["Parietal bone", "Temporal bone", "Frontal bone", "Occipital bone"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Skeletal System",
    subtopic: "Cranial Bones",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The frontal bone is the single cranial bone that forms the forehead and the roof of the orbital cavities (the bony sockets of the eyes). \"Frontal\" means \"at the front\" — and the forehead IS the front of the skull. It also forms part of the floor of the front portion of the cranial cavity (where the frontal lobe of the brain sits).\n\n**Why each option is wrong:**\n\n- **A. Parietal bones** — there are two parietal bones, one on each side. They form the top and sides (the \"crown\" and side walls) of the skull above the ears. \"Parietal\" comes from Latin paries = wall. They form the roof and sides but not the front/forehead.\n- **B. Temporal bones** — there are two temporal bones, one on each side, forming the lower sides of the skull near the temples (the area beside the eyes) and the ears. They house the structures of the inner ear. \"Temporal\" = temples (you can feel your pulse here, marking time). They are on the sides, not the front.\n- **D. Occipital bone** — forms the back and base of the skull. It contains the foramen magnum — the large hole through which the brainstem connects to the spinal cord. \"Occipital\" refers to the back of the head/neck region.",
    memoryTip: "FRONT-al bone = FRONT of skull = FOREHEAD. The word is completely self explanatory. Skull bones by position: Front = Frontal. Top/sides = Parietal. Side/ears = Temporal. Back = Occipital.",
    difficulty: 1
  },
  {
    id: "Q63",
    text: "The primary function of hemoglobin is to:",
    options: ["Fight infection", "Transport oxygen", "Clot blood", "Regulate pH"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Blood & Haematology",
    subtopic: "Haemoglobin Function",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Haemoglobin (Hb) is the iron-containing protein found inside red blood cells. It is the molecule responsible for blood's red colour. Each haemoglobin molecule has four protein chains (globin), each containing a haem group with an iron (Fe²⁺) atom at its centre — each iron atom binds one oxygen molecule. So one haemoglobin molecule carries four oxygen molecules. In the lungs, haemoglobin binds oxygen to become oxyhaemoglobin (bright red). In body tissues with low oxygen levels, it releases the oxygen and becomes deoxyhaemoglobin (darker red/maroon).\n\n**Why each option is wrong:**\n\n- **A. Fight infection** — fighting infection is the role of white blood cells and antibodies (immunoglobulins). Haemoglobin has no immune function.\n- **C. Clot blood** — blood clotting is the role of platelets and plasma proteins (particularly fibrinogen, which becomes fibrin). Haemoglobin is not involved in clotting.\n- **D. Regulate pH** — while haemoglobin does have a minor buffering capacity (it can bind hydrogen ions H⁺ and thus help neutralise acidity), this is not its primary function. The main blood pH regulators are the kidneys and lungs operating through the bicarbonate (HCO₃⁻) buffer system.",
    memoryTip: "Hb = Hauling O₂ Beautifully. Anaemia (low haemoglobin) causes tiredness, paleness, and breathlessness — because not enough oxygen is being delivered to tissues. This clinical picture is the clearest demonstration of haemoglobin's primary job.",
    difficulty: 1
  },
  {
    id: "Q64",
    text: "Which structure produces cerebrospinal fluid?",
    options: ["Ventricles", "Choroid plexus", "Meninges", "Cerebellum"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Brain Coverings and CSF",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The choroid plexus is a specialised network of cells (ependymal cells) and capillaries found lining the ventricles (fluid-filled spaces) of the brain. It produces cerebrospinal fluid (CSF) — the clear, colourless fluid that continuously surrounds and cushions the brain and spinal cord. Approximately 500 mL of CSF is produced daily, though only about 150 mL circulates at any given time (the rest is continuously reabsorbed). CSF functions as a liquid shock absorber (protecting brain and spinal cord from sudden movements), provides buoyancy (the brain \"floats\" in CSF, reducing its effective weight from ~1,400 g to approximately 25 g), removes metabolic waste from neural tissue, and maintains a stable chemical environment.\n\n**Why each option is wrong:**\n\n- **A. Ventricles** — the four hollow, fluid-filled spaces within the brain that contain CSF and through which it circulates. The ventricles are the channels/canals, not the production site. The choroid plexus, which lines the ventricles, is the factory. The ventricle is the warehouse, not the factory.\n- **C. Meninges** — the three protective membranes (dura mater = tough outer layer; arachnoid mater = middle layer; pia mater = thin inner layer) that wrap around the brain and spinal cord. CSF flows in the subarachnoid space between the arachnoid and pia mater, but the meninges themselves do not produce CSF.\n- **D. Cerebellum** — the brain region controlling balance and coordination. It does not produce CSF.",
    memoryTip: "Choroid Plexus = Chose to Produce CSF. The choroid plexus is the brain's own built-in CSF factory. Ventricles = the canals/pipes. Meninges = the wrapping. Choroid plexus = the manufacturer.",
    difficulty: 2
  },
  {
    id: "Q65",
    text: "The vocal cords are located in the:",
    options: ["Pharynx", "Larynx", "Trachea", "Bronchi"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Respiratory System",
    subtopic: "Upper Respiratory Tract",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The larynx (voice box) is a cartilaginous structure in the neck that contains the vocal cords (vocal folds) — two folds of mucous membrane stretched across the larynx. When air passes through the larynx during exhalation, the vocal cords vibrate against each other, producing sound. The pitch of the voice depends on how tightly the vocal cords are stretched by the surrounding muscles (tighter = higher pitch; looser = lower pitch). Volume depends on how forcefully air passes through. The larynx also protects the lower airway — the epiglottis at its entrance closes during swallowing.\n\n**Why each option is wrong:**\n\n- **A. Pharynx** — the throat, the shared passageway above the larynx for both air and food. It shapes and resonates sound but does not contain vocal cords and does not generate voice.\n- **C. Trachea** — the windpipe, below the larynx. It carries air from the larynx to the bronchi. It contains cartilage rings but no vocal cords.\n- **D. Bronchi** — the branches of the trachea entering the left and right lungs. Even further below the larynx. No vocal cords.",
    memoryTip: "LARYNGITIS (inflammation of the larynx) makes you LOSE YOUR VOICE. This clinical fact directly proves that the vocal cords — and therefore voice — are located in the larynx. No larynx function = no voice.",
    difficulty: 1
  },
  {
    id: "Q66",
    text: "Which hormone is responsible for the fight-or-flight response?",
    options: ["Insulin", "Cortisol", "Adrenaline (epinephrine)", "Thyroxine"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Endocrine System",
    subtopic: "Adrenal Medulla / Stress Response",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Adrenaline (epinephrine) is the classic fight-or-flight hormone, produced by the adrenal medulla (inner part of the adrenal glands). When you perceive danger or acute stress, the hypothalamus activates the sympathetic nervous system, which signals the adrenal medulla to release adrenaline within seconds. The effects prepare your body to either face the threat or flee: heart rate increases (more blood to muscles), breathing rate and depth increase (more oxygen), blood glucose rises (energy mobilised from glycogen stores), airways dilate (more airflow), pupils dilate (improved vision), and blood is redirected from digestive organs to skeletal muscles.\n\n**Why each option is wrong:**\n\n- **A. Insulin** — produced by the pancreas. Insulin lowers blood sugar and promotes energy storage — the complete opposite of fight-or-flight, which needs to mobilise energy rapidly. Insulin is a \"rest and digest\" hormone, not a stress hormone.\n- **B. Cortisol** — produced by the adrenal cortex (outer part of the adrenal gland). Cortisol is also a stress hormone, but it mediates the sustained, prolonged stress response (acting over hours to days), not the immediate acute fight-or-flight reaction. Adrenaline acts within seconds; cortisol acts over hours. Both are stress hormones from the adrenal gland but from different layers and with different time courses.\n- **D. Thyroxine** — produced by the thyroid gland, it regulates the baseline metabolic rate continuously. It does not respond acutely to danger or mediate the fight-or-flight response.",
    memoryTip: "ADRENALINE = ALARM line. When the alarm (danger) sounds, adrenaline fires immediately. Fight-or-flight effects: Racing heart, Rapid breathing, Redirected blood to muscles, Rising blood sugar, Ready muscles = the body on full alert.",
    difficulty: 1
  },
  {
    id: "Q67",
    text: "The longest bone in the human body is:",
    options: ["Tibia", "Fibula", "Femur", "Humerus"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Skeletal System",
    subtopic: "Lower Limb Bones",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The femur is the thigh bone — the single large bone running from the hip joint to the knee joint. It is the longest, strongest, and heaviest bone in the human body, measuring approximately 45–50 cm in an average adult. Its exceptional length and strength are necessary for bearing the body's full weight and for the powerful movements of walking, running, and jumping. The femur makes up approximately one quarter of a person's total height.\n\n**Why each option is wrong:**\n\n- **A. Tibia** — the larger and stronger of the two lower leg bones (the shinbone), running from the knee to the ankle. It is one of the body's strongest bones (the second strongest after the femur) and is the primary weight-bearing bone of the lower leg, but it is shorter than the femur.\n- **B. Fibula** — the smaller, thinner bone alongside the tibia in the lower leg. It is NOT a primary weight-bearing bone (it mainly provides muscle attachment points and helps stabilise the ankle joint). Much shorter than the femur.\n- **D. Humerus** — the upper arm bone, running from the shoulder joint to the elbow. A long bone, but shorter than the femur since the thigh is longer than the upper arm in most people.",
    memoryTip: "Your THIGH is the longest single segment of your leg → the THIGH BONE (femur) is the longest bone. Femur = famous for being the longest. The femur is also where red bone marrow (for blood cell production) is found in adults.",
    difficulty: 1
  },
  {
    id: "Q68",
    text: "Which part of the digestive system absorbs most nutrients?",
    options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Digestive System",
    subtopic: "Small Intestine Function",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The small intestine (approximately 6 metres long) is the primary site of nutrient absorption in the body. It is remarkably specialised for this purpose through three structural adaptations that progressively maximise surface area: circular folds (plicae circulares — large folds of the intestinal wall), villi (finger-like projections from the surface of the folds), and microvilli (even tinier projections covering each villus, forming the \"brush border\"). Together, these three levels of folding multiply the absorptive area exponentially, making the small intestine the body's supreme nutrient absorption machine.\n\n**Why each option is wrong:**\n\n- **A. Stomach** — primarily a site of mechanical and chemical breakdown of food (not absorption). The stomach churns food and secretes acid and pepsin to begin protein digestion. Very limited absorption occurs (only water, alcohol, aspirin, and certain medications are absorbed through the stomach wall).\n- **C. Large intestine** — primarily absorbs water and electrolytes (and some vitamins produced by gut bacteria). By the time material arrives at the large intestine, the small intestine has already extracted virtually all the major nutrients.\n- **D. Esophagus** — purely a transport tube carrying food from the throat to the stomach. No digestion or absorption whatsoever occurs in the esophagus.",
    memoryTip: "250 m² = tennis court = small intestine surface area. The three levels of folding (folds → villi → microvilli) multiply the absorptive area exponentially.",
    difficulty: 1
  },
  {
    id: "Q69",
    text: "The autonomic nervous system is divided into:",
    options: ["Somatic and sympathetic", "Sympathetic and parasympathetic", "Central and peripheral", "Sensory and motor"],
    correctAnswerIndex: 1,
    unit: "Anatomy & Physiology",
    topic: "Nervous System",
    subtopic: "Autonomic Nervous System",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The Autonomic Nervous System (ANS) controls involuntary body functions — things that happen automatically without conscious thought (heart rate, breathing rate, digestion, pupil size, gland secretion, etc.). It has exactly two divisions that generally work in opposition to maintain homeostasis: the Sympathetic division (\"fight or flight\") — activated by stress, danger, or exercise, it increases heart rate, breathing, and blood pressure, dilates pupils, mobilises blood sugar, and redirects blood to muscles, while suppressing digestion. The Parasympathetic division (\"rest and digest\") — activated during rest and recovery, it decreases heart rate, promotes digestion and nutrient absorption, constricts pupils, and conserves energy.\n\n**Why each option is wrong:**\n\n- **A. Somatic and Sympathetic** — these two are NOT paired together. The somatic nervous system controls voluntary movements of skeletal muscles (things you consciously do). It is an entirely separate part of the nervous system from the autonomic system. Pairing somatic with sympathetic is incorrect.\n- **C. Central and Peripheral** — this is the primary top-level anatomical division of the entire nervous system (brain + spinal cord vs. all other nerves), not a division of the autonomic nervous system specifically.\n- **D. Sensory and Motor** — these describe the direction of signal travel in nerves (sensory/afferent = signals going toward CNS; motor/efferent = signals going away from CNS). These are functional descriptions of nerve fibres, not a division of the autonomic nervous system.",
    memoryTip: "Sympathetic = Stress, Sprint, Sweat, Survive. Parasympathetic = Peace, Pause, Process, Produce. The two are constant opposites keeping the body in balance.",
    difficulty: 2
  },
  {
    id: "Q70",
    text: "Which type of blood vessel carries blood away from the heart?",
    options: ["Veins", "Capillaries", "Arteries", "Venules"],
    correctAnswerIndex: 2,
    unit: "Anatomy & Physiology",
    topic: "Cardiovascular System",
    subtopic: "Blood Vessels",
    section: "Introductory Block",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Arteries carry blood away from the heart — this is the defining characteristic of an artery, regardless of whether the blood is oxygenated or deoxygenated (as covered in Q44). Because blood leaves the heart under high pressure (generated by ventricular contraction), arteries have thick, elastic, and muscular walls to withstand and smooth out this pressure. The largest artery is the aorta (from the left ventricle). Arteries branch progressively into smaller arterioles, which then branch into microscopic capillaries where exchange takes place.\n\n**Why each option is wrong:**\n\n- **A. Veins** — carry blood toward the heart (returning blood back). Because they carry blood under lower pressure (the force of the heartbeat has dissipated by the time blood reaches the veins), they have thinner walls than arteries and contain valves to prevent backflow. The largest veins are the superior and inferior vena cava (entering the right atrium).\n- **B. Capillaries** — the microscopic vessels connecting arterioles to venules. Their primary role is exchange of substances between blood and tissues. They do not carry blood over long distances away from the heart.\n- **D. Venules** — small vessels that collect blood FROM capillaries and drain into veins. They carry blood toward the heart (not away from it).",
    memoryTip: "Arteries = carry blood Away from the heart (both start with A). Veins = carry blood back Via their valves toward the heart.",
    difficulty: 1
  }
];

const ALL_RAW_QUESTIONS = [
  ...SEPTEMBER_2023_PAPER,
  ...SEPTEMBER_2023_PAPER_2,
  ...MED_SURG_EXAM_PAPER_PART1,
  ...MED_SURG_EXAM_PAPER_PART2,
  ...NCK_KRN_PAPER
];

const NUM_PAPERS = 5;
const QS_PER_PAPER = Math.ceil(ALL_RAW_QUESTIONS.length / NUM_PAPERS);

export const QUESTIONS: Question[] = ALL_RAW_QUESTIONS.map((q, index) => {
  const paperNum = Math.floor(index / QS_PER_PAPER) + 1;
  
  // Determine section based on unit if not explicitly set correctly
  let section = q.section;
  if (q.unit === "Anatomy & Physiology" || q.unit === "Nursing Fundamentals") {
    section = "Introductory Block";
  } else {
    section = "Block 1";
  }

  return {
    ...q,
    category: q.topic, // Ensure category is populated
    section,
    sourcePaper: `Paper ${paperNum}`
  } as Question;
});

// Group by paper
export const QUESTIONS_BY_PAPER: Record<string, Question[]> = {};
QUESTIONS.forEach(q => {
  if (!QUESTIONS_BY_PAPER[q.sourcePaper]) {
    QUESTIONS_BY_PAPER[q.sourcePaper] = [];
  }
  QUESTIONS_BY_PAPER[q.sourcePaper].push(q);
});

// Organize each paper into branching levels
export interface Track {
  name: string;
  levels: Question[][];
}

export interface PaperStructure {
  broadLevels: Question[][];
  tracks: Track[];
}

export const PAPER_STRUCTURES: Record<string, PaperStructure> = {};
export const PAPER_TOTAL_LEVELS: Record<string, number> = {};

const TRACK_DEFINITIONS = [
  {
    name: "Anatomy & Systems",
    categories: ["Skeletal System", "Muscular System", "Integumentary System", "Nervous System", "Special Senses", "Neurological System", "Musculoskeletal System", "Reproductive System", "Anatomy & Physiology"]
  },
  {
    name: "Physiology & Regulation",
    categories: ["Cardiovascular System", "Respiratory System", "Digestive System", "Urinary System", "Endocrine System", "Homeostasis", "Homeostasis & Feedback", "Urinary / Fluid Balance", "Homeostasis & Fluid Balance", "Urinary / Endocrine", "Gastrointestinal System", "Renal System", "Fluid & Electrolytes"]
  },
  {
    name: "Cellular & Immune",
    categories: ["Cell Biology & Tissues", "Blood & Haematology", "Lymphatic & Immune System", "Chemistry & Cell Biology", "Haematology", "Oncology", "Immune System"]
  },
  {
    name: "Clinical & Professional",
    categories: ["Professional Practice & Ethics", "Fundamentals of Nursing", "Paediatric Nursing", "Medical-Surgical Nursing", "Pharmacology", "Mental Health Nursing", "Community Health Nursing"]
  }
];

Object.entries(QUESTIONS_BY_PAPER).forEach(([paper, questions]) => {
  // Sort by difficulty within the paper
  const sorted = [...questions].sort((a, b) => a.difficulty - b.difficulty);
  
  // Broad levels: first 20 questions (2 levels)
  const broadQuestions = sorted.slice(0, 20);
  const remainingQuestions = sorted.slice(20);
  
  const broadLevels: Question[][] = [];
  for (let i = 0; i < broadQuestions.length; i += 10) {
    broadLevels.push(broadQuestions.slice(i, i + 10));
  }
  
  const tracks: Track[] = TRACK_DEFINITIONS.map(def => {
    const trackQs = remainingQuestions.filter(q => def.categories.includes(q.category));
    const trackLevels: Question[][] = [];
    for (let i = 0; i < trackQs.length; i += 10) {
      trackLevels.push(trackQs.slice(i, i + 10));
    }
    return { name: def.name, levels: trackLevels };
  }).filter(t => t.levels.length > 0);
  
  // Any leftover questions that didn't match a track category
  const assignedQs = new Set(tracks.flatMap(t => t.levels.flat()).map(q => q.id));
  const unassignedQs = remainingQuestions.filter(q => !assignedQs.has(q.id));
  if (unassignedQs.length > 0) {
    const extraLevels: Question[][] = [];
    for (let i = 0; i < unassignedQs.length; i += 10) {
      extraLevels.push(unassignedQs.slice(i, i + 10));
    }
    tracks.push({ name: "General Practice", levels: extraLevels });
  }

  PAPER_STRUCTURES[paper] = { broadLevels, tracks };
  
  // For backward compatibility
  PAPER_TOTAL_LEVELS[paper] = broadLevels.length + tracks.reduce((acc, t) => acc + t.levels.length, 0);
});

// For backward compatibility or default view
export const TOTAL_LEVELS = Math.max(...Object.values(PAPER_TOTAL_LEVELS));
export const PAPER_LEVELS: Record<string, Record<number, Question[]>> = {};

// Export unique topics for drills
export const ALL_TOPICS = Array.from(new Set(QUESTIONS.map(q => q.topic))).sort();
export const TOPICS_BY_SECTION = {
  "Introductory Block": Array.from(new Set(QUESTIONS.filter(q => q.section === "Introductory Block").map(q => q.topic))).sort(),
  "Block 1": Array.from(new Set(QUESTIONS.filter(q => q.section === "Block 1").map(q => q.topic))).sort()
};

Object.entries(PAPER_STRUCTURES).forEach(([paper, structure]) => {
  PAPER_LEVELS[paper] = {};
  let levelIdx = 1;
  structure.broadLevels.forEach(l => { PAPER_LEVELS[paper][levelIdx++] = l; });
  structure.tracks.forEach(t => {
    t.levels.forEach(l => { PAPER_LEVELS[paper][levelIdx++] = l; });
  });
});
export const LEVELS = PAPER_LEVELS[Object.keys(PAPER_LEVELS)[0]] || {};
