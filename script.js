const siteHeader = document.querySelector(".site-header");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navigationLinks = document.querySelectorAll(".main-nav a");
const productTabs = document.querySelectorAll(".product-tab");
const productPanel = document.getElementById("productPanel");
const faqItems = document.querySelectorAll(".faq-item");
const calculatorFields = {
  hives: {
    input: document.getElementById("hivesInput"),
    output: document.getElementById("hivesOutput")
  },
  production: {
    input: document.getElementById("productionInput"),
    output: document.getElementById("productionOutput")
  },
  price: {
    input: document.getElementById("priceInput"),
    output: document.getElementById("priceOutput")
  }
};
const annualRevenue = document.getElementById("annualRevenue");
const revenueDetail = document.getElementById("revenueDetail");
const products = {
  mel: {
    kicker: "PRODUTO MAIS CONHECIDO",
    title: "Mel com identidade local",
    description: "A florada, o território e o modo de produção criam sabores próprios. Embalagem, origem e venda direta podem aumentar o valor percebido.",
    potential: "Venda direta e mercados locais",
    differential: "Origem e qualidade",
    icon: "#icon-jar"
  },
  propolis: {
    kicker: "VALOR EM PEQUENO VOLUME",
    title: "Própolis e seus extratos",
    description: "Com manejo adequado e processamento responsável, a própolis pode ampliar o portfólio e alcançar mercados especializados.",
    potential: "Lojas naturais e parcerias",
    differential: "Processamento e rastreabilidade",
    icon: "#icon-leaf"
  },
  cera: {
    kicker: "APROVEITAMENTO INTEGRAL",
    title: "Cera transformada em novos produtos",
    description: "A cera pode ser usada em velas, cosméticos e peças artesanais, estimulando novas habilidades e negócios dentro da comunidade.",
    potential: "Artesanato e cosméticos",
    differential: "Design e transformação local",
    icon: "#icon-hive"
  },
  polinizacao: {
    kicker: "SERVIÇO PARA O CAMPO",
    title: "Polinização que melhora cultivos",
    description: "Colmeias manejadas podem apoiar agricultores durante floradas específicas, desde que o serviço seja planejado com segurança e equilíbrio ambiental.",
    potential: "Parcerias com produtores",
    differential: "Conhecimento técnico",
    icon: "#icon-flower"
  }
};
function toggleMenu(forceClose = false) {
  const shouldOpen = forceClose ? false : !mainNav.classList.contains("open");
  mainNav.classList.toggle("open", shouldOpen);
  menuToggle.classList.toggle("active", shouldOpen);
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  document.body.style.overflow = shouldOpen ? "hidden" : "";
}
function updateHeader() {
  siteHeader.classList.toggle("scrolled", window.scrollY > 20);
}
function updateRangeProgress(input) {
  const progress = ((input.value - input.min) / (input.max - input.min)) * 100;
  input.style.setProperty("--range-progress", `${progress}%`);
}
function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(value);
}
function formatNumber(value) {
  return new Intl.NumberFormat("pt-BR").format(value);
}
function updateCalculator() {
  const hives = Number(calculatorFields.hives.input.value);
  const production = Number(calculatorFields.production.input.value);
  const price = Number(calculatorFields.price.input.value);
  const totalProduction = hives * production;
  const revenue = totalProduction * price;
  calculatorFields.hives.output.textContent = formatNumber(hives);
  calculatorFields.production.output.textContent = `${formatNumber(production)} kg/colmeia`;
  calculatorFields.price.output.textContent = `${formatCurrency(price)}/kg`;
