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
	'gaps':'StoryGaps.mp3',
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
    'kweitsimage':'KweitsImage.jpeg',
    'groupshots':'GroupShots.png',
    'withsister': 'ZvisSister.png',
    'smallgroup': 'JustZvi.png',
    'familyphoto':'KretingaFamily.jpeg',
    'workcited': 'WorkCited.jpg',
    'beach': 'ZviBeach.png',

});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'black':'solid-grey.jpg',
    'lithuaniamap':'USSRMap.jpeg',
    'window':'Window.jpeg',
    'certificate':'Certificate.jpeg',
    'lettercollection':'Letters.jpeg',
    'visa':'Visa.jpg',
    'worldmap':'WorldMap.jpeg',
    'blankmap': 'BlankMap.jpeg',
    
});


//
monogatari.script ({
	'Start': [
		'show background blankmap fadeIn',
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
				'Text': '1) Lithuania',
				'Do': 'jump LithuaniaPicture',
			},
			'2':{
				'Text': '2) British Mandate of Palestine',
				'Do': 'jump Palestine1',
			},
			'3':{
				'Text': '3) Florida',
				'Do': 'jump Florida1',
			},
            '4':{
				'Text': '4) Bombay',
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
        'show image familyphoto with fadeIn',
        'Zvi was born in Kretinga, a tiny town in Lithuania, in 1903.',
        'hide image familyphoto',
        'show image kweitsimage with fadeIn',
		'After invading the USSR on June 22, 1941, the Nazis started executions in Kretinga within a week. Between the first three towns targeted Gargzdai, Palanga, and Kretinga 524 men and two women were murdered. 214 of the dead were killed in Kretinga.',
        'hide image kweitsimage',
		'jump LithuaniaChoice',
	],
    'LithuaniaChoice':[
        'show background window with fadeIn',
         'Windows in the US Holocaust Memorial Museum list all the Jewish communities wiped out by the Holocaust. Kretinga is listed in the far left of the middle row.',
        {'Choice':{
            'Back':{
                'Text':'The next few slides contain descriptions of executions. Click here if you would like to return to the map now.',
                'Do':'jump choiceScreen',
            },
             'Continue':{
                'Text':'Click here if you would like to contiue learning about Kretinga',
                'Do':'jump LithuaniaWindow',
            }
        }
        }
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
        'show image groupshots',
		'The US refused to open its borders to Jewish refugees seeking to escape the Nazis in Europe so many immigrated to the British Mandate of Palestine.',
        'hide image groupshots',
        'show image smallgroup with fadeIn',
        'Zvi and his brother-in-law came to the British Mandate of Palestine in the early 30s. Despite starting with nothing, they raised enough money to get Zvi’s sister and nieces out of Lithuania.',
        'hide image smallgroup',
        'show image withsister with fadeIn',
        'That was all they were able to do before the advancement of the war made it impossible to get any more members of the Fievishevitz family out. Even though he did everything he possibly could have ‘he felt responsible for not having been capable of [saving more of his family]” (M. Abrams interview).',
        'hide image withsister',
        'show image beach',
        'He carried that guilt around for the rest of his life. Despite being lauded as a hero by his sister’s family, Zvi felt like a failure. Zvi was very bitter and closed off about his family and past to hide from his guilt and grief.',
        'hide image beach',
		'jump Palestine2',
	],
    'Palestine2':[
		'show background certificate with fadeIn',
		'In the British Mandate of Palestine, Zvi met Naomi Becker, a Hebrew-English translator for the British government from America. The two were married on July 7th, 1939.',
		'jump Palestine3',
	],
    'Palestine3':[
		'show background black with fadeIn',
        'show image weddingphoto',
		'Since she had previously lived in the United States and her family lived in Jacksonville, Florida, Naomi was able to travel back to the United States on the last boat through the Mediterranean Sea and the Atlantic Ocean that the Germans had promised not to harm but Zvi was not able to secure a US visa join her.',
        'hide image weddingphoto',
		'jump choiceScreen',
	],

	'Florida1':[
		'show background lettercollection with fadeIn',
		'After many months of back-and-forth with Florida Senator Claude Pepper and the Department of Labor, Naomi was finally able to get Zvi a US visa by proving that her job as a Hebrew teacher at the Jacksonville Jewish Center in Florida was enough to support her family.',
		'jump Florida2',
	],
    'Florida2':[
		'show background black with fadeIn',
        'show image singleletter with fadeIn',
		'This letter from the Jacksonville Jewish Center to the American Consul in Jerusalem illustrates how far-reaching the effort to get Zvi a visa was. Not only does it mention that Naomi has a steady income, but it also vouches for her character.',
        'The Rabbi insists that she and her family are “leading citizens in our community, for a number of years active in religious, cultural, and philanthropic projects”. They were trying to convince the American government that Naomi’s family contributed to their society and that gaining another member would benefit America so the Consul would give Zvi his visa.',
        'This exchange provides a window into what was expected of US immigrants in the first half of the 20th century. Instead of taking those that needed a safe place to live, the US was only taking those who would contribute to the economy, those who were deemed not destined to be a burden on society.',
        'hide image singleletter',
		'jump choiceScreen',
	],
    'Bombay':[
		'show background visa with fadeIn',
		'Since the German advance made it unsafe to get to America by going West, Zvi took a much longer route through the Pacific. His journey to join his family took him on a tour of the British Empire.', 
        'He went from Jaffa (now Tel Aviv) to Egypt, to Trans-Jordan (now Jordan), to Iraq, to India. He took a boat from Bombay (now Mumbai) to California where he caught a train to Jacksonville, Florida. ',
		'jump choiceScreen',
	],
    'Conclusion':[
		'show background black with fadeIn',
        'play sound gaps',
        'The two audio clips playing (~45 seconds in total) are my Savta (grandma), Zvi’s daughter-in-law, speaking about her lack of information about Zvi’s past and how the little information she was given was inaccurate.',
		'Information for this project was hard to come by. Zvi barely spoke about his life before coming to America and the story of what happened in Kretinga is an all-but-forgotten one. Kretinga’s story is a piece of evidence in literature about the Nazis, an anecdote on the way to the main point.',
        'Records and accounts of Zvi’s past were incomplete and sometimes even contradictory but just because Zvi did not want to tell his story does not mean it does not deserve to be told. History is imperfect but we have to tell the untellable stories to truly understand our world.',
        'jump Ending'
        
    ],
    
	'Ending':[
		'show background black with fadeIn',
        'stop sound gaps',
		{'Choice':{
			'Closing':{
				'Text': 'Finish',
				'Do': 'jump Closing',
			},
            'Back':{
				'Text': 'Contiue reading',
				'Do': 'jump choiceScreen',
			}
		}
		}
	],

	'Closing':[
		'show background black with fadeIn',
        'show image workcited top',
		'Thank you for taking the time to learn about my family history, I hope you learned a lot.',
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
