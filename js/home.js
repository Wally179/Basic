/* =========================================
   TERMINAL ANIMATION (Apenas na Home)
   ========================================= */
const terminalContent = [
  { text: "git checkout feature/bloom-architecture", type: "input" },
  {
    text: "Switched to branch 'feature/bloom-architecture'",
    type: "output",
    class: "info-text",
  },
  { text: "npm run test:e2e", type: "input" },
  { text: "Running Cypress tests...", type: "output" },
  {
    text: "✔ Authentication Flow (230ms)",
    type: "output",
    class: "success-text",
  },
  {
    text: "✔ Dashboard Rendering (450ms)",
    type: "output",
    class: "success-text",
  },
  {
    text: "✔ Data Visualization (320ms)",
    type: "output",
    class: "success-text",
  },
  { text: "docker build -t bloom-app:latest .", type: "input" },
  { text: "Building image...", type: "output" },
  {
    text: "Writing image sha256:8ca... done",
    type: "output",
    class: "info-text",
  },
  { text: "System Online 🚀", type: "output", class: "success-text font-bold" },
];

async function typeWriter(text, element, speed = 30) {
  for (let i = 0; i < text.length; i++) {
    element.innerHTML += text.charAt(i);
    await new Promise((r) => setTimeout(r, speed));
  }
}

async function runTerminal() {
  const container = document.getElementById("terminal-body");
  if (!container) return;

  for (const line of terminalContent) {
    const lineDiv = document.createElement("div");
    lineDiv.className = "terminal-line mb-1";

    if (line.type === "input") {
      const prompt = document.createElement("span");
      prompt.className = "command-prompt";
      prompt.innerHTML = "➜ ~";
      lineDiv.appendChild(prompt);
      const textSpan = document.createElement("span");
      textSpan.className = "terminal-output";
      lineDiv.appendChild(textSpan);
      container.appendChild(lineDiv);
      await typeWriter(line.text, textSpan);
    } else {
      lineDiv.className += " " + (line.class || "terminal-output");
      lineDiv.innerHTML = line.text;
      container.appendChild(lineDiv);
    }
    await new Promise((r) => setTimeout(r, 400));
    container.scrollTop = container.scrollHeight;
  }
  const cursorLine = document.createElement("div");
  cursorLine.className = "terminal-line";
  cursorLine.innerHTML =
    '<span class="command-prompt">➜ ~</span><span class="w-2 h-4 bg-emerald-500 animate-cursor inline-block ml-1"></span>';
  container.appendChild(cursorLine);
}
setTimeout(runTerminal, 1000);

/* =========================================
   STICKY SCROLL PROJECTS (Lógica Corrigida)
   ========================================= */

const projectIds = ["bloom", "festfast", "blueprint"];

function updateProjectUI(activeIndex) {
  projectIds.forEach((id, index) => {
    const content = document.getElementById(`content-${id}`);
    const tab = document.getElementById(`tab-${id}`);

    if (!content || !tab) return;

    if (index === activeIndex) {
      // Ativar
      content.classList.remove(
        "opacity-0",
        "translate-y-10",
        "pointer-events-none"
      );
      content.classList.add(
        "opacity-100",
        "translate-y-0",
        "pointer-events-auto",
        "z-10"
      );

      tab.classList.add("active", "text-emerald-400");
      tab.classList.remove("text-slate-500");
    } else {
      // Desativar
      content.classList.add(
        "opacity-0",
        "translate-y-10",
        "pointer-events-none"
      );
      content.classList.remove(
        "opacity-100",
        "translate-y-0",
        "pointer-events-auto",
        "z-10"
      );

      tab.classList.remove("active", "text-emerald-400");
      tab.classList.add("text-slate-500");
    }
  });
}

// 1. LISTENER DE SCROLL (Troca automática)
window.addEventListener("scroll", () => {
  const track = document.getElementById("projects-scroll-track");
  const progressBar = document.getElementById("scroll-progress");

  if (!track) return;

  // Cálculos matemáticos precisos
  const rect = track.getBoundingClientRect();
  const trackHeight = track.offsetHeight - window.innerHeight;

  // Progress vai de 0 a 1
  const progress = Math.max(0, Math.min(1, -rect.top / trackHeight));

  if (progressBar) {
    progressBar.style.width = `${progress * 100}%`;
  }

  // Define qual projeto mostrar (0, 1 ou 2)
  let activeIndex = 0;
  if (progress > 0.66) activeIndex = 2; // Blueprint (Fim)
  else if (progress > 0.33) activeIndex = 1; // FestFast (Meio)
  else activeIndex = 0; // Bloom (Início)

  updateProjectUI(activeIndex);
});

// 2. FUNÇÃO DE CLIQUE (Correção do "Scroll Aleatório")
function scrollToProject(index) {
  const track = document.getElementById("projects-scroll-track");
  if (!track) return;

  // CORREÇÃO AQUI:
  // Pegamos a posição absoluta do elemento na página usando getBoundingClientRect + scrollY
  // Isso garante que ele ache o lugar certo independente de estar dentro de divs relativas.
  const trackTopAbsolute = track.getBoundingClientRect().top + window.scrollY;
  const scrollableHeight = track.offsetHeight - window.innerHeight;

  // Definimos "pontos seguros" para garantir que caia no meio do projeto
  // Bloom (10%), FestFast (50%), Blueprint (90%)
  const safePoints = [0.1, 0.5, 0.9];

  const targetScroll = trackTopAbsolute + scrollableHeight * safePoints[index];

  window.scrollTo({
    top: targetScroll,
    behavior: "smooth",
  });
}
