const QRCode = require('easyqrcodejs-nodejs');

// Options
// var options = {
// 	text: "www.easyproject.cn/donation"
// };
var options = {
		// ====== Basic
		text: "www.feelyprivacy.com",
		width: 256,
		height: 256,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H, 


    //logo: "../demo/mani.jpg", // Relative address, relative to `easy.qrcode.min.js`
		//logo: "https://cdn.dribbble.com/users/3002151/screenshots/15559144/media/7bfd087def569817ae4da12fe2399e31.jpg?compress=1&resize=400x300", 
    //logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/cd6dbnrbsh96juyz7rik",
    logo: "https://image.flaticon.com/icons/png/512/64/64495.png",
		logoWidth: 80, // fixed logo width. default is `width/3.5`
		logoHeight: 80, // fixed logo height. default is `heigth/3.5`
		logoMaxWidth: undefined, // Maximum logo width. if set will ignore `logoWidth` value
		logoMaxHeight: undefined, // Maximum logo height. if set will ignore `logoHeight` value
		logoBackgroundColor: '#fffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
		logoBackgroundTransparent: false,
  };
// New instance with options
var qrcode = new QRCode(options);

// Save QRCode image
qrcode.saveImage({
	path: 'q2.png' // save path
});