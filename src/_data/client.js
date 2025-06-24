module.exports = {
    name: "Stashluk",
    email: "info@stashluk.com",
    phoneForTel: "908-227-6200",
    phoneFormatted: "(908) 227-6200",
    address: {
        lineOne: "31 Chatham Rd",
        lineTwo: "",
        city: "Summit",
        state: "NJ",
        zip: "07901",
        country: "US",
        mapLink: "https://maps.app.goo.gl/XjS1w5ZBvwPru4kt8",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/stashluk_inc/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://stashluk.com/",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
