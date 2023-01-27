<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Comunicación como proceso esencial en el servicio al cliente
    .row.justify-content-center
      .tarjeta
        .row.justify-content-center
          .col-sm-7.mb-3
            p.mt-5 La comunicación es la principal forma que tienen las empresas para relacionarse con sus clientes, siendo trascendental para el desarrollo organizacional; es a través de ella que un comunicador oferta sus servicios con la capacidad de promocionar sus beneficios, lo que requiere de un proceso de comunicación previo y que sin duda terminará en cierre de ventas. Las maneras más comunes de comunicarse son de forma verbal y no verbal, por lo que ambas cobran vital importancia en la atención al cliente, pues es tan importante mantener una adecuada expresión oral, así como la imagen, la postura y la disposición para atender al cliente.
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")  

    .row.justify-content-center.mt-5    
      .col-md-9
        figure
          img(src="@/assets/curso/temas/tema2/img2.png", alt="alt")
    
    p.mt-5.mb-5 En la Figura 2 se evidencia la necesidad de entrar en contacto con el cliente para conocer sus gustos, anhelos, necesidades, expectativas, de manera que, a través de las técnicas e instrumentos definidos por la organización, se mida su satisfacción y se trabaje en una mejora continua por superar las expectativas del cliente.
    p.mb-5 Las tipologías de la comunicación corresponden a la motivación para contactar al cliente. 
    p.mb-5 A continuación, se presentan las siguientes:

    .row.justify-content-center.mb-5   
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.h-tarjeta-curuva(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img3.png", alt="alt")
          .crd_hover_txt--body.tarjeta-curuva.text-center
            h4.mb-4.mt-2 #[span.text-bold SAC] (Servicio al cliente)
            p.text-center Canal que se utiliza para responder consultas, realizar sugerencias, obtener información y resolver problemas relacionados con una empresa y/o sus productos. El sistema de atención al cliente está enfocado en aclarar dudas, abrir llamadas, información en general, etc.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.h-tarjeta-curuva(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img4.png", alt="alt")
          .crd_hover_txt--body.tarjeta-curuva.text-center
            h4.mb-4 Soporte de ventas
            p.text-center Para proporcionar orientación sobre productos y servicios, y colaborar con la decisión de compra del cliente.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.h-tarjeta-curuva(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img5.png", alt="alt")
          .crd_hover_txt--body.tarjeta-curuva.text-center
            h4.mb-4 Soporte técnico
            p.text-center Orientado a resolver preguntas relacionadas con la operación e instalación de equipos y productos.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt.h-tarjeta-curuva(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/img6.png", alt="alt")
          .crd_hover_txt--body.tarjeta-curuva.text-center
            h4.mb-4 Defensor del consumidor
            p.text-center Nivel de servicio superior, utilizado cuando los otros canales no son suficientes para resolver la cita del cliente.

    .row.align-items-end.bg3.h4.p-3.mt-5 Barreras en la comunicación
    p.mt-5.mb-5 Las barreras en la comunicación son obstáculos que impiden la fluidez en la comunicación, son de especial importancia, gracias a que, al afrontarlas continuamente, se estará consolidando como entidad experta en resolver los pedidos del cliente. 
    p.mb-5 Algunas de estas barreras son (UNIR, 2021):
    .row.justify-content-center.mt-5    
      .col-md-8
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            .row.justify-content-center
              .col-sm-10  
                figure 
                  img(src='@/assets/curso/temas/tema2/img7.png', alt='alt') 

          .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="13%" y="38%" numero="+")  
            .row.justify-content-center
              p Se refiere al significado de las palabras, conocidas como el código utilizado en la comunicación, el cual sufre de modificaciones entre emisores y receptores, sometido a interpretaciones que, en ocasiones, pueden tener interpretación errónea y se presentan en diferencias de idioma y lenguaje.

          .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="61%" y="8%" numero="+")  
            .row.justify-content-center
              p Son procesos de comunicación condicionados o influidos por el estado emocional del emisor o el receptor; también se vinculan aspectos como la simpatía o el rechazo de uno de los participantes, lo que puede generar efecto en el receptor como miedo, frustración y alegría.

          .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="12%" y="86%" numero="+")  
            .row.justify-content-center
              p Las deficiencias que puedan tener el emisor o el receptor, enfermedades temporales como alergias, disfonía o resfriado o condiciones de discapacidad como ceguera, mudez, sordera, incidirán en el correcto desarrollo de la comunicación que se verá afectada por carencia de claridad o fidelidad en el mensaje.

          .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="56%" y="90%" numero="+")  
            .row.justify-content-center
              p Se refiere a los factores del entorno que bloquean la comunicación; estos son ambientales como el ruido y la distancia, tecnológicos como fallas en Internet, deficiente calidad de la señal de Internet, equipos celulares, y equipos de cómputo. 
    
    .row.align-items-end.bg3.h4.p-3.mt-5 Técnicas de comunicación 
    p.mt-5.mb-5  Las técnicas en la comunicación son la forma y el modo en que debe darse la comunicación para que esta sea efectiva.
    p.mb-5  Como parte de las técnicas de comunicación están:
    .row.justify-content-center.mt-5    
      .col-md-11
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-lg
              h3 Escucha activa
              p Consiste en un esfuerzo que requiere disposición y atención para interpretar, de manera correcta, el mensaje que se recibe. Es una técnica clave en el proceso de comunicación, gracias a que sabiendo escuchar con paciencia, se puede dar una respuesta al mensaje o solicitud recibido.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img8.png', alt='').img125  
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img9.png', alt='').img125    
            .col-lg.alineacion-texto          
                h3 Empatía
                p Comprender los sentimientos, emociones, entender razones y motivos del emisor. No significa estar de acuerdo con la posición del otro, o de ser simpáticos, sino de brindar esa receptividad al emisor con frases “comprendo lo que siente”, “nos haremos cargo” si aplican para la situación expuesta.                
          .row
            .col-lg              
              h3 Parafrasear
              p Significa retomar las ideas con otras palabras, con el fin de comprender lo que el emisor transmite y verificar si se está comprendiendo correctamente el mensaje.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img10.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img11.png', alt='').img125    
            .col-lg.alineacion-texto
              h3 Comunicar palabras de refuerzo o cumplidos
              p Se trata de definir con halagos al emisor, reforzando, confirmando o aprobando lo que se acaba de recibir o escuchar, con frases como “esto es muy divertido”; “me encanta hablar con usted” o “debe ser muy bueno jugando al tenis”, “estupendo”, entre otras.

          .row
            .col-lg
              h3 Resumir
              p A través de esta técnica se comunica al emisor el grado de comprensión que se ha obtenido del mensaje, o la necesidad de ampliación de la información.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema2/img12.png', alt='').img125  

    .row.justify-content-center.bg4.mg-img.mt-5.mb-5.mg-img-final
      p.mt-5.mb-5.m-left Al utilizar estas técnicas, la comunicación va a ser más clara y comprendida, por lo que será una comunicación fluida, cordial, respetuosa y efectiva.
      .row.justify-content-center.mt-5  
        .col-md-10
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-4                
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema2',
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
