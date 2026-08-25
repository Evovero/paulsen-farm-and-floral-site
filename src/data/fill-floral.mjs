// Paulsen Farm and Floral - fill batch 3, the seasonal floral pages. 2026-08-25.
//
// /bouquets/, /flower-subscriptions/, /mothers-day/, /diy-flower-buckets/.
//
// VOICE RULE: see the header of fill-farm-a.mjs. Intent, never absence. No website
// self-commentary. American spelling.
//
// EVERY PAGE IN THIS BATCH IS BRONTE'S, AND SHE HAS NEVER BEEN SPOKEN TO.
// Everything on record about the floral side is Alex's account of her business. She holds
// a content veto over all of it. Written accordingly:
//   - Bronte is named as the designer, which is a claim already made and live on
//     /wedding-flowers/ since 2026-08-21, so it is not a new one.
//   - No claim about HOW she designs, what she likes, what she will or will not take on,
//     or how she prices anything.
//   - Everything product-shaped is written as intent, so disagreeing with it costs her a
//     sentence rather than a rebuild.
//   - The flower field does not exist. Grown-versus-sourced is stated honestly on every
//     page that touches it, which is Alex's own positioning from the 08-17 call: start
//     production, grow as many as possible, buy the rest rather than pretend otherwise.
//
// No pricing. Weddings are never hosted at the farm. The child appears in nothing.
export const fillFloral = [
  {
    slug: "/bouquets/",
    side: "floral",
    draft: false,
    navLabel: "Bouquets and Arrangements",
    blurb: "Seasonal bunches and arrangements, grown here where the season allows.",
    title: "Bouquets and Arrangements | Paulsen Farm and Floral Iowa",
    description:
      "We plan to sell seasonal bouquets and arrangements from our Cass County, Iowa farm, grown here where the season allows. Here is what we have in mind for them.",
    eyebrow: "Seasonal flowers",
    h1: "Bouquets and arrangements, grown here where we can",
    seasonNote:
      "Seasonal bunches and arrangements by Bronte, from a flower field we are still putting in.",
    intro: [
      "We plan to sell bouquets and arrangements through the season. Bunches cut that week, and arranged work for a table, a counter or a gift, put together by Bronte.",
      "The flower field is still going in, so this grows as the ground does. The intent is to grow as much of what goes into a bouquet as our season allows and to be straightforward about the rest rather than implying every stem came off this place.",
      "What follows is the shape we have in mind. If seasonal flowers from a farm an hour from you is something you would want on your table, telling us now is what decides how much gets planted.",
    ],
    included: {
      h2: "What we have in mind",
      items: [
        {
          h3: "Whatever the week is best at",
          body:
            "A bouquet from a flower farm is built out of what is at its peak that week rather than out of a fixed recipe. That is the trade, and it is why these look different in June than in September. Most people find that the appeal rather than the catch.",
        },
        {
          h3: "Grown here where the season allows",
          body:
            "The plan is to grow as much of it as we can, because a stem cut that morning behaves differently in a vase than one that has been in transit. Where our season cannot supply something, we would rather buy it in and say so than pretend the field did it all.",
        },
        {
          h3: "Arranged by hand, by Bronte",
          body:
            "The design side of this business is hers. A bunch of good stems and an arrangement somebody actually wants on their table are two different things, and the difference between them is the part that takes years to learn.",
        },
        {
          h3: "Sold in runs while it lasts",
          body:
            "Flowers do not keep, so the honest way to sell them is in runs. A week where something is at its best, announced ahead, offered while there is enough of it, and then finished until the next thing comes on.",
        },
        {
          h3: "For a table, not a gift shop",
          body:
            "The version worth building is flowers people keep in the house because they like having them, rather than only for occasions. That is a different product from the one a supermarket sells and it is the one a small farm is actually good at.",
        },
        {
          h3: "Collected here or brought to you",
          body:
            "Picked up at the farm alongside anything else ready that week, or carried along when we are already headed to a market. How far that reaches depends entirely on where the people who want them turn out to be.",
        },
      ],
    },
    process: {
      h2: "How we plan to get there",
      steps: [
        {
          h3: "Get a flower field in the ground",
          body:
            "Cut flowers need room, water and a real plan, and that is what the back place is being built toward. Until the field is producing, anything we sell leans much harder on sourcing than we would like it to.",
        },
        {
          h3: "Start with what grows well here",
          body:
            "Southwest Iowa will grow some things beautifully and fight us on others. A first season is for finding out which is which rather than for planting a list copied off a flower farm two states away.",
        },
        {
          h3: "Sell in short runs and learn fast",
          body:
            "A run tells you quickly whether people want a thing. Announce it, offer it, see what happens, and let the answer decide what gets more space in the field the following year rather than guessing at it in advance.",
        },
        {
          h3: "Add standing orders once supply holds",
          body:
            "Once the field can be counted on week to week, the natural next step is regular flowers for people who want them all season rather than one bunch at a time. That is where subscriptions come in.",
        },
      ],
    },
    context: {
      h2: "Where a farm florist sits, and why it matters",
      paragraphs: [
        "There are two usual models. A florist who buys everything in and designs beautifully with it, and a flower farm that grows well and hands the stems to somebody else. Alex describes what they want as the middle ground between the two, and that is a deliberate choice rather than an accident of scale.",
        "It means growing as many of the flowers as the season allows, buying in what we cannot grow, and doing the design here rather than passing it along. The advantage is that the person arranging the flowers knows exactly what came out of the field that week and can build around it.",
        "The honest part of that is admitting where the line falls. Iowa has a real growing season and a real winter, and no farm in this state supplies its own flowers in February. A farm florist who claims otherwise is either buying quietly or not telling you the whole story.",
        "The farm side of this business is about clean food. The floral side is a different feeling entirely, and Alex is the first to say so. It is about beauty and about the ordinary pleasure of having something growing on the table, which is not a small thing to build a business around.",
      ],
    },
    faq: [
      {
        q: "Can I order a bouquet right now?",
        a:
          "Not yet. The flower field is still going in and the seasonal runs are what come first. Getting on the list is the way to hear when there are bunches available, usually a little before anyone else does.",
      },
      {
        q: "Do you grow all of your own flowers?",
        a:
          "That is the goal and it will never be all of it. Our season allows a great deal between spring and fall and nothing in the depth of winter. What we cannot grow we would rather buy in and tell you about than quietly imply otherwise.",
      },
      {
        q: "Can I ask for specific flowers?",
        a:
          "For a designed piece it is worth asking, and how far it can go depends on the season. For a seasonal bunch the answer is usually what is at its best that week, which is the whole point of buying flowers from a farm.",
      },
      {
        q: "What is the difference from supermarket flowers?",
        a:
          "Mostly time. Stems cut nearby and sold within days behave differently in a vase than ones that have traveled a long way to reach a shelf. The varieties are different too, because we can grow for scent and beauty rather than for shipping.",
      },
      {
        q: "Would you deliver?",
        a:
          "Collection at the farm is the simplest and it is what already works for everything else. Beyond that it depends on where people are. If a run of orders lands in one direction, bringing them along on a trip we are already making is straightforward.",
      },
      {
        q: "How do I hear when flowers are available?",
        a:
          "Through the list. Flowers move fast and in short runs, so the people on it get told first when something is coming on. It is the only reliable way to catch a run before it is finished.",
      },
    ],
    crossLinks: [
      { label: "Flower subscriptions, week after week", href: "/flower-subscriptions/" },
      { label: "Floral design for events and celebrations", href: "/event-flowers/" },
      { label: "Wreaths, garland and seasonal centerpieces", href: "/wreaths-and-garland/" },
    ],
    ctaHeading: "Would you keep flowers on the table?",
    ctaBody:
      "How much goes into the field follows how many people say yes to that. The list is where we are counting, and it is open now.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/flower-subscriptions/",
    side: "floral",
    draft: false,
    navLabel: "Flower Subscriptions",
    blurb: "Flowers on a standing basis, once the field can be counted on.",
    title: "Flower Subscriptions | Paulsen Farm and Floral, Cass County",
    description:
      "We plan to offer flower subscriptions from our Cass County, Iowa farm once the field can be counted on. Here is the shape we have in mind and how to be first.",
    eyebrow: "Seasonal flowers",
    h1: "Flower subscriptions, and the season we are planning for",
    seasonNote:
      "Flowers on a standing basis through the season, once the field can be counted on week to week.",
    intro: [
      "We plan to offer flower subscriptions. Flowers on a standing basis through the season, so there is something on the table every week without anyone having to think about it.",
      "It is the arrangement a flower farm is best suited to, because a field produces on a rhythm and a subscription is the only way of selling that matches it. It also waits on the field being reliable, which is the honest constraint.",
      "What follows is the shape we have in mind and what has to be true first. If flowers arriving without you having to remember is something you would want, saying so is what decides how soon it happens.",
    ],
    included: {
      h2: "The shape we have in mind",
      items: [
        {
          h3: "A standing arrangement through the season",
          body:
            "Flowers on a regular rhythm for the run of the season rather than one bunch at a time. You stop deciding, we stop guessing, and the field gets planted against a number that actually exists rather than a hopeful one.",
        },
        {
          h3: "Whatever the week is best at",
          body:
            "Every delivery is built out of what is at its peak that week. A subscription from a farm is a relationship with a season rather than a repeat order, and the variety through the year is most of what makes it worth having.",
        },
        {
          h3: "Sized to the field, not to the demand",
          body:
            "The number of subscriptions is capped by what the field can actually produce. A grower who oversells subscriptions ends up buying flowers in every week to cover them, which defeats the entire purpose of buying from a farm.",
        },
        {
          h3: "A season block rather than an open commitment",
          body:
            "Sold as a defined stretch with a start and an end, so nobody is signed up to something indefinite. You know exactly what you are getting and for how long before anything is agreed.",
        },
        {
          h3: "For homes, and for counters",
          body:
            "Standing flowers work as well on a shop counter or a restaurant table as on a kitchen island. A business that wants fresh flowers every week from a farm an hour away is exactly the kind of standing arrangement we want.",
        },
        {
          h3: "Collected here or brought along",
          body:
            "Picked up at the farm, or carried on a run we are already making. Where that reaches depends on where subscribers turn out to be, which is another reason the list matters before the field is even planted.",
        },
      ],
    },
    process: {
      h2: "What has to happen first",
      steps: [
        {
          h3: "The field has to be reliable",
          body:
            "A subscription is a promise about a specific week, repeated all season. That takes a field producing steadily rather than in bursts, which is the single thing standing between this and a first season.",
        },
        {
          h3: "Water before volume",
          body:
            "Cut flowers fail the same way vegetables do in a dry August. Real water at the back place is what makes a field something you can plan a season of deliveries around rather than hope through.",
        },
        {
          h3: "A small, capped first season",
          body:
            "Far fewer subscriptions than we think we could sell, offered to the list first. Getting a small season completely right builds something that lasts. Getting a big one mostly right does the opposite.",
        },
        {
          h3: "Grow it only as fast as the field does",
          body:
            "Every additional subscription has to be earned by ground that can actually fill it. That is the discipline that separates a flower farm from a shop that quietly buys everything in and calls it local.",
        },
      ],
    },
    context: {
      h2: "Why a subscription suits a flower farm",
      paragraphs: [
        "A field does not produce evenly on demand. It comes on in waves, and the flowers it produces do not keep. Those two facts together are why so many small flower farms end up building around standing orders rather than around individual sales.",
        "For the household on the other end it solves a different problem. Almost nobody buys flowers as often as they would like to, because it takes remembering. A standing arrangement removes the remembering, which turns out to be the entire barrier for most people.",
        "It also gives the farm the same thing a CSA gives the vegetable side. Knowing in spring how many bunches are spoken for every week in July changes how much gets planted and how confidently. It is the difference between growing hopefully and growing to a plan.",
        "That is why this sits high on the list even though it is not close yet. It is the arrangement that makes a small flower operation work, and it is worth building toward properly rather than launching before the field can carry it.",
      ],
    },
    faq: [
      {
        q: "Can I subscribe now?",
        a:
          "Not yet. The flower field has to be producing reliably before anyone is asked to commit to a season of weekly flowers. Getting on the list is what puts you in front of the queue when a first season opens.",
      },
      {
        q: "How often would flowers come?",
        a:
          "A weekly rhythm is the usual shape, with a lighter option for people who would rather have flowers every other week. What we actually offer will be set by what the field can support without buying stems in to cover.",
      },
      {
        q: "What flowers would be in it?",
        a:
          "Whatever is at its peak that week. A subscription from a farm follows the season rather than a fixed list, which means the flowers in June and the flowers in September look nothing alike. That variety is the point.",
      },
      {
        q: "How long would I be committing for?",
        a:
          "A defined block of the season with a clear start and end rather than something open ended. You will know exactly how many weeks are involved before anything is agreed, and it will not roll on quietly.",
      },
      {
        q: "Can a business subscribe?",
        a:
          "Yes, and that is a use we would like to build toward deliberately. A shop counter or a restaurant table with fresh flowers every week from a farm an hour away is a straightforward and very good arrangement for both sides.",
      },
      {
        q: "Would it run through winter?",
        a:
          "No. Iowa has a real winter and no farm in this state cuts its own flowers in February. A subscription follows the growing season, and the honest version of it stops when the field does.",
      },
    ],
    crossLinks: [
      { label: "Bouquets and arrangements, week by week", href: "/bouquets/" },
      { label: "Buckets of blooms, by the armful", href: "/diy-flower-buckets/" },
      { label: "Restaurants and grocers, and standing orders", href: "/wholesale/" },
    ],
    ctaHeading: "Would you want flowers every week?",
    ctaBody:
      "How many people say yes decides how much of the field goes to cut flowers. Getting on the list costs nothing and holds you to nothing.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/mothers-day/",
    side: "floral",
    draft: false,
    navLabel: "Mother's Day",
    blurb: "A short spring run, ordered ahead, once the season can support it.",
    title: "Mother's Day Flowers | Paulsen Farm and Floral, Cass County",
    description:
      "We plan a short Mother's Day flower run from our Cass County, Iowa farm, ordered ahead and collected here. Here is the shape of it and how to hear about it.",
    eyebrow: "Seasonal flowers",
    h1: "Mother's Day flowers, and the year we plan to start",
    seasonNote:
      "A short spring run, ordered ahead and collected here, once the season can genuinely support it.",
    intro: [
      "We plan to do a Mother's Day run. A short offering of bouquets and arranged pieces, ordered ahead and collected here in the days before, put together by Bronte.",
      "It is the single busiest weekend in the floral year, which is exactly why a small operation should start small at it. One weekend, a capped number of pieces, and everybody who ordered actually gets what they ordered.",
      "What follows is the shape we have in mind. If flowers from a farm near you is how you would want to mark the day, saying so now is what gets a first year onto the calendar.",
    ],
    included: {
      h2: "The shape we have in mind",
      items: [
        {
          h3: "A short run, ordered ahead",
          body:
            "Orders taken in advance and closed once the number is set, rather than a table of flowers on the day. That is how a small operation makes sure the person who ordered in April is not turned away on the Saturday.",
        },
        {
          h3: "Bouquets and arranged pieces",
          body:
            "Something you can hand over as it is, and something arranged for a table. Two or three clear options done properly beats a long list, particularly in a weekend where everything happens at once.",
        },
        {
          h3: "Early May, which is its own problem",
          body:
            "Mother's Day lands well before an Iowa field is at full tilt, so the early years will lean more on what can be sourced than the rest of the season does. We would rather tell you that than let the day imply otherwise.",
        },
        {
          h3: "Collected here in the days before",
          body:
            "Picked up at the farm across the run up to the weekend rather than everything landing in one hour. Spreading collection out is most of what keeps a small operation from falling over on its busiest day.",
        },
        {
          h3: "A capped number, deliberately",
          body:
            "The number will be small and it will close. Overselling the busiest weekend of the year is how a new floral operation makes a bad first impression on a large number of people at exactly the same time.",
        },
        {
          h3: "Bronte's hand on all of it",
          body:
            "The design work is hers. Mother's Day is the day where the arranging matters most, because for a lot of people it is the one bunch of flowers they buy all year and it needs to be worth the occasion.",
        },
      ],
    },
    process: {
      h2: "How we plan to get to a first year",
      steps: [
        {
          h3: "Prove the fall run first",
          body:
            "Wreaths, garland and centerpieces come first in the calendar and are the lower risk version of the same problem, which is a short seasonal run with a hard date. What that teaches us goes straight into the spring.",
        },
        {
          h3: "Get spring flowers coming",
          body:
            "The more of a Mother's Day bouquet that comes off our own ground the better it is, and early May is a hard ask in this climate. Extending the front of the season is part of what the field has to learn to do.",
        },
        {
          h3: "Open orders early, close them early",
          body:
            "Orders taken well ahead of the weekend and capped at a number we are confident about. A closed order book weeks out is not a sales tactic, it is how everybody actually gets what they were promised.",
        },
        {
          h3: "Grow it one year at a time",
          body:
            "A slightly larger number each year, only once the previous one went smoothly. Mother's Day rewards a farm that is boringly reliable at it far more than one that got big quickly.",
        },
      ],
    },
    context: {
      h2: "Why the busiest day should be the smallest start",
      paragraphs: [
        "Mother's Day compresses more floral demand into two days than any other point in the year. For a large shop that is a logistics exercise they have run many times. For a farm doing it for the first time it is the single easiest place to overcommit and let people down.",
        "The people buying are not casual about it either. For a lot of households this is the one arrangement they buy all year, attached to a specific person and a specific expectation. Getting it wrong is not a small failure, which is precisely why the first version should be small.",
        "There is also a real seasonal constraint worth naming. Early May in Iowa is ahead of the field being at its best, so the first years of this lean harder on sourcing than high summer does. That is a fact about the climate rather than a shortcoming of the plan.",
        "Done well over a few years it becomes one of the fixed points of the floral calendar, alongside the fall wreath run. Two reliable seasonal runs a year is a genuinely solid foundation for a small floral operation to build the rest of its work around.",
      ],
    },
    faq: [
      {
        q: "Can I order for this Mother's Day?",
        a:
          "Not yet. The floral side is starting with the fall run of wreaths and garland, and a spring offering follows from there. The list is where a first Mother's Day run would be announced, well ahead of the weekend.",
      },
      {
        q: "What would you offer?",
        a:
          "A small number of clear options rather than a long list. Something to hand over as it is, and something arranged for a table. Keeping the range short is what makes a busy weekend go smoothly for everyone.",
      },
      {
        q: "Would the flowers be grown here?",
        a:
          "Partly, and less than later in the season. Early May is ahead of an Iowa field being at its best, so the first years will lean more on sourcing than high summer will. We would rather say that plainly.",
      },
      {
        q: "How far ahead would I order?",
        a:
          "Weeks ahead, and orders would close once the number is set. That is not a scarcity tactic. It is the only way a small operation can promise that everybody who ordered gets exactly what they ordered.",
      },
      {
        q: "Could I have it delivered?",
        a:
          "Collection at the farm across the days before the weekend is the plan, because it is what a small operation can genuinely manage on its busiest days. Anything beyond that depends on where the orders turn out to be.",
      },
      {
        q: "How will I hear about it?",
        a:
          "Through the list, well before the weekend. A run this short sells out on a fixed date, so the people on the list are the ones who get a real chance at it rather than finding out afterward.",
      },
    ],
    crossLinks: [
      { label: "Bouquets and arrangements through the season", href: "/bouquets/" },
      { label: "Wreaths and garland, the fall run", href: "/wreaths-and-garland/" },
      { label: "Floral design for events and celebrations", href: "/event-flowers/" },
    ],
    ctaHeading: "Would you order for the day?",
    ctaBody:
      "Knowing roughly how many people would is what decides whether a first year happens and how large it is. Nothing to pay and nothing to cancel.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/diy-flower-buckets/",
    side: "floral",
    draft: false,
    navLabel: "Buckets of Blooms",
    blurb: "Stems by the armful, for people who would rather arrange their own.",
    title: "Buckets of Blooms | Paulsen Farm and Floral, Cass County",
    description:
      "We plan to sell flowers by the bucket from our Cass County, Iowa farm, for people who arrange their own. Here is the shape of it and what has to come first.",
    eyebrow: "Seasonal flowers",
    h1: "Buckets of blooms, for arranging your own",
    seasonNote:
      "Stems by the armful straight out of the field, for people who would rather do the arranging themselves.",
    intro: [
      "We plan to sell flowers by the bucket. Stems straight out of the field, in quantity, for people who would rather do the arranging themselves than have it done for them.",
      "It is the simplest thing a flower farm sells and one of the most useful. A shower, a party, a table full of jars, or somebody doing their own wedding flowers and wanting good stems to work with rather than a finished product.",
      "This one waits squarely on the flower field, which is still going in. What follows is the shape we have in mind, and how much of the field goes toward it depends a great deal on who says they want it.",
    ],
    included: {
      h2: "What we have in mind",
      items: [
        {
          h3: "Stems by the armful",
          body:
            "Enough in one bucket to actually do something with. The whole point is quantity, so somebody can fill a room with jars or put a table together without going back for more halfway through the afternoon.",
        },
        {
          h3: "Whatever the field is best at that week",
          body:
            "A bucket follows the season completely. You are buying into what is at its peak the week you collect rather than choosing from a list, which is both the honest way to sell it and much of the fun of it.",
        },
        {
          h3: "Ordered ahead, cut for you",
          body:
            "Reserved in advance so the stems are cut fresh for the day you need them rather than pulled from whatever is left. For anything with a date attached, that difference is most of what matters.",
        },
        {
          h3: "For showers, parties and a table full of jars",
          body:
            "Anywhere somebody wants a lot of flowers and is happy to arrange them. It is also how people doing their own wedding flowers usually want to buy, and that suits us well because the arranging is the part they wanted to do.",
        },
        {
          h3: "The field, with the design left to you",
          body:
            "You are buying flowers rather than flowers plus somebody else's hands and hours. That is the whole trade, and it is why buckets suit people who genuinely enjoy the arranging and would rather not have it done for them.",
        },
        {
          h3: "Collected at the farm",
          body:
            "Buckets are bulky and they want water, so collection here is by far the most sensible way to move them. It also means you can see what you are getting and ask what will hold up longest before you drive off with it.",
        },
      ],
    },
    process: {
      h2: "What has to happen first",
      steps: [
        {
          h3: "Put the flower field in",
          body:
            "Everything here waits on that. Selling flowers by the armful means having them by the armful, which is a real quantity of ground and a real water supply rather than a few rows near the house.",
        },
        {
          h3: "Learn what this ground grows in volume",
          body:
            "Some things will produce here in the quantity a bucket needs and some will not. A season or two of finding that out is what stops us promising an armful of something the field can only manage a handful of.",
        },
        {
          h3: "Offer it around the peak weeks",
          body:
            "There are a few stretches in a season where a field has genuinely more than it can otherwise sell. Those weeks are where buckets make the most sense for everybody, and they are where a first offering would land.",
        },
        {
          h3: "Take dates ahead once it is proven",
          body:
            "Once the field can be counted on, reserving a bucket for a specific Saturday months out becomes reasonable. Until then it stays tied to weeks we already know are heavy rather than to somebody else's calendar.",
        },
      ],
    },
    context: {
      h2: "Why the simplest product is worth its own page",
      paragraphs: [
        "There is a real appetite for doing your own flowers, and it is not only about cost. A lot of people genuinely enjoy the arranging, or want the jars on their own tables to look like their own tables, and a finished arrangement takes that away from them.",
        "For a flower farm it is also the most direct thing it can offer. No design time, no delivery, no negotiation about a vision. Somebody wants a great many good stems on a particular Saturday and the field either has them or it does not.",
        "It suits the shape of a season too. A field in a heavy week has more than it can sell any other way, and flowers do not keep. Buckets are what turn a glut into something useful instead of something composted, which is why so many flower farms end up offering them.",
        "The catch is honest and worth stating. This needs a field producing in real volume, and ours is still going in. Knowing how many people would actually want a bucket is one of the inputs that decides how much ground goes to cut flowers at all.",
      ],
    },
    faq: [
      {
        q: "Can I buy a bucket now?",
        a:
          "Not yet. The flower field is still going in, and selling by the armful needs it producing in real volume first. The list is where a first offering would be announced, along with the weeks it is available.",
      },
      {
        q: "How much is in a bucket?",
        a:
          "Enough to actually do something with, which is the entire point. The exact quantity gets set once we know what the field produces reliably, and we will say plainly what you are getting before anyone orders.",
      },
      {
        q: "Can I choose the flowers?",
        a:
          "Not really, and that is what makes it work. A bucket is whatever the field is best at that week. If you need specific flowers on a specific day, a designed piece is the better route and worth asking about.",
      },
      {
        q: "Could I use these for a wedding?",
        a:
          "Plenty of people do exactly that. If you or somebody in your family wants to arrange the flowers yourselves, buckets are usually the right way to buy. If you would rather it was designed for you, that is a different conversation.",
      },
      {
        q: "When in the season would these be available?",
        a:
          "Around the weeks the field is heaviest, which is when there is genuinely more than can be sold any other way. Those stretches move a little every year with the weather, so the list is how you catch them.",
      },
      {
        q: "Would I need to bring anything?",
        a:
          "Something to carry them in water is the sensible thing, and a vehicle you do not mind getting a little wet. Flowers cut that morning want a drink very soon after, and the drive home is not the time to skip it.",
      },
    ],
    crossLinks: [
      { label: "Bouquets and arrangements, done for you", href: "/bouquets/" },
      { label: "Floral design for weddings", href: "/wedding-flowers/" },
      { label: "Flower subscriptions, week after week", href: "/flower-subscriptions/" },
    ],
    ctaHeading: "Would you want a bucket?",
    ctaBody:
      "How much ground goes to cut flowers depends on answers like that one. Getting on the list costs nothing and commits you to nothing.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },
];
