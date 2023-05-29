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
    'planee': 'rocket.wav',
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
    'classroom': 'happy.jpeg',
    'destruction': 'side.jpeg',
    'before': 'spy.jpg',
    'clock': 'science.jpg',
    'bomb': 'action.jpg',
    'flat': 'watchel.jpg',
    'plane': 'rocket.jpg',
    'people': 'raven.jpg',
    'museum': 'chair.jpg',
    'medal': 'medal.jpg',
    'bibliography': 'bib.jpg',
    'imagecredit': 'credit.jpg',
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
		'show image face with fadeIn',
		'Police Officials were frantic searching for Madeleine Chauffour. Little did they know, she was closer to them than they thought. Madeleine Chauffour was a fake name and Jeannie Rousseau was the actual name of the spy stealing information from german officials.',
        'hide image face with fadeOut',
        
        'show image destruction with fadeIn',
		'The story of Jeannie Rousseau is incredibly inspiring. She was a female spy in World War II and due to her bravery and fluency in German, she was able to save thousands of lives.',
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
		'Correct! Many women were recruited to become spies as they were less likely to be arrested or interrogated than men. There jobs were mostly to be wireless operators or couriers.',
		'jump slide2',
	],

	'noAnswer':[
		'show background black',
		'Incorrect! Many women were recruited to become spies as they were less likely to be arrested or interrogated than men. There jobs were mostly to be wireless operators or couriers.',
		'jump slide2',
	],

	 'slide2': [
        'show image bomb with fadeIn',
        'Jeannie Rouseau was one of the many female spies in World War II, but she made an enormous impact. Her courage was displayed constantly in her actions, as she risked her life countless times in order to save others. Ms. Rousseau developed close and dangerous relationships with enemy officers in order to gain essential information.',
         'hide image destruction with fadeOut',
        'hide image bomb with fadeOut',
        
        'jump choiceScreen',
    ],
    
    
    
	'choiceScreen':[
    	
		{'Choice':{
			'1':{
				'Text': 'Behind the spy',
				'Do': 'jump slide6',
			},
			'2':{
				'Text': 'The Wachtel Report',
				'Do': 'jump slide8',
			},
			'3':{
				'Text': 'Concentration Camps',
				'Do': 'jump slide10',
			}
		}
	}
	],

	'slide6':[
		'show image before center with fadeIn',
		'Jeannie Rousseau was born into a remarkable family. Her father, Jean, was a veteran of World War I, a senior official for the foreign ministry, and became the mayor of the 17th Arrondissement in Paris.',
         'hide image before with fadeOut',
		'jump slide7',
	],
    
    'slide7':[
		'show image clock with fadeIn',
		'Rousseau was extremely intelligent with a near-photographic memory. She attended the Elite Sciences Po and even graduated top of her class in 1939.', 
        'hide image clock with fadeOut',
        'show image classroom center with fadeIn',
        'When the war began, Rousseau decided to use her fluency german to become an interpreter for an association of French buisnessmen. Her job mainly consisted of representing their interests and helping negotiate contracts with the German occupiers. Her spying career began later when a man approached her convincing her to release critical information about german plans.',
        'hide image classroom with fadeOut',
		'jump choiceScreen',
    ],
    
   'slide8':[
		'show image plane with fadeIn',
        'play sound planee',
		'In 1943, Rousseau heard about a secret rocket weapons project and she was determined to recieve as much inside information she could. Thanks to the relationships she has built with officers involved on the project, she was able to understand the entire report and even see drawings and diagrams of the rockets. She delivered the information to intelligence analysts in London  and the British organized bombing raids against the plan, saving thousons of lives.',
        'hide image plane with fadeOut',
		'jump slide9',
	],
    
  'slide9':[
		'show image flat with fadeIn',
		'The Wachtel Report not only identified the German officer managing the program, Col. Max Wachtel, but revealed the operation plans at the testing plant and launch locations in Brittany and the Netherlands.', 
        'hide image flat with fadeOut',
        'jump choiceScreen',
],
    
	'slide10':[
		'show image people with fadeIn',
		'Rousseau survived three separate concentration camps. First she was sent to Ravensbrück, a women’s concentration camp. Later officials moved her to Torgau where she was punished for her refusal to manufacture weaponry. She returned to Ravensbrück where they decided to send her to a punishment camp in Königsberg. Rousseau attempted to flea the camp but was caught and sent to an inner prison. Finally, the swedish Red Cross rescued several prisoners including Jeannie Rousseau.',
        'hide image people with fadeOut',
        'jump choiceScreenn',
  ],      
    
   	'choiceScreenn':[
    	
		{'Choice':{
			'1':{
				'Text': 'After The War',
				'Do': 'jump conclusion',
			},
		}
	}
	],
    
	'conclusion':[
		'show image museum with fadeIn',
        'After the war, Rousseau met her husband Henri de Clarens, while being treated for tuberculosis. Together the pair had two children, a son and a daughter.',
        'hide image museum with fadeOut',
        'show image medal with fadeIn',
        'Rousseau’s bravery did not go without recognition. She was awarded the Seal medallion in 1993 and later in 2009, the resistance metal and the croix de guerre. She also received the first R.V. Jones Intelligence Award.',
        'hide image medal with fadeOut',
        'jump Bibliography',
	],
   
    'Bibliography':[
		'show image bibliography with fadeIn',
        'Bibliography',
        'hide image bibliography with fadeOut',
        'jump Image',
	],
    
      'Image':[
		'show image imagecredit with fadeIn',
        'Image Credits',
        'hide image imagecredit with fadeOut',
	],
    
     'Audio':[
         'show image audio with fadeIn',
        'Audio Credits',
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
