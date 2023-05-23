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
    'cat-video':'xiashuqin.mp4',
});

//DEFINE THE IMAGES YOU WANT HERE
monogatari.assets ('images', {
	//'nickname for the image': 'actual name of the image',

});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'family':'xiafamily.jpeg',
	'duck2':'xiashuqinchoice.jpeg',
	'black':'japanstorm.jpeg',
	'grape':'finalshuqin.jpeg',
	'potatocat': 'closingxia.jpeg',
	'crycat':'shuqinconc.jpeg',
    'animation':'animation.jpeg',
    'info': 'victims.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background family with fadeIn',
		'Xia Shuqin was just a little girl when during the Japanese-Sino war. After a Japanese win in Shanghai during the early years of the second World War her life would be completely flipped on its head. ', 
		'How many people died after the Nanjing Massacre?',
		{'Choice':{
			'Y':{
				'Text': '16,000',
				'Do': 'jump yesAnswer'
			},
			'N':{
                'Text': '40,000',
                'Do': 'jump noAnswer'
            },
		    },
	        },
        ],

	'yesAnswer':[
		'show background black',
        'In actuality there were 40,000 estimated deaths but fatalities in the surrounding villigaes of Nanjing in total exceed 100,000 deaths. ',
        
		'jump Backgroundinfo',
	],

	'noAnswer':[
		'show background black',
		'Correct. There were an estimated 40,000 deaths in Nanjing but fatalities in the surrounding areas including Nanjing exceed 100,000 deaths.',
		'jump Backgroundinfo',
	],

    'Backgroundinfo':[
      'show background info',
        'After the Japanese defeated the army in Shanghai, troops started to make their way to the capital city, Nanjing. In an attempt to salvage Chinas army all Chinese troops were decomissioned from Nanjing leaving them defenseless.',
        
		'Let me teach you more about Xia Shuqins story',
        
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
				'Text': 'Nanking Massacre',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Aftermath',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background family with fadeIn',
            
		'Xia Shuqin lived in a household of 9 people in Zhonghuamen. Her parents, her 4 sisters and her paternal grandparents. She recounts how happy life was with her family and shares insight into how fast Japanese troops approached when she states, "At the time we started, it was very good at home, then the planes came." ',
               
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background animation with fadeIn',
'show video cat-video background',
                
		'Japanese military performed atrocities onto the people of Nanjing.',
        'The first bombs were deployed onto Nanjing which is when Xia and her family went into hiding. Her and her neighbors hid under a table. Everyone there was stabbed including Xia but she and one of her sisters awoke in pain and surrounded by her family members. There they stayed in fear of being caught while trying to get food.',
        
         'hide video cat-video',
        
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background grape with fadeIn',
		'Xia Shuqin shares her story wherever she can, even going to court to defend her story when an author tried to say her story was false. She has filmed a documentary with USC where she states that she wants all her family to remember these events in order for them not to repeat again.',
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
		'Xia Shuqin to this day works to spread the word of the atrocities she faced and as she says to her grandkids "things like this should not repeat"',
		
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
        <b>Xia Shuqin</b>
				<br/>
				<br/>
        By: Linda Espinosa
        </p> 
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
