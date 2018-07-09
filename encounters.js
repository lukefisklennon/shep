module.exports = {
	bartender: {
		description: "A bartender is serving drinks.",
		button: "Speak to the bartender",
		start: "welcome",
		nodes: {
			welcome: {
				text: "“Welcome, welcome! You look weary, would you care for a drink? Best brews in the land!”",
				buttons: [
					["“I'll have a drink”", "accept"],
					["“Not today”", "decline"]
				]
			},
			accept: {
				text: "“Enjoy!”",
				script: function(game) {
					game.modifyGold(-5);
					game.addItem("drink");
				}
			},
			decline: {
				text: "“Come back any day!”"
			}
		}
	},
	questGuy: {
		description: "A mysterious and suspicious looking guy is huddled in the corner.",
		button: "Approach the mysterious guy",
		start: "intro",
		nodes: {
			intro: {
				text: "“Hey. Yeah, you. You’re searching for answers, right? You want to make sense of your past. I think I can help you.”",
				buttons: [
					["“Right… who are you?”", "name"],
					["“I’m listening.”", "info"],
					["“I don’t take pamphlets from strangers.”", "decline_0"]
				]
			},
			name: {
				text: "“Who I am isn’t important. But if you must know, the name’s nameless.”",
				buttons: [
					["“Nice to meet you.”", "offer_0"],
					["“Have you been stalking me?”", "offer_1"]
				]
			},
			offer_0: {
				text: "“And you – but I’m not here to exchange pleasantries. You want my help or not?”",
				buttons: [
					["“Alright, let’s hear this”", "info"],
					["“I’m not interested”", "decline_1"]
				]
			},
			info: {
				text: "“You want to remember your past? So do I. There’s a man that did this to us – his name’s nameless. He runs some cult in his basement, I figure the two of us must have gotten too close to catching him for comfort. You find him, and maybe you can help both of us.”",
				buttons: [
					["“I’ll find him.”", "clues"],
					["“That’s horsecrap.”", "decline_1"],
				]
			},
			clues: {
				text: "“Then you’ll have my help. Start looking for clues – maybe together we can track these freaks down.”"
			},
			decline_0: {
				text: "He facepams. “Suit yourself…”"
			},
			offer_1: {
				text: "“That’s… not the point. Do you want my help or not?”",
				buttons: [
					["“Alright, let’s hear this.”", "info"],
					["“I’m not interested”", "decline_1"]
				]
			},
			decline_1: {
				text: "“Your loss. Come back when you’ve found your balls again.”",
				buttons: [
					["“That was uncalled for.”", "declineExit"],
					["“You want to take this outside?”", "fightIntro"],
					["Walk away", null]
				]
			},
			declineExit: {
				text: "“Not really.”"
			},
			fightIntro: {
				text: "Nameless raises an eyebrow at you, a smirk playing across his lips. “You don’t want to go there… trust me.”",
				buttons: [
					["“Fine.”", null],
					["“I insist.”", "fightAccept"]
				]
			},
			fightAccept: {
				text: "“Well...” Nameless grins at you maliciously. “How could I possibly turn down an honest challenge?”",
				buttons: [
					["Take this outside", "fightStart"]
				]
			},
			fightStart: {
				text: "The two of you step outside, and as you ready yourselves to fight, a few passers-by stop to watch the confrontation. Nameless strikes first, aiming a powerful right-hook at your jaw.",
				buttons: [
					["Sidestep", "fightSidestep"],
					["Block", "fightBlock"],
				]
			},
			fightSidestep: {
				text: "Light on your feet, you sidestep the blow, but it’s immediately followed by a lightning-fast uppercut.",
				buttons: [
					["Backstep", "fightBackstep"],
					["Catch fist", "fightCatchFist"]
				]
			},
			fightBackstep: {
				text: "You attempt to avoid the punch, but he catches you under the chin, and with the impact you’re overcome by a blinding pain. You stumble and fall hard on the ground, and after a moment when your head’s stopped spinning see nameless standing over you, indifferently taking an apple out of his pocket and beginning to eat.",
				buttons: [
					["Groan", "fightExit"]
				]
			},
			fightExit: {
				text: "“Well, you might not have made such a capable associate after all. Still, once you can stand up again, feel free to come back in, and we can talk business.”"
			},
			fightBlock: {
				text: "You raise your arm to defend yourself, but stagger under the force of the blow, and backpedal a few paces while nameless aims a sweeping roundhouse kick at your head.",
				buttons: [
					["Continue staggering", "fightKick"]
				]
			},
			fightKick: {
				text: "The kick connects with your head, and you’re sent sprawling on the ground as your vision flashes red. Groaning, you roll over and try to focus on nameless who, after a moment, you realise has indifferently taken an apple out of his pocket and begun to eat.",
				buttons: [
					["Continue groaning", "fightExit"]
				]
			},
			fightCatchFist: {
				text: "His attack is simply too fast, and as his fist collides with the underside of your jaw, you’re overcome by blinding pain. You stumble and fall hard on the ground, and after a moment when your head’s stopped spinning see nameless standing over you, indifferently taking an apple out of his pocket and beginning to eat.",
				buttons: [
					["Groan", "fightExit"]
				]
			}
		}
	}
};
