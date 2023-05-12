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
	'map':'map.svg',
	'duck2':'duck2.jpeg',
	'black':'black.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'firstslide':'slide1.jpg'
    
});


//
monogatari.script ({
	'Start': [
		'show background firstslide with fadeIn',
		'Chiune Sugihara was a Japanese diplomat who saved the lives of thousands of jewish refugees during World War II.','During the summer of 1940, when Jewish refugees came to him from occupied Poland with forged visas in America, Sugihara became an active part of Nazi resistance by helping facilitate the escape of Jewish people from war-ravaged Europe. He granted more than 2,000 10-day transit visas through Japan and even gave visas to refugees with no travel papers at all before closing his consulate.','As a result, he came to be recognized as a “Righteous Among the Nations” for his aid to refugees in Lithuania during the Nazi regime', 'show background map with FadeIn',
		'Sugihara was born on January 1st, 1900 into a middle-class Japanese family that lived in a rural area in Japan. In 1918, he entered Waseda University and was an English major. His father wanted him to become a physician, but he intentionally failed the entrance exam by writing only his name on the paper.','Later, Sugihara graduated from, Japan’s training center for experts on the Soviet Union and he not only became fluent in Russian, but also went on to serve as the Japanese director of the Foreign Ministry in Manchukuo, where he negotiated the purchase of the North Manchurian railroad from the Soviet Union in 1932.','Subsequently, Sugihara was posted to various diplomatic missions around China, the Soviet Union, and Europe and finally, 21 years later, he was appointed as the Japanese Consul in Lithuania in the capital city of Kovno, where he was ordered to provide Japan with intelligence on Soviet and German troop movements in the Baltic region.','At the time, Nazis already occupied Poland, with the rising tides of war spreading through Europe. With aggression in the East already having commenced, Lithuania was particularly vulnerable to invasion by Nazi forces, who made their expansionist intentions known.', 'During this period, Sugihara began exchanging information with members of the Polish underground in Lithuania, beginning to issue them with visas for transit through Japan in 1940, establishing himself as an ally among those seeking refuge or working on resistance.', 
		'Example question: Did Sugihara face any consequences for his actions after the war?',
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
		'show background map with FadeIn',
		'Thats correct! Not only was he taken by the Soviets at the end of the war and held for three years with his family, but he also risked consequences due to insubordination as consul in Lithuania. Sughiara ultimately lost his job, having been dismissed from the Japanese Foreign Service, and then had to make a living in other ways.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background map with FadeIn',
		'Not quite! Not only was he taken by the Soviets at the end of the war and held for three years with his family, but he also risked consequences due to insubordination as consul in Lithuania. Sughiara ultimately lost his job, having been dismissed from the Japanese Foreign Service, and then had to make a living in other ways.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',
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
                'play sound cat-meow',
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
        <b>Chiune Sugihara</b>
				<br/>
				<br/>
        By: Daylin Kaplan
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
