export const backgroundOptions = [
  {
    value: "STUDENT",
    title: "University student",
    description:
      "I am currently studying computer science, software engineering, IT, or a related field.",
  },
  {
    value: "SELF_TAUGHT",
    title: "Self-taught learner",
    description:
      "I am learning independently through online courses, documentation, tutorials, and personal projects.",
  },
  {
    value: "FRESH_GRADUATE",
    title: "Fresh graduate",
    description:
      "I recently completed my degree and am preparing to enter the software industry.",
  },
  {
    value: "JUNIOR_DEVELOPER",
    title: "Junior developer",
    description:
      "I already have some professional experience and want to strengthen my technical skills.",
  },
  {
    value: "CAREER_SWITCHER",
    title: "Career switcher",
    description:
      "I am transitioning into software development from another profession or academic background.",
  },
  {
    value: "FREELANCER",
    title: "Freelancer",
    description:
      "I already work with clients and want to improve my technical depth, delivery process, or service quality.",
  },
] as const;

export const goalOptions = [
  {
    value: "LEARN_PROGRAMMING",
    title: "Learn programming from the beginning",
    description:
      "Build strong foundations in programming, problem-solving, and development tools.",
  },
  {
    value: "CHOOSE_SPECIALIZATION",
    title: "Choose a specialization",
    description:
      "Explore frontend, backend, mobile, cloud, data, AI, or other areas before committing.",
  },
  {
    value: "BUILD_PROJECTS",
    title: "Build portfolio projects",
    description:
      "Create practical projects that demonstrate real skills to employers or clients.",
  },
  {
    value: "FIND_INTERNSHIP",
    title: "Get an internship",
    description:
      "Develop the technical skills, portfolio, and interview knowledge needed for internships.",
  },
  {
    value: "GET_FIRST_JOB",
    title: "Get my first developer job",
    description:
      "Become ready for junior software-development roles and technical interviews.",
  },
  {
    value: "BECOME_FREELANCER",
    title: "Start freelancing",
    description:
      "Learn client-ready development, project delivery, communication, and portfolio building.",
  },
  {
    value: "GET_REMOTE_JOB",
    title: "Get a remote job",
    description:
      "Prepare for international technical expectations, interviews, and remote collaboration.",
  },
  {
    value: "UPSKILL_CAREER",
    title: "Advance my current career",
    description:
      "Move toward stronger technical ownership, architecture, leadership, or senior responsibilities.",
  },
] as const;

export const specializationOptions = [
  {
    value: "FRONTEND",
    title: "Frontend development",
    description:
      "Build responsive, accessible, and interactive web interfaces using modern frontend technologies.",
  },
  {
    value: "BACKEND",
    title: "Backend development",
    description:
      "Build APIs, databases, authentication systems, and scalable server-side applications.",
  },
  {
    value: "FULL_STACK",
    title: "Full-stack development",
    description:
      "Develop complete applications covering frontend, backend, databases, and deployment.",
  },
  {
    value: "MOBILE",
    title: "Mobile development",
    description:
      "Build applications for Android, iOS, or cross-platform mobile environments.",
  },
  {
    value: "DEVOPS_CLOUD",
    title: "DevOps and cloud",
    description:
      "Learn deployment, containers, CI/CD, infrastructure, monitoring, and cloud platforms.",
  },
  {
    value: "DATA_ANALYSIS",
    title: "Data analysis",
    description:
      "Work with datasets, visualization, reporting, SQL, spreadsheets, and business insights.",
  },
  {
    value: "DATA_SCIENCE",
    title: "Data science",
    description:
      "Analyze complex data using statistics, Python, machine learning, and predictive models.",
  },
  {
    value: "AI_ML",
    title: "Artificial intelligence and machine learning",
    description:
      "Build intelligent systems using machine learning, deep learning, and generative AI.",
  },
  {
    value: "CYBERSECURITY",
    title: "Cybersecurity",
    description:
      "Learn application security, networks, ethical hacking, and defensive security practices.",
  },
  {
    value: "GAME_DEVELOPMENT",
    title: "Game development",
    description:
      "Build games using engines, graphics, gameplay systems, and interactive programming.",
  },
  {
    value: "UI_UX",
    title: "UI/UX design",
    description:
      "Design usable digital products, interfaces, user journeys, and interactive prototypes.",
  },
  {
    value: "UNSURE",
    title: "I am not sure yet",
    description:
      "I want to explore different fields before deciding which specialization suits me.",
  },
] as const;

export const skillLevelOptions = [
  {
    value: "NEVER_USED",
    label: "Never used",
  },
  {
    value: "BASIC",
    label: "Basic",
  },
  {
    value: "COMFORTABLE",
    label: "Comfortable",
  },
  {
    value: "STRONG",
    label: "Strong",
  },
] as const;

export const skillFields = [
  {
    key: "programmingFundamentals",
    title: "Programming fundamentals",
    description:
      "Variables, data types, conditions, loops, functions, and basic program structure.",
  },
  {
    key: "problemSolving",
    title: "Problem-solving and algorithms",
    description:
      "Breaking down problems, writing logical solutions, and understanding basic algorithms.",
  },
  {
    key: "gitAndGitHub",
    title: "Git and GitHub",
    description:
      "Version control, branches, commits, pull requests, and collaborative workflows.",
  },
  {
    key: "commandLine",
    title: "Command line and Linux",
    description:
      "Navigating directories, running commands, managing files, and using terminal tools.",
  },
  {
    key: "databases",
    title: "Databases",
    description:
      "Relational or document databases, queries, schemas, and data modelling.",
  },
  {
    key: "apisAndHttp",
    title: "APIs and HTTP",
    description:
      "Requests, responses, REST APIs, status codes, headers, and client-server communication.",
  },
  {
    key: "testing",
    title: "Testing",
    description:
      "Unit tests, integration tests, test cases, mocks, and automated quality checks.",
  },
  {
    key: "deployment",
    title: "Deployment",
    description:
      "Hosting applications, environment variables, domains, servers, and production releases.",
  },
  {
    key: "systemDesign",
    title: "System design",
    description:
      "Application architecture, scalability, caching, queues, databases, and technical trade-offs.",
  },
] as const;

export const technologyOptions = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "Go",
  "Rust",
  "PHP",
  "Dart",
  "Kotlin",
  "Swift",
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "NestJS",
  "Django",
  "FastAPI",
  "Spring Boot",
  "Laravel",
  "ASP.NET",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Redis",
  "Git",
  "Docker",
  "Linux",
  "AWS",
  "Azure",
  "Google Cloud",
  "GitHub Actions",
  "Kubernetes",
] as const;

export const technologyExperienceOptions = [
  {
    value: "TUTORIAL_ONLY",
    title: "Mostly tutorials",
    description: "I have mainly followed courses, videos, or guided examples.",
  },
  {
    value: "SMALL_PROJECTS",
    title: "Small projects",
    description:
      "I have used these technologies in exercises and small personal projects.",
  },
  {
    value: "INDEPENDENT",
    title: "Independent development",
    description:
      "I can build applications with these technologies without following every step of a tutorial.",
  },
  {
    value: "PROFESSIONAL",
    title: "Professional experience",
    description:
      "I have used these technologies in internships, jobs, freelance projects, or real products.",
  },
] as const;

export const projectExperienceOptions = [
  {
    value: "NO_PROJECT",
    title: "No complete project yet",
    description:
      "I have mainly completed exercises, tutorials, or small code examples.",
  },
  {
    value: "TUTORIAL_PROJECTS",
    title: "Tutorial-based projects",
    description:
      "I have built projects by closely following videos, courses, or written guides.",
  },
  {
    value: "SMALL_INDEPENDENT_PROJECTS",
    title: "Small independent projects",
    description:
      "I have built simple applications without following every step from a tutorial.",
  },
  {
    value: "FULL_STACK_PROJECTS",
    title: "Full-stack applications",
    description:
      "I have built applications containing frontend, backend, database, and authentication.",
  },
  {
    value: "DEPLOYED_PROJECTS",
    title: "Deployed applications",
    description:
      "I have deployed projects and worked with hosting, databases, and environment variables.",
  },
  {
    value: "REAL_USERS_CLIENTS",
    title: "Projects for real users or clients",
    description:
      "I have built products used by actual users, clients, teams, or organisations.",
  },
] as const;

export const learningPreferenceOptions = [
  {
    value: "VIDEO_COURSES",
    label: "Video courses",
  },
  {
    value: "DOCUMENTATION",
    label: "Written documentation",
  },
  {
    value: "BOOKS",
    label: "Books",
  },
  {
    value: "PROJECTS",
    label: "Hands-on projects",
  },
  {
    value: "GUIDED_EXERCISES",
    label: "Guided exercises",
  },
  {
    value: "CODING_CHALLENGES",
    label: "Coding challenges",
  },
  {
    value: "COMMUNITY",
    label: "Community discussions",
  },
  {
    value: "MENTORSHIP",
    label: "Mentorship",
  },
] as const;

export const roadmapIntensityOptions = [
  {
    value: "LIGHT",
    title: "Light",
    description:
      "A flexible roadmap designed for limited weekly availability and gradual progress.",
  },
  {
    value: "BALANCED",
    title: "Balanced",
    description:
      "A practical mix of concepts, projects, exercises, revision, and career preparation.",
  },
  {
    value: "INTENSIVE",
    title: "Intensive",
    description:
      "A demanding roadmap with faster progression, deeper study, and frequent project work.",
  },
] as const;

export const weeklyHoursOptions = [
  {
    value: "ONE_TO_THREE",
    label: "1–3 hours per week",
  },
  {
    value: "FOUR_TO_SEVEN",
    label: "4–7 hours per week",
  },
  {
    value: "EIGHT_TO_FOURTEEN",
    label: "8–14 hours per week",
  },
  {
    value: "FIFTEEN_TO_TWENTY",
    label: "15–20 hours per week",
  },
  {
    value: "MORE_THAN_TWENTY",
    label: "More than 20 hours per week",
  },
] as const;

export const targetTimelineOptions = [
  {
    value: "ONE_MONTH",
    label: "Within 1 month",
  },
  {
    value: "THREE_MONTHS",
    label: "Within 3 months",
  },
  {
    value: "SIX_MONTHS",
    label: "Within 6 months",
  },
  {
    value: "TWELVE_MONTHS",
    label: "Within 12 months",
  },
  {
    value: "NO_DEADLINE",
    label: "No fixed deadline",
  },
] as const;
