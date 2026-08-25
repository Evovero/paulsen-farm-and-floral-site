// Paulsen Farm and Floral - fill batch 1, the farm production pages. 2026-08-25.
//
// /farm-eggs/, /thanksgiving-turkeys/, /market-vegetables/, /garlic/.
//
// ===========================================================================
// VOICE RULE FOR EVERY FILLED PAGE ON THIS SITE. Set by Spencer, 2026-08-25,
// after the first draft of this batch came back too negative. It governs every
// batch that follows, not just this one.
//
//   WRITE IT AS INTENT, NOT AS ABSENCE.
//
//   Say "we plan to", "we intend to", "within the next year we are going to",
//   "here is what we have in mind". A reader should finish the page knowing
//   where this farm is headed and feeling invited into it.
//
//   DO NOT open a page by denying the product. "We do not have eggs" and
//   "We have not raised a turkey, not one, not yet" were the first draft and
//   were rejected. Leading with the absence makes a growing farm read as a
//   failing one.
//
//   DO NOT write about the website inside the copy. No "this page", no "on
//   this site", no "we published this", no explaining the indexing or the
//   content strategy to the customer. That is internal jargon and it does not
//   belong in front of a reader.
//
//   STILL TRUE, ALWAYS. Future tense is the tool that makes this honest. A
//   thing that is planned is described as planned. Nothing is ever written as
//   though it is currently for sale when it is not, and no date is invented.
//
//   AMERICAN ENGLISH. This is a farm in southwest Iowa. No travelled, no
//   centre, no fortnight. All three slipped into the first draft.
// ===========================================================================
//
// Content rules, in full and enforced by verify.mjs where a script can see them: no
// pricing and no currency figures, no street address, no phone, no hours, no husbandry,
// feed, certification or processing claims beyond "raised outdoors on pasture", no named
// farmers markets until two are actually chosen, the child appears in nothing, no em
// dashes, PAULSEN never Paulson, "and" never an ampersand.
//
// The certified-organic FAQ on /market-vegetables/ stays as written until Alex confirms
// verbally. Spencer's call, 2026-08-25.
export const fillFarmA = [
  {
    slug: "/farm-eggs/",
    side: "farm",
    draft: false,
    navLabel: "Farm Eggs",
    blurb: "A pastured laying flock is one of the first things we plan to add.",
    title: "Farm Eggs from Pastured Hens | Paulsen Farm and Floral, IA",
    description:
      "A pastured laying flock is one of the first things we plan to add to our Cass County, Iowa farm. Here is what we have in mind, and how to get on the list early.",
    eyebrow: "The farm",
    h1: "Farm eggs, and the flock we are building toward",
    seasonNote:
      "A pastured laying flock is one of the first additions we plan to make on this farm.",
    intro: [
      "We plan to keep a laying flock here. Hens out on the same ground the broilers work, following along behind them, and eggs sold direct off the farm the way the chicken already sells.",
      "Eggs are not part of what we offer today. They sit near the top of the list of what we intend to add, and we are building the list of interested households first so the first flock gets sized to real people rather than to a guess.",
      "What follows is what we have in mind, roughly in the order we plan to do it. If a standing dozen from this farm is something you would want, tell us and it moves up.",
    ],
    included: {
      h2: "What we have in mind for the flock",
      items: [
        {
          h3: "Hens outdoors on pasture",
          body:
            "Birds out on grass with room to move, the same as the meat birds. That is the standard we intend to hold, and it is the one thing about how the flock will live that we are ready to commit to in writing before the first hen arrives.",
        },
        {
          h3: "A flock that follows the broilers",
          body:
            "The plan is to run layers behind the meat birds across the same ground rather than parking them in one place. Birds that keep moving do better, and the ground does better for having them pass over it rather than sit on it.",
        },
        {
          h3: "Eggs that taste like the season they came from",
          body:
            "A flock outdoors gives you a different egg in June than in January, and gives you fewer of them in the dark months. We think that is a feature. It is what eating from a real farm looks like rather than from a shelf that never changes.",
        },
        {
          h3: "A standing dozen you can count on",
          body:
            "The version worth building is a regular arrangement. You know eggs are coming, we know how many to plan for, and nobody spends the week guessing. That is the shape we are aiming at from the very first flock.",
        },
        {
          h3: "Built to run straight through winter",
          body:
            "Housing and water that hold up in February are going in before the birds do. An Iowa winter is what decides whether a laying flock is a real business or a hard chore, so we intend to solve that end of it first.",
        },
        {
          h3: "Sold direct, same as the chicken",
          body:
            "Ordered ahead and picked up here, with nothing in between taking a cut. That is already how the meat birds move and it works well, so eggs will ride on the same arrangement rather than needing a new one built around them.",
        },
      ],
    },
    process: {
      h2: "How we plan to get there",
      steps: [
        {
          h3: "Finish a broiler season well",
          body:
            "One thing at a time, done properly. The meat birds are the base of this business and they are teaching us the ground, the water and the workload. Everything else layers off that once it is solid.",
        },
        {
          h3: "Build the winter setup first",
          body:
            "Housing, water that keeps moving in the cold, and a plan for the stretch when nothing wants to be outside. Getting that right before the birds arrive is what turns a laying flock into something that lasts more than one year.",
        },
        {
          h3: "Size the first flock to the list",
          body:
            "We would rather start with a known number of households than build for imagined demand. The list is how we find that number, which is why we are asking now rather than after the coop is up.",
        },
        {
          h3: "Fold eggs into pickup",
          body:
            "Once eggs are steady they join everything else collected here, so one trip out covers the chicken, the eggs and whatever else is ready. Adding a product should never mean adding an errand.",
        },
      ],
    },
    context: {
      h2: "Why eggs are worth doing properly",
      paragraphs: [
        "Eggs are the thing people ask a small farm for more than anything else, and the reason is simple. They are the easiest weekly habit to change. Most people are not going to reorganize their whole kitchen around a farm, but almost everyone will happily get their eggs from someone they can name.",
        "Alex puts it in terms of what a household actually controls. Get a deep freeze, put ten chickens in it from a farmer down the road, and you have made one real decision about your own food supply rather than leaving all of it to a shelf. Eggs are the smallest and easiest version of that same decision, which is exactly why they come up first.",
        "There is a real difference between an egg from a flock on grass and one that has traveled a long way to reach you, and it shows up in the pan. Part of the appeal of buying close to home is that you can ask the person who raised them how it was done and get a straight answer.",
        "So the plan is to build the flock the careful way from the start, with the winter housing and the ground rotation sorted before the birds arrive, so that doing it well is also the easy way to keep doing it. That is worth a little patience up front.",
      ],
    },
    faq: [
      {
        q: "When do you expect to have eggs?",
        a:
          "Once we have a broiler season fully under our belt and the winter housing built. We would rather give you a real answer than invent a date, so the list hears the moment it is settled and well before anyone else does.",
      },
      {
        q: "Are the hens the same as your meat chickens?",
        a:
          "No, they are different birds. Broilers are raised for meat and do not lay, so a laying flock is a separate undertaking rather than something that comes along automatically once you are already raising chickens.",
      },
      {
        q: "Will the hens be raised outdoors on pasture?",
        a:
          "Yes, that is the plan, out on the same ground the broilers work and moving along behind them. It is the standard we intend to hold to and the reason the flock takes a little more setting up than a shed and a feeder would.",
      },
      {
        q: "Can I put my name down for a standing dozen?",
        a:
          "Yes, and it is the most useful thing you can do. The number of households on the list is what decides how big the first flock is and how soon it is worth starting, so a name on it genuinely moves the timeline.",
      },
      {
        q: "Will eggs be available all year?",
        a:
          "Production from a flock outdoors dips in the short days of winter and picks back up in spring, so expect the supply to move with the season. We would rather be straight about that than promise a flat number every week.",
      },
      {
        q: "How will I hear when this starts?",
        a:
          "Through the list. It is the channel we use for anything time sensitive, including the first round of eggs, and people on it get told before anything changes anywhere else. Joining costs nothing and commits you to nothing.",
      },
    ],
    crossLinks: [
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
      { label: "How pickup at the farm works", href: "/farm-pickup/" },
      { label: "Where this farm is headed, and why", href: "/nelson-farm/" },
    ],
    ctaHeading: "Would you take a standing dozen?",
    ctaBody:
      "Your answer decides how big the first flock is and how soon it happens. Getting on the list costs you nothing and commits you to nothing.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/thanksgiving-turkeys/",
    side: "farm",
    draft: false,
    navLabel: "Thanksgiving Turkeys",
    blurb: "Pasture raised birds for the holiday table, reserved well ahead.",
    title: "Thanksgiving Turkeys | Paulsen Farm and Floral, Cass County",
    description:
      "Pasture raised Thanksgiving turkeys are on the plan for our Cass County, Iowa farm. Here is the bird we intend to raise, and how to get your name on the list.",
    eyebrow: "The farm",
    h1: "Thanksgiving turkeys, and the year we plan to start",
    seasonNote:
      "Pasture raised birds for the holiday table, reserved well ahead and picked up here the week before.",
    intro: [
      "We plan to raise a small batch of turkeys for Thanksgiving. Birds out on pasture through the fall, reserved well ahead, and picked up here in the week before the holiday.",
      "This is a bird you order in spring for one week in November, so a first year happens once we know roughly how many tables are waiting on it. That is why we are gathering names well before there is anything to sell.",
      "What follows is the bird we intend to raise and how we plan to run it. If a pasture raised turkey is what your table wants, saying so now is what gets a first year on the calendar.",
    ],
    included: {
      h2: "The bird we intend to raise",
      items: [
        {
          h3: "Raised outdoors on pasture",
          body:
            "The same standard we hold for the chicken. Birds with room to move, out on grass through the fall, growing at their own pace rather than being pushed. It is the reason a bird like this is worth planning a year ahead for.",
        },
        {
          h3: "One batch, once a year",
          body:
            "A turkey is a fall crop with a single delivery week in it. There is no restock and no second run, which means the number we raise is settled months earlier off a list of people who said they wanted one.",
        },
        {
          h3: "Reserved early, closed early",
          body:
            "Every farm that does this well takes reservations early and stops taking them once the number is set. A bird ordered in November cannot be raised in November, and we would rather cap it honestly than disappoint anyone in the worst possible week.",
        },
        {
          h3: "A size range you can plan around",
          body:
            "Birds that live outdoors finish at the size they finish at. We will give you a range you can build a table around rather than an exact weight, because an exact weight quoted months ahead is a guess dressed up as a promise.",
        },
        {
          h3: "Picked up here, like everything else",
          body:
            "One trip out in the week before the holiday, alongside whatever else is ready. Pickup already works well on this farm, so a turkey slots into it rather than needing a system built around it.",
        },
        {
          h3: "The same November as the wreaths",
          body:
            "Turkeys come ready in the exact stretch when the floral side is deep in wreaths and garland, which makes for one very full month. We would rather build the plan around that openly than find it out the hard way.",
        },
      ],
    },
    process: {
      h2: "How we plan to run a first year",
      steps: [
        {
          h3: "Get the fundamentals boring first",
          body:
            "Broilers, properly, for a season or more. Turkeys take longer and are less forgiving at every stage, so they are what a farm adds once the basics stop being interesting rather than what it learns on.",
        },
        {
          h3: "Square away every step to the table",
          body:
            "Before a single reservation is taken we intend to have every step between the field and your oven fully settled. That is the piece we are working through now, and reservations open after it, not before.",
        },
        {
          h3: "Count the list, then order the poults",
          body:
            "Poults are ordered in spring for a bird ready in November. That is a long bet on a number, and the only sensible way to place it is against households who have actually said they want one.",
        },
        {
          h3: "Open reservations early and cap them",
          body:
            "The first year will be a small and clearly limited number, offered to the list before it goes anywhere else. Keeping it capped is how everyone who reserves one actually gets one.",
        },
      ],
    },
    context: {
      h2: "Why a holiday bird is worth planning a year out",
      paragraphs: [
        "Thanksgiving is the meal most households plan hardest for. It is the one they cook most carefully, invite the most people to, and are most willing to think ahead about. That makes it the natural place for a farm and a family to find each other.",
        "It is also the meal where the difference shows. A bird raised outdoors, taken at its own pace, and collected from the people who raised it is a different thing from a frozen one picked up on the way home, and it tends to be the part of the table people talk about afterwards.",
        "The catch is timing, and it runs entirely in one direction. The decision to raise the bird happens in spring, months before anyone starts thinking about the holiday. A farm that waits until October to ask has already missed the window, so we are asking early on purpose.",
        "If enough tables around here want this, it becomes a fixture of every November on this farm, alongside the wreaths and the garland. That is exactly the kind of thing we want to build, and it starts with knowing who is interested.",
      ],
    },
    faq: [
      {
        q: "When would the first turkeys be available?",
        a:
          "A first year happens once the broiler side is running smoothly and every step from field to table is settled. Rather than name a year we cannot stand behind, we will tell the list as soon as it is real and open reservations from there.",
      },
      {
        q: "How far ahead would I need to reserve?",
        a:
          "Further ahead than feels natural. Birds are ordered in spring for a November table, so reservations open in the first half of the year and close once the number is set. That is simply how a holiday bird has to work.",
      },
      {
        q: "Will the turkeys be raised outdoors on pasture?",
        a:
          "Yes, that is the plan, the same standard we hold for the chicken. Birds with room to move, out on grass through the fall, growing at their own pace rather than being rushed toward a date.",
      },
      {
        q: "Can you tell me the exact weight in advance?",
        a:
          "We will give you a range rather than a number. Birds raised outdoors finish where they finish, and a range you can plan a table around is far more useful than an exact figure quoted before the bird has grown.",
      },
      {
        q: "How many birds would you raise?",
        a:
          "A small and clearly capped batch in the first year, sized to the list. Keeping it limited is deliberate. It is how a farm makes sure everyone who reserved a bird actually gets one in the week they need it.",
      },
      {
        q: "How do I get on the list for one?",
        a:
          "Join the list and say that a turkey is what you are interested in. Reservations will be offered there first, and the number of people waiting is what decides how soon a first year is worth doing.",
      },
    ],
    crossLinks: [
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
      { label: "How pickup at the farm works", href: "/farm-pickup/" },
      { label: "Wreaths and garland, the other November", href: "/wreaths-and-garland/" },
    ],
    ctaHeading: "Would your table want one?",
    ctaBody:
      "Saying so now is what puts a first year on the calendar, and how many birds are in it. No deposit and nothing to cancel.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/market-vegetables/",
    side: "farm",
    draft: false,
    navLabel: "Market Vegetables",
    blurb: "Greens, roots, brassicas and tomatoes, in beds we plan to walk daily.",
    title: "Market Vegetables | Paulsen Farm and Floral, Cass County",
    description:
      "Salad greens, roots, brassicas and tomatoes are what we plan to grow in market beds on our Cass County, Iowa farm. Tell us what you would want in your bag.",
    eyebrow: "The farm",
    h1: "Market vegetables, and what we plan to grow",
    seasonNote:
      "Market beds are part of the plan here, and what goes in them follows what people around here ask for.",
    intro: [
      "We plan to grow vegetables here. Salad greens, roots, brassicas and tomatoes, in beds close enough to the house that somebody walks them every single day.",
      "A market garden is the piece that turns a farm from somewhere you buy one thing a few times a year into somewhere you see most weeks, and that is very much the direction we are headed.",
      "The beds are not in production yet, and what goes into them is still an open question. That is on purpose. We would rather hear what people around here actually want before we spend a season growing something else.",
    ],
    included: {
      h2: "What we plan to grow",
      items: [
        {
          h3: "The things a market garden lives on",
          body:
            "Salad greens, roots, brassicas and tomatoes. Nothing exotic and nothing chosen to be interesting. These are the crops that carry a table because people cook with them every week, and that is what we want to be useful for.",
        },
        {
          h3: "Beds close enough to walk daily",
          body:
            "A market garden thrives on somebody looking at it every day. Keeping the beds near the house is not about charm, it is the difference between catching something on Tuesday and finding it on Saturday. Small and close before large and far.",
        },
        {
          h3: "Grown for flavor, not for a truck",
          body:
            "Varieties chosen for how they taste and how they do in this ground rather than for how well they survive a week in transit. That is the real advantage of buying from someone an hour away, and we intend to lean on it.",
        },
        {
          h3: "Enough of one thing to be worth the trip",
          body:
            "A little of everything looks generous and leaves everyone short. We would rather grow a real quantity of fewer crops so you can plan meals around what we have, which is what makes a farm useful rather than just pleasant.",
        },
        {
          h3: "Straight talk about the season",
          body:
            "There are weeks in this climate when a market garden has plenty and weeks when it has greens and little else. You will always get an honest answer from us about what is actually ready, and what is worth waiting another week for.",
        },
        {
          h3: "The piece everything else attaches to",
          body:
            "Chicken comes a few times a year and flowers come for occasions. Vegetables are the reason somebody would see us most weeks, which is why they matter to the whole shape of this farm more than their share of the revenue suggests.",
        },
      ],
    },
    process: {
      h2: "How we plan to build it, in order",
      steps: [
        {
          h3: "Ask before we plant",
          body:
            "Knowing what people around here actually want changes what goes in the ground, and asking is a far cheaper way to find out than growing a season of something nobody was waiting for. That part starts now.",
        },
        {
          h3: "Start with beds we can genuinely keep up with",
          body:
            "Market gardening is labor long before it is revenue, and Alex is direct about that. Starting with fewer beds than we think we can handle is what gets a garden through a July when everything needs doing at once.",
        },
        {
          h3: "Sell it two ways from the start",
          body:
            "Some through farmers markets, where you stand in front of people and learn quickly, and some direct off the farm to households already coming out for chicken. Two channels from the beginning means one slow Saturday does not waste a harvest.",
        },
        {
          h3: "Grow the beds to match the demand",
          body:
            "More ground only once the ground we have is fully sold. It is the least exciting rule we hold to and it is the one that decides whether a market garden is still here in five years.",
        },
      ],
    },
    context: {
      h2: "Where vegetables sit in the plan",
      paragraphs: [
        "Broiler chickens came first because a batch of birds teaches you a great deal inside a single season and then it is finished. Vegetables are a standing commitment from the first seeding in spring to the last harvest in fall, so they are what a farm adds once it has its footing rather than what it opens with.",
        "That order is not a lack of ambition. The long term shape of this place looks much more like a diversified market farm than a poultry operation, and the vegetables are how it gets there. They are simply the part that works best when it comes second.",
        "Water and storage move together with the vegetables, and both of those are part of what we are building at the back place. A garden that can only produce when the weather cooperates is not something a household can plan around, so the infrastructure and the crops advance side by side.",
        "The most useful thing anyone can tell us right now is what they would actually buy. Not what sounds good in theory, but what you would want in the bag most weeks. That is the input that decides what goes in the ground first.",
      ],
    },
    faq: [
      {
        q: "When would you have vegetables to sell?",
        a:
          "Once the market beds are in production, which follows the broiler side settling into a rhythm. We are planning the crop list now and will tell the list as soon as there is a first season worth showing up for.",
      },
      {
        q: "What would you grow first?",
        a:
          "Salad greens, roots, brassicas and tomatoes, because they are what people cook with week to week. The exact list is genuinely still open, and what people tell us will move it around before anything goes in the ground.",
      },
      {
        q: "Would you be certified organic?",
        a:
          "We are not making any certification claim, now or later, unless and until one is real and on paper. What we can tell you is the intent, which is growing in a way that leaves the ground better rather than mining it.",
      },
      {
        q: "Where would you sell them?",
        a:
          "Some at farmers markets and some direct off the farm to households already coming out for chicken. Which markets is still an open question, and we will name them once they are chosen, because naming a market is a promise to be standing there.",
      },
      {
        q: "Could I get a weekly box?",
        a:
          "That is very much the direction we are working toward, and it is a large part of why the storage crops matter. A box that only runs in high summer is far less useful to a household than one that carries into the colder months.",
      },
      {
        q: "How can I influence what you grow?",
        a:
          "Join the list and tell us what you would buy. It is not a courtesy question. A small farm that grows what its customers asked for sells out, and one that grows what it found interesting composts the difference in September.",
      },
    ],
    crossLinks: [
      { label: "Garlic and the storage crops that keep", href: "/garlic/" },
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
      { label: "The back place, and the water this depends on", href: "/nelson-farm/" },
    ],
    ctaHeading: "Tell us what you would actually buy",
    ctaBody:
      "What goes in the ground follows what people around here keep asking for. The list is where that gets decided, and it is open now.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/garlic/",
    side: "farm",
    draft: false,
    navLabel: "Garlic and Storage Crops",
    blurb: "Hardneck garlic and keeping crops, the quiet backbone of a winter box.",
    title: "Garlic and Storage Crops | Paulsen Farm and Floral, Iowa",
    description:
      "Hardneck garlic, onions, squash and potatoes are the keeping crops we plan to grow on our Cass County, Iowa farm, and they are the backbone of a winter box.",
    eyebrow: "The farm",
    h1: "Garlic and storage crops, and why they matter here",
    seasonNote:
      "Hardneck garlic and the crops that keep. Quiet, unglamorous, and the backbone of a winter box.",
    intro: [
      "We plan to grow garlic here, and the crops that keep alongside it. Hardneck garlic, onions, winter squash and potatoes, the things that go in once, come out once, and then hold for months.",
      "Storage crops get less attention than they deserve, mostly because nothing about them is urgent and none of them photograph well. They are also the reason a small farm can carry a slow month, which makes them worth talking about early.",
      "None of it is in the ground yet. Garlic is the piece we intend to start with, and it goes in during the fall, which means the decision gets made a long way ahead of anybody seeing a bulb.",
    ],
    included: {
      h2: "What a storage crop does for a farm",
      items: [
        {
          h3: "It goes in once and comes out once",
          body:
            "Hardneck garlic is planted in fall, sits through winter, and is lifted the following summer. Next to a bed of salad greens that wants attention every few days, that is a wonderfully forgiving crop for a farm that is also raising birds.",
        },
        {
          h3: "It keeps, which changes everything",
          body:
            "A crop that holds for months is one you sell on your own schedule rather than the week it comes ripe. That single property is the difference between taking whatever a Saturday offers and deciding for yourself when something is worth selling.",
        },
        {
          h3: "It fills the months with nothing else in them",
          body:
            "Iowa has a long stretch where a market garden has very little to offer. Onions, squash and potatoes are what a farm can still put on a table in that stretch, and they are what makes a winter box possible rather than merely a nice idea.",
        },
        {
          h3: "It buffers a season",
          body:
            "Alex calls these buffer crops and the name fits. When one part of the farm has a hard summer, the crop sitting in storage is what carries the year. It is a cushion, and a farm without one is betting on every season going well.",
        },
        {
          h3: "Garlic pays better than it looks",
          body:
            "Good garlic from a small grower sells reliably to people who notice the difference, and it needs no refrigeration, no stall every weekend and no fast sale. More than one small farm around here has been built quietly on it.",
        },
        {
          h3: "It needs somewhere to sit",
          body:
            "All of it depends on a cool dry place to hold a harvest, which is part of what we are building at the back place along with the water and the canning storage. Storage crops and storage arrive together or not at all.",
        },
      ],
    },
    process: {
      h2: "How we plan to get there",
      steps: [
        {
          h3: "Put garlic in first",
          body:
            "Garlic is the sensible starting point. It goes in during the fall when the rest of the farm is quieting down, and it comes out in midsummer before the heaviest stretch, so it fits the year without competing for attention.",
        },
        {
          h3: "Build somewhere to keep a harvest",
          body:
            "A cool room and real shelving, on the list for the back place alongside the water and the canning storage. Storage is what lets a good harvest turn into months of selling rather than a single busy stretch.",
        },
        {
          h3: "Add the rest around it",
          body:
            "Onions, potatoes and winter squash follow once garlic proves the pattern works on this ground. Each gets added because the season before it earned the space, rather than because a list said there would be four crops.",
        },
        {
          h3: "Use it to hold a season together",
          body:
            "The whole point is to spread a harvest out. Storage crops let a good summer carry a slow winter, and they are what turn a share or a winter box into something a household can genuinely count on.",
        },
      ],
    },
    context: {
      h2: "Why the quiet crops matter most",
      paragraphs: [
        "Storage crops are the least visible and most load bearing part of what this farm is trying to become. The showy parts of a farm are rarely the parts that keep it solvent, and a cold room with a good garlic harvest in it does more for a season than almost anything you could photograph.",
        "They also change what a customer can count on. A farm that only has something to offer between June and September is a summer treat. A farm with a full cold room in February is somewhere a household can actually build a habit around, and that is the relationship we are after.",
        "It ties into the larger idea underneath this whole business. A household with a full pantry in February has made a real decision about its own food, and so has a farm with a full storage room. Keeping a harvest is what turns it into something you control rather than something that happened to you.",
        "None of it is glamorous. It is still the part of the plan we would defend hardest, because it is the difference between a farm that has good weeks and a farm that has a good year.",
      ],
    },
    faq: [
      {
        q: "When would you have garlic to sell?",
        a:
          "Garlic planted in one fall is lifted the following summer, so there is a long wait built into the crop itself. We will tell the list once the first planting is in the ground and again when there is a harvest worth coming out for.",
      },
      {
        q: "What counts as a storage crop?",
        a:
          "Anything that keeps for months without refrigeration. On a farm like this that mainly means hardneck garlic, onions, potatoes and winter squash. They are what let a farm sell through a season rather than only during it.",
      },
      {
        q: "Why does storage keep coming up?",
        a:
          "Because a keeping crop is only worth growing if you have somewhere to keep it. A cool room and proper shelving are part of what we are building at the back place, and they arrive alongside the crops rather than after them.",
      },
      {
        q: "Would these go into a box or a share?",
        a:
          "That is the intent, and it is much of why they matter. Storage crops are what make a late season or winter box possible at all. Without them a share stops exactly when a household most wants something on the table.",
      },
      {
        q: "Is garlic really worth its own page?",
        a:
          "For a small farm, yes. It plants when the year is quiet, keeps for months, sells to people who notice the difference, and asks nothing of a market stall. Quiet crops like that are what hold a small operation together.",
      },
      {
        q: "How do I hear when there is a harvest?",
        a:
          "Through the list. Storage crops come out all at once and then sell steadily, so the people on the list are the first to know what is in the room and how long it is likely to last.",
      },
    ],
    crossLinks: [
      { label: "Market vegetables, and what we plan to grow", href: "/market-vegetables/" },
      { label: "The back place, where the storage would go", href: "/nelson-farm/" },
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
    ],
    ctaHeading: "Would a winter box interest you?",
    ctaBody:
      "Storage crops are what make one possible, and knowing whether anyone wants it is what decides how much goes in the ground. Tell us on the list.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },
];
