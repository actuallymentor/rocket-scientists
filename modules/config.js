const ip = require( 'ip' )
const { normalize } = require( 'path' )

module.exports = {

	// ///////////////////////////////
	// Identity variables used in pug templates
	// Relevant for SEO
	// ⚠️ You should edit this section
	// ///////////////////////////////
	identity: {
		title: "Rocket Scientists",
		desc: "a Rocket Pool technical contributor guild",
		"logo": "logo.jpg"
	},
	

	// ///////////////////////////////
	// System vars managing some pug elements as well as file paths
	// ///////////////////////////////
	system: {

		// // ⚠️ You should edit the 'url' key to be the production URL
		url: process.env.NODE_ENV == 'production' ? 'https://rocket-scientists.web.app/' : 'http://' + ip.address() + ':3000/',

		public: normalize( process.env.NODE_ENV == 'production' ? __dirname + '/../docs/' : __dirname + '/../public/' ),
		source: normalize( __dirname + '/../src/' ),
		timestamp: new Date().getTime(),
		year: new Date().getFullYear(),

		// Browser compatibility warnings
		browser: {
			support: {
				browsers: [ 'last 2 versions', 'not dead', 'not op_mini all' ],

				// Format your own based on: https://github.com/browserslist/browserslist
				// browsers: [ '>1%' ]
			}
		},

		// Image  compression settings, these defaults are fine for many people
		images: {
			defaultCompression: 80, // Default jpeg compression
			sizes: [ 100, 240, 480, 720, 1080, 2160, 3840 ], // Image sizes to generate
			extensions:  [ 'jpg', 'png', 'jpeg', 'webp' ] // Image file extensions to compress and transform
		}

	},
	
	// ///////////////////////////////
	// About the author. Change this to your own
	// ⚠️ You should edit this section
	// ///////////////////////////////
	author: {
		firstname: "Rocket",
		lastname: "Scientists",
		// email: "mentor@palokaj.co",
		// twitter: "@actuallymentor",
		// url: "https://www.skillcollector.com/"
	},

	// ///////////////////////////////
	// Tracking codes
	// ⚠️ You should edit this section
	// ///////////////////////////////
	track: {
		gverification: undefined, // Google webmaster verification code
		gtm: undefined // Google tag manager code
	}
	
}