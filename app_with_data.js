// Main application script for Teenypings Database with embedded data

// Embedded Teenypings data
let teenypingsData = [
  {
    "season": 1,
    "name": "Heartsping",
    "episode": "'The Cookie Mess'",
    "description": "The Royal Teenieping of love; she is in charge of taking care of Romi. Heart-themed, she is full of love and deeply cares for her friends.",
    "power": "",
    "transformation": "Princess Heart",
    "image_url": "https://static.wikia.nocookie.net/catchteeniepin/images/3/3a/Heartsping_S1_render_1.png/revision/latest/scale-to-width-down/164?cb=20240602044610",
    "color": "",
    "spell_type": "heart"
  },
  {
    "season": 1,
    "name": "Dadaping",
    "episode": "'Dadaping, the Smart One'",
    "description": "The Royal Emotion Teenieping of rightness; he is studious, smart, and organized. Cloud-themed, he often helps the team with his large knowledge and inventive ideas.",
    "power": "",
    "transformation": "Princess Cloudia",
    "image_url": "https://static.wikia.nocookie.net/catchteeniepin/images/f/ff/Dadaping.png/revision/latest/scale-to-width-down/101?cb=20220114163613",
    "color": "",
    "spell_type": "cloud"
  },
  {
    "season": 1,
    "name": "Gogoping",
    "episode": "'You Can Do It, Maya!'",
    "description": "The Royal Emotion Teenieping of courage; he is sporty, brave, and energetic. Star-themed, he likes challenges and impulsive actions, but can sometimes lose touch with reality.",
    "power": "",
    "transformation": "Princess Star",
    "image_url": "https://static.wikia.nocookie.net/catchteeniepin/images/c/c3/Gogoping.png/revision/latest/scale-to-width-down/99?cb=20220114163807",
    "color": "",
    "spell_type": "star"
  },
  {
    "season": 1,
    "name": "Chachaping",
    "episode": "'Welcome, Dear Hope!'",
    "description": "The Royal Emotion Teenieping of hope; she has a calm personality. Nature-themed, she loves nature and flowers and never loses hope during difficult times.",
    "power": "",
    "transformation": "Princess Clover",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": "nature"
  },
  {
    "season": 1,
    "name": "Lalaping",
    "episode": "'Let's Sing with Joy'",
    "description": "The Teenieping of joy, she is energetic and cheerful. Music-themed, she likes to sing very loudly to express her feelings and lift the team's mood.",
    "power": "",
    "transformation": "Princess Melody",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": "music"
  },
  {
    "season": 1,
    "name": "Happying",
    "episode": "'Happying's Back'",
    "description": "The Teenieping of happiness, sunshine-themed, she appears as the last missing Royal Teenieping of the season who was secretly transformed into the villain Giggleping.",
    "power": "",
    "transformation": "Princess Sunshine",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": "sunshine"
  },
  {
    "season": 1,
    "name": "Giggleping",
    "episode": "'Likey the Pranks, Giggleping!'",
    "description": "An unidentified Teenieping, who likes to make tricks and pranks. She allies with the freed Teeniepings to try to steal Romi's Magic Catcher.",
    "power": "",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Egoping",
    "episode": "'In The Name Of The Royalpings'",
    "description": "The Teenieping of selfishness, she appears as the final boss of Season 1, and the one who led Happying to transform into Giggleping and who controlled the latter.",
    "power": "",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Kikiping",
    "episode": "'The Cookie Mess'",
    "description": "The Teenieping of malice, he is noisy and foolish. He likes to play mischievous pranks and have fun with everything and everyone.",
    "power": "Make people do pranks.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Charmping",
    "episode": "'A Very Charming Teenieping!'",
    "description": "The Teenieping of cuteness, she lives only for cuteness and loves to eat cotton candy.",
    "power": "Make people act cute.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Shyping",
    "episode": "'A Shy New Classmate'",
    "description": "The Teenieping of shame, she is very shy and gets easily embarrassed and wants to stay away from anyone.",
    "power": "Make people shy.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Dareping",
    "episode": "'Who's the Best?'",
    "description": "The Teenieping of competition, he loves challenges and winning, and he really wants to win.",
    "power": "Give people a burning desire to win, making them start challenges.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Blankping",
    "episode": "'Oops, I Forgot'",
    "description": "The Teenieping of oblivion, he is very lazy and clumsy and forgets various things.",
    "power": "Make people forget about various things.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Dreamping",
    "episode": "'Marylou's Tummy Ache'",
    "description": "The Teenieping of imagination, she likes to trick people with her magic.",
    "power": "Create illusions and transform into objects.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Weeping",
    "episode": "'What Does a Tear Candy Taste Like?'",
    "description": "The Teenieping of sadness, she likes rainy days, but feels very happy when eating tear candy.",
    "power": "Transform tears into delicious candies called tear candies.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Moseyping",
    "episode": "'Find Moseyping!'",
    "description": "The Teenieping of annoyance, he is lazy and always tired, and doesn't want to do anything.",
    "power": "Make himself invisible, make people lazy.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Mimicping",
    "episode": "'Mimicping is a Fan'",
    "description": "The Teenieping of imitation, he is a fan of the famous singer Hye-joo.",
    "power": "Make people imitate others.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Narrping",
    "episode": "'Don't Look at the Mirror'",
    "description": "The Teenieping of narcissism, she loves herself, and tries to be as beautiful as possible.",
    "power": "Give people magic mirrors that make them appear beautiful.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Spookping",
    "episode": "'Spooky Picture Time'",
    "description": "The Teenieping of fear, he loves scaring others, but he's actually a huge coward.",
    "power": "Show someone's greatest fear.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Tutuping",
    "episode": "'Love Me More'",
    "description": "The Teenieping of jealousy, she is a fan of make-up, and she thinks Romi is the prettiest person in the world, but she used to be rivals with Heartsping.",
    "power": "Make people jealous.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Goodping",
    "episode": "'Find the Lucky Stamp'",
    "description": "The Teenieping of wholesomeness, she likes to reward people who do good actions, which are lucky stamps.",
    "power": "Give people a lucky stamp, that makes them lucky for the day.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Tweetping",
    "episode": "'Gonna Tweet It All!'",
    "description": "The Teenieping of chatter, he likes revealing other's secrets, he also likes to chat.",
    "power": "Make people reveal their secrets.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Allmineping",
    "episode": "'Greedy Allmineping'",
    "description": "The Teenieping of greed, she likes stealing food to keep everything only for her.",
    "power": "Steal objects by plugging her hand into her basket.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Roarping",
    "episode": "'Angry Roarping'",
    "description": "The Teenieping of anger, he gets angry very easily.",
    "power": "When angry, he releases heat, make people angry.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Nonoping",
    "episode": "'That's a No, Nonoping!'",
    "description": "The Teenieping of rejection, he doesn't like much as he says no to everything, but he loves broccoli.",
    "power": "Make people reject everything.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Luvping",
    "episode": "'The Arrow of Luvping'",
    "description": "The Teenieping of attraction, she lives only for love, and tries to spread love with everyone.",
    "power": "Make people fall in love.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Coolping",
    "episode": "'Too Cold, Coolping!'",
    "description": "The Teenieping of coldness, he used to live in a fridge as he only loves cold things, but he doesn't like warm things.",
    "power": "Make people feel cold and freeze things.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Artping",
    "episode": "'The Art is Alive!'",
    "description": "The Teenieping of art, he is a very talented painter, and loves to paint.",
    "power": "Make his paintings come alive.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Heavyping",
    "episode": "'Phew, Too Heavy!'",
    "description": "The Teenieping of heaviness, he likes to exercise as he is very sporty.",
    "power": "Make objects heavy.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Oppoping",
    "episode": "'The Upside Down World'",
    "description": "The Teenieping of opposition, he sees the world upside down, and wants it to be like that.",
    "power": "Make things turn upside down.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Zipping",
    "episode": "'Zipping Likes It Fast'",
    "description": "The Teenieping of speed, he likes everything fast, and loves to go very fast.",
    "power": "Go super fast.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Bebeping",
    "episode": "'Do You Wanna Be A Baby?'",
    "description": "The Teenieping of childishness, a young Teenieping who wants everyone to be babies.",
    "power": "Turn people into babies.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Sleeping",
    "episode": "'The Sleeping Beauty Of Heartrose'",
    "description": "The Teenieping of drowsiness, he likes to look into others' dreams, and loves eating jellies that are made from dreams.",
    "power": "Make someone fall asleep to look at their dreams and transform them into jellies.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Stickping",
    "episode": "'Stuck with Lena'",
    "description": "The Teenieping of bond, she doesn't like when people argue and uses her magic to make them stick together for a while.",
    "power": "Stick people together or stick an object anywhere.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Curieping",
    "episode": "'The Funny Monster'",
    "description": "The Teenieping of curiosity, she is very curious and likes to look at everything.",
    "power": "Make objects bigger.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Toyping",
    "episode": "'It's Play Time!'",
    "description": "The Teenieping of attachment, she loves playing with toys to have fun, and wants the whole world to be filled with toys.",
    "power": "Transform objects or people into toys.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Wannabeping",
    "episode": "'A Strange Guest At Heartrose'",
    "description": "The Teenieping of disguise, she is a master of disguise who likes tricking people with her disguises.",
    "power": "Transform into someone else.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Floraping",
    "episode": "'The Flower Incident'",
    "description": "The Teenieping of environment, he is the gardener of the Emotions Kingdom, who likes to take care of the flowers, but hates it when people pluck them.",
    "power": "Transform people into flowers.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Noraping",
    "episode": "'Baby Noriping!'",
    "description": "The Teenieping of playfulness, he loves playing video games, but doesn't care to take care of his little brother Noriping.",
    "power": "Make people start playing.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Noriping",
    "episode": "The Teenieping of innocence, he is a baby Teenieping who only wants to play with his brother Noraping.",
    "description": "Move an object along with his prop.",
    "power": "",
    "transformation": "",
    "image_url": "",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Sighping",
    "episode": "'Princess Sunshine'",
    "description": "The Teenieping of premonition, she isn't very happy and she is a bit shy, and wants to give up, but thanks to Happying, she feels very happy now.",
    "power": "Play her trumpet to make people feel depressed and unlucky.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Shushping",
    "episode": "'Trouble In The Library'",
    "description": "The Teenieping of intelligence, he spends his time studying to earn as many trophies as he can.",
    "power": "Immobilize people to make them recite the multiplication table.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Freezeping",
    "episode": "'The Coolest Friendship'",
    "description": "The Teenieping of coolness, he is Coolping's best friend. After an argument with him, he starts to hate ice cream.",
    "power": "Create an ice mask on people.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Sparkping",
    "episode": "'The Electric Touch'",
    "description": "The Teenieping of thrill, he has electricity powers and likes crazy activities.",
    "power": "Control and travel through electricity.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Aloneping",
    "episode": "'Teenieping From The Ocean'",
    "description": "The Teenieping of loneliness, he likes to stay alone. He used to live inside a whale, and he also loves fishing alone.",
    "power": "Create a protective shield.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Diamond Heartsping",
    "episode": "",
    "description": "The Teenieping of love, who deeply cares for her friends. Wielding the Pink Diamond, she gets in charge of taking care of the Jewel Teeniepings.",
    "power": "",
    "transformation": "Princess Diaheart",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": "love"
  },
  {
    "season": 2,
    "name": "Joahping",
    "episode": "",
    "description": "The Teenieping of kindness, who is kind, warm and sensitive. Wielding the Emerald, she is always ready to help her friends, and always stays nice to everyone.",
    "power": "",
    "transformation": "Princess Emerald",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Teeheeping",
    "episode": "",
    "description": "The Teenieping of laughter, with a tomboy personality. Wielding the Ruby, she likes to play and engage herself in crazy activities to have good times with her friends.",
    "power": "",
    "transformation": "Princess Ruby",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Trustping",
    "episode": "",
    "description": "The Teenieping of trust, he is cute and naive. Wielding the Sapphire, he is faithful and innocent and easily believes anyone, and has a severe addiction to choco balls.",
    "power": "",
    "transformation": "Princess Sapphire",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Maskping",
    "episode": "",
    "description": "A mysterious masked Teenieping, who released all the Jewel Teeniepings to Earth, and who tirelessly attacks Romi and her friends during her mission.",
    "power": "",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Onlyping",
    "episode": "",
    "description": "The Teenieping of dedication, she is Jennie's best friend. Wielding the Black Pearl, she left the Jewel Forest a long time ago, and has a long-time rivalry with Heartsping. At the end of the season, she is revealed to be hiding under the mask of Maskping.",
    "power": "",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Tickleping",
    "episode": "'Tickle Tickle, Try Not to Laugh!'",
    "description": "The Teenieping of mischief, wielding the Citrine. She is playful and mischievous, and likes to tickle everyone.",
    "power": "Summon feathers to tickle people.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Owwping",
    "episode": "'Ow Ow, No More Boo-Boos!'",
    "description": "The Teenieping of pain, wielding the Garnet. She can be easily scared, and doesn't like to be hurt, she also has a big fear of hospitals.",
    "power": "Turn smaller pain into greater pain.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Wishping",
    "episode": "'Wishping's Three Wishes'",
    "description": "The Teenieping of desire, wielding the Spinel. She grants 3 wishes to anyone she encounters.",
    "power": "Grant wishes to someone.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Patping",
    "episode": "'Pat Pat, It's Okay'",
    "description": "The Teenieping of comfort, wielding the Jade. She is very kind, and is Joahping's best friend.",
    "power": "Give comfort to people.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Timidping",
    "episode": "'Shrinking Romi!'",
    "description": "The Teenieping of timidity, wielding the Tanzanite. He is very shy and doesn't like to be seen by others, and gets scared when he sees 'strangers', and uses his prop to shrink them.",
    "power": "Shrink people.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Tidyping",
    "episode": "'Tidy Up Until It Sparkles!'",
    "description": "The Teenieping of neatness, wielding the Peridot. She likes to clean and tidy up everything, and likes it when everything is nice and tidy, but hates it when everything is messy.",
    "power": "Make objects tidy up on their own.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Yummyping",
    "episode": "'Top Chef Yummyping'",
    "description": "The Teenieping of taste, wielding the Coral. She is a chef who makes the best meals.",
    "power": "Control kitchenware.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Cozyping",
    "episode": "'Things Get Wooly!'",
    "description": "The Teenieping of coziness, wielding the Moonstone. She likes to knit and give her warm creations to others, but doesn't like sharp things.",
    "power": "Create knitted items such as scarves and knitted dolls.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Memoping",
    "episode": "'Memo This, Memoping!'",
    "description": "The Teenieping of meticulousness, wielding the Turquoise. She likes to take notes to be as organized as possible, but lacks attention from her friends.",
    "power": "Make things become true as she writes them in her diary.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Ladyping",
    "episode": "'Heartrose Becomes a Kingdom'",
    "description": "The Teenieping of elegance, wielding the Alexandrite. She likes to be a princess and to be treated as so.",
    "power": "Turn people into her very dedicated servant.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Buddyping",
    "episode": "'Who's the Real Heartsping?'",
    "description": "The Teenieping of friendship, wielding the Aquamarine. He likes to have fun, but suffers from his loneliness.",
    "power": "Create duplicates of something or someone.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Giftping",
    "episode": "'Find the Gift Box!'",
    "description": "The Teenieping of sharing, wielding the Topaz. She is generous and likes to give gifts to people.",
    "power": "Give gifts to people.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Sculptping",
    "episode": "'Where's My Muse, Sculpt?'",
    "description": "The Teenieping of creativity, wielding the Amethyst. He likes to sculpt and create statues of people and other things, especially his muse, Heartsping.",
    "power": "Make sculptures that he created alive.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Balletping",
    "episode": "'Twirl Whirl Teenieping Ballet'",
    "description": "The Teenieping of tenderness, wielding the Rose Quartz. She likes to dance, but she deeply wishes to have a friend to do it with.",
    "power": "Make people do ballet dances.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 2,
    "name": "Wonderping",
    "episode": "'Wonderping, the Hero Teenieping'",
    "description": "The Teenieping of heroism, wielding the Lapis Lazuli. she likes to be a super-heroine and do heroic acts around Harmony Town.",
    "power": "Use her boomerang to do heroic actions.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Flora Heartsping",
    "episode": "",
    "description": "The Teenieping of love, who is Romi's companion. Heart and flower-themed, she is full of love and deeply cares for her friends.",
    "power": "",
    "transformation": "Princess Floraheart",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": "love"
  },
  {
    "season": 3,
    "name": "Okeydokeyping",
    "episode": "",
    "description": "The Teenieping of peace, with a gentle and caring personality. Winter-themed, she is smiley, thoughtful and sociable, as she likes things to stay peaceful.",
    "power": "",
    "transformation": "Princess Crystal",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Nanaping",
    "episode": "",
    "description": "The Teenieping of passion, full of devotion and confidence. Sunshine-themed, she has strong passions but short patience, which sometimes makes her sloppy.",
    "power": "",
    "transformation": "Princess Solaris",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": "sunshine"
  },
  {
    "season": 3,
    "name": "Trueping",
    "episode": "",
    "description": "The Teenieping of honesty, with a cute but grumbly type of personality. Star and cloud-themed, he likes to be honest with himself and with others, which can sometimes create uncomfortable situations.",
    "power": "",
    "transformation": "Princess Gloria",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": "cloud"
  },
  {
    "season": 1,
    "name": "Onlyping",
    "episode": "",
    "description": "The Teenieping of dedication, she has a minor role as Jennie's fervent supporter, who helps her accomplish her various devious activities, and sometimes goes on spying missions.",
    "power": "",
    "transformation": "Princess Labyrinth (with Jennie)",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Hurryping",
    "episode": "'Transform! Floraheart'",
    "description": "The Teenieping of impatience, he always thinks he is late and never loses one second of his precious time.",
    "power": "Make people act crazy and go super fast.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Yumyumping",
    "episode": "'Overeating is Dangerous, Yum yum!'",
    "description": "The Teenieping of hunger, she is never full and is always hungry, and always looks for some more food to eat.",
    "power": "Make people greedy for food.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Hotping",
    "episode": "'Hot, Hot, Camping Commotion'",
    "description": "The Teenieping of thoroughness, she is a  firefighter who is very strict about fire safety.",
    "power": "Extinguish fire and use her extinguisher as a launcher.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Cureping",
    "episode": "'I'll Treat You, Cure!'",
    "description": "The Teenieping of health, she is a radical doctor who cures her patients by using various medical supplies, with the help of her assistants, the Nursepings, and is easily crazed.",
    "power": "Summon the Nursepings and use her various medical supplies.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Nursepings",
    "episode": "Four Teeniepings working at Cureping's service, helping her take care of people.",
    "description": "Help treat other people with Cureping.",
    "power": "",
    "transformation": "",
    "image_url": "",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Cheerupping",
    "episode": "'Come on, Okeydokeyping! Let's go get them!'",
    "description": "The Teenieping of encouragement, she is a cheerleader who likes to cheer people up whenever they lack energy or courage.",
    "power": "Make people cheer for someone.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Handyping",
    "episode": "'Please Repair This, Handyping'",
    "description": "The Teenieping of repairment, he likes to help people by fixing their broken objects, but often causes more catastrophes than good.",
    "power": "Fix broken objects (with strange side effects).",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Wizping",
    "episode": "'Romi and Heartsping's Bodies are Switched'",
    "description": "The Teenieping of inquiry, she is a witch who can do all sorts of magic, and loves to learn new spells.",
    "power": "Create a pool of purple mixture to make someone slip and switch bodies. Possible unknown powers.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Fashionping",
    "episode": "'Fashionping's Design Ideas'",
    "description": "The Teenieping of originality, she is a fashion designer who loves creating new outfits.",
    "power": "Change someone's clothes into new designs.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Justiceping",
    "episode": "'Freeze! Justiceping'",
    "description": "The Teenieping of justice, a dedicated policeman who aims to stop criminal acts and injustice.",
    "power": "Make people confess their wrongdoings and not be able to move.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Splashping",
    "episode": "'Splash, Splashping!'",
    "description": "The Teenieping of freedom, a hybrid between a Teenieping and a mermaid who enjoys swimming in the sea with marine animals.",
    "power": "Grow a mermaid tail and swim underwater. Make sea animals at her command.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Partyping",
    "episode": "'Let's Party with Partyping'",
    "description": "The Teenieping of celebration, she likes making people have fun and throw parties.",
    "power": "Fills people with energy to help throw parties.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Styleping",
    "episode": "'Get a Cool Hairstyle, Styleping'",
    "description": "The Teenieping of style, she enjoys giving people silly haircuts, or helping the Teeniepings fix their hair.",
    "power": "Give someone a new hairstyle.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Huffyping",
    "episode": "'I'll Get Huffy, Huffyping'",
    "description": "The Teenieping of attention, she is easily agitated and hates when people aren't honest about their feelings.",
    "power": "Makes someone sulk or act angrily towards another person.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Ariaping",
    "episode": "'Ariaping the Singer'",
    "description": "The Teenieping of rhythm, a talented musician who loves playing her violin.",
    "power": "Perform a sonic attack, make people sing robotically.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 3,
    "name": "Twirlping",
    "episode": "'Twirl, Twirl on Skates'",
    "description": "The Teenieping of gracefulness, who used to be Okeydokeyping's ice skating partner.",
    "power": "Make others do incredible ice skating acts, create ice rinks.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "Puffping",
    "episode": "",
    "description": "The bubblegum-themed Teenieping of interest, he is the one who stole the Magic Sugar Ball, which resulted in all the Dessert Teeniepings being released on Earth. He then tries everything to keep the Magic Sugar Ball with him, despite his childish personality and lack of strategy.",
    "power": "Eat gumball to become huge and fly.",
    "transformation": "",
    "image_url": "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
    "color": "",
    "spell_type": ""
  },
  {
    "season": 1,
    "name": "TBA",
    "episode": "",
    "description": "TBA",
    "power": "TBA",
    "transformation": "",
    "image_url": "",
    "color": "",
    "spell_type": ""
  }
];

// Main application script for Teenypings Database

// Global variables
let teenypingsData = [];
let filteredTeenypings = [];
let currentFilters = {
    search: '',
    season: 'all',
    color: 'all',
    spellType: 'all'
};
let currentTeenypingIndex = 0;

// DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const seasonFilters = document.getElementById('season-filters');
const colorFilters = document.getElementById('color-filters');
const spellFilters = document.getElementById('spell-filters');
const teenypingsGallery = document.getElementById('teenypings-gallery');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentCount = document.getElementById('current-count');
const totalCount = document.getElementById('total-count');
const teenypingDetails = document.getElementById('teenyping-details');
const closeDetails = document.getElementById('close-details');

// Detail elements
const detailName = document.getElementById('detail-name');
const detailImage = document.getElementById('detail-image');
const detailSeason = document.getElementById('detail-season');
const detailEpisode = document.getElementById('detail-episode');
const detailColor = document.getElementById('detail-color');
const detailSpell = document.getElementById('detail-spell');
const detailPower = document.getElementById('detail-power');
const detailTransformation = document.getElementById('detail-transformation');
const detailDescription = document.getElementById('detail-description');

// Data is already embedded, no need to fetch
function fetchTeenypingsData() {
    // Initialize the app with the embedded data
    initializeApp();
}

// Initialize the application
function initializeApp() {
    // Set initial filtered data
    filteredTeenypings = [...teenypingsData];
    
    // Generate filter options
    generateFilterOptions();
    
    // Render initial gallery
    renderGallery();
    
    // Set up event listeners
    setupEventListeners();
}

// Generate filter options based on available data
function generateFilterOptions() {
    // Get unique colors and spell types
    const colors = [...new Set(teenypingsData.filter(t => t.color).map(t => t.color))];
    const spellTypes = [...new Set(teenypingsData.filter(t => t.spell_type).map(t => t.spell_type))];
    
    // Add color filters
    colors.forEach(color => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-filter', color);
        button.textContent = capitalizeFirstLetter(color);
        colorFilters.appendChild(button);
    });
    
    // Add spell type filters
    spellTypes.forEach(spellType => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-filter', spellType);
        button.textContent = capitalizeFirstLetter(spellType);
        spellFilters.appendChild(button);
    });
}

// Set up all event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchButton.addEventListener('click', () => handleSearch());
    
    // Filter buttons
    seasonFilters.addEventListener('click', e => {
        if (e.target.classList.contains('filter-btn')) {
            updateActiveFilter(seasonFilters, e.target);
            currentFilters.season = e.target.getAttribute('data-filter');
            applyFilters();
        }
    });
    
    colorFilters.addEventListener('click', e => {
        if (e.target.classList.contains('filter-btn')) {
            updateActiveFilter(colorFilters, e.target);
            currentFilters.color = e.target.getAttribute('data-filter');
            applyFilters();
        }
    });
    
    spellFilters.addEventListener('click', e => {
        if (e.target.classList.contains('filter-btn')) {
            updateActiveFilter(spellFilters, e.target);
            currentFilters.spellType = e.target.getAttribute('data-filter');
            applyFilters();
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', showPreviousTeenyping);
    nextBtn.addEventListener('click', showNextTeenyping);
    
    // Details modal
    closeDetails.addEventListener('click', () => {
        teenypingDetails.style.display = 'none';
    });
    
    // Close modal when clicking outside
    teenypingDetails.addEventListener('click', e => {
        if (e.target === teenypingDetails) {
            teenypingDetails.style.display = 'none';
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && teenypingDetails.style.display === 'flex') {
            teenypingDetails.style.display = 'none';
        } else if (e.key === 'ArrowLeft') {
            showPreviousTeenyping();
        } else if (e.key === 'ArrowRight') {
            showNextTeenyping();
        }
    });
    
    // Touch swipe for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    teenypingsGallery.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    teenypingsGallery.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left
            showNextTeenyping();
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right
            showPreviousTeenyping();
        }
    }
}

// Handle search input
function handleSearch() {
    currentFilters.search = searchInput.value.toLowerCase();
    applyFilters();
}

// Update active filter button
function updateActiveFilter(container, clickedButton) {
    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    clickedButton.classList.add('active');
}

// Apply all current filters
function applyFilters() {
    filteredTeenypings = teenypingsData.filter(teenyping => {
        // Search filter
        const matchesSearch = currentFilters.search === '' || 
            teenyping.name.toLowerCase().includes(currentFilters.search) ||
            (teenyping.description && teenyping.description.toLowerCase().includes(currentFilters.search));
        
        // Season filter
        const matchesSeason = currentFilters.season === 'all' || 
            teenyping.season.toString() === currentFilters.season;
        
        // Color filter
        const matchesColor = currentFilters.color === 'all' || 
            (teenyping.color && teenyping.color.toLowerCase() === currentFilters.color.toLowerCase());
        
        // Spell type filter
        const matchesSpellType = currentFilters.spellType === 'all' || 
            (teenyping.spell_type && teenyping.spell_type.toLowerCase() === currentFilters.spellType.toLowerCase());
        
        return matchesSearch && matchesSeason && matchesColor && matchesSpellType;
    });
    
    // Reset current index and render
    currentTeenypingIndex = 0;
    renderGallery();
}

// Render the gallery with current filtered Teenypings
function renderGallery() {
    // Clear current gallery
    teenypingsGallery.innerHTML = '';
    
    // Update counter
    totalCount.textContent = filteredTeenypings.length;
    currentCount.textContent = filteredTeenypings.length > 0 ? currentTeenypingIndex + 1 : 0;
    
    // Check if we have results
    if (filteredTeenypings.length === 0) {
        teenypingsGallery.innerHTML = '<p class="no-results">No Teenypings found matching your filters.</p>';
        return;
    }
    
    // Create cards for each Teenyping
    filteredTeenypings.forEach((teenyping, index) => {
        const card = document.createElement('div');
        card.className = 'teenyping-card';
        card.setAttribute('data-index', index);
        
        const imageContainer = document.createElement('div');
        imageContainer.className = 'teenyping-image';
        
        const image = document.createElement('img');
        if (teenyping.image_url && teenyping.image_url !== '') {
            image.src = teenyping.image_url;
        } else {
            // Placeholder image if no image URL is available
            image.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23f0f0f0%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20dy%3D%22.3em%22%20text-anchor%3D%22middle%22%20x%3D%2250%22%20y%3D%2250%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
        }
        image.alt = teenyping.name;
        image.onerror = function() {
            // If image fails to load, replace with placeholder
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23f0f0f0%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20dy%3D%22.3em%22%20text-anchor%3D%22middle%22%20x%3D%2250%22%20y%3D%2250%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
        };
        
        imageContainer.appendChild(image);
        
        const info = document.createElement('div');
        info.className = 'teenyping-info';
        
        const name = document.createElement('div');
        name.className = 'teenyping-name';
        name.textContent = teenyping.name;
        
        const season = document.createElement('div');
        season.className = 'teenyping-season';
        season.textContent = `Season ${teenyping.season}`;
        
        info.appendChild(name);
        info.appendChild(season);
        
        card.appendChild(imageContainer);
        card.appendChild(info);
        
        // Add click event to show details
        card.addEventListener('click', () => {
            currentTeenypingIndex = index;
            showTeenypingDetails(teenyping);
            updateCounter();
        });
        
        teenypingsGallery.appendChild(card);
    });
}

// Show details for a specific Teenyping
function showTeenypingDetails(teenyping) {
    detailName.textContent = teenyping.name;
    
    if (teenyping.image_url && teenyping.image_url !== '') {
        detailImage.src = teenyping.image_url;
    } else {
        detailImage.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23f0f0f0%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3Ctext%20fill%3D%22%23999%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20dy%3D%22.3em%22%20text-anchor%3D%22middle%22%20x%3D%2250%22%20y%3D%2250%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';
    }
    detailImage.alt = teenyping.name;
    
    detailSeason.textContent = teenyping.season;
    detailEpisode.textContent = teenyping.episode || 'Unknown';
    detailColor.textContent = capitalizeFirstLetter(teenyping.color) || 'Unknown';
    detailSpell.textContent = capitalizeFirstLetter(teenyping.spell_type) || 'Unknown';
    detailPower.textContent = teenyping.power || 'Unknown';
    detailTransformation.textContent = teenyping.transformation || 'None';
    detailDescription.textContent = teenyping.description || 'No description available.';
    
    teenypingDetails.style.display = 'flex';
}

// Show previous Teenyping
function showPreviousTeenyping() {
    if (filteredTeenypings.length === 0) return;
    
    currentTeenypingIndex--;
    if (currentTeenypingIndex < 0) {
        currentTeenypingIndex = filteredTeenypings.length - 1;
    }
    
    showTeenypingDetails(filteredTeenypings[currentTeenypingIndex]);
    updateCounter();
}

// Show next Teenyping
function showNextTeenyping() {
    if (filteredTeenypings.length === 0) return;
    
    currentTeenypingIndex++;
    if (currentTeenypingIndex >= filteredTeenypings.length) {
        currentTeenypingIndex = 0;
    }
    
    showTeenypingDetails(filteredTeenypings[currentTeenypingIndex]);
    updateCounter();
}

// Update the counter display
function updateCounter() {
    currentCount.textContent = filteredTeenypings.length > 0 ? currentTeenypingIndex + 1 : 0;
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', fetchTeenypingsData);
