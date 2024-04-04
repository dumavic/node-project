const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/crafts', (req, res) => {
    const crafts = [
        {
          "name": "Beaded JellyFish",
          "image": "bead-jellyfish.jpg",
          "description": "Create a hanging jellyfish using eggcartons and multicolored beads",
          "supplies": [
            "string",
            "egg cartons",
            "beads"
          ]
        },
        {
          "name": "Character Bookmarks",
          "image": "bookmarks.jpeg",
          "description": "Create a little birdy bookmark to always remin you were you were",
          "supplies": [
            "yellow construction paper",
            "orange construction paper",
            "black construction paper"
          ]
        },
        {
          "name": "Button Flowers",
          "image": "button-flowers.jpeg",
          "description": "Create a fun bouquet of flowers with your favorite buttons",
          "supplies": [
            "multicolored buttons",
            "multicolored flet",
            "green straws",
            "ribbon"
          ]
        },
        {
          "name": "Cheerio Necklaces",
          "image": "cheerio-necklace.webp",
          "description": "Create a fun and edible necklace",
          "supplies": [
            "Cheerios or Fruit Loops",
            "Elastic string"
          ]
        },
        {
          "name": "Cotton Ball Cupcakes",
          "image": "cotton-ball-cupcakes.webp",
          "description": "Decorate your fun filled cupcake however you want.",
          "supplies": [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
          ]
        },
        {
          "name": "School Themed Mason Jars",
          "image": "decorated-jars.jpeg",
          "description": "Let's make mason jars to ",
          "supplies": [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
          ]
        },
        {
          "name": "Egg Carton Flowers",
          "image": "egg-carton-flowers.jpg",
          "description": "Make a beautiful bouquet with egg cartons and other items you can find around the house",
          "supplies": [
            "Egg Cartons",
            "Butons",
            "Green Pipe Cleaner",
            "Ribbon",
            "Canvas"
          ]
        },
        {
          "name": "Finger Puppets",
          "image": "finger-puppets.jpeg",
          "description": "These little critters are easy to make, and will entertain your little one while they make a show.",
          "supplies": [
            "Pom-poms",
            "Googly Eyes",
            "Pipe Cleaner"
          ]
        },
        {
          "name": "Ribbon Flower Headbands",
          "image": "flower-headbands.jpg",
          "description": "Let your little one show off her new style with these pretty and customizable headbands",
          "supplies": [
            "Plain headband",
            "Ribbon",
            "Buttons",
            "Gems"
          ]
        },
        {
          "name": "Hand Print Fish Puppets",
          "image": "handprint-fish.jpg",
          "description": "We all need to take every opportunity we can to remember those tiny hands, and what better way to do it, then to make fish puppets!",
          "supplies": [
            "Popsicle sticks",
            "Cardstock",
            "Gems",
            "Googly Eyes"
          ]
        },
        {
          "name": "Hand Print Tree",
          "image": "hand-print-tree.jpeg",
          "description": "This is a fun way to get your little one into finger painting.",
          "supplies": [
            "Watercolor Paper",
            "Finger paint"
          ]
        },
        {
          "name": "Melted Bead Bowl",
          "image": "melted-bead-bowl.jpeg",
          "description": "All they need to do is shape their faviorte design, warm it up and they have a brand new bowl.",
          "supplies": [
            "Beads",
            "Bowl",
            "Parchment paper"
          ]
        },
        {
          "name": "Monster Kites",
          "image": "monster-rolls.jpg",
          "description": "Let's make those scary toilet paper rolls fly!",
          "supplies": [
            "Toilet paper rolls",
            "Paint",
            "Tissue Paper",
            "String"
          ]
        },
        {
          "name": "Pool Noodle Boats",
          "image": "noodle-boats.png",
          "description": "Let's make a boat that will actually float, due to the floating bottom of a pool noodle.",
          "supplies": [
            "Pool Noodle",
            "Straw",
            "Plastic Paper"
          ]
        },
        {
          "name": "Paper Plate Bees",
          "image": "paper-plate-bees.jpeg",
          "description": "Let's have fun with making cute little bees, or big bees actually.",
          "supplies": [
            "Paper Plate",
            "Googly Eyes",
            "Close Pins",
            "Black pom poms",
            "Yellow Paint",
            "Black Paint"
          ]
        },
      ];
    res.send(crafts);
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
});