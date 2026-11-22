import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  MapPin,
  Phone,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MoveHorizontal,
  Send,
  Sparkles,
} from 'lucide-react';

// ============================================================================
// CONSTANTES OFICIAIS — INOVARE AMBIENTES PROJETADOS
// ============================================================================
const WHATSAPP_NUMBER = '559881972518';
const PHONE_DISPLAY = '+55 98 8197-2518';
const INSTAGRAM_URL = 'https://www.instagram.com/inovareprojetados/';
const INSTAGRAM_HANDLE = '@inovareprojetados';
const ADDRESS_LINE = 'Rua São Benedito, Santa Inês - MA';
const CEP_LINE = 'CEP 6500300';

// ============================================================================
// MARCA OFICIAL — MONOGRAMA IA + INOVARE AMBIENTES PROJETADOS
// ============================================================================
const InovareLogo = ({ size = 'md', showSubtitle = true }) => {
  const iconBox =
    size === 'lg'
      ? 'w-14 h-14'
      : size === 'sm'
      ? 'w-9 h-9'
      : 'w-11 h-11';

  const titleSize =
    size === 'lg'
      ? 'text-xl md:text-2xl tracking-[0.26em]'
      : size === 'sm'
      ? 'text-xs tracking-[0.2em]'
      : 'text-sm md:text-base tracking-[0.22em]';

  return (
    <div className="inline-flex flex-col items-center select-none group">
      <div className={`${iconBox} relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full overflow-visible transition-transform duration-500 group-hover:scale-[1.03]"
          aria-label="Monograma IA - Inovare Ambientes Projetados"
        >
          <defs>
            <linearGradient id="inovareAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5B841" />
              <stop offset="55%" stopColor="#D4963B" />
              <stop offset="100%" stopColor="#B87624" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="21" r="10.5" fill="url(#inovareAmberGrad)" />
          <rect
            x="14.5"
            y="40"
            width="19"
            height="64"
            rx="1.5"
            fill="url(#inovareAmberGrad)"
          />
          <polygon
            points="66,18 106,104 85.5,104 66,60.5 46.5,104 26,104"
            fill="url(#inovareAmberGrad)"
          />
          <polygon
            points="66,74 77.5,99 54.5,99"
            fill="url(#inovareAmberGrad)"
          />
        </svg>
      </div>

      <div className="mt-2 text-center leading-none">
        <div className={`font-serif font-medium text-[#F4F1EA] uppercase ${titleSize}`}>
          INOVARE
        </div>
        {showSubtitle && (
          <div className="mt-1 text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-[#D4963B] font-medium">
            ambientes projetados
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// DADOS DO PROJETO — INOVARE AMBIENTES PROJETADOS
// ============================================================================
const DRIFT_IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80',
];

const PARTNER_LOGOS = [
  { name: 'ARAUCO MDF', tag: 'Padrões Madeirados & Matt' },
  { name: 'INOVARE LED', tag: 'Perfis Lineares 2700K–3000K' },
  { name: 'FERRAGENS SOFT', tag: 'Corrediças & Dobradiças Amortecidas' },
  { name: 'ENGENHARIA 3D', tag: 'Renderização Fotorrealista' },
  { name: 'MARCENARIA FINA', tag: 'Fita de Borda PUR & Precisão' },
  { name: 'PROJETO SOB MEDIDA', tag: 'Santa Inês & Região' },
];

const ACCORDION_SPACES = [
  {
    id: 'cozinhas',
    category: '01 / COZINHAS & GOURMET',
    title: 'Cozinhas Planejadas & Ilhas',
    subtitle: 'Fluxo ergonômico, torres funcionais e iluminação embutida',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85',
    location: 'Residencial — Santa Inês, MA',
    materials: 'MDF Carvalho & Grafite Matt • LED 3000K • Amortecimento Soft-Close',
    description:
      'Cozinhas desenhadas para o dia a dia e momentos de convivência, combinando armários superiores iluminados, gavetões reforçados para louças e bancadas integradas.',
  },
  {
    id: 'suites',
    category: '02 / DORMITÓRIOS & CLOSETS',
    title: 'Suítes Master & Closets',
    subtitle: 'Organização inteligente, espelhos iluminados e tons acolhedores',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    location: 'Suíte Residencial — Santa Inês, MA',
    materials: 'MDF Louro & Areia • Perfis LED embutidos • Cabideiros & Nichos',
    description:
      'Ambientes de descanso com marcenaria sob medida que aproveita cada centímetro do pé-direito, criando atmosfera serena com luz indireta quente.',
  },
  {
    id: 'living',
    category: '03 / SALAS & PAINÉIS',
    title: 'Living, Home & Painéis',
    subtitle: 'Integração visual, ocultação de cabos e profundidade arquitetônica',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    location: 'Área Social — Santa Inês, MA',
    materials: 'Painéis Ripados & Lisos • Fita LED Quente • Estofados & Pedras',
    description:
      'Painéis de TV e estantes sob medida que organizam equipamentos e valorizam a arquitetura da sala com proporções equilibradas.',
  },
  {
    id: 'corporativo',
    category: '04 / COMERCIAL & ESCRITÓRIO',
    title: 'Escritórios & Espaços Comerciais',
    subtitle: 'Identidade profissional, recepção acolhedora e produtividade',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    location: 'Atendimento Corporativo — Santa Inês, MA',
    materials: 'MDF Amadeirado & Chumbo • Iluminação Técnica • Balcões Sob Medida',
    description:
      'Soluções planejadas para consultórios, escritórios e estabelecimentos que buscam transmitir confiança, organização e estética marcante logo na chegada.',
  },
];

const FLOWING_ITEMS = [
  {
    label: 'Projeto 3D Sob Medida',
    meta: 'Visualização realista antes da execução',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Acabamentos & MDF',
    meta: 'Texturas selecionadas e bordas precisas',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Iluminação Integrada',
    meta: 'Luz quente que valoriza cada volume',
    image:
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Montagem & Entrega',
    meta: 'Acompanhamento técnico do início ao fim',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
  },
];

const CAROUSEL_PROJECTS = [
  {
    id: 1,
    title: 'Cozinha Integrada & Bancada Esculpida',
    category: 'Cozinha Planejada',
    year: '2026',
    area: '18 m²',
    image:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85',
    summary:
      'Armários superiores em tom claro, base amadeirada e iluminação direcionada sobre a bancada de trabalho.',
    highlights: ['MDF Amadeirado & Off-White', 'Iluminação Linear Embutida', 'Gavetas com Extração Total'],
  },
  {
    id: 2,
    title: 'Living Contemporâneo com Luz Quente',
    category: 'Sala de Estar & TV',
    year: '2026',
    area: '26 m²',
    image:
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85',
    summary:
      'Painel amplo com iluminação indireta, nichos discretos e integração fluida com o ambiente de jantar.',
    highlights: ['Sanca & Nichos Iluminados', 'Acabamento Fosco Antirreflexo', 'Fiação 100% Embutida'],
  },
  {
    id: 3,
    title: 'Suíte & Closet com Cabideiros Abertos',
    category: 'Dormitório & Closet',
    year: '2025',
    area: '22 m²',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    summary:
      'Cabeceira estofada contínua, criados planejados e closet modular com iluminação interna acolhedora.',
    highlights: ['Cabeceira Sob Medida', 'Prateleiras Ajustáveis', 'Luz Quente Aconchegante'],
  },
  {
    id: 4,
    title: 'Espaço de Trabalho & Reunião',
    category: 'Ambiente Corporativo',
    year: '2025',
    area: '30 m²',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
    summary:
      'Bancada ampla, armários arquivadores discretos e estética sóbria pensada para atendimento ao cliente.',
    highlights: ['Mesa & Estante Integradas', 'Estética Executiva', 'Ergonomia Diária'],
  },
];

// ============================================================================
// SKILL 1: GOOEY NAV
// ============================================================================
const GooeyNav = ({ items, activeId, onSelect }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const activeIndex = items.findIndex((item) => item.id === activeId);
    const el = itemRefs.current[activeIndex];
    const container = containerRef.current;

    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
        opacity: 1,
      });
    }
  }, [activeId, items]);

  return (
    <div className="relative flex items-center">
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="inovare-goo-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <nav
        ref={containerRef}
        aria-label="Navegação principal"
        className="relative flex items-center gap-1 rounded-full bg-[#151515]/90 border border-white/10 p-1.5 backdrop-blur-md"
      >
        <div
          style={{ filter: 'url(#inovare-goo-filter)' }}
          className="pointer-events-none absolute inset-1.5"
        >
          <span
            style={{
              transform: `translateX(${Math.max(0, pillStyle.left - 6)}px)`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
            }}
            className="block h-full rounded-full bg-[#D4963B]/25 border border-[#D4963B]/50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          />
        </div>

        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              ref={(node) => {
                itemRefs.current[idx] = node;
              }}
              onClick={() => onSelect(item.id)}
              className={`relative z-10 px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300 cursor-pointer ${
                isActive
                  ? 'text-[#F5B841]'
                  : 'text-[#F4F1EA]/75 hover:text-[#F4F1EA]'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

// ============================================================================
// SKILL 2: DRIFT WALL
// ============================================================================
const DriftWall = ({ images }) => {
  const col1 = [images[0], images[1], images[2]];
  const col2 = [images[3], images[4], images[5]];
  const col3 = [images[6], images[7], images[8]];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-35">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 h-full px-3 md:px-6 -rotate-2 scale-110">
        <div className="flex flex-col gap-4 md:gap-6 animate-drift-up">
          {[...col1, ...col1].map((src, i) => (
            <div
              key={`c1-${i}`}
              className="aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/10 bg-[#151515]"
            >
              <img
                src={src}
                alt="Ambiente planejado Inovare"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[25%] contrast-105"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:gap-6 animate-drift-down">
          {[...col2, ...col2].map((src, i) => (
            <div
              key={`c2-${i}`}
              className="aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/10 bg-[#151515]"
            >
              <img
                src={src}
                alt="Projeto de interiores Inovare"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[25%] contrast-105"
              />
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-col gap-4 md:gap-6 animate-drift-up-slow">
          {[...col3, ...col3].map((src, i) => (
            <div
              key={`c3-${i}`}
              className="aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/10 bg-[#151515]"
            >
              <img
                src={src}
                alt="Detalhe de marcenaria Inovare"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[25%] contrast-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/85 via-[#0E0E0E]/75 to-[#0E0E0E]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/80 via-transparent to-[#0E0E0E]/80" />
    </div>
  );
};

// ============================================================================
// SKILL 3: LOGO LOOP
// ============================================================================
const LogoLoop = ({ items }) => {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#121212]/90 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0E0E0E] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0E0E0E] to-transparent z-10" />

      <div className="flex w-max animate-logo-loop hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="mx-8 flex items-center gap-4 text-left shrink-0"
          >
            <span className="h-2 w-2 rounded-full bg-[#D4963B]/80" />
            <div>
              <div className="text-xs font-semibold tracking-[0.22em] text-[#F4F1EA]">
                {item.name}
              </div>
              <div className="text-[11px] text-[#F4F1EA]/50">{item.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// SKILL 4: ACCORDION GALLERY
// ============================================================================
const AccordionGallery = ({ spaces, onSelectSpace }) => {
  const [activeId, setActiveId] = useState(spaces[0].id);

  return (
    <div className="flex flex-col lg:flex-row gap-3 min-h-[540px] lg:h-[580px] w-full">
      {spaces.map((space) => {
        const isOpen = activeId === space.id;
        return (
          <div
            key={space.id}
            onClick={() => setActiveId(space.id)}
            onMouseEnter={() => {
              if (window.innerWidth >= 1024) setActiveId(space.id);
            }}
            className={`relative rounded-sm overflow-hidden border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
              isOpen
                ? 'lg:flex-[3.4] min-h-[360px] border-[#D4963B]/50'
                : 'lg:flex-[1] min-h-[110px] border-white/10 hover:border-white/25'
            }`}
          >
            <img
              src={space.image}
              alt={space.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
                isOpen ? 'scale-100 brightness-75' : 'scale-110 brightness-45'
              }`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                isOpen
                  ? 'bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/55 to-transparent'
                  : 'bg-[#0E0E0E]/65'
              }`}
            />

            {!isOpen && (
              <div className="hidden lg:flex absolute inset-0 flex-col justify-between p-5 text-left">
                <span className="text-[11px] tracking-[0.2em] text-[#D4963B] font-medium">
                  {space.category.split('/')[0].trim()}
                </span>
                <div className="writing-vertical-rl rotate-180 font-serif text-xl text-[#F4F1EA]/85 tracking-wide">
                  {space.title}
                </div>
              </div>
            )}

            <div
              className={`relative z-10 h-full flex flex-col justify-between p-6 md:p-8 text-left transition-opacity duration-500 ${
                isOpen ? 'opacity-100' : 'lg:opacity-0 lg:pointer-events-none opacity-100'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#D4963B] font-medium">
                  {space.category}
                </span>
                <span className="text-xs text-[#F4F1EA]/60">{space.location}</span>
              </div>

              <div className="max-w-xl mt-auto pt-12">
                <h3 className="font-serif text-3xl md:text-4xl text-[#F4F1EA] leading-tight">
                  {space.title}
                </h3>
                <p className="mt-2 text-sm text-[#D4963B] font-medium">
                  {space.subtitle}
                </p>
                <p className="mt-3 text-sm text-[#F4F1EA]/75 leading-relaxed">
                  {space.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-[#F4F1EA]/60">
                    {space.materials}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSpace(space);
                    }}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#F5B841] hover:text-white transition-colors shrink-0 cursor-pointer"
                  >
                    Ver detalhes <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ============================================================================
// SKILL 5: FLOWING MENU
// ============================================================================
const FlowingMenu = ({ items, onSelectItem }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [entryDir, setEntryDir] = useState('top');
  const rowRefs = useRef([]);

  const handleMouseEnter = (idx, e) => {
    const el = rowRefs.current[idx];
    if (el) {
      const rect = el.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      setEntryDir(e.clientY < midY ? 'top' : 'bottom');
    }
    setHoveredIdx(idx);
  };

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, idx) => {
        const isHovered = hoveredIdx === idx;
        return (
          <div
            key={item.label}
            ref={(node) => {
              rowRefs.current[idx] = node;
            }}
            onMouseEnter={(e) => handleMouseEnter(idx, e)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => onSelectItem(item)}
            className="relative overflow-hidden py-7 md:py-9 px-4 md:px-6 cursor-pointer group"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-[#D4963B] text-[#0E0E0E] flex items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isHovered
                  ? 'translate-y-0'
                  : entryDir === 'top'
                  ? '-translate-y-full'
                  : 'translate-y-full'
              }`}
            >
              <div className="flex w-max animate-flowing-marquee items-center gap-10 whitespace-nowrap">
                {Array.from({ length: 6 }).map((_, k) => (
                  <div key={k} className="flex items-center gap-8">
                    <span className="font-serif text-2xl md:text-3xl font-medium tracking-wide">
                      {item.label}
                    </span>
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-20 h-11 object-cover rounded-sm border border-[#0E0E0E]/20"
                    />
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                      {item.meta}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-opacity duration-300 group-hover:opacity-0">
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-[#D4963B]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-[#F4F1EA]">
                  {item.label}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-[#F4F1EA]/60">
                <span>{item.meta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4963B]" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ============================================================================
// SKILL 6: CIRCULAR CAROUSEL
// ============================================================================
const CircularCarousel = ({ projects, onOpenProject }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartX = useRef(null);

  const total = projects.length;

  const prev = () => setActiveIndex((prevIdx) => (prevIdx - 1 + total) % total);
  const next = () => setActiveIndex((prevIdx) => (prevIdx + 1) % total);

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (dragStartX.current === null) return;
    const deltaX = e.clientX - dragStartX.current;
    if (deltaX > 55) prev();
    else if (deltaX < -55) next();
    dragStartX.current = null;
  };

  const getOffset = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="w-full">
      <div
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="relative h-[440px] md:h-[490px] w-full flex items-center justify-center overflow-hidden select-none touch-pan-y cursor-grab active:cursor-grabbing"
      >
        {projects.map((project, index) => {
          const offset = getOffset(index);
          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);

          const translateX = offset * 285;
          const translateY = absOffset * 28;
          const rotateZ = offset * 7;
          const scale = isCenter ? 1 : Math.max(0.76, 1 - absOffset * 0.14);
          const opacity = absOffset > 1.5 ? 0 : isCenter ? 1 : 0.45;
          const zIndex = 20 - Math.round(absOffset * 5);

          return (
            <div
              key={project.id}
              onClick={() => {
                if (isCenter) onOpenProject(project);
                else setActiveIndex(index);
              }}
              style={{
                transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotateZ}deg) scale(${scale})`,
                opacity,
                zIndex,
              }}
              className="absolute w-[310px] sm:w-[390px] md:w-[440px] rounded-sm overflow-hidden border border-white/15 bg-[#151515] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  draggable={false}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/30 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] bg-[#0E0E0E]/80 text-[#F5B841] border border-[#D4963B]/30 rounded-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-5 text-left">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#F4F1EA]/55">
                  <span>{project.area}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-1.5 font-serif text-xl md:text-2xl text-[#F4F1EA] line-clamp-1">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#F4F1EA]/70 line-clamp-2">
                  {project.summary}
                </p>
                {isCenter && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#F5B841]">
                    <span className="inline-flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" /> Abrir ficha do ambiente
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-2">
        <div className="inline-flex items-center gap-2 text-xs text-[#F4F1EA]/55">
          <MoveHorizontal className="w-4 h-4 text-[#D4963B]" />
          <span>Arraste ou use as setas para navegar pelos ambientes</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Projeto anterior"
            className="w-10 h-10 rounded-full border border-white/15 bg-[#151515] hover:border-[#D4963B] hover:text-[#F5B841] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 px-2">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Ir para ${p.title}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex ? 'w-7 bg-[#D4963B]' : 'w-2 bg-white/25'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Próximo projeto"
            className="w-10 h-10 rounded-full border border-white/15 bg-[#151515] hover:border-[#D4963B] hover:text-[#F5B841] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// APLICAÇÃO PRINCIPAL
// ============================================================================
export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [modalProject, setModalProject] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    ambiente: 'Cozinha Planejada & Ilha',
    mensagem: '',
  });
  const [sentFeedback, setSentFeedback] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'ambientes', label: 'Ambientes' },
    { id: 'processo', label: 'Processo' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buildWhatsAppLink = (customText) => {
    const text =
      customText ||
      `Olá! Vim pelo site da INOVARE ambientes projetados e gostaria de solicitar um orçamento de móveis planejados.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `Olá, equipe INOVARE ambientes projetados!%0A*Nome:* ${
      formData.nome || 'Cliente'
    }%0A*Ambiente:* ${formData.ambiente}%0A*Detalhes:* ${
      formData.mensagem || 'Gostaria de agendar uma conversa sobre o projeto.'
    }`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
    setSentFeedback(true);
    setTimeout(() => setSentFeedback(false), 4000);
  };

  return (
    <div
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      className="min-h-screen bg-[#0E0E0E] text-[#F4F1EA] selection:bg-[#D4963B]/30 selection:text-[#F5B841]"
    >
      <style>{`
        .font-serif {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        @keyframes driftUp {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -50%, 0); }
        }
        @keyframes driftDown {
          0% { transform: translate3d(0, -50%, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes logoLoop {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
        @keyframes flowingMarquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-drift-up {
          animation: driftUp 36s linear infinite;
        }
        .animate-drift-down {
          animation: driftDown 40s linear infinite;
        }
        .animate-drift-up-slow {
          animation: driftUp 46s linear infinite;
        }
        .animate-logo-loop {
          animation: logoLoop 28s linear infinite;
        }
        .animate-flowing-marquee {
          animation: flowingMarquee 18s linear infinite;
        }
        .writing-vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0E0E0E]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
            className="flex items-center gap-3 shrink-0"
          >
            <InovareLogo size="sm" showSubtitle={true} />
          </a>

          <div className="hidden lg:block">
            <GooeyNav
              items={navItems}
              activeId={activeSection}
              onSelect={scrollToSection}
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/15 text-xs text-[#F4F1EA]/80 hover:border-[#D4963B] hover:text-[#F5B841] transition-colors"
            >
              <span>{INSTAGRAM_HANDLE}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4963B] text-[#0E0E0E] text-xs font-semibold uppercase tracking-[0.14em] hover:bg-[#F5B841] transition-colors"
            >
              <span>Orçamento</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between px-3 py-2 border-t border-white/5 overflow-x-auto gap-1 bg-[#0E0E0E]">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.15em] whitespace-nowrap cursor-pointer ${
                activeSection === item.id
                  ? 'bg-[#D4963B]/20 text-[#F5B841] border border-[#D4963B]/40'
                  : 'text-[#F4F1EA]/65'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      <section
        id="inicio"
        className="relative min-h-[88vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      >
        <DriftWall images={DRIFT_IMAGES} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-7 flex justify-center">
            <InovareLogo size="lg" showSubtitle={true} />
          </div>

          <p className="text-xs uppercase tracking-[0.28em] text-[#D4963B] font-medium mb-4">
            Arquitetura de Interiores & Móveis Planejados • Santa Inês - MA
          </p>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F4F1EA] leading-[1.06] tracking-tight">
            Ambientes sob medida que unem{' '}
            <span className="italic text-[#F5B841]">precisão</span> e acolhimento.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-[#F4F1EA]/75 leading-relaxed">
            Projetos planejados do estudo espacial ao acabamento final, valorizando
            cada proporção, textura e ponto de luz para transformar residências e
            espaços comerciais.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('projetos')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D4963B] text-[#0E0E0E] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#F5B841] transition-all cursor-pointer"
            >
              Explorar Projetos
            </button>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/20 bg-[#151515]/80 text-[#F4F1EA] text-xs font-medium uppercase tracking-[0.18em] hover:border-[#D4963B] hover:text-[#F5B841] transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4963B]" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      <LogoLoop items={PARTNER_LOGOS} />

      <section id="ambientes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.24em] text-[#D4963B]">
              Categorias de Projeto
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
              Ambientes pensados para viver bem
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#F4F1EA]/65 leading-relaxed">
            Passe o mouse ou toque em cada faixa para expandir os detalhes técnicos e
            as soluções de marcenaria para cada cômodo.
          </p>
        </div>

        <AccordionGallery
          spaces={ACCORDION_SPACES}
          onSelectSpace={(space) =>
            setModalProject({
              title: space.title,
              category: space.category,
              year: '2026',
              area: space.location,
              image: space.image,
              summary: space.description,
              highlights: space.materials.split('•').map((s) => s.trim()),
            })
          }
        />
      </section>

      <section id="processo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.24em] text-[#D4963B]">
            Como Conduzimos Cada Entrega
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
            Da medição à entrega final
          </h2>
        </div>

        <FlowingMenu
          items={FLOWING_ITEMS}
          onSelectItem={(item) => {
            setFormData((prev) => ({
              ...prev,
              mensagem: `Olá! Gostaria de saber mais sobre: ${item.label} (${item.meta}).`,
            }));
            scrollToSection('contato');
          }}
        />
      </section>

      <section id="projetos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.24em] text-[#D4963B]">
              Seleção Assinada
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl text-[#F4F1EA]">
              Projetos em destaque
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#F4F1EA]/65 leading-relaxed">
            Clique no cartão central para abrir a ficha do ambiente ou solicite uma
            proposta alinhada à planta do seu espaço.
          </p>
        </div>

        <CircularCarousel
          projects={CAROUSEL_PROJECTS}
          onOpenProject={(proj) => setModalProject(proj)}
        />
      </section>

      <section
        id="contato"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <InovareLogo size="md" showSubtitle={true} />

            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F1EA] leading-tight">
              Vamos tirar o seu projeto do papel
            </h2>
            <p className="text-sm text-[#F4F1EA]/70 leading-relaxed">
              Atendimento personalizado para residências, apartamentos, escritórios e
              espaços comerciais em Santa Inês e região.
            </p>

            <div className="space-y-4 pt-2 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#D4963B] mt-1 shrink-0" />
                <div>
                  <div className="text-[#F4F1EA] font-medium">{ADDRESS_LINE}</div>
                  <div className="text-xs text-[#F4F1EA]/55">{CEP_LINE}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-4 h-4 text-[#D4963B] mt-1 shrink-0" />
                <div>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4F1EA] hover:text-[#F5B841] font-medium transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <div className="text-xs text-[#F4F1EA]/55">WhatsApp & Atendimento</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Sparkles className="w-4 h-4 text-[#D4963B] mt-1 shrink-0" />
                <div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#F4F1EA] hover:text-[#F5B841] font-medium transition-colors"
                  >
                    <span>{INSTAGRAM_HANDLE}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <div className="text-xs text-[#F4F1EA]/55">Instagram Oficial</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="lg:col-span-7 bg-[#151515] border border-white/10 rounded-sm p-6 sm:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#F4F1EA]/70 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Ex.: Ana Natália"
                  className="w-full px-4 py-3 rounded-sm bg-[#0E0E0E] border border-white/15 text-sm text-[#F4F1EA] placeholder:text-white/30 focus:outline-none focus:border-[#D4963B]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.16em] text-[#F4F1EA]/70 mb-2">
                  Ambiente Principal
                </label>
                <select
                  value={formData.ambiente}
                  onChange={(e) =>
                    setFormData({ ...formData, ambiente: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-sm bg-[#0E0E0E] border border-white/15 text-sm text-[#F4F1EA] focus:outline-none focus:border-[#D4963B]"
                >
                  <option>Cozinha Planejada & Ilha</option>
                  <option>Suíte Master & Closet</option>
                  <option>Living, Home & Painéis</option>
                  <option>Escritório & Espaço Comercial</option>
                  <option>Casa / Apartamento Completo</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.16em] text-[#F4F1EA]/70 mb-2">
                Detalhes do Projeto
              </label>
              <textarea
                rows={4}
                value={formData.mensagem}
                onChange={(e) =>
                  setFormData({ ...formData, mensagem: e.target.value })
                }
                placeholder="Conte brevemente sobre o espaço, medidas estimadas ou prazo desejado..."
                className="w-full px-4 py-3 rounded-sm bg-[#0E0E0E] border border-white/15 text-sm text-[#F4F1EA] placeholder:text-white/30 focus:outline-none focus:border-[#D4963B]"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              {sentFeedback ? (
                <span className="inline-flex items-center gap-2 text-xs text-[#F5B841]">
                  <CheckCircle2 className="w-4 h-4" /> Redirecionando para o WhatsApp...
                </span>
              ) : (
                <span className="text-xs text-[#F4F1EA]/50">
                  Resposta rápida via WhatsApp ({PHONE_DISPLAY})
                </span>
              )}

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D4963B] text-[#0E0E0E] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#F5B841] transition-colors cursor-pointer"
              >
                <span>Enviar pelo WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0A0A0A] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#F4F1EA]/55">
          <div>
            INOVARE ambientes projetados • {ADDRESS_LINE} ({CEP_LINE})
          </div>
          <div className="flex items-center gap-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5B841] transition-colors"
            >
              {INSTAGRAM_HANDLE}
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5B841] transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </footer>

      {modalProject && (
        <div
          onClick={() => setModalProject(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#151515] border border-white/15 rounded-sm overflow-hidden shadow-2xl"
          >
            <div className="relative h-64 sm:h-72 w-full">
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setModalProject(null)}
                aria-label="Fechar modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0E0E0E]/85 border border-white/15 flex items-center justify-center text-[#F4F1EA] hover:text-[#F5B841] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.18em] text-[#D4963B]">
                <span>{modalProject.category}</span>
                <span>{modalProject.area}</span>
              </div>

              <h3 className="font-serif text-3xl text-[#F4F1EA]">
                {modalProject.title}
              </h3>

              <p className="text-sm text-[#F4F1EA]/75 leading-relaxed">
                {modalProject.summary}
              </p>

              {Array.isArray(modalProject.highlights) && modalProject.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {modalProject.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#0E0E0E] border border-white/10 text-xs text-[#F4F1EA]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setModalProject(null)}
                  className="text-xs uppercase tracking-[0.16em] text-[#F4F1EA]/60 hover:text-[#F4F1EA] cursor-pointer"
                >
                  Fechar
                </button>
                <a
                  href={buildWhatsAppLink(
                    `Olá! Vi o projeto "${modalProject.title}" no site da INOVARE ambientes projetados e gostaria de um orçamento semelhante.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D4963B] text-[#0E0E0E] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#F5B841] transition-colors"
                >
                  <span>Solicitar orçamento deste estilo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}