let mongoose = require("mongoose");
let Book = require("../models/books");

mongoose.connect("mongodb://localhost/books101", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let bookSeed = [
  {
    year: "2020",
    position: "1",
    title: "Eleanor Oliphant is Completely Fine",
    author: ["Gail Honeyman"],
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    description: "Eleanor Oliphant has learned how to survive – but not how to liveEleanor Oliphant leads a simple life. She wears the same clothes to work every day, eats the same meal deal for lunch every day and buys the same two bottles of vodka to drink every weekend.Eleanor Oliphant is happy. Nothing is missing from her carefully timetabled life. Except, sometimes, everything.One simple act of kindness is about to shatter the walls Eleanor has built around herself. Now she must learn how to navigate the world that everyone else seems to take for granted – while searching for the courage to face the dark corners she's avoided all her life.Change can be good. Change can be bad. But surely any change is better than… fine?",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780008172145&w=&h=310",
    link: "https://www.dymocks.com.au/book/eleanor-oliphant-is-completely-fine-by-gail-honeyman-9780008172145",
  },
  {
    year: "2020",
    position: "2",
    title: "The Book Thief",
    author: ["Markus Zusak"],
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    description: "It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still. By her brother's graveside, Liesel's life is changed when she picks up an object, partially hidden in the snow. It is The Gravedigger's Handbook, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel learns to read. Soon she is stealing books from Nazi book-burnings, the mayor's wife's library, wherever there are books to be found. But these are dangerous times. When Liesel's foster family hides a Jewish fist-fighter in their basement, Liesel's world is both opened up, and closed down. Award-winning author Markus Zusak has given us one of the most enduring stories of our time.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781760783693&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-book-thief-by-markus-zusak-9781760783693",
  },
  {
    year: "2020",
    position: "3",
    title: "Boy Swallows Univers",
    author: ["Trent Dalton"],
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    description: "The bestselling novel that has taken Australia, and the world, by storm. 'Without exaggeration, the best Australian novel I have read in more than a decade ... A rollicking ride, rich in philosophy, wit, truth and pathos' Sydney Morning Herald Brisbane, 1983: A lost father, a mute brother, a mum in jail, a heroin dealer for a stepfather and a notorious crim for a babysitter. It's not as if Eli's life isn't complicated enough already. He's just trying to follow his heart, learning what it takes to be a good man, but life just keeps throwing obstacles in the way - not least of which is Tytus Broz, legendary Brisbane drug dealer. But Eli's life is about to get a whole lot more serious. He's about to fall in love. And, oh yeah, he has to break into Boggo Road Gaol on Christmas Day, to save his mum. A story of brotherhood, true love and the most unlikely of friendships, Boy Swallows Universe will be the most heartbreaking, joyous and exhilarating novel you will read all year - an instant Australian classic.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781460757765&w=&h=310",
    link: "https://www.dymocks.com.au/book/boy-swallows-universe-by-trent-dalton-9781460757765",
  },
  {
    year: "2020",
    position: "4",
    title: "All the Light We Cannot See",
    author: ["Anthony Doerr"],
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    description: "A beautiful, stunningly ambitious novel about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780007548699&w=&h=310",
    link: "https://www.dymocks.com.au/book/all-the-light-we-cannot-see-by-anthony-doerr-9780007548699",
  },
  {
    year: "2020",
    position: "5",
    title: "The Dry",
    author: ["Jane Harper"],
    category: ["Fiction", "Crime", "Mystery & Thriller"],
    description: "It hasn't rained in Kiewarra for two years. Tensions in the farming community become unbearable when three members of the Hadler family are discovered shot to death on their property. Everyone assumes Luke Hadler committed suicide after slaughtering his wife and six-year-old son. Federal Police investigator Aaron Falk returns to his hometown for the funerals and is unwillingly drawn into the investigation. As suspicion spreads through the town, Falk is forced to confront the community that rejected him twenty years earlier. Because Falk and his childhood friend Luke Hadler shared a secret, one which Luke's death threatens to unearth ...",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781925481372&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-dry-by-jane-harper-9781925481372",
  },
  {
    year: "2020",
    position: "6",
    title: "Harry Potter and the Philosophr's Stone",
    author: ["J. K. Rowling"],
    category: ["Fiction", "Children's", "Children's Fiction"],
    description: "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781408855652&w=&h=310",
    link: "https://www.dymocks.com.au/book/harry-potter-and-the-philosophers-stone-harry-potter-book-1-by-j-k-rowling-9781408855652",
  },
  {
    year: "2020",
    position: "7",
    title: "The Tattoist of Auschwitz",
    author: ["Heather Morris"],
    category: ["Fiction", "Historical Fiction"],
    description: "Lale Sokolov is well-dressed, a charmer, a ladies man. He is also a Jew. On the first transport from Slovakia to Auschwitz in 1942, Lale immediately stands out to his fellow prisoners. In the camp, he is looked up to, looked out for, and put to work in the privileged position of Tetovierer the 'tattooist' to mark his fellow prisoners, forever. One of them is a young woman, Gita, who steals his heart at first glance. His life given new purpose, Lale does his best through the struggle and suffering to use his position for good.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781760403171&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-tattooist-of-auschwitz-by-heather-morris-9781760403171",
  },
  {
    year: "2020",
    position: "8",
    title: "Where the Crawdads Sing",
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    author: ["Delia Owens"],
    description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand. Then the time comes when she yearns to be touched and loved. When two young men from town become intrigued by her wild beauty, Kya opens herself to a new life - until the unthinkable happens.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781472154668&w=&h=310",
    link: "https://www.dymocks.com.au/book/where-the-crawdads-sing-by-delia-owens-9781472154668",
  },
  {
    year: "2020",
    position: "9",
    title: "Becoming",
    author: ["Michelle Obama"],
    category: ["Non-Fiction", "Biographies", "General Biographies"],
    description: "This memoir will chronicle the former First Lady’s life from a childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, as well as her time in the White House.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780241334140&w=&h=310",
    link: "https://www.dymocks.com.au/book/becoming-by-michelle-obama-9780241334140",
  },
  {
    year: "2020",
    position: "10",
    title: "The Lord of the Rings",
    author: ["J R R Tolkien"],
    category: ["Fiction", "Children's", "Children's Fiction"],
    description: "Continuing the story begun in The Hobbit, all three parts of the epic masterpiece, The Lord of the Rings, in one paperback. Features the definitive edition of the text, fold-out flaps with the original two-colour maps, and a revised and expanded index. Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins.In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as the Ring is entrusted to his care. He must leave his home and make a perilous journey across the realms of Middle-earth to the Crack of Doom, deep inside the territories of the Dark Lord. There he must destroy the Ring forever and foil the Dark Lord in his evil purpose.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780261103252&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-lord-of-the-rings-by-j-r-r-tolkien-9780261103252",
  },
  {
    year: "2020",
    position: "11",
    title: "The Lost Man",
    author: ["Jane Harper"],
    category: ["Fiction", "Crime", "Mystery & Thriller"],
    description: "The man lay still in the centre of a dusty grave under a monstrous sky. Two brothers meet at the stockman's grave, a landmark so old, no one can remember who is buried there. But today, the scant shadow it casts was the last hope for their middle brother, Cameron. Something had been troubling him. Did Cameron choose to walk to his death? Because if he didn't, the isolation of the outback leaves few suspects...",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781760781064&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-lost-man-by-jane-harper-9781760781064",
  },
  {
    year: "2020",
    position: "12",
    title: "Burial Rites",
    author: ["Hannah Kent"],
    category: ["Fiction", "Crime"],
    description: "Agnes is sent to wait on the farm of District Officer Jon Jonsson and his family, who are horrified and avoid Agnes. Only Toti, the young assistant reverend appointed as Agnes's spiritual guardian, is compelled to try to understand her. As the summer months fall away to winter, Agnes's story begins to emerge. And as the days to her execution draw closer, the question burns: did she or didn't she?",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781743516966&w=&h=310",
    link: "https://www.dymocks.com.au/book/burial-rites-by-hannah-kent-9781743516966"
  },
  {
    year: "2020",
    position: "13",
    title: "Dark Emu",
    author: ["Bruce Pascoe"],
    category: ["Non-Fiction", "Science & Technology", "Environment"],
    description: "Dark Emu puts forward an argument for a reconsideration of the hunter-gatherer tag for pre-colonial Aboriginal Australians. The evidence insists that Aboriginal people right across the continent were using domesticated plants, sowing, harvesting, irrigating, and storing — behaviours inconsistent with the hunter-gatherer tag. Gerritsen and Gammage in their latest books support this premise but Pascoe takes this further and challenges the hunter-gatherer tag as a convenient lie. Almost all the evidence in Dark Emu comes from the records and diaries of the Australian explorers, impeccable sources.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781921248016&w=&h=310",
    link: "https://www.dymocks.com.au/book/dark-emu-by-bruce-pascoe-9781921248016"
  },
  {
    year: "2020",
    position: "14",
    title: "The Happiest Refugee",
    author: ["Anh Do"],
    category: ["Non-Fiction", "Biographies", "General Biographies"],
    description: "Anh Do nearly didn't make it to Australia. His entire family came close to losing their lives on the sea as they escaped from war-torn Vietnam in an overcrowded boat. But nothing - not murderous pirates, nor the imminent threat of death by hunger, disease or dehydration as they drifted for days - could quench their desire to make a better life in a country where freedom existed.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781742372389&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-happiest-refugee-by-anh-do-9781742372389"
  },
  {
    year: "2020",
    position: "15",
    title: "The Rosie Effect",
    author: ["Graeme Simsion"],
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    description: "Don Tillman and Rosie Jarman are now married and living in New York. Don has been teaching while Rosie completes her second year at Columbia Medical School. Just as Don is about to announce that Gene, his philandering best friend from Australia, is coming to stay, Rosie drops a bombshell: she’s pregnant.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781925240443&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-rosie-effect-by-graeme-simsion-and-graeme-simsion-9781925240443"
  },
  {
    year: "2020",
    position: "16",
    title: "A Gentleman in Moscow",
    author: ["Amor Towles"],
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    description: "On 21 June 1922, Count Alexander Rostov - recipient of the Order of Saint Andrew, member of the Jockey Club, Master of the Hunt - is escorted out of the Kremlin, across Red Square and through the elegant revolving doors of the Hotel Metropol. Deemed an unrepentant aristocrat by a Bolshevik tribunal, the Count has been sentenced to house arrest indefinitely. But instead of his usual suite, he must now live in an attic room while Russia undergoes decades of tumultuous upheaval. Can a life without luxury be the richest of all?",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780099558781&w=&h=310",
    link: "https://www.dymocks.com.au/book/a-gentleman-in-moscow-by-amor-towles-9780099558781"
  },
  {
    year: "2020",
    position: "17",
    title: "The Handmaid's Tale",
    author: ["Margaret Atwood"],
    category: ["Fiction", "Classic Fiction"],
    description: "The Republic of Gilead offers Offred only one function: to breed. If she deviates, she will, like dissenters, be hanged at the wall or sent out to die slowly of radiation sickness. But even a repressive state cannot obliterate desire – neither Offred's nor that of the two men on which her future hangs.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780099511663&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-handmaids-tale-by-margaret-atwood-9780099511663"
  },
  {
    year: "2020",
    position: "18",
    title: "The Night Circus",
    author: ["Margaret Atwood"],
    category: ["Fiction", "Fantasy"],
    description: "In 1886 a mysterious travelling circus becomes an international sensation. Open only at night, constructed entirely in black and white, the Cirque des Rêves delights all who wander its circular paths and warm themselves at its bonfire. There are contortionists, performing cats, carousels and illusionists - all the trappings of an ordinary circus. But this is no conventional spectacle. Some tents contain clouds, some ice. The circus seems almost to cast a spell over its aficionados, who call themselves the rêveurs - the dreamers. And who is the sinister man in the grey suit who watches over it all? Behind the scenes a dangerous game is being played out by two young magicians, Celia and Marco, who, at the behest of their masters, are forced to test the very limits of the imagination - and of love.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780099554790&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-night-circus-by-erin-morgenstern-9780099554790"
  },
  {
    year: "2020",
    position: "19",
    title: "Throne of Glass",
    author: ["Margaret Atwood"],
    category: ["Fiction", "Children's", "Children's Fiction", " Teenage (11-13"],
    description: "In the dark, filthy salt mines of Endovier, an eighteen-year-old girl is serving a life sentence. She is a trained assassin, the best of her kind, but she made a fatal mistake. She got caught. Young Captain Westfall offers her a deal: her freedom in return for one huge sacrifice. Celaena must represent the prince in a to-the-death tournament - fighting the most gifted thieves and assassins in the land. Live or die, Celaena will be free. Win or lose, she is about to discover her true destiny. But will her assassin's heart be melted?",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781408832332&w=&h=310",
    link: "https://www.dymocks.com.au/book/throne-of-glass-throne-of-glass-book-1-by-sarah-j-maas-9781408832332"
  },
  {
    year: "2020",
    position: "20",
    title: "The Ruin",
    author: ["Dervla McTiernan"],
    category: ["Fiction", "Crime", "Mystery & Thriller"],
    description: "Galway 1993: Young Garda Cormac Reilly is called to a scene he will never forget. Two silent, neglected children - fifteen-year-old Maude and five-year-old Jack - are waiting for him at a crumbling country house. Upstairs, their mother lies dead.Twenty years later, a body surfaces in the icy black waters of the River Corrib. At first it looks like an open-and-shut case, but then doubt is cast on the investigation's findings - and the integrity of the police. Cormac is thrown back into the cold case that has haunted him his entire career - what links the two deaths, two decades apart? As he navigates his way through police politics and the ghosts of the past, Detective Reilly uncovers shocking secrets and finds himself questioning who among his colleagues he can trust.What really did happen in that house where he first met Maude and Jack? The Ruin draws us deep into the dark heart of Ireland and asks who will protect you when the authorities can't - or won't.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781460755402&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-ruin-by-dervla-mctiernan-9781460755402"
  },
  {
    year: "2020",
    position: "21",
    title: "The Hobbit",
    author: ["J R R Tolkien"],
    category: ["Fiction", "Classic Fiction"],
    description: "Bilbo Baggins enjoys a quiet and contented life, with no desire to travel far from the comforts of home; then one day the wizard Gandalf and a band of dwarves arrive unexpectedly and enlist his services – as a burglar – on a dangerous expedition to raid the treasure-hoard of Smaug the dragon. Bilbo's life is never to be the same again.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780007458424&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-hobbit-by-j-r-r-tolkien-9780007458424"
  },
  {
    year: "2020",
    position: "22",
    title: "The Guernsey Literary and Potato Peel Pie Society",
    author: ["Mary Ann Shaffer", "Annie Barrows"],
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    description: "It's 1946. The war is over, and Juliet Ashton has writer's block. But when she receives a letter from Dawsey Adams of Guernsey--a total stranger living halfway across the Channel, who has come across her name written in a second hand book--she enters into a correspondence with him, and in time with all the members of the extraordinary Guernsey Literary and Potato Peel Pie Society. Through their letters, the society tell Juliet about life on the island, their love of books--and the long shadow cast by their time living under German occupation. Drawn into their irresistible world, Juliet sets sail for the island, changing her life forever.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781741758955&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-guernsey-literary-and-potato-peel-pie-society-by-mary-ann-shaffer-and-annie-barrows-9781741758955"
  },
  {
    year: "2020",
    position: "23",
    title: "Akarnae",
    author: ["Lynette Noni"],
    category: ["Fiction", "Children's", "Children's Fiction", " Teenage (11-13"],
    description: "An unwilling pawn in a deadly game, Alex's shoulders bear the crushing weight of an entire race's survival. Only she can save the Medorans, but what if doing so prevents her from ever returning home? Will Alex risk her entire world - and maybe even her life - to save Medora?",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781921997501&w=&h=310",
    link: "https://www.dymocks.com.au/book/akarnae-the-medoran-chronicles-book-1-by-lynette-noni-9781921997501"
  },
  {
    year: "2020",
    position: "24",
    title: "Good Omens",
    author: ["Neil Gaiman", "Terry Pratchett"],
    category: ["Fiction", "Fantasy"],
    description: "Now people have been predicting the end of the world almost from its very beginning, so it's only natural to be sceptical when a new date is set for Judgement Day. But what if, for once, the predictions are right, and the apocalypse really is due to arrive next Saturday, just after tea? You could spend the time left drowning your sorrows, giving away all your possessions in preparation for the rapture, or laughing it off as (hopefully) just another hoax. Or you could just try to do something about it.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780552176453&w=&h=310",
    link: "https://www.dymocks.com.au/book/good-omens-tv-tie-in-edition-by-neil-gaiman-and-terry-pratchett-9780552176453"
  },
  {
    year: "2020",
    position: "25",
    title: "Jasper Jones",
    author: ["Craig Silvey"],
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    description: "Late on a hot summer night in the tail end of 1965, Charlie Bucktin, a precocious and bookish boy of thirteen, is startled by an urgent knock on the window of his sleep-out. His visitor is Jasper Jones, an outcast in the regional mining town of Corrigan. Rebellious, mixed-race and solitary, Jasper is a distant figure of danger and intrigue for Charlie. So when Jasper begs for his help, Charlie eagerly steals into the night by his side, terribly afraid but desperate to impress.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781742372624&w=&h=310",
    link: "https://www.dymocks.com.au/book/jasper-jones-by-craig-silvey-9781742372624"
  },
  {
    year: "2020",
    position: "26",
    title: "Pride and Prejudice",
    author: ["Jane Austen"],
    category: ["Fiction", "Classic Fiction"],
    description: "Jane Austen's Pride and Prejudice is the original romantic comedy, brimful of wit and wisdom. When the haughty and aristocratic Darcy refuses to dance with Elizabeth Bennett, she instantly dislikes him, despite his reputation as a wealthy and eligible bachelor. Are her first impressions correct, or is there more to Darcy than meets the eye? Sharply observed and sparklingly funny, this is one of the most delightful love stories ever written.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780141037516&w=&h=310",
    link: "https://www.dymocks.com.au/book/pride-and-prejudice-popular-penguins-by-jane-austen-9780141037516"
  },
  {
    year: "2020",
    position: "27",
    title: "The Light Between Oceans",
    author: ["Jane Austen"],
    category: ["Fiction", "Modern & Contemporary", "General Fiction"],
    description: "They break the rules and follow their hearts. What happens next will break yours. 1926. Tom Sherbourne is a young lighthouse keeper on a remote island off Western Australia. The only inhabitants of Janus Rock, he and his wife Isabel live a quiet life, cocooned from the rest of the world. Then one April morning a boat washes ashore carrying a dead man and a crying infant - and the path of the couple's lives hits an unthinkable crossroads. Only years later do they discover the devastating consequences of the decision they made that day - as the baby's real story unfolds ...",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780143790952&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-light-between-oceans-by-ml-stedman-9780143790952"
  },
  {
    year: "2020",
    position: "28",
    title: "A Game of Thrones",
    author: ["George R R Martin"],
    category: ["Fiction", "Fantasy"],
    description: "Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. As Warden of the North, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand. His honour weighs him down at court where a true man does what he will, not what he must … and a dead enemy is a thing of beauty. The old gods have no power in the south, Stark's family is split and there is treachery at court. Worse, the vengeance-mad heir of the deposed Dragon King has grown to maturity in exile in the Free Cities. He claims the Iron Throne.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780006479888&w=&h=310",
    link: "https://www.dymocks.com.au/book/a-game-of-thrones-by-george-r-r-martin-9780006479888"
  },
  {
    year: "2020",
    position: "29",
    title: "The Barefoot Investor",
    author: ["Scott Pape"],
    category: ["Non-Fiction", "Business & Finance", "Finance & Investing"],
    description: "This is the only money guide you'll ever need.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780730324218&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-barefoot-investor-updated-2019-edition-by-scott-pape-9780730324218"
  },
  {
    year: "2020",
    position: "30",
    title: "The Scolar",
    author: ["Dervla McTiernan"],
    category: ["Fiction", "Ccrime", "Classics"],
    description: "When Dr Emma Sweeney stumbles across the victim of a hit and run outside Galway University late one evening, she calls her partner, Detective Cormac Reilly, bringing him first to the scene of a murder that would otherwise never have been assigned to him. A security card in the dead woman's pocket identifies her as Carline Darcy, a gifted student and heir apparent to Irish pharmaceutical giant Darcy Therapeutics. The multi-billion-dollar company, founded by her grandfather, has a finger in every pie, from sponsoring university research facilities to funding political parties to philanthropy - it has funded Emma's own ground-breaking research. The enquiry into Carline's death promises to be high profile and high pressure.",
    image: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781460755419&w=&h=310",
    link: "https://www.dymocks.com.au/book/the-scholar-by-dervla-mctiernan-9781460755419"
  },
];

Book.deleteMany({})
  .then(() => Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
