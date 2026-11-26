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
  zone: 'Bages i Catalunya Central',
  comarques: 'Bages, Moianès, Solsonès, Berguedà, Anoia i Osona',
}

// Contacte del negoci. El número s'escriu sense espais i amb prefix 34.
const phone = { display: '623 61 03 31', digits: '34623610331' }
const email = 'voradigital.web@gmail.com'
const links = {
  whatsapp: `https://wa.me/${phone.digits}`,
  tel: `tel:+${phone.digits}`,
  mail: `mailto:${email}`,
}

// WhatsApp amb el missatge ja escrit, per demanar un servei o un pack solt.
export const whatsappFor = (message: string) => `${links.whatsapp}?text=${encodeURIComponent(message)}`

export const nav = {
  links: [
    { label: 'Sectors', href: '#sectors' },
    { label: 'Què inclou', href: '#inclou' },
    { label: 'Procés', href: '#proces' },
    { label: 'Preus', href: '#preus' },
    { label: 'Serveis', href: '#serveis' },
    { label: 'Preguntes', href: '#preguntes' },
  ],
  cta: { label: 'Demanar informació', href: '#contacte' },
}

export const hero = {
  kicker: `Manresa · ${brand.zone}`,
  title: 'Ajudo els negocis petits de la Catalunya Central a no perdre clients:',
  accent: 'web, reserves, recordatoris i un assistent que respon quan tu no pots.',
  lead: 'Fet amb eines d’IA: més ràpid i més barat, però amb tracte de proximitat.',
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
    'La majoria de la gent et buscarà al telèfon abans de passar pel local. Aquests són els negocis amb què més treballo al Bages i a la resta de la Catalunya Central.',
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
    {
      key: 'allotjament',
      name: 'Allotjament rural',
      text: 'Cases rurals, masies i petits allotjaments. Que qui busca escapada vegi les habitacions, l’entorn i com fer la reserva.',
      points: ['Habitacions i fotos', 'Entorn i com arribar-hi', 'Consulta de disponibilitat'],
      image: asset('/images/sector-allotjament.jpg'),
      imageAlt: 'Habitació d’una casa rural amb parets de pedra i capçal de fusta blava',
      example: 'https://vora-webs.vercel.app/s/mas-de-la-boira',
    },
  ],
  examplesLabel: 'Veure un exemple',
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
    text: 'Si vols que m’ocupi de les actualitzacions i dels canvis petits, ho pots contractar. El Plus inclou, a més, un extra al teu gust: recordatoris de cita o assistent a la web.',
    options: [
      { name: 'Essencial', price: 29, text: 'Actualitzacions i canvis petits.' },
      { name: 'Plus', price: 49, text: 'A més, un extra: recordatoris o assistent.' },
    ],
    note: 'Sense manteniment, els canvis es cobren a 30 €/hora.',
  },
}

// Serveis que es poden contractar sols, sense fer la web.
export const services = {
  eyebrow: 'Fora de la web',
  title: 'Serveis per separat o combinats',
  description:
    'No cal que facis la web amb mi. Pots contractar només l’app, només l’assistent, només les reserves o els recordatoris, i els connecto a la web que ja tinguis o a Google i WhatsApp.',
  ctaLabel: 'Vull només això',
  note: 'Preus «des de», sense IVA. Si ja tens web, hi connecto el servei; si no, també te’n puc fer una.',
  items: [
    {
      key: 'google',
      name: 'Fitxa de Google al dia',
      problem: 'Que et trobin i vegin les dades bones.',
      text: 'Deixo la teva fitxa de Google amb els horaris, el telèfon, les fotos i els serveis correctes, que és el primer que mira qui et busca pel nom.',
      price: '90 €',
      period: 'pagament únic',
      from: true,
      href: whatsappFor('Hola, m’interessa només la fitxa de Google al dia'),
    },
    {
      key: 'reserves',
      name: 'Reserva online',
      problem: 'Que triïn dia i hora sense trucar.',
      text: 'Un calendari a la web amb els teus horaris reals: el client reserva quan li va bé, encara que tu estiguis treballant.',
      price: '150 €',
      period: 'pagament únic',
      from: true,
      href: whatsappFor('Hola, m’interessa només la reserva online'),
    },
    {
      key: 'recordatoris',
      name: 'Recordatoris de cita',
      problem: 'Menys gent que no es presenta.',
      text: 'Cada client rep un correu automàtic 24 hores abans de la cita, amb l’hora, l’adreça i com canviar-la si no pot venir.',
      price: '150 €',
      period: '+ 15 €/mes',
      from: true,
      href: whatsappFor('Hola, m’interessa només els recordatoris de cita'),
    },
    {
      key: 'assistent',
      name: 'Assistent a la web 24 h',
      problem: 'Que ningú no es quedi sense resposta.',
      text: 'Respon horaris, preus i serveis quan tu no hi ets, i passa a WhatsApp els casos que necessiten una persona.',
      price: '250 €',
      period: '+ 19 €/mes',
      from: true,
      href: whatsappFor('Hola, m’interessa només l’assistent a la web'),
    },
    {
      key: 'app',
      name: 'App per al mòbil',
      problem: 'Que tornin sense targetes de paper.',
      text: 'Targeta de punts, avisos i carta al mòbil del client, amb la teva marca. Et passo pressupost segons què hi vulguis.',
      price: 'a consultar',
      period: '',
      from: false,
      href: whatsappFor('Hola, m’interessa només l’app per al mòbil'),
    },
  ],
}

// Packs: la web amb els serveis que la fan rendir més.
export const packs = {
  eyebrow: 'Packs',
  title: 'Si ho vols tot, surt més a compte',
  description:
    'Dos conjunts pensats per a negocis que reben clients amb hora. Surten més barats que contractar les peces per separat.',
  cta: 'Vull aquest pack',
  note: 'Els packs inclouen el manteniment Plus (49 €/mes) mentre duri el servei. Tots els imports són sense IVA.',
  items: [
    {
      key: 'cita',
      name: 'Pack Cita',
      audience: 'Perruqueries, fisios i tallers',
      text: 'Per a qui rep clients amb hora reservada: que en triïn una des de la web i que ningú no se n’oblidi.',
      includes: ['Web Estàndard', 'Reserva online', 'Recordatoris de cita'],
      price: 890,
      maintenance: 'Manteniment Plus',
      href: whatsappFor('Hola, m’interessa el Pack Cita'),
    },
    {
      key: 'bar',
      name: 'Pack Bar',
      audience: 'Bars i restaurants',
      text: 'Per a qui no pot atendre el telèfon a mig servei: l’assistent respon horaris, carta i reserves, i el que calgui passa a WhatsApp.',
      includes: ['Web Estàndard', 'Assistent a la web 24 h'],
      price: 890,
      maintenance: 'Manteniment Plus',
      href: whatsappFor('Hola, m’interessa el Pack Bar'),
    },
  ],
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
      a: 'No. Cap pla porta quota mensual obligatòria. Si vols, pots contractar el manteniment Essencial (29 €/mes) o Plus (49 €/mes), que a més inclou un extra: recordatoris de cita o assistent. Si no, els canvis que demanis es cobren a 30 €/hora.',
    },
    {
      q: 'Puc contractar només una part?',
      a: 'Sí. La reserva online, els recordatoris, l’assistent, la fitxa de Google o l’app es poden contractar sols, sense fer la web amb mi. Els connecto a la web que ja tinguis o a Google i WhatsApp.',
    },
    {
      q: 'Els preus porten IVA?',
      a: 'No. Els imports que veus són sense IVA, i a la proposta hi surt el total desglossat abans de començar.',
    },
    {
      q: 'Treballes fora de Manresa?',
      a: `Sí. Treballo des de Manresa per a negocis del ${brand.zone}: ${brand.comarques}. Si ets una mica més enllà, escriu-me: si ho puc fer bé, ho faig.`,
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
  blurb: `Webs i eines digitals per a negocis petits del ${brand.zone}. Fetes aquí, pensades per al mòbil i propietat teva.`,
  columns: [
    {
      title: 'La pàgina',
      links: [
        { label: 'Sectors', href: asset('#sectors') },
        { label: 'Què inclou', href: asset('#inclou') },
        { label: 'Procés', href: asset('#proces') },
        { label: 'Preus', href: asset('#preus') },
        { label: 'Serveis', href: asset('#serveis') },
        { label: 'Packs', href: asset('#packs') },
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
        { label: 'Avís legal', href: asset('avis-legal.html') },
        { label: 'Privacitat', href: asset('privacitat.html') },
        { label: 'Cookies', href: asset('cookies.html') },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Vora Digital · ${brand.town}`,
}
