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
    'cat-video':'movie.mp4',
});

//DEFINE THE IMAGES YOU WANT HERE
monogatari.assets ('images', {
	//'nickname for the image': 'actual name of the image',
    //'yang':'YANG.jpg',
    'robert': 'robert1.png',
    'photo': 'photo.png',
    'sources': 'sources.png',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	'yang':'YANG.jpg',
	'duck2':'yangc.jpeg',
	'black':'black.jpeg',
	'grape':'normandy.png',
	'potatocat': 'potatocat.jpeg',
	'crycat':'crycat2.jpeg',
    'yang2':'yang2.jpeg',
    'military': 'military.png',
    //'robert': 'robert.png',
    'wow': 'myway2.jpg',
    'lol': 'myway.jpg',
    'japan': 'japan.jpg',
    'hehe': 'myway3.jpg',
    'movie': 'movie.png',
});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
        'show background yang with fadeIn',
		'There once was a soldier who fought for 3 different countries in the same war. This man was born in Korea, but served for Japan, Germany, and Russia. Though the mystery is, is he even real? ',
         'show background yang2 with fadeIn',
		'Do you think this is a true story and this man was real?',
		{'Choice':{
			'Y':{
				'Text': 'Yes! Very unique story.',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No way!',
				'Do': 'jump noAnswer'
			},
		    },
	        },
        ],

	'yesAnswer':[
		'show background lol',
		'It is indeed a very unique and special story! Let us take a look at his life.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background wow',
		'Valid opinion... Let us take a look at his life.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Early Life/Japan',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Russia',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Germany',
				'Do': 'jump blackGrape',
			},
            '4':{
				'Text': 'America/The End',
				'Do': 'jump blueGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background duck with fadeIn',
                'show video cat-video background',
        'As the story goes, Yang Kyoungjong was born on March 3, 1920, in Shin Eui Joo, Korea. This was during the Japanese colonization, and before the split of North and South Korea in August 1945.',
        
		'The earliest known information about Yang starts when he was 18. He was living in Manchuria, China, which was being controlled by Japan. While living there, he was forcefully drafted in the Kwantung Army in 1938. The Kwantung Army was one of Japans main fighting forces that helped lead them through the war. Yangs role in the army was to go to northern Manchuria and help fight against the USSR.',
                'hide video cat-video',
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background military with fadeIn',
                //'play sound cat-meow',
		'After a year of being in the Kwantung Army, he fought the Russians in the Battle of Khalkhin Gol, where he was captured as a prisoner of war by the Workers and Peasants Red Army. Now with the Russians, he was sent to a Soviet labor camp. In 1942, Russia needed more soldiers to fight against the Germans, so Yang and thousands of other prisoners were drafted in the Red Army.',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background grape with fadeIn',
		'In 1943, he was fighting in the Third Battle of Kharkov in Ukraine, where he was taken as a prisoner of war by the Germans. Germany suffered a large loss of soldiers, so they let prisoners "volunteer" to fight for Germany instead of getting executed. As a result, Yang was once again fighting for another country. He was a part of the German Ostbataillone in the 709 Infanterie-Division of Wehrmacht.',

        'Now in the German army, the Cherbourg ports in the Cotentin Peninsula in France. On June 6, 1944, soldiers stormed the beaches in Normandy, Yang was one of the many soldiers on German forces, fighting against the Allied armies. The Allied forces were successful in battle. Afterwards, many soldiers were captured by the United States Parachute Infantry Regiment, Yang included.', 
		'jump choiceScreen',
	],
    'blueGrape':[
        'show background black with fadeIn',
		'show image robert with fadeIn',
        'It is reported that Yang was captured by Lieutenant Robert Brewer of the 506th Parachute Infantry Regiment. He was unable to speak English or German while captured by the Americans, so because of the lack of communication available, they sent him to a British prisoner of war camp where he stayed until the end of World War II. He was released at the end of the war and moved to the United States. He lived in Cook Country, Illinois for the rest of his life until he died on April 7, 1992.',
        'hide image robert',
		'jump Ending',
	],

	'Ending':[
		'show background hehe with fadeIn',
		{'Choice':{
			'Was Yang Kyoungjong real?':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background movie with fadeIn',
		'His existence can not currently be proven with concrete evidence. One of the first mentions of his story was in December 6, 2002, when Weekly Korea wrote an article about his story.',
        
		'Another instance is when Antony Beevor released the book Second World War in 2012. In the book he talks about the human disruption that resulted because of the war and connects conflicts from Asia and Europe. Yangs story is an introduction to his book,starting with the sentence, "The Korean Yang Kyoungjong, who had been forcibly conscripted in turn by the Imperial Japanese Army, the Red Army and the Wehrmacht, is taken prisoner by the Americans in Normandy in June 1944."(1 Beevor) Yang gets taken as a prisoner of war by Russians while being in the Japanese army during the Battle of Khalkhin Gol. This connects Asian and European conflicts while also grabbing peoples attention.',
        
        'Stephen E. Ambrose is a historian who also wrote about Yang in his book D-Day: June 6, 1944: The Climactic Battle of World War II. In his book, one of the veterans he interviewed was Lieutenant Robert Brewer. He was the Lieutenant of the 506th Parachute Infantry Regiment. In his interview, Brewer mentioned his recollection of capturing four asian men in Wehrmacht uniforms. The men are referred to as young Japanese men, but one was in fact Korean, most likely Yang. While this photo of a Korean man is suspected to be Yang, nothing is professionally confirmed yet.',
        'The closest primary source there is to Yang is a quote from Lieutenant Brewer. The quote from Lieutenant Brewer states he saw, "four asians in German uniform".',
        
        'The reason Yang Kyoungjong became so inspiring and talked about is not only because of his unique story, but because it shows how people were used in wars and how they just went along with it. Yang is an inspiration to the Asian comm,unity for going through those hardships in other countries and surviving through it all. He is a symbol of persisting through all his hardships.',
    
        'show background black with fadeIn', 
        'show image sources with fadeIn',
        'sources',
        'hide image sources',
        'show image photo with fadeIn',
		'image credits',
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
        <b>3 Countries, 2nd World War, 1 Man </b>
				<br/>
				<br/>
        By: Annie Park
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
