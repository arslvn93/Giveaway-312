const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports_games", "text": "Major league sports games" },
        { "value": "food_and_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_at_home", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_out", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_travel", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "not_very_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],

  "giveaway": {
    "name": "Toronto Blue Jays Tickets Giveaway",
    "heroHeadline": "Step Up to the Plate for an <span class='highlight'>Unforgettable Summer!</span>",
    "heroSubheadline": "Experience the Excitement of a Toronto Blue Jays Game—Absolutely Free!",
    "promotionDates": "Promotion runs from June 18, 2025 until July 1, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
    "heroCtaText": "Get My Tickets Now",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> at the Canada Day event has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "We'll announce the winner via email on July 2, 2025. Keep an eye on your inbox!"
  },

  "prize": {
    "name": "$100 Value Toronto Blue Jays Tickets",
    "value": "$100 Value",
    "description": "Win tickets to an unforgettable Toronto Blue Jays game this summer! Our $100 prize gives you and a guest the chance to experience the thrill of live baseball at a major league game. Perfect for baseball lovers and fans looking to create lasting summer memories.",
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "alt": "Toronto Blue Jays Baseball Game"
      },
      {
        "src": "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
        "alt": "Cheering crowd at a baseball game"
      },
      {
        "src": "https://images.unsplash.com/photo-1533236897-388e2127a527?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "alt": "Baseball bat and ball"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "$100 worth of Blue Jays tickets included" },
      { "icon": "fas fa-users", "text": "Great for a fun day with family or friends" },
      { "icon": "fas fa-baseball-ball", "text": "Experience the thrill of a live Major League Baseball game" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and easy entry at our event booth!" }
    ],
    "limitedTimeOfferText": "⚾ Limited Time Summer Giveaway!",
    "ctaButtonText": "I WANT TO WIN THIS!"
  },

  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Catch us at the Canada Day event on July 1st."
      },
      {
        "icon": "fas fa-pencil-alt",
        "title": "Complete the Survey",
        "description": "Fill out a quick and fun survey at the booth to enter the giveaway."
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Wait for the Draw",
        "description": "The winner will be announced on July 2nd via email."
      }
    ],
    "highlights": [
      { "icon": "fas fa-baseball-ball", "text": "Live Jays Game Experience" },
      { "icon": "fas fa-gift", "text": "$100 Prize Value" },
      { "icon": "fas fa-smile", "text": "Free to Enter" }
    ]
  },

  "entryForm": {
    "subtitle": "Provide your details below for a chance to win this exciting $100 prize!",
    "entryCountText": "Join hundreds already entered! Don't miss out!",
    "socialSharePrompt": "Tell your friends about this amazing giveaway:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win $100 Toronto Blue Jays tickets! Join the Canada Day fun!")
    }
  },

  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Square Selection",
      "text": "Winner selection is random and unbiased, conducted with certified random number generation." 
    },
    "importantNotice": {
      "title": "Winner Notification - Check Your Email!",
      "text": "Winner will be contacted by email, please check your inbox, promotions tab, and spam folder after the giveaway ends."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Open to residents who are 18 years or older, located in Toronto and neighboring areas."
      },
      {
        "q": "When does the giveaway run?",
        "a": "From June 18, 2025, to July 1, 2025, with the draw on July 2, 2025."
      },
      {
        "q": "How will the winner be selected?",
        "a": "One winner chosen by a random drawing from all eligible entries during the promotional period."
      },
      {
        "q": "When and how will the winner be notified?",
        "a": "Winner will be notified by email on or about July 2, 2025."
      },
      {
        "q": "Can I enter multiple times?",
        "a": "One entry per person/email during the promotional period. Duplicate entries will be disqualified."
      },
      {
        "q": "Is my information secure?",
        "a": "We respect your privacy; data is used only for giveaway purposes as per our Privacy Policy."
      }
    ],
    "tips": [
      "Double-check email accuracy before submitting.",
      "Add our contact email (shar@theskygroup.ca) to your address book.",
      "Follow Sky Group on social media for updates and winner announcements."
    ]
  },

  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CIA4RJJ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T232758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIHmnIxXBwbVSiQ653e2aLn%2Bfznvzfh%2FIw4phVrkgkC4VAiBzea5NBSVWawQ%2FLBd1BbnF6pLyjcc3%2BKu4DRauNwgPMyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMJ1xrFMri6NzboV9CKtwDSFvZLluPPR0Cdmz9162zx5toPMGsTxctQ1dLgyARb4Yn6%2BHkq0qJ9faojWNjXBlmWgAGdo1UPHfGGvsQhPrxomW%2F3l9gwy4a9JDg%2BiMpMtTajLlaIjCNkIWTH1qYOmLj3nf1wgmi%2Fs%2FjIEunzXscaTuvJyQg5%2BGyPcQWTPY6Mw%2FRFRQNws5EJf%2Bc5L1acyOMtUi6imKKljQZowFFJOms6HIx7U05umUuq%2FxpAhDypBfXoEAwFokkbtGNEWEshVfMv2OnRYxSz5GQkdHT18kD9aO1WDlxFw7rk6TMxgyodu6s8pPzi6F8%2BRCIJvu7VITgoTpYO8VteToBeD47AW6HhfogCaR%2Byu9f9vpmU19VWjwM76abCk7ss%2F5%2F6J9X5mfALNKhvDEiVv%2BaeCDFggy66WR%2BEd4B1%2Bm3mpfT2SRbSKLDA1hjkY4Q3H%2FqdQ%2BVOFbwZocqtLHyIkstwGUuGov9aw801nzKOsaY6I%2FGb5tqQ%2FVrfMMjRFbIqr5ZiSg6EepC%2FbULS5hUo6sQIBJBiLphIchZpb6Xjew5YH4Ok%2Fh8H2OMQh8sxR31dvIn%2BorvlmW9zUJOxYfHt%2Fo05wuScDDg1R3J%2BI%2BmtAuFiKJ9Je8OV6BEL2EYz0eTp690FScwv7jCwgY6pgGhi38tXBpXkhQPhbFV4rscAPeIkF8z8tc29xinvY%2FAr1zrkBkr1N3FCKAt7rmpyBZ66AryoMXR3ghBMwzWo5Rh4HzdPmBFD8qkAaLPi0S3xBsTajGvfGaYomsoZacO0tSataWMioeMDgTb6lEYccuplyZ0sbmZnDWe%2F6MCNN7BBT6ZpwLfVkwePuQ7iCjc7vHKqzTsnAuMS%2FtzTumC5XNa2LOj2pYC&X-Amz-Signature=f86d7d164a7013361da38c54819b8b2095171c8f68ab5414626df64032b5ae49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },

  "meta": {
    "pageTitle": "Toronto Blue Jays Tickets Giveaway - Sky Group!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },

  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#004d99", "#66ccff", "#e60000", "#fff", "#a6dcef"],
    "showCountdownInHero": true
  },

  "deploymentInfo": {
    "repoName": "Giveaway-312",
    "repoUrl": "https://github.com/arslvn93/Giveaway-312",
    "tag": "Toronto Blue Jays Tickets Giveaway 2025",
    "netlifyUrl": "http://Giveaway-312.netlify.app",
    "netlifyId": "1003309629"
  }
};
