// Paulsen Farm and Floral - fill batch 4, the on-the-farm visit pages. 2026-08-25.
//
// /seasons/, /farm-store/, /u-pick-flowers/.
//
// VOICE RULE: see the header of fill-farm-a.mjs. Intent, never absence. No website
// self-commentary. American spelling.
//
// These three sit under the /visit/ hub and describe the agritourism side, which is the
// furthest out part of the plan. They are written as the shape of something being built
// toward, not as an invitation to turn up.
//
// HARD CONSTRAINTS SPECIFIC TO THIS BATCH:
//   - NO STREET ADDRESS, NO DIRECTIONS, NO HOURS, anywhere, on any of them. The address
//     decision has never been made and nothing is approved for public release. /farm-store/
//     leans hardest on this: it is a page about a place people would drive to, written
//     without ever telling them where to drive. It says directions get published when it
//     opens, which is true and is the only honest way to write it.
//   - It is a working family home. Nothing here invites a drop in visit.
//   - /u-pick-flowers/ waits entirely on the flower field, which is still going in.
//   - No pricing. The child appears in nothing.
export const fillVisitA = [
  {
    slug: "/seasons/",
    side: "farm",
    draft: false,
    navLabel: "Seasons on the Farm",
    blurb: "What a year here looks like, and when each thing comes around.",
    title: "Seasons on the Farm | Paulsen Farm and Floral, Cass County",
    description:
      "A year on our Cass County, Iowa farm, from chicks in spring to wreaths in December. Here is when each thing comes around and what we are building toward next.",
    eyebrow: "Visit",
    h1: "Seasons on the farm, and what comes when",
    seasonNote:
      "A year here, laid out in order. Some of it is running now and the rest is what we are building toward.",
    intro: [
      "A farm runs on a calendar rather than on a schedule. Things come ready when they are ready, and most of what we sell has a window rather than a shelf life.",
      "Laying the year out in order is the most useful thing we can give somebody trying to decide when to pay attention to us. It also shows the shape of the business better than any list of products does.",
      "Some of what follows is happening now and a good deal of it is what we are working toward. It is all here in the order it would fall across a year.",
    ],
    included: {
      h2: "The year, in order",
      items: [
        {
          h3: "Late winter, the planning stretch",
          body:
            "The quietest months and the ones that decide the rest of the year. Seed gets ordered, birds get booked, beds get planned, and the number of people on the list is what most of those decisions get made against.",
        },
        {
          h3: "Spring, everything starting at once",
          body:
            "Chicks arrive, the first seeding goes in, and the flower field wakes up. Spring is the month where a farm makes most of its commitments for the year, which is why we would rather hear from you before it than during it.",
        },
        {
          h3: "Early summer, the first real food",
          body:
            "The first broilers come ready, the earliest greens are cut, and the flowers start. This is when a farm stops being a plan and starts being something you can drive out and collect, which is a good week every single year.",
        },
        {
          h3: "High summer, the heaviest stretch",
          body:
            "Everything at once. Birds, beds, flowers and markets in the same week, with the weather deciding a great deal of it. It is the hardest part of the year to keep on top of and the most rewarding to get right.",
        },
        {
          h3: "Fall, harvest and the turn",
          body:
            "Storage crops come out of the ground and into a cool room, the last birds finish, and the floral side turns from cut flowers toward wreaths and garland. Two very different halves of the same season.",
        },
        {
          h3: "November and December, the wreath run",
          body:
            "The busiest short stretch on the floral side. Wreaths, garland and centerpieces, made in a limited run, sold ahead, and finished when they are finished. Eventually turkeys land in the same weeks, which will make for a full month.",
        },
      ],
    },
    process: {
      h2: "How to follow along through a year",
      steps: [
        {
          h3: "Get on the list first",
          body:
            "Nearly everything here has a window rather than a season, and most of it sells to the people who already knew it was coming. The list exists so you are not finding out about a run after it has closed.",
        },
        {
          h3: "Tell us what you are watching for",
          body:
            "Chicken, flowers, wreaths, a share, a bird for the holiday. Knowing what you are actually waiting on lets us tell you the right things rather than everything, which is a better arrangement for both sides.",
        },
        {
          h3: "Order in the window",
          body:
            "Almost everything on this farm is worth reserving ahead rather than turning up for. Batches are finite, runs close, and a farm this size would rather cap a number than disappoint somebody who drove out.",
        },
        {
          h3: "Come out when there is something to collect",
          body:
            "Pickup is how nearly everything moves. It is a working farm and a family home rather than somewhere open to walk around, so a trip out is tied to something that is actually ready for you.",
        },
      ],
    },
    context: {
      h2: "Why the calendar is the honest way to describe a farm",
      paragraphs: [
        "A shop can promise the same thing every week of the year. A farm cannot, and the ones that appear to are usually buying most of it in. Laying out the year in order is the clearest way of showing what a place actually produces and when.",
        "It also sets expectations properly. Somebody who understands that broilers come in batches a few times across the summer, and that wreaths happen in one short run in the late fall, is a much easier customer to serve well than somebody expecting a shop.",
        "The calendar is also how the two halves of this business fit together. The floral side is heaviest in exactly the weeks the farm side is quieting down, and the farm side peaks when flowers are at their most abundant. That is not a coincidence, it is most of why one family can run both.",
        "Read down the year and you can see where this is going. The current version is a handful of those entries running properly. The full version is all of them, plus a place people drive out to, which is a decade of work rather than a plan for next year.",
      ],
    },
    faq: [
      {
        q: "When is chicken available?",
        a:
          "Broilers come ready in batches across the summer rather than continuously. Each batch is reserved ahead and collected at the farm, so the list is how you catch one rather than turning up and hoping.",
      },
      {
        q: "When are wreaths available?",
        a:
          "Late fall, in a limited run through November and into December. They are made in a batch, sold ahead, and finished when the run is finished. It is the shortest and busiest window in the whole year.",
      },
      {
        q: "What is happening on the farm right now?",
        a:
          "The farm side is broiler chickens sold direct, and the floral side is design work plus the seasonal fall run. Everything else described across the year is either just starting or is something we are working toward.",
      },
      {
        q: "Can I come out and look around?",
        a:
          "Not at the moment. It is a working farm and a family home rather than somewhere set up for visitors. Trips out are tied to collecting something that is ready, and the wider visiting side is years off.",
      },
      {
        q: "What is the quietest time to get hold of you?",
        a:
          "Late winter, easily. It is when the planning happens and when there is genuinely time to talk. If you want to shape what gets grown or raised in a coming year, that is the stretch to be in touch.",
      },
      {
        q: "How do I keep track of all of this?",
        a:
          "Through the list. It is built for exactly this problem, because a farm year has too many small windows for anyone to keep in their head. We send what is coming rather than everything that exists.",
      },
    ],
    crossLinks: [
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
      { label: "Wreaths, garland and seasonal centerpieces", href: "/wreaths-and-garland/" },
      { label: "How pickup at the farm works", href: "/farm-pickup/" },
    ],
    ctaHeading: "Which part of the year is yours?",
    ctaBody:
      "Tell us what you are watching for and we will tell you when it is coming, rather than sending you everything. The list is the whole mechanism.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/farm-store/",
    side: "farm",
    draft: false,
    navLabel: "The Farm Store",
    blurb: "A place to buy what the farm has, further out than most of the plan.",
    title: "The Farm Store | Paulsen Farm and Floral, Cass County Iowa",
    description:
      "A farm store is part of the long term plan for our Cass County, Iowa farm. Here is what we would want it to hold and what has to happen before it can open.",
    eyebrow: "Visit",
    h1: "The farm store, and what we would want it to be",
    seasonNote:
      "A place to buy what the farm has, in person. Further out than most of the plan and worth getting right.",
    intro: [
      "A farm store is part of where this is headed. Somewhere you can walk in, see what the farm has that week, and take it home without having ordered ahead.",
      "It is a genuinely different thing from ordering and collecting, which is how everything moves today. A store means being open on somebody else's schedule rather than our own, and that is a real commitment for a family running everything themselves.",
      "So this one sits further out than most of the plan. What follows is what we would want it to be, and what has to be true before it makes sense.",
    ],
    included: {
      h2: "What we would want it to hold",
      items: [
        {
          h3: "Whatever the farm has that week",
          body:
            "Chicken from the freezer, eggs when there are eggs, vegetables in season, and flowers when the field is cutting. The whole appeal of a farm store is that it shows you honestly what a place is producing right now.",
        },
        {
          h3: "Storage crops through the cold months",
          body:
            "Garlic, onions, squash and potatoes are what keep a farm store worth visiting between November and April. Without keeping crops a store is a summer thing, and a summer thing is much harder to make worthwhile.",
        },
        {
          h3: "The seasonal runs, in person",
          body:
            "Wreaths and garland in the late fall, and bunches of flowers through the summer. Some things are far easier to sell when somebody can see them, and both of those are squarely in that category.",
        },
        {
          h3: "Simple enough for a working farm to run",
          body:
            "Whatever we build has to survive a July when everybody is already flat out. A small, well stocked space that is genuinely easy to keep going beats an ambitious one that quietly stops being open.",
        },
        {
          h3: "Somewhere to actually talk",
          body:
            "Much of the value of buying from a farm is being able to ask the person who grew it. A store is the easiest version of that, because the conversation happens without either side having arranged anything.",
        },
        {
          h3: "A reason to make the drive",
          body:
            "The farm sits directly on Interstate 80, roughly fifty five minutes from the Omaha side and about an hour from most of Des Moines. Very little in Iowa is that easy to reach from both, and a store is the plainest use of it.",
        },
      ],
    },
    process: {
      h2: "What has to happen before it opens",
      steps: [
        {
          h3: "Enough production to fill it",
          body:
            "A store with three things on the shelf is not worth anyone's drive, or ours. That means the vegetables, the eggs and the storage crops all running properly first, which is most of the rest of the plan.",
        },
        {
          h3: "Somewhere sensible to put it",
          body:
            "A store needs a building, parking and a way in that does not run through a family's front yard. Sorting that out properly is a large part of what the move to the back place is meant to make possible.",
        },
        {
          h3: "Hours a family can actually keep",
          body:
            "Being open is a promise, and a promise nobody can keep is worse than no store. Whatever the hours end up being, they will be ones that survive a bad week rather than ones that look good on a page.",
        },
        {
          h3: "Publish exactly where and when",
          body:
            "When there is a store to visit, the location and the hours go up here, plainly, and go out to the list. Until then we are not putting an address on a working family home, which is a deliberate decision rather than an oversight.",
        },
      ],
    },
    context: {
      h2: "Why a store is a bigger step than it looks",
      paragraphs: [
        "Everything this farm sells today is ordered ahead and collected. That works because it puts the timing in our hands. A store inverts that completely. It means being there whether or not three people show up, on days chosen months in advance.",
        "For a family running the growing, the raising, the floral work and the markets between them, that is a genuine commitment rather than an extra revenue line. It is the reason so many small farms take years to open one and some very sensibly never do.",
        "What makes it worth working toward here is the road. Being directly on Interstate 80 between two metros is unusual, and a store is the simplest way to turn that from an interesting fact into something useful. It is also the first step toward the wider version of this place people drive out to spend an afternoon at.",
        "So it stays on the plan and it stays honest about its position in the queue. Production first, a proper spot for it second, and hours we can keep third. When those line up we will say so clearly, with directions.",
      ],
    },
    faq: [
      {
        q: "Is there a farm store I can visit?",
        a:
          "Not yet. Everything today is ordered ahead and collected at the farm rather than bought from a shelf. A store is part of the longer term plan and it will be announced here and to the list when it is real.",
      },
      {
        q: "Where would it be?",
        a:
          "Somewhere on the farm with a sensible way in and parking, which is part of what the move to the back place is meant to make possible. We will publish the location plainly once there is something to visit.",
      },
      {
        q: "Why is there no address on here?",
        a:
          "Because it is a working farm and a family home rather than a business open to the public. Putting an address up would invite people to turn up somewhere that is not set up for them. It goes up when a store does.",
      },
      {
        q: "What would you sell in it?",
        a:
          "Whatever the farm has that week. Chicken, eggs, vegetables in season, flowers while the field is cutting, and storage crops through the colder months so it stays worth visiting outside of high summer.",
      },
      {
        q: "How can I buy from you in the meantime?",
        a:
          "Order ahead and collect at the farm. That is how the chicken already moves and it works well. Getting on the list is how you hear when a batch or a run is coming so you can put your name on it.",
      },
      {
        q: "When would a store open?",
        a:
          "We are not naming a year for it. It waits on production filling it, a proper spot for it, and hours a family can genuinely keep. Those are real conditions rather than a schedule, and the list hears first.",
      },
    ],
    crossLinks: [
      { label: "How pickup at the farm works today", href: "/farm-pickup/" },
      { label: "Seasons on the farm, and what comes when", href: "/seasons/" },
      { label: "Garlic and the storage crops that keep", href: "/garlic/" },
    ],
    ctaHeading: "Would you drive out for it?",
    ctaBody:
      "Knowing whether people would actually make the trip is a large part of what decides whether a store is worth building. Tell us on the list.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/u-pick-flowers/",
    side: "floral",
    draft: false,
    navLabel: "U-Pick Flowers",
    blurb: "Cut your own, out in the field, once there is a field to cut from.",
    title: "U-Pick Flowers | Paulsen Farm and Floral, Cass County Iowa",
    description:
      "Cutting your own flowers out in the field is part of the plan for our Cass County, Iowa farm. Here is what we have in mind and what has to be growing first.",
    eyebrow: "Visit",
    h1: "U-pick flowers, and the field it waits on",
    seasonNote:
      "Cut your own, out in the field, on the weeks it is at its best. It waits on a field to cut from.",
    intro: [
      "Cutting your own flowers is one of the things we would most like this farm to offer. You walk out into the field, cut what you want, and take it home having chosen every stem yourself.",
      "It is a completely different thing from buying a bouquet, and people who have done it tend to be very clear about which they prefer. An hour in a flower field on a summer evening is most of the point.",
      "This one waits squarely on the field, which is still going in. What follows is the shape we have in mind and what has to be growing before it can happen.",
    ],
    included: {
      h2: "What we have in mind",
      items: [
        {
          h3: "Out in the field, cutting your own",
          body:
            "Rows you walk between with something to cut with and something to carry them in. What you go home with is what caught your eye rather than what somebody else chose, and that turns out to matter to people a great deal.",
        },
        {
          h3: "Only on the weeks it is at its best",
          body:
            "A u-pick field has to be genuinely full to be worth anyone's time. That means opening it on the stretches where the field has more than it can sell any other way, rather than every weekend through a season.",
        },
        {
          h3: "Planted with cutting in mind",
          body:
            "A field somebody walks into is planted differently from one a grower harvests alone. Row spacing, height, what is in bloom together at the same moment. Getting that right is what makes the hour enjoyable rather than awkward.",
        },
        {
          h3: "An hour rather than an errand",
          body:
            "This is the one thing on the farm that is worth doing for its own sake. People come out for flowers and stay because it is a good place to be for a while, which is exactly the shape the longer term plan takes.",
        },
        {
          h3: "Booked ahead, in numbers the field can take",
          body:
            "A field can only be cut by so many people before it stops looking like a field. Booking ahead keeps it good for everybody who comes, and means nobody drives out to something that has already been picked over.",
        },
        {
          h3: "The first real reason to visit",
          body:
            "Nearly everything else here is collected and taken home. U-pick is the first piece of the plan where the visit itself is the product, which is why it matters more than its size suggests.",
        },
      ],
    },
    process: {
      h2: "What has to happen first",
      steps: [
        {
          h3: "The flower field has to exist",
          body:
            "Not a few rows near the house. A real field, with real water, planted at a size where a group of people cutting from it does not empty it. That is the single condition everything else here depends on.",
        },
        {
          h3: "Learn what blooms together here",
          body:
            "A good cutting field has several things at their peak at once, repeatedly, through a season. Working out which varieties do that on this ground takes a couple of years of watching rather than a planting plan.",
        },
        {
          h3: "Sort out how people actually arrive",
          body:
            "Somewhere to park, a way in that does not run past a family's back door, and a route out to the field. That is part of what the move to the back place is meant to make possible rather than something to improvise.",
        },
        {
          h3: "Open a few dates and see",
          body:
            "A handful of booked sessions on the weeks the field is heaviest, kept small, before it becomes anything more regular. What that teaches us decides whether it grows into a fixture or stays occasional.",
        },
      ],
    },
    context: {
      h2: "Why cutting your own is worth building toward",
      paragraphs: [
        "Almost nothing else this farm plans to offer is an experience rather than a product. Chicken, vegetables and storage crops are all collected and taken home. U-pick is the first thing on the list where the hour spent here is most of what somebody is actually coming for.",
        "That matters because of where this place is eventually pointed. The long term version of this farm is somewhere people drive out to for an afternoon, and the road makes that plausible in a way it is not for most farms this size. U-pick is the smallest, most honest first version of it.",
        "It also fits how a flower field actually behaves. There are weeks where a field produces far more than any small grower can cut, sell and deliver before it goes over. Letting people cut their own on exactly those weeks solves a real problem rather than inventing a service.",
        "For now it stays behind the field itself, which is the honest order. There is no version of this that works without a large, well planted, well watered field, and that is what is being built toward at the back place.",
      ],
    },
    faq: [
      {
        q: "Can I come and cut flowers now?",
        a:
          "Not yet. The flower field is still going in, and u-pick needs a field large enough that a group cutting from it does not empty it. It will be announced here and to the list when there is something to walk into.",
      },
      {
        q: "How would it work?",
        a:
          "Booked ahead for a particular date, with a set number of people, out in the field cutting your own. Booking is what keeps the field good for everybody rather than picked over by the third visitor of the day.",
      },
      {
        q: "When in the season would it happen?",
        a:
          "On the weeks the field is heaviest, which is when there is genuinely more than can be sold any other way. Those stretches shift a little every year with the weather, so dates would be announced rather than fixed.",
      },
      {
        q: "What is the difference from buying a bucket?",
        a:
          "With a bucket we cut the stems and you collect them. With u-pick you walk the field and choose every stem yourself. Same flowers, completely different afternoon, and people tend to have a strong preference.",
      },
      {
        q: "Would I need to bring anything?",
        a:
          "Something to carry them in water, and shoes you do not mind getting muddy. A field is a field. We would say clearly what to bring and what we provide well before anybody drives out.",
      },
      {
        q: "How do I hear when this starts?",
        a:
          "Through the list. U-pick dates would be tied to specific weeks and capped at a number, so the people on the list are the ones with a real chance at a spot rather than hearing about it afterward.",
      },
    ],
    crossLinks: [
      { label: "Buckets of blooms, cut for you", href: "/diy-flower-buckets/" },
      { label: "Bouquets and arrangements through the season", href: "/bouquets/" },
      { label: "The back place, and the water this depends on", href: "/nelson-farm/" },
    ],
    ctaHeading: "Would you come out and cut?",
    ctaBody:
      "How many people want to is part of what decides how much ground goes to cut flowers and how the field gets laid out. Tell us on the list.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },
];
