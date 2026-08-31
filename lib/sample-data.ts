/**
 * Datos de ejemplo — copiados TAL CUAL de /home/vagent/hornada/plantillas.js
 * (el protocolo de hornadas), uno por cada tipo de pantalla, para probar que
 * las 16 plantillas de negocio le entran directo a estos componentes sin
 * transformar nada. Esto es solo para el showcase — en una app real, este
 * mismo shape sale de PLANTILLAS[i].pantallas[j].datos.
 */

export const chatDemo = {
  msgs: [
    { de: "u" as const, t: "Explícame la computación cuántica en 3 líneas" },
    {
      de: "a" as const,
      t: "Los bits cuánticos existen en superposición: son 0 y 1 a la vez. Eso permite explorar millones de soluciones en paralelo. El reto es mantener la coherencia el tiempo suficiente para calcular.",
    },
  ],
  sugerencias: ["Resume este documento", "Ideas para mi startup", "Depura mi código"],
};

export const gridDemo = {
  titulo: "Nuevo drop",
  prods: [
    { t: "Lámpara Ori", s: "$1,290", badge: "Nuevo" },
    { t: "Silla Nube", s: "$4,850" },
    { t: "Vaso Kumo ×2", s: "$390" },
    { t: "Mesa Ito", s: "$7,200", badge: "−15%" },
  ],
};

export const listDemo = {
  items: [
    { t: "Lámpara Ori", s: "Talla M · Cantidad 1", m: "$1,290" },
    { t: "Vaso Kumo ×2", s: "Set de 2", m: "$390" },
  ],
  cta: "Pagar $1,680",
};

export const detailDemo = {
  t: "Lámpara Ori",
  s: "Luz cálida regulable · 3 tamaños",
  precio: "$1,290",
  desc: "Aluminio anodizado y papel washi. Atenúa del 5% al 100% con un giro.",
  cta: "Añadir al carrito",
  specs: ["Envío 48 h", "Garantía 2 años", "4.9 ★ (212)"],
};

export const profileDemo = {
  nombre: "Marco Luna",
  correo: "marco@correo.com",
  menu: [{ t: "Mis pedidos" }, { t: "Direcciones" }, { t: "Métodos de pago" }, { t: "Devoluciones" }],
};

export const mapDemo = {
  origen: "Tu ubicación",
  destino: "Aeropuerto T1",
  eta: "4 min",
  opciones: [
    { t: "Económico", s: "4 min · Nissan Versa", p: "$182" },
    { t: "Confort", s: "6 min · Camry", p: "$248" },
    { t: "XL", s: "9 min · 6 lugares", p: "$310" },
  ],
};

export const dashboardDemo = {
  saldo: "$12,480.55",
  cambio: "+4.2% hoy",
  acciones: ["Enviar", "Recibir", "Swap"],
  movs: [
    { t: "ETH", s: "2.14 · Mainnet", m: "$7,905" },
    { t: "SOL", s: "18.2 · Solana", m: "$3,120" },
    { t: "USDC", s: "1,455 · Base", m: "$1,455" },
  ],
};

export const playerDemo = {
  t: "Texas Sun",
  s: "Khruangbin, Leon Bridges",
  cola: [
    { t: "Texas Sun", s: "Sonando", d: "4:12" },
    { t: "Show Me How", s: "Men I Trust", d: "3:37" },
    { t: "Cariño", s: "The Marías", d: "2:54" },
  ],
};

export const calendarDemo = {
  titulo: "Mesa para 2",
  slots: [
    { h: "19:00", t: "Terraza disponible", dispo: true },
    { h: "20:30", t: "Salón disponible", dispo: true },
    { h: "21:00", t: "Completo", dispo: false },
    { h: "21:30", t: "Barra disponible", dispo: true },
  ],
  cta: "Reservar 20:30",
};

export const feedDemo = {
  posts: [
    {
      a: "Rex Ortega",
      h: "@rexo · 2 min",
      t: "El mejor diseño es el que no se nota. El segundo mejor es el que no se olvida.",
      likes: "482",
      rep: "56",
    },
    {
      a: "Mia Chen",
      h: "@miach · 18 min",
      t: "Lanzamos la beta 🖤 300 lugares, link en el perfil.",
      likes: "1.2k",
      rep: "203",
    },
  ],
};

export const loginDemo = {
  titulo: "Bienvenido de nuevo",
  sub: "Entra para continuar",
};
