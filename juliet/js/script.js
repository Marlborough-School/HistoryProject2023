/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>`
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
'song':'song.mp3',

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
'war':'war.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {
    'cat-video':'cat-2879.mp4',
});

//DEFINE THE IMAGES YOU WANT HERE
monogatari.assets ('images', {
	//'nickname for the image': 'actual name of the image',
'owen':'owen portrait.png',
'child':'child.jpg',
'teacher':'teacher.png',
'dulce':'dulce.png',
'letter':'letter.png',
'hospital':'hospital.png',
'soldier': 'soldier.png',
'patient':'patient.png',
'sassoon':'sassoon.png',
'both':'both.png',
'trenches':'trenches.png',
'pity':'pity.png',
'leader':'leader.png',
'futility':'futility.png',
'deranged':'deranged.png',
'smile':'smile.png',
'sources':'sources.png',
'sources2':'sources2.png',
'sources3':'sources3.png',
});

//DEFINE THE BACKGROUNDS YOU WANT HERE
monogatari.assets ('scenes', {
	//'nickname for the background': 'actual name of the background',
'white':'white.jpg',	
});


//
monogatari.script ({
	'Start': [
        'show background black with fadeIn',
        'play music song with loop with volume 30',
        'show image owen with fadeIn',
		'To most of us, Saturday, March 18, 1893, is not a day to remember, nothing more than a random, insignificant date that holds no importance in the grand scheme of things. But, on this seemingly trivial day, a young woman gave birth to a baby boy in Shropshire, England. The little boy was given the name Wilfred Edward Salter Owen, one that would soon belong to one of the greatest British poets in history.',
		'Did many war poets of World War II generally express disillusionment with the war in their poetry?',
		{'Choice':{
			'Y':{
				'Text': 'Yes, resentment was widespread.',
				'Do': 'jump yesAnswer'
			},
			'N':{
				'Text': 'No, Owen was one of the few who spoke up.',
				'Do': 'jump noAnswer'
			},
		    },
	        },
        ],

	'yesAnswer':[
		'show background black',
         'hide image owen with fadeOut',
		'Correct, many poets discussed their disdain for the war and its destruction, as well as its tremendous emotional impact.',
		'jump choiceScreen',
	],

	'noAnswer':[
		'show background black',
         'hide image owen with fadeOut',
		'Incorrect, many poets discussed their disdain for the war and its destruction, as well as its tremendous emotional impact.',
		'jump choiceScreen',
	],

	'choiceScreen':[
		'show background black with fadeIn',
         'hide image owen with fadeOut',
		{'Choice':{
			'1':{
				'Text': 'Early Life',
				'Do': 'jump redGrape',
			},
			'2':{
				'Text': 'Battlefield',
				'Do': 'jump greenGrape',
			},
			'3':{
				'Text': 'Shellshock Recovery',
				'Do': 'jump blackGrape',
			},
            '4':{
				'Text': 'Death',
				'Do': 'jump death1',
			}
		}
	}
	],

	'redGrape':[
		'show background black with fadeIn',
        'hide image owen with fadeOut',
        'show image child with fadeIn',
		'Although he had been interested in the arts as a child, Owen didn’t begin taking his poetry seriously until around 20 years old. His work was extraordinarily stylistic and demonstrated a unique rhythm, setting him apart from other British poets. Owen developed an exuberant passion for poetry, music, and art, with a desire to pursue a career. But, his father encouraged him to pick a career that ensured a steady income.',
         'hide image child with fadeOut',
		'jump earlylife2',
	],
    
    'earlylife2':[
        'show background black with fadeIn',
        'show image teacher with fadeIn',
		'So for the next few years, Owen worked in France as a teacher and developed sympathy as he observed the devastating effects of WWI. His compassion pushed him to enlist in the British Army. By June of 1916, he received a commission as lieutenant of the Manchester Regiment.',
         'hide image teacher with fadeOut',
		'jump choiceScreen',   
    ],

	'greenGrape':[
		'show background black with fadeIn',
         'show image letter with fadeIn',
         'play sound war with volume 50',
		'Owen kept contact with his mother through an exchange of letters, initially expressing pride, describing a “fine heroic feeling about being in France” (Owen, Poetry Foundation.), but that quickly went downhill as his service became increasingly perilous.',
         'hide image letter with fadeOut',
		'jump battlefield2',
	],

    'battlefield2':[
		'show background black with fadeIn',
         'show image dulce with fadeIn',
		'Regardless of his decision to ignore a career in poetry, he continued to write, composing graphic scenes and feelings with his words. In 1917, his men were attacked with poison gas, inspiring one of his most famous poems, “Dulce et Decorum Est”. Its effect to spark an emotional reaction in the reader is unlike anything the world had seen at this time.',
		'jump battlefield3',
        
    ],
    
    'battlefield3':[
		'show background black with fadeIn',
         'show image dulce with fadeIn',
		'Owen unveils the true monstrosity of war as he describes watching his comrade die beside him, writing, “as Dim through the misty panes and thick green light, As under a green sea, I saw him drowning. In all my dreams before my helpless sight, He plunges at me, guttering, choking, drowning.” (Owen)."',
		'jump battlefield4',

    ],
    
    'battlefield4':[
		'show background black with fadeIn',
         'show image dulce with fadeIn',
		'Only months later, Owen was hospitalized for a concussion from plunging into a 15-foot-deep hole while searching at night for a fatigued soldier. After he recovered, record-breaking cold and snow stranded Owen and his men in an open field for four nights He recounted the experience in a letter to his mother: “I kept alive on brandy, the fear of death, and the glorious prospect of the cathedral town just below us, glittering with the morning.” (Owen, Poetry Foundation.)',
         'hide image dulce with fadeOut',
        'jump battlefield5',
            
    ],

    'battlefield5':[
		'show background black with fadeIn',
         'show image soldier with fadeIn',
		'Their suffering continued, and his men were forced to take cover for almost 2 weeks in small holes in the ground. Owen directed his resentment, not at the opposing forces, but at the citizens and government of England who had the opportunity to help but refused to take it.',
         'hide image soldier with fadeOut',
        'jump battlefield6',
           
    ],
    
    'battlefield6':[
		'show background black with fadeIn',
        'show image hospital with fadeIn',
         'Owen was hospitalized several more times for severe headaches and ultimately diagnosed with shell shock. He was sent for treatment at Craiglockheart War Hospital, where he made acquaintance with another patient, Siegfried Sassoon, an esteemed English poet Owen would grow to deeply admire and look up to.',
         'hide image hospital with fadeOut',
         'stop sound war',
        'jump choiceScreen',
    
    ],
    
	'blackGrape':[
		'show background black with fadeIn',
        'show image patient with fadeIn',
		'Although Owen had been sporadically developing his technique, he had spent little time actually conveying his experiences. Subsequently, Owen’s time in the hospital, encouragement from his doctor, and the coincidental arrival of a mentor-like poet facilitated his ultimate devotion to his work.',
		'jump recovery2',
],

    'recovery2':[
		'show background black with fadeIn',
        'show image patient with fadeIn',
		'Dr. Brock, the hospital psychiatrist, especially assisted Owen in confronting some deeply buried emotions, such as his resentment of his father for disapproving of his desire to become a poet, his intense bond with his mother and his annoyance with all other women, his ambivalence towards his faith, and his sexuality, specifically his attraction to men.',
         'hide image patient with fadeOut',
        'jump recovery3'
],
    
     'recovery3':[
		'show background black with fadeIn',
        'show image sassoon with fadeIn',
		'When Sassoon arrived, Owen already profoundly respected his work. The two shared many similar ideas, specifically about their disdain for the war, and bonded over their love of writing and art. Sassoon’s presence drove Owen to creatively thrive, using his time in the hospital not only as a period of recovery, but as a chance to explore his deepest emotions with poetry.',
          'hide image sassoon with fadeOut',
         'jump recovery4'
],
    
     'recovery4':[
		'show background black with fadeIn',
         'show image both with fadeIn',
         'Although both of them ultimately decided it was only right for them to continue fighting, Owen returned from his creative hiatus fixed on the idea that he was going to pursue poetry after his service ended.',
          'hide image both with fadeOut',
         'jump choiceScreen'
],
    'death1':[
		'show background black with fadeIn',
         'show image trenches with fadeIn',
		'Sassoon convinced Owen to return to the trenches on the basis that it would provide him with more emotion he could turn into art. Owen began to consider his poetry as not only personal experiences but also a voice for anyone who opposed the war.',
         'hide image trenches with fadeOut',
		'jump death2',
	],
    
     'death2':[
		'show background black with fadeIn',
         'show image pity with fadeIn',
		'He compiled a manuscript of his poems he believed would convey “the pity of war” (Owen, Poetry Foundation.) rather than the falsified version that promoted brutality. Thanks to Sassoon’s trust and connections, Owen had begun to form a career in which he would be able to pursue what he loved.',
         'hide image pity with fadeOut',
		'jump death3',
	],
    
    'death3':[
		'show background black with fadeIn',
         'show image leader with fadeIn',
		'Owen’s peers spoke of him with the highest regard, a fellow officer claiming, “I admired his work. ... I was content to follow him with the utmost confidence.” (Foulkes, Poetry Foundation.) Deep down, Owen knew he wasn’t proud of being a soldier, he knew how to support his men by acting the part.',
		'jump death4',
	],
    
    'death4':[
		'show background black with fadeIn',
         'show image leader with fadeIn',
		'On November 4, 1918, as Owen fiercely led his men in an attempt to bridge the Sambre Canal, he was shot by a German machine-gunner at only 25 years old. Armistice, the truce that ended WWI, was signed on November 11. The war ended exactly a week after his death.',
        'hide image leader with fadeOut',
		'jump death5',
	],
    
     'death5':[
		'show background black with fadeIn',
         'show image futility with fadeIn',
		'More of Wilfred Owen’s poems were published by his family after his death, and he will always be remembered with respect.',
         'hide image futility with fadeOut',
         'show image deranged with fadeIn',
         'His talent and his beliefs are conveyed through his true calling, one he had finally begun to pursue when his time was cut short.',
         'hide image deranged with fadeOut',
		'jump Ending',
	],
	'Ending':[
		'show background black with fadeIn',
		{'Choice':{
			'Closing':{
				'Text': 'Conclusion',
				'Do': 'jump Closing',
			}
		}
		}
	],

	'Closing':[
		'show background black with fadeIn',
        'show image smile with fade in',
		'Although Owen gave his life in the war, he also gave everyone enlisted in the military a voice. Through his poetry, he expressed disdain for needless bloodshed, not for the opposing sides. His work drew connection between every soldier from every country, uniting them against the futile violence that took so many lives like his.',
		'jump Closing2',
        
	],
    
    'Closing2':[
		'show background black with fadeIn',
        'show image smile with fadeIn',
		'In a way, Owen achieved his dreams of becoming an esteemed poet, providing us with some of the greatest works of British poetry the world has ever known.',
        'hide image smile with fadeIn',
		'jump Closing3',
	],
    
    'Closing3':[
		'show background black with fadeIn',
        'show image sources with fadeIn',
        'Works Cited.',
        'hide image sources with fadeOut',
        'show image sources2 with fadeIn',
        'Works Cited continued',
         'hide image sources2 with fadeOut',
        'show image sources3 with fadeIn',
        'Works Cited continued',
        'hide image sources3 with fadeOut',
        'end'
	],
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
        <b>“The Old Lie: It is sweet and fitting to die for one’s country”</b>
				<br/>
				<br/>
        By: Juliet Maltas
        </p>
				</center>
				<br/>

        <main-menu></main-menu>
    `;
});
