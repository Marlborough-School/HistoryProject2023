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
	'title':'degualle.jpg',
	'duck2':'duck2.jpeg',
	'black':'group.jpg',
	'grape':'blackgrape.jpeg',
	'potatocat': 'potatocat.jpeg',
	'crycat':'',
});


//
monogatari.script ({
	'Start': [
		'show background title with fadeIn',
		'De Gualle was one of the only leaders in history that knew he had to fight back against Nazi Germany at all costs. Even without the support of his government, he put together his own army to continue his mission of preventing futher harm at the hands of Hitlor. ',
		'What do you think positively impacted his career more significantly?',
		{'Choice':{
			'Y':{
				'Text': 'Childhood of De Gualle',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'The Early Days of His Military Career',
				'Do': 'jump noAnswer'
			},
		    },
	        },
        ],

	'yesAnswer':[
		'show background black',
		'Carles de Gualle was a Frenchman born in 1890, in Lillie, France into a wealthy and growing family of five at the time. His mother came from wealth, and his father was a successful history professor and founder of a school. He was highly influenced by his father \ and his uncle, also named Charles de Gualle, who was a historian and had an interest in military tactics. As he came into a family of scholars, he became highly literate and informed of French history at a young age, and having philosophical discussions about war and war tactics in his home led to his aspirations to have a military career. ',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'He began his military career when he served in World War I, and was promoted to Captain during the Battle of Verdun where he was injured and taken captive. After this event he made tactical suggestions that were turned down by his higher-ups, but that was only the beginning for his military career. In between the first and second world war, Charles de Gaulle continued his education more formally at a military school until France was invaded by Nazi Germany in around 1939, when the second world war had begun.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background duck2 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'First: The Early Battles of WW2',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Second: Challenges the French Military Faced',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Third: Fighing France was Born',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
		'show background duck with fadeIn',
                'show video cat-video background',
		'When WW2 began, de Gualle was informed that he would lead an armored division and he immediately began finding and preparing staff and soldiers for his division. During his first battle, his army barely escaped defeat. Later on he took around 400 Nazi prisoners in order for his soliders to escape the area safely. Fighting back against Hitlor and contributing to the fight to maintain order in the world was far more important than the risk of loss. Through the leadership of de Gaulle the soldiers understood why they were fighting, and put more trust into his tactics and plans, as he has shown his skill and intelligence on the battlefield.',
                'hide video cat-video',
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background duck with fadeIn',
                'play sound cat-meow',
		'De Gaulle began to notice the challenges his army was facing, he did not panic and continued to develop more war strategies. He believed that through strategies and mobilization, they would be able to overcome the odds that were against them, and be able to take back control and power over their land. These issues included extreme geographic disadvantages and a lack of mobilization. This made it extremely difficult for his army and he began to implement his own tactics that were unlike traditional trench fighting tactings. Instead he used modern techniques comparable to those of Germany’s. Despite his great efforts, the French government began to surrender to Germany, which caused de Gaulle to flee to London.',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background grape with fadeIn',
		'Once Charles de Gualle fled to London, he began to form an army of his own called the Free France Forces, which later became known as Fighting France, and encouraged others to stand up to Germany. He began spreading the word about his army and encouraging more soldiers to join him, and even went on the radio to encourage the resistance of Hitlor. After the French government’s surrender, they began to comply to and cooperate with the Nazi’s which caused de Gaulle to realize the urgency in which he needed to prepare his army. While in London de Gaulle made a deal with Churchill to support his Free French Forces against Hitlor. Their forces served in major battles against both the Axis and Vichy forces all across the world, and were able to win battles that led to the turning point in the war.',
		'jump Ending',
	],

	'Ending':[
		'show background potatocat with fadeIn',
        'After persevering through the rest of the war with the Free French Forces, de Gaulle was able to secured the liberation of France and took the position as provisional President of France until stepping down in 1944. In conclusion, Charles de Gaulle dedicated his life to a military career because he wanted to be able to make a difference in history for the better, and continued to fight for what he believed in after his country had already surrendered.',
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
		'It is important to recognize how he challenged the status quo of warfare, and pushed the French to further develop and advance their military equipment and strategies. De Gaulle’s founding of the Free French Forces showed French people, and parts of the world, that the fight against Hitlor was not over, and if the allied countries continued to work together they would be able to regain control over their own land and restore peace in the world.',
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
        <b>How De Gualle Fought for Freedom</b>
				<br/>
				<br/>
        By: Grace Plunkett
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
