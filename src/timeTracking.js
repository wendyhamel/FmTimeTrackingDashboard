window.showContent = function () {
	return {
		activeTimeframe: "weekly",
		timeframes: ["daily", "weekly", "monthly"],
		cards: [
			{
				"title": "Work",
				"imagePath": "./images/icon-work.svg",
				"altText": "illustration of a suitcase",
				"backgroundColorClass": 'bg-orange',
				"illustrationClasses": 'w-20 h-20 pl-2 pb-3',
				"timeframes": {
					"daily": {
						"current": 5,
						"previous": 7
					},
					"weekly": {
						"current": 32,
						"previous": 36
					},
					"monthly": {
						"current": 103,
						"previous": 128
					}
				}
			},
			{
				"title": "Play",
				"imagePath": "./images/icon-play.svg",
				"altText": "illustration of a game controller",
				"backgroundColorClass": 'bg-blue-50',
				"illustrationClasses": 'w-20 h-20 pl-2 pb-3',
				"timeframes": {
					"daily": {
						"current": 1,
						"previous": 2
					},
					"weekly": {
						"current": 10,
						"previous": 8
					},
					"monthly": {
						"current": 23,
						"previous": 29
					}
				}
			},
			{
				"title": "Study",
				"imagePath": "./images/icon-study.svg",
				"altText": "illustration of a book",
				"backgroundColorClass": 'bg-red',
				"illustrationClasses": 'w-20 h-20 pl-2 pb-3',
				"timeframes": {
					"daily": {
						"current": 0,
						"previous": 1
					},
					"weekly": {
						"current": 4,
						"previous": 7
					},
					"monthly": {
						"current": 13,
						"previous": 19
					}
				}
			},
			{
				"title": "Exercise",
				"imagePath": "./images/icon-exercise.svg",
				"altText": "illustration of a runner",
				"backgroundColorClass": 'bg-green',
				"illustrationClasses": 'w-20 h-20 pl-2 pb-3',
				"timeframes": {
					"daily": {
						"current": 1,
						"previous": 1
					},
					"weekly": {
						"current": 4,
						"previous": 5
					},
					"monthly": {
						"current": 11,
						"previous": 18
					}
				}
			},
			{
				"title": "Social",
				"imagePath": "./images/icon-social.svg",
				"altText": "illustration of a speech bubble",
				"backgroundColorClass": 'bg-violet',
				"illustrationClasses": 'w-16 h-16 pb-3',
				"timeframes": {
					"daily": {
						"current": 1,
						"previous": 3
					},
					"weekly": {
						"current": 5,
						"previous": 10
					},
					"monthly": {
						"current": 21,
						"previous": 23
					}
				}
			},
			{
				"title": "Self Care",
				"imagePath": "./images/icon-self-care.svg",
				"altText": "illustration of heart with hospital cross",
				"backgroundColorClass": 'bg-yellow',
				"illustrationClasses": 'w-16 h-16 pl-2 pb-2',
				"timeframes": {
					"daily": {
						"current": 0,
						"previous": 1
					},
					"weekly": {
						"current": 2,
						"previous": 2
					},
					"monthly": {
						"current": 7,
						"previous": 11
					}
				}
			}
		],
	}
}