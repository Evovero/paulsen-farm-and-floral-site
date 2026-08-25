// Paulsen Farm and Floral - pages promoted out of the ten year structure.
// Added 2026-08-25 by the noindex triage. These five were placeholders in pages.mjs and
// are now full pages, filled to the seo-page-standards spec and set to index.
//
// They live here rather than in content.mjs for one reason: content.mjs is the original
// launch copy and has not changed since 2026-08-21. Keeping this batch separate means the
// launch file stays byte-identical and the diff of any future triage pass is readable.
//
// Same content rules as content.mjs, in full: no pricing, no street address, no phone, no
// hours, no husbandry or certification claims, the child never appears, no em dashes.
//
// isStory: true suppresses Service schema. The Century Farm and the Nelson farm are
// history pages, not services, and marking them up as services would be a false claim in
// structured data even though the page template is shared.
export const promoted = [
  {
    slug: "/century-farm/",
    side: "farm",
    isStory: true,
    navLabel: "The Century Farm",
    title: "The Century Farm, Atlantic Iowa | Paulsen Farm and Floral",
    description:
      "The Paulsen family has worked the front place in Cass County, Iowa since 1905. Four generations, an Iowa Century Farm, and the ground this business starts from.",
    eyebrow: "Our story",
    h1: "The Century Farm, worked by Paulsens since 1905",
    seasonNote:
      "The front place, along Interstate 80 in Cass County. A hundred and twenty years in one family.",
    intro: [
      "The Paulsen family moved onto the front place in 1905 and has worked it ever since. In Iowa that earns a specific designation. A farm held by the same family for a hundred years or more is a Century Farm, and this one passed that mark two decades ago.",
      "A hundred and twenty years is not a marketing line and we would rather not use it as one. It is four generations of decisions, most of them made by people we can still name, on ground that is still here to show for it.",
      "This is where the business starts. Not because history sells anything, but because it is the honest answer to why two people would take on something this hard in the first place.",
    ],
    included: {
      h2: "What the front place is",
      items: [
        {
          h3: "A hundred and twenty years in one family",
          body:
            "The family moved on in 1905. Nobody has sold it since. That is the whole claim, and it is the only one on this page that a document can back up, which is exactly why we lead with it and not with anything about how we farm.",
        },
        {
          h3: "An Iowa Century Farm",
          body:
            "Iowa recognizes farms held by one family for a century or more. It is a real designation with a real record behind it rather than a phrase a farm can decide to use about itself. The front place qualified and the family has the certificate.",
        },
        {
          h3: "Ground directly on Interstate 80",
          body:
            "The farm runs right along I-80. For a century that was simply where the road happened to go. For a business that eventually wants people to drive out to it, it is the single most useful accident of geography we have.",
        },
        {
          h3: "Between two cities, near neither",
          body:
            "Council Bluffs and the Omaha metro are about fifty five minutes west. Most of Des Moines is around an hour east. Being genuinely close to two metros while sitting in open country is unusual and we do not take it for granted.",
        },
        {
          h3: "Four generations of soil decisions",
          body:
            "Every field here reflects choices made by people who are mostly gone now. Some of those choices we would make again and some we would not. Either way we inherited the results rather than starting from a blank piece of ground.",
        },
        {
          h3: "The starting point, not the whole plan",
          body:
            "The front place is where the chickens are and where the first seasons happen. The back place is where the operation is headed. Both matter, and the story only makes sense with the two of them side by side.",
        },
      ],
    },
    process: {
      h2: "How a farm stays in one family that long",
      steps: [
        {
          h3: "Somebody starts it",
          body:
            "In 1905 a Paulsen took on this ground. What that decision cost, and what it looked like at the time, is the part of the story we know least about and would most like to know more of.",
        },
        {
          h3: "Somebody keeps it through the bad years",
          body:
            "Iowa farms have had a great many chances to leave the family since 1905. Depression, drought, the farm crisis of the eighties, every decade that made selling the sensible move. This one did not sell.",
        },
        {
          h3: "Somebody hands it on",
          body:
            "A century farm is really a chain of people who decided the next generation should get the chance rather than the proceeds. That is a harder decision than it sounds and it has to be made correctly every single time.",
        },
        {
          h3: "Somebody decides what it is for now",
          body:
            "That part is ours. The ground does not tell you what to do with it. We think what it is for now is clean food for families nearby, which is a different answer than the last few generations gave, on the same dirt.",
        },
      ],
    },
    context: {
      h2: "Why the history matters to what we sell you",
      paragraphs: [
        "Anybody can start a farm this year. Nobody can start a hundred and twenty year old one, and we are aware that this is the one thing about our operation that cannot be copied, bought or hurried.",
        "But we are careful about what we let it prove. Longevity does not mean we know more than the person who started farming last spring, and it does not mean the food is better. It means we are not going anywhere, and that our name is attached to this in a way that a business with a lease and a five year plan cannot match.",
        "That is the part worth something to you. When you buy food from a family that has been on the same ground for four generations, the incentive to do it right is structural rather than moral. We have to keep living here afterward.",
        "There is a bigger version of this argument on our story page, about food, land and what Alex calls sovereignty. This page is only the deed part of it. The reasoning is over there.",
      ],
    },
    faq: [
      {
        q: "What is an Iowa Century Farm?",
        a:
          "It is a designation for a farm that has been owned by the same family for a hundred years or more. Iowa keeps a formal record of them and issues a certificate. The front place passed the mark in 2005 and holds the designation.",
      },
      {
        q: "Have the Paulsens always farmed it the same way?",
        a:
          "No, and we would not claim so. Four generations of Iowa farming covers enormous change in equipment, chemistry and scale. What we are doing now with pastured poultry is a departure from recent decades, not a continuation of them.",
      },
      {
        q: "Is this where the chickens are raised?",
        a:
          "Yes. The front place is where the current operation runs, including the broiler batches. The back place is where the longer term plan is pointed, and the two are described separately because they are genuinely two farms.",
      },
      {
        q: "Can I come out and see it?",
        a:
          "Families picking up an order come to the farm and get directions and a window from us directly. Beyond that we are not set up for visitors yet. Opening the place up properly is a real ambition and it is years out.",
      },
      {
        q: "Where exactly is the farm?",
        a:
          "In Cass County, Iowa, near Atlantic, running along Interstate 80. We are not publishing a street address while this is a working family home rather than a business people drop in on. People with an order get what they need.",
      },
      {
        q: "Is the other farm also a Century Farm?",
        a:
          "Not quite. The back place has been in Alex's grandmother's family for somewhere close to eighty years, which is a heritage farm but short of a century. Its story is on its own page and it is the more interesting of the two right now.",
      },
    ],
    crossLinks: [
      { label: "The Nelson farm, and where the operation is headed", href: "/nelson-farm/" },
      { label: "The whole story, in Alex's own words", href: "/about/" },
      { label: "Pasture raised chicken, direct off the farm", href: "/pastured-chicken/" },
    ],
    ctaHeading: "Hear what comes off this ground",
    ctaBody:
      "The list is how we tell people what is ready and when. It is the same list for chickens, flowers and everything after, and getting on it commits you to nothing at all.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },
  {
    slug: "/nelson-farm/",
    side: "farm",
    isStory: true,
    navLabel: "The Nelson Farm",
    title: "The Nelson Farm | Paulsen Farm and Floral, Cass County IA",
    description:
      "The back place has been in Alex's grandmother's family for close to eighty years. It is where this farm is headed, and the reason the rest of it makes sense.",
    eyebrow: "Our story",
    h1: "The Nelson farm, and where this is headed",
    seasonNote:
      "The back place. Grandma Janet's family took it on when she was a teenager. She is 93 now.",
    intro: [
      "The back place belonged to Alex's grandma Janet. Her family took it on when she was a teenager, and she is ninety three now, which puts it somewhere close to eighty years in the family. Not quite a Century Farm. A heritage farm by any reasonable definition.",
      "If the front place is where this business currently stands, the Nelson farm is where it is going. That distinction matters enough that the two farms get their own pages instead of being folded into one story about land.",
      "Almost nothing described on this page exists yet. We are laying out the plan rather than the inventory, and we would rather be plain about which is which than let a website imply we are further along than we are.",
    ],
    included: {
      h2: "What the back place is meant to become",
      items: [
        {
          h3: "Water that does not come from a meter",
          body:
            "Rain capture off the roofs, stored and used. On a farm the water bill is not the point. Being able to keep growing through a dry stretch without asking anyone's permission is the point, and in southwest Iowa dry stretches are not hypothetical.",
        },
        {
          h3: "Somewhere to put a harvest",
          body:
            "Canning storage, a proper cold room, shelves that hold a season. A farm without storage sells everything the week it comes ripe at whatever price that week offers. Storage is what turns a harvest into something you control.",
        },
        {
          h3: "Heat that works when the power does not",
          body:
            "A wood stove for backup heat. Rural Iowa loses power, usually in the exact weather where losing it matters most. This is not preparedness as a hobby, it is the same reasoning as the water and the storage.",
        },
        {
          h3: "A smokehouse",
          body:
            "Curing and smoking is how a farm keeps meat without a freezer full of electricity, and it is also simply a better product. It is on the list because Alex wants it on the list, and we would rather tell you that honestly.",
        },
        {
          h3: "Room for the operation to actually grow",
          body:
            "The front place works for the scale we are at. The back place is where more ground, more beds and a real production floral operation could go without crowding a family home that was never meant to be a business.",
        },
        {
          h3: "A way of living, not a facility",
          body:
            "Read the list again and it is not a business plan. It is water, storage, heat and food, arranged so a household is not entirely dependent on things it does not control. That is the actual project. The farm is how it pays for itself.",
        },
      ],
    },
    process: {
      h2: "How this happens, in order",
      steps: [
        {
          h3: "Prove the small version first",
          body:
            "Broiler chickens, floral design work and a couple of farmers markets. Small, real, and paid for by customers rather than by optimism. If this stage does not work, none of the rest of the page is worth building.",
        },
        {
          h3: "Move the operation to the back place",
          body:
            "The move is targeted at fall of 2027. That date is a plan and not a promise. Farms run on seasons and seasons do not care about anyone's timeline, so treat it as the direction rather than the schedule.",
        },
        {
          h3: "Build the infrastructure in the order it pays",
          body:
            "Water and storage come before a smokehouse, because water and storage change what is possible and a smokehouse changes what is pleasant. Each piece gets built when the season before it justified the cost.",
        },
        {
          h3: "Open it up, eventually",
          body:
            "The version of this farm that people drive out to visit is ten to twenty years away and depends on everything above going right. It is on the site because it is genuinely where we are pointed, not because it is close.",
        },
      ],
    },
    context: {
      h2: "Why we are telling you about a farm that is not built",
      paragraphs: [
        "Most farm websites show you the finished thing. We are six months into a business and the finished thing does not exist, so we had two options. Write a site that implies more than is true, or show you the actual shape of the plan and let you decide what to make of it.",
        "The reason it is worth showing is that where a farm is headed tells you more about the food than where it currently stands. Anybody can raise one good batch of chickens. What we are trying to build is a place where doing it the careful way is the cheap way, because the water, the storage and the ground are all set up for it.",
        "The other reason is grandma Janet. Eighty years is her whole life on that ground, and taking it forward rather than letting it go is not a business decision that spreadsheets produce. If you want to know why two people with a young family would take this on, that is most of the answer.",
        "None of this obligates you to care. If you just want good chicken from someone nearby, the chicken page is the one you want and this page is optional reading.",
      ],
    },
    faq: [
      {
        q: "Is the Nelson farm a Century Farm too?",
        a:
          "Not quite. Grandma Janet's family took it on when she was a teenager and she is ninety three now, so it is somewhere close to eighty years. That makes it a heritage farm rather than a Century Farm, which is a specific hundred year designation.",
      },
      {
        q: "Is anything on this page happening now?",
        a:
          "Almost none of it. The rain capture, canning storage, wood stove and smokehouse are all planned rather than built. The current operation runs on the front place. We would rather say that plainly than let the page imply otherwise.",
      },
      {
        q: "When does the move happen?",
        a:
          "Fall of 2027 is the target. It is a direction rather than a commitment, because farm timelines move for weather, for money and for whatever the season decides. We will say so on this page when it actually happens.",
      },
      {
        q: "Can I visit the back place?",
        a:
          "No, not yet. It is a family home and it is not set up for visitors in any way. The version of this farm that people come out to see is years off and it is one of the things we are working toward.",
      },
      {
        q: "Will the flowers be grown here?",
        a:
          "That is the intent. A real production field for cut flowers needs more room and better water than the current setup allows, and the back place is where both of those are possible. For now the floral side sources what it cannot grow.",
      },
      {
        q: "Why does the water matter so much?",
        a:
          "Because everything else depends on it. Vegetables, cut flowers and livestock all fail the same way in a dry August, and a farm that can only grow when the weather cooperates is not really a farm you can plan a business around.",
      },
    ],
    crossLinks: [
      { label: "The Century Farm, worked by Paulsens since 1905", href: "/century-farm/" },
      { label: "The whole story, in Alex's own words", href: "/about/" },
      { label: "Pasture raised chicken, direct off the farm", href: "/pastured-chicken/" },
    ],
    ctaHeading: "Follow this as it gets built",
    ctaBody:
      "The list is where the real updates go, including the ones where a plan on this page turns into something standing in a field. No obligation and no sales pitch.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },
  {
    slug: "/farm-pickup/",
    side: "farm",
    navLabel: "Pickup at the Farm",
    title: "Farm Pickup, Cass County Iowa | Paulsen Farm and Floral",
    description:
      "Order ahead and pick up at our farm in Cass County, Iowa. It is the shortest route from field to kitchen, and how our pastured chicken already works today.",
    eyebrow: "How to get it",
    h1: "Pickup at the farm",
    seasonNote:
      "Already how the chicken works. Families with an order get directions and a window from us directly.",
    intro: [
      "Order ahead, drive out, load up. It is the shortest possible distance between the field and your kitchen, and it is not a plan for later. It is how the chickens already work today.",
      "There is no storefront and no delivery van in the middle of this. You tell us what you want, we tell you when it is ready, and you come get it. That is the entire arrangement and we would like to keep it that simple for as long as we can.",
      "It is also the reason the price stays honest. Every step between a farm and a kitchen takes a cut and adds a day. Cutting all of them out is the single biggest advantage a small farm has over the alternative.",
    ],
    included: {
      h2: "How pickup works here",
      items: [
        {
          h3: "You order ahead, always",
          body:
            "Nothing here is a shop you drop in on. We raise against a number, so we need to know what you want before it exists. Ordering ahead is what makes the whole model work rather than an inconvenience we are asking you to accept.",
        },
        {
          h3: "You get directions from us directly",
          body:
            "Families with an order get the address, directions and a pickup window from us, by name. We do not publish a street address for a working family home, and we would rather hand it to people who are actually coming out.",
        },
        {
          h3: "A window, not an appointment",
          body:
            "Pickup happens in a window rather than at a fixed minute. Farms do not run to the clock and neither should you have to. We give you a stretch of time that works and you come somewhere inside it.",
        },
        {
          h3: "Bring a cooler and clear the freezer",
          body:
            "For chicken this matters. A batch of around ten whole birds needs more room than most people expect and it needs to stay cold on the drive home. A cooler in the trunk is the difference between an easy pickup and a stressful one.",
        },
        {
          h3: "You meet the people who raised it",
          body:
            "We will be standing there. Ask us anything about how the birds were raised or how the flowers were grown, and if the honest answer is that we are still working something out, that is the answer you will get.",
        },
        {
          h3: "It works for more than chicken",
          body:
            "Anything the farm produces can move this way. Wreaths and centerpieces in the fall, flowers in season, vegetables when there are vegetables. Same arrangement, same list, different thing in the back of your car.",
        },
      ],
    },
    process: {
      h2: "Start to finish",
      steps: [
        {
          h3: "Get on the list",
          body:
            "Tell us your name, your email and roughly what you would want. Nothing is charged and nothing is committed at this stage. The list is how we know how much to raise, so an early answer genuinely helps us plan.",
        },
        {
          h3: "We come back with dates",
          body:
            "Once we know how the season is shaping up and how many families are in, we tell you when things will be ready and what the pickup window looks like. You hear from us before anything is decided for you.",
        },
        {
          h3: "You confirm what you actually want",
          body:
            "Closer to the date, an estimate turns into a real order. This is where you tell us the real number and we set that portion aside for you. Plans change and we would rather know than guess.",
        },
        {
          h3: "You drive out and pick it up",
          body:
            "Come out during the window with room in the car. It takes a few minutes, you meet us, and then you go home with food that was on this ground that morning or close to it.",
        },
      ],
    },
    context: {
      h2: "Why we start with pickup rather than delivery",
      paragraphs: [
        "Delivery sounds like the customer friendly option and in the abstract it is. In practice, for a farm at our scale, it means one of two people spending a day in a truck instead of on the ground the food comes from. That trade is not worth it yet.",
        "It also changes the price in a way people do not see. Fuel, time and the risk of something sitting warm in a vehicle all get built into what you pay, whether or not the receipt itemizes them. Pickup keeps that out of the number.",
        "The part we did not expect is that people seem to prefer it. Coming out, seeing the place and talking to the people who raised your food turns a transaction into something else. That is most of what we are actually offering, and it does not survive a delivery route.",
        "Other ways to buy will come. Farmers markets, and further out, shares and a farm store. They will exist alongside pickup rather than replacing it, because pickup is the version where the fewest things sit between the field and the person eating from it.",
      ],
    },
    faq: [
      {
        q: "Where do I pick up?",
        a:
          "At our farm in Cass County, Iowa, near Atlantic and just off Interstate 80. We send directions and a pickup window directly to families with an order rather than publishing a street address for a working family home.",
      },
      {
        q: "Can I just drive out and buy something?",
        a:
          "Not right now. Everything is ordered ahead, because we raise against a number rather than keeping stock on hand. A farm store you can drop into is on the long term list, and it is a genuinely different operation than what we run today.",
      },
      {
        q: "Do you deliver?",
        a:
          "Not currently. At our scale a delivery route costs a working day and quietly raises the price for everyone. Farmers markets are the direction we are heading for people who want an option other than driving out here.",
      },
      {
        q: "What do I need to bring?",
        a:
          "For chicken, a cooler and cleared freezer space at home. A batch of around ten whole birds takes more room than people expect. For flowers or wreaths, just room in the car where nothing will crush them.",
      },
      {
        q: "What if I cannot make the window?",
        a:
          "Tell us and we will work it out. We are two people on a farm rather than a warehouse with a shift schedule, and a message ahead of time solves almost anything. Missing it without a word is the only version that gets difficult.",
      },
      {
        q: "How far out are you?",
        a:
          "About fifty five minutes from the Council Bluffs and Omaha area, and roughly an hour from most of Des Moines, sitting right along Interstate 80. Being genuinely reachable from both metros is one of the better things about where we are.",
      },
    ],
    crossLinks: [
      { label: "Pasture raised chicken, direct off the farm", href: "/pastured-chicken/" },
      { label: "Wreaths, garland and seasonal centerpieces", href: "/wreaths-and-garland/" },
      { label: "Everything the farm side is working on", href: "/farm/" },
    ],
    ctaHeading: "Get on the list",
    ctaBody:
      "Tell us roughly what you would want and we will come back to you with dates. It is what decides how much we raise, and it costs you nothing to be on it.",
    ctaLabel: "Join the list",
    ctaHref: "/contact/",
  },
  {
    slug: "/event-flowers/",
    side: "floral",
    navLabel: "Events and Celebrations",
    title: "Event Flowers, Des Moines and Omaha | Paulsen Farm Floral",
    description:
      "Floral design for showers, anniversaries, dinners and celebrations around Des Moines, Omaha and Cass County, Iowa. Grown right here when the season allows it.",
    eyebrow: "The floral studio",
    h1: "Events and celebrations",
    seasonNote:
      "Smaller than a wedding, quicker to plan, and often more fun to design. Tell us the date and the room.",
    intro: [
      "Showers, anniversaries, retirements, graduations, dinners. The parties that are not weddings but still want the room to feel like something is happening in it.",
      "These are usually easier to plan than a wedding and frequently more enjoyable to design, because there are fewer rules about what an event like this is supposed to look like. That freedom is most of the appeal.",
      "Tell us the date, the room and roughly what you are picturing, and we can tell you what is genuinely possible for that week of the year. Season is the honest constraint here, not budget or ambition.",
    ],
    included: {
      h2: "What we design for",
      items: [
        {
          h3: "Showers and celebrations",
          body:
            "Baby showers, bridal showers, birthdays, graduations. Usually one room, usually a few tables, and usually a host who wants it to look considered without turning it into a second job on top of everything else.",
        },
        {
          h3: "Anniversaries and milestones",
          body:
            "The dinners that mark something. These tend to want fewer, better pieces rather than a lot of coverage, and they are often the ones where a single specific flower carries real meaning for the people there.",
        },
        {
          h3: "Dinners and long tables",
          body:
            "Runners, low arrangements, and pieces sized so people can actually see across the table at each other. Getting the height right is most of the work and it is the thing most often gotten wrong.",
        },
        {
          h3: "Corporate and community events",
          body:
            "Banquets, openings, fundraisers, anything where a room needs to look finished for an evening. Straightforward work, usually planned further ahead, and easy to scale up or down against what a budget actually allows.",
        },
        {
          h3: "Seasonal pieces for a gathering",
          body:
            "Fall centerpieces, holiday arrangements, spring tables. The floral studio already runs a limited fall wreath and centerpiece season, and event work in that stretch draws on the same material.",
        },
        {
          h3: "One good piece, if that is all you need",
          body:
            "Not everything requires full coverage. A single strong arrangement in the right spot often does more for a room than a dozen small ones spread thin, and we will tell you when that is the better call.",
        },
      ],
    },
    process: {
      h2: "How it works",
      steps: [
        {
          h3: "Send us the date and the room",
          body:
            "Those two things tell us most of what we need. The date sets what is in season and the room sets the scale. A photo of the space, even a bad one from your phone, is worth a long description.",
        },
        {
          h3: "Tell us the feeling, not the flower list",
          body:
            "You do not need to know botanical names. Loose and garden grown, or structured and formal, or a color you keep coming back to. We would rather start from the feeling and work toward the stems.",
        },
        {
          h3: "We come back with what that week allows",
          body:
            "Iowa seasons decide a great deal. We tell you what we can grow, what we would source, and where your idea runs into what is actually available in that stretch of the year. Then we adjust together.",
        },
        {
          h3: "We make it and get it there",
          body:
            "Designed close to the date so it arrives fresh, delivered to the venue and set where it needs to go. For most events we are in and out well before anyone arrives.",
        },
      ],
    },
    context: {
      h2: "Grown here where the season allows",
      paragraphs: [
        "We sit deliberately between two things. A buy only event florist orders everything in from a wholesaler year round. A flower farm sells whatever the field happens to be producing that week. Neither one is quite what we are.",
        "What we want is to grow as much of what we use as we possibly can, and to source the rest honestly rather than pretending the season is longer than it is. In an Iowa June that can mean a great deal from this ground. In February it cannot.",
        "That matters to you in a specific way. Flowers cut from a field an hour before they are designed behave differently than flowers that spent four days in transit, and they last differently once they are on your table.",
        "It also means we will occasionally talk you out of something. If what you are picturing needs a flower that will not exist here that week, the honest move is to show you what will be at its best instead, and that is usually the better arrangement anyway.",
      ],
    },
    faq: [
      {
        q: "How far ahead should I book?",
        a:
          "A few weeks is comfortable for most events and gives us room to plan around what is in season. Shorter notice is often workable, particularly for smaller pieces, so it is always worth asking rather than assuming it is too late.",
      },
      {
        q: "Do you do weddings too?",
        a:
          "Yes, and weddings have their own page because they are a genuinely different job. If you are planning a wedding rather than an event, start there. Weddings are not hosted at our farm, we design for your venue.",
      },
      {
        q: "What areas do you serve?",
        a:
          "Cass County and the Atlantic area, out toward Des Moines and the Omaha metro. We sit roughly an hour from Des Moines and about fifty five minutes from the Council Bluffs area, right along Interstate 80.",
      },
      {
        q: "What does event floral cost?",
        a:
          "It depends almost entirely on scale and season, so a published number would be misleading. Tell us roughly what you have in mind to spend and we will tell you what that actually buys for your date, with no pressure.",
      },
      {
        q: "Can I request specific flowers?",
        a:
          "Absolutely, and it helps to know what you love. What we will do is tell you honestly whether it is available and at its best for your date, and offer the closest thing we would be proud to send if it is not.",
      },
      {
        q: "Can we hold the event at your farm?",
        a:
          "No. We design flowers for your venue rather than hosting events here. The farm is a working family home and it is not set up for gatherings. Opening it up properly is a long term ambition, not a current offering.",
      },
    ],
    crossLinks: [
      { label: "Sympathy flowers, handled quickly and quietly", href: "/sympathy-flowers/" },
      { label: "Wedding flowers, grown where the season allows", href: "/wedding-flowers/" },
      { label: "Wreaths, garland and seasonal centerpieces", href: "/wreaths-and-garland/" },
    ],
    ctaHeading: "Tell us about your event",
    ctaBody:
      "Send us the date, the room and roughly what you are picturing. We will come back with what is genuinely possible for that week of the year.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact/",
  },
  {
    slug: "/sympathy-flowers/",
    side: "floral",
    navLabel: "Sympathy Flowers",
    title: "Sympathy Flowers, Iowa | Paulsen Farm and Floral Design",
    description:
      "Arrangements for a service, a graveside or a front step, handled quickly and quietly. Floral design from a farm in Cass County, Iowa, near Des Moines and Omaha.",
    eyebrow: "The floral studio",
    h1: "Sympathy flowers",
    seasonNote:
      "Short notice is the normal case here, not the exception. Reach out and we will take it from there.",
    intro: [
      "Arrangements for a service, a graveside, or a front step. Handled quickly and without fuss, because that is what this work asks for and because the person ordering them usually has a great deal else to think about.",
      "You do not need to know what you want. Most people do not, and being asked to make design decisions in that particular week is its own small cruelty. Tell us who it is for and roughly the feeling, and we will handle the rest.",
      "We grow what the season allows and source the rest carefully. In an Iowa February that means most of it comes in. In June it can be almost entirely from here. Either way you get the same care put into it.",
    ],
    included: {
      h2: "What we can make",
      items: [
        {
          h3: "Arrangements for a service",
          body:
            "Pieces sized for a funeral home or a church, made to read from the back of a room rather than close up. If you can tell us the venue we can tell you what actually works in that space, which is not always what a catalog photo suggests.",
        },
        {
          h3: "Standing pieces and easel work",
          body:
            "The larger formal pieces that stand on their own beside a casket or an urn. These take the most lead time of anything on this page, so they are the first thing to ask about if the service is soon.",
        },
        {
          h3: "Casket and urn flowers",
          body:
            "Designed for the specific piece they sit on and for the room they sit in. This is work where proportion matters more than variety, and it is worth a short conversation rather than a form.",
        },
        {
          h3: "Something for a front step",
          body:
            "Often the more useful thing. An arrangement sent to a house says something a service piece cannot, and it arrives in the weeks afterward when most of the flowers have stopped coming and the hard part is starting.",
        },
        {
          h3: "A piece that means something specific",
          body:
            "If there was a flower they grew, a color they wore, or a garden they kept, tell us. Building around one real detail is almost always better than building around a category, and it costs nothing extra to try.",
        },
        {
          h3: "Locally grown where the season allows",
          body:
            "During our growing season a meaningful share can come off this farm. Out of season it cannot, and we will tell you which you are getting rather than implying everything is local year round.",
        },
      ],
    },
    process: {
      h2: "How to arrange it",
      steps: [
        {
          h3: "Reach out, however is easiest",
          body:
            "Send us a message with the date and the town. You do not need details ready and you do not need to have decided anything. Getting the timeline in front of us is the only urgent part.",
        },
        {
          h3: "Tell us the setting",
          body:
            "Funeral home, church, graveside or house. That one answer changes almost everything about what is appropriate, what size works, and how early it needs to be finished and delivered.",
        },
        {
          h3: "We come back with what is possible",
          body:
            "Given the date and the season we tell you what we can actually make, honestly. If the timeline is too tight for what you are asking for, we will say so rather than promise it and disappoint you that week.",
        },
        {
          h3: "We deliver it where it needs to be",
          body:
            "To the venue for the service, or to a house afterward. We confirm the timing with you and get it there ahead of when it is needed, because being late to this is not a recoverable mistake.",
        },
      ],
    },
    context: {
      h2: "Why we do this work",
      paragraphs: [
        "Sympathy work runs on short notice and does not care what season it is, which makes it one of the steadiest things a floral studio does. That is the practical reason it is on this site rather than left off a young business.",
        "The real reason is different. Most of what a florist makes is for a day someone planned for months. This is for a day nobody planned for at all, and the flowers are doing something other than decorating. They are the thing people send when there is nothing to say.",
        "Bronte has done design work long enough to know the difference between a piece that photographs well and a piece that holds a room, and this is work where the second one is the only one that counts.",
        "We are a young business and we will tell you what we cannot do. If the timeline is impossible or the piece is beyond what we can make well that week, the right answer is to say so and point you somewhere else, and we will.",
      ],
    },
    faq: [
      {
        q: "How quickly can you turn something around?",
        a:
          "It depends on the piece and the week. Smaller arrangements are usually possible on short notice. Large standing pieces need more lead time. Reach out as soon as you know the date and we will tell you honestly what is achievable.",
      },
      {
        q: "Do you deliver to funeral homes?",
        a:
          "Yes, around the Atlantic and Cass County area and out toward the Des Moines and Omaha metros. Tell us the venue and the time and we confirm delivery ahead of when it is needed.",
      },
      {
        q: "What does it cost?",
        a:
          "Sympathy work varies too much by size and season for a published number to mean anything. Tell us roughly what you have in mind to spend and we will tell you what is possible at that level, with no pressure either way.",
      },
      {
        q: "I do not know what to order. Can you just decide?",
        a:
          "Yes, and most people ask for exactly that. Tell us the setting, the date and anything you know about the person. We will make something appropriate and check with you before it is finished if anything is unclear.",
      },
      {
        q: "Are the flowers grown on your farm?",
        a:
          "Some of them, depending on the time of year. During our growing season a real share comes off this farm. In an Iowa winter it cannot, and we would rather tell you that than pretend otherwise.",
      },
      {
        q: "Can you match flowers to something specific?",
        a:
          "Usually, and it is worth asking. A flower they grew or a color that meant something gives us a much better place to start than a general request. If a specific stem is out of season we will find the closest honest match.",
      },
    ],
    crossLinks: [
      { label: "Floral design for events and celebrations", href: "/event-flowers/" },
      { label: "Wedding flowers, grown where the season allows", href: "/wedding-flowers/" },
      { label: "Everything the floral studio does", href: "/floral/" },
    ],
    ctaHeading: "Tell us the date",
    ctaBody:
      "Send us the date and the town and we will come back to you quickly with what is possible. You do not need to have anything else decided before you reach out.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact/",
  },
];
