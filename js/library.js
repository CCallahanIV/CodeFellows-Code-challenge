//This file stores the necessary trivia data for the jeopardy app.

var sports = {
  "cat":"Sports",
  "a1": {
    "answer":"The most recent winner of the Triple Crown.",
    "q1":"Who is Secretariat?",
    "q2":"Who is Seattle Slew?",
    "q3":"Who is American Pharoah?",
    "correct":"q3",
    "points":200},
  "a2": {
    "answer":"This city will host the 2020 Summer Olympics.",
    "q1":"What is Tokyo?",
    "q2":"What is Buenos Aires?",
    "q3":"What is Los Angeles?",
    "correct":"q1",
    "points":600},
  "a3": {
    "answer":"The Rose Bowl is located in this city.",
    "q1":"What is Pasadena, CA?",
    "q2":"What is San Francisco, CA?",
    "q3":"What is Portland, OR?",
    "correct":"q1",
    "points":1000}
};

var entertainment = {
  "cat":"Entertainment",
  "a1": {
    "answer":"This movie won the Academy Award for Best Drama in 2016.",
    "q1":"What is <em>The Martian</em>",
    "q2":"What is <em>The Revenant</em>",
    "q3":"What is <em>Spotlight</em>",
    "correct":"q3",
    "points":200},
  "a2":{
    "answer":"This British, Grammy-winning singer/songwriter's first three albums were named after her age.",
    "q1":"Who is Amy Winehouse.",
    "q2":"Who is Adele",
    "q3":"Who is Ellie Goulding",
    "correct":"q2",
    "points":600},
  "a3": {
    "answer":"This sitcom follows the lives of six twenty-somethings living in New York that frequent a local coffee shop.",
    "q1":"What is <em>How I Met your Mother</em>",
    "q2":"What is <em>Friends</em>",
    "q3":"What is <em>Third Rock from the Sun</em>",
    "correct":"q2",
    "points":1000
  }
};

var literature = {
  "cat":"Literature",
  "a1":{
    "answer":"This author penned children/'s novels such as <em>Matilda</em>, <em>The BFG</em>, and <em>Charlie and the Chocolate Factory</em>.",
    "q1":"Who is Roald Dahl?",
    "q2":"Who is Beverly Cleary?",
    "q3":"Who is Judy Blume?",
    "correct":"q1",
    "points":200,
  },
  "a2":{
    "answer":"Jane Austen/'s <em>Pride and Prejudice</em> follows main character Elizabeth Bennett and this elegible bachelor.",
    "q1":"Who is Mr. Darby?",
    "q2":"Who is Mr. Darcy?",
    "q3":"Mr. Darley?",
    "correct":"q2",
    "points":600
  },
  "a3":{
    "answer":"This F. Scott Fitzgerald novel was made into a movie starring Leonardo DiCaprio in 2013.",
    "q1":"What is <em>This Side of Paradise</em>?",
    "q2":"What is <em>The Great Gatsby</em>?",
    "q3":"What is <em>Tender is the Night</em>?",
    "correct":"q2",
    "points":1000
  }
};

var geography = {
  "cat":"Geography",
  "a1":{
    "answer":"This is the northernmost state capital in the contiguous United States.",
    "q1":"What is Olympia, WA?",
    "q2":"What is Helena, MT?",
    "q3":"What is Augusta, ME?",
    "correct":"q1",
    "points":200
  },
  "a2":{
    "answer":"This country forms a /'boot/' in the Mediterranean Sea.",
    "q1":"What is Greece?",
    "q2":"What is Italy?",
    "q3":"what is Croatia?",
    "correct":"q2",
    "points":600
  },
  "a3":{
    "answer":"This country experiences the most earthquakes per year.",
    "q1":"What is Indonesia?",
    "q2":"What is the United States?",
    "q3":"What is Japan?",
    "correct":"q1",
    "points":1000
  }
};
var science = {
  "cat":"Science",
  "a1":{
    "answer":"This is the first Noble Gas on the periodic table.",
    "q1":"What is Hydrogen?",
    "q2":"What is Helium?",
    "q3":"What is Lithium",
    "correct":"q2",
    "points":200
  },
  "a2":{
    "answer":"This is the study of bugs.",
    "q1":"What is Entomology?",
    "q2":"What is Etymology?",
    "q3":"What is Zoology?",
    "correct":"q1",
    "points":600
  },
  "a3":{
    "answer":"In Physics, this is the word used to describe the speed of an object in a given direction.",
    "q1":"What is Trajectory?",
    "q2":"What is Velocity?",
    "q3":"What is Loft?",
    "correct":"q2",
    "points":1000
  }
};
var art = {
  "cat":"Art",
  "a1":{
    "answer":"Any Warhol was a pioneer in this art form.",
    "q1":"What is Impressionism?",
    "q2":"What is Realism?",
    "q3":"What is Pop Art?",
    "correct":"q3",
    "points":200
  },
  "a2":{
    "answer":"This Parisian museum houses one of the premier collections of impressionist art in the World.",
    "q1":"What is the Pompidou Center?",
    "q2":"What is the Louvre?",
    "q3":"What is the Musee D'Orsay?",
    "correct":"q3",
    "points":600
  },
  "a3":{
    "answer":"The <em>Nutcracker Suite</em> is a popular Christmastime production most commonly performed in this dance style.",
    "q1":"What is Ballet?",
    "q2":"What is Ballroom?",
    "q3":"What is Jazz?",
    "correct":"q1",
    "points":1000
  }
};
var food = {
  "cat":"Food and Drink",
  "a1":{
    "answer":"This type of fruit is a common cure for scurvy.",
    "q1":"What is stone fruit?",
    "q2":"What is citrus fruit?",
    "q3":"What are berries?",
    "correct":"q2",
    "points":200
  },
  "a2":{
    "answer":"This is not one of the core ingredients of beer?",
    "q1":"What is water?",
    "q2":"What are hops?",
    "q3":"What is corn?",
    "correct":"q3",
    "points":600
  },
  "a3":{
    "answer":"Filet Mignon is a cut of meat from this part of a cow.",
    "q1":"What is chuck?",
    "q2":"What is tenderloin?",
    "q3":"What is flank?",
    "correct":"q2",
    "points":1000
  }
};
var politics = {
  "cat":"Politics",
  "a1":{
    "answer":"Bernie Sanders is the long-serving Senator from this US State.",
    "q1":"What is Vermont?",
    "q2":"What is Delaware?",
    "q3":"What is Rhode Island?",
    "correct":"q1",
    "points":200
  },
  "a2":{
    "answer":"This series of treaties ratified by 196 states provides rules for the treatment of prisoners of war, civilians, and soldiers outside of combat.",
    "q1":"What is the Treaty of Versailles?",
    "q2":"What is the Geneva Convention?",
    "q3":"What are the Articles of Confederation?",
    "correct":"q2",
    "points":600
  },
  "a3":{
    "answer":"This country's 2016 departure from the European Union was referred to in the media as /'Brexit/'.",
    "q1":"What is Belgium?",
    "q2":"What is Portugal?",
    "q3":"What is the United Kingdom?",
    "correct":"q3",
    "points":1000
  }
};

var categories = [sports, entertainment, literature, geography, science, art, food, politics];
