
import { Question } from '../types';

export const ANATOMY_QUESTIONS: Question[] = [
  {
    id: "Q1",
    text: "What is the basic unit of life?",
    options: ["Tissue", "Organ", "Cell", "System"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Cell Biology Cell Structure",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cell is the smallest unit that can carry out all basic functions of life on its own — it takes in nutrients, produces energy, grows, responds to its environment, and reproduces. The human body contains approximately 37 trillion cells. This is one of the central principles of Cell Theory.",
    whyWrong: [
      "Tissue — a tissue is a group of similar cells working together (e.g. muscle tissue, nerve tissue). It is bigger and more complex than a cell, so it cannot be the basic (smallest) unit.",
      "Organ — an organ is made of two or more different tissues working together (e.g. the heart is made of cardiac muscle tissue, connective tissue, and nerve tissue). Even more complex than a tissue.",
      "System — a system (e.g. digestive system, nervous system) is the largest level of organisation, made of several organs working together. The complete opposite of 'basic.'"
    ],
    memoryTip: "'Clever Tigers Often Swim' = Cell, Tissue, Organ, System. Cell is always first because it is the smallest and most basic.",
    difficulty: 1
  },
  {
    id: "Q2",
    text: "Which of the following is NOT a function of the skeletal system?",
    options: ["Support", "Protection", "Movement", "Digestion"],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Skeletal System Functions of the Skeleton",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The skeleton has nothing to do with digestion — the breakdown and absorption of food. Digestion is entirely the job of the digestive system (stomach, intestines, liver, etc.). Bone is hard, rigid tissue that does not produce digestive enzymes, does not break down food, and does not absorb nutrients.",
    whyWrong: [
      "Support — the skeleton is the body's structural framework. Without it, your body would collapse like a deflated balloon. Bones give the body its shape and hold up its weight.",
      "Protection — the skull protects the brain; the rib cage protects the heart and lungs; the vertebrae protect the spinal cord; the pelvis protects pelvic organs.",
      "Movement — bones act as levers that muscles pull on to create movement. Without bones, muscles would have nothing to pull against."
    ],
    memoryTip: "All six skeletal functions — 'Seriously Protect My Blood So Move': Support, Protection, Movement, Blood cell production (red bone marrow), Storage of minerals (calcium and phosphorus), Metabolic function (energy storage in yellow marrow).",
    difficulty: 1
  },
  {
    id: "Q3",
    text: "The muscular system is responsible for:",
    options: ["Protection of organs", "Movement of the body", "Production of blood cells", "Storage of minerals"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Muscular System Functions of Muscles",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The primary function of the muscular system is movement. Muscles contract (shorten) and relax to pull on bones, move joints, and create all body movements — from walking and running to swallowing and blinking. There are over 600 muscles in the human body, accounting for approximately 40% of total body weight.",
    whyWrong: [
      "Protection of organs — protection is primarily a function of the skeletal system (skull, rib cage, vertebral column). While abdominal muscles do provide some soft-tissue protection, this is not the muscular system's primary function.",
      "Production of blood cells — blood cell production (haematopoiesis) occurs in the red bone marrow inside certain bones. This is a skeletal system function.",
      "Storage of minerals — calcium and phosphorus are stored in bone (skeletal system). Muscles store glycogen (energy fuel) but not minerals."
    ],
    difficulty: 1
  },
  {
    id: "Q4",
    text: "Which type of muscle is found in the heart?",
    options: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Voluntary muscle"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Muscular System Types of Muscle Tissue",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Cardiac muscle is found only in the heart — and nowhere else in the body. It is involuntary (you cannot consciously control your heartbeat — your heart beats automatically even when you sleep). It is striated (has a striped appearance under a microscope). It contains intercalated discs — special connections between cells that allow electrical signals to pass rapidly so all heart cells contract together as one coordinated unit. It is extremely fatigue-resistant, beating approximately 100,000 times per day.",
    whyWrong: [
      "Skeletal muscle — attached to bones and creates voluntary movement (e.g. biceps, quadriceps). You consciously control it. Not found in the heart.",
      "Smooth muscle — lines the walls of hollow organs and tubes (blood vessels, intestines, stomach, bladder, uterus). It is involuntary but does not have striations and is not found in the heart.",
      "Voluntary muscle — this is simply another name for skeletal muscle. Since heart muscle is involuntary (you cannot choose to stop it), it is by definition not voluntary muscle."
    ],
    memoryTip: "'CARDIAC = CARDIO = HEART.' The word cardiac literally means 'relating to the heart' (from Greek kardia).",
    difficulty: 2
  },
  {
    id: "Q5",
    text: "The nervous system is divided into:",
    options: ["Sensory and motor systems", "Central and peripheral nervous systems", "Sympathetic and parasympathetic systems", "Somatic and autonomic systems"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Nervous System System Organisation",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The primary anatomical division of the nervous system — the most fundamental way it is classified — is into the Central Nervous System (CNS) and the Peripheral Nervous System (PNS). The CNS consists of the brain and spinal cord (the command centre). The PNS consists of all nerves outside the brain and spinal cord (the wiring connecting the CNS to the rest of the body).",
    whyWrong: [
      "Sensory and motor — these describe the direction of nerve signal travel. Sensory (afferent) carries signals toward the CNS; motor (efferent) carries commands away from the CNS. These are functional descriptions of nerve fibres, not the primary structural division.",
      "Sympathetic and parasympathetic — these are the two branches of the Autonomic Nervous System (ANS), which is itself a subdivision of the PNS. This is a third-level division, not the primary one.",
      "Somatic and autonomic — these are the two divisions of the peripheral nervous system specifically. A correct division, but it is the second level — a subdivision of the PNS — not the top-level primary division."
    ],
    difficulty: 2
  },
  {
    id: "Q6",
    text: "Which organ is part of the digestive system?",
    options: ["Kidney", "Liver", "Lung", "Heart"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Digestive System Digestive Organs",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The liver is a major digestive organ. Its digestive functions include producing bile (a fluid stored in the gallbladder and released into the small intestine to break down fats), metabolising nutrients absorbed from the intestines (processing sugars, proteins, and fats), and detoxifying drugs, alcohol, and toxins from the blood. It is also the largest internal organ, weighing approximately 1.5 kg.",
    whyWrong: [
      "Kidney — part of the urinary system. It filters blood and produces urine.",
      "Lung — part of the respiratory system. It exchanges gases (oxygen in, carbon dioxide out).",
      "Heart — part of the cardiovascular system. It pumps blood around the body."
    ],
    memoryTip: "Digestive organs: Mouth → Pharynx → Esophagus → Stomach → Small intestine → Large intestine → Rectum → Anus. Accessory organs: Liver, Gallbladder, Pancreas.",
    difficulty: 2
  },
  {
    id: "Q7",
    text: "The respiratory system is responsible for:",
    options: ["Pumping blood", "Gas exchange", "Filtering waste", "Producing hormones"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Respiratory System System Functions",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The primary function of the respiratory system is gas exchange — bringing oxygen (O₂) into the body and expelling carbon dioxide (CO₂). This process occurs in the alveoli (tiny air sacs in the lungs), where O₂ crosses from inhaled air into the bloodstream and CO₂ crosses from the blood back into the air to be exhaled. All body cells need oxygen to produce energy; CO₂ is a waste product of that energy production.",
    whyWrong: [
      "Pumping blood — this is the function of the heart (cardiovascular system). The lungs receive blood for oxygenation but do not pump it.",
      "Filtering waste — filtering blood waste is primarily the function of the kidneys (urinary system). While the lungs do remove CO₂ (a metabolic waste gas), they are not described primarily as a waste filtering organ.",
      "Producing hormones — this is the function of the endocrine system (pituitary, thyroid, adrenal glands, etc.). The respiratory system does not produce hormones."
    ],
    difficulty: 1
  },
  {
    id: "Q8",
    text: "Which of the following is a component of blood?",
    options: ["Neurons", "Nephrons", "Platelets", "Alveoli"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Blood & Haematology Blood Components",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Platelets (thrombocytes) are one of the four main components of blood. They are tiny cell fragments produced in the bone marrow from large cells called megakaryocytes. Their primary function is haemostasis (blood clotting) — when a blood vessel is damaged, platelets rush to the site, stick together, and form a plug to stop bleeding. Without enough platelets, even a minor cut would bleed uncontrollably.",
    whyWrong: [
      "Neurons — nerve cells that transmit electrical signals. They are part of the nervous system. They do not circulate in the blood.",
      "Nephrons — the microscopic functional units of the kidney that filter blood to form urine. They are kidney tissue structures, not blood cells.",
      "Alveoli — the tiny air sacs in the lungs where gas exchange occurs. They are respiratory structures, not blood components."
    ],
    memoryTip: "'RWPP = Red, White, Platelets, Plasma.' None of the wrong options (neurons, nephrons, alveoli) are blood components — they each belong to a completely different organ system.",
    difficulty: 2
  },
  {
    id: "Q9",
    text: "The cardiovascular system consists of:",
    options: ["Heart and blood vessels", "Lungs and airways", "Kidneys and bladder", "Stomach and intestines"],
    correctAnswerIndex: 0,
    category: "Anatomy & Physiology",
    topic: "Cardiovascular System System Overview",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cardiovascular system (also called the circulatory system) consists of the heart (the muscular pump that drives blood circulation) and blood vessels (arteries, veins, and capillaries — the network of tubes through which blood travels). Together they form a closed loop that continuously circulates blood, delivering oxygen and nutrients to all cells and removing waste products.",
    whyWrong: [
      "Lungs and airways — these form the respiratory system. The lungs interact closely with the cardiovascular system (receiving blood for oxygenation) but are not part of it.",
      "Kidneys and bladder — these form the urinary system.",
      "Stomach and intestines — these are part of the digestive system."
    ],
    memoryTip: "'CARDIOvascular = CARDIO (heart) + VASCULAR (blood vessels).' The word itself tells you exactly what the system contains.",
    difficulty: 1
  },
  {
    id: "Q10",
    text: "Which gland is known as the 'master gland'?",
    options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Pineal gland"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Endocrine System Pituitary Gland",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The pituitary gland is a pea-sized gland at the base of the brain, connected to the hypothalamus by a stalk. It is called the 'master gland' because it controls most other endocrine glands by secreting tropic hormones — hormones whose job is to target and regulate other glands. Pituitary hormones include: TSH (stimulates the thyroid), ACTH (stimulates the adrenal gland), FSH and LH (control reproductive organs), GH (growth hormone), ADH (controls kidney water reabsorption), oxytocin, and prolactin.",
    whyWrong: [
      "Thyroid gland — produces thyroxine to regulate metabolism. It is controlled by the pituitary (via TSH). It is a subject, not the master.",
      "Adrenal gland — produces cortisol, aldosterone, and adrenaline. It is also controlled by the pituitary (via ACTH). Not the master.",
      "Pineal gland — produces melatonin, which regulates the sleep-wake cycle (circadian rhythm). It does not control other glands."
    ],
    memoryTip: "'Pituitary = the Principal of the endocrine school — it tells all the other glands what to do.'",
    difficulty: 2
  },
  {
    id: "Q11",
    text: "The integumentary system includes:",
    options: ["Bones and joints", "Skin, hair, and nails", "Muscles and tendons", "Nerves and brain"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Integumentary System System Components",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The integumentary system (from Latin integumentum = covering) is the body's external covering system. It includes the skin (the body's largest organ), hair, nails, sweat glands, and sebaceous (oil) glands. Its functions include protection (from UV radiation, pathogens, and physical damage), temperature regulation, sensation (touch, pain, temperature, pressure), vitamin D synthesis, and minor excretion through sweat.",
    whyWrong: [
      "Bones and joints — these form the skeletal system. They are internal hard structures, not the external covering.",
      "Muscles and tendons — these form the muscular system. They are internal soft tissue structures.",
      "Nerves and brain — these form the nervous system. While sensory nerves do extend into the skin to provide sensation, the skin itself belongs to the integumentary system, not the nervous system."
    ],
    memoryTip: "'INtegumentary = the body's INtegument (outer envelope/wrapper) = skin + hair + nails.'",
    difficulty: 1
  },
  {
    id: "Q12",
    text: "Which organ filters blood and produces urine?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Urinary System Kidney Function",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The kidneys are two bean-shaped organs sitting behind the peritoneum (the lining of the abdominal cavity), one on each side of the spine. They filter approximately 180 litres of blood per day through millions of tiny filtering units called nephrons, producing approximately 1–2 litres of urine per day. The kidneys also regulate blood pressure (via the hormone renin), maintain blood pH, control water and electrolyte balance, and produce erythropoietin (which stimulates red blood cell production).",
    whyWrong: [
      "Liver — detoxifies the blood and converts ammonia to urea (which the kidneys then excrete as part of urine), but the liver does not filter blood the same way kidneys do and does not produce urine.",
      "Pancreas — produces digestive enzymes and hormones (insulin and glucagon). Has no role in blood filtration or urine production.",
      "Spleen — filters blood by removing old and damaged red blood cells, and is part of the lymphatic/immune system. However, it does not produce urine."
    ],
    difficulty: 1
  },
  {
    id: "Q13",
    text: "The lymphatic system is involved in:",
    options: ["Digestion", "Immunity", "Reproduction", "Respiration"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Lymphatic & Immune System System Functions",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The lymphatic system has three main functions, with immunity being a primary one. Immunity: lymph nodes contain lymphocytes (T-cells and B-cells) and macrophages that identify and destroy pathogens, cancer cells, and foreign substances. When you have an infection, your lymph nodes often swell and become tender as they fill with immune cells actively fighting the infection. The system also maintains fluid balance (returning excess tissue fluid to the bloodstream, preventing oedema/swelling) and absorbs dietary fats from the small intestine via specialised lymphatic vessels called lacteals.",
    whyWrong: [
      "Digestion — digestion is a function of the digestive system. While lymphatic lacteals absorb fats from the digestive tract, the lymphatic system does not digest food.",
      "Reproduction — reproduction is the function of the reproductive system.",
      "Respiration — gas exchange is the function of the respiratory system."
    ],
    memoryTip: "'Lymph nodes = the body's security checkpoints.' They screen lymph fluid for pathogens, like security at an airport screening passengers.",
    difficulty: 2
  },
  {
    id: "Q14",
    text: "Which bone protects the brain?",
    options: ["Vertebrae", "Skull", "Ribs", "Pelvis"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Skeletal System Axial Skeleton / Cranial Bones",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The skull (cranium) is a set of 22 fused bones forming a hard protective shell around the brain. The cranium (8 bones) surrounds the brain directly, while the facial bones (14 bones) form the face. The skull is specifically designed to absorb and distribute impacts to minimise brain injury.",
    whyWrong: [
      "Vertebrae — the 33 bones of the spinal column protect the spinal cord, not the brain. The vertebrae have holes in their centres that align to form the vertebral canal, through which the spinal cord runs.",
      "Ribs — the 12 pairs of ribs form the rib cage, which protects the heart and lungs.",
      "Pelvis — the hip bones protect the pelvic organs (bladder, uterus, rectum)."
    ],
    memoryTip: "A skull cap/helmet is worn on your head to protect your brain. The skull IS the body's permanent, built-in helmet.",
    difficulty: 1
  },
  {
    id: "Q15",
    text: "The functional unit of the nervous system is:",
    options: ["Nephron", "Neuron", "Alveolus", "Sarcomere"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Nervous System Nerve Cell Structure",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The neuron (nerve cell) is the basic functional and structural unit of the nervous system, specialised to receive, process, and transmit electrical signals (nerve impulses). The human brain alone contains approximately 86 billion neurons. Each neuron has four main parts: dendrites (receive incoming signals), cell body / soma (processes signals, contains the nucleus), axon (transmits the signal away from the cell body), and axon terminals (release neurotransmitters to pass the signal across to the next cell).",
    whyWrong: [
      "Nephron — the functional unit of the kidney. This is the most common exam trap — 'nephron' and 'neuron' look and sound very similar. Remember: Nephron = kidney. Neuron = nervous system.",
      "Alveolus — the functional unit of the lungs. These are the tiny air sacs where gas exchange occurs.",
      "Sarcomere — the functional unit of muscle contraction, not the nervous system."
    ],
    memoryTip: "The NANS rule for functional units: Neuron = Nervous system | Alveolus = Airways (lungs) | Nephron = kidNey | Sarcomere = Skeletal muscle.",
    difficulty: 2
  },
  {
    id: "Q16",
    text: "Which type of joint allows the most movement?",
    options: ["Fibrous joint", "Cartilaginous joint", "Synovial joint", "Fixed joint"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Skeletal System Joints",
    sourcePaper: "September 2023 Past Paper",
    explanation: "A synovial joint is the most common and most freely movable type of joint in the body. They are called 'synovial' because they contain synovial fluid — a slippery, lubricating liquid inside a sealed joint cavity that allows smooth, frictionless movement. Examples include the knee, hip, shoulder, elbow, wrist, and all finger joints. There are six subtypes of synovial joints (hinge, ball-and-socket, pivot, gliding, saddle, condyloid), each allowing different ranges of movement.",
    whyWrong: [
      "Fibrous joint — held together by dense fibrous connective tissue. Allows little to no movement. Best example: the sutures between skull bones — they are fused together and cannot move.",
      "Cartilaginous joint — connected by cartilage (rubbery, flexible tissue). Allows limited movement but not full range. Examples: intervertebral discs between vertebrae, the pubic symphysis (front of the pelvis).",
      "Fixed joint — this is simply another name for a fibrous/immovable joint, the same concept as option A. Fixed = no movement."
    ],
    memoryTip: "'Synovial = Smooth and Slippery.' Synovial fluid is the body's own lubricant. Lubricated = moves freely.",
    difficulty: 2
  },
  {
    id: "Q17",
    text: "The main function of red blood cells is to:",
    options: ["Fight infection", "Clot blood", "Transport oxygen", "Produce antibodies"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Blood & Haematology Red Blood Cell Function",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Red blood cells (RBCs / erythrocytes) are the most abundant cells in blood (approximately 5 million per microlitre). They contain haemoglobin — the iron-containing protein that binds oxygen in the lungs and releases it to body tissues. Each haemoglobin molecule can carry four oxygen molecules. RBCs are biconcave disc-shaped and lack a nucleus when mature, maximising the space available for haemoglobin. They also transport approximately 20–23% of carbon dioxide back to the lungs.",
    whyWrong: [
      "Fight infection — this is the role of white blood cells (leucocytes) — neutrophils, lymphocytes, and macrophages. Red blood cells have no immune function.",
      "Clot blood — blood clotting is the role of platelets and clotting factors such as fibrinogen. Red blood cells are not involved in initiating clotting.",
      "Produce antibodies — antibodies (immunoglobulins) are produced by B lymphocytes (specifically plasma cells, which are differentiated B lymphocytes). Red blood cells do not produce antibodies."
    ],
    memoryTip: "When RBCs are full of oxygen, blood is bright red (oxyhaemoglobin). Low haemoglobin = anaemia = tiredness, paleness, and breathlessness, because tissues are not receiving enough oxygen.",
    difficulty: 1
  },
  {
    id: "Q18",
    text: "Which structure connects muscle to bone?",
    options: ["Ligament", "Tendon", "Cartilage", "Fascia"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Muscular System Connective Tissue / Muscle Attachments",
    sourcePaper: "September 2023 Past Paper",
    explanation: "A tendon is a tough, flexible cord of dense connective tissue (made mainly of collagen fibres) that attaches a muscle to a bone. When a muscle contracts, the force is transmitted through the tendon to pull on the bone and create movement. The most famous example is the Achilles tendon at the back of the ankle, connecting the calf muscles (gastrocnemius and soleus) to the heel bone (calcaneus). Tendons are incredibly strong but have a limited blood supply, which is why tendon injuries heal slowly.",
    whyWrong: [
      "Ligament — a ligament connects bone to bone, not muscle to bone. Ligaments stabilise joints and prevent excessive movement. For example, the anterior cruciate ligament (ACL) in the knee connects the femur to the tibia.",
      "Cartilage — a firm, flexible connective tissue that covers the ends of bones at joints (articular cartilage) and acts as a shock absorber. It does not connect muscle to bone.",
      "Fascia — a sheet of connective tissue that wraps around and encloses muscles, providing organisation and separating muscle groups. It surrounds muscles but does not specifically attach them to bone."
    ],
    memoryTip: "'Tendons = Tie muscle To bone (three T's). Ligaments = Link bone to bone (two L's).'",
    difficulty: 2
  },
  {
    id: "Q19",
    text: "The smallest blood vessels are called:",
    options: ["Arteries", "Veins", "Capillaries", "Venules"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Cardiovascular System Blood Vessels",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Capillaries are the tiniest blood vessels in the body. Their walls are only one cell thick (a single layer of endothelial cells). This ultra-thin wall is essential because it allows the exchange of gases, nutrients, hormones, and waste between the blood and the surrounding tissues. Capillaries are so narrow (approximately 5–10 micrometres in diameter) that red blood cells must pass through them single file. If you uncoiled all the capillaries in your body and laid them end to end, they would stretch approximately 40,000 km.",
    whyWrong: [
      "Arteries — the largest blood vessels. They carry blood away from the heart under high pressure and have thick, muscular, elastic walls. The aorta is the largest artery in the body.",
      "Veins — carry blood toward the heart. They are larger than capillaries, have thinner walls than arteries, and contain valves to prevent backflow (particularly important in the legs, where blood must travel against gravity).",
      "Venules — small veins that collect blood from capillaries and drain it into larger veins. They are larger than capillaries but smaller than veins — still not the smallest."
    ],
    memoryTip: "'CAPillaries = CAPture the exchange.' All real substance exchange between blood and body tissues happens at the capillary level.",
    difficulty: 2
  },
  {
    id: "Q20",
    text: "Which part of the brain controls balance and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Nervous System Brain Anatomy",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cerebellum (Latin: 'little brain') is located at the back and bottom of the brain. Despite being only about 10% of brain volume, it contains over 50% of all brain neurons. Its main functions are: coordination of voluntary movement (making movements smooth and precise), balance and equilibrium (maintaining upright posture), fine motor control (precise movements like writing and playing instruments), and muscle tone. When the cerebellum is damaged, people develop ataxia — a wide, staggering, uncoordinated gait that can look similar to intoxication.",
    whyWrong: [
      "Cerebrum — the largest part of the brain, forming the two large cerebral hemispheres. It controls conscious thought, voluntary movement, sensation, language, memory, emotions, and intelligence. It does not primarily control balance.",
      "Medulla oblongata — the lowest part of the brainstem, controlling vital automatic functions like breathing, heart rate, and blood pressure. Not responsible for balance.",
      "Hypothalamus — deep inside the brain, it controls homeostasis — regulating body temperature, hunger, thirst, sleep cycles, and emotions. It also controls the pituitary gland. Not responsible for balance."
    ],
    memoryTip: "'CereBELLum = BELL = BALANCE.' Or: 'Little brain at the BACK = BALANCE and coordination.'",
    difficulty: 3
  },
  {
    id: "Q21",
    text: "The trachea is part of which system?",
    options: ["Digestive system", "Respiratory system", "Circulatory system", "Nervous system"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Respiratory System Respiratory Tract Anatomy",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The trachea (windpipe) is a rigid tube approximately 12 cm long and 2.5 cm wide, reinforced by C shaped rings of cartilage that keep it permanently open. It carries air from the larynx (voice box) down to the bronchi, which then branch into each lung. It is a central structure of the respiratory tract: nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.",
    whyWrong: [
      "Digestive system — the digestive tube is the esophagus (oesophagus), which runs immediately behind the trachea in the neck. The esophagus carries food; the trachea carries air. They are side by side but go to completely different destinations.",
      "Circulatory system — consists of the heart and blood vessels. The trachea is an airway tube, not a blood vessel.",
      "Nervous system — consists of nerve tissue (brain, spinal cord, nerves). The trachea is cartilaginous airway tissue, not neural tissue."
    ],
    memoryTip: "You can feel the ridges of the trachea in your neck — those ridges are the cartilage rings. It is your windpipe. Wind = air = respiratory system.",
    difficulty: 1
  },
  {
    id: "Q22",
    text: "Which hormone regulates blood sugar levels?",
    options: ["Thyroxine", "Adrenaline", "Insulin", "Cortisol"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Endocrine System Pancreatic Hormones",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Insulin is produced by the beta cells of the islets of Langerhans in the pancreas. It is the primary regulator of blood glucose. After eating, blood glucose rises → the pancreas releases insulin → insulin acts like a key that unlocks cells so glucose can enter → blood glucose returns to normal. In type 1 diabetes, the pancreas does not produce insulin. In type 2 diabetes, cells become resistant to insulin's effects.",
    whyWrong: [
      "Thyroxine — produced by the thyroid gland, it regulates the body's overall metabolic rate (how fast the body uses energy). While it affects metabolism and therefore glucose utilisation, it is not the primary blood glucose regulator.",
      "Adrenaline — the fight-or-flight hormone from the adrenal medulla. It actually raises blood sugar (by breaking down glycogen stores for quick energy during stress) but is not the primary blood glucose regulator.",
      "Cortisol — the stress hormone from the adrenal cortex. It also raises blood sugar during stress. However, it is not the primary, ongoing blood glucose regulator — insulin is."
    ],
    memoryTip: "'INsulin = INvites glucose IN to cells.' No insulin = glucose locked outside cells = accumulates in the blood = dangerously high blood sugar.",
    difficulty: 2
  },
  {
    id: "Q23",
    text: "The largest organ in the human body is:",
    options: ["Liver", "Brain", "Skin", "Heart"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Integumentary System Skin",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The skin is the largest organ of the human body by both surface area (approximately 1.5–2 square metres in an average adult) and weight (approximately 3–4 kg). It has three layers: the epidermis, the dermis, and the hypodermis / subcutaneous tissue.",
    whyWrong: [
      "Liver — the liver is the largest internal organ (approximately 1.5 kg). This is a common and important exam distinction. The liver IS the largest internal organ, but the skin surpasses it as the largest organ overall.",
      "Brain — weighs approximately 1.3–1.4 kg. Large and vital, but far smaller than the skin.",
      "Heart — weighs approximately 250–350 g. Much smaller than the skin."
    ],
    memoryTip: "'Skin = the body's SUIT.' Your suit covers your entire body; the skin IS the biggest organ. Important exam distinction: 'Largest internal organ = Liver. Largest organ overall = Skin.'",
    difficulty: 1
  },
  {
    id: "Q24",
    text: "Which chamber of the heart pumps oxygenated blood to the body?",
    options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Cardiovascular System Heart Anatomy",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The left ventricle (LV) is the most powerful chamber of the heart. It receives oxygenated blood from the left atrium (which received it from the lungs via the pulmonary veins) and pumps it through the aortic valve into the aorta — the largest artery in the body — distributing oxygenated blood to the entire body (systemic circulation).",
    whyWrong: [
      "Right atrium — receives deoxygenated blood returning from the body via the superior and inferior vena cava. It pumps blood a short distance down into the right ventricle.",
      "Right ventricle — receives deoxygenated blood from the right atrium and pumps it to the lungs (via the pulmonary artery) to be oxygenated. This is pulmonary circulation.",
      "Left atrium — receives oxygenated blood from the lungs (via the pulmonary veins) and passes it downward to the left ventricle. It collects and passes on; it does not pump to the body."
    ],
    memoryTip: "'Left Ventricle = the body's Lifeline pump.' Left side = oxygenated (bright red) blood. Left ventricle is the last stop before blood goes to the body.",
    difficulty: 2
  },
  {
    id: "Q25",
    text: "The process by which the body maintains a stable internal environment is called:",
    options: ["Metabolism", "Homeostasis", "Adaptation", "Evolution"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Homeostasis Body Regulation",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Homeostasis (from Greek: homoios = similar + stasis = standing still) is the body's ability to maintain a stable internal environment despite constant changes in the external environment. Every body system participates in homeostasis. Examples: body temperature (37°C), blood glucose (70–110 mg/dL), blood pH (7.35–7.45), blood pressure (120/80 mmHg).",
    whyWrong: [
      "Metabolism — refers to all chemical reactions occurring in body cells to sustain life (including energy production and building of molecules). While metabolism contributes to homeostasis, metabolism is the process; homeostasis is the state of balance being maintained.",
      "Adaptation — refers to long-term changes an organism makes to better survive in its environment (either evolutionary over generations, or physiological over time). Not the same as moment-to-moment internal regulation.",
      "Evolution — the change in genetic characteristics of populations over many generations. Completely unrelated to maintaining internal stability."
    ],
    memoryTip: "'HOMEostasis = keeping the body 'HOME' (comfortable and in balance).' Think of it as the body's smart home system.",
    difficulty: 1
  },
  {
    id: "Q26",
    text: "Which cells are responsible for immune response?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Blood & Haematology Immune Cells",
    sourcePaper: "September 2023 Past Paper",
    explanation: "White blood cells (WBCs / leucocytes) are the soldiers of the immune system. They are produced in the bone marrow and circulate in much lower numbers than red blood cells. The main types: neutrophils, lymphocytes, monocytes, eosinophils, and basophils.",
    whyWrong: [
      "Red blood cells — transport oxygen. They have absolutely no immune function.",
      "Platelets — involved in blood clotting (haemostasis). They are not immune cells.",
      "Plasma cells — technically these are immune cells (they are differentiated B lymphocytes that produce antibodies). However, they are a specific subset of white blood cells. The broader, more encompassing correct answer is 'white blood cells.'"
    ],
    memoryTip: "'WHITE = WARRIOR.' When a doctor checks your blood count during an infection, they look for a raised white cell count — proof that white blood cells are your immune fighters.",
    difficulty: 1
  },
  {
    id: "Q27",
    text: "The esophagus connects the:",
    options: ["Mouth to the stomach", "Stomach to the small intestine", "Small intestine to the large intestine", "Pharynx to the trachea"],
    correctAnswerIndex: 0,
    category: "Anatomy & Physiology",
    topic: "Digestive System Upper GI Tract",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The esophagus (oesophagus) is a muscular tube approximately 25 cm long that carries food from the pharynx (throat, at the back of the mouth) down through the chest and diaphragm to the stomach. Food moves through it by rhythmic muscular contractions called peristalsis.",
    whyWrong: [
      "Stomach to the small intestine — this connection is controlled by the pyloric valve (pyloric sphincter). The first section of the small intestine is called the duodenum.",
      "Small intestine to the large intestine — this junction is called the ileocecal valve, where the ileum meets the cecum.",
      "Pharynx to the trachea — the trachea (windpipe) is the airway, not the food path. The pharynx connects to both the esophagus (food) and the trachea (air)."
    ],
    difficulty: 1
  },
  {
    id: "Q28",
    text: "Which part of the neuron receives signals?",
    options: ["Axon", "Dendrite", "Cell body", "Synapse"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Nervous System Neuron Structure",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Dendrites are the short, branching projections extending from the neuron's cell body. Their name comes from the Greek dendron meaning 'tree'. Their function is to receive incoming signals from other neurons or from sensory receptors, and carry those signals toward the cell body for processing.",
    whyWrong: [
      "Axon — carries the nerve impulse away from the cell body, toward the next neuron or a target organ (muscle or gland). The axon SENDS signals out.",
      "Cell body (soma) — the metabolic centre of the neuron, containing the nucleus and organelles. It processes and integrates incoming signals, but the initial reception is done by the dendrites.",
      "Synapse — this is not actually a part of the neuron. A synapse is the gap (junction) between two neurons, where signals pass from one cell to the next using chemical messengers called neurotransmitters."
    ],
    memoryTip: "Signal flow through a neuron: Dendrite → Cell body → Axon = Receive → Process → Send. 'D for Dendrite = D for Detection (detects/receives incoming signals).'",
    difficulty: 2
  },
  {
    id: "Q29",
    text: "The functional unit of the kidney is:",
    options: ["Alveolus", "Nephron", "Neuron", "Hepatocyte"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Urinary System Kidney Microstructure",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The nephron is the microscopic functional unit of the kidney — it is the actual filtration structure that processes blood and produces urine. Each kidney contains approximately one million nephrons.",
    whyWrong: [
      "Alveolus — the functional unit of the lungs. Tiny air sacs where gas exchange occurs. Nothing to do with the kidney.",
      "Neuron — the functional unit of the nervous system. Transmits electrical signals.",
      "Hepatocyte — a liver cell (hepato = liver in Greek). Hepatocytes are the functional cells of the liver, not the kidney."
    ],
    memoryTip: "NANS rule: Neuron = Nervous system | Alveolus = Airways (lungs) | Nephron = kidNey | Sarcomere = Skeletal muscle. The 'N' in nephron reminds you of kidNey.",
    difficulty: 2
  },
  {
    id: "Q30",
    text: "Which valve prevents backflow of blood from the left ventricle to the left atrium?",
    options: ["Tricuspid valve", "Pulmonary valve", "Mitral valve", "Aortic valve"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Cardiovascular System Heart Valves",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The mitral valve (also called the bicuspid valve because it has 2 leaflets/cusps) sits between the left atrium and the left ventricle. When the left ventricle contracts to pump blood into the aorta, the mitral valve closes to prevent blood from flowing back up into the left atrium.",
    whyWrong: [
      "Tricuspid valve — sits between the right atrium and right ventricle (3 leaflets/cusps). It performs the same backflow prevention function, but on the RIGHT side of the heart, not the left.",
      "Pulmonary valve — sits between the right ventricle and the pulmonary artery. It prevents blood from flowing back from the pulmonary artery into the right ventricle. This is a semilunar valve.",
      "Aortic valve — sits between the left ventricle and the aorta. It prevents blood from flowing back from the aorta into the left ventricle after contraction."
    ],
    memoryTip: "'Mitral = named after a bishop's mitre hat.' Left side of heart = Mitral + Aortic valves. Right side = Tricuspid + Pulmonary valves.",
    difficulty: 3
  },
  {
    id: "Q31",
    text: "The hormone produced by the thyroid gland is:",
    options: ["Insulin", "Thyroxine", "Cortisol", "Testosterone"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Endocrine System Thyroid Gland",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The thyroid gland is a butterfly-shaped gland in the neck that produces two main hormones: thyroxine (T4) and triiodothyronine (T3). Together they regulate: basal metabolic rate (how fast the body uses energy), body temperature, heart rate, and growth and development.",
    whyWrong: [
      "Insulin — produced by the beta cells of the pancreas. Regulates blood sugar. Not produced by the thyroid.",
      "Cortisol — produced by the adrenal cortex (outer layer of the adrenal gland). The primary stress hormone. Not produced by the thyroid.",
      "Testosterone — the primary male sex hormone, produced mainly by the testes. Not produced by the thyroid."
    ],
    memoryTip: "'THYROxine = THYROid gland.' The hormone is literally named after its gland of origin — same root word!",
    difficulty: 1
  },
  {
    id: "Q32",
    text: "Which structure in the eye focuses light?",
    options: ["Cornea", "Retina", "Lens", "Pupil"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Special Senses Eye Anatomy",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The lens is a transparent, biconvex (curved on both sides) structure located behind the pupil and iris. Its job is to focus light rays onto the retina — specifically onto the fovea centralis (the point of sharpest vision). Crucially, the lens changes its shape to focus at different distances — a process called accommodation.",
    whyWrong: [
      "Cornea — the clear dome at the very front of the eye. It actually performs the majority (approximately 70–75%) of total light bending (refraction), but its curvature is fixed. It cannot change shape to adjust for different distances.",
      "Retina — the light-sensitive layer at the back of the eye containing photoreceptors (rods and cones). The retina detects the already-focused light and converts it into nerve signals. It does not focus light.",
      "Pupil — the opening (hole) in the centre of the iris. It controls the quantity of light entering the eye, but does not focus it."
    ],
    memoryTip: "'LENS = LIGHT focusing.' Just as a camera lens makes images sharp, the eye's lens focuses light for sharp vision.",
    difficulty: 2
  },
  {
    id: "Q33",
    text: "The diaphragm is primarily involved in:",
    options: ["Digestion", "Circulation", "Breathing", "Urination"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Respiratory System Mechanics of Breathing",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The diaphragm is the primary muscle of breathing — a large, dome-shaped muscle that separates the thoracic (chest) cavity from the abdominal cavity. Inhalation: the diaphragm contracts and flattens downward → the chest cavity volume increases → pressure inside decreases → air rushes in. Exhalation: the diaphragm relaxes and domes upward → chest cavity volume decreases → pressure rises → air is pushed out.",
    whyWrong: [
      "Digestion — digestion is the function of digestive system organs (stomach, intestines, liver, pancreas). While the esophagus passes through an opening in the diaphragm, the diaphragm itself is not a digestive organ.",
      "Circulation — the circulation of blood is the function of the heart and blood vessels. The diaphragm does not pump blood.",
      "Urination — urination is controlled by the urinary bladder's detrusor muscle and urethral sphincters. The diaphragm is not involved."
    ],
    memoryTip: "Hiccups are involuntary, sudden spasms of the diaphragm — direct proof that the diaphragm is the breathing muscle. Every hiccup is an involuntary inhalation caused by a diaphragm spasm.",
    difficulty: 1
  },
  {
    id: "Q34",
    text: "Which type of tissue covers body surfaces?",
    options: ["Connective tissue", "Epithelial tissue", "Muscle tissue", "Nervous tissue"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Cell Biology Tissue Types",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Epithelial tissue covers and lines all body surfaces — both external surfaces (like the skin) and internal surfaces (like the lining of the intestines, lungs, and blood vessels). Think of it as the body's wallpaper or tiling. It forms protective barriers, controls what enters and exits the body, and is also involved in secretion.",
    whyWrong: [
      "Connective tissue — does not primarily cover surfaces. Its job is to connect, support, and bind structures together. Examples: bone, cartilage, blood, fat, tendons, and ligaments.",
      "Muscle tissue — specialised for contraction and movement. Found in muscles throughout the body. Does not cover surfaces.",
      "Nervous tissue — specialised for transmitting electrical signals (nerve impulses). Forms the brain, spinal cord, and nerves. Does not cover surfaces."
    ],
    memoryTip: "'Every Cell Makes Noise' = Epithelial, Connective, Muscle, Nervous. Of these four, only Epithelial covers surfaces. 'Epi' = upon/above → sits upon surfaces.",
    difficulty: 2
  },
  {
    id: "Q35",
    text: "The spinal cord is protected by:",
    options: ["Skull", "Ribs", "Vertebrae", "Pelvis"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Skeletal System Axial Skeleton / Spine",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The vertebrae are the 33 individual bones that make up the spinal column (backbone). Each vertebra has a hole in its centre called the vertebral foramen. When all the vertebrae are stacked on top of each other, these holes align to form the vertebral canal — a bony tunnel through which the spinal cord runs safely.",
    whyWrong: [
      "Skull — protects the brain (up in the head). The spinal cord begins at the base of the skull and runs down the back — it is the vertebrae, not the skull, that protect it along its length.",
      "Ribs — protect the heart and lungs in the thoracic cavity. Ribs attach to thoracic vertebrae but do not directly form a protective canal for the spinal cord.",
      "Pelvis — protects the pelvic organs (bladder, uterus, rectum). The spinal cord ends around the level of the first or second lumbar vertebra (L1–L2), above the pelvis."
    ],
    memoryTip: "'SPINal cord → SPINE (vertebrae) protects it.' The spinal cord runs inside the spinal column just as electrical wires run inside a conduit pipe.",
    difficulty: 1
  },
  {
    id: "Q36",
    text: "Which blood type is considered the universal donor?",
    options: ["A", "B", "AB", "O"],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Blood & Haematology Blood Groups / ABO System",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Blood type O (specifically O-negative, O−) is the universal donor because type O-negative red blood cells lack both A antigens and B antigens on their surface, as well as the Rh factor. Since there are no antigens that another person's immune system could recognise as foreign and attack, O-negative blood can be given to patients of any blood type in emergency situations.",
    whyWrong: [
      "Type A — has A antigens on the red cell surface. It cannot be given to type B or type O individuals, whose immune systems carry anti-A antibodies and would attack type A cells.",
      "Type B — has B antigens. Cannot be given to type A or O individuals (who carry anti-B antibodies).",
      "Type AB — is actually the universal RECIPIENT — people with AB blood can receive any blood type. However, AB blood has both A and B antigens and cannot be donated to type A, B, or O individuals."
    ],
    memoryTip: "'O = Zero antigens = Zero risk of rejection = can go to anyone.' 'AB = Anything goes in = universal recipient.' O and AB are opposites.",
    difficulty: 2
  },
  {
    id: "Q37",
    text: "The pancreas produces:",
    options: ["Bile", "Insulin", "Pepsin", "Mucus"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Endocrine System Pancreatic Functions",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The pancreas is a unique organ with both endocrine (hormonal) and exocrine (digestive) functions. Its endocrine function is performed by the islets of Langerhans that produce: insulin, glucagon, and somatostatin. Its exocrine function involves producing digestive enzymes (amylase, lipase, protease) released through the pancreatic duct into the small intestine.",
    whyWrong: [
      "Bile — bile is produced by the liver (not the pancreas) and stored in the gallbladder. Both the liver's bile duct and the pancreatic duct drain into the duodenum, which is a common source of confusion.",
      "Pepsin — a protein-digesting enzyme produced by chief cells in the stomach lining. Not produced by the pancreas.",
      "Mucus — produced by mucous glands and goblet cells throughout the body. Not specifically a pancreatic product."
    ],
    memoryTip: "'PANcreas = PANhandles insulin AND digestive enzymes.' It handles two completely different jobs — the endocrine and the exocrine.",
    difficulty: 2
  },
  {
    id: "Q38",
    text: "Which structure prevents food from entering the trachea?",
    options: ["Uvula", "Epiglottis", "Pharynx", "Larynx"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Digestive System Swallowing / Upper Airway",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The epiglottis is a leaf-shaped flap of cartilage located at the back of the throat, just above the opening to the larynx (voice box). During normal breathing, the epiglottis is upright and the airway is open. During swallowing, the epiglottis folds down like a trapdoor, covering the entrance to the trachea and directing food and liquid into the esophagus instead.",
    whyWrong: [
      "Uvula — the small, fleshy, dangling piece of tissue visible at the back of the soft palate. It helps close off the nasal passage during swallowing, preventing food from going up into the nose. It does not prevent food from entering the trachea.",
      "Pharynx — the throat — is the shared passage through which both air and food pass. It is a tube, not a flap or valve. It does not actively direct food away from the trachea; that is the epiglottis's job.",
      "Larynx — the voice box, which sits below the epiglottis and opens into the trachea. The epiglottis protects the entrance to the larynx/trachea. The larynx itself does not do the protecting."
    ],
    memoryTip: "Think of the epiglottis as a trapdoor lid — when you swallow, the lid closes to protect the airway. Epiglottis = EPIc GATEKEEPER of the airway.",
    difficulty: 2
  },
  {
    id: "Q39",
    text: "The main function of the large intestine is:",
    options: ["Nutrient absorption", "Water absorption", "Protein digestion", "Fat emulsification"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Digestive System Large Intestine Function",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The large intestine (colon, approximately 1.5 metres long) receives indigestible material from the small intestine and absorbs water and electrolytes (salts) from it, converting the liquid waste into solid faeces (stool). By the time material arrives at the large intestine, the small intestine has already extracted virtually all the nutrients.",
    whyWrong: [
      "Nutrient absorption — the primary absorption of proteins, fats, carbohydrates, vitamins, and minerals occurs in the small intestine. By the time material reaches the large intestine, this job is complete.",
      "Protein digestion — protein digestion begins in the stomach and is completed in the small intestine. The large intestine does not digest proteins.",
      "Fat emulsification — fats are emulsified (broken into tiny droplets for easier digestion) by bile in the small intestine. Not a function of the large intestine."
    ],
    memoryTip: "'Small intestine = Sucks up nutrients (S for Small = Sustenance). Large intestine = Last stop, reclaims Liquid (L for Large = Last, Liquid recovery).'",
    difficulty: 1
  },
  {
    id: "Q40",
    text: "Which bone is commonly known as the collarbone?",
    options: ["Scapula", "Clavicle", "Humerus", "Sternum"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Skeletal System Appendicular Skeleton / Pectoral Girdle",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The clavicle is a long, slender, S-shaped bone that runs horizontally across the top of the chest from the breastbone (sternum) to the shoulder. You can feel it under your skin — that ridge running from your neck to your shoulder is your clavicle. It is called the collarbone because it sits at collar level.",
    whyWrong: [
      "Scapula — the flat, triangular bone on the upper back known as the shoulder blade. Not the collarbone.",
      "Humerus — the long bone of the upper arm, running from the shoulder joint to the elbow. Not the collarbone.",
      "Sternum — the flat bone in the centre of the chest called the breastbone. Ribs attach to it. Not the collarbone."
    ],
    memoryTip: "'ClaviCLE = CoLLar.' Both contain the letters C, L. The clavicle sits at the level of a shirt collar. Shoulder area: Scapula = shoulder blade (back). Clavicle = collarbone (front). Humerus = upper arm.",
    difficulty: 1
  },
  {
    id: "Q41",
    text: "The medulla oblongata controls:",
    options: ["Voluntary movements", "Memory", "Vital functions like breathing and heart rate", "Vision"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Nervous System Brainstem Functions",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The medulla oblongata is the lowest portion of the brainstem, directly connecting the brain to the spinal cord. It contains the vital centres that automatically and continuously control life-sustaining functions without any conscious effort: the respiratory centre, the cardiac centre, and the vasomotor centre.",
    whyWrong: [
      "Voluntary movements — deliberate, conscious movements are controlled by the motor cortex of the cerebrum.",
      "Memory — memory formation and storage primarily involve the cerebrum, particularly the hippocampus.",
      "Vision — visual processing occurs in the occipital lobe of the cerebrum."
    ],
    memoryTip: "'Medulla Oblongata = MOB = Manages Our Breathing (and heart rate).'",
    difficulty: 2
  },
  {
    id: "Q42",
    text: "Which organ stores bile?",
    options: ["Liver", "Pancreas", "Gallbladder", "Spleen"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Digestive System Accessory Digestive Organs",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The gallbladder is a small, pear-shaped sac located on the underside of the liver. Its sole function is to store and concentrate bile produced by the liver. When you eat fatty food, bile is released into the duodenum to emulsify fats.",
    whyWrong: [
      "Liver — the liver produces bile but does not store it. Bile produced by the liver is immediately sent to the gallbladder for storage.",
      "Pancreas — produces digestive enzymes and hormones. Has no role in bile production or storage.",
      "Spleen — a lymphatic/immune organ that filters blood and removes old red blood cells. Not a digestive organ."
    ],
    memoryTip: "'GALL-bladder holds GALL.' Gall is the historical/old English word for bile. Liver MAKES it → Gallbladder STORES it → Small intestine USES it.",
    difficulty: 1
  },
  {
    id: "Q43",
    text: "The functional unit of muscle contraction is:",
    options: ["Nephron", "Neuron", "Sarcomere", "Alveolus"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Muscular System Muscle Microstructure",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The sarcomere is the basic contractile (contracting) unit of skeletal and cardiac muscle. Each sarcomere contains overlapping protein filaments: actin (thin) and myosin (thick). When a muscle contracts, myosin filaments grab onto actin filaments and pull them closer together.",
    whyWrong: [
      "Nephron — the functional unit of the kidney.",
      "Neuron — the functional unit of the nervous system.",
      "Alveolus — the functional unit of the lungs."
    ],
    memoryTip: "NANS rule: Neuron = Nervous | Alveolus = Airways | Nephron = kidNey | Sarcomere = Skeletal muscle. 'Sarco' = flesh = muscle.",
    difficulty: 2
  },
  {
    id: "Q44",
    text: "Which artery carries deoxygenated blood?",
    options: ["Aorta", "Pulmonary artery", "Carotid artery", "Coronary artery"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Cardiovascular System Blood Vessels",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The real definition of an artery is: a vessel that carries blood away from the heart — regardless of the oxygen content. The pulmonary artery carries blood from the right ventricle away to the lungs — and this blood is deoxygenated (it is heading to the lungs to pick up oxygen).",
    whyWrong: [
      "Aorta — carries highly oxygenated blood from the left ventricle to the entire body.",
      "Carotid artery — carries oxygenated blood to the brain and head.",
      "Coronary artery — supplies oxygenated blood to the heart muscle itself."
    ],
    memoryTip: "'Arteries = Away from heart (regardless of oxygen content).' Remember the paired exception: Pulmonary ARTERY = deoxygenated (going TO lungs). Pulmonary VEINS = oxygenated (coming BACK from lungs).",
    difficulty: 3
  },
  {
    id: "Q45",
    text: "The hormone that stimulates milk production is:",
    options: ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Endocrine System Pituitary Hormones / Lactation",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Prolactin (PRL) is produced by the anterior pituitary gland. Its primary function is to stimulate the mammary glands (breast tissue) to produce milk — a process called lactogenesis.",
    whyWrong: [
      "Oxytocin — produced by the posterior pituitary gland. It causes the milk let-down reflex — the ejection/release of milk from the breast when the baby suckles.",
      "Estrogen — a sex hormone. During pregnancy, high estrogen levels actually inhibit prolactin's milk-producing effect.",
      "Progesterone — another sex hormone. Like estrogen, high progesterone during pregnancy suppresses milk production."
    ],
    memoryTip: "'PROLACTin = PROduces LACTation (milk).'",
    difficulty: 2
  },
  {
    id: "Q46",
    text: "Which part of the ear is responsible for hearing?",
    options: ["Outer ear", "Middle ear", "Inner ear (cochlea)", "Eustachian tube"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Special Senses Ear Anatomy",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cochlea (from Latin for 'snail') is the structure in the inner ear responsible for converting sound vibrations into nerve impulses that the brain interprets as hearing.",
    whyWrong: [
      "Outer ear — collects and funnels sound waves toward the eardrum.",
      "Middle ear — contains three tiny bones (malleus, incus, stapes) that amplify and transmit vibrations to the inner ear.",
      "Eustachian tube — connects the middle ear to the throat. Its only function is to equalise air pressure on both sides of the eardrum."
    ],
    memoryTip: "'COCHLea = CONverts vibration → hearing CONcludes here.'",
    difficulty: 2
  },
  {
    id: "Q47",
    text: "The appendix is attached to the:",
    options: ["Stomach", "Small intestine", "Large intestine (cecum)", "Liver"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Digestive System Large Intestine Anatomy",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The appendix is a narrow, finger-like pouch approximately 5–10 cm long. It is attached to the cecum — the first and widest section of the large intestine — located in the lower right abdomen.",
    whyWrong: [
      "Stomach — located in the upper left abdomen.",
      "Small intestine — the appendix attaches specifically to the cecum, which is the junction piece at the very start of the large intestine.",
      "Liver — located in the upper right abdomen, under the diaphragm."
    ],
    memoryTip: "'AppendIX = attaches at the end of the Ileum/start of LARGE intestine (cecum) = lower RIGHT abdomen.'",
    difficulty: 1
  },
  {
    id: "Q48",
    text: "Which gland regulates metabolism?",
    options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Parathyroid gland"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Endocrine System Thyroid Gland Functions",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The thyroid gland produces thyroxine (T3/T4), which is the body's primary metabolic regulator — it determines the 'speed setting' for virtually all the body's chemical reactions.",
    whyWrong: [
      "Pituitary gland — the 'master gland' that controls the thyroid by secreting TSH. It indirectly affects metabolism through the thyroid.",
      "Adrenal gland — regulates the stress response, blood pressure, and some sex hormones.",
      "Parathyroid gland — four tiny glands that produce parathyroid hormone (PTH), which regulates calcium and phosphate levels."
    ],
    memoryTip: "'THYROID = THERMOSTAT + THROTTLE of the body.' It controls the body's temperature (thermostat) and the speed of metabolism (throttle).",
    difficulty: 1
  },
  {
    id: "Q49",
    text: "The production of red blood cells is called:",
    options: ["Hematopoiesis", "Erythropoiesis", "Leukocytosis", "Hemostasis"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Blood & Haematology Blood Cell Production",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Erythropoiesis specifically refers to the production of red blood cells (erythrocytes). This occurs in the red bone marrow of certain bones.",
    whyWrong: [
      "Hematopoiesis — the production of all blood cells — red cells, white cells, AND platelets. It is the broad umbrella term.",
      "Leukocytosis — means an abnormal increase in white blood cell count above normal levels.",
      "Hemostasis — the process of stopping bleeding through blood clotting."
    ],
    memoryTip: "'ERYTHROcytes (red blood cells) → ERYTHROpoiesis (making red blood cells).'",
    difficulty: 3
  },
  {
    id: "Q50",
    text: "Which muscle is responsible for breathing?",
    options: ["Intercostal muscles", "Diaphragm", "Abdominal muscles", "Both A and B"],
    correctAnswerIndex: 3,
    category: "Anatomy & Physiology",
    topic: "Muscular System Respiratory Muscles",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Breathing requires two main muscle groups working together: The Diaphragm is the primary breathing muscle, and the Intercostal muscles are the secondary breathing muscles.",
    whyWrong: [
      "Intercostal muscles alone — incomplete. This ignores the dominant role of the diaphragm.",
      "Diaphragm alone — incomplete. While the diaphragm is the primary breathing muscle, the intercostals contribute significantly.",
      "Abdominal muscles — these are accessory muscles used only during forced exhalation."
    ],
    difficulty: 2
  },
  {
    id: "Q51",
    text: "The sinoatrial (SA) node is located in the:",
    options: ["Left atrium", "Right atrium", "Left ventricle", "Right ventricle"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Cardiovascular System Cardiac Conduction System",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The sinoatrial (SA) node is the heart's natural pacemaker — it spontaneously generates the electrical impulse that initiates every heartbeat. It is located in the upper wall of the right atrium.",
    whyWrong: [
      "Left atrium — receives oxygenated blood from the lungs. The SA node is in the right atrium.",
      "Left ventricle — the most powerful pumping chamber. The SA node is located in an atrium.",
      "Right ventricle — pumps blood to the lungs. The SA node is in the atrium above."
    ],
    memoryTip: "'SA node = Starts All (heartbeats), sits in the Right Atrium — where blood first arrives at the heart from the body.'",
    difficulty: 2
  },
  {
    id: "Q52",
    text: "Which vitamin is produced in the skin?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Integumentary System Skin Functions / Vitamin D",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The skin synthesises vitamin D when ultraviolet B (UVB) rays from sunlight strike it. Vitamin D promotes calcium and phosphate absorption from the intestines.",
    whyWrong: [
      "Vitamin A — found in animal products and plant-based carotenoids. It is NOT produced in the skin.",
      "Vitamin C — an antioxidant found in fruits and vegetables. Humans cannot synthesise vitamin C.",
      "Vitamin K — found in leafy green vegetables and produced by gut bacteria in the large intestine. It is NOT produced in the skin."
    ],
    memoryTip: "'Vitamin D = the SUNSHINE vitamin.' Skin + sun = vitamin D. 'D for Daylight.'",
    difficulty: 1
  },
  {
    id: "Q53",
    text: "The plasma protein involved in blood clotting is:",
    options: ["Albumin", "Globulin", "Fibrinogen", "Hemoglobin"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Blood & Haematology Blood Proteins and Coagulation",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Fibrinogen is a soluble plasma protein produced by the liver. It is the critical clotting protein in the coagulation cascade. When bleeding occurs, it is converted into fibrin.",
    whyWrong: [
      "Albumin — the most abundant plasma protein. Its main function is maintaining oncotic pressure.",
      "Globulin — a group of plasma proteins with various functions like fighting infection or transporting lipids.",
      "Hemoglobin — the oxygen-carrying protein found inside red blood cells. It is NOT a plasma protein."
    ],
    memoryTip: "'FIBRINogen → makes FIBRIN → creates a FIBROUS clotting net.'",
    difficulty: 3
  },
  {
    id: "Q54",
    text: "Which structure connects the two cerebral hemispheres?",
    options: ["Corpus callosum", "Cerebellum", "Thalamus", "Hypothalamus"],
    correctAnswerIndex: 0,
    category: "Anatomy & Physiology",
    topic: "Nervous System Brain Anatomy",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The corpus callosum is a large, C-shaped band of white matter (myelinated nerve fibres) that forms a bridge connecting the left and right cerebral hemispheres.",
    whyWrong: [
      "Cerebellum — a separate brain structure at the back controlling balance.",
      "Thalamus — a deep relay station for sensory signals.",
      "Hypothalamus — regulates homeostasis."
    ],
    memoryTip: "'Corpus Callosum = Communication Corridor between the two brain halves.'",
    difficulty: 2
  },
  {
    id: "Q55",
    text: "The urinary bladder stores:",
    options: ["Blood", "Bile", "Urine", "Lymph"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Urinary System Urinary Bladder",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The urinary bladder is a hollow, muscular organ made of smooth muscle (called the detrusor muscle) that stores urine until it is voluntarily released.",
    whyWrong: [
      "Blood — stored in and circulates within the cardiovascular system.",
      "Bile — stored in the gallbladder.",
      "Lymph — circulates through the lymphatic system."
    ],
    memoryTip: "'URINary bladder = stores URINE.' Critical exam distinction: Gallbladder = stores BILE. URINary bladder = stores URINE.",
    difficulty: 1
  },
  {
    id: "Q56",
    text: "Which type of immunity is acquired through vaccination?",
    options: ["Natural active immunity", "Natural passive immunity", "Artificial active immunity", "Artificial passive immunity"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Lymphatic & Immune System Types of Immunity",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Vaccination produces artificial active immunity. Artificial = produced through a medical intervention. Active = your own immune system is actively stimulated to produce antibodies.",
    whyWrong: [
      "Natural active immunity — acquired by actually getting the disease naturally.",
      "Natural passive immunity — antibodies transferred naturally from one individual to another (e.g., mother to fetus).",
      "Artificial passive immunity — ready-made antibodies injected into someone (e.g., snake antivenom)."
    ],
    memoryTip: "'ACTIVE = YOUR body is ACTIVE (making its own antibodies). PASSIVE = you PASSIVELY RECEIVE ready-made antibodies.' 'NATURAL = no medical intervention. ARTIFICIAL = medical intervention involved.'",
    difficulty: 3
  },
  {
    id: "Q57",
    text: "The glomerulus is found in the:",
    options: ["Heart", "Liver", "Kidney", "Spleen"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Urinary System Nephron Components",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The glomerulus is a tiny, tightly coiled knot of capillaries located at the beginning of each nephron in the kidney. It is the first and most critical stage of blood filtration.",
    whyWrong: [
      "Heart — a pumping organ in the cardiovascular system. Contains no glomeruli.",
      "Liver — a digestive and metabolic organ. Contains no glomeruli.",
      "Spleen — a lymphatic/immune organ that filters blood. Has no glomeruli."
    ],
    memoryTip: "'GLOMErulus = GLOMerated (clustered) capillaries = the kidney's microscopic filter ball.'",
    difficulty: 2
  },
  {
    id: "Q58",
    text: "Which cranial nerve is responsible for vision?",
    options: ["Optic nerve (II)", "Oculomotor nerve (III)", "Trigeminal nerve (V)", "Facial nerve (VII)"],
    correctAnswerIndex: 0,
    category: "Anatomy & Physiology",
    topic: "Nervous System Cranial Nerves",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The optic nerve (Cranial Nerve II) carries visual information from the retina of each eye to the brain's visual cortex. It is a purely sensory nerve.",
    whyWrong: [
      "Oculomotor nerve — CN III — controls most of the eye movements and pupil constriction. It is about moving the eye, not about seeing.",
      "Trigeminal nerve — CN V — responsible for sensation across the face and controls the muscles of chewing.",
      "Facial nerve — CN VII — controls the muscles of facial expression and provides taste sensation."
    ],
    memoryTip: "'OPTic = OPTical = seeing with OPTics.' The OPTic nerve is literally the sight nerve.",
    difficulty: 2
  },
  {
    id: "Q59",
    text: "The hormone epinephrine is produced by the:",
    options: ["Thyroid gland", "Pituitary gland", "Adrenal gland", "Pancreas"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Endocrine System Adrenal Medulla",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Epinephrine (adrenaline) is produced by the adrenal medulla — the inner portion of the adrenal glands, which sit on top of the kidneys.",
    whyWrong: [
      "Thyroid gland — produces thyroxine and calcitonin.",
      "Pituitary gland — the master gland, producing TSH, GH, ACTH, etc.",
      "Pancreas — produces insulin, glucagon, and digestive enzymes."
    ],
    memoryTip: "'ADRENALine = from the ADRENAl gland.' 'AD-renal = glands sitting AD-jacent to (on top of) the RENAL (kidney).'",
    difficulty: 1
  },
  {
    id: "Q60",
    text: "Which layer of the heart wall is responsible for contraction?",
    options: ["Endocardium", "Myocardium", "Epicardium", "Pericardium"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Cardiovascular System Heart Wall Layers",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The myocardium is the middle and thickest layer of the heart wall. It is composed entirely of cardiac muscle and is the layer that actually contracts and pumps blood.",
    whyWrong: [
      "Endocardium — the innermost layer lining the interior of all four chambers. It provides a frictionless surface.",
      "Epicardium — the outermost layer of the heart wall. It is a thin serous membrane.",
      "Pericardium — the double-layered fibrous sac that surrounds the entire heart. It is NOT a layer of the heart wall itself."
    ],
    memoryTip: "'MYO = MUSCle' — you see the prefix myo in many muscle-related terms. MYOcardium = heart MUSCLE layer = the one that contracts.",
    difficulty: 2
  },
  {
    id: "Q61",
    text: "The primary function of the lymphatic system is:",
    options: ["Oxygen transport", "Fluid balance and immunity", "Digestion", "Hormone production"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Lymphatic System Functions",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The lymphatic system has three main roles: 1. Fluid balance (collecting excess interstitial fluid and returning it to the blood), 2. Immunity (filtering lymph for pathogens in lymph nodes), and 3. Lipid absorption (absorbing fats from the small intestine via lacteals).",
    whyWrong: [
      "Oxygen transport — the function of red blood cells in the circulatory system.",
      "Digestion — the function of the digestive system.",
      "Hormone production — the function of the endocrine system."
    ],
    memoryTip: "'LYMPH = LIQUID recovery + LYMPHocytes (immune cells).'",
    difficulty: 2
  },
  {
    id: "Q62",
    text: "Which structure in the kidney filters blood?",
    options: ["Renal pelvis", "Ureter", "Glomerulus", "Bladder"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Urinary System Kidney Anatomy",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The glomerulus is a network of capillaries where the actual filtration of blood occurs. It is located within Bowman's capsule at the start of each nephron.",
    whyWrong: [
      "Renal pelvis — a funnel-like dilated part of the ureter in the kidney that collects urine.",
      "Ureter — the tube that carries urine from the kidney to the bladder.",
      "Bladder — stores urine."
    ],
    memoryTip: "'GLOMErulus = the kidney's GATEKEEPER filter.'",
    difficulty: 2
  },
  {
    id: "Q63",
    text: "The hormone that regulates calcium levels is:",
    options: ["Thyroxine", "Parathyroid hormone (PTH)", "Insulin", "Adrenaline"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Endocrine System Calcium Regulation",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Parathyroid hormone (PTH) is produced by the parathyroid glands. It increases blood calcium levels by stimulating osteoclasts to break down bone, increasing calcium absorption in the gut, and reducing calcium loss in urine.",
    whyWrong: [
      "Thyroxine — regulates metabolism.",
      "Insulin — regulates blood sugar.",
      "Adrenaline — regulates the stress response."
    ],
    memoryTip: "'PARAthyroid = PARA-mount for calcium control.'",
    difficulty: 4
  },
  {
    id: "Q64",
    text: "Which part of the brain is responsible for higher-order thinking?",
    options: ["Cerebellum", "Brainstem", "Cerebral cortex", "Thalamus"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Nervous System Brain Functions",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cerebral cortex is the outer layer of the cerebrum. It is responsible for complex functions such as memory, attention, perception, thought, language, and consciousness.",
    whyWrong: [
      "Cerebellum — controls balance and coordination.",
      "Brainstem — controls vital automatic functions.",
      "Thalamus — acts as a relay station for sensory information."
    ],
    memoryTip: "'CORTEX = COMPLEX thinking.'",
    difficulty: 3
  },
  {
    id: "Q65",
    text: "The valve between the right atrium and right ventricle is the:",
    options: ["Mitral valve", "Tricuspid valve", "Aortic valve", "Pulmonary valve"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Cardiovascular System Heart Valves",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The tricuspid valve is located on the right side of the heart, between the right atrium and the right ventricle. It has three leaflets (cusps).",
    whyWrong: [
      "Mitral valve — located on the left side of the heart.",
      "Aortic valve — located between the left ventricle and the aorta.",
      "Pulmonary valve — located between the right ventricle and the pulmonary artery."
    ],
    memoryTip: "'TRI-cuspid is on the RIGHT side (both have R and I).'",
    difficulty: 2
  },
  {
    id: "Q66",
    text: "Which organ produces insulin?",
    options: ["Liver", "Pancreas", "Stomach", "Kidney"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Endocrine System Pancreas",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The pancreas produces insulin in its beta cells (islets of Langerhans). Insulin is essential for regulating blood glucose levels.",
    whyWrong: [
      "Liver — stores glycogen but does not produce insulin.",
      "Stomach — produces digestive juices but not insulin.",
      "Kidney — filters blood but does not produce insulin."
    ],
    memoryTip: "'PANcreas = Produces All Necessary sugar-regulating hormones.'",
    difficulty: 1
  },
  {
    id: "Q67",
    text: "The basic unit of life is the:",
    options: ["Atom", "Molecule", "Cell", "Organ"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Cell Biology Levels of Organisation",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The cell is the smallest structural and functional unit of an organism, which is typically microscopic and contains cytoplasm and a nucleus in a membrane.",
    whyWrong: [
      "Atom — the basic unit of matter, but not 'life'.",
      "Molecule — a group of atoms, but not a living unit.",
      "Organ — a group of tissues, which are groups of cells. The cell is the most basic unit."
    ],
    memoryTip: "'CELL = the body's building block.'",
    difficulty: 1
  },
  {
    id: "Q68",
    text: "Which gas is a waste product of cellular respiration?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Respiratory System Gas Exchange",
    sourcePaper: "September 2023 Past Paper",
    explanation: "Cellular respiration uses oxygen and glucose to produce energy (ATP), with carbon dioxide and water as waste products.",
    whyWrong: [
      "Oxygen — used as a reactant, not a waste product.",
      "Nitrogen — an inert gas in the atmosphere, not a product of respiration.",
      "Hydrogen — not a primary waste product of human cellular respiration."
    ],
    memoryTip: "'Breath IN Oxygen, Breath OUT CO2 (waste).'",
    difficulty: 2
  },
  {
    id: "Q69",
    text: "The femur is located in the:",
    options: ["Arm", "Leg", "Chest", "Back"],
    correctAnswerIndex: 1,
    category: "Anatomy & Physiology",
    topic: "Skeletal System Appendicular Skeleton",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The femur, or thigh bone, is the longest, heaviest, and strongest bone in the human body. It is located in the upper leg.",
    whyWrong: [
      "Arm — contains the humerus, radius, and ulna.",
      "Chest — contains the ribs and sternum.",
      "Back — contains the vertebrae."
    ],
    memoryTip: "'FEMUR = thigh bone = the body's biggest bone.'",
    difficulty: 1
  },
  {
    id: "Q70",
    text: "Which part of the eye contains photoreceptors?",
    options: ["Cornea", "Lens", "Retina", "Iris"],
    correctAnswerIndex: 2,
    category: "Anatomy & Physiology",
    topic: "Special Senses Eye Anatomy",
    sourcePaper: "September 2023 Past Paper",
    explanation: "The retina is the light-sensitive inner surface of the eye, containing the photoreceptor cells (rods and cones) that convert light into neural signals.",
    whyWrong: [
      "Cornea — the clear front surface of the eye.",
      "Lens — focuses light onto the retina.",
      "Iris — the coloured part of the eye that controls pupil size."
    ],
    memoryTip: "'RETINA = REceives light signals.'",
    difficulty: 3
  }
];

// Final Export and Level Organization
const SORTED_QUESTIONS = [...ANATOMY_QUESTIONS].sort((a, b) => a.difficulty - b.difficulty);

export const QUESTIONS = SORTED_QUESTIONS;
export const TOTAL_LEVELS = 7;
export const LEVELS: Record<number, Question[]> = {
  1: SORTED_QUESTIONS.slice(0, 10),
  2: SORTED_QUESTIONS.slice(10, 20),
  3: SORTED_QUESTIONS.slice(20, 30),
  4: SORTED_QUESTIONS.slice(30, 40),
  5: SORTED_QUESTIONS.slice(40, 50),
  6: SORTED_QUESTIONS.slice(50, 60),
  7: SORTED_QUESTIONS.slice(60, 70),
};
