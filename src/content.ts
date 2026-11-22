// Tots els textos de la pàgina, en un sol lloc.
// Dades de contacte: es defineixen un sol cop a `phone` i `email`, més avall.

// Les rutes d'imatge passen per la base del build: a GitHub Pages la web viu
// sota /vora-digital/ i no a l'arrel del domini, i en local a l'arrel.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const brand = {
  name: 'Vora Digital',
  parts: ['Vora', 'Digital'],
  // Símbol de la marca (Cinta V sobre fons negre). Si es canvia, ha de començar
  // per '/' o 'http'; si no, es mostra el símbol de text de reserva.
  logo: asset('/images/logo-mark.svg'),
  town: 'Manresa',
}

// Contacte del negoci. El número s'escriu sense espais i amb prefix 34.
const phone = { display: '623 61 03 31', digits: '34623610331' }
const email = 'voradigital.web@gmail.com'
const links = {
  whatsapp: `https://wa.me/${phone.digits}`,
  tel: `tel:+${phone.digits}`,
  mail: `mailto:${email}`,
}

export const nav = {
  links: [
    { label: 'Sectors', href: '#sectors' },
    { label: 'Què inclou', href: '#inclou' },
    { label: 'Procés', href: '#proces' },
    { label: 'Preus', href: '#preus' },
    { label: 'Preguntes', href: '#preguntes' },
  ],
  cta: { label: 'Demanar informació', href: '#contacte' },
}

export const hero = {
  kicker: 'Manresa · Bages i rodalia',
  title: 'La web que el teu negoci necessita,',
  titleSecond: 'feta',
  accent: 'aquí al costat',
  lead: 'Creo webs pròpies per a negocis petits de Manresa, el Bages i els pobles del voltant: clares, pensades per al mòbil i fetes a partir de plantilles que adapto a cada negoci.',
  primary: { label: 'Demanar informació', href: '#contacte' },
  secondary: { label: 'Veure els preus', href: '#preus' },
  points: ['Sense quotes mensuals obligatòries', 'Domini al teu nom', 'Dues rondes de canvis incloses'],
  image: asset('/images/hero.jpg'),
  imageAlt: 'Mostrador d’un petit negoci amb un ordinador i un mòbil',
  imageNote: 'Dissenyada primer per al mòbil',
}

export const sectors = {
  eyebrow: 'Per a qui treballo',
  title: 'Negocis de proximitat, webs de proximitat',
  description:
    'La majoria de la gent et buscarà al telèfon abans de passar pel local. Aquests són els negocis amb què més treballo.',
  items: [
    {
      key: 'salut',
      name: 'Salut',
      text: 'Consultes, fisioteràpia, odontologia o psicologia. Una web serena que explica què fas i com demanar hora.',
      points: ['Serveis i especialitats', 'Equip i titulacions', 'Horaris i com arribar-hi'],
      image: asset('/images/sector-salut.jpg'),
      imageAlt: 'Sala de tractament d’una consulta petita, amb llum natural',
      example: 'https://vora-webs.vercel.app/s/fisio-cardener',
    },
    {
      key: 'bellesa',
      name: 'Bellesa',
      text: 'Perruqueries, barberies i centres d’estètica. Que la primera impressió en pantalla sigui tan bona com la del local.',
      points: ['Serveis i preus orientatius', 'Treballs i estil', 'Reserves per WhatsApp'],
      image: asset('/images/sector-bellesa.jpg'),
      imageAlt: 'Detall d’un estudi de bellesa amb mirall i prestatges',
      example: 'https://vora-webs.vercel.app/s/estudi-alba',
    },
    {
      key: 'restauracio',
      name: 'Restauració',
      text: 'Restaurants, bars i cases de menjars. La carta, els horaris i les reserves, ben visibles abans que algú altre els trobi.',
      points: ['Carta i menús', 'Reserves i contacte', 'Horaris i festius'],
      image: asset('/images/sector-restauracio.jpg'),
      imageAlt: 'Menjador d’un restaurant petit amb taules parades',
      example: 'https://vora-webs.vercel.app/s/brasa-del-pont',
    },
  ],
  examplesLabel: 'Veure una web d’exemple',
  examplesNote: 'Els exemples són negocis inventats, fets amb les mateixes plantilles que faig servir per als clients.',
}

export const includes = {
  eyebrow: 'Què inclou',
  title: 'Tot el que un client mira abans de trucar',
  description: 'Cada web surt amb aquestes peces resoltes. Després hi afegeixo el que el teu negoci necessiti.',
  items: [
    { key: 'portada', title: 'Portada visual', text: 'Una primera pantalla que diu en dos segons què fas i on ets.' },
    { key: 'serveis', title: 'Serveis', text: 'Què ofereixes, explicat amb paraules que entén tothom.' },
    { key: 'equip', title: 'Equip', text: 'Qui hi ha darrere: noms, fotos i trajectòria.' },
    { key: 'opinions', title: 'Opinions', text: 'Un espai per a les valoracions reals dels teus clients.' },
    { key: 'horaris', title: 'Horaris', text: 'Obertura, festius i com arribar-hi, sempre al dia.' },
    { key: 'contacte', title: 'Contacte', text: 'Telèfon, correu i formulari que arriben on han d’arribar.' },
    { key: 'whatsapp', title: 'WhatsApp', text: 'Un botó directe, perquè ningú no hagi de copiar números.' },
    { key: 'legal', title: 'Informació legal', text: 'Avís legal, privacitat i cookies en regla des del primer dia.' },
  ],
}

export const process = {
  eyebrow: 'Com treballo',
  title: 'Quatre passes i cap sorpresa',
  description: 'Un procés senzill, pensat perquè sàpigues sempre en quin punt ets i què toca després.',
  steps: [
    {
      title: 'Parlem del negoci',
      text: 'Una conversa distesa, per telèfon o al teu local. M’expliques què fas, qui és el teu client i què vols resoldre.',
    },
    {
      title: 'Et preparo una proposta',
      text: 'Amb l’abast, el preu i la data d’entrega per escrit. Sense lletra petita: saps què inclou abans de dir sí.',
    },
    {
      title: 'Ho revisem junts',
      text: 'Et mostro el disseny i els textos. Dues rondes de canvis incloses per ajustar el que calgui.',
    },
    {
      title: 'La publiquem',
      text: 'Quan hi dones el vistiplau, penjo la web amb el teu domini, el primer any inclòs. Des d’aquell dia és teva.',
    },
  ],
  note: 'El preu, l’abast i la data d’entrega queden per escrit a la proposta, abans de començar.',
}

export const plans = {
  eyebrow: 'Plans i preus',
  title: 'Tres maneres de començar',
  description:
    'El preu final depèn de les seccions i del contingut que calgui. T’ho concreto a la proposta, abans de començar.',
  vatNote: 'Tots els imports són sense IVA.',
  tiers: [
    {
      name: 'Bàsic',
      price: 450,
      tag: 'Per començar',
      text: 'Una web senzilla i ben resolta, a partir d’una plantilla adaptada al teu negoci.',
      cta: 'Demanar informació',
    },
    {
      name: 'Estàndard',
      price: 690,
      tag: 'El més recomanat',
      featured: true,
      text: 'Amb més espai per explicar el negoci: la web que respon les preguntes abans que et truquin.',
      cta: 'Demanar informació',
    },
    {
      name: 'Alta gamma',
      price: 1500,
      tag: 'A mida',
      text: 'Dissenyada des de zero per al teu negoci, sense partir de cap plantilla.',
      cta: 'Demanar informació',
    },
  ],
  includedTitle: 'En tots els plans',
  included: [
    '50 % a l’inici i 50 % a l’entrega',
    'Dues rondes de canvis incloses',
    'Domini al teu nom, primer any inclòs',
    'Cap quota mensual obligatòria',
  ],
  maintenance: {
    title: 'Manteniment opcional',
    text: 'Si vols que m’ocupi de les actualitzacions i dels canvis petits, ho pots contractar. A la proposta et detallo què inclou cada opció.',
    options: [
      { name: 'Essencial', price: 29 },
      { name: 'Plus', price: 49 },
    ],
    note: 'Sense manteniment, els canvis es cobren a 30 €/hora.',
  },
}

export const faq = {
  eyebrow: 'Preguntes freqüents',
  title: 'El que tothom pregunta abans de començar',
  items: [
    {
      q: 'Quant triga tenir la web enllestida?',
      a: 'Depèn de la mida de la web i, sobretot, de tenir els textos i les fotos a punt. A la proposta et dono una data d’entrega abans de començar, perquè sàpigues quan la tindràs.',
    },
    {
      q: 'Què he de preparar jo?',
      a: 'El que només tu saps: què ofereixes, horaris, telèfon, adreça, fotos del local o de la feina i el logotip si en tens. Si no tens textos o fotos a mà, t’ajudo a decidir què cal ensenyar i en quin ordre.',
    },
    {
      q: 'Quants canvis puc demanar?',
      a: 'Dues rondes de canvis estan incloses en tots els plans. Una ronda vol dir que em passes tots els retocs junts i els aplico. Si cal més feina, et passo pressupost abans de fer-la.',
    },
    {
      q: 'El domini serà meu?',
      a: 'Sí. El domini es registra al teu nom i el primer any va inclòs. A partir del segon any, la renovació és a càrrec teu i et diré el preu abans.',
    },
    {
      q: 'He de pagar manteniment cada mes?',
      a: 'No. Cap pla porta quota mensual obligatòria. Si vols, pots contractar el manteniment Essencial (29 €/mes) o Plus (49 €/mes). Si no, els canvis que demanis es cobren a 30 €/hora.',
    },
    {
      q: 'Els preus porten IVA?',
      a: 'No. Els imports que veus són sense IVA, i a la proposta hi surt el total desglossat abans de començar.',
    },
    {
      q: 'Treballes fora del Bages?',
      a: 'Treballo des de Manresa per a negocis del Bages i dels pobles del voltant. Si ets una mica més enllà, escriu-me: si ho puc fer bé, ho faig.',
    },
  ],
}

export const contact = {
  eyebrow: 'Parlem-ne',
  title: 'Explica’m què tens al cap',
  lead: 'Digues-me com es diu el negoci, què fas i on ets. Si ja tens web, hi faig una ullada. Et responc amb les preguntes que calguin i una proposta.',
  whatsapp: { label: 'Escriure per WhatsApp', value: phone.display, href: links.whatsapp },
  email: { label: 'Enviar un correu', value: email, href: links.mail },
  phone: { label: 'Trucar', value: phone.display, href: links.tel },
  note: 'Soc a Manresa. Parlem per telèfon, per WhatsApp o al teu local, com et vagi millor.',
}

export const footer = {
  blurb: 'Webs per a negocis petits del Bages. Fetes aquí, pensades per al mòbil i propietat teva.',
  columns: [
    {
      title: 'La pàgina',
      links: [
        { label: 'Sectors', href: asset('#sectors') },
        { label: 'Què inclou', href: asset('#inclou') },
        { label: 'Procés', href: asset('#proces') },
        { label: 'Preus', href: asset('#preus') },
        { label: 'Preguntes', href: asset('#preguntes') },
      ],
    },
    {
      title: 'Contacte',
      links: [
        { label: `WhatsApp · ${phone.display}`, href: links.whatsapp },
        { label: `Telèfon · ${phone.display}`, href: links.tel },
        { label: `Correu · ${email}`, href: links.mail },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Avís legal', href: asset('avis-legal/') },
        { label: 'Privacitat', href: asset('privacitat/') },
        { label: 'Cookies', href: asset('cookies/') },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Vora Digital · ${brand.town}`,
}
