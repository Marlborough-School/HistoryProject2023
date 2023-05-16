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
    'warmusic': 'warmusic.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {
    'soldiers':'soldiers.mp4',
});

//DEFINE THE IMAGES YOU WANT HERE
monogatari.assets ('images', {
	//'nickname for the image': 'actual name of the image',

});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
	
	'duck2':'duck2.jpeg',
	'black':'black.jpeg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'firstslide':'slide1.jpg',
    'waseda':'waseda.jpg', 
    'train': 'train.jpg',
    'atdesk': 'atdesk.jpg',
    'underground': 'underground.jpg',
    'gulag': 'gulag.jpg',
    'map': 'map.svg',
    'group': 'group.jpg',
    'colony': 'colony.png',
    'visa': 'visa.jpg',
    'yadvashem': 'yadvashem.jpg',
    'statue': 'statue.jpg',
    'bib': 'bib.png',
    'imagecred': 'imagecred.png', 
    'filler': 'filler.jpg',
    'consulate': 'consulate.jpg',
    'chuine': 'chuine.jpg',
});


//
monogatari.script ({
	'Start': ['show background firstslide with fadeIn',
		'Chiune Sugihara was a Japanese diplomat who saved the lives of thousands of Jewish refugees during World War II.','During the summer of 1940, when Jewish refugees came to him from occupied Poland with forged visas in America, Sugihara became an active part of Nazi resistance by helping facilitate the escape of Jewish people from war-ravaged Europe. He granted more than 2,000 10-day transit visas through Japan and even gave visas to refugees with no travel papers at all before closing his consulate.','As a result, he came to be recognized as  “Righteous Among the Nations” for his aid to refugees in Lithuania during the Nazi regime', 'show background waseda with FadeIn',
		'Sugihara was born on January 1st, 1900 into a middle-class Japanese family that lived in a rural area in Japan. In 1918, he entered Waseda University and was an English major. His father wanted him to become a physician, but he intentionally failed the entrance exam by writing only his name on the paper.', 'show background train with FadeIn', 'Later, Sugihara graduated from Japan’s training center for experts on the Soviet Union and he not only became fluent in Russian, but also went on to serve as the Japanese director of the Foreign Ministry in Manchukuo, where he negotiated the purchase of the North Manchurian railroad from the Soviet Union in 1932.', 'show background atdesk with FadeIn', 'Subsequently, Sugihara was posted to various diplomatic missions around China, the Soviet Union, and Europe and finally, 21 years later, he was appointed as the Japanese Consul in Lithuania in the capital city of Kovno, where he was ordered to provide Japan with intelligence on Soviet and German troop movements in the Baltic region.',
        
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background filler with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'early life',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'during war',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'after war',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background firstslide with fadeIn',
		'Chiune Sugihara was a Japanese diplomat who saved the lives of thousands of Jewish refugees during World War II.','During the summer of 1940, when Jewish refugees came to him from occupied Poland with forged visas in America, Sugihara became an active part of Nazi resistance by helping facilitate the escape of Jewish people from war-ravaged Europe. He granted more than 2,000 10-day transit visas through Japan and even gave visas to refugees with no travel papers at all before closing his consulate.','As a result, he came to be recognized as  “Righteous Among the Nations” for his aid to refugees in Lithuania during the Nazi regime', 'show background waseda with FadeIn',
		'Sugihara was born on January 1st, 1900 into a middle-class Japanese family that lived in a rural area in Japan. In 1918, he entered Waseda University and was an English major. His father wanted him to become a physician, but he intentionally failed the entrance exam by writing only his name on the paper.', 'show background train with FadeIn', 'Later, Sugihara graduated from Japan’s training center for experts on the Soviet Union and he not only became fluent in Russian, but also went on to serve as the Japanese director of the Foreign Ministry in Manchukuo, where he negotiated the purchase of the North Manchurian railroad from the Soviet Union in 1932.', 'show background atdesk with FadeIn', 'Subsequently, Sugihara was posted to various diplomatic missions around China, the Soviet Union, and Europe and finally, 21 years later, he was appointed as the Japanese Consul in Lithuania in the capital city of Kovno, where he was ordered to provide Japan with intelligence on Soviet and German troop movements in the Baltic region.','jump choiceScreen',
	],

	'greenGrape':[
		'show background underground with FadeIn', 'At the time, Nazis already occupied Poland, with the rising tides of war spreading through Europe. With aggression in the East already having commenced, Lithuania was particularly vulnerable to invasion by Nazi forces, who made their expansionist intentions known.', 'During this period, Sugihara began exchanging information with members of the Polish underground in Lithuania, beginning to issue them with visas for transit through Japan in 1940, establishing himself as an ally among those seeking refuge or working on resistance.', 
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
'show background filler with FadeIn','play sound warmusic',
		'Thats correct! Not only was he taken by the Soviets at the end of the war and held for three years with his family, but he also risked consequences due to insubordination as consul in Lithuania. Sughiara ultimately lost his job, having been dismissed from the Japanese Foreign Service, and then had to make a living in other ways.',
		'jump nextslide',
	],

	'noAnswer':[
		'show background filler with FadeIn','play sound warmusic',
		'Not quite! Not only was he taken by the Soviets at the end of the war and held for three years with his family, but he also risked consequences due to insubordination as consul in Lithuania. Sughiara ultimately lost his job, having been dismissed from the Japanese Foreign Service, and then had to make a living in other ways.',
        'jump nextslide',
        ],

	'nextslide':[
        'show background gulag with FadeIn', 'While the consequences he faced were severe and life altering, Sugihara never faltered in his conviction that his actions were entirely necessary, stating “I may have disobeyed my government, but if I didn’t, I would be disobeying God.”', 'show background map with FadeIn', 'Moreover, Sugihara saw that Lithuania was a strategic location as it could function as a faraway for Western Europeans to escape through an eastern route through the Soviet Union to Japan.','After Germany had invaded Poland and started persecuting the Jewish people there, many of the Jewish people fled eastward to escape, with 15,000  arriving in Lithuania, which was still independent at the time.', 'show background group with FadeIn','When the Soviets occupied Lithuania in 1940, the Jewish people’s circumstances became direr and Sugihara was confronted with the urgency of their situation when a Jewish delegation, headed by Zerach Warhaftig, a Jewish refugee, came to the consulate to meet with him.','Sugihara agreed to meet for a brief conversation, during which the Jewish community expressed their desperate need to obtain immigration visas to anywhere in the world in order to escape imminent death.', 'show background colony with FadeIn', 'During their search, the Jewish people found out that Curacao, a Dutch colony, did not require visas, which would allow them to leave Lithuania; however, since the war blocked all travel in the western region, the Jewish community wanted to request help to travel along an eastward route by obtaining transit visas from the Japanese Consulate.','With these visas, the Jewish people would be able to obtain permission to cross the Soviet Union and begin their journey.','jump choiceScreen', 
        
       
        
        
	],

	'blackGrape':[
		'show background visa with FadeIn', 'As a result, Sugihara was troubled by their situation and became receptive to the refugees who came through the country, supporting them with transit visas, even though it defied the later instructions of the Japanese government to only provide visas only to those who had proper arrangements.','Sugihara obtained visas at his own initiative without even obtaining his ministry’s support and then continued to issue their distribution when Tokyo sent a message that he should not and warned him against issuing visas without due process.', 'show background consulate with FadeIn', 'During a brief period that the consulate continued to function before being closed down, Sugihara saved thousands of people, including rabbis and Talmudic students, who otherwise would have had no other way to evade being murdered.','Towards the deadline for leaving the country, Sugihara, along with a small staff, even stamped some of the passports himself, continuing to work even at the railway station as he was living.', 'show background chuine with FadeIn', 'By the time Sugihara left Lithuania, there had been 2,140 visas issued, which covered an additional 300 that were mostly children.','by issuing visas to the Jewish refugees, he risked his career, his familys safety, and also his life. He worked tirelessly day and night, usually for hours on end, signing thousands of visa applications and personally meeting with refugees and their familys.','When the Soviet army was victorious in their march through the Balkans in 1944, they arrested Sugihara with the other diplomats that were there from enemy nations.','Sugihara and his family were held for three years before they were returned to Japan in 1947','jump Ending',

	],

	'Ending':[
		'show background filler',
        
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background yadvashem with fadeIn','In the period preceding his passing, Sugihara, the former Japanese consul in Lithuania, was recognized by Yad Vashem, the Holocaust Martyrs and heros Remembrance Authority in Israel, as Righteous Among the Nations for his assistance to refugees during World War II. The title was bestowed upon him by Yad Vashem in 1984, and a ceremony was held in Jerusalem in January 1985 to honor his contributions.', 'show background statue with FadeIn', 'Sugihara’s wartime experience demonstrates that the courage of one individual who follows their moral compass can make an incredible difference.','His actions alone saved the lives of so many.','Trusting ones own judgment of right and wrong at times is required when the law or government sanctifies something that is unjust.','show background bib with FadeIn','bibliography', 'show background imagecred with FadeIn', 'image credits', 'jump choiceScreen', 
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
