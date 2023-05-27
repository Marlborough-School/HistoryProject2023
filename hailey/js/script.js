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
	'horn':'car-horn.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {
    'cat-video':'cat-2879.mp4',
});

//DEFINE THE IMAGES YOU WANT HERE
monogatari.assets ('images', {
	//'nickname for the image': 'actual name of the image',
	'face': 'face.png',
    'girl': 'girl.jpg',
    'happy': 'happy.jpeg',
    'side': 'side.jpeg',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'spy':'spy.jpg',
	'action':'action.jpg',
	'bike':'bike.jpg',
	'duo':'duo.jpg',
	'young':'young.jpg',
	'crycat':'crycat2.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show image kawamoto with fadeIn',
		'Yoshitaka Kawamoto was only 13 years old when a lightning flash destroyed his hometown and took away his loved ones. It was the atomic bombing of Hiroshima, and he never forgot the pain and horror of that day.',
        'hide image kawamoto with fadeOut',
        
        'show image destruction with fadeIn',
		'“There were fires in the middle of the clouds. I checked my body…My left arm was pierced by a piece of wood that stuck in my flesh like an arrow…I had no other injuries, but I did not run away. We were taught that it was cowardly to desert ones classmates. So I crawled about the rubble, calling, \'Is there anyone alive?\'” (“What the Boy Saw: A Fire In the Sky” 1)',
        'Were there many female spies in World War II?',
		{'Choice':{
			'Y':{
				'Text': 'Yes',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No',
				'Do': 'jump noAnswer'
		    },
	        },
        },
        ],

	'yesAnswer':[
		'show background black',
		'Correct! Many women were recruited to become spies as they were less likely to be arrested or interrogated than men.',
		'jump slide2',
	],

	'noAnswer':[
		'show background black',
		'Incorrect! Many women were recruited to become spies as they were less likely to be arrested or interrogated than men.',
		'jump slide2',
	],

	'choiceScreen':[
		'show background black',
        'hide image face ith fadeOut',
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
                'play sound horn',
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
		'end',
        'stop music music',
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
        <b> Jeannie Rousseau: The Secret Life of Spies </b>
				<br/>
				<br/>
        By: Hailey Webber
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
