// Paulsen Farm and Floral - fill batch 5, the last one. 2026-08-25.
//
// /farm-dinners/, /workshops/, /school-groups/, /private-events/, /how-we-farm/.
//
// VOICE RULE: see the header of fill-farm-a.mjs. Intent, never absence. No website
// self-commentary. American spelling.
//
// HARD CONSTRAINTS SPECIFIC TO THIS BATCH:
//   - NO STREET ADDRESS, NO DIRECTIONS, NO HOURS. Same as batch 4. These are pages about
//     coming to a place, written without ever saying where the place is.
//   - /private-events/ MUST state plainly that the farm is not a wedding venue. That is the
//     exact confusion the page invites, Alex answered it directly on the 08-17 call, and
//     /wedding-flowers/ has said the same thing since launch.
//   - /school-groups/ carries NO liability, insurance, safety-policy or supervision
//     language of any kind. The Iowa Code ch. 673A agritourism question is completely open
//     and nobody has looked at it. Writing around it would be worse than leaving it out:
//     the page describes what a morning would be and nothing about who is responsible for
//     what. That gets settled with a lawyer, not with copy.
//   - /how-we-farm/ is the one Spencer specifically greenlit from the 08-17 transcript.
//     It is about PRINCIPLE and INTENT. It contains no husbandry, feed, certification or
//     processing claim beyond "raised outdoors on pasture", because none of that is on
//     file. isStory: true so it does not carry Service schema, same treatment as the two
//     farm history pages.
//   - No pricing. The child appears in nothing.
export const fillVisitB = [
  {
    slug: "/farm-dinners/",
    side: "farm",
    draft: false,
    navLabel: "Farm Dinners",
    blurb: "A long table in the field, eating what the farm grew, years out.",
    title: "Farm Dinners | Paulsen Farm and Floral, Cass County Iowa",
    description:
      "A long table out in the field, eating what this Cass County, Iowa farm grew that week. Here is what we have in mind and what has to be true before it happens.",
    eyebrow: "Visit",
    h1: "Farm dinners, and the table we want to set",
    seasonNote:
      "A long table in the field, eating what the farm grew that week. One of the furthest out things on the plan.",
    intro: [
      "A farm dinner is one of the things we would most like this place to become known for. A long table out in the field, a handful of courses, and nearly everything on the plate grown or raised within sight of where you are sitting.",
      "It is also one of the furthest out things on the plan, and for good reason. A dinner asks a farm to be a host, a kitchen and a venue on one evening, which is three jobs it does not have yet.",
      "What follows is the version we have in mind and the order it has to happen in. It is here because it is genuinely where this is pointed rather than because it is close.",
    ],
    included: {
      h2: "What we have in mind",
      items: [
        {
          h3: "One long table, out in it",
          body:
            "Not a barn dressed up as a dining room. A table set where the food actually came from, with the field around you and the weather being part of the evening. That is the whole difference between this and eating well somewhere else.",
        },
        {
          h3: "A menu the week decides",
          body:
            "What is on the plate is whatever the farm has at its best in the days before. That means the menu goes out late and stays a little open, which is a feature of eating on a farm rather than a failure to plan.",
        },
        {
          h3: "Flowers from the same ground",
          body:
            "The table gets dressed from the field it is standing in. It is a small thing and it is the sort of detail that only works when the farm and the floral side belong to the same two people.",
        },
        {
          h3: "A small number of seats",
          body:
            "Enough people to feel like an occasion and few enough that it stays a dinner rather than an event. A handful of tables done properly is worth far more than a field full of them done thinly.",
        },
        {
          h3: "A few nights a year, not a restaurant",
          body:
            "Tied to the weeks the farm is at its best, which in this climate is a short list. Rarity is not a tactic here, it is simply how often a small farm can put on something like this without dropping everything else.",
        },
        {
          h3: "Somebody who can actually cook it",
          body:
            "Growing the food and cooking it for forty people are different skills. The good version of this involves a chef who wants to work with what the field has that week, which is its own kind of relationship to build.",
        },
      ],
    },
    process: {
      h2: "What has to happen first",
      steps: [
        {
          h3: "Grow enough to feed a table",
          body:
            "A dinner is only worth doing if nearly everything on the plate came off this ground. That needs the vegetables, the birds and the flowers all producing properly, which is most of the rest of the plan first.",
        },
        {
          h3: "Sort out the practical side of hosting",
          body:
            "Parking, a way in, somewhere to prepare food, and a plan for the evening it rains. None of that exists yet and all of it has to before anybody is invited to sit down.",
        },
        {
          h3: "Find the right person in the kitchen",
          body:
            "A chef who is genuinely excited by a menu they do not fully control. That is a specific sort of person, and finding the right one matters more to how this turns out than almost anything else.",
        },
        {
          h3: "Start with one night",
          body:
            "One dinner, one table, people who already know us. What that teaches decides whether there is a second one, and it is a far better way to learn than announcing a season of them.",
        },
      ],
    },
    context: {
      h2: "Why a dinner is the clearest version of the whole idea",
      paragraphs: [
        "Everything else this farm does sends food away with somebody. A dinner keeps them here, and that changes what the food is doing. You are not buying an ingredient, you are sitting in the place it came from with the people who grew it, which is about as direct as the connection between a person and their food ever gets.",
        "That is the argument underneath this whole business, and Alex makes it better than most people do. Food is the thing everything bottoms out in, and knowing where yours comes from is a decision rather than an accident. A dinner is the version of that you can taste in one evening.",
        "It is also the clearest signal of where the farm is headed. The long term version of this place is somewhere people drive out to for an afternoon or an evening, and dinners are the piece that makes the drive obviously worth it rather than merely convenient.",
        "It stays honest about its position though. Vegetables, birds, water, storage and a flower field all come first, because a dinner with a bought in menu is just a restaurant in a field. There is no shortcut to this one and we would rather wait than fake it.",
      ],
    },
    faq: [
      {
        q: "Can I book a farm dinner?",
        a:
          "Not yet. Dinners are one of the furthest out things on the plan and they wait on the farm growing enough to genuinely fill a menu. They will be announced to the list first, well before anywhere else.",
      },
      {
        q: "How many people would there be?",
        a:
          "A small number, deliberately. Enough for it to feel like an occasion and few enough that it stays a dinner rather than an event. Keeping it small is what makes it worth doing at all.",
      },
      {
        q: "What would be on the menu?",
        a:
          "Whatever the farm has at its best that week, which means the menu is set late and stays a little open. Eating on a farm means eating what the season decided rather than what a printed card promised.",
      },
      {
        q: "How often would they happen?",
        a:
          "A few nights a year at most, tied to the stretches when the farm is at its peak. A small farm cannot host regularly and keep everything else running, and we would rather do a couple properly.",
      },
      {
        q: "Would you cook it yourselves?",
        a:
          "The good version involves a chef who wants to build a menu around whatever the field has that week. Growing the food and cooking it well for a full table are genuinely different jobs.",
      },
      {
        q: "How would I hear about one?",
        a:
          "Through the list. A dinner is a handful of seats on a specific evening, so it will fill from the people already following along rather than from anything public. That is the whole reason the list exists.",
      },
    ],
    crossLinks: [
      { label: "Seasons on the farm, and what comes when", href: "/seasons/" },
      { label: "Market vegetables, and what we plan to grow", href: "/market-vegetables/" },
      { label: "The back place, and where this is headed", href: "/nelson-farm/" },
    ],
    ctaHeading: "Would you come out for a dinner?",
    ctaBody:
      "Knowing there are people who would is part of what makes it worth building toward. Getting on the list costs nothing and commits you to nothing.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/workshops/",
    side: "floral",
    draft: false,
    navLabel: "Workshops and Classes",
    blurb: "Learning to make the thing yourself, from the people who grew it.",
    title: "Workshops and Classes | Paulsen Farm and Floral in Iowa",
    description:
      "Wreath making, flower arranging and growing classes are part of the plan for our Cass County, Iowa farm. Here is what we have in mind and what comes first.",
    eyebrow: "Visit",
    h1: "Workshops and classes, and what we would teach",
    seasonNote:
      "Learning to make the thing yourself, taught by the people who grew what you are making it from.",
    intro: [
      "Teaching people to make the thing themselves is something we intend to do here. A wreath in November, an arrangement in June, or the far less glamorous business of getting something to grow in your own yard.",
      "It fits this farm particularly well because both halves of it are skills rather than products. Somebody who spends an evening learning to build a wreath leaves with the wreath and with the ability to make the next one.",
      "What follows is what we have in mind. None of it is running yet, and which parts happen first depends a great deal on what people say they would actually turn up for.",
    ],
    included: {
      h2: "What we would teach",
      items: [
        {
          h3: "Wreath making, in the run up to winter",
          body:
            "The obvious first one. Late fall, everybody around a table with greens and wire, and you go home with a wreath you made. It is the workshop that most naturally already exists inside what the floral side is doing anyway.",
        },
        {
          h3: "Arranging what the season gave you",
          body:
            "Not a set recipe but the actual skill, which is looking at what is in front of you and making something of it. That is the useful version, because it works again next week with completely different flowers.",
        },
        {
          h3: "Growing a few things at home",
          body:
            "Alex is fond of the point that anybody can put a herb box on a windowsill and have a little more say over what they eat. The gap between that and a vegetable bed is smaller than most people think, and it is very teachable.",
        },
        {
          h3: "Keeping a harvest",
          body:
            "Storing, canning and putting food up for a winter. It is the least fashionable subject on this list and probably the most genuinely useful, because it is what turns a good garden into food you eat in February.",
        },
        {
          h3: "Small groups, hands on",
          body:
            "Few enough people that everybody actually gets shown rather than watching from the back. A workshop where you leave without having properly made the thing is a demonstration, and demonstrations are not what we want to run.",
        },
        {
          h3: "Taught by the people who grew it",
          body:
            "The material comes from the field it is being taught in, and the person teaching knows why it behaves the way it does. That is the difference between a class at a farm and the same class held anywhere else.",
        },
      ],
    },
    process: {
      h2: "How we plan to get there",
      steps: [
        {
          h3: "Start with the wreath run",
          body:
            "The materials, the timing and the skill are already there every November. Turning that into a table of people making their own is the smallest step from what the floral side is doing to a workshop that works.",
        },
        {
          h3: "Somewhere to actually hold one",
          body:
            "A table, shelter, and a way for people to arrive that does not run through a family's kitchen. That is part of what the move to the back place is meant to make possible rather than something to improvise around.",
        },
        {
          h3: "Run a couple and listen",
          body:
            "Two or three, kept small, offered to the list. What people ask about afterward tends to be a better guide to the next class than anything we would come up with on our own.",
        },
        {
          h3: "Build a small calendar",
          body:
            "A handful across a year, tied to what is actually happening on the farm at that moment. A workshop in the right week teaches itself. The same workshop in the wrong month is a lot of work for a worse result.",
        },
      ],
    },
    context: {
      h2: "Why teaching belongs on a farm like this",
      paragraphs: [
        "There is a version of a small farm that sells you food and a version that also hands over a bit of the knowledge behind it. The second one is more work and it is much more in keeping with why these two are doing this at all.",
        "Alex talks about it in terms of what a household can take back. Get a deep freeze and fill it from a farm nearby. Put a herb box on the windowsill. Learn to keep a harvest. None of those turn anybody into a farmer, and all of them move somebody a little further toward having a say over what they eat.",
        "A workshop is the most direct way to hand that over. Somebody leaves able to do the thing rather than merely owning the result of it, which for the kind of person this farm is trying to reach is worth more than the wreath.",
        "It also happens to suit a farm with two halves. There is something to teach in November and something completely different to teach in June, which means a small calendar of classes fits the year rather than competing with it.",
      ],
    },
    faq: [
      {
        q: "Are workshops running now?",
        a:
          "Not yet. They need somewhere sensible to hold them and a farm with enough of a rhythm to plan around, both of which are being worked toward. The list is where the first ones will be announced.",
      },
      {
        q: "What would the first one be?",
        a:
          "Almost certainly wreath making in the late fall, because the materials, the timing and the skill are already there every November. It is the shortest step from what the floral side is doing today.",
      },
      {
        q: "How big would a class be?",
        a:
          "Small, and deliberately so. Few enough people that everybody actually gets shown and leaves having properly made the thing, rather than watching somebody else do it from the back of a room.",
      },
      {
        q: "Do I need any experience?",
        a:
          "No. These are aimed at people who have never done it before and would like to. Anyone who has done it plenty will probably still pick something up, but that is not who they are built for.",
      },
      {
        q: "Could you teach growing rather than flowers?",
        a:
          "That is very much on the list. Getting a few things going at home, and keeping a harvest through a winter, are both more useful than they sound and both are things we would rather teach than gatekeep.",
      },
      {
        q: "How do I hear when one is scheduled?",
        a:
          "Through the list. Classes will be small and tied to specific weeks, so they will fill from the people already following along. Telling us which subject interests you also helps decide which runs first.",
      },
    ],
    crossLinks: [
      { label: "Wreaths, garland and seasonal centerpieces", href: "/wreaths-and-garland/" },
      { label: "Bouquets and arrangements through the season", href: "/bouquets/" },
      { label: "Garlic and the storage crops that keep", href: "/garlic/" },
    ],
    ctaHeading: "What would you want to learn?",
    ctaBody:
      "Which class runs first follows what people actually ask for. Tell us on the list and it genuinely moves the order.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },

  {
    slug: "/school-groups/",
    side: "farm",
    draft: false,
    navLabel: "School Groups",
    blurb: "A morning on a working farm, once there is somewhere to put a bus.",
    title: "School Groups | Paulsen Farm and Floral, Cass County Iowa",
    description:
      "A morning on a working farm for school groups is part of the long term plan for our Cass County, Iowa farm. Here is what we have in mind and what comes first.",
    eyebrow: "Visit",
    h1: "School groups, and the morning we would want to give them",
    seasonNote:
      "A morning on a working farm, seeing where food actually comes from. Part of the long term plan.",
    intro: [
      "Having school groups out is something we would like this farm to do. A morning walking a working farm, seeing birds on grass and vegetables in the ground, and going home knowing where a piece of their lunch came from.",
      "For a lot of children in this part of the state, farming is something they drive past rather than something they have stood in. Closing that gap for a morning is a genuinely good use of a place like this.",
      "It sits well out in the plan and there are real things to sort out before it happens. What follows is the shape we have in mind.",
    ],
    included: {
      h2: "What a morning here would be",
      items: [
        {
          h3: "A working farm, not a display",
          body:
            "Whatever is actually happening that week, which is the entire value of it. A farm mid season is more interesting than any exhibit, and children are extremely good at telling the difference between the two.",
        },
        {
          h3: "Birds on grass",
          body:
            "Pasture raised chickens are the easiest thing on this farm to understand at a glance. You can see the birds, see the grass, and see the connection between them without anybody having to explain very much.",
        },
        {
          h3: "Food while it is still a plant",
          body:
            "Pulling something out of the ground and recognizing it is a small moment that lands hard with a lot of children. Most food arrives already unrecognizable, and vegetables in a bed are the correction to that.",
        },
        {
          h3: "Flowers, which are not a side note",
          body:
            "A cutting field is a very good place to be eight years old. It also introduces the idea that a farm can grow something for beauty as well as for food, which is a broader picture than most farm visits give.",
        },
        {
          h3: "Something to take home",
          body:
            "A flower, a bulb, seeds to plant. Small, and it is the part they remember. A morning that ends with something in their hand keeps going for a lot longer than one that ends at the bus.",
        },
        {
          h3: "Sized to one group at a time",
          body:
            "One class rather than a whole grade, so it stays a walk around a farm rather than a crowd management exercise. That is the version we would actually enjoy running, which matters to how good it is.",
        },
      ],
    },
    process: {
      h2: "What has to happen first",
      steps: [
        {
          h3: "Somewhere to put a bus",
          body:
            "A route in, room to turn around, and somewhere to park that is not a field gate. It sounds mundane and it is the single most practical thing standing between here and a school visit.",
        },
        {
          h3: "A farm with enough to show",
          body:
            "Birds, beds and flowers all going at once, which is what makes an hour outside worth the drive for a class. That is the same production the rest of the plan is building toward.",
        },
        {
          h3: "Get the formalities properly sorted",
          body:
            "There is a set of arrangements that has to be squared away before anybody brings children onto a working farm. We would rather have that fully handled with the right advice than half handled, and it is not settled yet.",
        },
        {
          h3: "Try one, with a school that knows us",
          body:
            "One class, one morning, somebody local who is willing to be the first. What that teaches decides everything about whether it becomes something the farm does regularly.",
        },
      ],
    },
    context: {
      h2: "Why this is worth doing at all",
      paragraphs: [
        "Cass County is surrounded by agriculture and almost none of it is the kind a child can walk into. Row crops at scale are not a place you take a class. A small farm with birds, beds and flowers is legible in a way a thousand acres of corn simply is not.",
        "There is also a real argument that this is the highest leverage thing a farm like this can do with a morning. Every adult who thinks about where their food comes from started somewhere, and standing in a field at eight years old is a very effective somewhere.",
        "It fits the long term shape of this place too. The version of this farm a decade out is somewhere people come to rather than only buy from, and school groups are one of the more worthwhile forms that takes.",
        "It stays in its place in the queue for good reasons. A farm with somewhere to park a bus, enough going on to fill an hour, and every arrangement properly sorted is a farm ready to do this well. Until then it is an intention rather than an offer.",
      ],
    },
    faq: [
      {
        q: "Can I book a school visit?",
        a:
          "Not yet. There are practical things to sort out first, from somewhere to bring a bus in to having enough going on to fill a morning well. Getting in touch now is still worth doing so we know there is interest.",
      },
      {
        q: "What age would it suit?",
        a:
          "Younger classes get the most out of it, because the ideas are simple and physical. Birds on grass, food in the ground, flowers in a field. Older groups would want something with more depth built into it.",
      },
      {
        q: "How long would a visit be?",
        a:
          "A morning rather than a full day. That is about as long as a walk around a working farm stays genuinely interesting, and it fits how a school actually plans a trip without swallowing the whole schedule.",
      },
      {
        q: "How many children could come?",
        a:
          "One class at a time rather than a whole grade. Keeping the number small is what makes it a walk around a farm instead of a crowd being moved between stations, and it is a much better morning for everyone.",
      },
      {
        q: "What time of year would work?",
        a:
          "Late spring and early fall are the obvious windows, when there is plenty growing and the weather is on your side. High summer is when the farm has the least attention to spare for anything else.",
      },
      {
        q: "Can I register interest now?",
        a:
          "Yes, and it helps. Knowing which schools would actually come is one of the things that decides whether this moves up the list, so getting in touch now is more useful than waiting until it is offered.",
      },
    ],
    crossLinks: [
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
      { label: "Seasons on the farm, and what comes when", href: "/seasons/" },
      { label: "The Century Farm, worked by Paulsens since 1905", href: "/century-farm/" },
    ],
    ctaHeading: "Teach a class near here?",
    ctaBody:
      "Tell us and it moves up the list. Knowing which schools would actually make the trip is what turns this from an intention into something we plan for.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact/",
  },

  {
    slug: "/private-events/",
    side: "floral",
    draft: false,
    navLabel: "Private Gatherings",
    blurb: "Small gatherings on the farm one day. Not a wedding venue, ever.",
    title: "Private Gatherings | Paulsen Farm and Floral, Cass County",
    description:
      "Small private gatherings on our Cass County, Iowa farm are a long term idea, and it is not a wedding venue. Here is what we have in mind and what comes first.",
    eyebrow: "Visit",
    h1: "Private gatherings, and what this place is not",
    seasonNote:
      "Small gatherings out on the farm, some day. This is not a wedding venue and it is not going to become one.",
    intro: [
      "Somewhere down the line we would like this farm to host the occasional small gathering. A family celebration, a group of friends, a company that wants an afternoon somewhere that is not a conference room.",
      "Let us be clear about the thing everyone asks first. This is not a wedding venue. We do floral design for weddings and we travel to your venue to do it, but the farm itself does not host them and that is a settled decision rather than a capacity problem.",
      "What follows is the kind of gathering we do have in mind. It is a long way out and it comes after most of the rest of the plan.",
    ],
    included: {
      h2: "The kind of gathering we have in mind",
      items: [
        {
          h3: "Small, and genuinely small",
          body:
            "A group of people rather than a guest list. The scale that fits a working farm is the sort of gathering where everyone can sit at one or two tables, which is a very different thing from an event.",
        },
        {
          h3: "Outdoors, in the season for it",
          body:
            "Late spring through early fall, out in a field or a garden, with the farm around you. That is the whole appeal, and it also means a short list of workable dates rather than a year round offering.",
        },
        {
          h3: "Flowers from the ground you are standing on",
          body:
            "One of the few places this actually happens. The flowers on the table can come out of the field beside it that morning, which is a detail that only works when the growing and the design belong to the same people.",
        },
        {
          h3: "A working farm, plainly",
          body:
            "There will be birds, there will be mud in the spring, and something will be happening in a field nearby. That is the point rather than the compromise, and it suits some gatherings much better than others.",
        },
        {
          h3: "Nothing that needs a venue",
          body:
            "No dance floor, no bar, no getting ready suite, and no team who runs events for a living. If what you are planning needs any of those, a proper venue will do it far better than a farm ever could.",
        },
        {
          h3: "A handful a year at most",
          body:
            "This is a family home first. Whatever this becomes will be occasional and chosen carefully, because it is the one part of the plan that asks strangers to spend an afternoon where people live.",
        },
      ],
    },
    process: {
      h2: "What has to happen first",
      steps: [
        {
          h3: "The rest of the plan, first",
          body:
            "Production, storage, a store, somewhere for people to park. Gatherings come after all of it because they depend on the same infrastructure and none of them justify building it on their own.",
        },
        {
          h3: "Work out what we would actually be good at",
          body:
            "There is a version of this that fits a working farm and a version that turns it into a venue. Finding the edge between those two, and staying on the right side of it, matters more than the size of the opportunity.",
        },
        {
          h3: "Try one for somebody we know",
          body:
            "A first gathering for people who already understand what this place is and will forgive the rough edges. That is a far better way to learn than an open offer to strangers.",
        },
        {
          h3: "Keep it rare on purpose",
          body:
            "Whatever this becomes stays occasional. The farm is a home and a business before it is anywhere to spend an afternoon, and that order is not going to change however well gatherings go.",
        },
      ],
    },
    context: {
      h2: "Why the answer on weddings is no",
      paragraphs: [
        "It comes up constantly, so it is worth being direct. A farm with flowers and a good view looks like a wedding venue to nearly everybody who sees one, and plenty of farms have gone that way. This one is not going to.",
        "The reason is that a wedding venue is a completely different business. It is a hospitality operation with a farm attached rather than a farm, and it takes over the calendar, the buildings and most of the summer. That is not the business these two are building.",
        "What we do offer on the wedding side is the flowers. Bronte designs them and we deliver to your venue, wherever that is, and we would rather be very good at that than mediocre at being somewhere to hold the day itself.",
        "Private gatherings, in the small sense described above, are a different thing and they stay on the plan. A dozen people at a table in a field on a September afternoon is something a working farm can do beautifully. Two hundred people and a marquee is not.",
      ],
    },
    faq: [
      {
        q: "Do you host weddings at the farm?",
        a:
          "No, and that is not going to change. We design and deliver flowers to your venue instead. The farm is a working farm and a family home rather than an event space, and a wedding venue is a different business entirely.",
      },
      {
        q: "Can I book a private gathering?",
        a:
          "Not yet. It sits behind most of the rest of the plan because it depends on the same parking, buildings and infrastructure that everything else is waiting on. Getting in touch to register interest is still worthwhile.",
      },
      {
        q: "What size gathering would work?",
        a:
          "Small. The scale that suits a working farm is a group that fits around one or two tables rather than a guest list. Anything larger needs a venue with staff who do this for a living.",
      },
      {
        q: "What time of year would it be?",
        a:
          "Late spring through early fall, because the whole appeal is being outside with the farm around you. That is a short list of workable dates in Iowa rather than something available year round.",
      },
      {
        q: "Could you do the flowers for it?",
        a:
          "Yes, and that part is already running. Floral design for events and celebrations is one of the things the floral side does today, whether the gathering happens here one day or somewhere else entirely.",
      },
      {
        q: "What if I want something bigger?",
        a:
          "Then a proper venue is the right answer and we will say so. What we would happily do is the flowers for it. Being honest about what a farm is not good at saves everybody a disappointing conversation later.",
      },
    ],
    crossLinks: [
      { label: "Floral design for weddings, at your venue", href: "/wedding-flowers/" },
      { label: "Floral design for events and celebrations", href: "/event-flowers/" },
      { label: "Farm dinners, and the table we want to set", href: "/farm-dinners/" },
    ],
    ctaHeading: "Planning something small?",
    ctaBody:
      "Tell us what you have in mind. Even if the farm is years off being the right place for it, the flowers are something we can do now.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact/",
  },

  {
    slug: "/how-we-farm/",
    side: "farm",
    isStory: true,
    draft: false,
    navLabel: "How We Farm",
    blurb: "What we are trying to do with this ground, and what we will not claim.",
    title: "How We Farm | Paulsen Farm and Floral, Cass County Iowa",
    description:
      "What we are trying to do with the ground on our Cass County, Iowa farm, why we sell direct, and what we will not claim until we have earned the right to it.",
    eyebrow: "Our story",
    h1: "How we farm, and what we are trying to build",
    seasonNote:
      "What we are trying to do with this ground, why we sell direct, and where we draw the line on claims.",
    intro: [
      "The short version is that we are trying to farm in a way that leaves this ground better than we found it, and to sell what comes off it straight to the people who eat it.",
      "Those two things are connected. Selling direct is what makes the careful version affordable, because there is nobody in between taking a margin that would otherwise have to come out of how the food is grown.",
      "What follows is how we think about it. It is the reasoning rather than a set of specifications, and toward the end there is a plain account of what we will not claim yet.",
    ],
    included: {
      h2: "What we are trying to do with this ground",
      items: [
        {
          h3: "Raised outdoors on pasture",
          body:
            "The birds live outside on grass. That is the one thing about how they are raised that we state plainly, and it is the piece that shapes everything else, because animals on pasture and animals in a building are two different farms.",
        },
        {
          h3: "Leave the soil better than we found it",
          body:
            "The topsoil is the actual asset here, more than any building or piece of equipment. A farm that mines it is spending its inheritance, and a farm that builds it is doing the only thing that compounds over a century.",
        },
        {
          h3: "Small enough to pay attention",
          body:
            "There is a scale past which you stop noticing individual animals and individual beds, and a great deal of what makes small farm food better happens below that line. Staying under it is a deliberate choice.",
        },
        {
          h3: "Diverse rather than specialized",
          body:
            "Birds, vegetables, storage crops and flowers on one place. It is harder to run than one enterprise done at scale, and it is far more resilient, because a bad year in one part of it is not a bad year outright.",
        },
        {
          h3: "Sold direct, to people nearby",
          body:
            "Straight from us to the household eating it. That is what lets a farm this size be careful about how things are grown, and it means the person who raised your food is somebody you can put a question to.",
        },
        {
          h3: "Built to still be here in fifty years",
          body:
            "The front place has been in one family since 1905, which sets a standard for the timescale decisions get made on. Almost nothing that looks smart over one season looks smart over four generations.",
        },
      ],
    },
    process: {
      h2: "What we will not claim",
      steps: [
        {
          h3: "No certification we do not hold",
          body:
            "We are not making a certification claim of any kind. If one ever becomes real and is on paper, we will say so and you will be able to check it. Until then the absence of a claim is the honest position.",
        },
        {
          h3: "No detailed husbandry promises yet",
          body:
            "Beyond birds being outdoors on pasture, we are not publishing specifics about how they are raised. Not because there is something to hide, but because a specific in writing is a promise, and promises should follow experience.",
        },
        {
          h3: "Ask us anything specific",
          body:
            "What a page cannot do is answer your particular question. If there is something you want to know about how something was grown or raised, ask us directly and you will get a straight and specific answer.",
        },
        {
          h3: "We will publish more as we earn it",
          body:
            "As practices settle into things we have actually done for several seasons, they will go up here in detail. A farm six months in that publishes a full specification is describing an intention and calling it a method.",
        },
      ],
    },
    context: {
      h2: "Why any of this matters",
      paragraphs: [
        "Alex puts the argument better than a website usually can. All wealth bottoms out in food and water, so anyone with an interest in the real thing needs some handle on where theirs comes from. That is not a marketing line, it is the reason two people with a young family took this on.",
        "The version of that most people can act on is small. Get a deep freeze and put a few chickens in it from a farmer down the road. Grow a couple of things in the yard. Put a herb box on the windowsill. None of that makes anyone self sufficient and all of it moves somebody a little further toward having a say.",
        "There is a version of food that is extractive, of the land and of the people eating it, and there is a version that heals a bit of ground and feeds somebody nearby. We are trying to farm the second way, and being close to the people who eat it is most of what makes it possible.",
        "That is also the answer to what makes this farm different, and it is not the practices. There will be other people doing this, and more of them every year, which is a good thing. What is different here is the two people doing it, a hundred and twenty years of one family on the front place, and the fact that you can drive out and ask.",
      ],
    },
    faq: [
      {
        q: "Are you certified organic?",
        a:
          "No, and we are not making any certification claim on any of this. If one ever becomes real and is on paper we will say so plainly. What we can tell you is the intent, which is farming in a way that leaves the ground better.",
      },
      {
        q: "How exactly are the chickens raised?",
        a:
          "Outdoors on pasture. That is the claim we make in writing. For anything more specific, ask us directly rather than reading it off a page, and you will get a straight answer about how it was actually done.",
      },
      {
        q: "What does regenerative mean here?",
        a:
          "In plain terms, farming so the soil improves rather than depletes. It is a word that gets used loosely, so we would rather describe the intent than lean on the label, and let what we actually do settle over a few seasons.",
      },
      {
        q: "Why sell direct instead of wholesale?",
        a:
          "Because a margin taken in the middle has to come out of somewhere, and on a small farm it usually comes out of how carefully things are grown. Selling direct is what makes the careful version work financially.",
      },
      {
        q: "Why does the family history matter?",
        a:
          "It sets the timescale. The front place has been in one family since 1905, and decisions made against a hundred year horizon look different from ones made against a single season. That is most of what shapes the approach.",
      },
      {
        q: "How do I know any of this is true?",
        a:
          "Ask, and come out. A farm you can drive to, where you can meet the people and see the birds, is a very different proposition from a label on a package. That is the whole advantage of buying close to home.",
      },
    ],
    crossLinks: [
      { label: "The Century Farm, worked by Paulsens since 1905", href: "/century-farm/" },
      { label: "The Nelson farm, and where this is headed", href: "/nelson-farm/" },
      { label: "Pasture raised chicken, sold direct off the farm", href: "/pastured-chicken/" },
    ],
    ctaHeading: "Ask us anything specific",
    ctaBody:
      "If there is something you want to know about how something is grown or raised, ask and you will get a straight answer rather than a label.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact/",
  },
];
