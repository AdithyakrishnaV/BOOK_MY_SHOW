const settings = {
    infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlides: 0,
    responsive: [
     {
       breakpoints: 1024,
       settings: {
           slidesToShow: 3,
           slidesToScroll: 2,
           infinite: true,
       },
     },
     {
         breakpoints: 768,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             InitialSlides: 1,
         },
     },
     {
         breakpoints: 480,
         settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
         },
     },
    ]
 };

 export default settings;