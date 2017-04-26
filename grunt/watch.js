module.exports = {

    options: {
        spawn: false,
        livereload: true,
        livereload: {
            port: 35728,
        }
    },

    css: {
        files: [
            'css/**'
        ],
		tasks: [
            'css'
        ]
    },
	
	html: {
        files: [
            '**/*.html',
			'views/**'
        ],
		tasks: [
            'html'
        ]
    },
	script: {
        files: [
            'scripts/**'
        ],
		tasks: [
            'script'
        ]
    },
	img: {
        files: [
            'img/**'
        ],
		tasks: [
            'img'
        ]
    },
	assets: {
        files: [
            'assets/**'
        ],
		tasks: [
            'assets'
        ]
    },
};
