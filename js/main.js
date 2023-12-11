MyApp = {
  swiperHero: {
    init: function () {
      var swiper = new Swiper(".swiperHero", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  },
  menuDinamico: {
    init: function () {
      var header = document.querySelector('header');
      var headerClass = 'hLTFFw';
      var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      function handleScroll() {
        var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        var isAtTop = currentScrollPos === 0;
        var isScrollingUp = prevScrollPos > currentScrollPos;

        if (isAtTop) {
          headerClass = 'hLTFFw';
        } else if (isScrollingUp) {
          headerClass = 'leoCdG';
        } else {
          headerClass = 'bVLcxx';
        }

        header.className = headerClass;
        prevScrollPos = currentScrollPos;
      }

      window.addEventListener('scroll', handleScroll);
    }
  },
  scollBajada: {
    init: function () {
      document.addEventListener("DOMContentLoaded", function () {
        const scrollButton = document.querySelector("button.scroll");
        const segundaSection = document.querySelector(".bajada");
        scrollButton.addEventListener("click", function () {
          const offset = segundaSection.offsetTop - 100;
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        });
      });
    }
  },
  swiperTestimonios: {
    init: function () {
      var swiper = new Swiper(".swiperTestimonios", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        loop: true,
        pagination: {
          type: 'fraction',
          el: 'section.testimonios .indicador .swiper-pagination',
        },
      })
      $('.swiperTestimonios').on('mouseenter', function () {
        swiper.autoplay.stop();
      });

      $('.swiperTestimonios').on('mouseleave', function () {
        swiper.autoplay.start();
      });
    }
  },
  mySwiperBlogHome: {
    init: function () {
      var swiper = new Swiper(".mySwiperBlogHome", {
        slidesPerView: 3,
        spaceBetween: 30,
        /*
        autoplay: {
          delay: 1500,
          disableOnInteraction: true,
        },
        loop: true,
        */
        navigation: {
          nextEl: ".infoAdicional .swiper-button-next",
          prevEl: ".infoAdicional .swiper-button-prev",
        },
        breakpoints: {
          1281: {
            spaceBetween: 30,
          },
          1025: {
            spaceBetween: 24,
            slidesPerView: 3,
          },
          769: {
            spaceBetween: 24,
            slidesPerView: 2.75,
          },
          651: {
            spaceBetween: 24,
            slidesPerView: 2.15,
          },
          501: {
            spaceBetween: 24,
            slidesPerView: 1.5,
          },
          381: {
            spaceBetween: 24,
            slidesPerView: 1.2,
          },
          0: {
            spaceBetween: 24,
            slidesPerView: 1,
          }
        },
      })
      $('.mySwiperBlogHome').on('mouseenter', function () {
        swiper.autoplay.stop();
      });

      $('.mySwiperBlogHome').on('mouseleave', function () {
        swiper.autoplay.start();
      });
    }
  },
  videoZoom: {
    init: function () {
      var content3 = document.querySelectorAll(".video1 .imgVideo");
      var tl = gsap.timeline({
        scrollTrigger: {
          /*markers: true,*/
          trigger: 'section.bajada',
          start: '-80% top',
          end: '-20% top',
          scrub: 1,
        },
      });
      tl.to(content3, { scale: 1, duration: 500, ease: "none" })
    }
  },
  caracteristicas: {
    init: function () {
      document.querySelector(".cabecera").closest(".itemTab").classList.add("open");
      const cabeceras = document.querySelectorAll('.cabecera');
      var fondoImg = document.querySelector('.part2 .img .fondo img');
      var primeraPortada = document.querySelector('.itemTab:first-child .contentText img.portada').src;

      if (primeraPortada) {
        fondoImg.src = primeraPortada;
      }

      cabeceras.forEach(cabecera => {
        cabecera.addEventListener('click', () => {
          const itemTabs = document.querySelectorAll('.itemTab');
          itemTabs.forEach(itemTab => {
            itemTab.classList.remove('open');
          });
          cabecera.parentElement.classList.add('open');
          var imgURL = cabecera.parentElement.querySelector('.contentText img.portada').src;
          if (fondoImg) {
            fondoImg.src = imgURL;
          }
        })
      });

      $(".caracteristicas .part2 .img").stick_in_parent({
        offset_top: 100,
        offset_right: 52,
      });
    }
  },
  marquee: {
    init: function () {
      $('.marquee-izquierda').marquee({
        duration: 10000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
      });

      $('.marquee-derecha').marquee({
        duration: 10000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true,
      });
    }
  },
  marqueeNosotros: {
    init: function () {
      $('.marqueeNosotrosInfo').marquee({
        duration: 15000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
      });
    }
  },
  swiperEstudio: {
    init: function () {
      var swiper = new Swiper(".swiperEstudio", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".estudioRespaldos .swiper-button-next",
          prevEl: ".estudioRespaldos .swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        breakpoints: {
          1025: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
          769: {
            spaceBetween: 30,
            slidesPerView: 2,
          },
          501: {
            spaceBetween: 30,
            slidesPerView: 1.8,
          },
          381: {
            spaceBetween: 30,
            slidesPerView: 1,
          },
          0: {
            spaceBetween: 30,
            slidesPerView: 1,
          },
        },
      })
      $('.swiperEstudio').on('mouseenter', function () {
        swiper.autoplay.stop();
      });

      $('.swiperEstudio').on('mouseleave', function () {
        swiper.autoplay.start();
      });
    }
  },
  swiperProductos: {
    init: function () {
      var swiper = new Swiper(".swiperProductos", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".ProductosMarca .swiper-button-next",
          prevEl: ".ProductosMarca .swiper-button-prev",
        },
        /*
        autoplay: {
          delay: 1500,
          disableOnInteraction: true,
        },
        loop: true,
        */
        breakpoints: {
          1281: {
            spaceBetween: 30,
            slidesPerView: 4,
          },
          769: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
          651: {
            spaceBetween: 30,
            slidesPerView: 2.3,
          },
          557: {
            spaceBetween: 30,
            slidesPerView: 1.8,
          },
          471: {
            spaceBetween: 30,
            slidesPerView: 1.5,
          },
          380: {
            spaceBetween: 30,
            slidesPerView: 1.2,
          },
          0: {
            spaceBetween: 30,
            slidesPerView: 1.2,
          },
        },
      })
      $('.swiperProductos').on('mouseenter', function () {
        swiper.autoplay.stop();
      });

      $('.swiperProductos').on('mouseleave', function () {
        swiper.autoplay.start();
      });
    }
  },
  preguntasFrecuentes: {
    init: function () {
      if ($(`.itemTab`).length >= 5) {
        $("#cargarMasModulo").attr("style", "display:flex;");
      }
      $(`.itemTab.modulo-mas`).hide();
      $(`.itemTab.modulo-mas`).slice(0, 5).show(0);
      $("#cargarMasModulo").click(function (e) {
        e.preventDefault();
        $(`.modulo-mas:hidden`).slice(0, 5).slideDown(0);
        if ($(`.modulo-mas:hidden`).length == 0) {
          $("#cargarMasModulo").attr("style", "display:none;");
        }
      })
    }
  },
  zoom: {
    init: function () {

      var items = document.querySelectorAll('.galeria .item');
      items[0].classList.add("select")
      var imageUrl = items[0].querySelector('img').src;
      document.getElementById('contentImg').querySelector('img').src = imageUrl;

      items.forEach(function (item, index) {
        item.addEventListener('click', function () {
          items.forEach(function (i) {
            i.classList.remove('select');
          });
          item.classList.add('select');
          var imageUrl = item.querySelector('img').src;
          document.getElementById('contentImg').querySelector('img').src = imageUrl;
          $('#contentImg').trigger('zoom.destroy');
          $(document).ready(function () {
            $('#contentImg').zoom({ on: 'grab' });
          });
        });
      });

      $('#contentImg').zoom({ on: 'grab' });
    }
  },
  desplegableItem: {
    init: function () {
      document.addEventListener("click", function (e) {
        if (e.target.closest(".mainProducto .part2 .desplegable")) {
          e.target.parentElement.classList.toggle("open");
        }
      })
    }
  },
  articuloFixer: {
    init: function () {
      var fixedProducto = document.querySelectorAll("section.fixedProducto");
      var tl = gsap.timeline({
        scrollTrigger: {
          /*markers: true,*/
          trigger: 'section.mainProducto',
          start: '20% 20%',
          end: '20% 20%',
          scrub: 1,
        },
      });
      tl.to(fixedProducto, { y: 0, duration: 1, linear: "none" })
    }
  },
  mySwiperPublico: {
    init: function () {
      var swiper = new Swiper(".mySwiperPublico", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".publico .swiper-button-next",
          prevEl: ".publico .swiper-button-prev",
        },
        /*
        autoplay: {
          delay: 1500,
          disableOnInteraction: true,
        },
        loop: true,
        */
        breakpoints: {
          901: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
          801: {
            spaceBetween: 30,
            slidesPerView: 2.5,
          },
          551: {
            spaceBetween: 30,
            slidesPerView: 2,
          },
          381: {
            spaceBetween: 30,
            slidesPerView: 1.5,
          },
          0: {
            spaceBetween: 30,
            slidesPerView: 1,
          },
        },
      })
      $('.mySwiperBlogHome').on('mouseenter', function () {
        swiper.autoplay.stop();
      });

      $('.mySwiperBlogHome').on('mouseleave', function () {
        swiper.autoplay.start();
      });
    }
  },
  mySwiperContacto:{
    init: function () {
      var swiper = new Swiper(".mySwiperContacto", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".mainContacto .swiper-button-next",
          prevEl: ".mainContacto .swiper-button-prev",
        },
        breakpoints: {
          901: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          769: {
            slidesPerView: 2.35,
            spaceBetween: 30,
          },
          600: {
            spaceBetween: 25,
            slidesPerView: 2.2,
          },
          500: {
            spaceBetween: 25,
            slidesPerView: 2,
          },
          425: {
            spaceBetween: 25,
            slidesPerView: 1.5,
          },
          380: {
            spaceBetween: 25,
            slidesPerView: 1.2,
          },
          0: {
            spaceBetween: 25,
            slidesPerView: 1.15,
          },
        },
      })
    }
  },
  menuDesplegable: {
    init: function () {
      var desplegables = document.querySelectorAll('footer .desplegable');
  
      desplegables.forEach(function (element) {
        element.addEventListener('click', function () {
          this.classList.toggle('open');
          desplegables.forEach(function (item) {
            if (item !== element && item.classList.contains('open')) {
              item.classList.remove('open');
            }
          });
        });
      });
    }
  },
  cambioPageSelect: {
    init: function () {
      var selectElement = document.querySelector('#seleccionarPagina');
      selectElement.selectedIndex = 0;
      selectElement.addEventListener('change', (event) => {
        var selectedValue = selectElement.value;
        if (selectedValue !== '') {
          window.location.href = selectedValue;
        }
      })

      if($('#seleccionarPagina').length > 0){
        setTimeout(function() {
            var text = $('#seleccionarPagina').attr('value');
            $('#seleccionarPagina').val(text);
        }, 500);
      }
    }
  }
}

if ($('footer .desplegable').length > 0) {
  MyApp.menuDesplegable.init();
}

if ($('.mainContacto .content2').length > 0) {
  MyApp.mySwiperContacto.init();
}

if ($('section.publico').length > 0) {
  MyApp.mySwiperPublico.init();
}

if ($('section.marqueeNosotros').length > 0) {
  MyApp.marqueeNosotros.init();
}

if ($('section.fixedProducto').length > 0) {
  MyApp.articuloFixer.init();
}

if ($('.mainProducto .desplegable').length > 0) {
  MyApp.desplegableItem.init();
}

if ($('.zoom').length > 0) {
  MyApp.zoom.init();
}

if ($('.swiperHero').length > 0) {
  MyApp.swiperHero.init();
}

if ($('header').length > 0) {
  MyApp.menuDinamico.init();
}

if ($('button.scroll').length > 0) {
  MyApp.scollBajada.init();
}

if ($('section.testimonios').length > 0) {
  MyApp.swiperTestimonios.init();
}

if ($('.mySwiperBlogHome').length > 0) {
  MyApp.mySwiperBlogHome.init();
}

if ($('.video1 .imgVideo').length > 0) {
  MyApp.videoZoom.init();
}

if ($('section.caracteristicas').length > 0) {
  MyApp.caracteristicas.init();
}

if ($('.marquee').length > 0) {
  MyApp.marquee.init();
}

if ($('.swiperEstudio').length > 0) {
  MyApp.swiperEstudio.init();
}

if ($('.swiperProductos').length > 0) {
  MyApp.swiperProductos.init();
}

if ($('.preguntasFrecuentes').length > 0) {
  MyApp.preguntasFrecuentes.init();
}

if ($('section.tabs select').length > 0) {
  MyApp.cambioPageSelect.init();
}

document.addEventListener("click", function (e) {
  if (e.target.closest("section.bajada .video1 button")) {
    var nameURL = e.target.parentElement.querySelector(".urlvieo").textContent;
    console.log(nameURL);
    Swal.fire({
      showCloseButton: true,
      html:
        '<div class="video1-modal-content">' +
        '<div class="video1-modal-content__mask">' +
        '<div class="video1-modal-content__video-wrapper">' +
        '<div style="padding:56.25% 0 0 0;position:relative;">' +
        `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    });
  }

  if (e.target.closest("section.comoTeAfecta .contentVideo button")) {
    var nameURL = e.target.parentElement.querySelector(".urlvieo").textContent;
    console.log(nameURL);
    Swal.fire({
      showCloseButton: true,
      html:
        '<div class="video1-modal-content">' +
        '<div class="video1-modal-content__mask">' +
        '<div class="video1-modal-content__video-wrapper">' +
        '<div style="padding:56.25% 0 0 0;position:relative;">' +
        `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    });
  }
  if (e.target.closest("section.infoTecnica .contentInfo .part2 .content button")) {
    var nameURL = e.target.parentElement.querySelector(".urlvieo").textContent;
    console.log(nameURL);
    Swal.fire({
      showCloseButton: true,
      html:
        '<div class="video1-modal-content">' +
        '<div class="video1-modal-content__mask">' +
        '<div class="video1-modal-content__video-wrapper">' +
        '<div style="padding:56.25% 0 0 0;position:relative;">' +
        `<iframe src="${nameURL}" title="YouTube video player" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>` +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    });
  }
  if (e.target.closest("header .navigation .part3 ul li.menuMovil button")) {
    document.querySelector("section.menuMovil").classList.toggle("open")
  } 
})



$('.marqueeBeneficios').marquee({
  duration: 15000,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
});