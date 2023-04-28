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
	'crycat':'crycat2.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background duck with fadeIn',
		'Is it true or false that after the Holocaust support for Nazis and the Nazi regime continued?',
		{'Choice':{
			'Y':{
				'Text': 'True',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'False',
				'Do': 'jump noAnswer'
			},
		    },
	        },
        ],

	'yesAnswer':[
		'show background black',
		'You are correct, support continued for Nazis. You will now learn about how this support effected survivors of the Holocaust.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'Although for many it is hard to believe, it is actually true that support continued. You will now learn about how this support effected survivors of the Holocaust.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Effect of Nazis support on Holocaust Survivors',
				'Do': 'jump hook',
			},
        }
    }
        
    'choiceScreen':[
        'show background black',
        {'Choice':{
			'1':{
                'Text': 'Ealry Life',
				'Do': 'jump ELoption',
			'2':{
				'Text': 'Efforts Towards Education',
				'Do': 'jump ETEoption',
			}
		}
	}
        
        }
	],

	'hook':[
		'show background duck with fadeIn',
                'show video cat-video background',
		'In 1977, a Neo-Nazi group publically roamed the streets where many Holocaust survivors lived wearing Nazi symbols on their clothing. The representation of Nazi support made Holocaust survivors disgusted and outraged. On of those survivors was a 54-year-old woman named Erna Gans who couldn’t stand back and watch, instead Erna became an activist for Holocaust education and put a stop to a march the Neo-Nazi group was planning was her first step.',
		'jump choiceScreen',
	],

	'ETEoption':[
		'show background duck with fadeIn',
                'play sound cat-meow',
		'Sorry, we have no green grapes! I am sending you back to choose another option.',
		'jump choiceScreen',
	],

	'ELoption':[
		'show background grape with fadeIn',
		'growing up in..',
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
        <b>Erna Gans: Advocate for Holocaust Education</b>
				<br/>
				<br/>
        By: Alana Laurie
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
