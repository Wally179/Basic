/* =========================================
   1. MOUSE SHINE EFFECT (Efeito de rastro do mouse)
   ========================================= */
const shine = document.getElementById("mouse-shine");
if (shine) {
  document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
      shine.style.left = e.clientX + "px";
      shine.style.top = e.clientY + "px";
    });
  });
}

/* =========================================
   2. NAVBAR & MOBILE MENU (Lógica de navegação)
   ========================================= */
const navbar = document.getElementById("navbar");
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

// Efeito de "zoom" na navbar ao rolar a página
if (navbar) {
  window.addEventListener("scroll", () => {
    if (menu && menu.classList.contains("hidden")) {
      if (window.scrollY > 50) {
        navbar.classList.remove("w-11/12");
        navbar.classList.add("w-fit");
      } else {
        navbar.classList.add("w-11/12");
        navbar.classList.remove("w-fit");
      }
    }
  });
}

// Abrir/Fechar Menu Mobile
if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (!menu.classList.contains("hidden")) {
      if (navbar) {
        navbar.classList.add("w-11/12");
        navbar.classList.remove("w-fit");
      }
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

/* =========================================
   3. SISTEMA DE TRADUÇÃO (i18n)
   ========================================= */
const translations = {
  pt: {
    // --- GERAL ---
    project_back: "Voltar",

    // --- NAV ---
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_journey: "Jornada",
    nav_arsenal: "Arsenal",
    nav_contact: "Contratar",

    // --- HERO (HOME) ---
    hero_availability: "Disponível para novos projetos",
    hero_role: "Desenvolvedor & UX Architect",
    hero_desc:
      "Unindo a precisão da engenharia de software com a empatia do UX Design. Especialista em transformar requisitos complexos em interfaces performáticas, acessíveis e escaláveis com React e Next.js.",
    hero_btn_projects: "Ver Projetos",

    // --- ABOUT (HOME) ---
    about_title: "O Elo Perdido entre Design e Código",
    about_p1:
      "Minha jornada não começou no frontend, mas nas 'entranhas' da tecnologia. Como técnico de redes, aprendi a importância da infraestrutura sólida e da resolução rápida de problemas.",
    about_p2:
      "Porém, percebi que sistemas robustos falham se não forem utilizáveis. Mergulhei no UX Design para entender o fator humano. Hoje, como <strong>Engenheiro de Software</strong>, eu não apenas 'traduzo' layouts.",
    about_p3:
      "Eu arquiteturo interfaces que respeitam a intenção do design (pixel-perfect) enquanto mantenho o código limpo, testável e acessível.",

    // --- PROJECTS CARDS (HOME) ---
    bloom_desc:
      "Plataforma SaaS focada em ESG. Renderização de milhares de dados sem travar a thread principal.",
    festfast_desc:
      "Marketplace mobile para festas infantis. Focado em micro-interações fluídas e animações Lottie.",
    blueprint_desc:
      "Plataforma completa de gestão de conferências e venda de ingressos com Next.js.",
    btn_view_case: "Ver Case",

    // --- JOURNEY & ARSENAL (HOME) ---
    journey_title: "Trajetória de Impacto",
    arsenal_title: "Arsenal Técnico",
    arsenal_front: "Frontend Moderno",
    arsenal_design: "Design & UX",
    arsenal_back: "Backend & Qualidade",
    footer_title: "Vamos construir o futuro?",
    footer_desc: "Estou pronto para elevar o nível do seu produto.",

    // --- PAGE: BLOOM (PROJETO ESPECÍFICO) ---
    bloom_hero_desc:
      "Ecossistema de inteligência de dados para conformidade ESG global. Transformando diretrizes da ONU em interfaces de alta performance e decisão estratégica.",
    bloom_nda:
      "Nota: Métricas sensíveis e logos de clientes foram anonimizados sob NDA.",
    bloom_context_title: "O Cenário Global",
    bloom_context_p1:
      "O Bloom atua como a espinha dorsal tecnológica para corporações que precisam comprovar conformidade com os <strong>17 Objetivos de Desenvolvimento Sustentável (ODS) da ONU</strong>. Não é apenas sobre exibir dados; é sobre rastrear impacto ambiental e social em cadeias de suprimentos complexas.",
    bloom_context_p2:
      "O desafio de engenharia era monumental: a plataforma precisava processar e cruzar terabytes de dados de auditoria. Meu papel foi arquitetar um Frontend capaz de suportar essa <strong>densidade de informação</strong>, garantindo que a complexidade dos dados nunca comprometesse a fluidez da navegação (60 FPS).",
    bloom_stack_title: "Arquitetura & Engenharia",
    stack_frontend: "Frontend Core",
    stack_backend: "Backend",
    stack_quality: "Qualidade",
    stack_devops: "DevOps/Agile",
    bloom_challenge_title: "O Gargalo de Performance",
    bloom_challenge_desc:
      "A renderização inicial dos relatórios carregava mais de <strong>25.000 nós no DOM</strong> simultaneamente, travando a Main Thread. O desafio era manter a busca global e ordenação no cliente sem travar a UI.",
    bloom_solution_title: "A Solução Técnica",
    bloom_solution_desc:
      "Implementei uma estratégia de <strong>Virtualização (Windowing)</strong> customizada e desacoplei a lógica de negócio usando princípios **SOLID**, garantindo manutenibilidade e performance extrema.",

    // --- PAGE: EM DESENVOLVIMENTO (FESTFAST/BLUEPRINT) ---
    dev_title: "Em Desenvolvimento",
    dev_desc:
      "Estou compilando a documentação técnica e preparando os prints deste projeto. Em breve você verá a arquitetura completa aqui.",
    dev_term_branch: "On branch feature/documentation",
    dev_term_changes: "Changes not staged for commit:",
    dev_btn_back: "Voltar para a Home",
  },
  en: {
    // --- GENERAL ---
    project_back: "Back",

    // --- NAV ---
    nav_about: "About",
    nav_projects: "Projects",
    nav_journey: "Journey",
    nav_arsenal: "Arsenal",
    nav_contact: "Hire Me",

    // --- HERO (HOME) ---
    hero_availability: "Available for new projects",
    hero_role: "Developer & UX Architect",
    hero_desc:
      "Merging software engineering precision with UX Design empathy. Specialist in transforming complex requirements into performant interfaces using React and Next.js.",
    hero_btn_projects: "View Projects",

    // --- ABOUT (HOME) ---
    about_title: "The Missing Link Between Design and Code",
    about_p1:
      "My journey started in the 'guts' of technology as a Network Technician. I learned the importance of solid infrastructure and fast troubleshooting.",
    about_p2:
      "I realized robust systems fail if they aren't usable. I dove into UX Design to understand the human factor. As a <strong>Software Engineer</strong>, I don't just 'translate' layouts.",
    about_p3:
      "I architect interfaces that respect design intent (pixel-perfect) while keeping code clean, testable, and accessible.",

    // --- PROJECTS CARDS (HOME) ---
    bloom_desc:
      "SaaS platform focused on ESG. Engineered to render thousands of data points without blocking the main thread.",
    festfast_desc:
      "Mobile marketplace for children's parties. Featuring rich Lottie animations and seamless UX.",
    blueprint_desc:
      "End-to-end conference management and ticketing platform built with Next.js.",
    btn_view_case: "View Case",

    // --- JOURNEY & ARSENAL (HOME) ---
    journey_title: "Impact Journey",
    arsenal_title: "Technical Arsenal",
    arsenal_front: "Modern Frontend",
    arsenal_design: "Design & UX",
    arsenal_back: "Backend & Quality",
    footer_title: "Let's build the future?",
    footer_desc: "I'm ready to elevate your product with clean code.",

    // --- PAGE: BLOOM (SPECIFIC PROJECT) ---
    bloom_hero_desc:
      "Data intelligence ecosystem for global ESG compliance. Transforming UN guidelines into high-performance, strategic decision-making interfaces.",
    bloom_nda:
      "Note: Sensitive metrics and client logos have been anonymized under NDA.",
    bloom_context_title: "The Global Scenario",
    bloom_context_p1:
      "Bloom acts as the technological backbone for corporations verifying compliance with the <strong>UN's 17 Sustainable Development Goals (SDGs)</strong>. It goes beyond data display; it tracks environmental and social impact across complex supply chains.",
    bloom_context_p2:
      "The engineering challenge was monumental: the platform had to process and cross-reference terabytes of audit data. My role was to architect a Frontend capable of handling this <strong>information density</strong>, ensuring data complexity never compromised navigation fluidity (60 FPS).",
    bloom_stack_title: "Architecture & Tech Stack",
    stack_frontend: "Frontend Core",
    stack_backend: "Backend",
    stack_quality: "Quality Assurance",
    stack_devops: "DevOps/Agile",
    bloom_challenge_title: "The Performance Bottleneck",
    bloom_challenge_desc:
      "Initial report rendering loaded over <strong>25,000 DOM nodes</strong> simultaneously, freezing the Main Thread. The challenge was keeping features active without locking the UI.",
    bloom_solution_title: "The Technical Solution",
    bloom_solution_desc:
      "I implemented a custom <strong>Virtualization (Windowing)</strong> strategy and decoupled business logic using <strong>SOLID</strong> principles, ensuring maintainability and extreme performance.",

    // --- PAGE: UNDER DEVELOPMENT (FESTFAST/BLUEPRINT) ---
    dev_title: "Under Development",
    dev_desc:
      "I am currently compiling technical documentation and preparing screenshots. You will see the full architecture here soon.",
    dev_term_branch: "On branch feature/documentation",
    dev_term_changes: "Changes not staged for commit:",
    dev_btn_back: "Back to Home",
  },
};

let currentLang = localStorage.getItem("preferredLang") || "pt";

function updateContent(lang) {
  // 1. Atualiza textos via data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.style.opacity = "0";
      setTimeout(() => {
        element.innerHTML = translations[lang][key];
        element.style.opacity = "1";
      }, 150);
    }
  });

  // 2. Atualiza botão da Home
  const langLabel = document.getElementById("current-lang");
  if (langLabel) {
    langLabel.innerText = lang === "pt" ? "PT" : "EN";
  }

  // 3. Atualiza botões da página Em Desenvolvimento
  const btnPt = document.getElementById("btn-pt");
  const btnEn = document.getElementById("btn-en");
  if (btnPt && btnEn) {
    // Remove classes antigas e aplica novas baseadas na seleção
    if (lang === "pt") {
      btnPt.classList.remove("text-slate-400", "hover:text-white");
      btnPt.classList.add(
        "bg-emerald-500/20",
        "text-emerald-400",
        "border",
        "border-emerald-500/30"
      );

      btnEn.classList.add("text-slate-400", "hover:text-white");
      btnEn.classList.remove(
        "bg-emerald-500/20",
        "text-emerald-400",
        "border",
        "border-emerald-500/30"
      );
    } else {
      btnEn.classList.remove("text-slate-400", "hover:text-white");
      btnEn.classList.add(
        "bg-emerald-500/20",
        "text-emerald-400",
        "border",
        "border-emerald-500/30"
      );

      btnPt.classList.add("text-slate-400", "hover:text-white");
      btnPt.classList.remove(
        "bg-emerald-500/20",
        "text-emerald-400",
        "border",
        "border-emerald-500/30"
      );
    }
  }

  // 4. Salva a preferência
  localStorage.setItem("preferredLang", lang);
  currentLang = lang;
}

// Expondo globalmente para uso nos botões HTML
window.changeLanguage = function (lang) {
  updateContent(lang);
};

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang");
  const browserLang = navigator.language || navigator.userLanguage;

  if (savedLang) {
    updateContent(savedLang);
  } else if (browserLang && browserLang.includes("en")) {
    updateContent("en");
  } else {
    updateContent("pt");
  }

  // Evento do botão da Home
  const langBtn = document.getElementById("lang-switch");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const newLang = currentLang === "pt" ? "en" : "pt";
      updateContent(newLang);
    });
  }
});
