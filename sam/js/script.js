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
    'weddingphoto':'ZviVNaomi.jpg',
    'singleletter': 'JacksonLetter.jpeg',
    'kweitsimage':'KweitsImage',

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
    'lithuaniamap':'USSRMap.jpeg',
    'window':'Window.jpeg',
    'certificate':'Certoficate.jpeg',
    'lettercollection':'Letters.jpeg',
    'visa':'Visa.jpg',
    'worldmap':'WorldMap.jpeg'
    
});


//
monogatari.script ({
	'Start': [
		'show background worldmap fadeIn',
		'Trivia Question: Where in the USSR did Germany first invade?',
		{'Choice':{
			'L':{
				'Text': 'Lithuania',
				'Do': 'jump rightAnswer'
			},
			'U':{
				'Text': 'Ukraine',
				'Do': 'jump wrongAnswer'
			},
            'B':{
				'Text': 'Belarus',
				'Do': 'jump wrongAnswer'
			},
            'M':{
				'Text': 'Moldova',
				'Do': 'jump wrongAnswer'
			},
		    },
	        },
        ],

	'rightAnswer':[
		'show background lithuaniamap',
		'Correct!',
		'jump choiceScreen',
	],

	'wrongAnswer':[
		'show background lithuaniamap',
		'Incorrect',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background worldmap with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Lithuania',
				'Do': 'jump LithuaniaPicture',
			},
			'2':{
				'Text': 'British Mandate of Palestine',
				'Do': 'jump Palestine1',
			},
			'3':{
				'Text': 'Florida',
				'Do': 'jump Florida1',
			},
            '4':{
				'Text': 'Bombay',
				'Do': 'jump Bombay',
			},
            '5':{
				'Text': 'Conclusion',
				'Do': 'jump Conclusion',
			}
            
		}
	}
	],

	'LithuaniaPicture':[
		'show background black with fadeIn',
		'After invading the USSR on June 22, 1941, the Nazis started executions in Kretinga within a week. Between the first three towns targeted Gargzdai, Palanga, and Kretinga 524 men and two women were murdered, mostly Jews with a few communists and other Nazi targets. 214 of the dead were killed in Kretinga.',
		'jump LithuaniaWindow',
	],
    'LithuaniaWindow':[
		'show background window with fadeIn',
		'Since concentration camps had not been built in Lithuania yet, the Nazis executed Jews by firing squad. The method they used, known as the sardine method, was covered up/denied by the Nazi authorities that carried it out.',
        'Nazi officers forced early Lithuanian victims to dig out massive pits near their towns. The victims were lined up at the edge of the pit ten at a time, backs to the pit, facing the firing squad. All ten were shot at once.',
        'The bodies fell back into the pit, into their grave, on their own without the Nazis needing to get their hands dirty. If a body fell to the ground it was the job of the next ten victims to push it into the pit.',
        'The women and children of all three towns were killed a month later.',
		'jump choiceScreen',
	],

    'Palestine1':[
		'show background black with fadeIn',
		'The US refused to open its borders to Jewish refugees seeking to escape the Nazis in Europe so many immigrated to the British Mandate of Palestine.',
        'Zvi and his brother-in-law came to the British Mandate of Palestine in the early 30s. Despite starting with nothing between them they raised enough money to get Zvi’s sister and nieces (his brother-in-law’s wife and daughters) out of Lithuania.',
		'jump Palestine2',
	],
    'Palestine2':[
		'show background certificate with fadeIn',
		'In the British Mandate of Palestine, Zvi met Naomi Becker, a Hebrew-English translator for the British government from America. The two were married on July 7th, 1939.',
		'jump Palestine3',
	],
    'Palestine3':[
		'show background black with fadeIn',
		'Since she had previously lived in the United States and her family lived here, Naomi was able to travel back to the United States on the last boat through the Mediterranean Sea and the Atlantic Ocean that the Germans had promised not to harm but Zvi was not able to join her.',
		'jump choiceScreen',
	],

	'Florida1':[
		'show background lettercollection with fadeIn',
		'After many months of back-and-forths with Florida Senator Claude Pepper and the Department of Labor, Naomi was finally able to get Zvi a US visa. She proved that her job as a Hebrew teacher at the Jacksonville Jewish Center in Florida was enough to support her family and Zvi was granted a visa.',
		'jump Florida2',
	],
    'Florida2':[
		'show background black with fadeIn',
		'This letter shows how far-reaching the effort to get Zvi a visa was. This letter is from Naomi’s employer to the American Consul in Jerusalem. Not only does it mention that Naomi has a steady income, but it also vouches for her character.',
        'The Rabbi insists that she and her family are “leading citizens in our community, for a number of years active in religious, cultural, and philanthropic projects”. They are trying to convince the American government that Naomi’s family contributes to their society and that gaining another member of it would benefit America so the Consul will give Zvi his visa.',
		'jump choiceScreen',
	],
    'Bombay':[
		'show background visa with fadeIn',
		'Since the German advance made it unsafe to get to America by going West, Zvi took a much longer route through the Pacific. His journey to join his family took him on a tour of the British Empire. He went from Jaffa (now Tel Aviv) to Egypt, to Trans-Jordan (now Jordan), to Iraq, to India. He took a boat from Bombay (now Mumbai) to California where he caught a train to Jacksonville, Florida. ',
		'jump choiceScreen',
	],
    'Conclusion':[
		'show background black with fadeIn',
		'Audio of Zvi’s son and daughter-in-law (my grandparents) discussing how Zvi rarely spoke about his family, Kretinga, or life during the war because of the immense survivor’s guilt he carried for being one of the sole survivors of his family and community.',
		'jump choiceScreen',
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
        <b>My Great-Grandpa Zvi's Journey to his Family</b>
				<br/>
				<br/>
        By: Samantha Abrams
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
