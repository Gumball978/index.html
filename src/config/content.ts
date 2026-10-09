import { SiteConfig, CategoryInfo, VideoItem, ArticleItem, QuizQuestionItem, DailyFactItem } from '../types';

export const SITE_CONFIG: SiteConfig = {
  channelName: 'Science Horizon',
  tagline: {
    en: 'Discover the Science Behind Everything',
    ar: 'اكتشف العلم وراء كل شيء',
  },
  youtubeChannelUrl: 'https://youtube.com/@ScienceHorizon',
  youtubeHandle: '@ScienceHorizon',
  subscriberCountPlaceholder: '250K+',
  videoCountPlaceholder: '120+',
  socials: {
    youtube: 'https://youtube.com/@ScienceHorizon',
    xTwitter: 'https://twitter.com/ScienceHorizon',
    instagram: 'https://instagram.com/ScienceHorizon',
    tiktok: 'https://tiktok.com/@ScienceHorizon',
    githubRepo: 'https://github.com/your-username/science-horizon-web',
  },
  contactEmail: 'contact@sciencehorizon.tv',
  logoText: 'HORIZON',
};

export const CATEGORIES: CategoryInfo[] = [
  {
    key: 'Space',
    label: { en: 'Space & Astronomy', ar: 'الفضاء والفلك' },
    description: {
      en: 'Black holes, exoplanets, cosmological expansion, and stellar evolution.',
      ar: 'الثقوب السوداء، الكواكب الخارجية، التوسع الكوني، وتطور النجوم.',
    },
    iconName: 'Telescope',
  },
  {
    key: 'Earth',
    label: { en: 'Earth & Planetary', ar: 'الأرض والجيولوجيا' },
    description: {
      en: 'Atmospheric dynamics, plate tectonics, orbital mechanics, and climate.',
      ar: 'ديناميكا الغلاف الجوي، الصفائح التكتونية، الميكانيكا المدارية، والمناخ.',
    },
    iconName: 'Globe',
  },
  {
    key: 'Physics',
    label: { en: 'Quantum & Physics', ar: 'الفيزياء والكم' },
    description: {
      en: 'Relativity, thermodynamics, quantum mechanics, and fundamental particles.',
      ar: 'النسبية، الديناميكا الحرارية، ميكانيكا الكم، والجسيمات الأولية.',
    },
    iconName: 'Atom',
  },
  {
    key: 'Biology',
    label: { en: 'Biology & Genetics', ar: 'الأحياء والوراثة' },
    description: {
      en: 'Cellular machinery, DNA replication, biochemistry, and evolutionary biology.',
      ar: 'الآليات الخلوية، تضاعف الحمض النووي، الكيمياء الحيوية، والأحياء التطورية.',
    },
    iconName: 'Dna',
  },
  {
    key: 'Technology',
    label: { en: 'Deep Technology', ar: 'التكنولوجيا المتقدمة' },
    description: {
      en: 'Semiconductors, nuclear fusion, aerospace propulsion, and scientific sensors.',
      ar: 'أشباه الموصلات، الاندماج النووي، الدفع الفضائي، وأجهزة الاستشعار العلمية.',
    },
    iconName: 'Cpu',
  },
  {
    key: 'StrangeFacts',
    label: { en: 'Strange Facts', ar: 'غرائب علمية' },
    description: {
      en: 'Counter-intuitive phenomena, extreme materials, and bizarre natural events.',
      ar: 'ظواهر غير بديهية، مواد فائقة الغرابة، وظواهر طبيعية مذهلة.',
    },
    iconName: 'Sparkles',
  },
];

export const DAILY_FACTS: DailyFactItem[] = [
  {
    id: 'df-1',
    fact: {
      en: 'A single teaspoon of neutron star material would weigh roughly 6 billion tons on Earth.',
      ar: 'ملعقة صغيرة واحدة من مادة نجم نيوتروني تزن حوالي 6 مليارات طن على كوكب الأرض.',
    },
    category: 'Space',
    explanation: {
      en: 'When massive stars collapse into neutron stars, gravity compresses protons and electrons into neutrons at nuclear densities (approx. 4×10¹⁷ kg/m³).',
      ar: 'عندما تنهار النجوم الضخمة إلى نجوم نيوترونية، تضغط الجاذبية البروتونات والإلكترونات لتصبح نيوترونات بكثافة نووية هائلة (حوالي 4×10¹⁷ كجم/م³).',
    },
    verifiedSource: 'NASA Goddard Space Flight Center / Astrophysical Journal',
  },
  {
    id: 'df-2',
    fact: {
      en: 'Venus takes 243 Earth days to rotate on its axis, but only 225 Earth days to orbit the Sun—making its day longer than its year.',
      ar: 'يستغرق كوكب الزهرة 243 يوماً أرضياً ليكمل دورة واحدة حول محوره، بينما يستغرق 225 يوماً فقط ليدور حول الشمس—مما يجعل يومه أطول من سنته.',
    },
    category: 'Space',
    explanation: {
      en: 'Venus has a retrograde rotation that is exceptionally slow, likely caused by ancient giant planetary impacts and atmospheric tidal braking.',
      ar: 'يدور كوكب الزهرة بحركة تراجعية بطيئة للغاية، ويعزى ذلك على الأرجح لاصطدامات قديمة بأجرام ضخمة مع تأثير الكبح المدّي للغلاف الجوي.',
    },
    verifiedSource: 'Jet Propulsion Laboratory (JPL / NASA)',
  },
  {
    id: 'df-3',
    fact: {
      en: 'Tardigrades can survive temperatures as low as -272°C (-458°F), cosmic vacuum, and lethal doses of ionizing radiation through cryptobiosis.',
      ar: 'تستطيع دببة الماء (التارديغرادا) النجاة في درجات حرارة تصل إلى -272 مئوية، وفي الفراغ الكوني، وتحت إشعاعات قاتلة عبر حالة السبات الحيوي.',
    },
    category: 'Biology',
    explanation: {
      en: 'In cryptobiosis, tardigrades expel up to 99% of their body water, replacing it with protective intrinsically disordered proteins (TDPs).',
      ar: 'في حالة السبات، يطرد دب الماء ما يصل إلى 99% من ماء جسده، مستبدلاً إياه ببروتينات واقية غير منتظمة تحمي سلامة الحمض النووي.',
    },
    verifiedSource: 'Nature Communications / ESA FOTON-M3 Mission',
  },
  {
    id: 'df-4',
    fact: {
      en: 'If you unfurled all the DNA in a single human body, it would stretch about 67 billion miles—reaching Pluto and back multiple times.',
      ar: 'إذا قمت بفرد جميع خيوط الحمض النووي (DNA) في جسم بشري واحد، فستمتد لنحو 100 مليار كيلومتر—لتصل إلى بلوتو وتعود عدة مرات.',
    },
    category: 'Biology',
    explanation: {
      en: 'Each cell contains ~2 meters of DNA packed tightly into chromosomes, and the average adult human contains roughly 30 to 37 trillion cells.',
      ar: 'تحتوي كل خلية على نحو مترين من الحمض النووي الملفوف بإحكام داخل الكروموسومات، ويحتوي جسم الإنسان البالغ على حوالي 37 تريليون خلية.',
    },
    verifiedSource: 'National Human Genome Research Institute (NHGRI)',
  },
  {
    id: 'df-5',
    fact: {
      en: 'Photons generated in the Sun’s core take between 10,000 and 170,000 years to reach the surface due to continuous radiative scattering.',
      ar: 'تستغرق الفوتونات المتولدة في قلب الشمس ما بين 10,000 و 170,000 عام للوصول إلى السطح بسبب التشتت الإشعاعي المستمر.',
    },
    category: 'Physics',
    explanation: {
      en: 'The solar core is so dense that photons travel only micrometers before scattering off electrons in a random walk before reaching the radiative zone.',
      ar: 'قلب الشمس شديد الكثافة لدرجة أن الفوتون يقطع ميكرومترات فقط قبل أن يرتد عن الإلكترونات في مسار عشوائي حتى يبلغ منطقة الحمل.',
    },
    verifiedSource: 'Max Planck Institute for Solar System Research',
  },
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'v-diamond-rain',
    youtubeId: 'dQw4w9WgXcQ', // Clear placeholder ID - easily replaced by channel owner
    title: {
      en: "Neptune's Diamond Rain: Inside the Giant Ice Mantle",
      ar: 'مطر الألماس في نبتون: رحلة داخل وشاح الكواكب الجليدية',
    },
    shortDescription: {
      en: 'How pressures of 1.5 million atmospheres split hydrocarbons and precipitate solid diamonds in deep planetary oceans.',
      ar: 'كيف يؤدي ضغط 1.5 مليون ضغط جوي إلى تفكيك الهيدروكربونات وترسيب بلورات الألماس الصلبة داخل أعماق الكوكب.',
    },
    fullDescription: {
      en: 'For decades, astrophysicists theorized that deep within ice giant planets like Neptune and Uranus, extreme thermodynamic conditions compress hydrocarbons into solid diamond precipitation. In this video, we investigate both the laboratory shock-compression evidence from SLAC National Accelerator Laboratory and the open astronomical questions that remain.',
      ar: 'لعقود خلت، افترض علماء الفيزياء الفلكية أن الظروف الديناميكية الحرارية القاسية في أعماق كوكبي نبتون وأورانوس تضغط الهيدروكربونات لتشكل أمطاراً من الألماس الصلب. في هذا الفيديو، نستعرض التجارب المعملية باستخدام ليزر الأشعة السينية فائق الدقة والأدلة التجريبية والأسئلة المفتوحة.',
    },
    keyTakeaways: {
      en: [
        'Experimental tests at SLAC reproduced interior pressures of 150 GPa and temperatures over 5000 K.',
        'Polystyrene polymers mimicked methane, confirming rapid catalytic nanodiamond nucleation.',
        'Gravitational sinking of diamond releases latent heat, explaining Neptune’s unexpected thermal radiation.',
      ],
      ar: [
        'أعادت التجارب المعملية في معمل SLAC محاكاة ضغوط داخلية بلغت 150 جيجا باسكال وحرارة تفوق 5000 كلفن.',
        'استخدمت البوليمرات لمحاكاة الميثان، مما أكد تبلور حبيبات الألماس النانوية في أجزاء من الثانية.',
        'هبوط الألماس بفعل الجاذبية يطلق طاقة حرارية تفسر سبب إشعاع نبتون حرارة تفوق ما يمتصه من الشمس.',
      ],
    },
    category: 'Space',
    duration: '14:28',
    publishDate: '2026-03-15',
    featured: true,
    illustrationType: 'neptune',
  },
  {
    id: 'v-spherical-earth',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder ID
    title: {
      en: "The Irrefutable Geometry: 5 Empirical Proofs of Earth's Shape",
      ar: 'الهندسة التي لا تقبل الجدل: 5 براهين تجريبية على كروية الأرض',
    },
    shortDescription: {
      en: 'From Eratosthenes shadow geometry to Coriolis atmospheric gyres and satellite telemetry.',
      ar: 'من قياس ظلال إراتوستينس إلى الدوامات الجوية الناتجة عن قوة كوريوليس وقياسات الأقمار الاصطناعية.',
    },
    fullDescription: {
      en: 'How do we empirically demonstrate the spherical geometry of Earth using simple physics and astronomical observations? We break down the trigonometric shadow experiments of Eratosthenes, the circular projection during every lunar eclipse regardless of orbital inclination, the changing altitude of Polaris, and modern geodetic measurements.',
      ar: 'كيف نثبت تجريبياً كروية الأرض باستخدام فيزياء واضحة وملاحظات فلكية مباشرة؟ نستعرض تجربة إراتوستينس المثلثية لقياس محيط الأرض، وشكل الظل الدائري في كل خسوف قمري، وتغير زاوية نجم الشمال، وقياسات الجيوديسيا الحديثة.',
    },
    keyTakeaways: {
      en: [
        'Lunar eclipse shadows are always circular, geometrically requiring a spherical occluder.',
        'Polaris elevation angle directly equals the observer’s northern latitude in degrees.',
        'Dip of the horizon increases strictly proportional to the square root of observer altitude.',
      ],
      ar: [
        'ظل الأرض على القمر في كل خسوف يكون دائرياً حتماً، وهو ما يتطلب هندسياً جسماً كروياً ثلاثي الأبعاد.',
        'زاوية ارتفاع نجم الشمال تطابق تماماً خط عرض الراصد بالدرجات.',
        'انخفاض خط الأفق يزداد بدقة مع الجذر التربيعي لارتفاع الراصد عن سطح البحر.',
      ],
    },
    category: 'Earth',
    duration: '18:50',
    publishDate: '2026-02-28',
    featured: true,
    illustrationType: 'earth',
  },
  {
    id: 'v-black-holes',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder ID
    title: {
      en: "Event Horizon Physics: What Happens Inside a Gravitational Singularity?",
      ar: 'فيزياء أفق الحدث: ماذا يحدث داخل التفرد الجاذبي؟',
    },
    shortDescription: {
      en: 'Relativistic time dilation, photon spheres, and the boundary where spacetime coordinates swap roles.',
      ar: 'تمدد الزمن النسبي، كرة الفوتونات، والحد الفاصل الذي تتبادل فيه إحداثيات المكان والزمان أدوارهما.',
    },
    fullDescription: {
      en: 'Einstein’s General Relativity predicts that when enough mass is compressed within its Schwarzschild radius, escape velocity exceeds the speed of light. We unpack the actual physics of the photon ring, frame-dragging around rotating Kerr black holes, and the information paradox at the quantum boundary.',
      ar: 'تتنبأ النظرية النسبية العامة لأينشتاين بأنه عند انضغاط كتلة كافية داخل نصف قطر شفارتزشيلد، تتجاوز سرعة الإفلات سرعة الضوء. نستكشف الفيزياء الدقيقة لحلقة الفوتونات، وسحب الإطار الزمكاني في الثقوب الدوارة، ومفارقة المعلومات الكمومية.',
    },
    keyTakeaways: {
      en: [
        'At the event horizon, spatial coordinates become timelike, forcing an inexorable inward motion.',
        'The photon sphere at 1.5 times the Schwarzschild radius bends light into unstable circular orbits.',
        'Hawking radiation suggests black holes slowly evaporate over incomprehensible cosmological timescales.',
      ],
      ar: [
        'عند أفق الحدث، تصبح الإحداثيات المكانية شبيهة بالزمان، مما يجعل الحركة نحو المركز حتمية.',
        'كرة الفوتونات عند 1.5 من نصف قطر شفارتزشيلد تحني مسار الضوء إلى مدارات دائرية شبه مستقرة.',
        'يشير إشعاع هوكينغ إلى أن الثقوب السوداء تتبخر تدريجياً على مدار آماد زمنية كونية شاسعة.',
      ],
    },
    category: 'Physics',
    duration: '22:15',
    publishDate: '2026-01-20',
    featured: false,
    illustrationType: 'blackhole',
  },
  {
    id: 'v-quantum-double-slit',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder ID
    title: {
      en: "The Double-Slit Experiment: Why Observation Destroys Interference",
      ar: 'تجربة الشق المزدوج: لماذا يدمر الرصد نمط التداخل؟',
    },
    shortDescription: {
      en: 'Demystifying quantum superposition, decoherence, and what scientific measurement actually entails.',
      ar: 'تفكيك غموض التراكب الكمي، وفك الترابط، والمعنى العلمي الدقيق لعملية القياس والرصد.',
    },
    fullDescription: {
      en: 'The double-slit experiment is often misunderstood as human consciousness altering physical reality. In reality, physical decoherence occurs whenever quantum particles interact with macroscopic measurement apparatus, causing wavefunctions to collapse into definite eigenstates.',
      ar: 'غالباً ما يُساء فهم تجربة الشق المزدوج على أن الوعي البشري يغير الواقع الفيزيائي. في الواقع، يحدث فك الترابط الكمي (Decoherence) عند تفاعل الجسيم مع أدوات القياس الفيزيائية والبيئة المحيطة.',
    },
    keyTakeaways: {
      en: [
        'Individual photons or electrons build up an interference pattern over time when unmeasured.',
        'Detecting the path taken requires photon interaction that alters quantum phase coherence.',
        'Observation in quantum mechanics is a physical interaction, not a subjective mental process.',
      ],
      ar: [
        'تبني الفوتونات أو الإلكترونات المنفردة نمط تداخل موجي بمرور الوقت طالما لم يتم رصد مسارها.',
        'تحديد المسار يتطلب تفاعلاً فيزيائياً يغير الترابط الطوري للحالة الكمية.',
        'الرصد في ميكانيكا الكم هو تفاعل فيزيائي مادي ملموس وليس عملية ذهنية أو وعياً بشرياً.',
      ],
    },
    category: 'Physics',
    duration: '16:40',
    publishDate: '2026-01-05',
    featured: false,
    illustrationType: 'quantum',
  },
  {
    id: 'v-crispr-editing',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder ID
    title: {
      en: "CRISPR-Cas9: The Molecular Scissors Revolutionizing Genetics",
      ar: 'تقنية كريسبر-كاس9: المقص الجزيئي الذي يعيد تشكيل علم الوراثة',
    },
    shortDescription: {
      en: 'How bacterial immune defense mechanisms became humanity’s most precise DNA editing technology.',
      ar: 'كيف تحولت آلية دفاعية بكتيرية قديمة إلى أدق تقنية لتعديل الشفرة الوراثية عرفها الإنسان.',
    },
    fullDescription: {
      en: 'CRISPR sequences originated as an adaptive immune system in bacteria against bacteriophage viruses. We examine guide RNA targeting mechanisms, Cas9 endonuclease double-strand cleavage, and the modern applications in eradicating genetic disorders.',
      ar: 'نشأت تتابعات كريسبر كنظام مناعي متكيف لدى البكتيريا لصد الفيروسات الغازية. نشرح هنا آلية توجيه الحمض النووي الريبوزي، وقطع السلاسل الوراثية بدقة النانو، وتطبيقات علاج الأمراض الوراثية.',
    },
    keyTakeaways: {
      en: [
        'Guide RNA matches a target 20-nucleotide sequence with single-base fidelity.',
        'Cas9 induces double-strand breaks that cells repair via non-homologous or homologous pathways.',
        'Clinical trials are already producing functional cures for sickle cell disease.',
      ],
      ar: [
        'يطابق الحمض النووي الموجه تسلسلاً دقيقاً من 20 نيوكليوتيدة بأعلى درجات الدقة.',
        'يحدث إنزيم كاس9 قطعاً مزدوجاً تُصلحه الخلية عبر مسارات الإصلاح الطبيعية.',
        'أثمرت التجارب السريرية بالفعل عن علاجات معتمدة لمرض فقر الدم المنجلي.',
      ],
    },
    category: 'Biology',
    duration: '19:12',
    publishDate: '2025-12-14',
    featured: false,
    illustrationType: 'dna',
  },
  {
    id: 'v-jwst-deep-field',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder ID
    title: {
      en: "Peering Into the Cosmic Dawn: First Galaxies Revealed by Webb",
      ar: 'النظر إلى فجر الكون: أولى المجرات كما كشفها تلسكوب جيمس ويب',
    },
    shortDescription: {
      en: 'Infrared spectroscopy piercing cosmic dust to observe ancient light shifted by 13.4 billion years.',
      ar: 'التحليل الطيفي بالأشعة تحت الحمراء يخترق الغبار الكوني ليرصد ضوءاً انزاح نحو الأحمر منذ 13.4 مليار سنة.',
    },
    fullDescription: {
      en: 'The James Webb Space Telescope operates at Lagrange Point 2, cooled to -233°C to detect ultra-faint infrared emissions from early stellar populations. We analyze redshifts exceeding z=13 and how unexpected galaxy mass density challenges early formation models.',
      ar: 'يعمل تلسكوب جيمس ويب عند نقطة لاغرانج الثانية، مبرداً إلى -233 مئوية لرصد أضعف انبعاثات الأشعة تحت الحمراء من النجوم الأولى. نحلل الانزياحات الحمراء التي تجاوزت z=13 وما تطرحه من تساؤلات حول نماذج تشكل المجرات المبكرة.',
    },
    keyTakeaways: {
      en: [
        'Cosmological redshift stretches visible and ultraviolet light from ancient stars into infrared.',
        'Beryllium-gold primary mirror measures 6.5 meters across for unprecedented angular resolution.',
        'JWST has identified candidate galaxies glowing just 300 million years after the Big Bang.',
      ],
      ar: [
        'يتسبب الانزياح الكوني نحو الأحمر في تمدد الضوء المرئي وفوق البنفسجي ليتحول إلى أشعة تحت حمراء.',
        'يبلغ قطر المرآة الرئيسية المطلية بالذهب 6.5 متراً لتقديم دقة زاوية غير مسبوقة.',
        'رصد ويب مجرات مضيئة وُجدت بعد 300 مليون سنة فقط من الانفجار العظيم.',
      ],
    },
    category: 'Space',
    duration: '21:05',
    publishDate: '2025-11-20',
    featured: false,
    illustrationType: 'telescope',
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'art-diamond-rain',
    slug: 'neptunes-diamond-rain-planetary-pressure',
    title: {
      en: "Neptune's Diamond Rain: High-Pressure Carbon Chemistry in the Outer Solar System",
      ar: 'مطر الألماس في نبتون: كيمياء الكربون تحت الضغوط الهائلة في أطراف النظام الشمسي',
    },
    excerpt: {
      en: 'How temperatures exceeding 5,000 Kelvin and pressures 1.5 million times Earth’s atmosphere cause hydrocarbons to condense into crystalline diamond precipitation.',
      ar: 'كيف تؤدي درجات حرارة تفوق 5000 كلفن وضغوط تفوق الغلاف الجوي للأرض بـ 1.5 مليون مرة إلى تكثف الهيدروكربونات وتحولها إلى أمطار من الألماس الصلب.',
    },
    category: 'Space',
    readTimeMinutes: 7,
    publishDate: '2026-03-10',
    author: {
      en: 'Science Horizon Research Desk',
      ar: 'فريق أبحاث سايِنس هورايزون',
    },
    isDraftNotice: true,
    illustrationType: 'neptune',
    featured: true,
    sections: [
      {
        id: 'sec-1',
        heading: {
          en: '1. The Ice Giant Paradox: Chemistry Under Crushing Gravity',
          ar: '1. مفارقة العمالقة الجليديين: الكيمياء تحت وطأة الجاذبية الساحقة',
        },
        content: {
          en: 'Neptune and Uranus are not terrestrial rocky worlds like Earth, nor pure gas giants like Jupiter and Saturn. They possess deep, dense fluid mantles consisting of water, ammonia, and methane (CH₄) compressed under thousands of kilometers of outer atmosphere. At depths exceeding 7,000 kilometers below the cloud tops, temperatures surge above 5,000 K and pressures surpass 150 Gigapascals (GPa).',
          ar: 'نبتون وأورانوس ليسا كوكبين صخريين كالأرض، ولا عملاقين غازيين نقيين كالمشتري وزحل. يمتلك الكوكبان وشاحاً مائعاً فائق الكثافة يتكون من الماء والأمونيا والميثان تحت آلاف الكيلومترات من الغلاف الجوي. وفي أعماق تتجاوز 7000 كم، ترتفع درجات الحرارة فوق 5000 كلفن وتتجاوز الضغوط 150 جيجا باسكال.',
        },
        evidenceType: 'established_theory',
        evidenceNote: {
          en: 'Planetary interior models constrained by Voyager 2 gravitational measurements and Keplerian satellite orbits.',
          ar: 'نماذج البنية الداخلية للكواكب المستندة إلى قياسات جاذبية مسبار فوياجر 2 ومدارات الأقمار الطبيعية.',
        },
      },
      {
        id: 'sec-2',
        heading: {
          en: '2. Experimental Verification: Recreating Planetary Mantles with X-ray Lasers',
          ar: '2. التحقق المعملي: محاكاة وشاح الكواكب بواسطة ليزر الأشعة السينية',
        },
        content: {
          en: 'For decades, diamond precipitation remained an intriguing mathematical hypothesis. In recent years, researchers at the SLAC National Accelerator Laboratory utilized the Linac Coherent Light Source (LCLS) X-ray laser to subject polystyrene (C₈H₈), a hydrocarbon proxy, to optical laser shock waves. Within femtoseconds, carbon atoms dissociated from hydrogen bonds and rearranged into diamond crystal lattices.',
          ar: 'ظل ترسيب الألماس لعقود فرضية رياضية مثيرة. وفي السنوات الأخيرة، استخدم باحثون في معمل SLAC الوطني للأشعة السينية نبضات ليزرية فائقة السرعة لصدم عينات هيدروكربونية. وخلال أجزاء من الفيمتوثانية، انفصلت ذرات الكربون عن روابط الهيدروجين وأعادت ترتيب نفسها في شبكة بلورية للألماس الصلب.',
        },
        evidenceType: 'empirical_fact',
        evidenceNote: {
          en: 'Direct empirical observation via in-situ X-ray diffraction at SLAC and Helmholtz-Zentrum Dresden-Rossendorf (HZDR).',
          ar: 'رصد تجريبي مباشر عبر حيود الأشعة السينية المعملي في معهد SLAC ومركز أبحاث HZDR الألماني.',
        },
      },
      {
        id: 'sec-3',
        heading: {
          en: '3. Theoretical Hypotheses: Deep Oceans of Liquid Diamond and Sinking Diamonds',
          ar: '3. الفرضيات النظرية: محيطات الألماس السائل وهبوط البلورات نحو المركز',
        },
        content: {
          en: 'While nanodiamond formation is empirically verified in the laboratory, the macro-scale behaviour within Neptune remains a subject of ongoing theoretical modeling. Hypotheses suggest that diamond crystals, being denser than the surrounding fluid mantle, slowly sink toward the rocky planetary core over millions of years. As they sink, frictional dissipation generates significant heat, potentially answering why Neptune radiates 2.6 times more thermal energy than it absorbs from the distant Sun.',
          ar: 'في حين تم التحقق معملياً من تشكل بلورات الألماس النانوية، فإن سلوكها على النطاق الكوكبي الواسع لا يزال خاضعاً للنمذجة النظرية. تفترض النماذج أن بلورات الألماس، لكونها أعلى كثافة من المائع المحيط، تهبط ببطء نحو النواة الصخرية. ويولد احتكاكها أثناء الهبوط طاقة حرارية قد تفسر لغز إشعاع نبتون حرارة تزيد 2.6 مرة عما يمتصه من الشمس.',
        },
        evidenceType: 'scientific_hypothesis',
        evidenceNote: {
          en: 'Plausible theoretical mechanism consistent with thermal thermodynamics; requires future in-situ atmospheric entry probe data to verify macro-scale dynamics.',
          ar: 'آلية نظرية متسقة مع قوانين الديناميكا الحرارية؛ تتطلب مسباراً فضائياً مستقبلياً لاختراق الغلاف الجوي للتحقق التام.',
        },
      },
    ],
    references: [
      {
        title: 'Formation of diamonds in laser-compressed polystyrene at conditions of the interior of icy giant planets',
        institutionOrJournal: 'Nature Astronomy',
        year: '2017',
        doiOrUrl: '10.1038/s41550-017-0219-9',
      },
      {
        title: 'Diamond formation kinetics in shocked hydrocarbon mixtures at planetary interior conditions',
        institutionOrJournal: 'Science Advances / SLAC National Accelerator Lab',
        year: '2020',
      },
    ],
  },
  {
    id: 'art-spherical-earth',
    slug: 'empirical-proofs-earths-spherical-geometry',
    title: {
      en: "Empirical Foundations: Five Irrefutable Observations Proving Earth's Spherical Geometry",
      ar: 'الأسس التجريبية: خمس ملاحظات قاطعة تثبت هندسة الأرض الكروية',
    },
    excerpt: {
      en: 'A rigorous scientific breakdown of observable geometrical phenomena: horizon dip, stellar elevation changes, lunar eclipses, circumpolar orbits, and geodesy.',
      ar: 'تحليل علمي دقيق لظواهر هندسية قابلة للملاحظة والقياس المباشر: انخفاض الأفق، زاوية النجوم مع خطوط العرض، خسوف القمر، والمدارات القطبية.',
    },
    category: 'Earth',
    readTimeMinutes: 9,
    publishDate: '2026-02-25',
    author: {
      en: 'Science Horizon Editorial Board',
      ar: 'هيئة تحرير سايِنس هورايزون',
    },
    isDraftNotice: true,
    illustrationType: 'earth',
    featured: true,
    sections: [
      {
        id: 'sec-earth-1',
        heading: {
          en: '1. The Lunar Eclipse Shadow: Constant Circular Projection',
          ar: '1. ظل الخسوف القمري: إسقاط دائري دائم في كافة الاتجاهات',
        },
        content: {
          en: 'During every lunar eclipse, Earth passes directly between the Sun and Moon, casting its shadow onto the lunar surface. Because eclipses occur at varying times of night, orbital positions, and seasons, the only geometrical solid that universally casts a circular shadow at every possible angle of illumination is a sphere. A flat disk would cast an ellipse or a slit depending on orientation.',
          ar: 'أثناء كل خسوف للقمر، تقع الأرض بين الشمس والقمر، ملقية بظلها على سطح القمر. ونظراً لأن الخسوف يحدث في أوقات مختلفة وفصول وزوايا مدارية متباينة، فإن الشكل الهندسي الوحيد الذي يلقي ظلاً دائرياً منتظماً من كل زوايا الإضاءة دون استثناء هو الكرة. أي قرص مسطح كان سيلقي ظلاً بيضاوياً أو شريطاً رفيعاً في زوايا معينة.',
        },
        evidenceType: 'empirical_fact',
        evidenceNote: {
          en: 'Empirically documented across thousands of recorded lunar eclipses spanning over 2,500 years of recorded astronomy.',
          ar: 'موثق تجريبياً عبر آلاف حالات الخسوف المسجلة على مدى أكثر من 2500 عام من تاريخ الرصد الفلكي.',
        },
      },
      {
        id: 'sec-earth-2',
        heading: {
          en: '2. Polaris and Latitude: Direct Geometrical Correlation',
          ar: '2. نجم الشمال وخطوط العرض: علاقة هندسية مباشرة لا تقبل التأويل',
        },
        content: {
          en: 'As an observer travels north, Polaris (the North Star) climbs steadily in the night sky. In London (~51.5° N), Polaris sits 51.5° above the horizon; in Oslo (~60° N), it sits at 60°; at the North Pole (90° N), it is at zenith (90°). At the equator (0°), it sits directly on the horizon, and south of the equator, it is entirely invisible beneath the curvature. This precise 1:1 angular correspondence between geographical displacement and celestial elevation is mathematically impossible on any planar surface.',
          ar: 'عندما يسافر الراصد شمالاً، يرتفع نجم الشمال بزاوية مطابقة تماماً لخط عرضه الجغرافي. ففي لندن (51.5° شمالاً) يرتفع النجم 51.5 درجة فوق الأفق، وفي أوسلو (60° شمالاً) يرتفع 60 درجة، وعند القطب الشمالي يقع عمودياً فوق الرأس (90 درجة). وعند خط الاستواء يلامس الأفق، ويختفي تماماً جنوب خط الاستواء. هذا التطابق الزاوي 1:1 يستحيل رياضياً على أي سطح مستوٍ.',
        },
        evidenceType: 'empirical_fact',
        evidenceNote: {
          en: 'Standard navigational measurement used by maritime vessels worldwide since antiquity.',
          ar: 'قياس ملاحي قياسي تعتمد عليه السفن البحرية في شتى بقاع الأرض منذ قرون.',
        },
      },
      {
        id: 'sec-earth-3',
        heading: {
          en: '3. Horizon Dip and Curvature Calculation',
          ar: '3. انخفاض خط الأفق وحسابات تقوس السطح',
        },
        content: {
          en: 'On a spherical Earth with an approximate mean radius of 6,371 km, an observer elevated above sea level looks down toward the horizon at an angle known as the dip of the horizon. By using theodolites or calibrated digital cameras, surveying engineers verify that dip angle θ equals arccos(R / (R + h)). Furthermore, ships sailing away disappear hull-first, followed by masts, in complete conformity with spherical trigonometry.',
          ar: 'على أرض كروية بمتوسط نصف قطر يبلغ 6,371 كم، ينظر الراصد المرتفع عن سطح البحر إلى خط الأفق بزاوية انخفاض قابلة للقياس الدقيق (Dip of horizon). وباستخدام أجهزة المزواة (Theodolites)، يثبت مهندسو المساحة أن زاوية انخفاض الأفق تتبع بدقة معادلة arccos(R / (R + h)). كما تختفي السفن المبتعدة بهيكلها أولاً ثم صواريها وفق حسابات علم المثلثات الكروية.',
        },
        evidenceType: 'empirical_fact',
        evidenceNote: {
          en: 'Standard geodetic survey practice and engineering baseline for long-span bridge construction (e.g. Verrazzano-Narrows towers diverged by 41mm at tops).',
          ar: 'معيار جيوديسي أساسي في بناء الجسور العملاقة (مثل برجَي جسر فيرازانو اللذين يتباعدان عند القمة بمقدار 41 ملم بسبب انحناء الأرض).',
        },
      },
    ],
    references: [
      {
        title: 'Geodetic Surveying and the Physical Shape of the Geoid',
        institutionOrJournal: 'National Geodetic Survey (NOAA)',
        year: '2023',
      },
      {
        title: 'Principles of Astronomy and Celestial Navigation',
        institutionOrJournal: 'Royal Astronomical Society',
        year: '2021',
      },
    ],
  },
  {
    id: 'art-cosmic-mysteries',
    slug: 'surprising-facts-about-the-extreme-universe',
    title: {
      en: "Cosmic Mysteries: Surprising Facts About the Universe",
      ar: 'أسرار كونية مذهلة: حقائق مدهشة حول فيزياء الكون المتطرفة',
    },
    excerpt: {
      en: 'From the staggering density of degenerate neutron matter to the cold silence of the cosmic microwave background and dark energy acceleration.',
      ar: 'من الكثافة الفائقة للمادة النيوترونية المتنكسة إلى هدوء إشعاع الخلفية الكونية الميكروي وتسارع الطاقة المظلمة.',
    },
    category: 'Space',
    readTimeMinutes: 6,
    publishDate: '2026-01-18',
    author: {
      en: 'Science Horizon Research Desk',
      ar: 'فريق أبحاث سايِنس هورايزون',
    },
    isDraftNotice: true,
    illustrationType: 'blackhole',
    featured: false,
    sections: [
      {
        id: 'sec-cosmo-1',
        heading: {
          en: '1. Nuclear Densities: When Atoms Collapse into Pure Neutrons',
          ar: '1. الكثافة النووية: عندما تنهار الذرات إلى نيوترونات خالصة',
        },
        content: {
          en: 'Normal matter is overwhelmingly empty space. In an ordinary atom, the nucleus occupies less than 1/100,000th of the atom’s diameter, surrounded by electron cloud probability waves. In a neutron star, gravitational collapse overpowers electron degeneracy pressure, squeezing an entire solar mass into a sphere barely 20 kilometers wide. At this density, the atomic structure ceases to exist.',
          ar: 'المادة العادية في جوهرها فراغ شبه تام. فالنواة في الذرة تشغل أقل من جزء من مئة ألف من قطر الذرة، وتحيط بها سحب الإلكترونات الاحتمالية. أما في النجم النيوتروني، فإن الانهيار الجذبي يتغلب على ضغط تنكس الإلكترونات، ضاغطاً كتلة تعادل شمسنا بالكامل داخل كرة بقطر 20 كيلومتراً فقط، ليتلاشى التركيب الذري التقليدي.',
        },
        evidenceType: 'established_theory',
        evidenceNote: {
          en: 'Observed through pulsar radio timing, gravitational wave detections (GW170817), and NICER X-ray space telescope data.',
          ar: 'مرصود عبر نبضات النجوم الراديوية، وموجات الجاذبية (حدث GW170817)، وتلسكوب NICER الفضائي.',
        },
      },
      {
        id: 'sec-cosmo-2',
        heading: {
          en: '2. The Cosmic Microwave Background: Baby Picture of the Universe',
          ar: '2. إشعاع الخلفية الكونية الميكروي: صورة فوتوغرافية لطفولة الكون',
        },
        content: {
          en: 'Bathed across all of space is an ancient glow with an almost uniform temperature of 2.725 Kelvin (-270.4°C). This is the Cosmic Microwave Background (CMB), relic photons released approximately 380,000 years after the Big Bang when the universe cooled enough for protons and electrons to combine into neutral hydrogen (recombination), allowing light to travel freely for the first time.',
          ar: 'يغمر الفضاء إشعاع قديم متجانس بدرجة حرارة تقارب 2.725 كلفن (-270.4 مئوية). هذا هو إشعاع الخلفية الكونية الميكروي (CMB)، وهي فوتونات حرة انطلقت بعد حوالي 380 ألف سنة من الانفجار العظيم، عندما برد الكون ليتيح للبروتونات والإلكترونات الاتحاد مشكلة ذرات هيدروجين متعادلة، فانطلق الضوء لأول مرة.',
        },
        evidenceType: 'empirical_fact',
        evidenceNote: {
          en: 'Mapped with ultra-high precision by ESA’s Planck satellite, NASA’s WMAP, and COBE satellites.',
          ar: 'تم رسم خرائطه بدقة متناهية بواسطة تلسكوب بلانك التابع لوكالة الفضاء الأوروبية وأقمار WMAP و COBE.',
        },
      },
    ],
    references: [
      {
        title: 'Planck 2018 results: Cosmological parameters',
        institutionOrJournal: 'Astronomy & Astrophysics',
        year: '2020',
      },
    ],
  },
  {
    id: 'art-quantum-duality',
    slug: 'wave-particle-duality-and-quantum-observation',
    title: {
      en: "Wave-Particle Duality: What 'Observation' Truly Means in Quantum Mechanics",
      ar: 'ازدواجية الموجة والجسيم: المعنى الحقيقي لـ "الرصد" في ميكانيكا الكم',
    },
    excerpt: {
      en: 'Separating mystical misconceptions from empirical physics: how environmental entanglement and decoherence explain the collapse of the wavefunction.',
      ar: 'فصل الأوهام الفلسفية عن الفيزياء التجريبية: كيف يشرح التشابك البيئي وفك الترابط انهيار الدالة الموجية دون الحاجة لوعي بشري.',
    },
    category: 'Physics',
    readTimeMinutes: 8,
    publishDate: '2026-01-08',
    author: {
      en: 'Science Horizon Research Desk',
      ar: 'فريق أبحاث سايِنس هورايزون',
    },
    isDraftNotice: true,
    illustrationType: 'quantum',
    featured: false,
    sections: [
      {
        id: 'sec-quant-1',
        heading: {
          en: '1. The Superposition State and Wave Interference',
          ar: '1. حالة التراكب الكمي والتداخل الموجي',
        },
        content: {
          en: 'When a stream of electrons passes through two narrow slits onto a detection screen, they form an interference pattern of bright and dark fringes. Astonishingly, even when fired one electron at a time, the pattern still emerges. This proves that the probability amplitude of each single particle interferes with itself as described by Schrödinger’s wave equation.',
          ar: 'عندما يمر تيار من الإلكترونات عبر شقين ضيقين نحو شاشة كاشفة، يتكون نمط تداخل من حزم مضيئة ومظلمة. المثير للدهشة أنه حتى لو أُطلق إلكترون واحد في كل مرة، يظل نمط التداخل يتشكل تدريجياً. يثبت هذا أن سعة الاحتمال الكمية للجسيم تتداخل مع نفسها وفق معادلة شرودنغر الموجية.',
        },
        evidenceType: 'empirical_fact',
        evidenceNote: {
          en: 'Replicated experimentally with photons, electrons, and massive molecules like Carbon-60 (Buckyballs).',
          ar: 'تم تكرار التجربة معملياً بالفوتونات، والإلكترونات، وجزيئات ضخمة مثل كرات الفوليرين (C-60).',
        },
      },
      {
        id: 'sec-quant-2',
        heading: {
          en: '2. The Myth of Consciousness vs. The Physics of Quantum Decoherence',
          ar: '2. خرافة الوعي مقابل فيزياء فك الترابط الكمي',
        },
        content: {
          en: 'Popular culture frequently misinterprets the "observer effect" as implying that a conscious mind is needed to create reality. In quantum mechanics, an "observer" is any macroscopic measurement device—such as a photodetector or magnetic coil—that physically interacts with the quantum system. This interaction causes rapid quantum decoherence, entangling the particle’s phase with the billions of degrees of freedom in the environment within picoseconds.',
          ar: 'تخلط الثقافة الشعبية أحياناً بين "تأثير المراقب" والادعاء بأن الوعي البشري يصنع الواقع. في الفيزياء، "المراقب" هو أي جهاز قياس فيزيائي مادي (مثل كاشف فوتونات أو مستشعر كهرومغناطيسي) يتفاعل بالضرورة مع الجسيم. هذا التفاعل المادي يسبب فك الترابط الكمي (Decoherence) ويشتت طور الموجة مع درجات الحرية في البيئة خلال بيكوثوانٍ.',
        },
        evidenceType: 'established_theory',
        evidenceNote: {
          en: 'Formulated by H. Dieter Zeh and Wojciech Zurek; validated in cavity quantum electrodynamics experiments (Nobel Prize in Physics 2012).',
          ar: 'صاغها الفيزيائيان ديتر تسي وزوريك؛ وثبتت في تجارب الكهروديناميكا الكمية داخل التجاويف (نوبل للفيزياء 2012).',
        },
      },
    ],
    references: [
      {
        title: 'Decoherence, einselection, and the quantum origins of the classical',
        institutionOrJournal: 'Reviews of Modern Physics',
        year: '2003',
      },
    ],
  },
];

export const QUIZ_QUESTIONS: QuizQuestionItem[] = [
  {
    id: 1,
    category: 'Space',
    difficulty: 'Elementary',
    question: {
      en: 'Which planet in our solar system has the highest measured surface temperature?',
      ar: 'أي كوكب في نظامنا الشمسي يمتلك أعلى درجة حرارة سطحية مسجلة؟',
    },
    options: {
      en: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
      ar: ['عطارد', 'الزهرة', 'المريخ', 'المشتري'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Although Mercury is closest to the Sun, Venus has a dense carbon dioxide atmosphere with sulfuric acid clouds causing an intense runaway greenhouse effect, keeping its surface at roughly 465°C (870°F).',
      ar: 'على الرغم من أن عطارد هو الأقرب للشمس، إلا أن كوكب الزهرة يمتلك غلافاً جوياً كثيفاً من ثاني أكسيد الكربون وسحب حمض الكبريتيك تسبب احتباساً حرارياً هائلاً يجعل حرارته السطحية نحو 465 مئوية.',
    },
    scientificContext: {
      en: 'Thermodynamics of runaway atmospheric greenhouse feedback.',
      ar: 'ديناميكا الاحتباس الحراري الكوكبي المتفاقم.',
    },
  },
  {
    id: 2,
    category: 'Space',
    difficulty: 'Intermediate',
    question: {
      en: 'What empirical evidence directly confirms that the universe’s expansion is accelerating rather than slowing down?',
      ar: 'ما هو الدليل التجريبي المباشر الذي أثبت تسارع تمدد الكون بدلاً من تباطؤه؟',
    },
    options: {
      en: [
        'Hubble’s original red-shift observations of Andromeda',
        'Observations of distant Type Ia supernovae as standard candles',
        'Direct measurement of black hole event horizon diameters',
        'Temperature fluctuations in Earth’s ionosphere',
      ],
      ar: [
        'ملاحظات هابل الأصلية لانزياح مجرة المرأة المسلسلة',
        'رصد مستعرات عظمى بعيدة من النوع (Ia) كشمعات عيارية',
        'القياس المباشر لقطر أفق حدث الثقوب السوداء',
        'تقلبات درجة الحرارة في الغلاف الأيوني للأرض',
      ],
    },
    correctIndex: 1,
    explanation: {
      en: 'In 1998, two independent teams observed Type Ia supernovae (which have predictable intrinsic luminosities) were dimmer than expected for a decelerating universe, proving dark energy-driven cosmic acceleration (2011 Nobel Prize in Physics).',
      ar: 'في عام 1998، رصد فريقان مستقلان مستعرات عظمى من النوع Ia (ذات السطوع الذاتي المعروف) ووجداها أخفت مما كان متوقعاً في كون يتباطأ، مما أثبت تسارع التوسع بفعل الطاقة المظلمة (نوبل للفيزياء 2011).',
    },
    scientificContext: {
      en: 'Cosmology, standard candles, and the Lambda-CDM model.',
      ar: 'علم الكونيات، الشمعات العيارية، ونموذج لامبدا-CDM.',
    },
  },
  {
    id: 3,
    category: 'Earth',
    difficulty: 'Elementary',
    question: {
      en: 'Why do observers at the North Pole see Polaris directly overhead, while observers at the Equator see it on the horizon?',
      ar: 'لماذا يرى الراصد عند القطب الشمالي نجم الشمال فوق رأسه مباشرة، بينما يراه الراصد عند خط الاستواء ملامساً للأفق؟',
    },
    options: {
      en: [
        'Because Polaris moves rapidly in orbit every 24 hours',
        'Because Earth’s surface is curved into a sphere',
        'Because atmospheric refraction bends starlight by 90 degrees',
        'Because Earth is closer to Polaris during winter months',
      ],
      ar: [
        'لأن نجم الشمال يتحرك بسرعة في مدار كل 24 ساعة',
        'لأن سطح كوكب الأرض منحنٍ على شكل كرة',
        'لأن الانكسار الجوي يثني ضوء النجوم بمقدار 90 درجة',
        'لأن الأرض تكون أقرب لنجم الشمال خلال أشهر الشتاء',
      ],
    },
    correctIndex: 1,
    explanation: {
      en: 'Polaris sits roughly aligned with Earth’s rotational axis. As you change your latitude on a curved sphere, your local tangent plane (the horizon) rotates relative to the rotational axis, changing Polaris’s apparent altitude in exact 1:1 proportion to your latitude.',
      ar: 'يقع نجم الشمال في محاذاة محور دوران الأرض تقريباً. ومع تغير خط عرضك على سطح كرة منحنٍ، يدور مستواك المماسي المحلي (الأفق) بالنسبة لمحور الدوران، مما يغير زاوية ارتفاع النجم بتطابق هندسي 1:1 مع خط عرضك.',
    },
    scientificContext: {
      en: 'Spherical geometry and celestial navigation.',
      ar: 'الهندسة الكروية والملاحة الفلكية.',
    },
  },
  {
    id: 4,
    category: 'Physics',
    difficulty: 'Intermediate',
    question: {
      en: 'What fundamental physical property guarantees that two identical fermions cannot occupy the same quantum state simultaneously?',
      ar: 'ما المبدأ الفيزيائي الأساسي الذي يمنع فرميونين متطابقين من شغل نفس الحالة الكمية في آن واحد؟',
    },
    options: {
      en: [
        'Pauli Exclusion Principle',
        'Heisenberg Uncertainty Principle',
        'Coulomb Electrostatic Law',
        'Newton’s Third Law of Motion',
      ],
      ar: [
        'مبدأ باولي للاستبعاد',
        'مبدأ هايزنبرغ للشك',
        'قانون كولوم الكهروستاتيكي',
        'قانون نيوتن الثالث للحركة',
      ],
    },
    correctIndex: 0,
    explanation: {
      en: 'The Pauli Exclusion Principle states that fermions (particles with half-integer spin like electrons and quarks) have antisymmetric wavefunctions, preventing multiple fermions from sharing identical quantum numbers. This principle prevents matter from collapsing under gravity.',
      ar: 'ينص مبدأ باولي للاستبعاد على أن الفرميونات (جسيمات بنصف عدد كمي مغزلي مثل الإلكترونات والكواركات) تمتلك دوال موجية متناظرة عكسياً، مما يمنعها من مشاركة نفس الأعداد الكمية، وهو المبدأ الذي يمنع المادة العادية من الانهيار.',
    },
    scientificContext: {
      en: 'Quantum mechanics and spin-statistics theorem.',
      ar: 'ميكانيكا الكم ومبرهنة إحصاء اللف المغزلي.',
    },
  },
  {
    id: 5,
    category: 'Physics',
    difficulty: 'Advanced',
    question: {
      en: 'Why is the speed of light in a vacuum (c) an invariant constant for all inertial reference frames?',
      ar: 'لماذا تعد سرعة الضوء في الفراغ (c) ثابتاً مطلقاً لجميع الأطر المرجعية القصورية؟',
    },
    options: {
      en: [
        'Because space and time dynamically adjust (dilate and contract) to preserve the invariant spacetime interval',
        'Because light is composed of infinitely massive particles that cannot decelerate',
        'Because the Earth’s magnetic field drags photons to a constant velocity',
        'Because quantum vacuums lack any electromagnetic properties',
      ],
      ar: [
        'لأن المكان والزمان يتعدلان ديناميكياً (تمدد وتقلص) للحفاظ على الفاصل الزمكاني الثابت',
        'لأن الضوء يتكون من جسيمات ذات كتلة لا نهائية تعجز عن التباطؤ',
        'لأن المجال المغناطيسي للأرض يسحب الفوتونات لسرعة ثابتة',
        'لأن الفراغ الكمي يفتقر لأي خصائص كهرومغناطيسية',
      ],
    },
    correctIndex: 0,
    explanation: {
      en: 'In Einstein’s Special Relativity, the invariance of c requires that time dilates and space contracts relative to observers moving at high velocities, keeping the speed of light constant regardless of the emitter’s motion.',
      ar: 'في النسبية الخاصة لأينشتاين، يتطلب ثبات سرعة الضوء (c) أن يتمدد الزمن ويتقلص الطول للمراقبين المتحركين بسرعات نسبية، للحفاظ على ثبات سرعة الضوء بغض النظر عن سرعة مصدر الضوء.',
    },
    scientificContext: {
      en: 'Special Relativity and Lorentz transformations.',
      ar: 'النسبية الخاصة وتحويلات لورنتز.',
    },
  },
  {
    id: 6,
    category: 'Biology',
    difficulty: 'Elementary',
    question: {
      en: 'Which cellular organelle is responsible for generating adenosine triphosphate (ATP) via oxidative phosphorylation?',
      ar: 'أي عُضَيّة خلوية مسؤولة عن توليد ثلاثي فوسفات الأدينوسين (ATP) عبر الفسفرة التأكسدية؟',
    },
    options: {
      en: ['Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus', 'Lysosome'],
      ar: ['الميتوكوندريا', 'الشبكة الإندوبلازمية', 'جهاز غولجي', 'الجسيم الحال (الليستوسوم)'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Mitochondria are often called the powerhouses of the cell. Across their folded inner cristae membranes, electron transport chains pump protons to drive ATP synthase, producing the chemical fuel used by all eukaryotic life.',
      ar: 'تُعرف الميتوكوندريا بمحطات طاقة الخلية؛ حيث تضخ سلاسل نقل الإلكترون عبر أعراف غشائها الداخلي البروتونات لتشغيل إنزيم بناء ATP، منتجة الوقود الكيميائي للخلية حقيقية النواة.',
    },
    scientificContext: {
      en: 'Cellular bioenergetics and chemiosmosis.',
      ar: 'الطاقة الحيوية الخلوية والخاصية الأسموزية الكيميائية.',
    },
  },
  {
    id: 7,
    category: 'Biology',
    difficulty: 'Intermediate',
    question: {
      en: 'What base pairs form the complementary rungs of the double-stranded DNA helix?',
      ar: 'ما هي القواعد النيتروجينية المزدوجة التي تشكل درجات سلم الحمض النووي (DNA) الحلزوني؟',
    },
    options: {
      en: [
        'Adenine pairs with Thymine (A-T), and Cytosine pairs with Guanine (C-G)',
        'Adenine pairs with Guanine (A-G), and Thymine pairs with Cytosine (T-C)',
        'Uracil pairs with Thymine (U-T), and Cytosine pairs with Adenine (C-A)',
        'Cytosine pairs with Uracil (C-U), and Guanine pairs with Adenine (G-A)',
      ],
      ar: [
        'الأدينين يرتبط بالثايمين (A-T)، والسيتوسين يرتبط بالجوانين (C-G)',
        'الأدينين يرتبط بالجوانين (A-G)، والثايمين يرتبط بالسيتوسين (T-C)',
        'اليوراسيل يرتبط بالثايمين (U-T)، والسيتوسين يرتبط بالأدينين (C-A)',
        'السيتوسين يرتبط باليوراسيل (C-U)، والجوانين يرتبط بالأدينين (G-A)',
      ],
    },
    correctIndex: 0,
    explanation: {
      en: 'Watson-Crick base pairing requires Adenine to form two hydrogen bonds with Thymine, and Cytosine to form three hydrogen bonds with Guanine. Uracil replaces Thymine in RNA.',
      ar: 'يقضي تزاوج واطسون-كريك بأن يرتبط الأدينين برابطتين هيدروجينيتين مع الثايمين، بينما يرتبط السيتوسين بثلاث روابط مع الجوانين. ويحل اليوراسيل محل الثايمين في الحمض النووي الريبوزي (RNA).',
    },
    scientificContext: {
      en: 'Molecular genetics and nucleic acid chemistry.',
      ar: 'الوراثة الجزيئية وكيمياء الأحماض النووية.',
    },
  },
  {
    id: 8,
    category: 'Earth',
    difficulty: 'Intermediate',
    question: {
      en: 'What causes the apparent deflection of large-scale wind patterns and cyclones (the Coriolis effect)?',
      ar: 'ما الذي يسبب الانحراف الظاهري لمسار الرياح الكبرى والأعاصير (تأثير كوريوليس)؟',
    },
    options: {
      en: [
        'Earth’s eastward rotation beneath moving air masses',
        'Gravitational pull from the Moon during spring tides',
        'Geothermal heat plumes rising from ocean ridges',
        'Solar wind ionizing upper stratospheric ozone',
      ],
      ar: [
        'دوران الأرض نحو الشرق تحت الكتل الهوائية المتحركة',
        'جاذبية القمر أثناء المد والجزر المحيطي',
        'الحرارة الجوفية الصاعدة من الشقوق المحيطية',
        'الرياح الشمسية التي تؤين الأوزون في طبقة الستراتوسفير',
      ],
    },
    correctIndex: 0,
    explanation: {
      en: 'Because Earth is a rotating oblate spheroid, linear surface speed is fastest at the equator (~1,670 km/h) and zero at the poles. Air moving toward the poles retains its higher eastward rotational momentum, deflecting right in the Northern Hemisphere and left in the Southern Hemisphere.',
      ar: 'لأن الأرض كرة مفلطحة تدور حول محورها، تكون السرعة الخطية لسطحها في أوجها عند خط الاستواء (نحو 1670 كم/س) وتتلاشى عند القطبين. فالكتل الهوائية المتجهة للقطبين تحتفظ بزخمها الشرقي، فتنحرف يميناً في نصف الكرة الشمالي ويساراً في نصفها الجنوبي.',
    },
    scientificContext: {
      en: 'Atmospheric fluid dynamics and non-inertial reference frames.',
      ar: 'ديناميكا الموائع الجوية والأطر المرجعية غير القصورية.',
    },
  },
  {
    id: 9,
    category: 'Technology',
    difficulty: 'Intermediate',
    question: {
      en: 'In a tokamak nuclear fusion reactor, what mechanism confines the 100-million-degree deuterium-tritium plasma?',
      ar: 'في مفاعل الاندماج النووي (توكاماك)، ما الآلية التي تحصر البلازما الملتهبة بحرارة 100 مليون درجة مئوية؟',
    },
    options: {
      en: [
        'Powerful helical magnetic fields produced by superconducting coils',
        'Thick walls of solid crystalline diamond tiles',
        'Extremely dense liquid nitrogen insulation jackets',
        'Acoustic resonance sound waves at ultrasonic frequencies',
      ],
      ar: [
        'مجالات مغناطيسية لولبية قوية تولدها ملفات فائقة التوصيل',
        'جدران سميكة مبطنة ببلورات الألماس الصلب',
        'طبقات عازلة شديدة الكثافة من النيتروجين السائل',
        'موجات صوتية رنانة بترددات فوق صوتية',
      ],
    },
    correctIndex: 0,
    explanation: {
      en: 'No known physical material can contact 100M°C plasma without vaporizing. Tokamaks use magnetic confinement—superconducting magnetic coils generating toroidal and poloidal fields that keep charged ions in a closed doughnut-shaped vacuum path.',
      ar: 'لا توجد مادة صلبة في الكون تحتمل ملامسة بلازما بدرجة 100 مليون مئوية دون أن تتبخر فوراً. لذلك تعتمد التوكاماك على الحصر المغناطيسي؛ حيث تشكل ملفات مغناطيسية فائقة التوصيل حقلاً لولبياً يحبس الأيونات المشحونة داخل مسار حلقي مفرغ.',
    },
    scientificContext: {
      en: 'Plasma physics and thermonuclear energy research.',
      ar: 'فيزياء البلازما وأبحاث الطاقة النووية الحرارية.',
    },
  },
  {
    id: 10,
    category: 'StrangeFacts',
    difficulty: 'Elementary',
    question: {
      en: 'Why do astronauts aboard the International Space Station experience weightlessness?',
      ar: 'لماذا يشعر رواد الفضاء على متن محطة الفضاء الدولية بانعدام الوزن؟',
    },
    options: {
      en: [
        'Because they are in continuous free-fall around Earth with horizontal orbital velocity',
        'Because gravity is 0% at 400 kilometers altitude',
        'Because space suits generate negative antigravity fields',
        'Because the station travels faster than the speed of sound',
      ],
      ar: [
        'لأنهم في حالة سقوط حر مستمر حول الأرض بسرعة أفقية مدارية تمنع اصطدامهم بها',
        'لأن الجاذبية الأرضية تصبح منعدمة تماماً (0%) على ارتفاع 400 كم',
        'لأن بدلات الفضاء تولد حقولاً مضادة للجاذبية',
        'لأن المحطة تسير بسرعة تتجاوز سرعة الصوت',
      ],
    },
    correctIndex: 0,
    explanation: {
      en: 'At the ISS orbit (~400 km), Earth’s gravity is still roughly 90% as strong as at the surface! Astronauts float because the station travels horizontally at 27,600 km/h: as gravity pulls it down, the curvature of the Earth falls away beneath it at the exact same rate (free-fall orbit).',
      ar: 'على ارتفاع المحطة الفضائية (400 كم)، تظل جاذبية الأرض تعادل نحو 90% من قوتها على السطح! والسبب في طفو الرواد هو سرعتهم الأفقية الهائلة (27,600 كم/س)؛ فبينما تسحبهم الجاذبية للأسفل، ينحني سطح الأرض مبتعداً بنفس المعدل تماماً (مدار السقوط الحر).',
    },
    scientificContext: {
      en: 'Orbital mechanics and Newton’s cannonball thought experiment.',
      ar: 'الميكانيكا المدارية وتجربة مدفع نيوتن الفكرية.',
    },
  },
];

export const UI_STRINGS = {
  en: {
    siteName: 'Science Horizon',
    heroKicker: 'Official YouTube Companion',
    heroTitle: 'Discover the Science Behind Everything',
    heroSub: 'Exploring the cosmos, quantum mechanics, and empirical truths. Watch full-length episodes, read peer-referenced articles, and test your scientific understanding.',
    watchOnYouTube: 'Watch on YouTube',
    exploreLibrary: 'Explore Video Library',
    exploreArticles: 'Read Articles',
    takeQuiz: 'Take the Science Quiz',
    quickFacts: 'Daily Science Fact',
    newFact: 'New Fact',
    source: 'Verified Source',
    categories: 'Research Categories',
    featuredVideo: 'Featured YouTube Episode',
    latestVideos: 'Latest Video Episodes',
    featuredArticles: 'Featured Science Articles',
    allVideos: 'All Episodes',
    allArticles: 'All Articles',
    interactiveQuiz: 'Interactive Science Quizzes',
    searchPlaceholder: 'Search titles, concepts, topics...',
    allCategories: 'All Categories',
    readTime: 'min read',
    publishedOn: 'Published',
    author: 'Author',
    readFullArticle: 'Read Full Article',
    tableOfContents: 'Table of Contents',
    relatedArticles: 'Related Articles',
    relatedVideos: 'Related Videos',
    references: 'Scientific References & Sources',
    evidenceBadge: {
      empirical_fact: 'Empirical Observation',
      scientific_hypothesis: 'Theoretical Hypothesis',
      established_theory: 'Established Consensus',
    },
    draftNoticeTitle: 'Draft Educational Content',
    draftNoticeBody: 'This article is prepared as educational companion material for our YouTube channel. All primary sources are cited below.',
    newsletterTitle: 'Stay Curious With Us',
    newsletterSub: 'Receive our newest video breakdowns, research summaries, and interactive quizzes directly in your inbox.',
    newsletterInputPlaceholder: 'Enter your email address',
    newsletterButton: 'Subscribe to Digest',
    newsletterNotice: 'Local privacy-first subscription simulation. No third-party trackers.',
    newsletterSuccess: 'Thank you for subscribing! You are now set up to receive science digests.',
    mobileAdminTitle: 'Mobile Content Management',
    mobileAdminDesc: 'How to update videos, articles, and quizzes directly from your Android phone in 60 seconds.',
    mobileAdminButton: 'Phone Admin Guide',
    restartQuiz: 'Restart Quiz',
    nextQuestion: 'Next Question',
    seeResults: 'See Final Results',
    scoreResult: 'Quiz Completed',
    scoreSummary: 'You answered',
    correctAnswers: 'correctly',
    scientificExplanation: 'Scientific Explanation & Evidence',
    question: 'Question',
    difficulty: 'Difficulty',
    subscribeChannel: 'Subscribe on YouTube',
    viewOnYouTube: 'Open in YouTube App',
    watchNow: 'Watch Episode',
    videoEmbedPlaceholderNote: 'Channel Owner Note: Replace placeholder YouTube ID in src/config/content.ts with your actual video ID.',
    backToHome: 'Back to Home',
    backToVideos: 'Back to Video Library',
    backToArticles: 'Back to Articles',
    filterBy: 'Filter by Category',
    noResultsFound: 'No scientific content found matching your query.',
    clearSearch: 'Clear Filters',
    nav: {
      home: 'Home',
      videos: 'Videos',
      articles: 'Articles',
      quiz: 'Quizzes',
      about: 'About',
    },
    footerMission: 'Science Horizon is dedicated to empirical clarity, astrophysics, and demystifying nature through rigorous scientific evidence and cinematic storytelling.',
    footerCopyright: '© 2026 Science Horizon Media. Built for science enthusiasts worldwide.',
    sitemapLink: 'Sitemap & Architecture',
  },
  ar: {
    siteName: 'سايِنس هورايزون',
    heroKicker: 'المنصة الرسمية المرافقة لقناة يوتيوب',
    heroTitle: 'اكتشف العلم وراء كل شيء',
    heroSub: 'رحلة لاستكشاف أسرار الكون، وفيزياء الكم، والبراهين العلمية القاطعة. شاهد حلقاتنا الوثائقية، واقرأ مقالاتنا المحكمة، واختبر معلوماتك باختبارات تفاعلية.',
    watchOnYouTube: 'شاهد على يوتيوب',
    exploreLibrary: 'مكتبة الفيديوهات',
    exploreArticles: 'تصفح المقالات',
    takeQuiz: 'ابدأ الاختبار العلمي',
    quickFacts: 'حقيقة علمية موثقة',
    newFact: 'حقيقة أخرى',
    source: 'المصدر الموثق',
    categories: 'التصنيفات العلمية',
    featuredVideo: 'حلقة مميزة من القناة',
    latestVideos: 'أحدث حلقات الفيديو',
    featuredArticles: 'مقالات علمية مختارة',
    allVideos: 'جميع الحلقات',
    allArticles: 'جميع المقالات',
    interactiveQuiz: 'اختبارات علمية تفاعلية',
    searchPlaceholder: 'ابحث في العناوين، المفاهيم، المواضيع...',
    allCategories: 'جميع التصنيفات',
    readTime: 'دقائق قراءة',
    publishedOn: 'تاريخ النشر',
    author: 'الكاتب',
    readFullArticle: 'قراءة المقال كاملاً',
    tableOfContents: 'فهرس المحتويات',
    relatedArticles: 'مقالات ذات صلة',
    relatedVideos: 'فيديوهات ذات صلة',
    references: 'المراجع العلمية والمصادر',
    evidenceBadge: {
      empirical_fact: 'ملاحظة وتجربة مثبتة',
      scientific_hypothesis: 'فرضية ونموذج نظري',
      established_theory: 'إجماع علمي معتمد',
    },
    draftNoticeTitle: 'محتوى تعليمي قيد المراجعة',
    draftNoticeBody: 'أُعدت هذه المادة كمحتوى تعليمي مرافق لحلقات قناتنا على يوتيوب، مع إدراج المراجع الأولية أدناه.',
    newsletterTitle: 'ابقَ على اتصال مع شغف المعرفة',
    newsletterSub: 'احصل على ملخصات الحلقات الجديدة، والأوراق العلمية، والاختبارات التفاعلية مباشرة.',
    newsletterInputPlaceholder: 'أدخل بريدك الإلكتروني',
    newsletterButton: 'اشتراك في النشرة',
    newsletterNotice: 'نظام اشتراك محلي يحترم الخصوصية دون أدوات تتبع خارجية.',
    newsletterSuccess: 'شكراً لاشتراكك! تم تسجيلك بنجاح في النشرة العلمية الدورية.',
    mobileAdminTitle: 'إدارة الموقع من الهاتف المحمول',
    mobileAdminDesc: 'كيفية إضافة وتعديل الفيديوهات والمقالات والاختبارات من هاتفك الأندرويد في دقيقة واحدة.',
    mobileAdminButton: 'دليل الإدارة من الهاتف',
    restartQuiz: 'إعادة الاختبار',
    nextQuestion: 'السؤال التالي',
    seeResults: 'عرض النتيجة النهائية',
    scoreResult: 'اكتمل الاختبار',
    scoreSummary: 'أجبت عن',
    correctAnswers: 'إجابة صحيحة',
    scientificExplanation: 'الشرح العلمي والأدلة',
    question: 'السؤال',
    difficulty: 'المستوى',
    subscribeChannel: 'اشترك في القناة',
    viewOnYouTube: 'فتح في تطبيق يوتيوب',
    watchNow: 'مشاهدة الحلقة',
    videoEmbedPlaceholderNote: 'ملاحظة لصاحب القناة: يمكنك استبدال معرّف الفيديو (YouTube ID) بمعرف فيديوهاتك الحقيقية بسهولة في ملف src/config/content.ts.',
    backToHome: 'العودة للرئيسية',
    backToVideos: 'العودة لمكتبة الفيديوهات',
    backToArticles: 'العودة للمقالات',
    filterBy: 'تصفية حسب التصنيف',
    noResultsFound: 'لم يتم العثور على محتوى علمي يطابق بحثك.',
    clearSearch: 'مسح التصفية',
    nav: {
      home: 'الرئيسية',
      videos: 'الفيديوهات',
      articles: 'المقالات',
      quiz: 'اختبارات',
      about: 'عن القناة',
    },
    footerMission: 'سايِنس هورايزون منصة متخصصة في تبسيط الحقائق الكونية والفيزيائية وفق أحدث الأبحاث العلمية المحكمة بأسلوب مرئي مشوق.',
    footerCopyright: '© 2026 سايِنس هورايزون. مخصص لعشاق العلوم والمعرفة حول العالم.',
    sitemapLink: 'خريطة الموقع والهيكل البرمجي',
  },
};
