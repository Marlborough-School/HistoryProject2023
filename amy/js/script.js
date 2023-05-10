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
    'Kawamoto':'Kawamotophoto.jpeg',
    'classroom': 'classroom.jpg',
    'bomb':'bomb.jpg',
    'flat':'flat.jpg',

});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'duck2':'duck2.jpeg',
	'black':'black.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show image Kawamoto with fadeIn',
		'Yoshitaka Kawamoto was only 13 years old when a lightning flash destroyed his hometown and took away his loved ones. It was the atomic bombing of Hiroshima, and he never forgot the pain and horror of that day.',
		'“There were fires in the middle of the clouds. I checked my body…My left arm was pierced by a piece of wood that stuck in my flesh like an arrow…I had no other injuries, but I did not run away. We were taught that it was cowardly to desert ones classmates. So I crawled about the rubble, calling, \'Is there anyone alive?\'” (“What the Boy Saw: A Fire In the Sky” 1)',
        'How many children do you think died from the Hiroshima bomb?',
		{'Choice':{
			'Y':{
				'Text': '20,000',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': '10,000',
				'Do': 'jump noAnswer'
			},
        	'X':{
				'Text': '1,000',
				'Do': 'jump noAnswer'
		    },
	        },
        },
        ],

	'yesAnswer':[
		'show background black',
		'Correct! Between 90,000 and 166,000 people died in Hiroshima. It is difficult to determine exactly how many of these deaths were children, but it is believed that around 20,000 of the total deaths were children under the age of 18.',
		'jump slide2',
	],

	'noAnswer':[
		'show background black',
		'Between 90,000 and 166,000 people died in Hiroshima. It is difficult to determine exactly how many of these deaths were children, but it is believed that around 20,000 of the total deaths were children under the age of 18.',
		'jump slide2',
	],

    'slide2': [
        'show background black',
        'Yoshitaka Kawamoto is one of the few survivors of the Hiroshima bomb and has a legacy to share his personal experience with others.',
        'jump choiceScreen',
    ],
    
    
    
	'choiceScreen':[
    	'hide image Kawamoto with fadeOut',
		{'Choice':{
			'1':{
				'Text': 'Ordinary life of Kawamoto',
				'Do': 'jump slide6',
			},
			'2':{
				'Text': 'Hiroshima Bomb',
				'Do': 'jump slide8',
			},
			'3':{
				'Text': 'Ota and the Handbook',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'slide6':[
		'show image classroom center with fadeIn',
		'Prior to the nuclear bomb, Kawamoto was an ordinary schoolboy living with his mother and younger brother in Ono, 30 kilometers outside of Hiroshima. Every morning in Ono, he followed a routine of waking up at six a.m., putting on his school uniform, and catching a train for Hiroshima where he attended Hiroshima Prefectural First Middle School. On the morning of the bombing, Kawamoto kissed his mother goodbye and headed towards the railway station.',
		'jump slide7',
	],
    
    'slide7':[
		'show image classroom center with fadeIn',
                'show video cat-video background',
		'Kawamoto arrived at school at 7:45 a.m. and proceeded to his school schedule with a morning assembly that began in the schoolyard at 8 a.m. During this assembly, students stood in rows and bowed to a photo of the Emperor. That was when Kawamoto saw B-29s flying overhead as he stood in the yard, but soon he was instructed to return to the classrooms where they sat at their desks. When the senior boys ordered the class to begin their meditation, his classmate Fujimoto, who was seated by the window, called out “Look! A B-29!”, which followed with a flash of light.',
        'hide image classroom with fadeOut',
		'jump choiceScreen',
    ],

	'slide8':[
		'show image bomb with fadeIn',
                'play sound cat-meow',
		'At 8:15 a.m. on Aug. 6, 1945, the US Army Air Force dropped atomic bombs on a list of preselected Japanese cities, with the first target being Hiroshima. When the lead bomber Enola Gay arrived in Hiroshima, it created an explosion with a force of over 15,000 tons of TNT, engulfing Hiroshima in flames. 80,000 people were instantly killed, including two-thirds of Kawamoto’s classmates who were sitting at their desks.',
		'jump slide9',
	],
    
  'slide9':[
        'hide image bomb with fadeOut',
		'show image flat with fadeIn',
                'play sound cat-meow',
		'The nuclear bomb created an explosion that crushed the building as it “flattened like paper-hats”(“What the Boy Saw: A Fire In the Sky” 1).', 
        'hide image flat with fadeOut',
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
        <b>Your Project Title Goes Here</b>
				<br/>
				<br/>
        By: The Duck Selling Lemonade at the Lemonade Stand
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
