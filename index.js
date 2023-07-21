import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('BandNameGenrator.ejs');
});

app.post('/submit', (req, res) => {
    let randomTech = techName[Math.floor(Math.random() * techName.length)];
    let a = nouns[req.body.alphabate];
    let n = "";
    if (req.body.alphabate != "") {
        let randomNouns = "";
        randomNouns = a[Math.floor(Math.random() * a.length)];
        n = randomTech + randomNouns;
    } else {
        n = randomTech;
    }
    if (req.body.btn) {
        res.render("BandNameGenrator", {
            brandName: n.toUpperCase(),
        });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const techName = [
    "Byte",
    "Tech",
    "Hyper",
    "Cyber",
    "Data",
    "Web",
    "App",
    "AI",
    "IoT",
    "VR",
    "AR",
    "Bit",
    "SQL",
    "CSS",
    "C++",
    "PHP",
    "Code",
    "Java",
    "Ruby",
    "HTML",
    "Rust",
    "Hack",
    "coin",
    "User",
    "Swift",
    "Cloud",
    "Kotlin",
    "Python",
    "Crypto",
    "Reality",
    "Network",
    "Reality",
    "Virtual",
    "Internet",
    "Algorithm",
    "Interface",
    "Augmented",
    "Interface",
    "JavaScript",
    "Artificial",
    "Blockchain",
    "Experience",
    "Programming",
    "Application",
    "Intelligence",
    "Docker",
    "Kubernetes",
    "Firewall",
    "Router",
    "Malware",
    "Antivirus",
    "Firewall",
    "Scanner",
    "Encryption",
    "Framework",
    "Server",
    "Sensor",
    "Pixel",
    "Cookie",
    "Cache",
    "API",
    "JSON",
    "Core",
    "code",
    "NET",
    "pro",
    "path",
    "extension",
    "node",
    "parent",
    "lix",
    "process",
    "radeo",
    "geforce",
    "gtx",
    "Hack",
    "Hakker",
];

const nonEnglishWords = [
    "Bonjour",
    "Hola",
    "Ciao",
    "Konnichiwa",
    "Namaste",
    "Privet",
    "Merhaba",
    "Shalom",
    "Guten Tag",
    "Salaam",
    "Kumusta",
    "Sawasdee",
    "Hej",
    "Annyeong",
    "Dobro jutro",
    "Marhaba",
    "Szia",
    "Hei",
    "Sveiki",
    "Dia dhuit",
    "Hei hei",
    "Zdravo",
    "Aloha",
    "Salam",
    "Tere",
    "Hallo",
    "Mingalaba",
    "Tungjatjeta",
    "Saluton",
    "Salut",
    "Hoi",
    "Sannu",
    "Halo",
    "Moien",
    "Pryvit",
    "Szervusz",
    "Zdravo",
    "Hei",
    "Privet",
    "Kamusta",
    "Talofa"
];

const nouns = {
    A: [
        "apple",
        "arrow",
        "airplane",
        "anchor",
        "art",
        "astronaut",
        "acorn",
        "ant",
        "apron",
        "almond",
        "alley",
        "arch",
        "axe",
        "asparagus",
        "atom",
        "ankle",
        "angel",
        "alpaca",
        "avocado",
        "awning",
        "ash",
        "admiral",
        "avocado",
        "axe",
        "azure",
        "anvil",
        "apartment",
        "apex",
        "ash",
        "airship",
        "avenue",
        "albino",
        "asteroid",
        "aardvark",
        "aroma",
        "auction",
        "alligator",
        "academy",
        "aviary",
        "arcade",
        "archer",
        "albatross",
        "ark",
        "aloha",
        "ambulance",
        "antique",
        "amphibian",
        "afghan",
        "apostle",
    ],

    B: [
        "ball",
        "book",
        "building",
        "butterfly",
        "beach",
        "bird",
        "bridge",
        "bus",
        "bottle",
        "box",
        "breeze",
        "brush",
        "banana",
        "bike",
        "bench",
        "badge",
        "bed",
        "bell",
        "bread",
        "bag",
        "branch",
        "bush",
        "bulb",
        "button",
        "bone",
        "bowl",
        "badge",
        "brick",
        "boot",
        "bucket",
        "bunny",
        "braid",
        "bacon",
        "beard",
        "beetle",
        "blade",
        "bunker",
        "beaver",
        "beet",
        "bolt",
        "bride",
        "bait",
        "beet",
        "beach",
        "blaze",
        "broom",
        "bud",
        "barrel",
        "bark",
        "brisket",
        "biscuit",
        "base",
        "ball"
    ],

    C: [
        "car",
        "cat",
        "chair",
        "cloud",
        "cup",
        "cake",
        "camera",
        "clock",
        "cookie",
        "coat",
        "coin",
        "cheese",
        "crayon",
        "candle",
        "couch",
        "cactus",
        "computer",
        "cricket",
        "crane",
        "crown",
        "chocolate",
        "caterpillar",
        "cell",
        "cupcake",
        "cotton",
        "candy",
        "cabin",
        "coconut",
        "carousel",
        "carpet",
        "cabbage",
        "chalk",
        "carrot",
        "cherry",
        "coast",
        "cradle",
        "canvas",
        "cabinet",
        "cage",
        "comet",
        "collar",
        "corn",
        "cape",
        "clown",
        "creek",
        "cereal",
        "curl",
        "canyon",
        "cove",
        "cinder",
    ],

    D: [
        "data",
        "data",
        "desk",
        "device",
        "dictionary",
        "dinosaur",
        "document",
        "door",
        "dragon",
        "dream",
        "drum",
        "duck",
        "dust",
        "dynamite",
        "daisy",
        "diamond",
        "dice",
        "donkey",
        "drone",
        "dolphin",
        "dollar",
        "domino",
        "doodle",
        "dove",
        "dragonfly",
        "drought",
        "drumstick",
        "duct",
        "dune",
        "dung",
        "dusk",
        "dustbin",
        "dwarf",
        "dynamo",
        "dandelion",
        "decoration",
        "delight",
        "dent",
        "dentist",
        "desert",
        "dessert",
        "detour",
        "dew",
        "diamonds",
        "dice",
        "dinner",
        "dinosaur",
        "disco",
        "dog",
        "doll",
        "dolphin"
    ],

    E: [
        "eagle",
        "ear",
        "earth",
        "earthquake",
        "easel",
        "egg",
        "elephant",
        "elevator",
        "email",
        "emotion",
        "engine",
        "envelope",
        "equipment",
        "eraser",
        "eskimo",
        "explosion",
        "extension",
        "eleven",
        "elk",
        "elbow",
        "elf",
        "energy",
        "enigma",
        "execution",
        "exhaust",
        "earring",
        "echidna",
        "eel",
        "eclipse",
        "editor",
        "education",
        "effort",
        "eggplant",
        "elbow",
        "elephant",
        "elephant",
        "elixir",
        "emotion",
        "employee",
        "engineer",
        "entrance",
        "envelope",
        "equipment",
        "eraser",
        "escargot",
        "escape",
        "explosion",
        "extension",
        "eye"
    ],

    F: [
        "face",
        "fact",
        "failure",
        "faith",
        "fall",
        "family",
        "famous",
        "farm",
        "fashion",
        "fate",
        "father",
        "fear",
        "feature",
        "feeling",
        "field",
        "fight",
        "figure",
        "film",
        "finance",
        "fire",
        "fish",
        "flight",
        "flower",
        "focus",
        "food",
        "foot",
        "force",
        "form",
        "fortune",
        "foundation",
        "freedom",
        "friend",
        "front",
        "fruit",
        "fuel",
        "fun",
        "function",
        "fund",
        "future",
        "game",
        "garden",
        "gate",
        "gear",
        "gene",
        "gift",
        "girl",
        "glass",
        "glove",
        "goal",
        "gold",
    ],

    G: [
        "Gateway",
        "Graph",
        "GPU",
        "GUI",
        "Geolocation",
        "Git",
        "GoLang",
        "GPS",
        "Greenfield",
        "Grid",
        "GraphQL",
        "Grouping",
        "Guideline",
        "Game",
        "Google",
        "Genome",
        "Global",
        "Graphene",
        "Genius",
        "Glitch",
        "Giga",
        "Gizmo",
        "Globe",
        "Gesture",
        "Gigabyte",
        "Glimpse",
        "Gleam",
        "Gesture",
        "Gizmo",
        "Generator",
        "Gem",
        "Gemstone",
        "Gateway",
        "Gigahertz",
        "Gold",
        "Gallery",
        "Gift",
        "Gauge",
        "Gamble",
        "Glare",
        "Gadget",
        "Galaxy",
        "Granularity",
        "Gaze",
        "Growth",
        "Glamour",
        "Grit",
        "Gentle",
        "Gatherer",
        "Grain",
        "Gradient",
    ],

    H: [
        "Head",
        "Hydra",
        "HTML",
        "HTTP",
        "HTTPS",
        "Hosting",
        "Hardware",
        "Hadoop",
        "Hibernate",
        "Hypervisor",
        "Handlebars",
        "Hashing",
        "Heap",
        "Helper",
        "High",
        "Hook",
        "Hotspot",
        "Hub",
        "Hybrid",
        "Hybrid",
        "Hyperlink",
        "Hyper",
        "HMAC",
        "Honeypot",
        "Host",
        "Hotfix",
        "Horizontal",
        "Headless",
        "Health",
        "Heartbeat",
        "Human-computer",
        "Hyperconverged",
        "Hybrid",
        "Hard",
        "Hybrid",
        "Hardware",
        "Hardware",
        "Hardware",
        "Hash table",
        "Honeynet",
        "Hot-swapping",
        "Hotspot",
        "High",
        "High-performance",
        "HTTP2",
        "HTTP",
        "Heap",
        "Hypermedia",
        "Hadoop",
        "Hybrid deployment",
    ],

    I: [
        "Interface",
        "Integration",
        "Internet",
        "IoT",
        "Innovation",
        "Infrastructure",
        "Intelligence",
        "Information",
        "Input",
        "Interface Design",
        "Insight",
        "Installation",
        "Integration",
        "Intrusion",
        "Image",
        "Incident Response",
        "Indexing",
        "Inventory",
        "Incubation",
        "Interoperability",
        "Iteration",
        "Issue Tracking",
        "Input Devices",
        "Information Retrieval",
        "Integrity",
        "Interactive",
        "Identity",
        "Interface Development",
        "Intermediate Code",
        "Interrupt",
        "IaaS",
        "Inference Engine",
        "IT",
        "Intranet",
        "Interface Testing",
        "Internet of Everything",
        "I/O",
        "IP",
        "IOT Platforms",
        "Interactive ",
        "IC Design",
        "ISPs",
        "Intercom",
        "Inductance",
        "Information",
        "ITSM ",
        "Inkjet Printer",
        "IVR Systems",
        "Image Sensor",
        "Infrastructure",
        "Infrared",
        "Insulator"
    ],

    J: [
        "Java",
        "JavaScript",
        "JSON",
        "Job",
        "Journey",
        "Junction",
        "Jazz",
        "Jewel",
        "Journal",
        "Jacket",
        "Jigsaw",
        "Judge",
        "Jungle",
        "Jukebox",
        "Jet",
        "Junction",
        "Jupiter",
        "Journalist",
        "Jump",
        "Jockey",
        "Joy",
        "Jolt",
        "Joint",
        "Jamboree",
        "Jar",
        "Jeans",
        "Jewelry",
        "Jackpot",
        "Jiffy",
        "Jab",
        "Jabberwocky",
        "Jamb",
        "Jasmine",
        "Jangle",
        "Jazz",
        "Jeep",
        "Jew",
        "Jester",
        "Jigsaw",
        "Journey",
        "Judge",
        "Julep",
        "Jungle",
        "Jury",
        "Justice",
        "Juvenile",
        "Juxtaposition",
        "Jaw",
        "Joint",
        "Jot",
        "Jaguar"
    ],

    K: [
        "Keyboard",
        "Kernel",
        "Key",
        "Knowledge",
        "Kit",
        "Kiosk",
        "Kernel",
        "Kilogram",
        "Kilometer",
        "Kiosk",
        "Knowledgebase",
        "Keypad",
        "Kickstarter",
        "Knot",
        "Knob",
        "Knapsack",
        "Kettle",
        "Kite",
        "Kaleidoscope",
        "Kiosk",
        "Karaoke",
        "Kerchief",
        "Karma",
        "Kiddo",
        "Kudos",
        "Keystone",
        "Kickstand",
        "Kneepad",
        "Klaxon",
        "Knurl",
        "Kiosk",
        "Kazoo",
        "Keel",
        "Kindle",
        "Kibble",
        "Kettlebell",
        "Kumquat",
        "Kohlrabi",
        "Kale",
        "Keyboardist",
        "Kilt",
        "Kiwi",
        "Kendo",
        "Kayak",
        "Khaki",
        "Knuckle",
        "Kidney",
        "Kaleidoscope",
        "Knot",
        "Kettle"
    ],

    L: [
        "Language",
        "Laptop",
        "Library",
        "Laser",
        "Lemon",
        "Letter",
        "Light",
        "Lion",
        "List",
        "Lock",
        "Logo",
        "Loop",
        "Lunch",
        "Luggage",
        "Lake",
        "Leaf",
        "Leg",
        "Library",
        "Life",
        "Line",
        "Link",
        "Lip",
        "Liver",
        "Load",
        "Loan",
        "Lock",
        "Locomotive",
        "Log",
        "Logic",
        "Loud",
        "Love",
        "Luggage",
        "Lunch",
        "Lungs",
        "Ladder",
        "Ladle",
        "Lamp",
        "Landscape",
        "Laser",
        "Laughter",
        "Laundry",
        "Lawyer",
        "Leaflet",
        "Lecturer",
        "Leggings",
        "Lemonade",
        "Lens",
        "Leopard",
        "Lettuce",
        "Light"
    ],

    M: [
        "Machine",
        "Map",
        "Market",
        "Message",
        "Method",
        "Mind",
        "Minute",
        "Model",
        "Moment",
        "Money",
        "Month",
        "Mood",
        "Morning",
        "Motion",
        "Mountain",
        "Mouse",
        "Move",
        "Music",
        "Mystery",
        "Myth",
        "Machine",
        "Magazine",
        "Mail",
        "Man",
        "Management",
        "Manager",
        "Manner",
        "Maple",
        "Marathon",
        "March",
        "Marine",
        "Marker",
        "Market",
        "Marsh",
        "Mascot",
        "Mask",
        "Mason",
        "Match",
        "Mate",
        "Matrix",
        "Matter",
        "Maximum",
        "May",
        "Maze",
        "Meal",
        "Meaning",
        "Measure",
        "Medal",
        "Media",
        "Medicine",
        "Meeting"
    ],

    N: [
        "Node",
        "Network",
        "NPM",
        "Namespace",
        "Node.js",
        "Neo4j",
        "NaturalLanguageProcessing",
        "Nginx",
        "NoSQL",
        "NeuralNetwork",
        "NFC",
        "Netiquette",
        "NLP",
        "Namespace",
        "NamespaceCollision",
        "NAT",
        "Netmask",
        "NTP",
        "Nano-SIM",
        "NANDFlash",
        "Noise",
        "NeuralProcessor",
        "Normalization",
        "Notification",
        "Null",
        "NullPointer",
        "Number",
        "NaN",
        "NodeRed",
        "Non-RelationalDatabase",
        "Non-DisclosureAgreement",
        "Non-VolatileMemory",
        "NetworkTopology",
        "NetworkProtocol",
        "NetworkInterface",
        "NetworkSegment",
        "NetworkAddress",
        "NetworkSecurity",
        "NetworkAdministrator",
        "NetworkInfrastructure",
        "NetworkSegmentation",
        "NetworkBandwidth",
        "NetworkTraffic",
        "NetworkVirtualization",
        "NetworkManagement",
        "NetworkMonitoring",
        "NetworkFirewall",
        "NetworkLoadBalancer",
        "NetworkRouter",
        "NetworkSwitch",
        "NetworkHub",
        "NetworkGateway"
    ],

    O: [
        "OperatingSystem",
        "Object",
        "Observer",
        "OAuth",
        "Octet",
        "Opcode",
        "OCR",
        "Offloading",
        "Offline",
        "OLED",
        "Onboarding",
        "OpenCL",
        "OpenGL",
        "OperatingSystem",
        "Optimization",
        "Oracle",
        "ORM",
        "OSI",
        "Outsourcing",
        "Overclocking",
        "Overhead",
        "Overwrite",
        "Oxygen",
        "OAuth2",
        "Object-Oriented",
        "OneDrive",
        "On-Premise",
        "Online",
        "On-Demand",
        "On-Premises",
        "OpenAPI",
        "OpenCV",
        "OpenID",
        "OpenJDK",
        "OpenMP",
        "OpenSSL",
        "OpenStack",
        "OpenSSL",
        "Optical",
        "Optimize",
        "Overclock",
        "Overlay",
        "Overload",
        "Override",
        "Oversampling",
        "Overwrite",
        "Overclocked",
        "OxygenOS"
    ],

    P: [
        "Programming",
        "Protocol",
        "Processor",
        "Platform",
        "Performance",
        "Persistence",
        "Productivity",
        "Package",
        "Parsing",
        "Patch",
        "Parameter",
        "Plugin",
        "Pseudocode",
        "Pseudorandom",
        "Packet",
        "Parallelism",
        "Propagation",
        "Privacy",
        "Proxy",
        "Python",
        "Payload",
        "Prediction",
        "Process",
        "Partition",
        "Permutation",
        "Profiling",
        "Parser",
        "Pattern",
        "Prototype",
        "Persistence",
        "Publish",
        "Pivot",
        "Pointers",
        "Protection",
        "Power",
        "Pipelining",
        "Polarization",
        "Portability",
        "Packetization",
        "Propagation",
        "Phishing",
        "Parallelization",
        "Pixel",
        "Public-key",
        "Preprocessing",
        "Physical",
        "Precision",
        "Push",
        "Pull",
        "Policy",
        "Pentesting",
        "Password"
    ],

    Q: [
        "Query",
        "Queue",
        "QuickSort",
        "Quantum",
        "Qubit",
        "Quality",
        "QueryOptimizer",
        "Quadtree",
        "Quantization",
        "QRCode",
        "QoS (Quality of Service)",
        "QueueingTheory",
        "QuicksortAlgorithm",
        "Quorum",
        "QueryLanguage",
        "Q-Learning",
        "QubitOperation",
        "QuantumComputing",
        "QuantumCryptography",
        "QuantumEntanglement",
        "QueryPerformance",
        "Quine-McCluskey",
        "Quicksort",
        "QueueingNetwork",
        "QuadraticEquation",
        "QuantumAlgorithm",
        "QueueManagement",
        "QEMU (Quick EMUlator)",
        "QueryPlan",
        "Quantile",
        "QuantumBit",
        "QuantumSupremacy",
        "QueueingModel",
        "QuantitativeAnalysis",
        "QubitGate",
        "QuantumSimulation",
        "QuadraticFormula",
        "QuantumTeleportation",
        "QuantumGate",
        "QueueProcessor",
        "QED (Quantum Electrodynamics)",
        "QualityAssurance",
        "QueryExecution",
        "QuantumMechanics",
        "QueueLength",
        "Q-LearningAlgorithm",
        "QuantumAnnealing",
        "QuantumErrorCorrection",
        "QueueDataStructure",
        "QoSManagement",
        "QuantumRandomness",
    ],

    R: [
        "Router",
        "Robotics",
        "REST",
        "RAM",
        "React",
        "Redux",
        "RaspberryPi",
        "RESTfulAPI",
        "Regex",
        "Rendering",
        "ResponsiveDesign",
        "Runtime",
        "Release",
        "Refactoring",
        "Repository",
        "Regression",
        "Requirements",
        "RenderingEngine",
        "Ruby",
        "RubyonRails",
        "Remote",
        "Replica",
        "Reliability",
        "Redundancy",
        "RESTful",
        "Reactive",
        "Real-time",
        "RESTAPI",
        "Raster",
        "Rasterization",
        "Recursion",
        "Recovery",
        "Replication",
        "Round-robin",
        "RaceCondition",
        "RandomAccessMemory",
        "Routing",
        "Resource",
        "Root",
        "Renderer",
        "Resilience",
        "Reproducibility",
        "Readability",
        "Robustness",
        "ReverseEngineering",
        "RealtimeProcessing",
        "RateLimiting",
        "RasterGraphics",
        "Robot"
    ],

    S: [
        "Server",
        "Software",
        "Security",
        "Storage",
        "System",
        "Sensor",
        "Socket",
        "Solution",
        "Service",
        "Script",
        "Synchronization",
        "Switch",
        "Syntax",
        "Scripting",
        "Signal",
        "Simulation",
        "Storage",
        "Satellite",
        "Semantic",
        "Sprint",
        "Scalability",
        "Search",
        "Subnet",
        "Scheduling",
        "Sandbox",
        "Secure",
        "SaaS",
        "Streaming",
        "Structured",
        "Software",
        "Source",
        "Supervised",
        "Synthetic",
        "Smart",
        "Software",
        "Sensor",
        "Support",
        "Scrum",
        "Stack",
        "Storage",
        "Shell",
        "Serverless",
        "Stateful",
        "Stateless",
        "Static",
        "Script",
        "Software",
        "Semantic",
        "Service",
        "Social",
        "Single",
        "SSO",
        "Sign"
    ],

    T: [
        "Technology",
        "Terminal",
        "Transaction",
        "TransactionID",
        "Test",
        "Testing",
        "Template",
        "Token",
        "Topology",
        "Trace",
        "Traffic",
        "Target",
        "Task",
        "Thread",
        "Threshold",
        "Timeout",
        "Tool",
        "Toolbox",
        "Template",
        "Transaction",
        "Transfer",
        "Tunnel",
        "Type",
        "Typing",
        "Text",
        "Tree",
        "Testcase",
        "Trigger",
        "Telemetry",
        "Timeline",
        "Throttle",
        "Ticket",
        "Timestamp",
        "Tag",
        "Tab",
        "Tape",
        "Temperature",
        "Terrain",
        "Terminal",
        "Tensor",
        "TransactionID",
        "Transmission",
        "Tone",
        "Tokenization",
        "Topology",
        "Trace",
        "Trade",
        "Trading",
        "Traffic",
        "Transaction",
        "Technologie",
        "Terminal",
        "Transaktion",
        "TransaktionsID",
        "Test",
        "Testen",
        "Vorlage",
        "Token",
        "Topologie",
        "Spur",
        "Verkehr",
        "Ziel",
        "Aufgabe",
        "Thread",
        "Schwellenwert",
        "Timeout",
        "Werkzeug",
        "Toolbox",
        "Vorlage",
        "Transaktion",
        "Übertragung",
        "Tunnel",
        "Typ",
        "Eingabe",
        "Text",
        "Baum",
        "Testfall",
        "Auslöser",
        "Telemetrie",
        "Zeitleiste",
        "Drossel",
        "Ticket",
        "Zeitstempel",
        "Etikett",
        "Registerkarte",
        "Band",
        "Temperatur",
        "Gelände",
        "Terminal",
        "Tensor",
        "TransaktionsID",
        "Übertragung",
        "Ton",
        "Tokenisierung",
        "Topologie",
        "Spur",
        "Handel",
        "Trading",
        "Verkehr",
        "Transaktion",
    ],

    U: [
        "User",
        "Unix",
        "UI",
        "Uptime",
        "UML",
        "Ultrabook",
        "Upload",
        "Ubuntu",
        "URL",
        "Utility",
        "Usability",
        "USSD",
        "UX",
        "UAT",
        "UnitTesting",
        "USB",
        "UnifiedComms",
        "Unzip",
        "Uninstaller",
        "UninterruptiblePowerSupply",
        "UHF",
        "UART",
        "UnifiedThreatManagement",
        "UniversalPlugAndPlay",
        "UltraWideBand",
        "Unicast",
        "UnstructuredData",
        "UL",
        "UAV",
        "UDP",
        "Unwired",
        "UnmannedAircraftSystem",
        "URL",
        "Usability",
        "USSD",
        "UTF",
        "Usenet",
        "UPnP",
        "UDP",
        "UniversalSerialBus",
        "UbiquitousComputing",
        "UnlockedPhone",
        "USSD",
        "UHS",
        "Uplink",
        "Benutzer",
        "Benutzeroberfläche",
        "Betriebszeit",
        "Hochladen",
        "UDP",
        "URL",
        "Dienstprogramm",
        "Benutzerfreundlichkeit",
        "USSD",
        "UX",
        "UAT",
        "Einheitstests",
        "USB",
        "Unified Communications",
        "Entpacken",
        "Deinstallationsprogramm",
        "Unterbrechungsfreie Stromversorgung",
        "UHF",
        "Betriebszeit",
        "UART",
        "Unified Threat Management",
        "Universal Plug and Play",
        "Ultra Wide Band",
        "Unicast",
        "Unstrukturierte Daten",
        "UL",
        "UAV",
        "UDP",
        "Kabellos",
        "Unbemanntes Flugsystem",
        "Unicode",
        "Betriebszeit",
        "URL",
        "Benutzerfreundlichkeit",
        "USSD",
        "UTF",
        "Usenet",
        "UPnP",
        "UDP",
        "Universal Serial Bus",
        "Ubiquitous Computing",
        "Entsperrtes Telefon",
        "USSD",
        "UHS",
    ],

    V: [
        "Variable",
        "Vektor",
        "Verbindung",
        "Verstärker",
        "Version",
        "Vibration",
        "Videokonferenz",
        "Videostreaming",
        "Virtualisierung",
        "Virenscan",
        "Visualisierung",
        "Volltextsuche",
        "Volume",
        "Virtuelles",
        "Vorschau",
        "Vulkan",
        "Virtueller",
        "Video",
        "Vermittlung",
        "Videospiele",
        "Vorlagen",
        "Verzeichnis",
        "Validierung",
        "Versionierung",
        "Vorhersage",
        "Virtueller Speicher",
        "Voice",
        "Videoanalyse",
        "Vorfilterung",
        "Vollbildmodus",
        "Vergleich",
        "Verlauf",
        "Videorekorder",
        "Vorschlag",
        "Vorgang",
        "Vermittlungsschicht",
        "Virtuelle Realität",
        "Verknüpfung",
        "Videokarte",
        "Verification",
        "Vernetzung",
        "Videokompression",
        "Vektorgrafik",
    ],

    W: [
        "Web",
        "Widget",
        "Wireframe",
        "WiFi",
        "Workflow",
        "Wrapper",
        "Watchdog",
        "Webinar",
        "WebSocket",
        "Warehouse",
        "Workspace",
        "Wearable",
        "Wormhole",
        "Wizard",
        "Wavelength",
        "WorkflowEngine",
        "WebServer",
        "WebApplication",
        "Wireless",
        "Waveform",
        "Workstation",
        "WavelengthDivisionMultiplexing",
        "Writability",
        "WordCloud",
        "WeakAI",
        "WebGL",
        "WearableTechnology",
        "WordEmbedding",
        "WeightNormalization",
        "WordProcessing",
        "WebAssembly",
        "WideAreaNetwork",
        "WirelessSensorNetwork",
        "WhiteHat",
        "WordSenseDisambiguation",
        "WANOptimization",
        "WordVector",
        "Watermark",
        "WebComponent",
        "WebDevelopment",
        "WORM",
        "WaterfallModel",
        "WebCrawler",
        "Widgetization",
        "WorkflowManagement",
        "WriteOnceReadMany",
        "WorkstationComputer",
        "WebDesign",
        "WebHosting",
        "WiFiDirect",
        "WirelessCharging"
    ],

    X: [
        "XML",
        "XSS",
        "XaaS",
        "XPath",
        "XGBoost",
        "XHTML",
        "X.509",
        "XML",
        "XOR",
        "Xeon",
        "XFS",
    ],
    Y: [
        "YAML",
        "Yarn",
        "Yacc",
        "Yield",
        "Yocto",
        "Yoctosecond",
        "Yotta",
        "Yottaampere",
        "Yottabyte",
        "Yottafarad",
        "Yottagram",
        "Yottahenry",
        "Yottaliter",
        "Yottameter",
        "Yottasecond",
        "Yoctobase",
        "Yoctocoulomb",
        "Yoctoelectronvolt",
        "Yoctofarad",
        "Yoctogram",
        "Yoctohertz",
        "Yoctoliter",
        "Yoctometer",
        "Yoctonewton",
        "Yoctosecond",
        "Yoctotesla",
        "Yoctovolt",
        "Yoctowatt",
        "Yottabit",
        "Yottaohm",
        "Yottawatt",
        "Yoctoflop",
        "Yoctopascal",
        "Yottasecond",
        "Yoctohertz",
        "Yottagram",
        "Yoctofarad",
        "Yoctonewton",
        "Yottanewton",
        "Yottagram",
        "Yoctopascal",
        "Yottapascal",
        "Yottaampere",
        "Yoctohertz",
        "Yottasecond",
        "Yottatesla",
        "Yoctonewton",
        "Yoctowatt",
        "Yottawatt",
        "Yoctoflop",
        "Yottabyte"
    ],

    Z: [
        "Zip",
        "Zero-day",
        "Zone",
        "Zoo",
        "Zoom",
        "Zigbee",
        "Zipline",
        "Zettabyte",
        "Zodiac",
        "Zookeeper",
        "Z-wave",
        "Zeal",
        "Zeppelin",
        "Zendesk",
        "Zephyr",
        "Zepto",
        "Zeroconf",
        "Z-buffer",
        "Zeroing",
        "Zygote",
        "Zodiacal",
        "Zoning",
        "Zonule",
        "Zooplankton",
        "Zinc",
        "Zigzag",
        "Zygomatic",
        "Zipper",
        "Zombie",
        "Z-axis",
        "Zoomorphism",
        "Zebibyte",
        "Zettajoule",
        "Zigzagging",
        "Zoomable",
        "Zombify",
        "Zoonosis",
        "Zoology",
        "Zing",
        "Zesty",
        "Zoopathy",
        "Zoonotic",
        "Zoomer",
        "Zeptosecond",
        "Zeroth",
        "Ziplock",
        "Zirconium",
        "Zig",
        "Zonal",
        "Zithers",
        "Zeitgeist",
        "Zoetrope"
    ]
};