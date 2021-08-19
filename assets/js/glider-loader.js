function loadGlider() {
  let glider = new Glider(document.querySelector(".glider"), {
    slidesToShow: 1.2,
          slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
          scrollLock: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25,
          scrollLock: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  function sliderAuto(slider, miliseconds) {
    const slidesCount = slider.track.childElementCount;
    let slideTimeout = null;
    let nextIndex = 0.9;

    function slide() {
      slideTimeout = setTimeout(function () {
        if (nextIndex >= slidesCount) {
          nextIndex = 0;
        }
        slider.scrollItem(nextIndex);
nextIndex+=1;
      }, miliseconds);
    }

    slider.ele.addEventListener("glider-animated", function () {
      window.clearInterval(slideTimeout);
      slide();
    });

    slide();
  }

  sliderAuto(glider, 5000);
}


function loadGliderSingleSlide(selector) {
  let newglider = new Glider(document.querySelector(selector), {
    slidesToShow: 6.2,
          slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
          scrollLock: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25,
          scrollLock: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6.2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  function sliderAuto(slider, miliseconds) {
    const slidesCount = slider.track.childElementCount;
    let slideTimeout = null;
    let nextIndex = 0.9;

    function slide() {
      slideTimeout = setTimeout(function () {
        if (nextIndex >= slidesCount) {
          nextIndex = 0;
        }
        slider.scrollItem(nextIndex);
nextIndex+=1;
      }, miliseconds);
    }

    slider.ele.addEventListener("glider-animated", function () {
      window.clearInterval(slideTimeout);
      slide();
    });

    slide();
  }

  sliderAuto(newglider, 5000);
}
