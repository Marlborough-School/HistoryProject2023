/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	},
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'cat-meow':'cat-meow.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {
    'cat-video':'cat-2879.mp4',
});

//DEFINE THE IMAGES YOU WANT HERE
monogatari.assets ('images', {
	//'nickname for the image': 'actual name of the image',
    //'yang':'YANG.jpg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'yang':'YANG.jpg',
	'duck2':'yangc.jpeg',
	'black':'black.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
    'yang2':'yang2.jpeg',
    
});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
        'show background yang with fadeIn',
		'There once was a soldier who fought for 3 different countries in the same war. This man was born in Korea, but served for Japan, Germany, and Russia. Though the mystery is, is he even real? ',
         'show background yang2 with fadeIn',
		'Are you interested in the story of this mystery man?',
		{'Choice':{
			'Y':{
				'Text': 'Yes',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'Yes',
				'Do': 'jump noAnswer'
			},
		    },
	        },
        ],

	'yesAnswer':[
		'show background black',
		'Good Choice! Let us take a look at his life.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'Good! Let us take a look at his life.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Early Life',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Japan',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Russia',
				'Do': 'jump blackGrape',
			},
            '4':{
				'Text': 'Germany',
				'Do': 'jump blueGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background duck with fadeIn',
                'show video cat-video background',
		'The earliest known information about Yang starts when he was 18. He was living in Manchuria, China, which was being controlled by Japan. While living there, he was forcefully drafted in the Kwantung Army in 1938. The Kwantung Army was one of Japans main fighting forces that helped lead them through the war. Yangs role in the army was to go to northern Manchuria and help fight against the USSR.',
                'hide video cat-video',
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background duck with fadeIn',
                'play sound cat-meow',
		'Sorry, we have no green grapes! I am sending you back to choose another option.',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background grape with fadeIn',
		'You found the grapes! Now we will go the end of the project',
		'jump choiceScreen',
	],
    'blueGrape':[
		'show background grape with fadeIn',
		'You found the grapes! Now we will go the end of the project',
		'jump Ending',
	],

	'Ending':[
		'show background potatocat with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background crycat with fadeIn',
		'I hope you understand what you will be doing. If you do not, ask Senya in class for help.',
		'Go make your own project now have fun lol',
		'end'
	]
});

monogatari.component ('main-screen').template (() => {
    return `
				<center>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<p>
        <b>Yang Kyoungjong </b>
				<br/>
				<br/>
        By: anniepa..
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
