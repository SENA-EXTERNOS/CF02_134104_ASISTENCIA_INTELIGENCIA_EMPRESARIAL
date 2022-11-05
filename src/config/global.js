export default {
  global: {
    componenteFormativo: 'Requerimientos de servicio al cliente',
    descripcionCurso:
      'El servicio al cliente se ha convertido en una estrategia fundamental para el desarrollo organizacional, considerado tan indispensable como el direccionamiento estratégico. Por esta razón, existe un modelo de calidad en la gestión del cliente, fundamentado en su satisfacción y en la coordinación de protocolos y actividades para dar una excelente atención al cliente, desde cualquier área de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Atención y servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipología de clientes y manual de procedimientos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Etiqueta y protocolo en el servicio al cliente',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Servicio al cliente',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Técnicas y canales de atención al cliente',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comunicación como proceso esencial en el servicio al cliente ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Atención y servicio al cliente',
      referencia: 'HubSpot. s.f. <i>Guía de marketing omnicanal</i>',
      tipo: 'PDF',
      link:
        'https://www.hubspot.com/hubfs/00-OFFERS-HIDDEN/SPANISH%20-%20Omnichannel%20Marketing%20REVAMP/Gu%C3%ADa%20de%20marketing%20omnicanal.pdf?hubs_post-cta=author&hubs_post=blog.hubspot.es%252Fservice%252Fejemplos-experiencia-omnicanal&_ga=2.252538382.648710178.1661922427-331221168.1661922427&hubs_offer=offers.hubspot.es%252Fpersonalizacion-omnicanal&submissionGuid=b2b9c6b1-dd6d-4be9-bb7a-d5f373840d34',
    },
    {
      tema: 'Servicio al cliente',
      referencia:
        'Consorcio de Organizaciones Privadas de Promoción al Desarrollo de la Micro y Pequeña Empresa (COPEME). (2009). <i>Ciclo de Servicio.</i> ',
      tipo: 'PDF',
      link: 'https://sptf.info/images/ciclo_de_servicio.pdf',
    },
    {
      tema: 'Servicio al cliente',
      referencia:
        'Marketing & finanzas. (2013). <i>7 Requerimientos Mínimos para un Excelente Servicio al Cliente.</i>',
      tipo: 'Artículo',
      link:
        'https://www.marketingyfinanzas.net/2013/07/7-requerimiento-minimos-para-un-excelente-servicio-al-cliente/ ',
    },
    {
      tema: 'Servicio al cliente',
      referencia:
        'Icontec. (2015). NTC ISO 9001. <i>Sistemas de gestión de la calidad. Requisitos.</i>',
      tipo: 'Documento',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/NORMA%20ISO%209001%202015.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actitud',
      significado:
        'predisposición de la persona a responder de una manera determinada frente a un estímulo, tras evaluarlo positiva o negativamente.',
    },
    {
      termino: 'Aptitud',
      significado:
        'capacidad de aprovechar toda enseñanza, capacitación o experiencia, en un determinado ámbito de desempeño.',
    },
    {
      termino: 'CRM',
      significado:
        'la gestión de las relaciones con el cliente (<i>Customer Relationship Management</i>) es el conjunto de estrategias de negocio, marketing, comunicación e infraestructura tecnológica, diseñadas con el fin de construir una relación duradera con los clientes, identificando, comprendiendo y satisfaciendo sus necesidades.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'capacidad para reducir al mínimo, los recursos usados para alcanzar los objetivos de la organización “hacer las cosas bien”.',
    },
    {
      termino: 'Empatía',
      significado:
        'es la capacidad de implicarse en la respuesta hacia al cliente, de ponerse realmente en la posición del mismo y entender su frustración.',
    },
    {
      termino: 'Excelencia',
      significado:
        'superior calidad o bondad por lo que se hace digno de singular aprecio y estimación de algo.',
    },
    {
      termino: 'Experiencia del cliente',
      significado:
        'conjunto de experiencias que tiene un cliente con una marca, durante el tiempo en el que se presente una relación de servicio.',
    },
    {
      termino: 'Procedimiento',
      significado:
        'cauce formal de la serie de actos en que se concreta la actuación administrativa, para la realización de un fin.',
    },
    {
      termino: 'Protocolo',
      significado:
        'técnica que determina las estructuras o formas bajo las cuales se realiza una actividad humana pluripersonal e importante, con el objeto de su eficaz realización y, así mismo, de mejorar la convivencia. ',
    },
    {
      termino: 'Servicio',
      significado:
        'resultado generado por actividades en la interfaz entre el proveedor y el cliente, y por actividades internas del proveedor, con el fin de responder a las necesidades del cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bancolombia. (2020). <i>¿Qué es el triángulo del servicio y cómo ayuda a mi negocio?</i>',
      link:
        'https://www.bancolombia.com/negocios/actualizate/mercadeo-y-ventas/que-es-triangulo-del-servicio-como-ayuda-negocio#:~:text=El%20tri%C3%A1ngulo%20del%20servicio%20es,la%20experiencia%20con%20los%20clientes. ',
    },
    {
      referencia:
        'Bogotá emprende. (2010). <i>Etiqueta empresarial</i>. Alcaldía Mayor de Bogotá, Cámara de Comercio de Bogotá. ',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/1172/4614_cartilla_etiquetaempresarial.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Botia, M. L. y Orozco, L. H. (2012). Competencias en servicio al cliente y efectividad en solución de problemas. <i>Estudios y perspectivas en turismo 21</i>, p. 646-662. ',
      link:
        'https://web-p-ebscohost-com.bdigital.sena.edu.co/ehost/pdfviewer/pdfviewer?vid=4&sid=4889c1d2-7ca8-4b6a-8661-1cdb466a96ab%40redis ',
    },
    {
      referencia:
        'Consorcio de Organizaciones Privadas de Promoción al Desarrollo de la Micro y Pequeña Empresa (COPEME). (2009). <i>Ciclo de Servicio</i>',
      link: 'https://sptf.info/images/ciclo_de_servicio.pdf',
    },
    {
      referencia:
        'Mateos, M. (2019). <i>Atención al Cliente y Calidad en el Servicio.</i> IC Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/124251 ',
    },
    {
      referencia:
        'Psicología-Online. (2018). <i>Técnicas para la comunicación eficaz.</i>',
      link:
        'https://www.psicologia-online.com/tecnicas-para-la-comunicacion-eficaz-3124.html#anchor_4 ',
    },
    {
      referencia:
        'QuestionPro. (s.f.). <i>Manual de servicio al cliente: Qué es y cómo crearlo</i>',
      link:
        'https://www.questionpro.com/blog/es/manual-de-servicio-al-cliente/ ',
    },
    {
      referencia:
        'Reyes, J. (2019). <i>Excelencia en el manejo de la óptica y el servicio al cliente.</i> Ediciones Unisalle. ',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/65610 ',
    },
    {
      referencia:
        'UNIR. (2021). <i>¿Qué son las barreras de comunicación y cuáles son los tipos que existen?</i>',
      link: 'https://ecuador.unir.net/actualidad-unir/barreras-comunicacion/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
