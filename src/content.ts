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

// Botó principal de tota la pàgina: demanar una mostra per WhatsApp.
const mostra = {
  label: 'Demanar una mostra',
  href: whatsappFor('Hola, m’agradaria veure una mostra de com quedaria la web del meu negoci.'),
}

export const nav = {
  links: [
    { label: 'Sectors', href: '#sectors' },
    { label: 'Què inclou', href: '#inclou' },
    { label: 'Procés', href: '#proces' },
    { label: 'Preus', href: '#preus' },
    { label: 'Preguntes', href: '#preguntes' },
  ],
  cta: mostra,
}

export const hero = {
  kicker: `Manresa · ${brand.zone}`,
  title: 'La web del teu negoci, perquè et trobin al mòbil',
  accent: 'abans que la competència.',
  lead: 'Webs des de 450 € per a negocis de la Catalunya Central, amb el preu i la data d’entrega per escrit abans de començar.',
  primary: mostra,
  secondary: { label: 'Veure els preus', href: '#preus' },
  points: ['Mostra gratis i sense compromís', 'Domini al teu nom', 'Dues rondes de canvis incloses'],
  // Dos exemples reals fets amb les plantilles (negocis inventats), dins d'un mòbil.
  phones: [
    {
      image: asset('/images/hero-mobil-perruqueria.jpg'),
      alt: 'Exemple de web per a una perruqueria vista en un mòbil',
      href: 'https://vora-webs.vercel.app/s/estudi-alba',
    },
    {
      image: asset('/images/hero-mobil-casa-rural.jpg'),
      alt: 'Exemple de web per a una casa rural vista en un mòbil',
      href: 'https://vora-webs.vercel.app/s/mas-de-la-boira',
    },
  ],
  imageNote: 'Exemples fets amb les meves plantilles',
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
      cta: 'M’interessa el Bàsic',
      href: whatsappFor('Hola, m’interessa la web Bàsic (450 €).'),
    },
    {
      name: 'Estàndard',
      price: 690,
      tag: 'El més recomanat',
      featured: true,
      text: 'Amb més espai per explicar el negoci: la web que respon les preguntes abans que et truquin.',
      cta: 'M’interessa l’Estàndard',
      href: whatsappFor('Hola, m’interessa la web Estàndard (690 €).'),
    },
    {
      name: 'Alta gamma',
      price: 1500,
      tag: 'A mida',
      text: 'Dissenyada des de zero per al teu negoci, sense partir de cap plantilla.',
      cta: 'M’interessa l’Alta gamma',
      href: whatsappFor('Hola, m’interessa la web Alta gamma (1.500 €).'),
    },
  ],
  includedTitle: 'En tots els plans',
  included: [
    '50 % a l’inici i 50 % a l’entrega',
    'Dues rondes de canvis incloses',
    'Domini al teu nom, primer any inclòs',
    'Preu, abast i data d’entrega per escrit',
  ],
  maintenance: {
    title: 'Manteniment opcional',
    text: 'Si vols que m’ocupi de les actualitzacions i dels canvis petits, ho pots contractar al mes.',
    options: [
      { name: 'Essencial', price: 29, text: 'Actualitzacions i canvis petits.' },
      { name: 'Plus', price: 49, text: 'Més canvis i un extra al teu gust.' },
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
      q: 'Què és la mostra?',
      a: 'Una petita demo de com podria quedar la web del teu negoci, amb el nom i el que fas. No hi poso fotos teves ni res que hagis de preparar. És gratis i no t’obliga a res: si t’agrada, en parlem.',
    },
    {
      q: 'Com pots fer-ho a aquest preu?',
      a: 'Treballo amb plantilles pròpies i eines d’IA que m’estalvien les hores més mecàniques. El temps el poso on compta: entendre el teu negoci i deixar els textos i el disseny ben resolts.',
    },
    {
      q: 'Hi ha manteniment?',
      a: 'És opcional: Essencial (29 €/mes) o Plus (49 €/mes). Si no en vols, els canvis que demanis es cobren a 30 €/hora.',
    },
    {
      q: 'Fas altres coses a part de la web?',
      a: 'Sí: posar al dia la fitxa de Google, reserves online, recordatoris de cita o un assistent a la web. Te’ls pressuposto a part, segons el que necessiti el teu negoci.',
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
  lead: 'Digues-me com es diu el negoci, què fas i on ets, i et preparo una mostra de com quedaria la teva web. Gratis i sense compromís.',
  whatsapp: { label: 'Demanar una mostra per WhatsApp', value: phone.display, href: mostra.href },
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
