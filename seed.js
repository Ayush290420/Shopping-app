const mongoose = require('mongoose');
const product = require('./models/product');
const products = [{
        name: "MackBook",
        image: "https://images.unsplash.com/photo-1612903351382-051d6a8fc641?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hY2tib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 50000,
        desc: "The MacBook is a brand of Macintosh laptop computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005. The current lineup consists of the MacBook Air (2008–present) and the MacBook Pro (2006–present). "
    },
    {
        name: "Iphone 11 pro max",
        image: "https://images.unsplash.com/photo-1603898037225-1bea09c550c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTElMjBwcm8lMjBtYXh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 49000,
        desc: "The iPhone 11 Pro and iPhone 11 Pro Max are smartphones designed, developed and marketed by Apple Inc. They are the 13th-generation flagship iPhones, succeeding the iPhone XS and iPhone XS Max, respectively. Apple CEO Tim Cook unveiled the devices alongside a lower-end model, the iPhone 11, on September 10, 2019, at the Steve Jobs Theater at Apple Park. "
    },
    {
        name: "Rolex Watch",
        image: "https://images.unsplash.com/photo-1610897534349-7759782118b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cm9sZXh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 12000,
        desc: "Rolex SA (/ˈroʊlɛks/) is a luxury watch manufacturer based in Geneva, Switzerland.[3] Originally founded as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London, England in 1905, the company registered Rolex as the brand name of its watches in 1908, and became Rolex Watch Co. Ltd. in 1915.[4][5][6][7] After World War I"
    },
    {
        name: "BoAt Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 2000,
        desc: "Like truly wireless earbuds, tethered earbuds do not connect directly to an audio source (like the audio-out port on a mobile phone, computer, or stereo). However, tethered wireless earbuds are connected to one another via a wire, or are connected to a band which houses the batteries, controls, and onboard processors which drive the speakers in the earbuds."
    },
    {
        name: "One plus 7 Pro",
        image: "https://images.unsplash.com/photo-1580521923679-6d275830d039?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b25lcGx1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 39000,
        desc: "Both phones have a metal/glass construction, with an anodized aluminium frame and Gorilla Glass 5 on both the front and back. The OnePlus 7 opts for a more conservative design with a notch, resembling the 6T, while the OnePlus 7 Pro has a near-full screen curved display with an 88.1% screen-to-body ratio. Both are available in Mirror Gray."
    },
    {
        name: "Canon Camera",
        image: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fub258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 68000,
        desc: "Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR) and mirrorless camera series produced by Canon Inc. Introduced in 1987 with the Canon EOS 650, all EOS cameras used 35 mm film until October 1996 when the EOS IX was released using the new and short-lived APS film. "
    }
]


const seedDb = () => {
    product.insertMany(products);
    console.log("Data Seeded");
}

module.exports = seedDb;