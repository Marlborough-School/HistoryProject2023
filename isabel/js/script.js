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
    'LILY1':'LILY1.jpeg',
	'LILY2':'LILY2.jpeg',
    'LILY3':'LILY3.png',
    'LILY4':'LILY4.jpeg',
    'LILY5':'LILY5.jpeg',
    'LILY6':'LILY6.jpeg',
    'LILY7':'LILY7.webp',
    'LILY8':'LILY8.jpeg',
    'LILY9':'LILY9.webp',
    'LILY10':'LILY10.jpeg',
    'LILY11':'LILY11.jpeg',
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
});


//
monogatari.script ({
	'Start': [
		'show background black with fadeIn',
        'show image LILY2 with fadeIn',
		'When Lily Ebert was 5 years old, her mother gave her a small gold pendant as a gift. It wasn’t very expensive or unique, but young Lily was very delighted with her present.',
        'hide image LILY2',
        'show background black with fadeIn',
        'show image LILY3 with fadeIn',
        'Little did she know, it would become one of her most valuable possessions and a symbol of her resilience and determination throughout the holocaust.',
        'hide image LILY3',
        'show background black with fadeIn',
        'show image LILY4 with fadeIn',
        'When the Nazis invaded Hungary, they confiscated all valuables and property, especially jewelry or items made of gold. Lily’s younger brother was aware of this, so he hid the pendant in the sole of his mother’s shoe to preserve Lily’s gift.',
        'hide image LILY4',
        'show background black with fadeIn',
        'show image LILY5 with fadeIn',
        'In July 1944, when Ebert was 20, she was deported from her town of Bonyhad, Hungary, and was crammed into a dark and airless cattle truck to Auschwitz, one of the many Nazi-controlled concentration camps. The small pendant took the journey with them in the sole of Lily’s mother’s shoe. Both mother and daughter wore the same size shoe, and knowing the pendant was inside the sole, Lily’s mother asked to switch shoes with her.',
       
        'hide image LILY5',
        'show background black with fadeIn',
        'show image LILY6 with fadeIn',
		'How many people were sent to Auschswitz during its 5 years of operation?',
		{'Choice':{
			'Y':{
				'Text': '1.3 million people',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': '900,000 people',
				'Do': 'jump noAnswer'
			},
		    },
	        },
        ],

	'yesAnswer':[
		'show background black',
		'Correct! It is estimated that 1.3 million people were sent to the camp complex in occupied Poland. Of this total, nearly 1.1 million were Jews, 960,000 of which died in the camp. The other approximately 200,000 people were predominantly made up of non-Jewish Poles, the mentally challenged, Roma people, homosexuals, and Soviet prisoners of war.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
		'Incorrect! Surprisingly, there were way more than 900,000 people sent to Auschwitz. It is estimated that 1.3 million people were sent to the camp complex in occupied Poland. ',
		'jump choiceScreen',
	],
    

    
	'choiceScreen':[
        'hide image LILY6',
		'show image LILY8 with fadeIn',
		{'Choice':{
			'1':{
				'Text': 'Inside the gates of Auschwitz',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Nearing the end of Her Journey',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'A Tik Tok Star?',
				'Do': 'jump blackGrape',
			}
		}
	}
	],

	'redGrape':[
        'hide image LILY8',
        'show background black with fadeIn',
		'show image LILY9 with fadeIn',
		'When they arrived at the camp, there was a man with a stick in his hand. With a single flick of his wrist, he motioned left or right, deciding the fate of the line of people in front of him. The people sent to the left were taken to the gas chambers or the crematorium.',
        'hide image LILY9',
        'show background black with fadeIn',
		'show image LILY10 with fadeIn',
        'Lily and her two sisters, Renee and Piri, were motioned to move to the right while her mother, brother, and Sister Berta were signaled to move to the left. That was the last time Lily saw her mother. Later on at the camp, the Nazi’s ordered Lily to shower. When she came out of the shower, her clothes were gone; only her shoes remained.',
         'hide image LILY10',
        'show background black with fadeIn',
		'show image LILY11 with fadeIn',
        'The concentration camp looked like a large factory. Lily was confused as to what it might be as she saw a fire appear from out of the chimneys and smelled a terrible stench. After asking around, she soon realized that it was not a factory, but the smell of Lilys parents dead bodies burning, along with the others who had been sent down the path to the left.',
        'hide image LILY11',
        
		'jump choiceScreen',
	],

	'greenGrape':[
		'show background duck with fadeIn',
        
		'After learning that her mother had passed, not only did she feel as if the pendant was her only connection to her mother, but she felt as if it was her duty to keep the pendant safe. As her shoes wore out due to her time at Auschwitz, she started to hide the pendant in her daily ration of bread.',
        'After about four months in Auschwitz, the sisters were transferred to an ammunition factory near Leipzig. In 1945, allied forces liberated Leipzig, and Lily and her sisters moved to Switzerland. Lily wore the pendant everyday in remembrance of her mother and the rest of her family. Soon after, she got married and had children.',
		'jump choiceScreen',
	],

	'blackGrape':[
		'show background grape with fadeIn',
		'Lily has become one of the oldest influencers on Tik Tok. She makes videos talking about how she survived the holocaust, answers questions people may have, and shares her personal stories.',
        'Sharing her story to Tik Tok was Lilys mission and purpose. As antisemitism becomes a rising problem again in the United States, Ebert’s tik tok videos share important messages in an attempt to “save the world” from anti semitic views and negative stereotypes. In an interview, Ebert says “I was really not sure that I would stay alive. It is a miracle that I am here. But I promised myself, however long I will be alive, and whatever I will do in life, one thing is sure, I will tell my story,”',
        'In one of her tik toks, she shows her pendant, stating that it was the only piece of gold that survived auschwitz.',
      
		'jump Ending',
	],

	'Ending':[
		'show background potatocat with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Lily hopes that by sharing untold stories, her audience can retell those stories, aiming to change lives and perspectives. She wants everyone to understand just how terrible human beings have been and still can be to each other, and encourages young people to understand the significance of tolerance, love, and kindness. By educating her audience, whether that be adults or the younger generation, she hopes that they can build a better future. She wants to remind the gen-z-ers that regardless of skin color, nationality or religion, everyones blood is red. ',
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
        <b>The Pendant in the Shoe
Lily Ebert’s Journey Through the Holocaust
</b>
				<br/>
				<br/>
        By: Isabel Konstant
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
