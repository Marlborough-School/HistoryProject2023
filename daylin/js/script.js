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

});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'duck':'ducksong.jpg',
	'duck2':'duck2.jpeg',
	'black':'black.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'first slide':'slide1.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background crycat with fadeIn',
		'Chiune sugihara was a japanese diplomat who saved the lives of thousands of jewish refugees during World War II.','He was born on january 1st 1900, into a middle class family on the main island of Honshu, located in rural japan. In 1918, he entered Waseda University and was an english major. His father wanted him to become a physician, but he intentionally failed the entrance exam by writing only his name on the paper.',
		'Example question: Hey bum bum bum got any grapes?',
		{'Choice':{
			'Y':{
				'Text': 'Yes, I do have grapes',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No, I do not sell grapes',
				'Do': 'jump noAnswer'
			},
		    },
	        },
        ],

	'yesAnswer':[
		'show background black',
		'You will be able to code more choices/buttons into your project. Click to see another example.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'You will be able to code more choices/buttons into your project. Click to see another example.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Red Grapes',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Green Grapes',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Black Grapes',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background duck with fadeIn',
                'show video cat-video background',
		'Sorry, we have no red grapes! I am sending you back to choose another option.',
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
        <b>Chiune Sugihara</b>
				<br/>
				<br/>
        By: Daylin Kaplan
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
