export const certifcatesSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    rows: 2,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1536,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                rows: 2, // Set to 1 row for larger screens
            },
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                rows: 2, // Set to 1 row for this breakpoint as well
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 1, // Set to 1 row
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 1, // Set to 1 row
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1, // Set to 1 row for mobile
            },
        },
    ],
};
