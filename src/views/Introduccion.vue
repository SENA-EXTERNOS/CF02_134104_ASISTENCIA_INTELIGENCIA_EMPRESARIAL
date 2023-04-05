<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/portada/introduccion.png", alt="alt")
          .col-sm-7.mb-3
            p.mt-5 Apreciado aprendiz, bienvenido a este componente formativo, donde se trabajará sobre los requerimientos de servicio al cliente, reconocidos como una estrategia de atención, que la organización debe definir, de manera minuciosa y detallada, con el fin de garantizar que el cliente siempre encontrará respuesta y solución a sus peticiones; de esta manera, se dota a los representantes de este servicio, de un protocolo de atención detallado como procedimiento, estructurado en un manual que lleva ese nombre, con el fin de brindar las herramientas necesarias que faciliten la atención y el servicio al cliente.

    p.mt-5.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kIYXGzgWJQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video              
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
