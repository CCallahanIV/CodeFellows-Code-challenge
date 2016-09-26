//This file stores the necessary trivia data for the jeopardy app.

var sports = {
  "cat":"Sports",
  "a0": {
    "answer":"The most recent winner of the Triple Crown.",
    "q0":"Who is Secretariat?",
    "q1":"Who is Seattle Slew?",
    "q2":"Who is American Pharoah?",
    "correct":"q2",
    "points":200},
  "a1": {
    "answer":"This city will host the 2020 Summer Olympics.",
    "q0":"What is Tokyo?",
    "q1":"What is Buenos Aires?",
    "q2":"What is Los Angeles?",
    "correct":"q0",
    "points":600},
  "a2": {
    "answer":"The Rose Bowl is located in this city.",
    "q0":"What is Pasadena, CA?",
    "q1":"What is San Francisco, CA?",
    "q2":"What is Portland, OR?",
    "correct":"q0",
    "points":1000}
};

var entertainment = {
  "cat":"Entertainment",
  "a0": {
    "answer":"This movie won the Academy Award for Best Drama in 2016.",
    "q0":"What is <em>The Martian</em>?",
    "q1":"What is <em>The Revenant</em>?",
    "q2":"What is <em>Spotlight</em>?",
    "correct":"q2",
    "points":200},
  "a1":{
    "answer":"This British, Grammy-winning singer/songwriter's first three albums were named after her age.",
    "q0":"Who is Amy Winehouse?",
    "q1":"Who is Adele?",
    "q2":"Who is Ellie Goulding?",
    "correct":"q1",
    "points":600},
  "a2": {
    "answer":"This sitcom follows the lives of six twenty-somethings living in New York that frequent a local coffee shop.",
    "q0":"What is <em>How I Met your Mother</em>?",
    "q1":"What is <em>Friends</em>?",
    "q2":"What is <em>Third Rock from the Sun</em>?",
    "correct":"q1",
    "points":1000
  }
};

var literature = {
  "cat":"Literature",
  "a0":{
    "answer":"This author penned children\'s novels such as <em>Matilda</em>, <em>The BFG</em>, and <em>Charlie and the Chocolate Factory</em>.",
    "q0":"Who is Roald Dahl?",
    "q1":"Who is Beverly Cleary?",
    "q2":"Who is Judy Blume?",
    "correct":"q0",
    "points":200,
  },
  "a1":{
    "answer":"Jane Austen/'s <em>Pride and Prejudice</em> follows main character Elizabeth Bennett and this elegible bachelor.",
    "q0":"Who is Mr. Darby?",
    "q1":"Who is Mr. Darcy?",
    "q2":"Who is Mr. Darley?",
    "correct":"q1",
    "points":600
  },
  "a2":{
    "answer":"This F. Scott Fitzgerald novel was made into a movie starring Leonardo DiCaprio in 2013.",
    "q0":"What is <em>This Side of Paradise</em>?",
    "q1":"What is <em>The Great Gatsby</em>?",
    "q2":"What is <em>Tender is the Night</em>?",
    "correct":"q1",
    "points":1000
  }
};

var geography = {
  "cat":"Geography",
  "a0":{
    "answer":"This is the northernmost state capital in the contiguous United States.",
    "q0":"What is Olympia, WA?",
    "q1":"What is Helena, MT?",
    "q2":"What is Augusta, ME?",
    "correct":"q0",
    "points":200
  },
  "a1":{
    "answer":"This country forms a \'boot\' in the Mediterranean Sea.",
    "q0":"What is Greece?",
    "q1":"What is Italy?",
    "q2":"what is Croatia?",
    "correct":"q1",
    "points":600
  },
  "a2":{
    "answer":"This country experiences the most earthquakes per year.",
    "q0":"What is Indonesia?",
    "q1":"What is the United States?",
    "q2":"What is Japan?",
    "correct":"q0",
    "points":1000
  }
};
var science = {
  "cat":"Science",
  "a0":{
    "answer":"This is the first Noble Gas on the periodic table.",
    "q0":"What is Hydrogen?",
    "q1":"What is Helium?",
    "q2":"What is Lithium",
    "correct":"q1",
    "points":200
  },
  "a1":{
    "answer":"This is the study of bugs.",
    "q0":"What is Entomology?",
    "q1":"What is Etymology?",
    "q2":"What is Zoology?",
    "correct":"q0",
    "points":600
  },
  "a2":{
    "answer":"In Physics, this is the word used to describe the speed of an object in a given direction.",
    "q0":"What is Trajectory?",
    "q1":"What is Velocity?",
    "q2":"What is Loft?",
    "correct":"q1",
    "points":1000
  }
};
var art = {
  "cat":"Art",
  "a0":{
    "answer":"Andy Warhol was a pioneer in this art form.",
    "q0":"What is Impressionism?",
    "q1":"What is Realism?",
    "q2":"What is Pop Art?",
    "correct":"q2",
    "points":200
  },
  "a1":{
    "answer":"This Parisian museum houses one of the premier collections of impressionist art in the World.",
    "q0":"What is the Pompidou Center?",
    "q1":"What is the Louvre?",
    "q2":"What is the Musee D'Orsay?",
    "correct":"q2",
    "points":600
  },
  "a2":{
    "answer":"The <em>Nutcracker Suite</em> is a popular Christmastime production most commonly performed in this dance style.",
    "q0":"What is Ballet?",
    "q1":"What is Ballroom?",
    "q2":"What is Jazz?",
    "correct":"q0",
    "points":1000
  }
};
var food = {
  "cat":"Food and Drink",
  "a0":{
    "answer":"This type of fruit is a common cure for scurvy.",
    "q0":"What is stone fruit?",
    "q1":"What is citrus fruit?",
    "q2":"What are berries?",
    "correct":"q1",
    "points":200
  },
  "a1":{
    "answer":"This is not one of the core ingredients of beer?",
    "q0":"What is water?",
    "q1":"What are hops?",
    "q2":"What is corn?",
    "correct":"q2",
    "points":600
  },
  "a2":{
    "answer":"Filet Mignon is a cut of meat from this part of a cow.",
    "q0":"What is chuck?",
    "q1":"What is tenderloin?",
    "q2":"What is flank?",
    "correct":"q1",
    "points":1000
  }
};
var politics = {
  "cat":"Politics",
  "a0":{
    "answer":"Bernie Sanders is the long-serving Senator from this US State.",
    "q0":"What is Vermont?",
    "q1":"What is Delaware?",
    "q2":"What is Rhode Island?",
    "correct":"q0",
    "points":200
  },
  "a1":{
    "answer":"This series of treaties ratified by 196 states provides rules for the treatment of prisoners of war, civilians, and soldiers outside of combat.",
    "q0":"What is the Treaty of Versailles?",
    "q1":"What is the Geneva Convention?",
    "q2":"What are the Articles of Confederation?",
    "correct":"q1",
    "points":600
  },
  "a2":{
    "answer":"This country's 2016 departure from the European Union was referred to in the media as \'Brexit\'.",
    "q0":"What is Belgium?",
    "q1":"What is Portugal?",
    "q2":"What is the United Kingdom?",
    "correct":"q2",
    "points":1000
  }
};

var categories = [sports, entertainment, literature, geography, science, art, food, politics];
