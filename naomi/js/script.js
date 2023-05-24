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
    'grape':'Holocaust.jpeg',
    'Older Anita': 'OlderAnita.jpeg',
    	'Parents':'Parents.jpeg',
     'Holocaust': 'Holocaust.jpg',
    '2Children': '2Children.jpeg',
    'HidingBaby':'HidingBaby.jpeg',
    'OlderAnita': 'OlderAnita.jpeg',
    'Baby3':'Baby3.jpeg',
    'AnitaMother': 'AnitaMother.jpeg',
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
    'OlderAnita':'OlderAnita.jpeg',
    'Book':'Book.jpeg',
    'Threewomen':'Threewomen.jpeg',
    'Baby4': 'Baby4.jpeg',
    'Links':'Links.jpeg',

});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
        'show image Baby2 with fadeIn',

		'"She told me I had a name I didnt know, a family I didnt know and a religion I didnt know." On Feburary 1, 1943, Anitas parents gave her up to a woman named Sophia Zendler when she was just 4 months old. This is the story of Anita Epstein. She was one of the few surviving children of the Holocaust.', 
        'hide image Baby2',
         'show image Holocaust',
		'Question: How many Jewish people do you believe perished in the Holocaust?',
		{'Choice':{
			'Y':{
				'Text': '600,000',
				'Do': 'jump noAnswer',
			},
			'N':{
				'Text': '6 million',
				'Do': 'jump yesAnswer',
		    },
		    },
	        },
        ],

	'yesAnswer':[
		'hide image Holocaust',
        'show image 2Children',
            'show image HidingBaby.jpeg with fadeIn',
		'Correct! Out of those 6 million people, approximately 1.5 million of them were children. Anita was one of the lucky ones, being out of the 150,000 Jewish children who survived.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
        'hide image Holocaust',
		'This is the wrong answer, but please proceed to learn more about Anitas life and experience as well as the history of the Holocaust.',
        'hide image of Holocaust',
		'jump choiceScreen',
	],

	'choiceScreen':[
        'show image HidingBaby',
       'Anita was only a young child when the Holocaust occured. Though she never went to a camp, she was faced with faking an identity that she thought was her true identity.',
        'show image Baby3',
    

		{'Choice':{
			'1':{
				'Text': 'Upbringing and Story',
				'Do': 'jump redGrape',
			},
			'2':{
                'Text': 'Life After Survival',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Historical Information',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
        'hide image Holocaust',
        'show image Parents',
        'These are Anitas parents. Eda and Salek Kuesentler.',
                'hide image Parents',
        'show image KrakowGhetto.jpeg',
		'Anita was born into the Krawkow Ghetto on November 18th, 1942. Since she was only a baby, her parents knew that the only way she would survive is if they gave her to a Catholic family. Anita was given to a woman named Sophia Zendler by her parents Eda and Salek with a promise of payment and land.',
        'hide image KrakowGhetto.jpeg with fadeIn',
        'show image AnitaMother',
        'This is Anitas mother, Eda. After giving birth to Anita, she had to give her up 4 months later. She survived many concentration camps to get back to her daughter.',
        'Before giving up her daughter, she sent this photo with her, with her signing on the back, This is your real mother.',
        'hide image AnitaMother',
        'show image HidingBaby with fadeIn',
        'Anita was smuggled past SS guards by her father, Salek, while sedated in a leather valise, which is a fancy word for traveling bag. Anita managed to make it safely to the home of Sophia Zendler; the woman who would end up caring for Anita for the next couple of years.',
        'show image Baby3',
                'hide video cat-video',
		'jump choiceScreen',
	],

	'greenGrape':[
            'hide image 2Children',
        'show image OlderAnita',
		'Anita never forgave the Nazis for what she did to her family and the Jewish people. She wrote a book with her husband, Noel Epstein, about her experience. The purpose of her book is to assume her role as a survivor of the Holocaust and show the reader the importance of keeping memories of all who perished and survived alive. Anita went on to marrying her husband and having children with him as well as living to meet her grandchildren. One of Anitas children is my Godmother, and I am so honored to be family with her.',
        'show scene Book',
        'This is the book they wrote, Miracle Child. It is a memoir documenting the life of a Jewish baby, that being Anita, who was born in the Krakow Ghetto. "In November 1942, three years after Hitler conquered Poland, and remarkably, escaping death-one of a mere one half percent of Jewish Children in Poland who survived during the Nazi era.',
        'show scene Threewomen',
        'Anitas life was saved because of her parents hiding her with a Catholic Family. Here in this photo is Anita, Sophia, and Eda- from left to right. "The book also depicts the authors postwar challenges in Germany and America. ',
		'jump choiceScreen',
	],

	'blackGrape':[
        'show background black with fadeIn',
		'show image Holocaust',
		'The Holocaust was a genocide of a majority of the European Jews during World War 2. It happenede between 1941 and 1945, where Hitler and Nazi Germany systematically murdered six million Jews, erasing around two-thirds of the Jewish population and leaving the Jewish people to remain as 0.2% of the worlds population.',
        'hide image Holocaust',
        'show scene Baby4',
		'jump Ending',
	],

	'Ending':[
		{'Choice':{
			'Closing':{
				'Text': 'Anita passed away at her home in Silver Spring, Maryland. She passed at age 76, on June 27th,2019 from Parkinsons disease. Anita never forgave the Nazis for the violent acts they commited towards the Jewish people. "If you forgive people who commit genocide," she said, "the world will think its okay to commit more, thats why I will never forgive. ',
                'Do': 'jump closingScreen',
                'closingScreen':[
                'insert scene Links',]
			}
		}
		}
	],

	'closingScreen':[
		'insert scene Links',
        'Links Used: https://www.haaretz.com/israel-news/2022-01-27/ty-article/6-million-where-is-the-figure-from/0000017f-da74-dea8-a77f-de761f480000 and https://collections.ushmm.org/search/catalog/irn512279#?rsc=24464&cv=0&c=0&m=0&s=0&xywh=1125%2C-57%2C1139%2C870.',
		'end',
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
        <b>The Miracle That Was Anita Epstein</b>
				<br/>
				<br/>
        By: Naomi B. 
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
