const mongoose = require('mongoose');
const product = require('./models/product');
const products = [{
    name: "MackBook",
    image: "https://images.unsplash.com/photo-1612903351382-051d6a8fc641?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hY2tib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 50000,
    desc: "The MacBook is a brand of Macintosh laptop computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005. The current lineup consists of the MacBook Air (2008–present) and the MacBook Pro (2006–present). "
}]


const seedDb = () => {
    product.insertMany(products);
    console.log("Data Seeded");
}

module.exports = seedDb;