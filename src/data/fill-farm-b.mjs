// Paulsen Farm and Floral - fill batch 2, the farm channel pages. 2026-08-25.
//
// /csa/, /farmers-markets/, /wholesale/.
//
// VOICE RULE: see the header of fill-farm-a.mjs. Write it as intent, never as absence.
// No "we do not have", no denials in the opening, and no talk about the website inside
// the copy. Future tense is what keeps it honest.
//
// Specific to this batch:
//   /csa/            Describe how a CSA works and what we intend ours to be. Do NOT state
//                    a share size, a box contents list or a season length as though it is
//                    settled. General facts about how CSAs work are fine, ours are not.
//   /farmers-markets/ NO NAMED MARKETS. Omaha, Atlantic, Winterset and Des Moines were all
//                    floated on the 08-17 call and none were chosen. Naming one is a
//                    promise to stand there. Two markets, likely a weeknight and a
//                    Saturday, is the intent and is written as intent.
//   /wholesale/      No pricing and no terms, in any form. Chefs and buyers negotiate
//                    directly. The page sells consistency and honesty about volume.
export const fillFarmB = [
  {
    slug: "/csa/",
    side: "farm",
    draft: false,
    navLabel: "CSA Farm Shares",
    blurb: "A weekly share of the farm, planned against real households first.",
    title: "CSA Farm Shares | Paulsen Farm and Floral, Cass County IA",
    description:
      "We plan to run a CSA from our Cass County, Iowa farm, sized to the households who sign up first. Here is how a share would work, and how to help us shape it.",
    eyebrow: "How to get it",
    h1: "CSA farm shares, and the season we are planning for",
    seasonNote:
      "A weekly share of what the farm has, paid ahead, and planted against households who signed up first.",
    intro: [
      "A CSA is the arrangement we are working toward here. You buy a share of the season ahead of time, we plant against a number we can count on, and every week through the season you take home whatever the farm has.",
      "It is the piece that turns a farm from a run of separate sales into something steady, and it is the reason we are gathering names now rather than after the ground is planted.",
      "The share is not open yet. What follows is how we intend it to work and what we are still deciding, and the people on the list get first say on both.",
    ],
    included: {
      h2: "How we intend a share to work",
      items: [
        {
          h3: "Paid ahead, planted against",
          body:
            "That is the whole idea behind a CSA and it runs both ways. You commit before the season, which lets us buy seed and plan beds against a real number instead of a hopeful one, and in return you get first claim on everything that comes off the ground.",
        },
        {
          h3: "A weekly box through the season",
          body:
            "Most CSAs run a stretch of about twenty weeks across the summer. Ours will be shaped by what this ground can actually carry rather than by a number copied off somebody else's farm, and we will say plainly what the season looks like before anyone commits.",
        },
        {
          h3: "What the farm has, not a catalogue",
          body:
            "A share is not an order form. Some weeks are heavy on greens, some are heavy on roots, and every week is decided by what is ready rather than what was requested. That is the trade, and for most households it turns out to be the good part.",
        },
        {
          h3: "Room for the rest of the farm in it",
          body:
            "Vegetables are the backbone of a share, but a farm doing chicken, eggs and storage crops has more to offer than a market garden alone. How much of that belongs in a share and how much is better bought separately is genuinely still open.",
        },
        {
          h3: "Collected here, alongside everything else",
          body:
            "Pickup at the farm already works well, so a share slots into the trip people are making anyway. One stop covers the box, the chicken and whatever else is ready that week rather than turning a share into a separate errand.",
        },
        {
          h3: "Sized so everyone actually gets one",
          body:
            "A first season will be a small and clearly capped number of shares. Overselling a CSA is the classic way a new farm loses the people who believed in it early, and we would rather turn someone away in March than short them in August.",
        },
      ],
    },
    process: {
      h2: "How we plan to get a first season running",
      steps: [
        {
          h3: "Build the list before the beds",
          body:
            "Knowing who wants a share, and roughly what they want in it, is what makes the planting plan real. That is why the list comes first. It is the cheapest and most accurate market research a small farm has access to.",
        },
        {
          h3: "Get the market beds producing",
          body:
            "A share needs a garden behind it that produces reliably rather than heroically. That means a season or two of market vegetables running properly before anyone is asked to pay ahead for twenty weeks of them.",
        },
        {
          h3: "Add the storage crops that carry the shoulders",
          body:
            "Garlic, onions, squash and potatoes are what let a share start earlier and run later than high summer. They also need somewhere cool to sit, which is part of what we are building at the back place.",
        },
        {
          h3: "Open a small first season",
          body:
            "A capped number of shares, offered to the list before anywhere else, with the season length and the pickup rhythm spelled out in full before anybody pays anything. Then we grow it only as fast as the ground can carry.",
        },
      ],
    },
    context: {
      h2: "Why a share is the arrangement worth building",
      paragraphs: [
        "A farm that sells one thing a few times a year is a nice thing to have nearby. A farm you see every week for half the year is something else entirely. The share is what makes that second relationship possible, and it is the reason it sits at the center of the plan rather than off to the side.",
        "It also changes what a small farm can afford to do well. Knowing in March how many households are counting on you in July is the difference between planting cautiously and planting properly. Nearly every decision about seed, beds and labor gets better when the number is real.",
        "There is a version of this that is about more than vegetables. Alex talks about food as the thing everything else bottoms out in, and about how much of that a household can take back with a few deliberate decisions. A standing weekly box from a farm you could drive to is one of the simplest of those decisions anyone can make.",
        "The honest constraint is that a share only works if the farm behind it can deliver every single week, in a bad August as well as a good one. That is why we are building toward it rather than opening it, and why the water and storage at the back place are part of the same conversation.",
      ],
    },
    faq: [
      {
        q: "Can I sign up for a share now?",
        a:
          "Not yet, but you can get on the list, which is the step that matters most right now. The number of households waiting is what tells us how many shares a first season should hold and how soon it is worth opening one.",
      },
      {
        q: "What actually is a CSA?",
        a:
          "Community supported agriculture. You buy a share of the season up front, the farm plants against that commitment, and you collect a box of whatever is ready each week through the season. The risk and the abundance are shared.",
      },
      {
        q: "How long would the season run?",
        a:
          "Most CSAs run somewhere around twenty weeks across the summer. Ours will be set by what this ground can genuinely carry, and we will publish the exact season length before anyone is asked to commit to anything.",
      },
      {
        q: "What would be in the box?",
        a:
          "Salad greens, roots, brassicas and tomatoes make up the backbone of most weeks, with storage crops carrying the shoulders of the season. The exact mix is still open, and what people on the list ask for will shape it.",
      },
      {
        q: "Could I add chicken or eggs to a share?",
        a:
          "That is one of the questions we are still working through. A farm running poultry alongside vegetables can build a fuller share than a market garden alone, and whether people want that bundled or kept separate is worth asking first.",
      },
      {
        q: "How would pickup work?",
        a:
          "Collected at the farm, alongside anything else ready that week. Pickup is already how the chicken moves, so a share would use the same rhythm rather than adding a second trip or a separate arrangement to keep track of.",
      },
    ],
    crossLinks: [
      { label: "Market vegetables, and what we plan to grow", href: "/market-vegetables/" },
      { label: "Garlic and the storage crops that carry a season", href: "/garlic/" },
      { label: "How pickup at the farm works", href: "/farm-pickup/" },
    ],
    ctaHeading: "Would you take a weekly share?",
    ctaBody:
      "Your answer is what decides how many shares a first season holds and how soon it opens. Nothing to pay and nothing to commit to yet.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/farmers-markets/",
    side: "farm",
    draft: false,
    navLabel: "Farmers Markets",
    blurb: "Two markets a week is the plan, once we know where we are most useful.",
    title: "Farmers Markets | Paulsen Farm and Floral in Cass County",
    description:
      "We plan to stand at two farmers markets every week from our Cass County, Iowa farm. Here is how we intend to choose the two, and how to tell us where to be.",
    eyebrow: "How to get it",
    h1: "Farmers markets, and the two we plan to stand at",
    seasonNote:
      "Two markets a week is the plan. Which two is a decision we would rather make with your help.",
    intro: [
      "We plan to sell at farmers markets. Two a week is the shape we have in mind, most likely one weeknight and one Saturday, which is about what a farm this size can hold up alongside everything else.",
      "Which two markets is genuinely still open, and it is a bigger decision than it looks. A market is a standing commitment for a whole season, so it is worth choosing carefully rather than signing up for whichever one has space.",
      "We are not going to name markets before they are chosen, because putting a market on a page is a promise to be standing there every week. When they are settled you will find them here, and the list will hear first.",
    ],
    included: {
      h2: "What we intend to bring to a market table",
      items: [
        {
          h3: "Vegetables in real quantity",
          body:
            "Salad greens, roots, brassicas and tomatoes, in enough volume that somebody can plan a week of meals around what is on the table rather than picking up a garnish. A thin table is worse than no table at all.",
        },
        {
          h3: "Flowers alongside the food",
          body:
            "One of the advantages of a farm with a floral side is that a market table can carry both. Bunches cut that week sitting next to the vegetables is a good stall, and it introduces the two halves of this business at once.",
        },
        {
          h3: "Seasonal runs, announced ahead",
          body:
            "Wreaths and garland in the late fall, and whatever else has a short window. The people on the list will know what is coming to a market before the market does, which is much of the point of keeping a list at all.",
        },
        {
          h3: "The people who grew it",
          body:
            "You get to ask the person who raised it how it was raised. That is most of the value of a farmers market and it is the part that cannot be replicated by any other channel, so we intend to be standing there ourselves.",
        },
        {
          h3: "Honest answers about the week",
          body:
            "Some weeks a market garden has plenty and some weeks it has greens and not much else. We would rather tell you that straight and point you at what is genuinely good this week than talk up whatever is left on the table.",
        },
        {
          h3: "A way to find the farm",
          body:
            "For most people a market stall is the first meeting. It is where somebody decides whether they want to know more, get on the list, or make the drive out for a batch of chicken later in the season.",
        },
      ],
    },
    process: {
      h2: "How we plan to choose the two",
      steps: [
        {
          h3: "Work out where our people already are",
          body:
            "Between the Omaha side and the Des Moines side there are more markets within reach than a farm this size could ever stand at. The right two are the ones where the households who want this kind of food are already shopping.",
        },
        {
          h3: "Match them to a week that is survivable",
          body:
            "A weeknight market and a Saturday market is roughly the load a farm can carry while still doing everything else. Two markets done properly beats four done in a hurry, and market days eat far more than the hours they occupy.",
        },
        {
          h3: "Grow the beds to fill a table",
          body:
            "Standing at a market with a thin table is worse than not going. The planting has to be sized to fill two stalls a week for a whole season before either one is worth the drive and the stall fee.",
        },
        {
          h3: "Commit, then say so publicly",
          body:
            "Once the two are chosen we will name them here and tell the list, and then we intend to be there every week the market runs. Turning up reliably is most of what builds a following at a market.",
        },
      ],
    },
    context: {
      h2: "Why markets matter more than the sales suggest",
      paragraphs: [
        "Alex is clear eyed about markets. They are very labor intensive, and the hours are much longer than the ones you stand at the table for. What you get in exchange is being in front of people, with built in traffic, which is worth a great deal to a farm nobody has heard of yet.",
        "The sales themselves are almost the smaller half. A market is where somebody tastes something, asks a question, and decides whether they like the people behind the table. Alex learned that running a coffee cart, where the drink was the product and the reason people came back was something else entirely.",
        "The other reason is that markets teach you quickly. A season of standing in front of customers every week tells you what people around here actually want, in a way no amount of planning does. That feeds straight back into what goes in the ground the following spring.",
        "So markets are how a new farm gets known, gets corrected, and finds the households who will later take a share or drive out for a batch of chicken. That is why two of them sit in the plan for the first real year.",
      ],
    },
    faq: [
      {
        q: "Which markets will you be at?",
        a:
          "Not settled yet, and we would rather leave it blank than name one we have not committed to. Once two are chosen they will be listed here and sent to the list, along with the days and the season they run.",
      },
      {
        q: "Why only two markets?",
        a:
          "Because two done properly beats four done badly. Market days consume far more time than the hours at the table, and a farm still raising birds and running a floral side has a hard ceiling on how many it can carry well.",
      },
      {
        q: "What would you bring?",
        a:
          "Vegetables in real quantity, flowers cut that week, and seasonal runs like wreaths and garland in the late fall. What is on the table any given week depends entirely on what is genuinely ready.",
      },
      {
        q: "Can I ask you to come to my market?",
        a:
          "Please do. Knowing where the people who want this food already shop is exactly what we need to choose well, and a market suggested by somebody who actually goes to it is worth far more than one picked off a list.",
      },
      {
        q: "Could I order ahead and collect at a market?",
        a:
          "That is the kind of arrangement we would like to make work, because it saves you a trip out to the farm and saves us guessing at quantities. It is on the list of things to sort out once the markets themselves are settled.",
      },
      {
        q: "How will I know when you start?",
        a:
          "Through the list. Markets get announced there first, with the days and the season, well before the first Saturday. It is also where you will hear about anything with a short window, like a fall wreath run.",
      },
    ],
    crossLinks: [
      { label: "Market vegetables, and what we plan to grow", href: "/market-vegetables/" },
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
      { label: "Wreaths, garland and seasonal centerpieces", href: "/wreaths-and-garland/" },
    ],
    ctaHeading: "Where should we be standing?",
    ctaBody:
      "If there is a market you already shop at, telling us is genuinely useful. It is one of the cheapest decisions to get right and the most expensive to get wrong.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/wholesale/",
    side: "farm",
    draft: false,
    navLabel: "Restaurants and Grocers",
    blurb: "Chefs and small grocers, once we can promise volume week after week.",
    title: "Restaurants and Grocers | Paulsen Farm and Floral, Iowa",
    description:
      "We plan to supply chefs and small grocers from our Cass County, Iowa farm once volume is reliable. Here is what we intend to offer and how to start talking.",
    eyebrow: "How to get it",
    h1: "Restaurants and grocers, and what we plan to supply",
    seasonNote:
      "Supplying kitchens and small grocers is further out, and it waits on volume we can promise every week.",
    intro: [
      "We plan to sell to restaurants and small grocers. Kitchens between Omaha and Des Moines, and the kind of local shop that would rather carry something from an hour away than something from a thousand miles away.",
      "It is further out than the other ways of buying from us, and for a straightforward reason. A chef building a menu around an ingredient needs it to arrive every week at a consistent quality, and that is a promise a farm has to earn before it makes it.",
      "What follows is what we intend to offer and what has to be true first. If you run a kitchen or a shop and want to be part of that conversation early, we would very much like to hear from you.",
    ],
    included: {
      h2: "What we intend to offer a buyer",
      items: [
        {
          h3: "A short list, in real volume",
          body:
            "Better to supply three things a kitchen can rely on every week than fifteen that come and go. We would rather grow deep on a handful of crops that a chef actually builds around than offer a catalogue we cannot keep filled.",
        },
        {
          h3: "One drive, not a supply chain",
          body:
            "The farm sits directly on Interstate 80, roughly fifty five minutes from the Omaha side and about an hour from most of Des Moines. Produce that is picked and delivered inside a day arrives in a different condition than produce that has been in transit.",
        },
        {
          h3: "A crop plan you can influence",
          body:
            "A chef who tells us in winter what they want in July can have it planted for them. That kind of arrangement is one of the real advantages of buying from a small farm, and it is far easier to do well than most people expect.",
        },
        {
          h3: "Storage crops for the off months",
          body:
            "Garlic, onions, squash and potatoes hold for months, which makes them the easiest thing for a farm this size to supply reliably outside the growing season. They are likely where a wholesale relationship starts rather than ends.",
        },
        {
          h3: "Flowers for the front of house",
          body:
            "The floral side can supply arrangements for a dining room or a shop counter on a standing basis. A restaurant that wants both the produce and the flowers from one local farm is exactly the kind of relationship we are built for.",
        },
        {
          h3: "A straight answer about volume",
          body:
            "If we cannot supply what a kitchen needs, we will say so rather than overcommit and fall short mid season. A chef who has been let down once does not come back, and that reputation travels faster than any amount of good produce.",
        },
      ],
    },
    process: {
      h2: "What has to be true before we sell wholesale",
      steps: [
        {
          h3: "Reliable volume first",
          body:
            "Selling to a kitchen means committing to a quantity every week for a season. That takes beds in full production and a harvest we can predict, which is why direct sales and markets come first in the plan.",
        },
        {
          h3: "Storage and handling in place",
          body:
            "A cool room and proper handling are what let produce leave here in the condition a chef expects. That infrastructure is part of what we are building at the back place, and it gates this channel more than anything else.",
        },
        {
          h3: "Start with one or two kitchens",
          body:
            "The sensible beginning is a small number of buyers who want a short list of things, done properly, for a season. Getting that right is worth more than a long customer list we cannot serve consistently.",
        },
        {
          h3: "Plan the following season together",
          body:
            "Once a relationship works, the good version of it is a conversation each winter about what to plant. That is where a small farm and a good kitchen become genuinely useful to each other rather than just convenient.",
        },
      ],
    },
    context: {
      h2: "Why this channel is worth building slowly",
      paragraphs: [
        "Wholesale looks like the obvious way for a small farm to move volume, and it is also the fastest way to get into trouble. The commitment runs one direction. A kitchen that has built a dish around your produce needs it on Tuesday whether or not your week went well.",
        "That is why it sits later in the plan than markets and direct sales. Those channels let a farm learn its own capacity with a great deal more forgiveness, and a farm that knows its real numbers is the only kind that should be promising a chef anything.",
        "There is a version of this that is genuinely good for both sides. A kitchen an hour away that plans its spring menu with the farm that will grow it has something no distributor can offer, and a farm with two or three of those relationships has a floor under its season.",
        "The geography helps more than it usually would. Being on Interstate 80 between two metros means a delivery run is genuinely practical in either direction, which is not true of most farms this size in this part of the state.",
      ],
    },
    faq: [
      {
        q: "Can I buy from you wholesale now?",
        a:
          "Not yet. The farm is still building the production and the storage that a reliable weekly supply depends on. We would rather have the conversation early and start when we can actually deliver than take an order we might miss.",
      },
      {
        q: "What would you supply first?",
        a:
          "Most likely storage crops such as garlic, onions, squash and potatoes, because they hold for months and are the easiest thing to supply consistently. Fresh produce and flowers follow once the beds are in full production.",
      },
      {
        q: "How far would you deliver?",
        a:
          "The farm is on Interstate 80, roughly fifty five minutes from the Omaha side and about an hour from most of Des Moines, so both directions are practical. How often a run happens depends on how many kitchens are on it.",
      },
      {
        q: "Could I ask you to grow something specific?",
        a:
          "Yes, and that is one of the better reasons to buy from a farm this size. A chef who says in winter what they want in July can have it planted for them, which is not something a distributor can offer at any volume.",
      },
      {
        q: "Do you supply flowers as well as produce?",
        a:
          "That is the intent. The floral side can put arrangements on a standing schedule for a dining room or a shop counter, and a single local source for both the produce and the flowers is a genuinely useful thing for a restaurant.",
      },
      {
        q: "How should I start a conversation?",
        a:
          "Get in touch and tell us what you use and roughly how much of it. Early conversations shape what goes in the ground, so a kitchen that talks to us now has real influence over what is available later.",
      },
    ],
    crossLinks: [
      { label: "Market vegetables, and what we plan to grow", href: "/market-vegetables/" },
      { label: "Garlic and the storage crops that keep", href: "/garlic/" },
      { label: "Floral design for events and celebrations", href: "/event-flowers/" },
    ],
    ctaHeading: "Run a kitchen or a shop?",
    ctaBody:
      "Tell us what you use and roughly how much. Conversations that happen now are the ones that change what gets planted next spring.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact/",
  },
];
