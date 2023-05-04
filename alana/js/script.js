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
    'march':'skokiemarch.jpg',
    'rally':'nazirally.jpeg',
    'erna':'ernagans.webp',
    'actionday':'actionday',
    'Nparade':'american-nazi-parade.webp',
    'NUS':'nazismUS.jpeg',
    'polandMap':'polandMap.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background erna',
		'Do you think it is true or false that after the Holocaust support for Nazis and the Nazi regime continued?',
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
		'show background NUS',
		'You are correct, support continued for Nazis. You will now learn about a Holocaust survivor named Erna Gans and how these demonstrations effected her.',
		'jump hook',
	],

	'noAnswer':[
		'show background NUS',
		'Although for many it is hard to believe, it is actually true that support continued. You will now learn about a Holocaust survivor named Erna Gans and how these demonstrations effected her.',
		'jump hook',
    
	],

	'hook':[
		'show background rally with fadeIn',
    
		'In 1977, a Neo-Nazi group publically roamed the streets where many Holocaust survivors lived wearing Nazi symbols on their clothing. The representation of Nazi support made Holocaust survivors disgusted and outraged. On of those survivors was a 54-year-old woman named Erna Gans.',
		'jump choiceScreen',
	],
    
    	'choiceScreen':[
		'show background black',
		{'Choice':{
			'1':{
				'Text': 'Life Before Activism',
				'Do': 'jump beforeActivism',
			},
			'2':{
				'Text': 'Efforts Toward Education',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'What Erna Gans Accopmlished',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

    'beforeActivism':[
        'show background polandMap',
        'Erna grew up speaking German in Bielsko, Poland, a city that was very much influenced by German culture. As a teen Erna worked as a house cleaner where she was able to befriend some of the Germans who she worked for because she spoke the sam language. One day Erna got a call from one of her employers warning her that there was an action day happening soon and told her to coming to his apartment and hide there for the day.',
        'jump Before2',
    ],
    
    'Before2':[
        'show background black',
        'The next time there was an action day the man whom had helped Erna before was out of town so Erna’s mother told Erna to walk around that day away from the ghetto where they lived.',
        'jump Before3',
    ],
    
    'Before3':[
        'show background black',
        'Erna came home that night to the sight of her mother and brother being taken. She motioned for her to leave to protect her but in doing so Erna was left alone and was soon captured and taken to Plaszow concentration camp.',
        'jump choiceScreen',
    ],
    
	'greenGrape':[
		'show background black',
                'play sound cat-meow',
		'Sorry, we have no green grapes! I am sending you back to choose another option.',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background black',
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
		'show background black with fadeIn',
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
