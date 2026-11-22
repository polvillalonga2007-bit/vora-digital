// Textos de les pàgines legals. Els trossos entre dobles claudàtors
// ([[això]]) es mostren destacats perquè són dades que falten per emplenar.

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export type LegalPage = {
  slug: string
  title: string
  eyebrow: string
  description: string
  updated: string
  intro: string
  sections: LegalSection[]
}

const OWNER = '[[nom i cognoms o raó social]]'
const NIF = '[[NIF]]'
const ADDRESS = '[[adreça completa]]'
const EMAIL = 'voradigital.web@gmail.com'
const PHONE = '623 61 03 31'

export const legal = {
  email: EMAIL,
  phone: PHONE,
  phoneDigits: '34623610331',
}

export const legalPages: LegalPage[] = [
  {
    slug: 'avis-legal',
    eyebrow: 'Informació legal',
    title: 'Avís legal',
    description:
      'Titular, objecte i condicions d’ús del lloc web de Vora Digital, a Manresa.',
    updated: '22 de novembre de 2026',
    intro:
      'Aquest avís legal regula l’accés i l’ús del lloc web de Vora Digital. En navegar-hi, acceptes les condicions que s’hi expliquen.',
    sections: [
      {
        heading: 'Titular del lloc web',
        paragraphs: [
          `En compliment de l’article 10 de la Llei 34/2002 de serveis de la societat de la informació i comerç electrònic (LSSI-CE), s’informa que aquest lloc web és titularitat de Vora Digital, nom comercial de ${OWNER}, amb NIF ${NIF} i domicili fiscal a ${ADDRESS}, Manresa (Bages).`,
          `Per a qualsevol comunicació: correu electrònic ${EMAIL} o telèfon ${PHONE}.`,
        ],
      },
      {
        heading: 'Objecte',
        paragraphs: [
          'Vora Digital es dedica al disseny i desenvolupament de pàgines web per a negocis petits del Bages i de pobles propers.',
          'Aquest lloc web té una finalitat informativa: explica què fem, què inclou una web, com treballem, els preus orientatius i com posar-s’hi en contacte. La informació que hi trobaràs no constitueix una oferta contractual; les condicions definitives de cada projecte es pacten per escrit abans de començar.',
        ],
      },
      {
        heading: 'Condicions d’ús',
        paragraphs: [
          'L’accés a aquest lloc és gratuït i no requereix registre. En fer-lo servir et compromets a fer-ne un ús lícit i a no dur-hi a terme activitats que puguin danyar el lloc, els seus continguts o els drets de tercers.',
          'Ens reservem el dret de modificar, suspendre o retirar qualsevol part del lloc sense avís previ, així com d’actualitzar aquestes condicions.',
        ],
      },
      {
        heading: 'Propietat intel·lectual i industrial',
        paragraphs: [
          'Els textos, el disseny, el codi, les fotografies, el logotip i la resta de continguts d’aquest lloc són titularitat de Vora Digital o s’hi fan servir amb autorització.',
          'No es permet la reproducció, distribució ni transformació d’aquests continguts sense permís escrit, excepte per a ús personal i no comercial o en els casos que la llei permeti expressament.',
        ],
      },
      {
        heading: 'Responsabilitat',
        paragraphs: [
          'Treballo perquè la informació del lloc sigui correcta i estigui actualitzada, però no puc garantir que no hi hagi mai cap error o que el servei estigui disponible de manera ininterrompuda.',
          'Els preus que s’hi mostren són orientatius, s’expressen sense IVA i no inclouen serveis de tercers com el domini o l’allotjament quan se supera el primer any.',
        ],
      },
      {
        heading: 'Enllaços a altres llocs',
        paragraphs: [
          'Si el lloc inclou enllaços a webs de tercers, ho fa com a servei informatiu. No en controlem el contingut ni les polítiques, i no ens fem responsables del que hi pugui aparèixer.',
        ],
      },
      {
        heading: 'Legislació aplicable i jurisdicció',
        paragraphs: [
          'Aquest lloc es regeix per la legislació espanyola. Per a qualsevol controvèrsia derivada de l’accés o de l’ús del lloc, les parts se sotmeten als jutjats i tribunals de Manresa, excepte que la normativa de consum imposi un altre fur.',
        ],
      },
    ],
  },
  {
    slug: 'privacitat',
    eyebrow: 'Protecció de dades',
    title: 'Política de privacitat',
    description:
      'Quines dades recollim quan ens escrius, per a què les fem servir i com les pots esborrar.',
    updated: '22 de novembre de 2026',
    intro:
      'Aquesta política explica què fem amb les dades que ens dones quan et poses en contacte amb Vora Digital, d’acord amb el Reglament (UE) 2016/679 (RGPD) i la Llei orgànica 3/2018 (LOPDGDD).',
    sections: [
      {
        heading: 'Qui és el responsable',
        paragraphs: [
          `El responsable del tractament és Vora Digital, nom comercial de ${OWNER}, amb NIF ${NIF} i domicili a ${ADDRESS}, Manresa (Bages). Pots escriure’ns a ${EMAIL} o trucar al ${PHONE}.`,
        ],
      },
      {
        heading: 'Quines dades tractem',
        paragraphs: [
          'Només tractem les dades que ens dones tu quan ens escrius per WhatsApp, per correu electrònic o quan truques: el teu nom, el telèfon o el correu de contacte, el nom del negoci i la informació que ens expliques per poder preparar una proposta.',
          'No et demanem dades que no calguin per respondre’t i no tractem dades especialment protegides (salut, ideologia, etc.) tret que tu ens les facilitis voluntàriament i siguin necessàries per al projecte.',
        ],
      },
      {
        heading: 'Per a què les fem servir i amb quina base legal',
        list: [
          'Respondre la teva consulta i preparar una proposta: base jurídica el teu consentiment (article 6.1.a del RGPD) i l’interès legítim a atendre una sol·licitud que ens fas tu (article 6.1.f).',
          'Executar el projecte si finalment contractes: base jurídica l’execució del contracte (article 6.1.b).',
          'Complir obligacions legals, fiscals i comptables: base jurídica el compliment d’una obligació legal (article 6.1.c).',
        ],
      },
      {
        heading: 'Quant de temps les guardem',
        paragraphs: [
          'Si només ens has fet una consulta, guardem les dades mentre duri la conversa i, com a màxim, durant un any des de l’últim contacte.',
          'Si hi ha una relació contractual, les conservem mentre duri el servei i després durant els terminis que exigeix la llei (sis anys pel Codi de comerç i quatre anys per les obligacions fiscals).',
        ],
      },
      {
        heading: 'Qui hi pot tenir accés',
        paragraphs: [
          'No venem ni cedim les teves dades a ningú. Només hi poden accedir els proveïdors tecnològics que necessitem per treballar, que actuen com a encarregats del tractament:',
        ],
        list: [
          'GitHub, que allotja aquest lloc web als Estats Units, amb garanties de transferència internacional (clàusules contractuals tipus de la Comissió Europea).',
          'Google, per al correu electrònic i per a les tipografies que carrega el web.',
          'Meta, si tries escriure’ns per WhatsApp.',
        ],
      },
      {
        heading: 'Quins drets tens',
        paragraphs: [
          'Pots exercir en qualsevol moment els drets d’accés, rectificació, supressió, limitació del tractament, oposició i portabilitat, així com retirar el consentiment que ens hagis donat. Només cal que ens escriguis a ' +
            EMAIL +
            ' indicant què vols.',
          'Si creus que no t’hem atès bé, pots presentar una reclamació davant l’Agència Espanyola de Protecció de Dades (aepd.es), carrer Jorge Juan 6, 28001 Madrid.',
        ],
      },
      {
        heading: 'Seguretat',
        paragraphs: [
          'El lloc es publica amb connexió xifrada (HTTPS) i accés restringit al correu i als panells de gestió. Apliquem mesures tècniques i organitzatives raonables per protegir les dades, però cap sistema és infal·lible.',
        ],
      },
      {
        heading: 'Menors d’edat',
        paragraphs: [
          'Aquest lloc i els serveis no s’adrecen a menors de 14 anys. Si creus que hem rebut dades d’un menor sense autorització, escriu-nos i les esborrarem.',
        ],
      },
      {
        heading: 'Canvis en aquesta política',
        paragraphs: [
          'Si canvia la manera com tractem les dades, actualitzarem aquesta pàgina i en modificarem la data de revisió. La versió publicada aquí és sempre la vigent.',
        ],
      },
    ],
  },
  {
    slug: 'cookies',
    eyebrow: 'Galetes',
    title: 'Política de cookies',
    description:
      'Aquest web no fa servir cookies de seguiment. T’expliquem què passa quan el carregues.',
    updated: '22 de novembre de 2026',
    intro:
      'Aquesta política explica les cookies i tecnologies similars que poden intervenir quan visites aquest lloc web, d’acord amb l’article 22.2 de la LSSI-CE.',
    sections: [
      {
        heading: 'Què és una cookie',
        paragraphs: [
          'Una cookie és un fitxer petit que alguns llocs desen al teu navegador per recordar informació entre visites: si ja has iniciat sessió, quines preferències tens o què has clicat.',
        ],
      },
      {
        heading: 'Quines fem servir nosaltres',
        paragraphs: [
          'Cap. Aquest lloc no instal·la cookies pròpies, no fa servir eines d’analítica, no mostra publicitat i no et perfila. Per això no veuràs cap bàner de consentiment: no n’hi ha d’haver.',
        ],
      },
      {
        heading: 'Serveis de tercers que sí que es carreguen',
        paragraphs: [
          'El lloc demana les tipografies a Google Fonts (fonts.googleapis.com i fonts.gstatic.com). En fer-ho, el teu navegador envia la teva adreça IP i el tipus de navegador a Google, que respon amb els fitxers de lletra. Aquest servei no instal·la cookies de seguiment en aquest lloc, però sí que rep la teva IP.',
          'El lloc està allotjat a GitHub Pages, que registra logs tècnics d’accés (adreça IP, data, pàgina demanada) per motius de seguretat i funcionament.',
        ],
      },
      {
        heading: 'Com evitar o esborrar les cookies',
        paragraphs: [
          'Tot i que aquí no n’hi hagi, pots configurar el navegador per bloquejar les cookies de tercers o per esborrar-les quan tanquis la finestra. Aquestes pàgines t’ho expliquen pas a pas:',
        ],
        list: [
          'Google Chrome: configuració → Privadesa i seguretat → Cookies i altres dades del lloc.',
          'Safari: preferències → Privadesa → Gestiona les dades dels llocs web.',
          'Firefox: preferències → Privadesa i seguretat → Cookies i dades del lloc.',
          'Microsoft Edge: configuració → Cookies i permisos del lloc.',
        ],
      },
      {
        heading: 'Canvis en aquesta política',
        paragraphs: [
          'Si algun dia afegim una eina que instal·li cookies (per exemple, estadístiques de visites), actualitzarem aquesta pàgina i et demanarem el consentiment abans de fer-la servir.',
        ],
      },
    ],
  },
]
