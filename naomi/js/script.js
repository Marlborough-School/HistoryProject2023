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
    
});

//DEFINE THE IMAGES YOU WANT HERE
monogatari.assets ('images', {
	//'nickname for the image': 'actual name of the image',
'Baby2':'Baby2.jpeg',
    'Parents':'Parents.jpeg',
<<<<<<< Updated upstream
    'grape':'Holocaust.jpeg',
    'Older Anita': 'OlderAnita.jpeg',
=======
    	'Parents':'Parents.jpeg',
>>>>>>> Stashed changes
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'Parents.jpg',
	'Baby1':'Baby1.jpg',
	'Parents':'Parents.jpeg',
	'Baby2':'Baby2.jpeg',
	'grape':'Holocaust.jpeg',
	'Older Anita': 'OlderAnita.jpeg',
	'crycat':'crycat2.jpeg',
    'Baby4': 'HidingBaby.jpeg',
});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
        'show image Baby2 with fadeIn',
<<<<<<< Updated upstream
		'"She told me I had a name I didnt know, a family I didnt know and a religion I didnt know." On Feburary 1, 1943, Anitas parents gave her up to a woman named Sophia Zendler when she was just 4 months old.',
		'Question: Approximately how many Jewish people do you believe perished in the Holocaust?',
		{'Choice':{
			'Y':{
				'Text': '600,000',
				'Do': 'jump noAnswer',
=======
		'"She told me I had a name I didnt know, a family I didnt know and a religion I didnt know." On Feburary 1, 1943, Anitas parents gave her up to a woman named Sophia Zendler when she was just 4 months old. This is the story of Anita Epstein. She was one of the few surviving children of the Holocaust.', 
		'Question: How many Jewish people do you believe perished in the Holocaust?',
		{'Choice':{
			'Y':{
				'Text': '600,000',
				'Do': 'This is the wrong answer, but lets dive deeper into understanding more about Anitas story.'
>>>>>>> Stashed changes
			},
			'N':{
				'Text': '6 million',
				'Do': 'jump yesAnswer',
		    },
		    },
	        },
        ],

	'yesAnswer':[
<<<<<<< Updated upstream
		'hide image Baby2',
        'show image HidingBaby.jpeg with fadeIn',
		'Correct! Out of those 6 million people, approximately 1.5 million of them were children. Anita was one of the lucky ones, being out of the 150,000 Jewish children who survived.',
=======
		'show background black with fadeIn',
		'You will be able to code more choices/buttons into your project. Click to see another example.',
>>>>>>> Stashed changes
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'This is the wrong answer, but please proceed to learn more about Anitas life and experience.',
		'jump choiceScreen',
	],

	'choiceScreen':[
<<<<<<< Updated upstream
=======
		'show background Parents with fadeIn',
>>>>>>> Stashed changes
        'show image Parents with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Upbringing and Story',
				'Do': 'jump redGrape',
			},
			'2':{
                'Text': 'Life After Survival',
				'Do': 'Anita never forgave the Nazis for what she did to her family and the Jewish people. She wrote a book with her husband, Noel Epstein, about her experience. The purpose of her book is to assume her role as a survivor of the Holocaust and show the reader the importance of keeping memories of all who perished and survived alive. Anita went on to marrying her husband and having children with him as well as living to meet her grandchildren. One of Anitas children is my Godmother, and I am so honored to be family with her.',
			},
			'3':{
				'Text': 'Historical Information',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
	'hide image Parents',
        'hide image Baby2',
        'show image Baby4 with fadeIn',
        'show background duck with fadeIn',
                'show video cat-video background',
		'Anita was born in the Krawkow Ghetto in on November 18th, 1942. Since she was only a baby, her parents knew that the only way she would survive is if they gave her to a Catholic family. Anita was given to a woman named Sophia Zendler by her parents Eda and Salek with a promise of payment and land.',
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
        'show background black with fadeIn',
		'show image Holocaust.jpeg with fadeIn',
		'The Holocaust was a genocide of a majority of the European Jews during World War 2. It happenede between 1941 and 1945, where Hitler and Nazi Germany systematically murdered six million Jews, erasing around two-thirds of the Jewish population and leaving the Jewish people to remain as 0.2% of the worlds population.',
		'jump Ending',
	],

	'Ending':[
		'show background Older Anita with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Anita passed away at her home in Silver Spring, Maryland. She passed at age 76, on June 27th,2019 from Parkinsons disease. Anita never forgave the Nazis for the violent acts they commited towards the Jewish people. "If you forgive people who commit genocide," she said, "the world will think its okay to commit more, thats why I will never forgive. ',
                'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
        'show background Older Anita with fadeIn',
		'Links Used: https://www.haaretz.com/israel-news/2022-01-27/ty-article/6-million-where-is-the-figure-from/0000017f-da74-dea8-a77f-de761f480000 and https://collections.ushmm.org/search/catalog/irn512279#?rsc=24464&cv=0&c=0&m=0&s=0&xywh=1125%2C-57%2C1139%2C870.',
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
<<<<<<< Updated upstream
        <b>The Mirale That Was Anita Epstein</b>
=======
        <b>The Miracle That Was Anita Epstein</b>
>>>>>>> Stashed changes
				<br/>
				<br/>
        By: Naomi B. 
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
