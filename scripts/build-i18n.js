// DEPRECATED: edit es/index.html, en/index.html and pt/index.html directly.
// This script is kept for reference only and is NOT run by npm run build.

const fs = require('fs');
const path = require('path');

const copy = {
  en: {
    htmlLang: 'en',
    title: 'GAUCHO FILMS — Films worth going the distance for.',
    description: 'GAUCHO FILMS — Films worth going the distance for. International film and storytelling studio.',
    navWork: 'Work',
    navServices: 'Services',
    navOriginals: 'Originals',
    navClients: 'Clients',
    navAbout: 'About',
    navContact: 'Contact',
    menuAria: 'Open menu',
    homeAria: 'GAUCHO FILMS home',
    logoAlt: 'GAUCHO FILMS',
    heroLogoAlt: 'GAUCHO FILMS — Films worth going the distance for',
    waAria: 'Chat on WhatsApp',
    waText: 'Hi GAUCHO FILMS, I would like to start a project.',
    heroKicker: 'Production Slate 2025 // Global',
    cta: 'Start a project',
    heroImgAlt: 'Moody mountain landscape with a geometric structure',
    aboutH2: 'WE CREATE FILMS THAT BUILD IDENTITY, VALUE AND VISIBILITY.',
    aboutP: 'An international storytelling collective forging raw, uncompromising documentaries and cinematic captures. We venture to the edge of geography to extract narratives of architecture, legacy estates, human craftsmanship, and pristine wilderness.',
    statCountries: '10+ Countries',
    statProductions: 'International Productions',
    statDistribution: 'Global Distribution',
    work1Tag: 'Docu-series 04:12',
    work1Title: 'The Remote Horizon',
    work2Tag: 'Commercial 01:30',
    work2Title: 'Monolith Speed',
    work3Tag: 'Legacy Film 08:45',
    work3Title: 'Wild Stallion Spirit',
    work4Tag: 'Art & Architecture 03:20',
    work4Title: 'Spaces of Silence',
    servicesKicker: 'Services / What we do',
    servicesH2: 'WHAT WE DO',
    s1Title: 'Brand Films',
    s1P: 'Films for brands.',
    s1a: 'Brand stories',
    s1b: 'Campaign films',
    s1c: 'Product storytelling',
    s1d: 'Branded content',
    s2Title: 'Hospitality & Destinations',
    s2P: 'Hotels, resorts, guest ranches and destinations.',
    s2a: 'Destination films',
    s2b: 'Hotel films',
    s2c: 'Experiences',
    s2d: 'Social content',
    s3Title: 'Ranches & Equestrian',
    s3P: 'Ranches, stud farms, breeders, associations and the equestrian / cattle world.',
    s3a: 'Legacy films',
    s3b: 'Ranch films',
    s3c: 'Breeding programs',
    s3d: 'Equestrian content',
    s4Title: 'Real Estate',
    s4P: 'A clearly defined commercial product.',
    s4a: 'Cinematic films',
    s4b: 'Exceptional properties',
    s4c: 'Ranches',
    s4d: 'Estates',
    s5Title: 'Institutions & Associations',
    s5P: 'Federations, associations and organizations.',
    s5a: 'Institutional films',
    s5b: 'Heritage',
    s5c: 'Events',
    s5d: 'Communications',
    originalsKicker: 'In-House Cinema / Originals',
    originalsH2: 'ORIGINALS',
    o1Tag: 'Original Series',
    o1Title: 'The Heritage Guardian',
    o1P: 'Culture. Heritage. Identity.',
    o1Cta: 'Explore THG ↗',
    o2Tag: 'Feature Documentary',
    o2Title: 'Horses & Humans',
    o2P: 'The relationship between horses, people and cultures around the world.',
    o2Cta: 'Explore Horses & Humans ↗',
    clientsKicker: 'Trusted worldwide',
    clientsH2: 'CLIENTS & PARTNERS',
    govAr: 'Government of Argentina',
    footprintKicker: 'Footprint / Global reach',
    footprintH2: 'STORIES WITHOUT BORDERS',
    mapAlt: 'World map showing global reach',
    teamKicker: 'The Collective / Team & Vision',
    teamH2: 'THE PEOPLE BEHIND THE FILMS',
    filmmakerAlt: 'Filmmaker with camera',
    nachoRole: 'Founder / Director',
    nachoBio: 'Guiding the lens with visual honesty, Nacho established GAUCHO FILMS to bring dramatic, raw, and high fidelity storytelling to institutional, brand, and natural legacies worldwide.',
    igNacho: 'Instagram of Nacho Sánchez Sorondo',
    liNacho: 'LinkedIn of Nacho Sánchez Sorondo',
    sofiRole: 'Lead Producer',
    sofiBio: 'Coordinating multi market logistics across five continents.',
    igSofi: 'Instagram of Sofi Rossi',
    liSofi: 'LinkedIn of Sofi Rossi',
    mateoRole: 'Director of Photography',
    mateoBio: 'Architect of light, master of the anamorphic canvas.',
    igMateo: 'Instagram of Mateo Diaz',
    liMateo: 'LinkedIn of Mateo Diaz',
    lucasRole: 'Post-Production Supervisor',
    lucasBio: 'Crafting final atmospheres through pristine sound & color.',
    igLucas: 'Instagram of Lucas Vance',
    liLucas: 'LinkedIn of Lucas Vance',
    contactImgAlt: 'Sunrise over mountains',
    contactKicker: 'Project Handoff / Inquiries // 2025',
    contactH2: 'HAVE A STORY WORTH FILMING?',
    contactP: "Let's create something that people will remember.",
    footerTag: 'Films worth going the distance for.',
    footerContact: 'Contact',
    footerCopy: '© 2025 GAUCHO FILMS Studio. All Rights Reserved.',
    footerWhere: 'Buenos Aires · Argentina · Working worldwide',
    langCurrent: 'English',
  },
  es: {
    htmlLang: 'es',
    title: 'GAUCHO FILMS — Películas que valen el viaje.',
    description: 'GAUCHO FILMS — Películas que valen el viaje. Estudio internacional de cine y storytelling.',
    navWork: 'Trabajo',
    navServices: 'Servicios',
    navOriginals: 'Originales',
    navClients: 'Clientes',
    navAbout: 'Nosotros',
    navContact: 'Contacto',
    menuAria: 'Abrir menú',
    homeAria: 'Inicio GAUCHO FILMS',
    logoAlt: 'GAUCHO FILMS',
    heroLogoAlt: 'GAUCHO FILMS — Películas que valen el viaje',
    waAria: 'Escribir por WhatsApp',
    waText: 'Hola GAUCHO FILMS, me gustaría comenzar un proyecto.',
    heroKicker: 'Slate de producción 2025 // Global',
    cta: 'Empezar un proyecto',
    heroImgAlt: 'Paisaje de montaña con una estructura geométrica',
    aboutH2: 'CREAMOS PELÍCULAS QUE CONSTRUYEN IDENTIDAD, VALOR Y VISIBILIDAD.',
    aboutP: 'Un colectivo internacional de storytelling que forja documentales crudos e intransigentes y capturas cinematográficas. Viajamos hasta el límite de la geografía para extraer narrativas de arquitectura, estates de legado, oficio humano y naturaleza prístina.',
    statCountries: '10+ países',
    statProductions: 'Producciones internacionales',
    statDistribution: 'Distribución global',
    work1Tag: 'Docuserie 04:12',
    work1Title: 'The Remote Horizon',
    work2Tag: 'Comercial 01:30',
    work2Title: 'Monolith Speed',
    work3Tag: 'Película de legado 08:45',
    work3Title: 'Wild Stallion Spirit',
    work4Tag: 'Arte y arquitectura 03:20',
    work4Title: 'Spaces of Silence',
    servicesKicker: 'Servicios / Lo que hacemos',
    servicesH2: 'LO QUE HACEMOS',
    s1Title: 'Películas de marca',
    s1P: 'Películas para marcas.',
    s1a: 'Historias de marca',
    s1b: 'Films de campaña',
    s1c: 'Storytelling de producto',
    s1d: 'Contenido branded',
    s2Title: 'Hospitalidad y destinos',
    s2P: 'Hoteles, resorts, guest ranches y destinos.',
    s2a: 'Films de destino',
    s2b: 'Films de hotel',
    s2c: 'Experiencias',
    s2d: 'Contenido social',
    s3Title: 'Ranchos y equitación',
    s3P: 'Ranchos, haras, criaderos, asociaciones y el universo ecuestre / ganadero.',
    s3a: 'Films de legado',
    s3b: 'Films de rancho',
    s3c: 'Programas de cría',
    s3d: 'Contenido ecuestre',
    s4Title: 'Real Estate',
    s4P: 'Un producto comercial muy claro.',
    s4a: 'Films cinematográficos',
    s4b: 'Propiedades excepcionales',
    s4c: 'Ranchos',
    s4d: 'Estates',
    s5Title: 'Instituciones y asociaciones',
    s5P: 'Federaciones, asociaciones y organizaciones.',
    s5a: 'Films institucionales',
    s5b: 'Patrimonio',
    s5c: 'Eventos',
    s5d: 'Comunicación',
    originalsKicker: 'Cine propio / Originales',
    originalsH2: 'ORIGINALES',
    o1Tag: 'Serie original',
    o1Title: 'The Heritage Guardian',
    o1P: 'Cultura. Patrimonio. Identidad.',
    o1Cta: 'Explorar THG ↗',
    o2Tag: 'Documental de largometraje',
    o2Title: 'Horses & Humans',
    o2P: 'La relación entre caballos, personas y culturas alrededor del mundo.',
    o2Cta: 'Explorar Horses & Humans ↗',
    clientsKicker: 'Confianza en todo el mundo',
    clientsH2: 'CLIENTES Y PARTNERS',
    govAr: 'Gobierno de Argentina',
    footprintKicker: 'Huella / Alcance global',
    footprintH2: 'HISTORIAS SIN FRONTERAS',
    mapAlt: 'Mapa mundial con el alcance global',
    teamKicker: 'El colectivo / Equipo y visión',
    teamH2: 'LAS PERSONAS DETRÁS DE LAS PELÍCULAS',
    filmmakerAlt: 'Cineasta con cámara',
    nachoRole: 'Fundador / Director',
    nachoBio: 'Guiando el lente con honestidad visual, Nacho fundó GAUCHO FILMS para llevar un storytelling dramático, crudo y de alta fidelidad a legados institucionales, de marca y naturales en todo el mundo.',
    igNacho: 'Instagram de Nacho Sánchez Sorondo',
    liNacho: 'LinkedIn de Nacho Sánchez Sorondo',
    sofiRole: 'Productora principal',
    sofiBio: 'Coordina la logística en múltiples mercados a lo largo de cinco continentes.',
    igSofi: 'Instagram de Sofi Rossi',
    liSofi: 'LinkedIn de Sofi Rossi',
    mateoRole: 'Director de fotografía',
    mateoBio: 'Arquitecto de la luz, maestro del lienzo anamórfico.',
    igMateo: 'Instagram de Mateo Diaz',
    liMateo: 'LinkedIn de Mateo Diaz',
    lucasRole: 'Supervisor de postproducción',
    lucasBio: 'Construye atmósferas finales con sonido y color impecables.',
    igLucas: 'Instagram de Lucas Vance',
    liLucas: 'LinkedIn de Lucas Vance',
    contactImgAlt: 'Amanecer sobre las montañas',
    contactKicker: 'Inicio de proyecto / Consultas // 2025',
    contactH2: '¿TENÉS UNA HISTORIA QUE VALE LA PENA FILMAR?',
    contactP: 'Creemos algo que la gente recuerde.',
    footerTag: 'Películas que valen el viaje.',
    footerContact: 'Contacto',
    footerCopy: '© 2025 GAUCHO FILMS Studio. Todos los derechos reservados.',
    footerWhere: 'Buenos Aires · Argentina · Trabajamos en todo el mundo',
    langCurrent: 'Español',
  },
  pt: {
    htmlLang: 'pt',
    title: 'GAUCHO FILMS — Filmes que valem a jornada.',
    description: 'GAUCHO FILMS — Filmes que valem a jornada. Estúdio internacional de cinema e storytelling.',
    navWork: 'Trabalho',
    navServices: 'Serviços',
    navOriginals: 'Originais',
    navClients: 'Clientes',
    navAbout: 'Sobre',
    navContact: 'Contato',
    menuAria: 'Abrir menu',
    homeAria: 'Início GAUCHO FILMS',
    logoAlt: 'GAUCHO FILMS',
    heroLogoAlt: 'GAUCHO FILMS — Filmes que valem a jornada',
    waAria: 'Conversar no WhatsApp',
    waText: 'Olá GAUCHO FILMS, gostaria de começar um projeto.',
    heroKicker: 'Slate de produção 2025 // Global',
    cta: 'Começar um projeto',
    heroImgAlt: 'Paisagem de montanha com uma estrutura geométrica',
    aboutH2: 'CRIAMOS FILMES QUE CONSTROEM IDENTIDADE, VALOR E VISIBILIDADE.',
    aboutP: 'Um coletivo internacional de storytelling que forja documentários crus e intransigentes e capturas cinematográficas. Vamos até o limite da geografia para extrair narrativas de arquitetura, propriedades de legado, ofício humano e natureza intocada.',
    statCountries: '10+ países',
    statProductions: 'Produções internacionais',
    statDistribution: 'Distribuição global',
    work1Tag: 'Docussérie 04:12',
    work1Title: 'The Remote Horizon',
    work2Tag: 'Comercial 01:30',
    work2Title: 'Monolith Speed',
    work3Tag: 'Filme de legado 08:45',
    work3Title: 'Wild Stallion Spirit',
    work4Tag: 'Arte e arquitetura 03:20',
    work4Title: 'Spaces of Silence',
    servicesKicker: 'Serviços / O que fazemos',
    servicesH2: 'O QUE FAZEMOS',
    s1Title: 'Filmes de marca',
    s1P: 'Filmes para marcas.',
    s1a: 'Histórias de marca',
    s1b: 'Filmes de campanha',
    s1c: 'Storytelling de produto',
    s1d: 'Conteúdo branded',
    s2Title: 'Hospitalidade e destinos',
    s2P: 'Hotéis, resorts, guest ranches e destinos.',
    s2a: 'Filmes de destino',
    s2b: 'Filmes de hotel',
    s2c: 'Experiências',
    s2d: 'Conteúdo social',
    s3Title: 'Ranchos e equestre',
    s3P: 'Ranchos, haras, criatórios, associações e o universo equestre / pecuário.',
    s3a: 'Filmes de legado',
    s3b: 'Filmes de rancho',
    s3c: 'Programas de criação',
    s3d: 'Conteúdo equestre',
    s4Title: 'Real Estate',
    s4P: 'Um produto comercial muito claro.',
    s4a: 'Filmes cinematográficos',
    s4b: 'Propriedades excepcionais',
    s4c: 'Ranchos',
    s4d: 'Estates',
    s5Title: 'Instituições e associações',
    s5P: 'Federações, associações e organizações.',
    s5a: 'Filmes institucionais',
    s5b: 'Patrimônio',
    s5c: 'Eventos',
    s5d: 'Comunicação',
    originalsKicker: 'Cinema próprio / Originais',
    originalsH2: 'ORIGINAIS',
    o1Tag: 'Série original',
    o1Title: 'The Heritage Guardian',
    o1P: 'Cultura. Patrimônio. Identidade.',
    o1Cta: 'Explorar THG ↗',
    o2Tag: 'Documentário de longa-metragem',
    o2Title: 'Horses & Humans',
    o2P: 'A relação entre cavalos, pessoas e culturas ao redor do mundo.',
    o2Cta: 'Explorar Horses & Humans ↗',
    clientsKicker: 'Confiança no mundo todo',
    clientsH2: 'CLIENTES E PARCEIROS',
    govAr: 'Governo da Argentina',
    footprintKicker: 'Presença / Alcance global',
    footprintH2: 'HISTÓRIAS SEM FRONTEIRAS',
    mapAlt: 'Mapa-múndi com o alcance global',
    teamKicker: 'O coletivo / Equipe e visão',
    teamH2: 'AS PESSOAS POR TRÁS DOS FILMES',
    filmmakerAlt: 'Cineasta com câmera',
    nachoRole: 'Fundador / Diretor',
    nachoBio: 'Guiando as lentes com honestidade visual, Nacho fundou a GAUCHO FILMS para levar um storytelling dramático, cru e de alta fidelidade a legados institucionais, de marca e naturais no mundo todo.',
    igNacho: 'Instagram de Nacho Sánchez Sorondo',
    liNacho: 'LinkedIn de Nacho Sánchez Sorondo',
    sofiRole: 'Produtora principal',
    sofiBio: 'Coordena a logística em múltiplos mercados ao longo de cinco continentes.',
    igSofi: 'Instagram de Sofi Rossi',
    liSofi: 'LinkedIn de Sofi Rossi',
    mateoRole: 'Diretor de fotografia',
    mateoBio: 'Arquiteto da luz, mestre da tela anamórfica.',
    igMateo: 'Instagram de Mateo Diaz',
    liMateo: 'LinkedIn de Mateo Diaz',
    lucasRole: 'Supervisor de pós-produção',
    lucasBio: 'Constrói atmosferas finais com som e cor impecáveis.',
    igLucas: 'Instagram de Lucas Vance',
    liLucas: 'LinkedIn de Lucas Vance',
    contactImgAlt: 'Nascer do sol sobre as montanhas',
    contactKicker: 'Início de projeto / Consultas // 2025',
    contactH2: 'TEM UMA HISTÓRIA QUE VALE A PENA FILMAR?',
    contactP: 'Vamos criar algo que as pessoas vão lembrar.',
    footerTag: 'Filmes que valem a jornada.',
    footerContact: 'Contato',
    footerCopy: '© 2025 GAUCHO FILMS Studio. Todos os direitos reservados.',
    footerWhere: 'Buenos Aires · Argentina · Trabalhamos no mundo todo',
    langCurrent: 'Português',
  },
};

function langClass(current, lang) {
  return current === lang
    ? 'flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-white bg-white/5'
    : 'flex items-center gap-2 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-white/65 hover:text-white hover:bg-white/5 transition';
}

function render(lang) {
  const t = copy[lang];
  const wa = encodeURIComponent(t.waText);
  return `<!doctype html>
<html lang="${t.htmlLang}" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${t.description}" />
  <title>${t.title}</title>
  <link rel="canonical" href="./" />
  <link rel="alternate" hreflang="es" href="../es/" />
  <link rel="alternate" hreflang="en" href="../en/" />
  <link rel="alternate" hreflang="pt" href="../pt/" />
  <link rel="alternate" hreflang="x-default" href="../es/" />
  <link rel="stylesheet" href="../css/main.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="grain">
  <div id="cursorGlow" class="cursor-glow hidden md:block"></div>

  <header class="fixed top-0 inset-x-0 z-50 transition-all duration-500" id="siteHeader">
    <div class="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
      <nav class="grid grid-cols-3 items-center py-5 md:py-7">
        <div class="flex items-center gap-6 lg:gap-8 text-[12px] uppercase tracking-[.24em] text-white/55">
          <a href="#work" class="underline decoration-transparent hover:decoration-gold/80 underline-offset-[6px] hover:text-white transition hidden md:inline">${t.navWork}</a>
          <a href="#services" class="underline decoration-transparent hover:decoration-gold/80 underline-offset-[6px] hover:text-white transition hidden md:inline">${t.navServices}</a>
          <a href="#originals" class="underline decoration-transparent hover:decoration-gold/80 underline-offset-[6px] hover:text-white transition hidden md:inline">${t.navOriginals}</a>
        </div>
        <a href="#top" class="header-logo-link" aria-label="${t.homeAria}"><img src="../assets/logo-chico.png" alt="${t.logoAlt}" class="header-logo"></a>
        <div class="justify-self-end flex items-center gap-4 lg:gap-6 text-[12px] uppercase tracking-[.24em] text-white/55">
          <a href="#clients" class="underline decoration-transparent hover:decoration-gold/80 underline-offset-[6px] hover:text-white transition hidden md:inline">${t.navClients}</a>
          <a href="#about" class="underline decoration-transparent hover:decoration-gold/80 underline-offset-[6px] hover:text-white transition hidden md:inline">${t.navAbout}</a>
          <a href="#contact" class="underline decoration-transparent hover:decoration-gold/80 underline-offset-[6px] hover:text-white transition hidden md:inline">${t.navContact}</a>
          <details class="lang-switch relative">
            <summary class="flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-white/80 cursor-pointer select-none">
              <img src="../assets/flags/${lang === 'en' ? 'us' : lang === 'pt' ? 'br' : 'es'}.svg" alt="" class="w-4 h-auto rounded-[1px] shrink-0">
              <span>${t.langCurrent}</span>
            </summary>
            <div class="absolute right-0 mt-3 min-w-[180px] rounded-lg border border-white/10 bg-black/90 backdrop-blur-xl py-2 z-50">
              <a href="../es/" data-lang="es" class="${langClass(lang, 'es')}"${lang === 'es' ? ' aria-current="page"' : ''}>
                <img src="../assets/flags/es.svg" alt="ES" class="w-4 h-auto rounded-[1px] shrink-0">
                <span>Español</span>
              </a>
              <a href="../en/" data-lang="en" class="${langClass(lang, 'en')}"${lang === 'en' ? ' aria-current="page"' : ''}>
                <img src="../assets/flags/us.svg" alt="US" class="w-4 h-auto rounded-[1px] shrink-0">
                <span>English</span>
              </a>
              <a href="../pt/" data-lang="pt" class="${langClass(lang, 'pt')}"${lang === 'pt' ? ' aria-current="page"' : ''}>
                <img src="../assets/flags/br.svg" alt="BR" class="w-4 h-auto rounded-[1px] shrink-0">
                <span>Português</span>
              </a>
            </div>
          </details>
          <button id="menuBtn" class="md:hidden text-white/80" aria-label="${t.menuAria}">
            <span class="block w-6 h-px bg-white mb-1.5"></span><span class="block w-4 h-px bg-white ml-auto"></span>
          </button>
        </div>
      </nav>
    </div>
    <div id="mobileMenu" class="md:hidden hidden border-t border-white/10 bg-black/85 backdrop-blur-xl">
      <div class="px-5 py-5 flex flex-col gap-4 text-[10px] uppercase tracking-[.22em] text-white/65">
        <a href="#work">${t.navWork}</a><a href="#services">${t.navServices}</a><a href="#originals">${t.navOriginals}</a><a href="#clients">${t.navClients}</a><a href="#about">${t.navAbout}</a><a href="#contact">${t.navContact}</a>
        <div class="pt-2 mt-1 border-t border-white/10 flex flex-col gap-3">
          <a href="../es/" data-lang="es" class="flex items-center gap-2${lang === 'es' ? ' text-white' : ''}"${lang === 'es' ? ' aria-current="page"' : ''}>
            <img src="../assets/flags/es.svg" alt="ES" class="w-4 h-auto rounded-[1px] shrink-0">
            <span>Español</span>
          </a>
          <a href="../en/" data-lang="en" class="flex items-center gap-2${lang === 'en' ? ' text-white' : ''}"${lang === 'en' ? ' aria-current="page"' : ''}>
            <img src="../assets/flags/us.svg" alt="US" class="w-4 h-auto rounded-[1px] shrink-0">
            <span>English</span>
          </a>
          <a href="../pt/" data-lang="pt" class="flex items-center gap-2${lang === 'pt' ? ' text-white' : ''}"${lang === 'pt' ? ' aria-current="page"' : ''}>
            <img src="../assets/flags/br.svg" alt="BR" class="w-4 h-auto rounded-[1px] shrink-0">
            <span>Português</span>
          </a>
        </div>
      </div>
    </div>
  </header>

  <a href="https://wa.me/5491134910182?text=${wa}" target="_blank" rel="noopener" aria-label="${t.waAria}" class="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition hover:scale-110 hover:bg-[#1fb958]">
    <span class="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
    <svg viewBox="0 0 24 24" fill="currentColor" class="relative h-7 w-7" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>

  <main id="top">
    <section class="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div class="absolute inset-0">
        <img src="../assets/img-000.png" alt="${t.heroImgAlt}" class="hero-bg w-full h-full object-cover" id="heroImage">
        <div class="absolute inset-0 bg-black/35"></div>
        <div class="absolute inset-0 vignette"></div>
      </div>
      <div class="relative z-10 w-full max-w-6xl px-6 pt-24 pb-20 text-center">
        <p class="text-[9px] uppercase tracking-[.48em] text-gold mb-6 reveal">${t.heroKicker}</p>
        <div class="reveal delay-100">
          <img src="../assets/logo.png" alt="${t.heroLogoAlt}" class="hero-logo">
        </div>
        <div class="reveal mt-8 delay-220">
          <a href="#contact" class="btn inline-flex items-center justify-center rounded-full bg-white text-black px-7 py-3 text-[10px] uppercase tracking-[.25em] font-medium">${t.cta}</a>
        </div>
      </div>
      <div class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/35">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 animate-bounce" aria-hidden="true"><path d="M4 8l8 8 8-8"/></svg>
      </div>
    </section>

    <section class="relative bg-black py-20 sm:py-24 md:py-28 overflow-hidden" id="about">
      <div class="mx-auto max-w-[1400px] px-[18px] sm:px-8 md:px-10 lg:px-12 text-center">
        <div class="flex flex-col items-center gap-8 reveal">
          <h2 class="display text-[42px] leading-[44px] sm:text-[54px] sm:leading-[56px] md:text-[72px] md:leading-[78px] lg:text-[92px] lg:leading-[96px] xl:text-[104px] xl:leading-[106px] w-full max-w-[1100px] mx-auto text-white uppercase">
            ${t.aboutH2}
          </h2>
          <p class="serif-copy text-[18px] sm:text-[18px] leading-[1.75] tracking-[.01em] text-white/60 w-full">${t.aboutP}</p>
        </div>

        <div class="my-14 md:my-16 h-px bg-white/10"></div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 reveal delay-120">
          <div class="flex flex-col items-center gap-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-7 w-7 text-gold" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 2.5 15.4 0 18"/><path d="M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>
            <div class="display text-[27px] sm:text-[30px] md:text-[34px] leading-none text-white uppercase">${t.statCountries}</div>
          </div>
          <div class="flex flex-col items-center gap-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-7 w-7 text-gold" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M7 5l2 4M12 5l2 4M17 5l2 4"/><path d="M3 9h18"/></svg>
            <div class="display text-[27px] sm:text-[30px] md:text-[34px] leading-[1.02] text-white uppercase max-w-[300px]">${t.statProductions}</div>
          </div>
          <div class="flex flex-col items-center gap-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-7 w-7 text-gold" aria-hidden="true"><circle cx="5" cy="12" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M7.1 10.8 16.9 7.2"/><path d="M7.1 13.2l9.8 3.6"/></svg>
            <div class="display text-[27px] sm:text-[30px] md:text-[34px] leading-none text-white uppercase">${t.statDistribution}</div>
          </div>
        </div>

        <div class="my-14 md:my-16 h-px bg-white/10"></div>

        <div id="work" class="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 scroll-mt-28">
          <article class="work-card group relative aspect-[1.5] rounded-xl overflow-hidden border border-white/5 reveal">
            <img class="card-img absolute inset-0 w-full h-full object-cover" src="../assets/img-002.png" alt="${t.work1Title}">
            <div class="overlay absolute inset-0"></div>
            <div class="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
              <div><div class="text-[8px] uppercase tracking-[.28em] text-gold mb-2">${t.work1Tag}</div><h3 class="display text-2xl md:text-3xl">${t.work1Title}</h3></div><span class="w-7 h-7 rounded-full bg-white text-black grid place-items-center text-sm">↗</span>
            </div>
          </article>
          <article class="work-card group relative aspect-[1.5] rounded-xl overflow-hidden border border-white/5 reveal delay-80">
            <img class="card-img absolute inset-0 w-full h-full object-cover" src="../assets/img-004.png" alt="${t.work2Title}">
            <div class="overlay absolute inset-0"></div>
            <div class="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4"><div><div class="text-[8px] uppercase tracking-[.28em] text-gold mb-2">${t.work2Tag}</div><h3 class="display text-2xl md:text-3xl">${t.work2Title}</h3></div><span class="w-7 h-7 rounded-full bg-white text-black grid place-items-center text-sm">↗</span></div>
          </article>
          <article class="work-card group relative aspect-[1.5] rounded-xl overflow-hidden border border-white/5 reveal delay-160">
            <img class="card-img absolute inset-0 w-full h-full object-cover" src="../assets/img-006.png" alt="${t.work3Title}">
            <div class="overlay absolute inset-0"></div>
            <div class="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4"><div><div class="text-[8px] uppercase tracking-[.28em] text-gold mb-2">${t.work3Tag}</div><h3 class="display text-2xl md:text-3xl">${t.work3Title}</h3></div><span class="w-7 h-7 rounded-full bg-white text-black grid place-items-center text-sm">↗</span></div>
          </article>
          <article class="work-card group relative aspect-[1.5] rounded-xl overflow-hidden border border-white/5 reveal delay-240">
            <img class="card-img absolute inset-0 w-full h-full object-cover" src="../assets/img-008.png" alt="${t.work4Title}">
            <div class="overlay absolute inset-0"></div>
            <div class="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4"><div><div class="text-[8px] uppercase tracking-[.28em] text-gold mb-2">${t.work4Tag}</div><h3 class="display text-2xl md:text-3xl">${t.work4Title}</h3></div><span class="w-7 h-7 rounded-full bg-white text-black grid place-items-center text-sm">↗</span></div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-panel border-y border-white/[.035] py-24 md:py-28" id="services">
      <div class="mx-auto max-w-6xl px-6 md:px-10">
        <div class="mb-10 reveal"><p class="text-[9px] uppercase tracking-[.38em] text-gold mb-5">${t.servicesKicker}</p><h2 class="display text-5xl md:text-7xl">${t.servicesH2}</h2></div>
        <div class="flex flex-col gap-4">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <article class="service-card group relative rounded-xl overflow-hidden border border-white/5 bg-black/20 reveal">
            <div class="relative aspect-[16/10] overflow-hidden">
              <img src="../assets/img-001.png" class="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105" alt="${t.s1Title}">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
              <span class="absolute top-4 left-4 text-[9px] uppercase tracking-[.25em] text-gold">01</span>
              <div class="absolute inset-x-4 bottom-4"><h3 class="display text-2xl md:text-3xl">${t.s1Title}</h3></div>
            </div>
            <div class="p-5 md:p-6">
              <p class="text-sm text-white/50 leading-6">${t.s1P}</p>
              <ul class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[9px] uppercase tracking-[.18em] text-white/40">
                <li>${t.s1a}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s1b}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s1c}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s1d}</li>
              </ul>
            </div>
          </article>
          <article class="service-card group relative rounded-xl overflow-hidden border border-white/5 bg-black/20 reveal delay-80">
            <div class="relative aspect-[16/10] overflow-hidden">
              <img src="../assets/img-003.png" class="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105" alt="${t.s2Title}">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
              <span class="absolute top-4 left-4 text-[9px] uppercase tracking-[.25em] text-gold">02</span>
              <div class="absolute inset-x-4 bottom-4"><h3 class="display text-2xl md:text-3xl">${t.s2Title}</h3></div>
            </div>
            <div class="p-5 md:p-6">
              <p class="text-sm text-white/50 leading-6">${t.s2P}</p>
              <ul class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[9px] uppercase tracking-[.18em] text-white/40">
                <li>${t.s2a}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s2b}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s2c}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s2d}</li>
              </ul>
            </div>
          </article>
          <article class="service-card group relative rounded-xl overflow-hidden border border-white/5 bg-black/20 reveal delay-160">
            <div class="relative aspect-[16/10] overflow-hidden">
              <img src="../assets/img-005.png" class="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105" alt="${t.s3Title}">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
              <span class="absolute top-4 left-4 text-[9px] uppercase tracking-[.25em] text-gold">03</span>
              <div class="absolute inset-x-4 bottom-4"><h3 class="display text-2xl md:text-3xl">${t.s3Title}</h3></div>
            </div>
            <div class="p-5 md:p-6">
              <p class="text-sm text-white/50 leading-6">${t.s3P}</p>
              <ul class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[9px] uppercase tracking-[.18em] text-white/40">
                <li>${t.s3a}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s3b}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s3c}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s3d}</li>
              </ul>
            </div>
          </article>
        </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mx-auto lg:w-[calc((100%_-_2rem)/3*2_+_1rem)]">
          <article class="service-card group relative rounded-xl overflow-hidden border border-white/5 bg-black/20 reveal delay-240">
            <div class="relative aspect-[16/10] overflow-hidden">
              <img src="../assets/img-007.png" class="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105" alt="${t.s4Title}">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
              <span class="absolute top-4 left-4 text-[9px] uppercase tracking-[.25em] text-gold">04</span>
              <div class="absolute inset-x-4 bottom-4"><h3 class="display text-2xl md:text-3xl">${t.s4Title}</h3></div>
            </div>
            <div class="p-5 md:p-6">
              <p class="text-sm text-white/50 leading-6">${t.s4P}</p>
              <ul class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[9px] uppercase tracking-[.18em] text-white/40">
                <li>${t.s4a}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s4b}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s4c}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s4d}</li>
              </ul>
            </div>
          </article>
          <article class="service-card group relative rounded-xl overflow-hidden border border-white/5 bg-black/20 reveal delay-320">
            <div class="relative aspect-[16/10] overflow-hidden">
              <img src="../assets/img-009.png" class="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105" alt="${t.s5Title}">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
              <span class="absolute top-4 left-4 text-[9px] uppercase tracking-[.25em] text-gold">05</span>
              <div class="absolute inset-x-4 bottom-4"><h3 class="display text-2xl md:text-3xl">${t.s5Title}</h3></div>
            </div>
            <div class="p-5 md:p-6">
              <p class="text-sm text-white/50 leading-6">${t.s5P}</p>
              <ul class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[9px] uppercase tracking-[.18em] text-white/40">
                <li>${t.s5a}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s5b}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s5c}</li><li class="w-1 h-1 rounded-full bg-gold"></li><li>${t.s5d}</li>
              </ul>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>

    <section class="bg-ink py-24 md:py-32" id="originals">
      <div class="mx-auto max-w-6xl px-6 md:px-10">
        <div class="reveal mb-10"><p class="text-[9px] uppercase tracking-[.38em] text-gold mb-4">${t.originalsKicker}</p><h2 class="display text-5xl md:text-7xl">${t.originalsH2}</h2></div>
        <div class="grid md:grid-cols-2 gap-4">
          <article class="relative overflow-hidden rounded-xl aspect-[.84] group reveal"><img src="../assets/img-012.png" class="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105" alt="${t.o1Title}"><div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div><div class="absolute inset-0 flex items-end p-6 md:p-8"><div><div class="text-[9px] uppercase tracking-[.27em] text-gold mb-5">${t.o1Tag}</div><h3 class="display text-5xl leading-[.82] max-w-[7ch]">${t.o1Title}</h3><p class="mt-5 text-sm text-white/65 max-w-xs">${t.o1P}</p><button class="mt-6 text-[9px] uppercase tracking-[.22em]">${t.o1Cta}</button></div></div></article>
          <article class="relative overflow-hidden rounded-xl aspect-[.84] group reveal delay-120"><img src="../assets/img-014.png" class="w-full h-full object-cover transition duration-[1.2s] group-hover:scale-105" alt="${t.o2Title}"><div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div><div class="absolute inset-0 flex items-end p-6 md:p-8"><div><div class="text-[9px] uppercase tracking-[.27em] text-gold mb-5">${t.o2Tag}</div><h3 class="display text-5xl leading-[.82] max-w-[6ch]">${t.o2Title}</h3><p class="mt-5 text-sm text-white/65 max-w-sm">${t.o2P}</p><button class="mt-6 text-[9px] uppercase tracking-[.22em]">${t.o2Cta}</button></div></div></article>
        </div>
      </div>
    </section>

    <section class="bg-panel py-16 md:py-20 border-y border-white/[.035] overflow-hidden" id="clients">
      <div class="mx-auto max-w-[1400px] px-6 md:px-10 mb-10 md:mb-12 text-center reveal">
        <p class="text-[9px] uppercase tracking-[.38em] text-gold mb-4">${t.clientsKicker}</p>
        <h2 class="display text-5xl md:text-7xl">${t.clientsH2}</h2>
      </div>
      <div class="marquee overflow-hidden">
        <div class="marquee-track flex items-center">
          <div class="flex items-center shrink-0">
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">${t.govAr}</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Haras de la Armonia</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">FEI Global</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Amani Reserve</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Reid Associates</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Netflix</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Prime Video</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Mubi</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Vimeo Staff Picks</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Museum Extra</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
          </div>
          <div class="flex items-center shrink-0" aria-hidden="true">
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">${t.govAr}</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Haras de la Armonia</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">FEI Global</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Amani Reserve</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Reid Associates</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Netflix</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Prime Video</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Mubi</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Vimeo Staff Picks</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
            <span class="mx-6 md:mx-8 text-[12px] md:text-[14px] uppercase tracking-[.32em] text-white/45 hover:text-white transition">Museum Extra</span><span class="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-ink py-24 md:py-28">
      <div class="mx-auto max-w-6xl px-6 md:px-10">
        <div class="mb-10 reveal"><p class="text-[9px] uppercase tracking-[.38em] text-gold mb-5">${t.footprintKicker}</p><h2 class="display text-5xl md:text-7xl">${t.footprintH2}</h2></div>
        <div class="relative rounded-xl overflow-hidden border border-white/5 reveal">
          <img src="../assets/img-016.png" class="w-full" alt="${t.mapAlt}">
          <div class="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
        </div>
      </div>
    </section>

    <section class="bg-panel py-24 md:py-28 border-y border-white/[.035]" id="team">
      <div class="mx-auto max-w-6xl px-6 md:px-10">
        <div class="mb-10 reveal"><p class="text-[9px] uppercase tracking-[.38em] text-gold mb-5">${t.teamKicker}</p><h2 class="display text-5xl md:text-7xl">${t.teamH2}</h2></div>
        <div class="grid lg:grid-cols-[1.1fr_.9fr] gap-4 mb-4">
          <div class="relative rounded-xl overflow-hidden min-h-[360px] reveal"><img src="../assets/img-018.png" class="absolute inset-0 w-full h-full object-cover" alt="${t.filmmakerAlt}"><div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div></div>
          <div class="rounded-xl border border-white/5 bg-black/15 p-7 md:p-9 flex flex-col justify-end reveal"><div class="text-[9px] uppercase tracking-[.25em] text-gold mb-4">${t.nachoRole}</div><h3 class="display text-4xl">Nacho Sánchez Sorondo</h3><p class="mt-4 text-sm leading-7 text-white/55">${t.nachoBio}</p><div class="mt-5 flex items-center gap-3 text-white/40"><a href="https://www.instagram.com/nachossorondo" target="_blank" rel="noopener" aria-label="${t.igNacho}" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/50 hover:text-white transition"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-4 w-4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a><a href="#" target="_blank" rel="noopener" aria-label="${t.liNacho}" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/50 hover:text-white transition"><svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a><span class="text-[9px] uppercase tracking-[.23em]">@nachossorondo</span></div></div>
        </div>
        <div class="grid sm:grid-cols-3 gap-4">
          <div class="rounded-xl border border-white/5 p-6 reveal"><div class="text-[9px] uppercase tracking-[.25em] text-gold mb-4">${t.sofiRole}</div><h3 class="display text-2xl">Sofi Rossi</h3><p class="mt-3 text-sm text-white/50 leading-6">${t.sofiBio}</p><div class="mt-5 flex items-center gap-3 text-white/35"><a href="https://www.instagram.com/sofirossi" target="_blank" rel="noopener" aria-label="${t.igSofi}" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/50 hover:text-white transition"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-4 w-4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a><a href="#" target="_blank" rel="noopener" aria-label="${t.liSofi}" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/50 hover:text-white transition"><svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a><span class="text-[9px] uppercase tracking-[.2em]">@sofirossi</span></div></div>
          <div class="rounded-xl border border-white/5 p-6 reveal"><div class="text-[9px] uppercase tracking-[.25em] text-gold mb-4">${t.mateoRole}</div><h3 class="display text-2xl">Mateo Diaz</h3><p class="mt-3 text-sm text-white/50 leading-6">${t.mateoBio}</p><div class="mt-5 flex items-center gap-3 text-white/35"><a href="https://www.instagram.com/mateodp" target="_blank" rel="noopener" aria-label="${t.igMateo}" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/50 hover:text-white transition"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-4 w-4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a><a href="#" target="_blank" rel="noopener" aria-label="${t.liMateo}" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/50 hover:text-white transition"><svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a><span class="text-[9px] uppercase tracking-[.2em]">@mateodp</span></div></div>
          <div class="rounded-xl border border-white/5 p-6 reveal"><div class="text-[9px] uppercase tracking-[.25em] text-gold mb-4">${t.lucasRole}</div><h3 class="display text-2xl">Lucas Vance</h3><p class="mt-3 text-sm text-white/50 leading-6">${t.lucasBio}</p><div class="mt-5 flex items-center gap-3 text-white/35"><a href="https://www.instagram.com/lucasv_edit" target="_blank" rel="noopener" aria-label="${t.igLucas}" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/50 hover:text-white transition"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-4 w-4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a><a href="#" target="_blank" rel="noopener" aria-label="${t.liLucas}" class="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 hover:border-white/50 hover:text-white transition"><svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a><span class="text-[9px] uppercase tracking-[.2em]">@lucasv_edit</span></div></div>
        </div>
      </div>
    </section>

    <section class="relative min-h-[620px] flex items-center overflow-hidden" id="contact">
      <img src="../assets/img-020.png" class="absolute inset-0 w-full h-full object-cover" alt="${t.contactImgAlt}">
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30"></div>
      <div class="relative z-10 mx-auto max-w-6xl px-6 md:px-10 w-full text-center reveal">
        <p class="text-[9px] uppercase tracking-[.38em] text-gold mb-6">${t.contactKicker}</p>
        <h2 class="display text-5xl md:text-7xl lg:text-8xl leading-[.82] max-w-4xl mx-auto">${t.contactH2}</h2>
        <p class="mt-6 text-sm md:text-[17px] text-white/60">${t.contactP}</p>
        <div class="mt-7 flex items-center justify-center gap-8 text-[9px] md:text-[16px] uppercase tracking-[.22em] text-white/50"><a href="mailto:films@gauchofilms.studio">films@gauchofilms.studio</a><a href="tel:+5491134910182">+54 9 11 3491-0182</a></div>
      </div>
    </section>
  </main>

  <footer class="bg-black py-12 md:py-14">
    <div class="mx-auto max-w-6xl px-6 md:px-10">
      <div class="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
        <div><div class="tracking-[.3em] text-sm mb-3">GAUCHO FILMS</div><p class="text-sm text-white/50">${t.footerTag}</p></div>
        <div class="grid grid-cols-3 gap-4 text-[9px] uppercase tracking-[.2em] text-white/45"><a href="#work">${t.navWork}</a><a href="#services">${t.navServices}</a><a href="#originals">${t.navOriginals}</a><a href="#clients">${t.navClients}</a><a href="#about">${t.navAbout}</a><a href="#contact">${t.navContact}</a></div>
        <div class="md:text-right text-[9px] uppercase tracking-[.2em] text-white/45"><div class="mb-2">${t.footerContact}</div><a href="mailto:films@gauchofilms.studio" class="block hover:text-white transition">films@gauchofilms.studio</a><a href="tel:+5491134910182" class="block mt-2 hover:text-white transition">+54 9 11 3491 0182</a></div>
      </div>
      <div class="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[8px] uppercase tracking-[.23em] text-white/30"><span>${t.footerCopy}</span><span>${t.footerWhere}</span></div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
  <script src="../src/js/main.js"></script>
</body>
</html>
`;
}

const root = path.join(__dirname, '..');
for (const lang of ['es', 'en', 'pt']) {
  const dir = path.join(root, lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), render(lang));
}

console.log('Wrote es/en/pt index.html');
