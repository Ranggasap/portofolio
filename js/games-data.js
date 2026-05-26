/* ============================================================
   games-data.js
   Edit THIS file to update game cards and modal content.
   Add your GIF paths to the `gif` field of each game.
   ============================================================ */

const GAMES_DATA = {

  miels: {
    /* ── Card info ── */
    title:    'Miels Indonesia — E-Commerce',
    tags:     'web',
    genre:    'Full-Stack Web',
    platform: 'Vue.js 3 · Tailwind · Chart.js',
    role:     'Front-End Developer',
    desc:     'Production e-commerce platform for a Tangerang-based clean beauty brand — Vue.js 3, Pinia, Midtrans payment gateway, and an admin analytics dashboard. Live at miels.id.',
    badge:    { text: 'Live ↗', cls: 'badge-live' },
    highlights: [
      { text: 'Vue.js 3 + Pinia' },
      { text: 'Midtrans Payments' },
      { text: 'Analytics Dashboard' },
      { text: '🚀 Production Live', cls: 'award' },
    ],
    gif:        'assets/gifs/miels/GIFMielsRunThrough.gif',
    thumbClass: 'thumb-web',
    thumbText:  'MIELS.ID',
    team: 'Technology Cellar · 6 members · 5 months',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'assets/gifs/miels/GIFMielsRunThrough.gif',
        mediaType:  'gif',
        mediaLabel: 'Website Runthrough',
        title:      null,
        body:       `Miels Indonesia is a Tangerang-based clean beauty brand selling all-natural, non-toxic skincare — safe for the whole family from newborns to adults. I was contracted as frontend website developer for 5 months within a 6-person team: one frontend lead, two backend engineers, one project manager, and one UI/UX designer.\n\nThe result is a production e-commerce platform live at miels.id — built in Vue.js 3, translating Figma designs into a fully responsive, component-based frontend integrated with backend APIs, Midtrans payment gateway, and an admin analytics dashboard.`,
      },
      {
        media:      'assets/gifs/miels/SSLoginMiels.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Sign Up Screen',
        title:      'Component Architecture — Reusable Design System',
        body:       `Every UI element was built as an isolated, reusable component: buttons, input fields, form wrappers, error messages, and more. Each component accepts props for color, border, text content, and callback behavior — meaning the entire site is assembled from a consistent set of building blocks rather than duplicated markup. This made adding new pages predictable and kept visual consistency maintainable across the full codebase.\n\nAll pages are built mobile-first using Tailwind CSS with custom CSS where needed, ensuring the experience is designed for the smallest screen first and progressively enhanced for larger viewports.`,
      },
      {
        media:      'assets/gifs/miels/GifSignUpLoginMiels.gif',
        mediaType:  'gif',
        mediaLabel: 'Login & Sign Up Flow',
        title:      'Authentication — Login, Sign Up & OTP',
        body:       `I implemented the full authentication flow from Figma spec: login, sign up, and email OTP verification. The OTP flow includes a 1-minute cooldown on resend requests and clear error states for expired or invalid codes.\n\nSession security is handled via a token that auto-refreshes every 15 minutes — balancing persistent login experience with protection against token hijacking. Error states across all auth flows surface as toast notifications via a global error handler, ensuring users always receive feedback without disruptive page-level errors.\n\nAPI contracts were defined via Swagger documentation shared between frontend and backend teams — allowing me to develop and mock frontend flows before backend endpoints were fully ready.`,
      },
      {
        media:      'assets/gifs/miels/SSProductPageMiels.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Products Page',
        title:      'Product Pages, Cart & Checkout',
        body:       `I built the customer-facing discovery layer: home page, about page, and product listing page. Cart state is managed server-side — items are stored in the backend and synced to the frontend via Pinia, persisting across sessions and devices without relying on local storage.\n\nMy checkout integration responsibility was ensuring data integrity between cart and payment: verifying that every item from the cart carried through correctly to checkout, and that the payment amount passed to Midtrans exactly matched the cart total — preventing any discrepancy between what the customer saw and what they were charged.`,
      },
      {
        media:      'assets/gifs/miels/GIFPaginationMiels.gif',
        mediaType:  'gif',
        mediaLabel: 'Server-Side Pagination',
        title:      'Performance — Server-Side Pagination',
        body:       `Miels Indonesia carries a large product catalog, each product with multiple data properties: images, pricing, descriptions, bundle configurations, and more. Loading the full catalog in a single request exceeded the 3-second threshold that causes significant user drop-off.\n\nThe solution was server-side pagination — the frontend requests only 12 products per page from the backend, with subsequent pages fetched on demand. Initial load is reduced to a fraction of the full catalog size while keeping the browsing experience smooth.`,
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Analytics Dashboard',
        body:       `I built an admin-facing analytics dashboard giving business owners direct visibility into their sales data: total sales by month and year, units sold per product in a given period, and best-seller rankings. Visualized using Chart.js, with both preset date filters (this month, this year) and a custom date range picker for flexible reporting.\n\nData loads on page visit — giving admins an up-to-date snapshot every time they open the dashboard. This directly supports the client's tax administration workflow and business strategy planning.`,
      },
    ],

    achievements: [
      '🚀 Live at miels.id',
      '💳 Midtrans Payment Gateway Integration',
      '📊 Admin Analytics Dashboard (Chart.js)',
      '🔐 OTP Authentication Flow',
    ],
    links: [
      { label: 'miels.id ↗', url: 'https://miels.id', type: 'primary' },
    ],
  },

  perk: {
    title:    '4 Perk Games',
    tags:     'client game',
    genre:    'Mini Games Suite',
    platform: 'WebGL · Godot',
    role:     'Programmer · 23 Mil Studio · Client Delivery',
    desc:     '4 mini-games with cloud-integrated reward systems — scratch, shout, card-matching, gachapon. All connected via REST API for live reward control.',
    badge:    { text: 'Client', cls: 'badge-client' },
    highlights: [
      { text: 'REST API' },
      { text: 'Godot · WebGL' },
      { text: 'Shader · Gesture' },
      { text: '✅ Delivered', cls: 'award' },
    ],
    gif: 'assets/gifs/perks/SSOpening4Perks.png',
    thumbClass: 'thumb-perk',
    thumbText:  '4 PERK GAMES',
    team: '23 Mil Studio (3 members) · 3 months · Client Project',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'assets/gifs/perks/SSOpening4Perks.png',
        mediaType:  'screenshot',
        mediaLabel: '4 Games Overview',
        title:      null,
        body:       'Perk Games is a client-commissioned suite of four marketing mini-games deployed as WebGL — built in Godot over 3 months by a 3-person team. Godot was selected as the engine specifically for its open-source, zero-cost licensing — a practical decision for a client project with budget constraints. All four games integrate with a cloud backend via REST API, enabling the client to adjust prize probabilities and reward drop rates in real-time without touching the game build. I developed three of the four games — scratch, gachapon, and card matching — while the second programmer handled the shout game independently.\n\nThis was my first professional client delivery and my first production project in Godot, requiring me to adapt from Unity/C# to a new engine while meeting real client deadlines.',
      },
      {
        media:      'assets/gifs/perks/SSWinning4Perks.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Prize Section UI',
        title:      'Architecture — Backend-Driven Prize System',
        body:       'All prize outcomes are determined server-side before the player interacts with the game. The integration uses two HTTP methods with distinct responsibilities:\n\nGET is used at session start to fetch the pre-determined prize data and display assets from the backend. While the request is in-flight, a loading state is shown to the player — the game never displays a blank or broken state during network latency.\n\nThe GET response also drives the full visual configuration of each game. Background images, button colors, opening screen images, card designs, and other UI assets are all fetched from the backend at runtime — meaning the client can completely retheme any of the four games for different events or campaigns without touching the game build. Every visual element the player sees is data-driven, not hardcoded.\n\nPOST is used after the player completes the game to submit their contact information — name, email, and phone number — to the backend for prize claiming. Each POST request includes a token as a unique validator, ensuring each claim is authenticated and cannot be duplicated.\n\nThe API layer and backend logic were handled by a separate team. My responsibility was clean integration on the game side — correct request formatting, loading state management, and ensuring the full flow from session start to prize claim worked reliably on the exhibition devices.',
      },
      {
        media:      'assets/gifs/perks/SSScratchCard.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Scratch Game',
        title:      'Scratch Game — Shader-Based Reveal',
        body:       'The scratch card mechanic is built on a custom shader with texture masking. As the player clicks or drags a finger across the card, the shader progressively erases the top layer at the exact position of the input — simulating physical scratching pixel by pixel. The system continuously tracks coverage percentage of the revealed area. At 90% scratched, the full prize reveal triggers automatically — players experience the satisfying reveal moment without needing to scratch every last pixel, keeping the interaction efficient in a busy exhibition booth.',
      },
      {
        media:      'assets/gifs/perks/SSGachapon.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Gachapon Game',
        title:      'Gachapon Game — Rotational Gesture Input',
        body:       'The gachapon mechanic uses a rotational touch gesture: the player clicks and physically rotates the torque knob with their finger — three full rotations required to release the prize. The rotation input maps directly to the knob\'s visual rotation, creating a tactile connection between gesture and on-screen response. After the third rotation, the gachapon machine shakes and ejects a prize ball with a reveal animation. As with all games, the prize itself is pre-determined by the backend — the three-rotation sequence is deliberate UX theater, building anticipation and perceived effort before the payoff.',
      },
      {
        media:      'assets/gifs/perks/SSMatchCard.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Card Matching Game',
        title:      'Card Matching — Time-Based Prize Threshold',
        body:       'The card matching game ties prize eligibility to completion speed — players must match all cards within a time threshold to receive a prize. The threshold value is pulled from the backend at session start, meaning the client can tighten or loosen the difficulty in real-time across the entire exhibition without a game update. This made card matching the most dynamically configurable of the three games I built.',
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Delivery',
        body:       'All four games were delivered within the 3-month timeline with full source code and a Technical Design Document covering the setup guide and all API endpoints the games communicate with — enabling the client to onboard new developers or modify configurations without depending on our team.',
      },
    ],

    achievements: [
      '✅ On-Time Client Delivery',
      '📄 Full Technical Documentation',
      '🌐 WebGL · REST API Integration',
    ],
    links: [
      { label: 'Client Delivery ✓', url: '#', type: 'secondary' },
    ],
  },

  fitliftmax: {
    /* ── Card info ── */
    title:    'Fit Lift Max',
    tags:     'ios mobile',
    genre:    'iOS App',
    platform: 'SwiftUI · Swift Data · Swift Charts',
    role:     'Feature Lead (De-facto) · iOS Developer',
    desc:     'iOS 1RM calculator and training tracker for progressive overload — Brzycki formula, Swift Data persistence, Swift Charts visualization, and RPE-based planning. Released to the App Store in a 1-month challenge.',
    badge:    { text: 'App Store', cls: 'badge-apple' },
    highlights: [
      { text: 'SwiftUI' },
      { text: 'Swift Data + Charts' },
      { text: 'RPE-Based Planning' },
      { text: '🍎 App Store Live', cls: 'award' },
    ],
    gif:        'assets/gifs/fitliftmax/SSFitLiftMaxDisplay.jpeg',
    thumbClass: 'thumb-ios',
    thumbText:  'FIT LIFT MAX',
    team: 'Apple Developer Academy · 6 members · 1 month',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'assets/gifs/fitliftmax/SSFitLiftMaxDisplay.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'App Overview',
        title:      null,
        body:       `Fit Lift Max is an iOS 1RM calculator and training tracker built to help weightlifters calculate, record, and plan their progressive overload — released to the App Store as part of a 1-month challenge from Apple Developer Academy mentors.\n\nI was part of a 6-person team: one project manager, one UI/UX designer, and four programmers. While not formally titled, I functioned as the de-facto feature lead — owning the three core features of the app while the team was still collectively learning SwiftUI for the first time.`,
      },
      {
        media:      'assets/gifs/fitliftmax/GIFFitliftMaxREMCalculator.gif',
        mediaType:  'gif',
        mediaLabel: '1RM Calculator',
        title:      '1RM Calculator — Brzycki Formula',
        body:       `The calculator takes four inputs: exercise type, weight used, number of repetitions, and target 1RM percentage. With a single tap, it generates a complete Rep Max table from 1 to 30 reps using the Brzycki formula — one of the most established and accurate 1RM estimation methods, selected after researching multiple formulas including Epley and Lander.\n\nEach row shows the estimated weight, rep count, and corresponding percentage of 1RM, giving the lifter a full picture of their current strength profile. Calculated results can be saved with a single tap, feeding directly into the Progress Tracker.`,
      },
      {
        media:      'assets/gifs/fitliftmax/GIFFitREMTracker.gif',
        mediaType:  'gif',
        mediaLabel: 'Progress Tracker',
        title:      'Progress Tracker — Swift Data & Swift Charts',
        body:       `Saved 1RM records are persisted using Swift Data — Apple's modern Swift-native persistence framework introduced at WWDC 2023 — replacing the need for manual Core Data stack setup with a declarative, type-safe model layer.\n\nProgress is visualized using Swift Charts with five filter presets: Day, Week, Month, 6 Months, and Year — giving lifters both granular session-level feedback and long-term strength trend visibility. I collaborated with the teammate responsible for the progress display to integrate the calculator's save output correctly into the chart data model.`,
      },
      {
        media:      'assets/gifs/fitliftmax/GIFFitPlanner.gif',
        mediaType:  'gif',
        mediaLabel: '1RM Planner',
        title:      '1RM Planner — RPE-Based Progressive Overload',
        body:       `The Planner takes two inputs: the weight used in the last session and an RPE score from 1 to 10 (Rate of Perceived Exertion — how difficult the lift felt). The app uses these to recommend an adjusted weight for the next session: a score approaching 1 indicates the lift was easy, so the recommendation increases weight; a score approaching 10 indicates near-maximum effort, so the recommendation reduces weight to allow recovery and safe progression.\n\nA disclaimer is displayed alongside every recommendation, advising users to implement progressive overload under qualified supervision — a deliberate safety design decision made after interviewing experienced gym practitioners during our research phase.`,
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Domain Research',
        body:       `None of our team were regular gym-goers — myself included. Rather than guessing at the domain, we conducted structured research and interviews with experienced weightlifters to understand how 1RM is actually used in training, what makes a recommendation trustworthy, and where calculator apps typically fall short.\n\nThis research directly shaped the formula selection, the RPE input design, and the safety disclaimer copy.`,
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Design — Apple HIG & Localization',
        body:       `The app follows Apple Human Interface Guidelines throughout — most significantly in navigation architecture. With three core features, we implemented a bottom tab bar with three items (Calculator, Planner, Tracker) — the HIG-recommended pattern for flat, peer-level navigation that keeps every feature one tap away without hierarchy or back buttons.\n\nThe app supports English and Bahasa Indonesia localization, and full dark mode — ensuring the app is accessible and inclusive across user preferences and environments.`,
      },
      {
        media:      'assets/gifs/fitliftmax/SSFitLiftMaxTeam.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Team Photo',
        title:      'Presentation — Client Demo & App Store',
        body:       `On the final day of the 1-month timeline, we presented Fit Lift Max in a client-style presentation to Apple Developer Academy mentors — covering all features, design decisions, and technical implementation. I delivered the full presentation in English, a deliberate personal challenge to develop professional communication skills in a high-stakes context.\n\nWe also ran a booth for approximately 4 hours, demoing the app to university visitors. The app was subsequently released to the App Store — shipping a production iOS app within a 1-month student project timeline.\n\nI documented the Swift Data implementation in a self-authored Medium article, covering how the persistence layer was architected within the app.`,
      },
    ],

    achievements: [
      '🍎 Released to the App Store',
      '📐 Shipped in 1-Month Challenge Timeline',
      '💾 Swift Data + Swift Charts Integration',
      '🔬 User Research-Driven Design',
    ],
    links: [
      { label: 'Linkedin ↗', url: 'https://www.linkedin.com/posts/ranggasaputra-software_excited-to-share-our-teams-latest-project-activity-7221784176159547395-pyML?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWFg9UBvCo1nxMUIq7FS4lTfapoqCmRM9c', type: 'primary' },
      { label: 'Medium Article ↗', url: 'https://medium.com/@ranggasaputra200412/implement-data-persistence-with-swift-data-for-storing-data-in-the-fit-lift-max-application-7987ccbdbae7', type: 'secondary' },
    ],
  },

  accountant: {
    title:    'Little Accountant',
    tags:     'ios mobile game',
    genre:    'Educational App',
    platform: 'iPad · iOS',
    role:     'Sole Developer · SwiftUI / MVVM',
    desc:     'Educational game teaching children accounting basics through storytelling. Follow Matthew as he earns money to buy his favorite game.',
    badge:    { text: 'SSC 2025 Winner', cls: 'badge-apple' },
    highlights: [
      { text: 'SwiftUI · MVVM' },
      { text: 'Instructional Design' },
      { text: '🏆 Swift Student 2025', cls: 'award' },
    ],
    gif: 'assets/gifs/littleaccountant/GIFLittleAccountantFull.gif',
    thumbClass: 'thumb-accountant',
    thumbText:  'LITTLE ACCOUNTANT',
    team: 'Rangga Saputra (Solo) · 1 month',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'assets/gifs/littleaccountant/GIFLittleAccountantFull.gif',
        mediaType:  'gif',
        mediaLabel: 'App Gameplay',
        title:      null,
        body:       'Little Accountant is an iOS educational app built in Swift, SwiftUI, and AVFoundation — developed solo in one month — that teaches children foundational accounting concepts through interactive storytelling. Players follow Matthew\'s journey to earn money for his dream game, learning income, expenses, assets, and profit & loss across four self-directed chapters.\n\nThe motivation was personal. As a vocational high school student, I struggled to understand accounting concepts when I first encountered them. I am a visual learner — abstract definitions without context did not stick. Little Accountant was built to be the resource I wished I had: accounting fundamentals made approachable through story, interaction, and immediate feedback.',
      },
      {
        media:      'assets/gifs/littleaccountant/GIFChapter1.gif',
        mediaType:  'gif',
        mediaLabel: 'Chapter 1 — Dishwashing Mini Game',
        title:      'Instructional Design',
        body:       'Every chapter follows a deliberate learning loop — concept explanation, interactive practice, then story progression — so new knowledge is introduced in context before being tested.\n\nChapter 1 teaches income through a touch-based dishwashing mini game. The mechanic is intentionally simple: tap the dirty plates. No instructions needed beyond what the screen shows. This removes cognitive friction so the player focuses on the concept, not the controls. Completing the challenge progresses Matthew\'s story.',
      },
      {
        media:      'assets/gifs/littleaccountant/GIFChapter2&3.gif',
        mediaType:  'gif',
        mediaLabel: 'Chapter 2 — Multiple Choice',
        title:      null,
        body:       'Chapters 2, 3, and 4 use multiple choice for assets, expenses, and profit & loss — concepts that require classification and comparison rather than action. Correct and incorrect answers both trigger distinct SFX feedback, giving players an immediate sensory signal without interrupting narrative flow. Chapters are freely selectable — players choose their own path — but each is contextually guided so the learning progression feels natural rather than forced.',
      },
      {
        media:      'assets/gifs/littleaccountant/SSMVVMPattern.png',
        mediaType:  'screenshot',
        mediaLabel: 'MVVM Architecture Code',
        title:      'Architecture — MVVM in SwiftUI',
        body:       'As the app expanded across four chapters, keeping view logic and UI rendering in the same file became a maintenance problem. I refactored to MVVM architecture using SwiftUI\'s reactive data binding system.\n\nChapterStatusViewModel serves as a singleton ViewModel — tracking completion state for all four chapters via @Published boolean properties. The private init() enforces single-instance access through ChapterStatusViewModel.shared, ensuring chapter progress is consistent across every view in the app.\n\nOn the View side, Chapter1ResultView declares @ObservedObject var chapterStatus = ChapterStatusViewModel.shared — subscribing to state changes automatically. When a chapter is completed, the ViewModel updates its @Published property, and every observing view re-renders without any manual notification. The resetChapters() method provides a single centralized reset point — all state logic lives in the ViewModel, zero logic leaks into the View layer.\n\nThe result: adding a new chapter means adding one @Published property to the ViewModel and one @ObservedObject reference in the new View. No changes to existing code required.',
      },
      {
        media:      'assets/gifs/littleaccountant/SSWinner.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Swift Student Challenge Winner',
        title:      'Swift Student Challenge 2025 — Winner',
        body:       'One month after submission, Little Accountant was selected as a Swift Student Challenge 2025 Winner — one of approximately 350 winners selected globally from thousands of submissions, judged directly by Apple. The app was featured on WWDCScholars, Apple\'s curated showcase of winning submissions worldwide.',
      },
      {
        media:      'assets/gifs/littleaccountant/SSInvitationApple.png',
        mediaType:  'screenshot',
        mediaLabel: 'Apple Developer Center Invitation',
        title:      null,
        body:       'Following the announcement, I received a personal invitation to present Little Accountant at Apple Developer Center Singapore — to Apple engineers, fellow developers, and students. One month of preparation: I was asked to explain my background, my motivation, and the design decisions behind the app.\n\nThe story I told is real. I was a vocational high school student who found accounting abstract and difficult to grasp. I built the app I wished existed when I was learning. That origin story — a student building for students — became the core of the presentation.',
      },
    ],

    achievements: [
      '🏆 Swift Student Challenge 2025 Winner',
      '🍎 Presented at Apple Developer Center Singapore',
      '🌐 Featured on WWDCScholars',
      '🎓 Apple Developer Academy Graduate',
    ],
    links: [
      { label: 'WWDC Scholars ↗', url: 'https://www.wwdcscholars.com/s/AB1F17F5-F062-4523-9CED-C2CF59C42F9F/2025', type: 'primary' },
      { label: 'LinkedIn ↗', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7421902322802388992/', type: 'secondary' },
    ],
  },

  khodam: {
    /* ── Card info ── */
    title:    'Hodam: Creature Hunters',
    tags:     'rpg client game',
    genre:    'Hack & Slash Roguelike',
    platform: 'PC',
    role:     'Game System Engineer · Gameplay Programmer',
    desc:     'Indonesian mythology-inspired roguelike RPG. Hunt massive creatures, craft weapons from their remains, and uncover hidden world secrets.',
    badge:    { text: 'In Development', cls: 'badge-demo' },
    highlights: [
      { text: 'UI & Game Systems' },
      { text: 'Gameplay System' },
      { text: 'Performance Opt.' },
      { text: '💰 Funded Game', cls: 'award' },
    ],
    gif: 'assets/gifs/hodam/GIFHodamDisplay.gif',
    thumbClass: 'thumb-khodam',
    thumbText:  'HODAM',
    team: '23 Mil Studio (9 members) · 4 months',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'https://www.youtube.com/embed/3BDmh61fndw',
        mediaType:  'youtube',
        mediaLabel: 'Game Trailer',
        title:      null,
        body:       'Hodam: Creature Hunters is a 2D roguelike hack-and-slash where players hunt massive creatures and craft weapons from their remains. I joined as UI Programmer, Game System Engineer, and Gameplay Programmer within a 9-person cross-discipline team — 4 months of active development.',
      },
      {
        media:      'assets/gifs/hodam/GIFCharacterCustomization.gif',
        mediaType:  'gif',
        mediaLabel: 'Character Customization',
        title:      'Character Customization & Save System',
        body:       'I built a modular character customization system with 10 hair styles, freeform hair and skin color pickers, and custom nicknames. All selections are serialized to encrypted local JSON and auto-saved after they confirm their character appearances — so returning players resume exactly where they left off, with no manual save step required.',
      },
      {
        media:      'assets/gifs/hodam/GIFUIEventArchitecture.gif',
        mediaType:  'gif',
        mediaLabel: 'Gameplay UI',
        title:      'UI Systems',
        body:       'I implemented the core in-game UI layer: player stats HUD, pause menu, and post-run result screen. Every UI component is built on an event-driven architecture — when the player takes a hit, a GotHit event fires and notifies all subscribers (stats system, result system, screen effects) independently. No direct references, no tight coupling. Adding a new UI response to any game event requires zero changes to existing systems.',
      },
      {
        media:      'assets/gifs/hodam/GIFDungeonCrawling.gif',
        mediaType:  'gif',
        mediaLabel: 'Dungeon Crawling',
        title:      'Dungeon Crawling System',
        body:       'Each run generates a unique path to the boss via a hybrid algorithm. Players can choose pure random generation, or supply a recipe — a structured set of parameters passed to the dungeon map system — to produce a predictable layout for specific missions. This gives the game both replayability and designer control over curated encounters.',
      },
      {
        media:      'assets/gifs/hodam/HodamUnityProfiler.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Unity Profiler',
        title:      'Performance Optimization',
        body:       'The most complex challenge: reducing draw calls on a sprite-heavy game. Baseline: 200+ draw calls causing visible frame drops. I implemented Sprite Atlas grouping by scene context — pause UI sprites share one atlas, result UI another, the dungeon map its own — bringing draw calls down to 90–150. I also added Unity\'s built-in Object Pool to eliminate runtime instantiation spikes. After profiling, I set a deliberate 30 FPS cap as the performance target: remaining micro-spikes made uncapped 60 FPS inconsistent on mid-range hardware, and a stable 30 FPS delivers a better player experience than fluctuating frames. Trade-off: a small number of cross-scene sprites are duplicated across atlases, slightly increasing texture memory — an acceptable cost given our target platform.',
      },
    ],

    achievements: [
      '💰 Funded Game (Dana Indonesiana)',
      '🌐 International Edu Expo Booth',
      '🍎 Apple Dev Summit 2024',
      '🔧 Active Development',
    ],
    links: [
      { label: 'YouTube ↗', url: 'https://www.youtube.com/embed/3BDmh61fndw', type: 'primary' },
      { label: 'Instagram ↗', url: 'https://www.instagram.com/23milstudio/', type: 'secondary' },
    ],
  },

  donthitmaball: {
    /* ── Card info ── */
    title:    "Don't Hit Ma Ball",
    tags:     'game mobile',
    genre:    'Casual Arcade',
    platform: 'Unity 6 · iOS · Android',
    role:     'Solo Developer',
    desc:     'Casual arcade mobile game built solo in 3 days — drag-to-aim shooting, wave progression, boss dialogue, cosmetic shop, and IronSource ads. Live on Google Play (4.7★, 50+ downloads) and App Store.',
    badge:    { text: 'Live', cls: 'badge-live' },
    highlights: [
      { text: 'Solo · 3 Days' },
      { text: 'IronSource Ads' },
      { text: '4.7★ · 50+ Downloads' },
      { text: '🚀 Google Play + App Store', cls: 'award' },
    ],
    gif:        'assets/gifs/donthitmaball/SSCoverHitMaBall.png',
    thumbClass: 'thumb-khodam',
    thumbText:  "DON'T HIT MA BALL",
    team: 'Solo Project · 3 Days',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'https://www.youtube.com/embed/ZSjIgb1m6Qk',
        mediaType:  'youtube',
        mediaLabel: 'YouTube Trailer',
        title:      null,
        body:       `Don't Hit Ma Ball is a casual arcade mobile game built solo in 3 days — development, art, music, trailer, and YouTube content all handled independently. Players protect their ball by dragging to aim and releasing to shoot incoming balls. Built in Unity 6, released on both Google Play Store and App Store.\n\nThis project was specifically built to learn two things that most developers skip: ads monetization integration and end-to-end store distribution.`,
      },
      {
        media:      'assets/gifs/donthitmaball/GIFHitMaBall.gif',
        mediaType:  'gif',
        mediaLabel: 'Gameplay',
        title:      'Core Gameplay',
        body:       `The shooting mechanic uses a drag-to-aim trajectory system with a simple square projectile — intentionally minimal art to keep scope realistic for a 3-day timeline. Players progress through waves, encounter boss dialogue for a light narrative layer, and earn in-game currency to unlock cosmetics in the shop.\n\nNo IAP — all cosmetics are earnable through gameplay, keeping the monetization purely ad-based.`,
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Ads Monetization — IronSource',
        body:       `I integrated IronSource SDK with two ad formats: interstitial and rewarded video.\n\nPlacement was a deliberate UX decision — interstitials trigger after 1 minute of active play rather than on every death or level transition. The reasoning: a game this simple risks losing players quickly, so intrusive frequent ads would accelerate uninstalls. Waiting for 1 minute of engagement ensures the player has already found value before seeing an ad.\n\nThe biggest technical challenge during integration was ad unit ID declaration — IronSource ads silently failed to display on both Android and iOS builds until I identified that the ad unit IDs were not correctly declared in the project configuration. No error was thrown, just blank ad calls — debugging this required reading through SDK documentation and comparing against the dashboard configuration carefully.`,
      },
      {
        media:      'assets/gifs/donthitmaball/SSHitMaBallGP.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'Google Play Store',
        title:      'Google Play & App Store Distribution',
        body:       `This was my first end-to-end store submission — and the distribution process turned out to be as educational as the development itself.\n\nFor Google Play: navigated the full IARC content rating questionnaire, received a +3 rating, configured regional availability, set up an internal testing track before pushing to production, and managed the review pipeline. The game is currently live with 50+ downloads and a 4.7 star rating from 9 reviews.\n\nFor App Store Connect: completed Apple's submission requirements alongside the Google Play release — handling both store pipelines simultaneously within the 3-day constraint.`,
      },
      {
        media:      'assets/gifs/donthitmaball/SSHitMaBallYT.jpeg',
        mediaType:  'screenshot',
        mediaLabel: 'YouTube Video',
        title:      'YouTube — 3-Day Game Challenge',
        body:       `The entire project was documented as a YouTube challenge video — building, shipping, and uploading a complete mobile game in 3 days. The video reached 700+ views, adding a public accountability layer that kept the scope honest and the deadline real.`,
      },
    ],

    achievements: [
      '🚀 Live on Google Play & App Store',
      '⭐ 4.7 Stars · 50+ Downloads',
      '📺 700+ YouTube Views',
      '💰 IronSource Ads Integration',
      '🏁 Solo · Built & Shipped in 3 Days',
    ],
    links: [
      { label: 'Google Play ↗', url: 'https://play.google.com/store/apps/details?id=com.renggogamelab.donthitmaball', type: 'primary' },
      { label: 'App Store ↗', url: 'https://apps.apple.com/id/app/dont-hit-ma-ball/id6757175186', type: 'secondary' },
      { label: '3-Day Challenge ↗', url: 'https://youtu.be/6MEB8WdzDc4', type: 'secondary' },
    ],
  },

  icarus: {
    /* ── Card info ── */
    title:    'Jump of Icarus',
    tags:     'platformer mobile game',
    genre:    '2D Platformer',
    platform: 'PC · Mobile',
    role:     'Core Programmer · 23 Mil Studio',
    desc:     '2D platformer with comedic twist — control Icarus after being struck by Zeus\'s lightning. Climb to Olympus using only jumping and momentum control.',
    badge:    { text: 'Steam', cls: 'badge-steam' },
    highlights: [
      { text: 'Core Mechanics' },
      { text: 'Analytics' },
      { text: 'Mobile Port' },
      { text: '🏆 IGDX 2025', cls: 'award' },
    ],
    gif: 'assets/gifs/jumpoficarus/GIFJumpOfIcarusDisplay.gif',
    thumbClass: 'thumb-icarus',
    thumbText:  'JUMP OF ICARUS',
    team: '23 Mil Studio (7 members) · 4 months',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'https://www.youtube.com/embed/WP2OTavZQ4M',
        mediaType:  'youtube',
        mediaLabel: 'Game Trailer',
        title:      null,
        body:       'Jump of Icarus is a 2D momentum-based platformer with comedic Greek mythology setting — developed over 4 months and currently available to wishlist on Steam. I served as the primary programmer in a 7-person cross-discipline team alongside one programmer who focused on level design, making me responsible for the majority of the codebase across desktop and mobile.',
      },
      {
        media:      'assets/gifs/jumpoficarus/GIFJumpIcarusGameplay.gif',
        mediaType:  'gif',
        mediaLabel: 'Gameplay Mechanics',
        title:      'Core Mechanics — Variable Jump & Physics',
        body:       'The central mechanic is a variable-height jump system built on Unity\'s New Input System. Rather than a fixed jump force, I apply continuous upward force during button hold — the longer the player holds, the higher Icarus launches, while horizontal input simultaneously determines trajectory direction. This creates an intuitive but skill-expressive feel where players learn to read and shape their arc mid-air.\n\nSlippery surface behavior is handled through Unity Physics Materials assigned directly to character and environment colliders. Because Physics Materials are inspector-exposed by nature, friction values are fully tunable by the team without touching code — the level designer could iterate on ice platform feel independently, keeping our workflow clean across disciplines.',
      },
      {
        media:      'assets/gifs/jumpoficarus/SSJumpIcarusAnalysis.png',
        mediaType:  'screenshot',
        mediaLabel: 'Analytics Overlay',
        title:      'Playtesting Analytics',
        body:       'As the exhibition deadline approached, I built a lightweight in-game analytics layer to surface level design problems we couldn\'t see from internal playtesting alone. The system tracks three key behaviors per session: fall positions, jump count, and level completion time. Data is logged to an in-game overlay, triggered on demand via a dedicated button — letting us record sessions manually during playtesting events without any backend dependency.\n\nThe insight was immediate. By observing where falls clustered spatially, our team could identify which platform gaps were genuinely too punishing versus which ones were intentionally challenging. This feedback loop directly shaped our level revisions before the IGDX 2025 exhibition.',
      },
      {
        media:      'assets/gifs/jumpoficarus/GIFJumpIcarusMobile.gif',
        mediaType:  'gif',
        mediaLabel: 'Mobile Gameplay',
        title:      'Mobile Port — Resolution, UI & Touch',
        body:       'Porting from desktop (1920×1080) to mobile introduced three distinct problems I solved independently.\n\nFor resolution variance, I implemented a letterbox approach — rendering at fixed 1920×1080 with pillarboxing on non-16:9 devices. This prevents out-of-bounds asset visibility and keeps the scene boundary consistent across all screen sizes.\n\nFor UI integrity, I used a camera overlay approach for all UI elements, anchoring them to screen space rather than world space. This ensures the HUD and menus sit correctly on the full device screen — unaffected by the letterbox crop applied to the gameplay camera.\n\nFor touch input, I built a seamless invisible control layer: the screen is divided into left and right tap zones that map directly to the existing jump input actions. No virtual buttons, no on-screen UI clutter — players tap naturally and the game responds, keeping the mobile experience as clean as the desktop version.',
      },
      {
        media:      'assets/gifs/jumpoficarus/SSJumpIcarusShowCase.png',
        mediaType:  'image',
        mediaLabel: 'IGDX 2025 Booth',
        title:      'IGDX 2025 — Exhibition Booth',
        body:       'Jump of Icarus was selected to open a booth at Indonesia Game Developer Exchange 2025 — one of the most prominent game industry events in Indonesia. The team showcased a playable build to industry professionals, press, and fellow developers, gathering live feedback and achieving 90+ Steam wishlists over the course of the event.',
      },
    ],

    achievements: [
      '🏆 IGDX 2025 Booth',
      '☁️ 90+ Steam Wishlists',
      '🍎 Catalyst Bootcamp 2025',
      '📸 2× Instagram Growth',
    ],
    links: [
      { label: 'Steam Wishlist ↗', url: 'https://store.steampowered.com/app/4085050/Jump_of_Icarus/', type: 'primary' },
      { label: 'YouTube Trailer ↗', url: 'https://www.youtube.com/embed/WP2OTavZQ4M', type: 'secondary' },
    ],
  },

  

  pijat: {
    title:    'Pijat Pijat Pak',
    tags:     'jam game',
    genre:    '3D Quick Time Action',
    platform: 'PC',
    role:     'Sole Programmer · Project Manager · Bjoker',
    desc:     'Game jam entry — QTE massage simulator. Follow directional prompts to massage clients, earn money to buy new equipment.',
    badge:    { text: 'itch.io', cls: 'badge-itch' },
    highlights: [
      { text: 'QTE System' },
      { text: 'Programmer + PM' },
      { text: '🏆 Top 20 GameSeed 2025', cls: 'award' },
    ],
    gif: 'assets/gifs/pijat/GIFPijatCoreLoop.gif',
    thumbClass: 'thumb-pijat',
    thumbText:  'PIJAT PIJAT PAK',
    team: 'Bjoker (3 members) · 10-Day Game Jam',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'https://www.youtube.com/embed/OclPf0dlVr4',
        mediaType:  'youtube',
        mediaLabel: 'Gameplay Video',
        title:      null,
        body:       'Pijat Pijat Pak is a 3D Quick Time Action game where players massage Indonesian fathers by following directional prompts, earn money, and upgrade equipment through a roguelike shop system. Developed in 10 days for the GameSeed 2025 qualification round. I served simultaneously as sole programmer and project manager in a 3-person team with a 3D artist and a UI artist.',
      },
      {
        media:      'assets/gifs/pijat/GIFPijatCoreLoop.gif',
        mediaType:  'gif',
        mediaLabel: 'QTE Gameplay',
        title:      'Core System — Extensible Prompt Generation',
        body:       'The central mechanic runs on a two-layer randomization system. The first layer is a person randomizer — I architected this around an enum-based person type, designed so that adding a new client type requires only adding a new enum case and its generation ruleset, with zero changes to the randomizer logic. Within the 10-day window, one person type was fully implemented. The architecture exists to extend immediately in post-jam development.\n\nThe second layer is the prompt randomizer — fully random within the active person type\'s ruleset, keeping every massage session unpredictable and replayable.\n\nGiven the timeline, prompt constraints such as anti-repeat rules were deliberately deprioritized. A fully random system was sufficient to make the core loop fun without introducing additional complexity that could generate bugs under deadline pressure.\n\nBeyond making the system functional, I actively prioritized game feel: a patient satisfaction bar creates time pressure, a combo multiplier rewards consecutive correct inputs, wrong inputs trigger punishments that break combo and affect score, and particle effects fire on successful completions — making each session feel satisfying rather than mechanical.',
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Scope Decisions Under Jam Pressure',
        body:       'The original vision included a boss level and cutscene. By Day 3, it was clear these were scope risks — too much content production for too little remaining time. I made the explicit call to cut both and redirect that time to juiciness and core loop stability.\n\nThe reasoning: a polished incomplete game is more impressive than an unpolished complete one in a jam context. Players who enjoy the core loop will forgive missing content. Players who hit bugs or feel unsatisfied with game feel will not come back.\n\nThe 10 days were split into two protected phases. Day 1–5 focused on core loop implementation and asset generation in parallel — keeping artists unblocked from each other. Day 6–10 shifted entirely to polishing, playtesting, and iterating on mentor feedback. No new features were added after Day 5.',
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'What Top 10 Taught Us',
        body:       'After placement was announced, reviewing the Top 10 games surfaced a clear and honest gap: their games had endings. Story progression, a boss encounter, a sense of completion. Our game loops indefinitely in the core loop — fun, but without a destination.\n\nThat observation was not discouraging — it was specific. We knew exactly what we built well: core loop feel, juiciness, and an extensible randomization system. And we knew exactly what the next level required: content completeness, narrative arc, and a defined win condition. That gap became a direct input into how I approach scope planning in every project after this — core loop first, but with a defined endpoint budgeted from Day 1.',
      },
      {
        media:      'assets/gifs/pijat/SSFigmaPijat.png',
        mediaType:  'screenshot',
        mediaLabel: 'Figma Scope Session',
        title:      'Project Management',
        body:       'Managing both roles required making explicit decisions early. Day 1 started with a scope session in Figma: mapping the full vision, then cutting based on three constraints — current skill level, available hours per day per member, and what was actually fun at the core. Task ownership was assigned with clear definitions of "done" so no team member was ever blocked waiting for direction.',
      },
      {
        media:      'assets/gifs/pijat/SSWinTop20.png',
        mediaType:  'screenshot',
        mediaLabel: 'Top 20 Announcement',
        title:      null,
        body:       'The result: a 3-person team with a 10-day window shipped a playable, polished experience that placed Top 20 from 100+ competing teams — and walked away with specific, actionable lessons for what comes next.',
      },
    ],

    achievements: [
      '🏆 Top 20 Student Best Game — GameSeed 2025',
      '💬 Positive judge & playtester feedback',
      '🎮 Published on itch.io',
    ],
    links: [
      { label: 'itch.io ↗', url: 'https://senatuary.itch.io/pijat-pijat-pak', type: 'primary' },
      { label: 'YouTube ↗', url: 'https://www.youtube.com/watch?v=OclPf0dlVr4', type: 'secondary' },
    ],
  },

  seadentist: {
    title:    'Sea Dentist',
    tags:     'mobile game',
    genre:    'Cozy Island Decor',
    platform: 'Mobile',
    role:     'Developer & Content Creator · Solo',
    desc:     'Cozy 3D mobile game — clean barnacles off sea creatures, expand your island. Built to learn 3D asset creation and game design.',
    badge:    { text: 'In Dev', cls: 'badge-demo' },
    highlights: [
      { text: '3D Modeling' },
      { text: 'ScriptableObject' },
      { text: '📺 4.8M Views', cls: 'award' },
    ],
    gif: 'assets/gifs/seadentist/GIFSeaDentistFullGameplay.gif',
    thumbClass: 'thumb-seadentist',
    thumbText:  'SEA DENTIST',
    team: 'Renggo Game Lab (Solo)',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'assets/gifs/seadentist/GIFSeaDentistMovement.gif',
        mediaType:  'gif',
        mediaLabel: 'Gameplay',
        title:      null,
        body:       'Sea Dentist is a cozy 3D mobile game where players clean barnacles off sea creatures, earn resources through challenges, and craft new equipment for their island. This is an intentional solo learning project — I started with zero Blender experience and challenged myself to build a 3D mobile game entirely alone: scripting, 3D modelling, animation, and audio sourcing.',
      },
      {
        media:      'assets/gifs/seadentist/GIFSeaDentistFullGameplay.gif',
        mediaType:  'gif',
        mediaLabel: 'Movement & Interaction',
        title:      'Player Movement & Interaction',
        body:       'Player movement uses Unity\'s built-in virtual joystick package, integrated with a custom interaction system designed for one-handed mobile play. Interaction uses two distinct raycast strategies for two distinct problems: sphere casting for proximity detection — identifying nearby interactable objects within a radius regardless of player facing direction — and line casting for precision tap interaction, ensuring only the object directly under the player\'s finger registers. This separation keeps the interaction system responsive without false positives.',
      },
      {
        media:      'assets/gifs/seadentist/GIFSeaDentistCrafting.gif',
        mediaType:  'gif',
        mediaLabel: 'Gacha & Crafting',
        title:      'Inventory, Gacha & Crafting System',
        body:       'The progression loop runs through a gacha-to-craft pipeline. Completing the cleaning challenge rewards a chest containing randomized resources, with rarity-weighted probability — common resources drop at higher rates, rare ones require more runs. Resources feed into a crafting system driven entirely by ScriptableObject recipes: each recipe is a standalone asset, the crafting manager scans all attached recipes at runtime, and new items can be added without touching a single line of code. This makes the system designer-friendly and scalable beyond the current content set.',
      },
      {
        media:      'assets/gifs/seadentist/GIF3DSeaDentist.gif',
        mediaType:  'gif',
        mediaLabel: '3D Models',
        title:      '3D Modelling — Blender from Zero',
        body:       'The primary goal of this project was to develop 3D modelling competency from scratch. I created 6 game-ready models — player character, sea creatures, and interactive items — exported via FBX into Unity. Each model is kept under 3,000 polygons, with most sitting well below that, targeting mobile GPU constraints from the start. The full pipeline per model — mesh, rig, weight painting, bone animation, UV unwrap, and FBX export — took approximately 8 hours per asset early in development, a number that decreased as familiarity with Blender grew.\n\nSkills acquired through this project: mesh modelling, bone rigging, weight painting for organic character animation, UV unwrapping, and low-poly best practices for real-time rendering.',
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Current State',
        body:       'Sea Dentist is archived while I focus on university thesis and Hodam: Creature Hunters. The core loop — clean creatures → collect items → craft equipment → decorate island — is partially implemented: the cleaning, collection, and crafting systems are functional. Island decoration exists but has not received new content beyond the initial coconut tree. The game is an honest work-in-progress, not an abandoned project — systems are solid, content is pending.',
      },
      {
        media:      'assets/gifs/seadentist/SSYoutubeSeaDentist.png',
        mediaType:  'screenshot',
        mediaLabel: 'YouTube Analytics',
        title:      'YouTube — 4.8M Views, 12K Subscribers',
        body:       'Every week of development was documented publicly as a devlog series. The channel grew to 12,000+ subscribers and 4.8 million total views in shorts video with 91,000 likes — entirely organically, no paid promotion.\n\nThe breakout video was a shader-building tutorial where I deliberately applied a specific content structure: matching intonation, tempo, and rhythm to the technical content being explained. That video reached 2.4 million views alone — more than half the channel\'s total views. The formula was then applied to subsequent videos, compounding the growth.\n\nThis forced a discipline that improved the project itself: explaining technical decisions publicly requires understanding them deeply, and audience questions surfaced assumptions I had not yet examined. The devlog became both an accountability system and a design feedback loop.',
      },
    ],

    achievements: [
      '📺 12K YouTube Subscribers',
      '👁️ 4.8M Total Views',
      '❤️ 91K Likes',
      '🎬 2.4M Views — Single Video',
    ],
    links: [
      { label: 'YouTube DevLogs ↗', url: 'https://www.youtube.com/@RenggoGameLab/shorts', type: 'primary' },
    ],
  },

  mystoryapp: {
    /* ── Card info ── */
    title:    'My Story App',
    tags:     'mobile',
    genre:    'Android App',
    platform: 'Kotlin · Retrofit2 · Paging 3',
    role:     'Android Developer',
    desc:     'Android social story-sharing app — MVVM + Repository Pattern, GPS-tagged posts, Google Maps integration, Paging 3 infinite scroll, and JWT auth. Dicoding Intermediate Android certification project.',
    badge:    { text: '⭐ Intermediate Cert', cls: 'badge-wip' },
    highlights: [
      { text: 'MVVM + Repository' },
      { text: 'Retrofit2 + Paging 3' },
      { text: 'Google Maps SDK' },
      { text: '⭐ Intermediate Certified', cls: 'award' },
    ],
    gif:        'assets/gifs/mystoryapp/SSStoryAppCore.png',
    thumbClass: 'thumb-backend',
    thumbText:  'MY STORY',
    team: 'Solo Project · Dicoding IDCamp',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'assets/gifs/mystoryapp/SSStoryAppCore.png',
        mediaType:  'screenshot',
        mediaLabel: 'App Overview',
        title:      null,
        body:       `My Story App is an Android social story-sharing app — built as my Dicoding Intermediate Android certification project — where users can post stories tagged to their GPS location and explore stories shared by others on an interactive map.`,
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Architecture — MVVM + Repository Pattern',
        body:       `The app is structured around MVVM with a Repository Pattern, applying Single Responsibility as the core SOLID principle throughout. Each layer has one reason to change:\n\nFragment handles only UI rendering and user interaction. ViewModel manages UI state via LiveData. Repository acts as the single source of truth for all data operations — register, login, session management, and logout. RemoteDataSource handles only API communication. UserPreference handles only local session persistence.\n\nThis separation means a change in the API contract touches only RemoteDataSource. A UI redesign touches only the Fragment. No layer bleeds into another.`,
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'API Integration — Retrofit2 with OkHttp',
        body:       `All network communication uses Retrofit2 with an OkHttpClient configured with an HttpLoggingInterceptor for full request/response debugging during development. JSON responses are deserialized automatically via GsonConverterFactory into Kotlin data classes annotated with @SerializedName.\n\nAPI state is managed through a sealed Result class — Success, Loading, and Error — allowing the UI to handle all possible states exhaustively via Kotlin's when expression. Loading states surface as a progress bar; errors surface as toast notifications; success triggers navigation.`,
      },
      {
        media:      'assets/gifs/mystoryapp/SSStoryLoginRegis.png',
        mediaType:  'screenshot',
        mediaLabel: 'Authentication Screen',
        title:      'Authentication & Session',
        body:       `Register and login forms include frontend validation before any API call is made — email regex pattern matching and minimum password length check. Session is persisted locally via UserPreference using DataStore, storing the JWT token returned on successful login.\n\nThe UserRepository singleton is implemented with @Volatile and double-checked locking for thread-safe access across the app.`,
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Location & Map — Google Maps SDK',
        body:       `Posted stories are tagged to the user's GPS location at time of posting. Stories are displayed on an interactive Google Maps SDK map, allowing users to explore stories geographically — tapping a marker reveals the story detail.`,
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Infinite Scroll — Paging 3',
        body:       `The story list implements Paging 3 — stories are fetched in pages as the user scrolls, with new data loading automatically at the bottom of the list. This keeps initial load fast regardless of total story count.`,
      },
      {
        media:      null,
        mediaType:  'none',
        mediaLabel: null,
        title:      'Testing — Unit Tests',
        body:       `Core business logic is covered by Unit Tests, verifying repository and ViewModel behavior independently of Android framework dependencies.`,
      },
    ],

    achievements: [
      '⭐ Dicoding Intermediate Android Certified',
      '🗺️ Google Maps SDK Integration',
      '📄 Paging 3 Infinite Scroll',
      '🔐 JWT Auth + DataStore Session',
      '🧪 Unit Tests on ViewModel & Repository',
    ],
    links: [
      { label: 'Dicoding ↗', url: '#', type: 'secondary' },
    ],
  },

  zoopedia: {
    /* ── Card info ── */
    title:    'Zoopedia',
    tags:     'mobile',
    genre:    'Android App',
    platform: 'Kotlin · XML · RecyclerView',
    role:     'Android Developer',
    desc:     'Android animal encyclopedia app built for Dicoding IDCamp Basic Android certification. RecyclerView list, detail screen, Intent navigation, and custom Material theme. Awarded 5/5 stars.',
    badge:    { text: '⭐ 5/5 Certified', cls: 'badge-wip' },
    highlights: [
      { text: 'Kotlin + XML' },
      { text: 'RecyclerView' },
      { text: 'Android Intent' },
      { text: '⭐ 5/5 Stars', cls: 'award' },
    ],
    gif:        'assets/gifs/zoopedia/ZooPediaSS.png',
    thumbClass: 'thumb-backend',
    thumbText:  'ZOOPEDIA',
    team: 'Solo Project · Dicoding IDCamp',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'assets/gifs/zoopedia/ZooPediaSS.png',
        mediaType:  'screenshot',
        mediaLabel: 'App Screenshot',
        title:      null,
        body:       `Zoopedia is an Android animal encyclopedia app — my first Android project, built to complete the Dicoding IDCamp Basic Android certification using Kotlin and XML.\n\nThe app features three screens: a splash screen, an animal list rendered with RecyclerView for efficient scrolling performance, and a detail screen showing each animal's name, scientific classification, favorite food, and description. Navigation between screens uses Android Intent. Data is hardcoded and separated into a dedicated data file, keeping the UI layer clean from data concerns. The app applies a custom Material theme for visual consistency.\n\nSubmitted for certification assessment — awarded 5 out of 5 stars, unlocking progression to the intermediate Android learning track.`,
      },
    ],

    achievements: [
      '⭐ 5/5 Stars — Dicoding Assessment',
      '📱 Dicoding IDCamp Basic Android Certified',
      '🔓 Unlocked Intermediate Android Track',
    ],
    links: [
      { label: 'Linkedin ↗', url: 'https://www.linkedin.com/posts/ranggasaputra-software_zoopedia-androiddev-kotlin-activity-7139986204443246592-wViB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWFg9UBvCo1nxMUIq7FS4lTfapoqCmRM9c', type: 'primary' },
    ],
  },

  kantodex: {
    /* ── Card info ── */
    title:    'Kanto Pokédex',
    tags:     'mobile',
    genre:    'Flutter App',
    platform: 'Flutter · Dart · REST API',
    role:     'Mobile Developer',
    desc:     'Flutter assignment app fetching all 151 Kanto Pokémon from PokéAPI — detail view with type, abilities, base EXP, and playable Pokémon cries. Built to learn Flutter fundamentals and API consumption. Grade A.',
    badge:    { text: 'Grade A', cls: 'badge-wip' },
    highlights: [
      { text: 'Flutter · Dart' },
      { text: 'PokéAPI · REST' },
      { text: 'Pokémon Cries' },
      { text: '🎓 Grade A', cls: 'award' },
    ],
    gif:        'assets/gifs/kantodex/SSKantoPokeDex.png',
    thumbClass: 'thumb-ios',
    thumbText:  'KANTO DEX',
    team: 'Solo Project · Mobile Cloud Computing Course',

    /* ── Storytelling sections ── */
    sections: [
      {
        media:      'assets/gifs/kantodex/SSKantoPokeDex.png',
        mediaType:  'screenshot',
        mediaLabel: 'App Overview',
        title:      null,
        body:       `Kanto Pokédex is a Flutter assignment project from my Mobile Cloud Computing course — built to learn Flutter fundamentals and REST API consumption using the PokéAPI. Received grade A.`,
      },
      {
        media:      'assets/gifs/kantodex/GIFKantoPokeDex.gif',
        mediaType:  'gif',
        mediaLabel: 'App Demo',
        title:      null,
        body:       `The app displays all 151 Kanto Pokémon with a detail view per Pokémon showing type, abilities, and base EXP. The standout feature is playable Pokémon cries — each detail page lets users hear the original sound for that Pokémon, fetched from the API alongside the data.\n\nData fetching uses Flutter's Future and async/await for non-blocking API calls, with JSON parsed and stored in a typed Pokémon list. UI is built with a mix of StatefulWidget for data-driven screens and StatelessWidget for static components.`,
      },
    ],

    achievements: [
      '🎓 Grade A — Mobile Cloud Computing Course',
      '🌐 PokéAPI REST Integration',
      '🔊 Playable Pokémon Cries',
    ],
    links: [
      { label: 'GitHub ↗', url: '#', type: 'secondary' },
    ],
  },

};
