<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Atención y servicio al cliente
    .row.justify-content-center
      .tarjeta
        .row.justify-content-center
          .col-sm-7.mb-3
            p.mt-5 La estrategia de atención al cliente, se convierte en el eje fundamental de la actividad económica, gracias a que a través de ella se captarán nuevos clientes, llevándolos por el proceso, hasta su fidelización, de manera que la empresa se consolide a través de esta estrategia organizacional. 
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")  

    p.mt-5mb-5 Para brindar una excelente atención al cliente, es necesario definir pautas de comportamiento como:
    .row.justify-content-center
      .col-sm-12.mb-3.mt-5
        .tarjeta--container.row.justify-content-center
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img2.png', alt='')
            .tarjeta.tarjeta-curuva.p-3
              p.text-center.mt-5 El respeto y la amabilidad.
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img3.png' alt='')
            .tarjeta.tarjeta-rosa.p-3
              p.text-center.mt-5 La disposición previa.
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img4.png' alt='')
            .tarjeta.tarjeta-curuva.p-3
              p.text-center.mt-5 La implicación en la respuesta.
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img5.png' alt='')
            .tarjeta.tarjeta-rosa.p-3
              p.text-center.mt-5 El servicio al cliente.              
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/img6.png' alt='')
            .tarjeta.tarjeta-curuva.p-3
              p.text-center.mt-5 El vocabulario adecuado. 

    p.mt-5.mb-5  Todas estas pautas llevan a identificar a los clientes como la razón de ser de toda organización; su presencia obliga necesariamente a estudiarlo, acompañarlo, servirlo, cuidarlo, escucharlo, atenderlo en pro de su satisfacción, la cual se traduce en generación de ingresos, en fidelización y en captación de nuevos compradores. El enfoque en el cliente, necesariamente promueve que cada parte interesada en la organización se prepare desde su área o especialidad funcional, para dar información y a atender al cliente conforme con sus solicitudes y expectativas, con el fin de satisfacer sus necesidades y superar sus expectativas; valor agregado que implica esfuerzo y dedicación en su análisis, pero que dejará huella de manera que se den nuevas oportunidades de cerrar ventas con la clientela.

    .row.justify-content-center.mt-5
      .col-md-8
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img7.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-4
            p El cliente puede ser una persona natural o jurídica, que recibe un producto o servicio destinado o requerido por él mismo y que busca siempre satisfacer una necesidad a través de esa compra o adquisición, de un producto tangible o intangible.                

    p.mt-5.mb-5 Por lo regular, en una organización, se pueden encontrar dos tipos de clientes.
    .row.justify-content-center.mt-5
      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
          .row(titulo="Cliente interno").px-5.py-2.bg2
            .row
              .col-md-9.mt-3
                p Se refiere a los mismos colaboradores dentro de una organización; se reconocen de esta manera, porque dependen de otros procesos y áreas para realizar su labor, su producto, o resultados de su labor. Son considerados insumos para otros cargos o áreas.
              .col-md-3
                figure
                  img(src="@/assets/curso/temas/tema1/img8.png", alt="alt") 
          div(titulo="Cliente externo").px-5.py-3.bg2
            .row
              .col-md-9.mt-3
                p Se refiere a una persona natural o jurídica que adquiere un producto o servicio para satisfacer una necesidad, la cual será cubierta con el uso de un producto o al disfrutar de un servicio. Se consideran ejes fundamentales en la organización porque representan la fuente de ingresos; por esa razón, las organizaciones se esfuerzan por brindar mucha atención con productos de excelente calidad que satisfagan y superen las expectativas de los clientes, con el propósito que se conviertan en clientes recurrentes hasta llegar a retenerlos a través de diferentes estrategias de comercialización y fidelización. 
              .col-md-3
                figure
                  img(src="@/assets/curso/temas/tema1/img9.png", alt="alt") 

    <Separador></Separador>
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1 Tipología de clientes y manual de procedimientos

    p.mt-5.mb-5  Así como existen diferentes tipos de clientes, también estos se pueden clasificar conforme a su comportamiento.
    p.mb-5 En este orden de ideas, los clientes se pueden clasificar en:

    .row.justify-content-center.mt-5 
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-curuva.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img10.png', alt='')
          p.text-center.mt-5 Clientes visuales, auditivos y kinestésicos.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-curuva.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img11.png', alt='')          
          p.text-center.mt-5 Clientes actuales, potenciales y perdidos.
                   
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-curuva.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img12.png', alt='')          
          p.text-center.mt-5 Clientes frecuentes, ocasionales y habituales.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-curuva.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img13.png', alt='')          
          p.text-center.mt-5 Clientes satisfechos e insatisfechos.

    p.mt-5.mb-5 Estos tipos de clientes se tratarán conforme a su temperamento y carácter, porque es claro que existe una pequeña posibilidad de encontrar diversos temperamentos que se encuentran conformados por: mecanismos de defensa, estímulos nerviosos, conexiones nerviosas e impulsos, que influyen directamente en el comportamiento y la conducta humana.
    p.mb-5 A continuación, se presentan los tipos de clientes y se podrán comprender sus características y cuál sería la forma adecuada para relacionarse con ellos.
    .row.justify-content-center.mt-5    
      .col-md-8
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          .row.justify-content-center
            .col-sm-10  
              figure 
                img(src='@/assets/curso/temas/tema1/img14.png', alt='alt') 

        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="13%" y="45%" numero="+")  
          .row.justify-content-center
            p Este tipo de cliente es propenso al desborde, hosco, ansioso, grosero, irritable y agresivo para abordar. Se le debe mostrar mucho respeto, no contradecirlo, nunca sentirse o mostrarse inferior, darle explicaciones y argumentos concretos, ser amable y mantener el equilibrio.

        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="41%" y="45%" numero="+")  
          .row.justify-content-center
            p Este tipo de cliente es mucho más accesible por ser amable, amistoso, cordial, simpático y conversador; para abordarlo, es importante mirarlo a los ojos, realizar preguntas directas, hacerle elogios, permitirle expresarse, razón por la cual se debe ser paciente, tomarse el tiempo para atenderlo y venderle ventajas.

        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="70%" y="45%" numero="+")  
          .row.justify-content-center
            p Este tipo de cliente es evasivo, inaccesible, no da la cara y se expresa poniendo barreras; al abordarlo, se debe tener seguridad de lo que se le va a manifestar y ofrecer disponibilidad para atenderlo cuando lo desee.

        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="13%" y="96%" numero="+")  
          .row.justify-content-center
            p Este tipo de cliente es discreto, cauto, serio, egoísta, callado y distante; para abordarlo, es necesario recurrir a la objetividad, aportando siempre argumentos sólidos, enfatizando en aspectos claves, planteando preguntas directas, con paciencia, e indagando acerca de lo que le gusta y mostrarle empatía.

        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="41%" y="96%" numero="+")  
          .row.justify-content-center
            p Este tipo de cliente es seguro, de posiciones firmes, se mantiene informado, razón por la que puede ser tajante y directo con sus respuestas; al abordarlo, se debe hacerlo con seguridad, planteando argumentos y llevando evidencias de los mismos, es decir, utilizar muestras si es un producto tangible, o testimonio si se comercializan productos intangibles, prestando atención a sus planteamientos, dedicando el tiempo necesario para puntualizar y concretar la venta, sin llevarle la contraria o entrar en divergencias.

        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="70%" y="96%" numero="+")  
          .row.justify-content-center
            p Este tipo de cliente es indeciso, tímido, reservado y parco para abordarlo; hay que mostrarle empatía, ofrecerle colaboración, presentar el producto o servicios sin presión ni afán, inducir su decisión de compra mediante el profesionalismo y ganarse la confianza de su acompañante.

    p.mt-5.mb-5 De esta manera y con el objetivo de trabajar por la satisfacción del cliente, es necesario conocer el decálogo o mandamientos para prestarle atención, los cuales tienen aplicación y efectividad, aunque se tenga gran diversidad de clientes existentes.
    p.mb-5 El decálogo es el siguiente:
    .row.justify-content-center.mt-5    
      .col-md-9
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-lg.t-align                 
                p.text-center El cliente por encima de todo.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img15.png', alt='').img125  
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img16.png', alt='').img125    
            .col-lg.t-align
              p No hay nada imposible cuando se quiere.
          .row
            .col-lg.t-align
              p Cumplir todo lo que se promete.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img17.png', alt='').img125   
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img18.png', alt='').img125  
            .col-lg.t-align
              p Darle al cliente más de lo que espera.

          .row
            .col-lg.t-align
              p La buena atención marca la diferencia.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img19.png', alt='').img125  

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img20.png', alt='').img125 
            .col-lg.t-align
              p Fallar en un punto, significa fallar en todo.

          .row
            .col-lg.t-align
              p Empleado insatisfecho, genera clientes insatisfechos.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img21.png', alt='').img125     
          
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img22.png', alt='').img125   
            .col-lg.t-align
              p El juicio sobre la calidad del servicio lo hace el cliente.
          
          .row
            .col-lg.t-align
              p Por muy bueno que sea un servicio, siempre se puede mejorar.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img23.png', alt='').img125  

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img24.png', alt='').img125                                                                                                                                             
            .col-lg.t-align
              p Cuando se trata de satisfacer al cliente, todos son un equipo.

    p.mt-5.mb-5  Si se analiza este decálogo, se observa la síntesis acerca de todo lo que se debe ser y hacer, para lograr la satisfacción del cliente, conociendo la premisa “el cliente por encima de todo”; al ganar un cliente, se ha incurrido en una inversión de dinero y grandes esfuerzos que pueden perderse con bastante facilidad por una mala atención al cliente o al prospecto, en especial, cuando se manifiestan la indiferencia y la mala atención del personal de ventas y servicios.             
    p.mb-5 Con la finalidad de prevenir resultados adversos, en seguida se presenta el manual del colaborador eficiente:

    .row.justify-content-center.mb-5
      SlyderF(columnas="col-md-4")    
        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img25.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 No ser indiferente   

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img26.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Ser diligente 

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img27.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 No acudir a malos tratos    

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img28.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Cumplimiento  

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img29.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Tacto al interactuar con el cliente  

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img30.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Conocimiento de la empresa y sus procesos

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img31.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Hablar con la verdad

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img32.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Preparación técnica 

    
    .row.align-items-end.bg3.h4.p-3.mt-5 Manual de procedimientos de atención al cliente
    p.mt-5-.mb-5 La organización debe establecer un procedimiento de atención y servicio al cliente, con el fin de definir los conceptos básicos, prácticas, políticas y estándares que la organización establece, condensando en un manual de procedimiento de atención al cliente, con el propósito que este documento se encuentre al alcance de cualquier miembro de la empresa, que requiera afrontar la atención al cliente y no cuente con la suficiente información o experticia en esta área; de esta manera, se evita que cada quien actúe de acuerdo con su propio criterio.
    .row.justify-content-center.mb-5
     .col-md-10
      .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
        .row.justify-content-center.p-4                
          p Para construir este manual, es necesario empezar por definir al cliente o segmento de clientes en que se enfoca la empresa; de esta manera, será pertinente la orientación que se le asigne al manual, con la finalidad de obtener unos parámetros establecidos que permitirán delimitar la atención al cliente, definiendo el procedimiento a implementar. 

    p.mt-5.mb-5 Este manual debe estar integrado por los siguientes componentes:

    .tarjeta.color-borde-slider.color-slider.p-3.mt-5
      SlyderA(tipo="b").bg2
        .row
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Alcance del servicio al cliente
            p Debe coincidir con el alcance determinado en los demás procesos, contar con unos parámetros claros para resolver inquietudes de los clientes, atender fallos del producto o servicio e incluir la satisfacción del cliente, más allá de sus solicitudes, cubriendo las fases de venta, implementación y ciclo de vida.            
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema1/img33.png", alt="alt")
        .row
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Políticas definidas en el servicio al cliente
            p Debe definirse claramente el marco de acción que tienen todos los representantes de la organización, con la finalidad que cada uno se encuentre enterado de su participación en el proceso y, de ser necesario, cómo puede dar solución a solicitudes e inquietudes de los clientes. 
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema1/img34.png", alt="alt")                              
        .row
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Interacciones con los clientes
            p Se definen con el fin de establecer la manera correcta en que cada colaborador debe atender a los clientes para la empresa; aquí es recomendable elaborar un protocolo de atención en el que se detalle desde la forma de saludar, hasta el cierre de una atención al cliente definiendo claramente el protocolo para los diferentes canales de atención.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema1/img35.png", alt="alt") 

        .row
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Empatía 
            p Es innegable que, especialmente en este proceso, las personas vinculadas deben acudir a la empatía como su estrategia de trabajo, de manera que se reconozca la dificultad o grado de malestar que tiene el cliente, para ser precisos en la solución que se le brinde de manera adecuada, formal, amable y respetuosa.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema1/img36.png", alt="alt") 

        .row
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Poder de decisión de los agentes de servicio al cliente 
            p Es recomendable delegar ese grado de autoridad al personal vinculado a este servicio, con el fin de evitar demoras en la atención al cliente, en aspectos como ofrecer descuentos, cumplir garantías y realizar reembolsos, definiendo con claridad cuáles problemas o situaciones deben ser escalables en los niveles jerárquicos o en la cadena de mando.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema1/img37.png", alt="alt") 

        .row
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Políticas de devolución y reembolso
            p Es necesario documentar cada uno de estos aspectos si se encuentran dentro de la política de servicio al cliente: cambios, crédito u otro método de devolución o reembolso, si se requiere de condiciones específicas. Definiendo estos aspectos y los demás que se consideren pertinentes, se brindará un eficiente servicio al cliente por lo que es indispensable ser precisos y concretos en los casos a resolver, la solución a brindar y el proceso para llevarla a cabo; de esta manera, se evitarán frustraciones y hasta la pérdida del cliente.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema1/img38.png", alt="alt") 

        .row
          .col-md-7.mb-4.mb-md-0.p-4
            h4 Herramientas y recursos
            p Para garantizar un excelente servicio al cliente, se deben considerar todas las herramientas necesarias que hagan de este, un servicio eficiente y, del personal a cargo, más autosuficiente para brindar soluciones como enlaces de especificaciones de productos, publicadas por los fabricantes, así como también los recursos para obtener información e interactuar con los clientes de manera más independiente y satisfactoria.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema1/img39.png", alt="alt")

    .row.justify-content-center.mb-5.mt-5
     .col-md-10
      .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
        .row.justify-content-center.p-4                
          p Este manual de procedimiento de atención al cliente, debe ser un documento adaptable o vivo, de manera que puedan incluirse nuevos casos problemáticos o diferentes, a los incluidos; esto con el propósito de dar respuesta apropiada a cada uno y contar, en este documento, con las estrategias suficientes. (QuestionPro, s.f.)

    <Separador></Separador>
    #t_1_2.titulo-segundo.color-acento-contenido.mt-5
      h2 1.2 Etiqueta y protocolo en el servicio al cliente

    p.mt-5.mb-5 La etiqueta y el protocolo de servicio al cliente, son normas esenciales en la atención al mismo donde, además de buscar satisfacer sus inquietudes o necesidades, se le da el trato respetuoso, amable, elegante y pertinente que todo cliente anhela recibir. Ambos se definen como la fórmula encargada de otorgar las herramientas necesarias para proyectar una imagen exitosa, positiva y segura; tanto en el área laboral como en la personal.
    .row.justify-content-center.mb-5.mt-5
      .col-md-10
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p Asimismo, la etiqueta de la empresa es regida mediante unas reglas o principios, que hacen referencia al marco de acción que se define para que los representantes de servicio al cliente presten un excelente servicio, brindando siempre un estándar alto en lo referente a su satisfacción, necesidades y expectativas. 

    p.mt-5.mb-5 A continuación, se detalla cada una de estas reglas.
    .row.justify-content-center.mb-5.mt-5
      .col-md-10    
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
          .row(titulo="Organización ").bg2.p-5
            .row.justify-content-center
              p Mantener una zona de trabajo despejada y ordenada, ayudará a cumplir con los retos diarios y beneficiará el trabajo cotidiano. Demostrar que se es una persona organizada, muy seguramente beneficiará su ocupación diaria y le permitirá entregar oportunamente sus productos, como resultado de llevar un proceso ordenado, previendo errores y que corresponda con los requerimientos asignados. El método en el lugar de trabajo, también denota orden, limpieza e higiene.
 
          div(titulo="Paciencia").bg2.p-5
            .row.justify-content-center
                p Adoptar esta virtud o este valor, implica tener un comportamiento moderado y pertinente en toda ocasión, lo que capacitará para brindar un trato adecuado a todo tipo de cliente que posea una organización.

          div(titulo="Prudencia").bg2.p-5
            .row.justify-content-center
                p Es el más importante de todos los principios que rigen, tanto la etiqueta como el protocolo; es muy sencilla de aplicar y tiene que ver con mantener una actitud de respeto hacia el cliente en la comunicación, indiferente del medio que se utilice; se trata de expresar opiniones solo si son solicitadas, de cuidar lo que se expresa verbal y gestualmente, para no afectar a otros con la información que se entrega, así como mantener también una actitud conciliadora y una comunicación asertiva en todo momento.

          div(titulo="Buen gusto").bg2.p-5
            .row.justify-content-center
                p Integrado al principio de la prudencia, se encuentra este principio que denota cultura, tacto para manifestar las opiniones, gusto para elegir las cosas, el lugar y el momento adecuado. Tiene que ver con vestirse de acuerdo con la ocasión, así como con la edad y, en definitiva, todo el conjunto de decisiones que tengan que ver con la imagen y el comportamiento.

          div(titulo="Puntualidad").bg2.p-5
            .row.justify-content-center
                p Este es un principio que se caracteriza por dar una imagen de cada persona en todo evento, y ayuda a medir la responsabilidad del colaborador, denotando compromiso.

          div(titulo="Respeto").bg2.p-5
            .row.justify-content-center
                p Un principio elemental, que denota consideración por cualquier persona sin distingo de credo, raza, religión, edad, sexo, y se manifiesta en los diferentes contactos con el cliente y, en general, en el ámbito laboral en todo lo que cada colaborador realiza.

          div(titulo="Humildad").bg2.p-5
            .row.justify-content-center
                p Se define como la actitud que se asume para atender a todo tipo de cliente, sin hacer acepción de personas, como en el caso de cometer un error, aceptarlo, y expresar su voluntad para corregirlo.

          div(titulo="Sencillez").bg2.p-5
            .row.justify-content-center
                p Es la capacidad de comportarse de manera uniforme, a pesar de las circunstancias. En el ámbito empresarial, es necesario hablar con sencillez, mantener una imagen discreta y natural, y brindar un trato amable a todas las personas sin importar el cargo o título que tenga en la organización.

          div(titulo="Empatía").bg2.p-5
            .row.justify-content-center
                p Capacidad de ubicarse en el lugar que otro ocupa, con todo lo que esto implica en las diferentes áreas. Facilita el sentido de pertenencia, construye relaciones sólidas en la organización y trata de tener la voluntad para ayudar a otros sin esperar nada a cambio.

    .row.align-items-end.bg3.h4.p-3.mt-5 Momento de verdad
    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-7.mb-3
            p.mt-5 Otro punto importante dentro de la etiqueta y el protocolo, son #[span.text-bold los momentos de verdad], que se definen como aquellas situaciones por medio de las cuales el cliente externo se formará una imagen de la empresa, a través del primer contacto que este tenga con uno o varios de los colaboradores. La imagen se determinará por el tipo de comunicación verbal y no verbal que asuma el trabajador, y ante la capacidad de resolución que tenga para resolver cualquier situación que se le presente al cliente, actuaciones que requieren, necesariamente, de la etiqueta y el protocolo para garantizar momentos de verdad positivos.
            .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
              .row.justify-content-center.p-4                
                p Al enfrentarse a estos retos, el colaborador necesariamente debe poner en práctica todas las competencias que le han permitido apropiarse del cargo, las cuales son indispensables en su desempeño y que le capacitan para realizar atenciones efectivas a las demandas del cliente. Estas competencias son cognitivas, actitudinales, atributivas, de habilidades y experienciales.
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img40.png", alt="alt")

    p.mt-5.mb-5 Es necesario considerar que en algunas teorías administrativas se afirma que, en todos los sectores económicos, el servicio al cliente y la forma en que se ofrece son factores intangibles que inciden de manera importante en los indicadores de productividad, de efectividad y competitividad de las organizaciones, reconociendo que la franja más importante de la calidad en el servicio al cliente, obedece o depende del desempeño que directamente, en los momentos de verdad, realicen los funcionarios o representantes del servicio al cliente al adquirir sus productos o servicios. (Botia, 2012)
    .row.align-items-end.bg3.h4.p-3.mt-5 Imagen corporativa 
    .row.justify-content-center.mt-5
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img41.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-4
            p #[span.text-bold La imagen corporativa u organizacional] es la visión que la empresa desea proyectar a través de su dinámica y gestión. Es por esta razón que la empresa establece una política, propósitos, visión, misión, valores y principios; con estos últimos, se construye una cultura organizacional que refleja la dinámica que se percibe en el ambiente de una organización, al ingresar en contacto con ella. Por esta razón todos los colaboradores deben cumplir con esas políticas, reglas y normas de cortesía que, normalmente, son la puntualidad, amabilidad, orden y respeto, demostrados en todas las acciones que se realicen para quienes interactúan con la empresa.    

    p.mt-5.mb-5  Como consecuencia de garantizar una correcta imagen corporativa, es necesario establecer ciertas #[span.text-bold normas de convivencia empresarial] que permitan obtener un correcto ambiente de trabajo. El estado en que se encuentran las oficinas, muchas veces se basa en el resultado de la gestión de muchas situaciones que se han venido sumando con el tiempo y que no han sido atendidas en el momento correcto.            
    p.mb-5 Para evitar esto, es necesario tener en cuenta:

    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img42.png", alt="alt")
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          p(numero="1" titulo="Disponer de un cronograma de trabajo") Se debe disponer de un cronograma de trabajo no esbozando solamente el concepto de las actividades por realizar, sino que también es necesario establecer tiempos para la entrega o realización.

          p(numero="2" titulo="Aprender a priorizar ") Es muy probable que la presión que se maneja en el trabajo no permita anteponer situaciones; sin embargo, se puede contribuir a darle un orden cronológico a las actividades que se tienen por realizar.

          p(numero="3" titulo="Establecer los recursos por cada actividad") Es importante anotar la cantidad de personas que se necesita contactar, porque muchas veces se dejan las cosas que se piensan, en la cabeza, no se anotan y cuando se presenta la disponibilidad para realizar la actividad, no se tiene memoria de por donde se debe empezar.

          p(numero="4" titulo="Anotar los pendientes") Anotar todos los pendientes que quedaron del día anterior en la agenda o en un planeador, para tener un mayor control.

    <Separador></Separador>
    #t_1_3.titulo-segundo.color-acento-contenido.mt-5
      h2 1.3 Servicio al cliente

    p.mt-5.mb-5 En el mundo del servicio en el que estamos inmersos, las organizaciones logran desarrollar habilidades y valores de liderazgo, específicos; construyen un sistema de información sobre la calidad del servicio, y crean una #[span.text-bold estrategia] amplia y coherente con los cuatro principios del servicio: #[span.text-bold confiabilidad, expectativa, recuperación y equidad,] la cual debe orientarse hacia la administración de los momentos de verdad o los incidentes definitivos en los cuales los clientes se ponen en contacto con la organización y se forman una impresión de su calidad y de su servicio; es entonces que los clientes deben vincularse de manera emocional, para que las interacciones por los diferentes canales cobren importancia y trasciendan para el cliente, al punto de restar importancia al precio del producto.  

    .row.justify-content-center.mb-5.mt-5
      .col-md-10
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p Cobra importancia en la puesta en escena, cuando un representante de servicio al cliente se encuentra cara a cara con el cliente o cuenta con el reto de satisfacer su necesidad, indiferente del canal que se utiliza y debe, inevitablemente, hacer uso de los elementos significativos de servicio al cliente.
    p.mt-5.mb-5 A continuación, se presenta cada uno de los elementos del servicio al cliente.
    .row.justify-content-center.mb-5
      SlyderF(columnas="col-md-4")    
        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img43.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Cortesía y amabilidad de los empleados   

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img44.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Dedicación del tiempo oportuno para cada cliente 
              
        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img45.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Eficacia en la resolución de conflictos

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img46.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Amabilidad y trato recibidos   

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img47.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Tiempo de espera para la recepción de los servicios 

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img48.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Disposición de la organización para resolver problemas

        .col-xl-12.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.tarjeta-radius-all(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img49.png", alt="alt")
            .crd_hover_txt--body.text-center
              p.mb-3 Rapidez en la entrega de los servicios


    p.mnt-5.mb-5 La organización proyectada hacia un futuro promisorio debe, luego de estructurar la organización y antes de ponerla en marcha, definir cuál será su estrategia de atención al cliente, en donde se defina con claridad, la importancia de establecer los parámetros para su servicio y cumplimiento, por parte de los colaboradores de la empresa, en especial de los representantes de servicio al cliente.
    .row.justify-content-center.mb-5.mt-5
      .col-md-10
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p A esto se refiere #[soan.text-bold el protocolo de atención al cliente,] donde se establecen el alcance, las pautas, actividades, parámetros y lo que implica documentar y establecer un protocolo para que las diferentes situaciones con los clientes no dependan de la buena voluntad de los colaboradores, sino que se cuente con un direccionamiento claro, acerca de cómo actuar en cada situación.

    .row.align-items-end.bg3.h4.p-3.mt-5 Gestión de calidad en el servicio al cliente
    p.mt-5.mb-5 En el servicio al cliente, la gestión de la calidad obedece a lo consignado en la Norma Técnica Colombiana NTC ISO 9001:2015, donde su implementación se realiza especialmente en el enfoque al cliente; esto implica trabajar continuamente para cumplir los requisitos especificados en el producto o servicios, satisfacer al cliente superando sus expectativas y trabajar por una mejora continua en los procesos, de tal manera que siempre se oferten productos y servicios de excelente calidad. 
    p.mb-5 Lo invitamos a ver el siguiente video, donde conocerá más sobre la gestión de la calidad en el servicio al cliente.
    

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video 

    .row.align-items-end.bg3.h4.p-3.mt-5 Ciclo de servicio
    p.mt-5.mb-5 Definido como el conjunto de actividades que el cliente se ve obligado a realizar para adquirir un producto o servicio. Es el paso a paso desde que el cliente se interesa en realizar una compra y cada una de las actividades, hasta obtener un producto o servicio. Es necesario mencionar que el #[span.text-bold ciclo de servicio] se hace óptimo, cuanto más sencillo es, al tener pocos puntos de contacto, lo que implica reducir las gestiones que el cliente debe realizar para obtener un estupendo servicio. Los eslabones de la cadena de servicio se consolidan cuando son pocos, reduciendo el riesgo que esta se fracture o fraccione y, por ende, aporte una mala imagen al cliente, la cual podría ser equiparada con la superación de sus expectativas. 

    .row.justify-content-md-center              
      .col-md-9                         
        .tarjeta.color-tarjeta-descargas.p-3.mt-5
          .row.justify-content-md-center
            .col-1.mt-3
                img(src="@/assets/curso/temas/img3.png")
            .col-md-8
                h5.mt-3.text-white Pasos para realizar un ciclo de servicio.
                p.text-small.text-white Para aprender a realizar un ciclo de servicio, lo invitamos leer el documento #[span.text-bold Pasos para realizar un ciclo de servicio.]
            .col-md-2.mt-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Pasos para realizar un ciclo de servicio.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.align-items-end.bg3.h4.p-3.mt-5 Triángulo del servicio 
    p.mt-5.mb-5 Es una estructura diseñada en los 80 por Karl Albrecht, con el objetivo de crear una filosofía de servicio encargada de integrar momentos claves de la actividad económica para mejorar la experiencia del cliente, operando de manera sincronizada y sistémica, y concibiendo el servicio como un todo que funciona alrededor del cliente.
    p.mb-5 A continuación, se presenta la conformación del triángulo del servicio.
    .row.justify-content-center.mt-5    
      .col-md-6
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            .row.justify-content-center
              .col-sm-10  
                figure 
                  img(src='@/assets/curso/temas/tema1/img50.png', alt='alt') 

          .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="49%" y="17%" numero="+")  
            .row.justify-content-center
              p Corresponde a los parámetros fijados para consolidar el equipo de trabajo, orientada a ofrecer un servicio de calidad.

          .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="43%" y="60%" numero="+")  
            .row.justify-content-center
              p Es el eje central del triángulo de servicio, al igual que de la estrategia, los actores del negocio que interactúan alrededor de él, sus necesidades y sus motivaciones.             
                
          .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="26%" y="77%" numero="+")  
            .row.justify-content-center
              p Son las técnicas y herramientas que utilizan los colaboradores para prestar el servicio, los cuales deben ser manejables tanto para el personal, como para el cliente.
              

          .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="70%" y="77%" numero="+")  
            .row.justify-content-center
              p Deben ser plenos conocedores de la promesa de valor o de servicio al cliente.

      p.mt-5.mb-5 Siguiendo esta dinámica operativa, se dan una serie de relaciones estrechas y funcionales, las cuales se enuncian en la Tabla 1.
      .row.justify-content-center.mt-5    
      .col-md-9
        figure 
          img(src='@/assets/curso/temas/tema1/img51.svg', alt='alt').mb-5

        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p Estas interacciones del cliente con la actividad o negocio, aportan para alinear la estrategia, el diseño, los estándares, reduciendo la brecha y administrando las promesas de valor.

      p.mt-5.mb-5 Un claro ejemplo del triángulo del servicio se puede ver en el comercio electrónico, el cual ha tomado ventaja desde 2020, gracias al auge de la tecnología; este proceso incrementó la cantidad de clientes por este medio, lo que implica mantener esta estrategia de venta disponible, garantizando la seguridad, trazabilidad y respaldo, considerando que es el punto de contacto más importante.

    <Separador></Separador>
    #t_1_4.titulo-segundo.color-acento-contenido.mt-5
      h2 1.4 Técnicas y canales de atención al cliente

    p.mt-5.mb-5  Más allá de enumerar las técnicas en cuanto a la atención al cliente, es necesario precisar la estrategia que posibilitará una atención integral al cliente constituyéndose como un modelo de servicio al cliente, como se presenta en la Figura 1.
    .row.justify-content-center.mt-5    
      .col-md-9
        figure 
          img(src='@/assets/curso/temas/tema1/img52.png', alt='alt').mb-5

    p.mb-5  El objetivo del modelo de servicio al cliente es el de encontrar las estrategias que faciliten el cumplimiento de la satisfacción del mismo, lo que incluye implícitamente otros atributos que deben enumerarse: oportunidad, calidad, veracidad o cumplimiento de las promesas hechas al cliente y su entendimiento, sin los cuales no se logrará una calificación excelente por parte del mismo.
    p.mb-5 A continuación, se detalla más información del modelo de servicio al cliente.

    .row.justify-content-center.mt-5    
      .col-md-5
        figure 
          img(src='@/assets/curso/temas/tema1/img53.png', alt='alt').mb-5  
      .col-md-7            
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
          .row(titulo="Propuesta de valor ").bg2.p-5
            .row.justify-content-center
              p Este modelo está compuesto por la propuesta de valor, insignia o promesa que la organización se compromete a cumplir, de acuerdo con el tipo de cliente que se atiende, así como con el segmento y los productos ofertados por la organización.
 
          div(titulo="Estructura organizacional").bg2.p-5
            .row.justify-content-center
                p Se respalda en una estructura organizacional ampliamente capacitada para atender todo tipo de cliente sin distinción, haciendo uso de la empatía, el respeto, la amabilidad, manteniendo siempre la claridad de que se atiende a las personas.

          div(titulo="Procesos").bg2.p-5
            .row.justify-content-center
                p Se implementan procesos acordes con las solicitudes de los clientes y al alcance de los representantes de esta área, con el fin de dar solución inmediata a las peticiones del cliente, o a los responsables, de acuerdo a como se haya definido en el manual de atención al cliente. 
          
          div(titulo="Técnicas e instrumentos").bg2.p-5
            .row.justify-content-center
                p Se plantean técnicas e instrumentos para documentar los resultados en esta gestión, lo cual implica, construir un informe consolidando los resultados obtenidos con el fin de proponer acciones de mejora pertinentes.

    .row.align-items-end.bg3.h4.p-3.mt-5 Canales de atención al cliente
    p.mt-5.mb-5 Entre los canales de atención al cliente siempre se encontrará, en primer lugar, la atención cara a cara donde la organización tiene la oportunidad de atender a un cliente, interactuando de tal forma, que le brinde toda la información y satisfaga sus necesidades y expectativas.
    p.mb-5 Existen nuevas formas de atender al cliente, con el propósito de estar al alcance de un #[i clic] y estas son:

    .row.justify-content-center.bg4.mg-img.mt-5.mb-5.mg-img-final
      .row.justify-content-center.mt-5  
        .col-md-11
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
            .row(titulo="Asistente personal ").bg2.px-5
              .row.justify-content-center
                .col-md-7              
                  p Es el servicio presencial, es el que se realiza cuando el cliente acude directamente a la empresa o punto de atención física, con el ánimo de aclarar dudas sobre el funcionamiento del producto o sobre el tiempo de entrega de este.
                .col-md-5
                  figure
                    img(src="@/assets/curso/temas/tema1/img54.png", alt="alt")   
  
            div(titulo="Teléfono").bg2.px-5
              .row.justify-content-center
                .col-md-7
                  p Es el canal de mayor uso. Este canal de servicio se puede utilizar, tanto de forma receptiva, recibiendo demandas de los clientes, como activa, evaluando la satisfacción del cliente.
                .col-md-5
                  figure
                    img(src="@/assets/curso/temas/tema1/img55.png", alt="alt")                   

            div(titulo="URA").bg2.px-5
              .row.justify-content-center
                .col-md-7
                  p La Unidad de Respuesta Audible se considera un canal, gracias a su capacidad de atender al cliente sin tener un agente de servicio presente. Reconoce dígitos y comandos de voz y, por lo tanto, durante la llamada, el cliente puede resolver varios problemas sin tener que hablar con el servicio humano.
                .col-md-5
                  figure
                    img(src="@/assets/curso/temas/tema1/img56.png", alt="alt")  

            div(titulo="E-mail").bg2.px-5
              .row.justify-content-center
                .col-md-7
                  p El correo electrónico tiene aplicación para formalizar la comunicación con el cliente, es más dinámico en el sentido que el agente de servicio use respuestas automáticas y predeterminadas para optimizar su labor.
                .col-md-5
                  figure
                    img(src="@/assets/curso/temas/tema1/img57.png", alt="alt") 

            div(titulo="<i>Chat</i>").bg2.px-5
              .row.justify-content-center
                .col-md-7
                  p Consiste en intercambiar mensajes con los clientes directamente desde el sitio #[i web] de la empresa o mediante la aplicación de mensajería haciendo uso de la inteligencia artificial, de manera que preste asistencia automática.
                .col-md-5
                  figure
                    img(src="@/assets/curso/temas/tema1/img58.png", alt="alt")  

            div(titulo="Autoservicio").bg2.px-5
              .row.justify-content-center
                .col-md-7
                  p Se entiende que las soluciones de autoservicio permiten al cliente resolver sus problemas sin la necesidad que interfiera un agente como URA, #[i Chatbot] de preguntas frecuentes FAQ (#[i Frequently Asked Questions]), que es una página donde los clientes encuentran las preguntas más comunes sobre los productos y/o servicios de la empresa, seguidas de las respuestas.
                .col-md-5
                  figure
                    img(src="@/assets/curso/temas/tema1/img59.png", alt="alt")   

            div(titulo="Aplicaciones de mensajería").bg2.px-5
              .row.justify-content-center
                .col-md-7
                  p WhatsApp, Facebook, Messenger y otras aplicaciones de mensajería asincrónica, también forman parte de la lista de canales de servicio que puede utilizar una empresa.
                .col-md-5
                  figure
                    img(src="@/assets/curso/temas/tema1/img60.png", alt="alt")  

            div(titulo="SMS").bg2.px-5
              .row.justify-content-center
                .col-md-7
                  p Son otra forma de comunicarse con los clientes a través de mensajes de texto. Con bajo costo y buenas tasas de apertura, esta solución contribuye a una comunicación eficiente entre marca y cliente.
                .col-md-5
                  figure
                    img(src="@/assets/curso/temas/tema1/img61.png", alt="alt") 

            div(titulo="Redes sociales").bg2.px-5
              .row.justify-content-center
                .col-md-7
                  p Se optimizan en la función de canal de servicio. Esto se debe a que el público empezó a utilizar los medios, no solo para conocer productos y servicios, sino también para aclarar dudas e incluso, realizar compras.
                .col-md-5
                  figure
                    img(src="@/assets/curso/temas/tema1/img62.png", alt="alt")                                                                                                                      
                                        


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
