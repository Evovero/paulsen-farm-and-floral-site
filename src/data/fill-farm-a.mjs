// Paulsen Farm and Floral - fill batch 1, the farm production pages. 2026-08-25.
//
// /farm-eggs/, /thanksgiving-turkeys/, /market-vegetables/, /garlic/.
//
// WRITTEN FORWARD LOOKING ON PURPOSE. None of these four things is happening on this farm
// today, and every page says so in its own first screen. The model is /nelson-farm/, which
// runs to 1,221 words about rain capture, canning storage, a wood stove and a smokehouse
// that do not exist, and works because it never once implies otherwise. The constraint on
// this account is TENSE, not length.
//
// Content rules, in full and enforced by verify.mjs where a script can see them: no
// pricing and no currency figures, no street address, no phone, no hours, no husbandry,
// feed, certification or processing claims beyond "raised outdoors on pasture", no named
// farmers markets until two are actually chosen, the child appears in nothing, no em
// dashes, PAULSEN never Paulson, "and" never an ampersand.
//
// draft: true until Spencer has read the copy. See filled.mjs.
export const fillFarmA = [
  {
    slug: "/farm-eggs/",
    side: "farm",
    draft: true,
    navLabel: "Farm Eggs",
    blurb: "No laying flock yet. This is the plan for one, and a question for you.",
    title: "Farm Eggs from Pastured Hens | Paulsen Farm and Floral, IA",
    description:
      "There is no laying flock on this Cass County, Iowa farm yet. Here is what one would look like, what has to happen first, and how to say you would buy the eggs.",
    eyebrow: "The farm",
    h1: "Farm eggs, and the flock that is not here yet",
    seasonNote:
      "There are no laying hens on this farm today. This page is a plan and a question, not an offer.",
    intro: [
      "We do not have eggs. There is no laying flock on this place, and the birds that are here are broilers, which are meat birds and do not lay. If you came to this page looking to buy a dozen eggs this week, that is the honest answer and you can stop reading here.",
      "What follows is what a laying flock on this farm would actually be, what has to happen before it exists, and why we would rather show you the plan now than surprise you with it later. It is on the site because eggs are the single thing people ask a small farm for most often.",
      "Almost nothing described below exists yet. We are laying out the plan rather than the inventory. If enough people tell us this is the thing that would get them driving out here, it moves up the list, and that is not a figure of speech.",
    ],
    included: {
      h2: "What a laying flock here would be",
      items: [
        {
          h3: "Hens outdoors on pasture",
          body:
            "That is the whole claim, and it is deliberately the only one on this page about how the birds would live. Anything more specific than that would be us describing a flock we have not raised yet, and we would rather leave the sentence short than fill it with things we cannot stand behind.",
        },
        {
          h3: "A flock that follows the broilers",
          body:
            "The intent is to run layers behind the meat birds across the same ground rather than parking them in one spot. That is the plan on paper. We have not done it here yet and we will tell you plainly when we have, rather than quietly switching this page into the present tense.",
        },
        {
          h3: "Eggs that change through the year",
          body:
            "A flock outdoors gives you a different egg in June than in January, and it gives you fewer of them in the dark months. That is not a flaw to engineer out. It is worth saying up front, because a standing order from a pasture flock is not the same product as a carton off a shelf.",
        },
        {
          h3: "A standing dozen rather than a scramble",
          body:
            "The version worth building is a regular arrangement. You know eggs are coming, we know how many to plan for, and neither of us spends the week guessing. That only works with a list of real people behind it, which is most of what this page is trying to build.",
        },
        {
          h3: "A year round commitment, not a summer batch",
          body:
            "Broilers are a season. A laying flock is every morning, in February, in a wind that comes across open ground with nothing to stop it. That difference is the actual reason eggs are not first, and it is worth being straight about rather than calling it a scheduling detail.",
        },
        {
          h3: "Sold the same way as the chicken",
          body:
            "Direct, and picked up here, with nothing in between taking a cut. That is already how the meat birds move and it is the piece of this business that works today. Eggs would ride on the same arrangement rather than needing a new one invented for them.",
        },
      ],
    },
    process: {
      h2: "What has to happen before there are eggs",
      steps: [
        {
          h3: "Get a broiler season fully right",
          body:
            "One thing at a time, done properly. The meat birds are the base business and they are teaching us the ground, the water and the workload. Stacking a year round flock on top of a season we are still learning would be the fastest way to do both badly.",
        },
        {
          h3: "Solve winter before buying a single hen",
          body:
            "Housing, water that does not freeze solid, and a plan for the stretch when nothing wants to be outside. Winter is the part that decides whether a laying flock is a business or a chore, and it is the part that gets skipped by people who quit after one year.",
        },
        {
          h3: "Start against a list, not a hunch",
          body:
            "We would rather start small with a known number of households than build for an imagined demand and eat the difference. This is the same reasoning behind the whole site. Tell us first, and the first flock gets sized to real people rather than to optimism.",
        },
        {
          h3: "Fold it into pickup",
          body:
            "Once eggs are steady they join everything else that gets collected here, so one trip out covers the chicken, the eggs and whatever else is ready. Adding a product should not mean adding an errand for the person buying it.",
        },
      ],
    },
    context: {
      h2: "Why we published a page about eggs we do not have",
      paragraphs: [
        "The alternative was to leave a gap where eggs should be, and let anyone looking assume either that we sell them or that we never will. Both of those are worse than a page that says plainly where things stand. A farm this early either shows its plan or implies one, and implying one is how small operations end up quietly overpromising.",
        "There is also a practical reason. We are trying to build a list of people who actually want this food before we plant, buy or build against it. A page like this is the honest version of market research. It costs you nothing to say you would buy eggs, and it changes what we do next.",
        "Alex puts it in terms of what a household controls. Get a deep freeze, put ten chickens in it from a farmer down the road, and you have made one real decision about your own food supply rather than leaving all of it to a shelf. Eggs are the smallest, easiest version of that same decision, which is exactly why people ask for them first.",
        "So the question this page is really asking is whether a standing dozen from this farm is something you would build a habit around. If it is, say so. If it is not, that is worth knowing too, and it saves us building a flock nobody was waiting for.",
      ],
    },
    faq: [
      {
        q: "Can I buy eggs from you right now?",
        a:
          "No. There is no laying flock on this farm at the moment, so there are no eggs to sell, in any quantity, to anyone. The chicken we do sell is broilers, which are meat birds. This page describes a plan rather than something you can order today.",
      },
      {
        q: "Do you have any laying hens at all?",
        a:
          "None. It is a common assumption that a farm with chickens has eggs, and on this farm it is not true yet. Broilers and layers are different birds raised for different reasons, and starting with one does not automatically get you the other.",
      },
      {
        q: "When would farm eggs actually start?",
        a:
          "We are not going to put a date on it, because a date we invent now becomes a promise we did not mean to make. It comes after a broiler season we are happy with and after winter housing is solved. The list gets told before the website does.",
      },
      {
        q: "Would the hens be raised outdoors on pasture?",
        a:
          "Yes, that is the intent, and it is the only thing about their raising we are willing to state on this page. Everything more detailed than that would be a description of a flock we have not kept yet, and we would rather be short than sound impressive.",
      },
      {
        q: "Can I get on a list for eggs?",
        a:
          "Yes, and that is the most useful thing you can do here. Getting on the list tells us how many households are actually waiting, which is what decides the size of a first flock and how soon it is worth starting one at all.",
      },
      {
        q: "Why not just start the flock now?",
        a:
          "Because doing two new things badly is worse than doing one well. The broilers are the base business and they are still teaching us this ground. A laying flock is a year round commitment through an Iowa winter, and that is not something to take on halfway.",
      },
    ],
    crossLinks: [
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
      { label: "How pickup at the farm works today", href: "/farm-pickup/" },
      { label: "Where this farm is headed, and why", href: "/nelson-farm/" },
    ],
    ctaHeading: "Would you take a standing dozen?",
    ctaBody:
      "That answer decides whether there is a flock here next year and how big it is. Getting on the list costs you nothing and commits you to nothing.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/thanksgiving-turkeys/",
    side: "farm",
    draft: true,
    navLabel: "Thanksgiving Turkeys",
    blurb: "Not raised yet. Here is the bird we would raise and what it would take.",
    title: "Thanksgiving Turkeys | Paulsen Farm and Floral, Cass County",
    description:
      "No turkeys have been raised on this Cass County, Iowa farm yet. This is the bird we would raise for Thanksgiving, what must be settled first, and how to hear.",
    eyebrow: "The farm",
    h1: "Thanksgiving turkeys, and the year we would start",
    seasonNote:
      "No turkeys have been raised here yet. This page describes the bird we would raise, not one you can reserve.",
    intro: [
      "We have not raised a turkey. Not one, not yet. So there is no bird to reserve this November and nothing on this page you can put money down on, and we would rather lead with that than bury it under a paragraph about tradition.",
      "What this page is for is the version of this that we think is worth building, and the specific things that have to be settled before a single poult arrives. A Thanksgiving bird is an unusually unforgiving thing to get wrong, because there is exactly one date and no second attempt.",
      "So read this as the plan. If a pasture raised bird from a farm an hour from you is something your table would actually want, telling us now is what makes it happen, and it is the only thing that does.",
    ],
    included: {
      h2: "The bird we would raise",
      items: [
        {
          h3: "Raised outdoors on pasture",
          body:
            "The same single claim we make about the chicken, and for the same reason. It is what we would do and it is all we are willing to write down before we have done it here. A page full of confident detail about birds that have never existed is not worth anyone's trust.",
        },
        {
          h3: "One batch, once a year",
          body:
            "There is no second run and no restock. A turkey is a fall crop with one delivery week in it, which means the number we raise is decided months earlier, in spring, off a list of people who said they wanted one. That is the whole logistical shape of it.",
        },
        {
          h3: "Reserved well ahead, not bought on the day",
          body:
            "Every farm that does this well takes reservations early and closes them early. It is not a scarcity tactic. It is that a bird ordered in November cannot be raised in November, and a farm that pretends otherwise ends up disappointing people in the worst possible week.",
        },
        {
          h3: "A size range, not a promised weight",
          body:
            "Birds that live outdoors finish at the size they finish at. Any farm quoting you an exact weight in advance is guessing, and we would rather tell you a range and let you plan around it than commit to a number the bird has not agreed to.",
        },
        {
          h3: "Picked up here, like everything else",
          body:
            "One trip out, in the week before the holiday, alongside whatever else is ready. Pickup already works on this farm and it is the part of the operation that needs no invention. A turkey would slot into it rather than needing a system of its own.",
        },
        {
          h3: "The same November as the wreaths",
          body:
            "This is the honest complication. Turkeys come ready in the exact stretch when the floral side is making wreaths and garland, which makes for one extremely compressed month. We would rather plan around that openly than discover it the hard way in year one.",
        },
      ],
    },
    process: {
      h2: "What has to be settled first",
      steps: [
        {
          h3: "Prove we can finish birds well",
          body:
            "Broilers first, properly, for a season or more. Turkeys take longer, cost more per bird and are less forgiving at every stage, so they are not the place to learn the fundamentals. They are what you add once the fundamentals are boring.",
        },
        {
          h3: "Settle how a bird gets to your table",
          body:
            "This is the real blocker and we are not going to gloss it. There is a set of decisions between a live bird in a field and a turkey in your oven, and none of them are made yet. We will not take a reservation before that is fully sorted.",
        },
        {
          h3: "Count the list, then order the poults",
          body:
            "Poults get ordered in spring for a bird that is ready in November. That is a long bet on a number, and the only responsible way to place it is against people who have actually said they want one rather than against a hopeful guess.",
        },
        {
          h3: "Open reservations early and close them",
          body:
            "When there is a first year, it will be a small and clearly capped number, offered to the list before it goes anywhere else. Overselling a holiday bird is the fastest way to lose people who would otherwise have stayed with us for a decade.",
        },
      ],
    },
    context: {
      h2: "Why a turkey page on a farm with no turkeys",
      paragraphs: [
        "Because the decision about Thanksgiving is made long before Thanksgiving, and so is the decision to raise the bird. If you only find out in October that a farm near you does this, it is already too late for both of us. A page that exists a year early is the only version of this that is useful.",
        "It is also the clearest example of why this whole site is written the way it is. We could have put up a page implying that turkeys are available, collected interest on that basis, and sorted the truth out later. Plenty of new farms do exactly that and it usually ends with somebody driving out for a bird that was never raised.",
        "The other reason is that a holiday bird is how a lot of households make their one deliberate food decision of the year. It is the meal people care most about, cook most carefully, and are most willing to plan ahead for. If a farm an hour away is going to be part of that, it earns the spot by being straight with you well in advance.",
        "So this page is doing one job. It is finding out whether there are enough tables around here that would want this to make it worth doing at all, before anybody spends a spring on it.",
      ],
    },
    faq: [
      {
        q: "Can I reserve a turkey for this Thanksgiving?",
        a:
          "No. There are no turkeys on this farm, none have been raised here, and nothing is being taken for this year. Anything you read on this page describes a plan for a future season rather than a bird that exists or is on its way.",
      },
      {
        q: "Have you raised turkeys before?",
        a:
          "Not here, and not yet. The farm is in its first stretch of raising broiler chickens, and turkeys are a longer and less forgiving bird. Saying otherwise would make this page sound better and would make it untrue, which is not a trade we want.",
      },
      {
        q: "What is actually stopping you?",
        a:
          "Two things. Getting a broiler season finished well enough that we trust our own footing, and settling every step between a live bird in a field and a turkey ready for your oven. The second one is not sorted, and reservations do not open before it is.",
      },
      {
        q: "How far ahead would I need to order?",
        a:
          "Further ahead than feels natural. Birds are ordered in spring for a November table, so a first year would open reservations in the first half of the year and close them once the number is set. The list hears about it before anyone else does.",
      },
      {
        q: "Would you tell me the exact weight in advance?",
        a:
          "No, we would give you a range. Birds raised outdoors finish where they finish, and quoting an exact weight months out is a guess dressed up as a commitment. A range you can plan a table around is more useful and more honest.",
      },
      {
        q: "How do I find out when this starts?",
        a:
          "Get on the list. It is the only channel that will carry it, and it will carry it well before the page changes. It also tells us how many households are waiting, which is the number that decides whether a first year happens at all.",
      },
    ],
    crossLinks: [
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
      { label: "How pickup at the farm works today", href: "/farm-pickup/" },
      { label: "Wreaths and garland, the other November", href: "/wreaths-and-garland/" },
    ],
    ctaHeading: "Would your table want one?",
    ctaBody:
      "Saying so now is what decides whether there is a first year, and how many birds are in it. No deposit, no obligation, and nothing to cancel.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/market-vegetables/",
    side: "farm",
    draft: true,
    navLabel: "Market Vegetables",
    blurb: "The beds are not in production yet. Here is what we would grow, and why.",
    title: "Market Vegetables | Paulsen Farm and Floral, Cass County",
    description:
      "Market beds are not in production on this Cass County, Iowa farm yet. Here is what we would grow, how it would sell, and why we ask before we plant it here.",
    eyebrow: "The farm",
    h1: "Market vegetables, and the beds that are not planted",
    seasonNote:
      "The market beds are not in production. This page is what we would grow and a question about what you would buy.",
    intro: [
      "There are no market vegetables coming off this farm right now. The beds are not in production, nothing is planted against a market schedule, and if you are here to buy salad greens this week the answer is that we do not have any.",
      "Vegetables are on this site because they are where this farm is pointed, not because they are ready. A market garden is the piece that turns a place that sells one thing a few times a year into somewhere people come back to every week, and that is the direction we want.",
      "What is below is the plan, written before the planting rather than after it. That order is deliberate. We would rather find out what people around here actually want in a box before we spend a season growing something else.",
    ],
    included: {
      h2: "What we would grow",
      items: [
        {
          h3: "The things a market garden lives on",
          body:
            "Salad greens, roots, brassicas and tomatoes. Nothing exotic and nothing chosen to be interesting. These are the crops that carry a market table because people cook with them every week, and a first year is not the time to be clever about it.",
        },
        {
          h3: "Beds close enough to walk daily",
          body:
            "A market garden fails quietly when nobody looks at it for four days. Keeping the beds near the house is not about charm, it is the difference between catching a problem on Tuesday and finding it on Saturday. The plan is small and close before it is large and far.",
        },
        {
          h3: "Grown for a season here, not for a truck",
          body:
            "Varieties get picked for how they taste and how they do in this ground, rather than for how well they survive a week in transit. That is the one real advantage a small local grower has, and giving it away to chase shelf life would be pointless.",
        },
        {
          h3: "Enough of one thing to be worth the trip",
          body:
            "A little of everything looks generous on a table and leaves everyone short. Better to grow a real quantity of fewer crops so somebody can actually plan meals around what we have, which is what a household needs from a farm and not just a nice afternoon.",
        },
        {
          h3: "Honest about the gaps",
          body:
            "In this climate there are weeks when a market garden has plenty and weeks when it has greens and not much else. A farm that pretends every crop is available every week is either buying it in or lying, and we would rather tell you what the season is doing.",
        },
        {
          h3: "The thing everything else attaches to",
          body:
            "Vegetables are what make a weekly habit possible. Chicken is a few times a year and flowers are for occasions, but vegetables are the reason somebody would see us most weeks, and that is why they matter more than their revenue suggests.",
        },
      ],
    },
    process: {
      h2: "How this gets built, in order",
      steps: [
        {
          h3: "Ask before we plant",
          body:
            "This page and the list are the first step, and that is not a formality. Knowing what people around here actually want changes what goes in the ground, and it is a far cheaper way to find out than growing a season of something nobody asked for.",
        },
        {
          h3: "Start with beds we can genuinely keep up with",
          body:
            "Market gardening is labor long before it is revenue. Alex is direct about that. Starting with fewer beds than we think we can handle is the only version of this that survives a July when everything needs doing at once.",
        },
        {
          h3: "Sell it two ways from the start",
          body:
            "Some through markets, where you stand in front of people and learn quickly, and some direct off the farm to people who already come out here. Two channels from the beginning means one bad week at a market does not waste a harvest.",
        },
        {
          h3: "Grow the beds to match the demand",
          body:
            "More ground only after the ground we have is fully sold. It is the least exciting rule on this page and it is the one that decides whether a market garden is still here in five years or is a story about a hard summer.",
        },
      ],
    },
    context: {
      h2: "Why the vegetables are not first",
      paragraphs: [
        "Broiler chickens came first because a batch of birds teaches you a great deal inside a single season and then it is finished. Vegetables are the opposite. They are a standing commitment from the first seeding in spring to the last harvest in fall, and they punish a farm that takes them on before it has its footing.",
        "That order is not a lack of ambition. The long term shape of this place is much closer to a diversified market farm than to a poultry operation, and the vegetables are how it gets there. They are simply the part that has to come second in order to work at all.",
        "The other honest constraint is water and storage, and both of those live at the back place rather than here. A market garden that can only grow when the weather cooperates is not a business you can plan around, which is why the infrastructure and the vegetables move together rather than separately.",
        "So the useful thing you can do on this page is tell us what you would actually buy. Not what sounds nice on a farm website, but what you would want in the bag most weeks. That is the input that decides what goes in the ground first.",
      ],
    },
    faq: [
      {
        q: "Can I buy vegetables from you now?",
        a:
          "No. The market beds are not in production, so there is nothing to sell and nowhere to sell it. What the farm has today is pasture raised chicken sold direct, and seasonal work on the floral side. Vegetables are a plan rather than a product.",
      },
      {
        q: "What would you grow first?",
        a:
          "Salad greens, roots, brassicas and tomatoes, because they are what people actually cook with week to week. The exact list is genuinely still open, and what people tell us through the list will move it around before anything gets planted.",
      },
      {
        q: "Would you be certified organic?",
        a:
          "We are not making any certification claim on this site, now or later, unless and until one is real and on paper. What we can tell you is the intent, which is growing in a way that leaves the ground better rather than mining it.",
      },
      {
        q: "Where would you sell them?",
        a:
          "Some at farmers markets and some direct off the farm to people already coming out for chicken. Which markets is an open question and we are not naming any until two are actually chosen, because a name on a website is a promise to be somewhere.",
      },
      {
        q: "Why is this taking so long?",
        a:
          "Because a market garden is a full season commitment and doing it badly wastes a whole year. The farm is finishing what it started before adding something that needs attention every single day from spring through fall.",
      },
      {
        q: "How can I influence what you grow?",
        a:
          "Get on the list and tell us what you would buy. That is not a courtesy question. A small farm that plants what its customers asked for sells out, and one that plants what it found interesting composts the difference in September.",
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
    draft: true,
    navLabel: "Garlic and Storage Crops",
    blurb: "Nothing planted yet. The quiet crops that would carry a slow season.",
    title: "Garlic and Storage Crops | Paulsen Farm and Floral, Iowa",
    description:
      "No garlic is planted on this Cass County, Iowa farm yet. Here is why storage crops are the quiet backbone of a small farm, and what growing them here needs.",
    eyebrow: "The farm",
    h1: "Garlic and storage crops, before any of it is planted",
    seasonNote:
      "Nothing on this page is in the ground yet. Garlic is a buffer crop we intend to grow, not one we are selling.",
    intro: [
      "No garlic is planted on this farm. No onions, no winter squash, no potatoes. This page is about a set of crops we intend to grow and the reasons they are worth growing, and it is not a list of things you can buy from us.",
      "Storage crops get less attention than they deserve on farm websites because they are not photogenic and nothing about them is urgent. They are also the reason a small farm can survive a slow month, which makes them worth a page even before they exist.",
      "Everything below is written as a plan. When there is garlic in the ground we will say so, and when there is garlic to sell we will say that too, in that order and not before.",
    ],
    included: {
      h2: "What a storage crop actually does for a farm",
      items: [
        {
          h3: "It goes in once and comes out once",
          body:
            "Hardneck garlic goes in the ground in fall, sits through winter, and comes out the following summer. Compared to a bed of salad greens that needs attention every few days, that is an enormously forgiving crop for a farm that is also raising birds.",
        },
        {
          h3: "It keeps, which changes everything",
          body:
            "A crop that holds for months is a crop you sell on your own schedule rather than the week it ripens. That single property is the difference between taking whatever price a Saturday offers and deciding for yourself when something is worth selling.",
        },
        {
          h3: "It fills the months with nothing else in them",
          body:
            "Iowa has a long stretch where a market garden has very little to offer. Onions, squash and potatoes are what a farm puts on a table in that stretch, and they are the reason a winter box is possible at all rather than a nice idea.",
        },
        {
          h3: "It buffers a bad season",
          body:
            "Alex calls these buffer crops and the name is right. When a summer goes wrong somewhere else on the farm, the crop sitting in storage is what carries the year. It is a cushion, and a farm without one is a farm betting on every season going well.",
        },
        {
          h3: "Garlic pays better than it looks",
          body:
            "Good garlic from a small grower sells reliably to people who care about the difference, and it does not need refrigeration, a market stall every week or a fast sale. More than one small farm around here has been built on it quietly.",
        },
        {
          h3: "It needs a place to sit",
          body:
            "All of which depends on somewhere cool and dry to hold a harvest, which this operation does not have yet. Storage crops without storage are just crops, and that is exactly why this page and the back place are the same conversation.",
        },
      ],
    },
    process: {
      h2: "What it would take to get there",
      steps: [
        {
          h3: "Put garlic in first",
          body:
            "Garlic is the sensible starting point because it is planted in fall, when the rest of the farm is quieting down, and harvested in midsummer before the heaviest stretch. It fits into the year without competing with anything else for attention.",
        },
        {
          h3: "Build somewhere to keep a harvest",
          body:
            "A cool room and real shelving, which is on the list for the back place along with the water and the canning storage. Until that exists, growing a large storage crop means watching a good harvest slowly go to waste, which is worse than not growing it.",
        },
        {
          h3: "Add the rest around it",
          body:
            "Onions, potatoes and winter squash follow once garlic proves the pattern works here. Each one gets added because the season before it justified the space, not because a list on a website said there would be four crops.",
        },
        {
          h3: "Use it to hold a season together",
          body:
            "The point of all of it is to spread a harvest out. Storage crops let a good summer carry a slow winter, and they are what make a share or a winter box something a household can count on rather than a summer novelty.",
        },
      ],
    },
    context: {
      h2: "Why this page exists before the planting does",
      paragraphs: [
        "Because storage crops are the least visible and most load bearing part of what this farm is trying to become, and leaving them off the site would give a misleading picture of the plan. The showy parts of a farm are not the parts that keep it solvent.",
        "There is also a straightforward practical answer. Garlic is planted in fall, which means the decision to grow it gets made months before anyone sees a single bulb. A page that exists now is the only way anyone can weigh in before that decision is already behind us.",
        "It connects to the larger idea underneath this whole business. A household with a full pantry in February has made a real decision about its own food, and a farm with a full cold room in February has made the same one. Storage is what turns a harvest into something you control rather than something that happens to you.",
        "None of it is glamorous and none of it makes for a good photograph. It is still the part of the plan we would defend hardest, because it is the difference between a farm that has good weeks and a farm that has a good year.",
      ],
    },
    faq: [
      {
        q: "Can I buy garlic from you?",
        a:
          "Not yet. Nothing is planted, so there is nothing to sell. Garlic is a crop we intend to grow because it fits this farm well, and this page explains why rather than offering anything you can order today.",
      },
      {
        q: "When would the first garlic be ready?",
        a:
          "Garlic planted in one fall comes out the following summer, so even once it starts there is a long wait built in. We are not naming a year on this page, because a year written here becomes a promise we did not intend to make.",
      },
      {
        q: "What counts as a storage crop?",
        a:
          "Anything that keeps for months without refrigeration. On a farm like this that mainly means hardneck garlic, onions, potatoes and winter squash. They are the crops that let a farm sell through a season rather than only during it.",
      },
      {
        q: "Why does storage keep coming up?",
        a:
          "Because a storage crop is only useful if you have somewhere to store it. A cool room and proper shelving are on the list for the back place, and until they exist, growing a large keeping crop would mean watching most of it spoil.",
      },
      {
        q: "Would these go in a share or a box?",
        a:
          "That is the intent, and it is much of why they matter. Storage crops are what make a late season or winter box possible at all. Without them a share is a summer arrangement that stops exactly when a household most wants it.",
      },
      {
        q: "Is garlic really worth a page?",
        a:
          "For a small farm, yes. It plants when the rest of the year is quiet, it keeps for months, it sells to people who notice the difference, and it does not need a stall every weekend. Quiet crops like that are what hold a small operation together.",
      },
    ],
    crossLinks: [
      { label: "Market vegetables, and the beds that come first", href: "/market-vegetables/" },
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
