export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  projectNo: string;
  year: string;
  category: 'Architecture' | 'Interiors' | 'Hospitality' | 'Mixed-Use';
  tagline: string;
  summary: string;
  description: string[];
  designPhilosophy: string;
  keyHighlights: string[];
  coverImage: string;
  gallery: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const portfolioProjects: Project[] = [
  {
    id: '01',
    slug: 'vayana-residence',
    title: 'Vayana Residence & Landscape',
    client: 'Mr. Anil Soni',
    location: 'Dalsinghsarai, Bihar',
    projectNo: '202301',
    year: '2024',
    category: 'Architecture',
    tagline: 'Modern Tropical Architecture & Living',
    summary: 'A contemporary architectural statement harmonizing bold geometric forms with terracotta jaali screens and climate-responsive landscaped courtyards.',
    description: [
      'Vayana Residence is a contemporary architectural expression that harmonizes bold geometric forms with natural materials and landscape integration. Defined by sculptural cantilevered balconies, clean horizontal lines, and a distinctive terracotta jaali façade, the residence establishes a strong yet elegant architectural identity.',
      'The interplay of natural stone, warm wood textures, and expansive glass surfaces creates a refined balance between solidity and transparency. Integrated greenery and thoughtfully designed outdoor spaces soften the built form, while deep overhangs, shaded openings, and opportunities for natural ventilation contribute to a climate-responsive living environment.',
      'The landscape design is conceived as a natural extension of Vayana Residence, creating a seamless relationship between built form and outdoor spaces. A manicured central lawn establishes an open, calming foreground, complemented by geometrically arranged stone stepping pads that introduce rhythm, movement, and visual continuity.'
    ],
    designPhilosophy: 'Contemporary Geometry | Material Harmony | Climate Responsiveness | Nature-Inspired Living',
    keyHighlights: [
      'Sculptural cantilevered balconies with natural wood soffits',
      'Custom terracotta jaali screen for climate modulation and privacy',
      'Layered tropical landscape concept with stone stepping pads',
      'Warm architectural facade illumination designed for twilight elegance'
    ],
    coverImage: '/portfolio_images/page_4.webp',
    gallery: [
      '/portfolio_images/page_4.webp',
      '/portfolio_images/page_5.webp',
      '/portfolio_images/page_6.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Private Luxury Residence' },
      { label: 'Scope', value: 'Architecture & Landscape Masterplan' },
      { label: 'Location', value: 'Dalsinghsarai, Bihar' },
      { label: 'Project Code', value: '202301' }
    ]
  },
  {
    id: '02',
    slug: 'the-aurelia',
    title: 'The Aurelia Banquet & Events',
    client: 'Mr. Gautam',
    location: 'Dalsinghsarai, Bihar',
    projectNo: '202602',
    year: '2026',
    category: 'Hospitality',
    tagline: 'Timeless Grandeur | Contemporary Elegance | Celebrations',
    summary: 'A neoclassical landmark hospitality destination blending grand symmetrical colonnades, terracotta jaali accents, and state-of-the-art celebration spaces.',
    description: [
      'The Aurelia is envisioned as a distinguished hospitality destination that blends contemporary functionality with timeless neoclassical elegance. Its architectural character is defined by a symmetrical façade, majestic classical columns, a prominent pediment, intricate terracotta jaali screens, and gracefully arched entrances.',
      'A sophisticated palette of ivory finishes, warm timber accents, dark metal detailing, and ambient architectural lighting creates a refined and welcoming atmosphere. Thoughtfully integrated greenery and an elegant arrival experience enhance the building\'s visual appeal, establishing a memorable setting for weddings, social celebrations, corporate events, and dining.'
    ],
    designPhilosophy: 'Timeless Grandeur | Contemporary Elegance | Celebrations & Hospitality',
    keyHighlights: [
      'Symmetrical neoclassical façade with monumental fluted columns',
      'Prominent pediment and arched entryways for royal hospitality arrival',
      'Terracotta jaali screens filtering natural ambient daytime light',
      'Banquet Hall, fine-dining restaurant, and expansive pre-function lawns'
    ],
    coverImage: '/portfolio_images/page_7.webp',
    gallery: [
      '/portfolio_images/page_7.webp',
      '/portfolio_images/page_8.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Hospitality / Banquet & Restaurant' },
      { label: 'Scope', value: 'Masterplanning & Architectural Design' },
      { label: 'Location', value: 'Dalsinghsarai, Bihar' },
      { label: 'Project Code', value: '202602' }
    ]
  },
  {
    id: '03',
    slug: 'mahendra-residence',
    title: 'Mahendra Residence',
    client: 'Mr. Mahendra',
    location: 'Bikaner, Rajasthan',
    projectNo: '202506',
    year: '2025',
    category: 'Architecture',
    tagline: 'Desert Modernism & Earth-Toned Luxury',
    summary: 'An architectural tribute to the arid beauty of Bikaner, combining deep shaded verandahs, local stone finishes, and minimalist cubic massing.',
    description: [
      'Set against the vibrant desert climate of Bikaner, Mahendra Residence reinterprets traditional Rajasthani courtyard principles through crisp modern geometry.',
      'The design prioritizes thermal massing and directional shading to combat high daytime temperatures while opening up to starry desert night skies through private rooftop terraces and courtyard gardens.'
    ],
    designPhilosophy: 'Regional Context | Thermal Massing | Clean Desert Modernism',
    keyHighlights: [
      'Passive solar shading louvers tailored to the Rajasthan sun path',
      'Textured sandstone and warm earth-toned plaster palette',
      'Central tranquil water body for microclimate cooling'
    ],
    coverImage: '/portfolio_images/page_9.webp',
    gallery: [
      '/portfolio_images/page_9.webp',
      '/portfolio_images/page_10.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Independent Villa' },
      { label: 'Scope', value: 'Architectural & Facade Engineering' },
      { label: 'Location', value: 'Bikaner, Rajasthan' },
      { label: 'Project Code', value: '202506' }
    ]
  },
  {
    id: '04',
    slug: 'mandeep-villa',
    title: 'Mandeep Villa',
    client: 'Mr. Mandeep',
    location: 'Kishtwar, Jammu & Kashmir',
    projectNo: '202507',
    year: '2025',
    category: 'Architecture',
    tagline: 'Hillside Architecture & Alpine Sanctuaries',
    summary: 'A cliffside mountain retreat in Kishtwar engineered with stepped terraces, cedar timber claddings, and floor-to-ceiling mountain viewing bays.',
    description: [
      'Carved into the sloped terrain of Kishtwar, this private mountain residence embraces the alpine landscape with cantilevered decks and high-pitched timber soffits.',
      'Carefully planned insulation and passive heat capture ensure warmth in extreme winters, while summer breezes flow through naturally cross-ventilated living galleries.'
    ],
    designPhilosophy: 'Topographical Harmony | Alpine Materiality | Extreme Weather Resilience',
    keyHighlights: [
      'Stepped retaining design harmonizing with natural contours',
      'Himalayan cedar cladding paired with slate stone masonry',
      'Panoramic floor-to-ceiling mountain vistas'
    ],
    coverImage: '/portfolio_images/page_11.webp',
    gallery: [
      '/portfolio_images/page_11.webp',
      '/portfolio_images/page_12.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Mountain Villa' },
      { label: 'Scope', value: 'Structural Integration & Architecture' },
      { label: 'Location', value: 'Kishtwar, J&K' },
      { label: 'Project Code', value: '202507' }
    ]
  },
  {
    id: '05',
    slug: 'anoop-residence',
    title: 'Anoop Residence',
    client: 'Mr. Anoop',
    location: 'Jammu',
    projectNo: '202508',
    year: '2025',
    category: 'Architecture',
    tagline: 'Linear Sophistication & Screened Privacy',
    summary: 'A sleek, forward-thinking urban villa characterized by bold floating cantilevers, wooden louvers, and bespoke landscape courtyards in Jammu.',
    description: [
      'Anoop Residence is designed as an urban oasis that shields its residents from street bustle while welcoming gentle natural daylight into every interior volume.',
      'Sleek floating concrete planes are softened with vertical timber fins and warm cove illumination, setting a benchmark for contemporary northern Indian luxury living.'
    ],
    designPhilosophy: 'Geometric Precision | Screened Facades | Warm Minimalism',
    keyHighlights: [
      'Floating upper floor cantilever establishing a sheltered carport',
      'Vertical motorized security & privacy louvers',
      'Double-height internal light-well linking formal and family spaces'
    ],
    coverImage: '/portfolio_images/page_13.webp',
    gallery: [
      '/portfolio_images/page_13.webp',
      '/portfolio_images/page_14.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Urban Villa' },
      { label: 'Scope', value: 'Architecture & Facade Detailing' },
      { label: 'Location', value: 'Jammu' },
      { label: 'Project Code', value: '202508' }
    ]
  },
  {
    id: '06',
    slug: 'vishal-residence',
    title: 'Vishal Mountain Haven',
    client: 'Mr. Vishal',
    location: 'Mandi (H.P.)',
    projectNo: '202609',
    year: '2026',
    category: 'Architecture',
    tagline: 'High-Altitude Modern Luxury',
    summary: 'A contemporary sanctuary in Himachal Pradesh blending steep pitched roofs, robust stone bases, and expansive glass curtain walls framing the valley.',
    description: [
      'Located amidst the scenic hills of Mandi, this residence celebrates alpine living with high ceilings, exposed trusses, and expansive glazing overlooking lush valleys.',
      'The architecture utilizes a solid rustic stone podium topped by light-filled glass and timber pavilions, combining traditional mountain warmth with ultra-modern luxury.'
    ],
    designPhilosophy: 'Resilient Engineering | Alpine Elegance | Valley Orientation',
    keyHighlights: [
      'Contemporary interpretation of traditional Himachali Kath-Kuni craft',
      'Floor-to-ceiling insulated double-glazed curtain walls',
      'Spacious viewing balconies overlooking perennial pine valleys'
    ],
    coverImage: '/portfolio_images/page_15.webp',
    gallery: [
      '/portfolio_images/page_15.webp',
      '/portfolio_images/page_16.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Hill Retreat' },
      { label: 'Scope', value: 'Comprehensive Architecture' },
      { label: 'Location', value: 'Mandi, Himachal Pradesh' },
      { label: 'Project Code', value: '202609' }
    ]
  },
  {
    id: '07',
    slug: 'ashwani-villa',
    title: 'Ashwani Villa',
    client: 'Mr. Ashwani',
    location: 'Jammu',
    projectNo: '202610',
    year: '2026',
    category: 'Architecture',
    tagline: 'Serene Volumes & Ambient Illuminations',
    summary: 'A refined residential retreat focused on tactile materials, tranquil water accents, and an architectural play between solid masses and ethereal voids.',
    description: [
      'Ashwani Villa brings together the warmth of tropical hardwood accents and the sleekness of modern slate stone in a harmonious architectural dialogue.',
      'The residence features seamless transitional spaces that flow effortlessly from an open-concept living pavilion into secluded garden courtyards.'
    ],
    designPhilosophy: 'Modern Grandeur | Light & Shade | Tactile Textures',
    keyHighlights: [
      'Double-height glass lobby with integrated stone waterfall feature',
      'Covered outdoor patio with natural wood slats and ambient downlights',
      'Sophisticated muted color palette that ages gracefully over time'
    ],
    coverImage: '/portfolio_images/page_17.webp',
    gallery: [
      '/portfolio_images/page_17.webp',
      '/portfolio_images/page_18.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Luxury Residential Villa' },
      { label: 'Scope', value: 'Architecture & Exterior Lighting' },
      { label: 'Location', value: 'Jammu' },
      { label: 'Project Code', value: '202610' }
    ]
  },
  {
    id: '08',
    slug: 'sahil-residence',
    title: 'Sahil Residence',
    client: 'Mr. Sahil',
    location: 'Kishtwar, Jammu & Kashmir',
    projectNo: '202411',
    year: '2024',
    category: 'Architecture',
    tagline: 'Valley Architecture & Modern Craft',
    summary: 'A contemporary family home engineered to weather mountain climates while providing spacious, sunlit living zones framed in natural wood and stone.',
    description: [
      'Nestled in the Kishtwar valley, Sahil Residence uses passive solar orientation to maximize sunlight during winter months while maintaining natural shade during warmer days.',
      'The building silhouette stands proudly as an understated yet striking example of how modern architecture can flourish gracefully in remote mountain terrains.'
    ],
    designPhilosophy: 'Local Craftsmanship | Thermal Efficiency | Architectural Balance',
    keyHighlights: [
      'Thermal mass stone foundation absorbing day heat',
      'Deep timber eaves protecting exterior walls from snow and heavy rain',
      'Open plan living area centered around an artisanal hearth fireplace'
    ],
    coverImage: '/portfolio_images/page_19.webp',
    gallery: [
      '/portfolio_images/page_19.webp',
      '/portfolio_images/page_20.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Alpine Residential' },
      { label: 'Scope', value: 'Architecture & Landscape Planning' },
      { label: 'Location', value: 'Kishtwar, J&K' },
      { label: 'Project Code', value: '202411' }
    ]
  },
  {
    id: '09',
    slug: 'jatinder-residence',
    title: 'Jatinder Residence',
    client: 'Mr. Jatinder',
    location: 'Vijaypur, Jammu',
    projectNo: '202412',
    year: '2024',
    category: 'Architecture',
    tagline: 'Dynamic Volumes & Integrated Verandas',
    summary: 'A clean-lined suburban home in Vijaypur featuring bold horizontal balconies, wooden trellis work, and flowing indoor-outdoor family spaces.',
    description: [
      'Designed for generational family living, Jatinder Residence balances open gathering spaces with private suites across two beautifully proportioned floors.',
      'Perforated screens and horizontal cantilevered slabs create rhythmic shadows that change throughout the day, bringing the façade to life.'
    ],
    designPhilosophy: 'Fluid Living | Open Courtyards | Modern Simplicity',
    keyHighlights: [
      'Cantilevered balconies with glass balustrades',
      'Warm wood paneling accentuating entrance portals',
      'Integration of landscaped side gardens accessible from ground-floor bedrooms'
    ],
    coverImage: '/portfolio_images/page_21.webp',
    gallery: [
      '/portfolio_images/page_21.webp',
      '/portfolio_images/page_22.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Suburban Villa' },
      { label: 'Scope', value: 'Architecture & Spatial Planning' },
      { label: 'Location', value: 'Vijaypur, Jammu' },
      { label: 'Project Code', value: '202412' }
    ]
  },
  {
    id: '10',
    slug: 'sr-builders-landmark',
    title: 'S.R. Builders Commercial Landmark',
    client: 'S.R. Builders',
    location: 'Chandigarh',
    projectNo: '202513',
    year: '2025',
    category: 'Mixed-Use',
    tagline: 'Urban Commercial Identity & Enduring Craft',
    summary: 'A contemporary commercial structure paying subtle homage to Chandigarh\'s iconic modernist heritage with clean grids, brise-soleil, and glass transparency.',
    description: [
      'Commissioned by S.R. Builders, this multi-storey commercial hub in Chandigarh is engineered for maximum workplace efficiency and visual impact.',
      'The architecture incorporates sustainable shading devices, energy-efficient glazing, and high-ceiling corporate suites suited for modern commercial enterprises.'
    ],
    designPhilosophy: 'Urban Identity | Functional Modularity | Enduring Craft',
    keyHighlights: [
      'Modular structural grid enabling flexible interior floor plans',
      'Architectural brise-soleil minimizing solar heat gain',
      'Double-height corporate reception with bespoke stone cladding'
    ],
    coverImage: '/portfolio_images/page_23.webp',
    gallery: [
      '/portfolio_images/page_23.webp',
      '/portfolio_images/page_24.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Commercial Complex & Offices' },
      { label: 'Scope', value: 'Architecture & Facade Engineering' },
      { label: 'Location', value: 'Chandigarh' },
      { label: 'Project Code', value: '202513' }
    ]
  },
  {
    id: '11',
    slug: 'aarohan-residence',
    title: 'Aarohan Residence',
    client: 'Mr. Aarohan',
    location: 'Greater Noida',
    projectNo: '202601',
    year: '2026',
    category: 'Mixed-Use',
    tagline: 'A Shared Vision. A New Beginning. | Where Ambition Meets Belonging',
    summary: 'A landmark four-storey mixed-use development combining entrepreneurial studio workspaces on lower floors with a private sky sanctuary on upper levels.',
    description: [
      'A contemporary four-storey mixed-use residence that embodies the journey of two individuals building their dreams together. The lower two floors are envisioned as a professional workspace, fostering creativity, productivity, and entrepreneurial growth, while the upper two floors provide a private residential sanctuary defined by comfort, warmth, and tranquillity.',
      'The architectural expression is shaped by bold geometric volumes, layered projections, and a thoughtful interplay of materials. Textured terracotta brick brings character and warmth, complemented by refined plaster surfaces, natural timber soffits, expansive glass railings, and integrated greenery. Carefully composed lighting enhances the façade after dusk, creating a distinctive identity that balances modern sophistication with a welcoming residential character.',
      'Aarohan is more than a building; it is the architecture of a shared vision—a place where ambition finds direction, dreams take form, and a life together begins to rise.'
    ],
    designPhilosophy: 'A Shared Vision | Where Ambition Meets Belonging | Dual-Function Architecture',
    keyHighlights: [
      'Four-storey vertical zoning separating creative studios from private family living',
      'Artisanal exposed terracotta brickwork contrasting with refined white plaster',
      'Cascading terrace planters bringing nature to every level',
      'Dusk-to-night architectural illumination highlighting structural projections'
    ],
    coverImage: '/portfolio_images/page_25.webp',
    gallery: [
      '/portfolio_images/page_25.webp',
      '/portfolio_images/page_26.webp',
      '/portfolio_images/page_27.webp',
      '/portfolio_images/page_28.webp',
      '/portfolio_images/page_29.webp',
      '/portfolio_images/page_30.webp',
      '/portfolio_images/page_31.webp',
      '/portfolio_images/page_32.webp'
    ],
    specifications: [
      { label: 'Typology', value: '4-Storey Mixed-Use Residence & Workspace' },
      { label: 'Scope', value: 'Full Architectural & Interior Execution' },
      { label: 'Location', value: 'Greater Noida' },
      { label: 'Project Code', value: '202601' }
    ]
  },
  {
    id: '12',
    slug: 'classical-interior-ajay-ahuja',
    title: 'Classical Interior Suite - Ajay Ahuja',
    client: 'Ajay Ahuja',
    location: 'Faridabad, Haryana',
    projectNo: '2024-INT-01',
    year: '2025',
    category: 'Interiors',
    tagline: 'Timeless Poetry of Comfort, Light & Wood',
    summary: 'A masterclass in interior poetry spanning dining, lounge, living, and bed spaces sculpted with raw slate, rich moss velvet, ebony spires, and ambient light creases.',
    description: [
      'DINING SPACE: A harmonious blend of wood and warmth, where sculptural forms meet timeless elegance. Soft light dances across natural textures, while greenery breathes life into the space, creating a dining experience that feels both modern and beautifully serene.',
      'LOUNGE & LIVING SPACES: Where warm wood meets gentle light and timeless art, elegance quietly unfolds. Soft light embraces rich textures, while sculpted leather and natural greenery compose a serene poetry of comfort, beauty, and sophistication. Where warm wooden floors meet the softness of light, elegance unfolds in silence.',
      'DRAWING SPACE: A hush carved out of timber and linen, where the afternoon folds itself into a quiet exhale. Slender drapes stand sentinel at the edges of light, their dark borders grounding a spill of soft, sunlit silence. The chaise waits like an invitation to drift—cloaked in woven cream and resting upon an island of muted gray. Behind it, warm golden light slips secretly from the ceiling’s crease, washing gently down the grooved wall. It is not merely a corner of a room, but an architecture of pause.',
      'BED SPACES: Raw slate rises like earth’s quiet spine, crowned by a warm halo of light. Rich moss-green velvet meets low timber bones, grounding the soul in stillness. An enchanted forest etched in ink, crowned by a warm secret glow from above with ebony spires and soft sage linens. Slender moldings kissed by a ribbon of gold from the ceiling’s crown, where crisp ivory meets deep midnight borders and glowing glass lanterns.'
    ],
    designPhilosophy: 'Tactile Luxury | Sculptural Light | Architecture of Pause',
    keyHighlights: [
      'Sculptural timber dining ensemble with integrated architectural planters',
      'Artisanal drawing room lounge dubbed "An Architecture of Pause"',
      'Four distinct themed master suites: Raw Slate, Enchanted Forest, Gold Ribbon, and Chiseled Charcoal',
      'Concealed architectural cove lighting washing textured grooved feature walls'
    ],
    coverImage: '/portfolio_images/page_33.webp',
    gallery: [
      '/portfolio_images/page_33.webp',
      '/portfolio_images/page_34.webp',
      '/portfolio_images/page_35.webp',
      '/portfolio_images/page_36.webp',
      '/portfolio_images/page_37.webp',
      '/portfolio_images/page_38.webp',
      '/portfolio_images/page_39.webp',
      '/portfolio_images/page_40.webp',
      '/portfolio_images/page_41.webp',
      '/portfolio_images/page_42.webp',
      '/portfolio_images/page_43.webp',
      '/portfolio_images/page_44.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'High-End Luxury Residential Interior' },
      { label: 'Scope', value: 'Bespoke Interior Architecture, Styling & Lighting' },
      { label: 'Location', value: 'Faridabad, Haryana' },
      { label: 'Project Code', value: 'Ajay Ahuja Suite' }
    ]
  },
  {
    id: '13',
    slug: 'vikas-vidur-penthouse',
    title: 'Vikas Vidur Penthouse & Sky Terrace',
    client: 'Mr. Vikas Vidur',
    location: 'Patna, Bihar',
    projectNo: '202606',
    year: '2026',
    category: 'Architecture',
    tagline: 'The Art of Elevated Sky Living',
    summary: 'An opulent sky terrace and penthouse balcony featuring fluted timber ceilings, Italian travertine marble, olive planter trees, and woven rattan alfresco seating.',
    description: [
      'Perched high above Patna, the Vikas Vidur Sky Residence represents the pinnacle of luxury outdoor-indoor living.',
      'The terrace features a cantilevered teak ceiling with integrated warm LED micro-fixtures, fluted natural stone feature walls, artisanal wicker seating, and panoramic glass railings that connect the sky with nature through mature olive and broadleaf plantings.'
    ],
    designPhilosophy: 'Sky Sanctuaries | Organic Textures | Indoor-Outdoor Continuity',
    keyHighlights: [
      'Fluted timber cantilevered roof with warm recessed micro-downlights',
      'Curated material mood board: Travertine marble, Dark Nero Marquina, Brass, Natural Jute',
      'Weather-resistant outdoor designer lounge with mature sculptural olive planters',
      'Panoramic sunset views over the Patna horizon'
    ],
    coverImage: '/portfolio_images/page_45.webp',
    gallery: [
      '/portfolio_images/page_45.webp',
      '/portfolio_images/page_46.webp',
      '/portfolio_images/page_47.webp',
      '/portfolio_images/page_48.webp',
      '/portfolio_images/page_49.webp',
      '/portfolio_images/page_50.webp',
      '/portfolio_images/page_51.webp',
      '/portfolio_images/page_52.webp',
      '/portfolio_images/page_53.webp'
    ],
    specifications: [
      { label: 'Typology', value: 'Penthouse & Sky Terrace' },
      { label: 'Scope', value: 'Terrace Architecture, Material Palette & Outdoor Living' },
      { label: 'Location', value: 'Patna, Bihar' },
      { label: 'Project Code', value: '202606' }
    ]
  }
];

export const studioPhilosophy = {
  name: 'HOMIFIORA',
  tagline: 'ARCHITECTURE | INTERIORS | SPACES',
  slogan: 'SPACES THAT BELONG',
  subSlogan: 'PEOPLE | PLACES | PURPOSE',
  experienceYears: '10+',
  mission: 'Thoughtfully Designed. Beautifully Executed.',
  description: 'HOMIFIORA is an architecture and interior design studio driven by a collaborative team of architects and designers who believe that every space should reflect its purpose, character, and the people who inhabit it.',
  extendedBio: 'With a decade of experience, we bring together creativity, technical expertise and a deep understanding of materials, craftsmanship and spatial planning to create meaningful spaces that are functional, timeless and uniquely yours.',
  stats: [
    { value: '10+', label: 'Years of Experience' },
    { value: '12+', label: 'Flagship Projects' },
    { value: '8+', label: 'States & Regions' },
    { value: '100%', label: 'Craft & Customization' }
  ],
  approach: [
    {
      step: '01',
      title: 'LISTEN',
      description: 'Understand your needs, lifestyle and vision through comprehensive spatial and contextual dialogue.'
    },
    {
      step: '02',
      title: 'DESIGN',
      description: 'Create thoughtful, climate-responsive and aesthetically captivating architectural solutions.'
    },
    {
      step: '03',
      title: 'PLAN',
      description: 'Detailed technical documentation, bespoke material curation, and engineering coordination.'
    },
    {
      step: '04',
      title: 'EXECUTE',
      description: 'Deliver with uncompromising craftsmanship, premium quality, and complete transparency.'
    }
  ],
  services: [
    {
      title: 'Architectural Design',
      category: 'Residential & Commercial',
      desc: 'Bespoke residences, multi-storey mixed-use buildings, and commercial landmarks with climate-responsive forms.'
    },
    {
      title: 'Interior Architecture',
      category: 'Luxury Living & Hospitality',
      desc: 'Comprehensive interior styling, custom lighting choreographies, natural stone & timber craftsmanship.'
    },
    {
      title: 'Landscape Design',
      category: 'Outdoor & Terraces',
      desc: 'Manicured lawns, geometric stepping pads, layered tropical foliage, and twilight lighting environments.'
    },
    {
      title: 'Hospitality & Banquets',
      category: 'Events & Dining',
      desc: 'Neoclassical and contemporary celebration venues designed for grand royal entries and unforgettable experiences.'
    }
  ],
  contactInfo: {
    website: 'WWW.HOMIFIORA.COM',
    email: 'Support@homifiora.com',
    phone: '+91 99996 56898',
    whatsapp: '+91 99996 56898',
    whatsappUrl: 'https://wa.me/919999656898',
    address: 'Homifiora Architecture & Interiors Studio — New Delhi NCR · Gauhati · Patna · Jammu, India',
    hours: 'Monday – Saturday: 10:00 AM – 7:00 PM',
    instagram: '@homifiora.spaces',
    studios: [
      { name: 'New Delhi NCR', role: 'Principal Atelier & Headquarters', region: 'North India' },
      { name: 'Gauhati (Guwahati)', role: 'Northeast Regional Atelier & Branch', region: 'Assam & Northeast' },
      { name: 'Patna & Dalsinghsarai', role: 'Eastern Regional Studio Atelier', region: 'Bihar' },
      { name: 'Jammu & Chandigarh', role: 'Northern Consulting Outposts', region: 'North' },
    ],
  }
};
