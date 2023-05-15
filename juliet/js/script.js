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
 'war':'war.m4a',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	
});

// Define the videos used in the game.
monogatari.assets ('videos', {
    'cat-video':'cat-2879.mp4',
});

//DEFINE THE IMAGES YOU WANT HERE
monogatari.assets ('images', {
	//'nickname for the image': 'actual name of the image',
'owen':'owen portrait.png',
'child':'child.jpg',
'teacher':'teacher.png',
'dulce':'dulce.png'
    ''
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
'white':'white.jpg',	
});


//
monogatari.script ({
	'Start': [
        'show background white with fadeIn',
        'show image owen with fadeIn',
		'To most of us, Saturday, March 18, 1893, is not a day to remember, nothing more than a random, insignificant date that holds no importance in the grand scheme of things. But, on this seemingly trivial day, a young woman gave birth to a baby boy in Shropshire, England. The little boy was given the name Wilfred Edward Salter Owen, one that would soon belong to one of the greatest British poets in history.',
		'Did many war poets of World War II generally express disillusionment with the war in their poetry?',
		{'Choice':{
			'Y':{
				'Text': 'Yes, resentment was widespread.',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No, Owen was one of the few who spoke up.',
				'Do': 'jump noAnswer'
			},
		    },
	        },
        ],

	'yesAnswer':[
		'show background black',
		'Correct, many poets discussed their disdain for the war and its destruction, as well as its tremendous emotional impact.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'Incorrect, many poets discussed their disdain for the war and its destruction, as well as its tremendous emotional impact.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background black with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Early Life',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Battlefield',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Shellshock Recovery',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background black with fadeIn',
        'show image child with fadeIn',
		'Although he had been interested in the arts as a child, Owen didn’t begin taking his poetry seriously until around 20 years old. His work was extraordinarily stylistic and demonstrated a unique rhythm, setting him apart from other British poets. Owen developed an exuberant passion for poetry, music, and art, with a desire to pursue a career. But, his father encouraged him to pick a career that ensured a steady income.',
		'jump earlylife2',
	],
    
    'earlylife2':[
        'show background black with fadeIn',
        'show image teacher with fadeIn',
		'So for the next few years, Owen worked in France as a teacher and developed sympathy as he observed the devastating effects of WWI. His compassion pushed him to enlist in the British Army. By June of 1916, he received a commission as lieutenant of the Manchester Regiment.',
		'jump choiceScreen',   
    ],

	'greenGrape':[
		'show background black with fadeIn',
		'Owen kept contact with his mother through an exchange of letters, initially expressing pride, describing a “fine heroic feeling about being in France” (Owen, Poetry Foundation.), but that quickly went downhill as his service became increasingly perilous.',
		'jump battlefield2',
	],

    'battlefield2':[
		'show background black with fadeIn',
         'show image dulce with fadeIn',
		'Regardless of his decision to ignore a career in poetry, he continued to write, composing graphic scenes and feelings with his words. In 1917, his men were attacked with poison gas, inspiring one of his most famous poems, “Dulce et Decorum Est”. Its effect to spark an emotional reaction in the reader is unlike anything the world had seen at this time.',
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
        <b>“The Old Lie: It is sweet and fitting to die for one’s country”</b>
				<br/>
				<br/>
        By: Juliet Maltas
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
