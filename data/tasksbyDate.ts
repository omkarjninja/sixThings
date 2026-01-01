// data/tasksByDate.ts
export type StatKey =
  | "physical"
  | "intelligence"
  | "mind"
  | "creation"
  | "money"
  | "charisma";

export type DayTasks = Record<StatKey, string>;

/**
 * Tasks for Nov 18 -> Nov 30, 2025
 * Keys are ISO dates (YYYY-MM-DD)
 */
export const tasksByDate: Record<string, DayTasks> = 
  {
  "2025-11-20": {
    "physical": "Hold a plank for 30 seconds.",
    "intelligence": "Learn the meaning of a word you've seen often but never checked.",
    "creation": "Capture a texture photo (wall, ground, or object surface).",
    "mind": "Fix one tiny flaw in something you do daily.",
    "charisma": "Reply to a message with genuine interest, not short replies.",
    "money": "Track every rupee you spend today, even the small ones."
  },
  "2025-11-21": {
    "physical": "Do 12 controlled squats slowly.",
    "intelligence": "Read a short article or paragraph on something new.",
    "creation": "Make a 5-second aesthetic clip of something around you.",
    "mind": "List 3 things you improved this month, even tiny wins.",
    "charisma": "Say one thing that lifts someone's mood.",
    "money": "Revisit one subscription or expense and decide if it's worth keeping."
  },
  "2025-11-22": {
    "physical": "Take a 10-minute walk without your phone.",
    "intelligence": "Break a small problem into 3 next steps.",
    "creation": "Doodle a tiny shape or UI element with clean lines.",
    "mind": "Sit in silence for 1 minute and observe your thoughts.",
    "charisma": "Use someone's name intentionally in a conversation.",
    "money": "Save ₹50–₹100 intentionally by skipping something small."
  },
  "2025-11-23": {
    "physical": "Stretch your arms, back, and legs for 3 minutes.",
    "intelligence": "Learn a new shortcut for an app you use daily.",
    "creation": "Create a small color palette using objects around you.",
    "mind": "Rewrite one unclear thought into a clearer sentence.",
    "charisma": "Compliment someone on their effort, not appearance.",
    "money": "Check your bank balances today without judgment."
  },
  "2025-11-24": {
    "physical": "Do 15 calf raises.",
    "intelligence": "Watch a 1-minute productivity breakdown.",
    "creation": "Capture a photo that represents 'calm' to you.",
    "mind": "Reduce one habit or distraction by 1% today.",
    "charisma": "Ask someone a meaningful question instead of small talk.",
    "money": "Search for one new way you could earn ₹100 today."
  },
  "2025-11-25": {
    "physical": "Do a 1-minute wall sit.",
    "intelligence": "Learn a useful feature in an app you use often.",
    "creation": "Write a one-line quote of your own.",
    "mind": "Organize one tiny area—desk, bag, folder, or notes.",
    "charisma": "Send a voice note instead of typing.",
    "money": "Track one category of expenses today (food, travel, etc.)."
  },
  "2025-11-26": {
    "physical": "Do 20 jumping jacks.",
    "intelligence": "Ask 'Why?' five times about something you do.",
    "creation": "Make something random without judging it.",
    "mind": "Practice a small micro-skill for 5 minutes.",
    "charisma": "Start a small conversation with someone new.",
    "money": "Skip one unnecessary purchase today."
  },
  "2025-11-27": {
    "physical": "Hold a one-leg balance for 20 seconds each side.",
    "intelligence": "Learn a quick concept in under 2 minutes.",
    "creation": "Make a one-take content piece without retakes.",
    "mind": "Reflect: What can be 1% better today?",
    "charisma": "Message someone you haven't spoken to recently.",
    "money": "Learn one finance concept (EMI, compounding, SIP, etc.)."
  },
  "2025-11-28": {
    "physical": "Do 10 lunges on each leg.",
    "intelligence": "Read a short explanation of something interesting.",
    "creation": "Sketch a minimal card or UI layout idea.",
    "mind": "Remove one distraction for the next hour.",
    "charisma": "Give someone a thoughtful, detailed reply.",
    "money": "Add ₹100 to your savings (or any amount you can)."
  },
  "2025-11-29": {
    "physical": "Climb stairs for 1 minute.",
    "intelligence": "Learn one surprising fact today.",
    "creation": "Draw one perfect geometric shape (circle/square).",
    "mind": "Identify the most useful thing you learned this week.",
    "charisma": "Be the first to greet someone today.",
    "money": "Identify one thing you overspend on—just acknowledge it."
  },
  "2025-11-30": {
    "physical": "Repeat a previous exercise and increase difficulty slightly.",
    "intelligence": "Summarize one learning in a single sentence.",
    "creation": "Make something you're proud of—any medium.",
    "mind": "Write one line that defines your December goal.",
    "charisma": "Send a gratitude message to someone close.",
    "money": "Review your last 10 days of expenses and patterns."
  },
  "2025-12-01": {
    "physical": "Do 20 seconds of intense movement (burpees/run/jumps).",
    "intelligence": "Learn one new mental model in 60 seconds.",
    "creation": "Create a 10-second clip that shows 'Day 1 energy'.",
    "mind": "Write one limiting belief and rewrite it positively.",
    "charisma": "Give a genuine compliment to someone today.",
    "money": "Write one way you can earn ₹500 this week."
  },
    // add these entries to tasksByDate
"2025-12-02": {
  "physical": "Walk briskly for 15 minutes without music.",
  "intelligence": "Read one paragraph about a topic you avoid.",
  "creation": "Sketch a simple icon idea in 5 minutes.",
  "mind": "List one thing you can stop doing today.",
  "charisma": "Ask someone about their day—listen fully.",
  "money": "Note every expense for the next 24 hours."
},
"2025-12-03": {
  "physical": "Do 3 sets of 10 shoulder taps.",
  "intelligence": "Watch a 2-minute explainer on a tool you use.",
  "creation": "Write a one-line micro-story.",
  "mind": "Spend 3 minutes breathing slowly and observing.",
  "charisma": "Send a short voice note instead of text.",
  "money": "Check one bill and see if you can lower it."
},
"2025-12-04": {
  "physical": "Try 30 seconds of fast feet (on spot).",
  "intelligence": "Find and learn one new keyboard shortcut.",
  "creation": "Design a tiny poster/layout on your phone.",
  "mind": "Replace one negative thought with a neutral one.",
  "charisma": "Give a specific compliment to a colleague/friend.",
  "money": "Set aside ₹50 into a savings pocket."
},
"2025-12-05": {
  "physical": "Hold a plank for 45 seconds.",
  "intelligence": "Explain a recent problem in one clear sentence.",
  "creation": "Record a 10-second behind-the-scenes clip.",
  "mind": "Identify one small habit to remove tomorrow.",
  "charisma": "Start a conversation with a question, not a statement.",
  "money": "List 3 ways to save ₹100 this week."
},
"2025-12-06": {
  "physical": "Do 20 fast squats with good form.",
  "intelligence": "Read the first paragraph of a technical doc.",
  "creation": "Make a thumbnail for an idea you have.",
  "mind": "Write one short rule for how you use time.",
  "charisma": "Share something you learned and why it mattered.",
  "money": "Review subscriptions and cancel one you don't need."
},
"2025-12-07": {
  "physical": "Try a mobility flow for 5 minutes.",
  "intelligence": "Teach someone one tiny trick you use.",
  "creation": "Create a 15-second visual mood clip.",
  "mind": "Do one task slowly and with full focus.",
  "charisma": "Ask for someone's opinion and value it.",
  "money": "Track one purchase habit for a day (snacks, rides)."
},
"2025-12-08": {
  "physical": "Walk up stairs for 2 minutes straight.",
  "intelligence": "Find a definition for a phrase you use often.",
  "creation": "Combine two unrelated ideas into one sketch.",
  "mind": "Journal one sentence about how you feel now.",
  "charisma": "Reconnect with someone with a thoughtful message.",
  "money": "Round up and save the next small purchase mentally."
},
"2025-12-09": {
  "physical": "Try 30 seconds of shadow boxing or punches.",
  "intelligence": "Read one quick stat or chart and summarize it.",
  "creation": "Design a simple one-card UI concept.",
  "mind": "List three tiny wins from the week.",
  "charisma": "Tell a short personal story to someone.",
  "money": "Identify one thing you can buy cheaper and check alternatives."
},
"2025-12-10": {
  "physical": "Do 15 push-ups (modify if needed).",
  "intelligence": "Ask 'why' twice about a routine task.",
  "creation": "Take a photo with an unusual angle.",
  "mind": "Schedule one 15-minute block for deep work tomorrow.",
  "charisma": "Introduce two people who can help each other.",
  "money": "Calculate how much you spend on coffee this week."
},
"2025-12-11": {
  "physical": "Perform 20 calf raises slowly and controlled.",
  "intelligence": "Learn one fact about a country you don't know.",
  "creation": "Draw a quick logo idea in under 5 minutes.",
  "mind": "Write one boundary you'll keep this week.",
  "charisma": "Ask someone about their goal and offer help.",
  "money": "Save any loose change you have today."
},
"2025-12-12": {
  "physical": "Practice 1 minute of balance (one leg).",
  "intelligence": "Read one short how-to and try it mentally.",
  "creation": "Make a 5-second stop-motion with objects.",
  "mind": "Do a 2-minute brain dump of thoughts.",
  "charisma": "Say thank you with a specific reason.",
  "money": "List one low-effort way to earn extra ₹200."
},
"2025-12-13": {
  "physical": "Do 25 jumping jacks in steady rhythm.",
  "intelligence": "Watch a 2-minute talk on a topic you dislike.",
  "creation": "Create a quick color palette and name it.",
  "mind": "Remove one distracting tab or app for an hour.",
  "charisma": "Share a helpful link with a short note.",
  "money": "Check your last 3 transactions and note surprises."
},
"2025-12-14": {
  "physical": "Go for a brisk 20-minute walk.",
  "intelligence": "Learn a new word and use it once aloud.",
  "creation": "Record a short voice idea and save it.",
  "mind": "Ask: 'What can I simplify today?' and act on one.",
  "charisma": "Give a spontaneous positive observation to someone.",
  "money": "Plan one no-spend window of 24 hours."
},
"2025-12-15": {
  "physical": "Try a 1-minute bodyweight circuit (squats, plank, lunges).",
  "intelligence": "Describe a complex idea in one tweet-length line.",
  "creation": "Sketch a single-frame comic or concept.",
  "mind": "Notice one repeating thought and note it.",
  "charisma": "Invite someone to a quick coffee or chat.",
  "money": "Check a bill or invoice for one possible error."
},
"2025-12-16": {
  "physical": "Do 3 sets of 10 lunges (each leg).",
  "intelligence": "Find a shortcut in a tool you use and try it.",
  "creation": "Redesign a tiny UI element in 10 minutes.",
  "mind": "Write one immediate next step for a stalled task.",
  "charisma": "Give someone specific praise for progress.",
  "money": "Set a small target: save ₹100 this week and note how."
},
"2025-12-17": {
  "physical": "Hold a 45-second wall sit.",
  "intelligence": "Read a short paragraph about a new concept.",
  "creation": "Create a one-line micro-poem.",
  "mind": "Plan your top 3 tasks for tomorrow.",
  "charisma": "Ask a curious follow-up question in a convo.",
  "money": "List one small expense you can cut next week."
},
"2025-12-18": {
  "physical": "Do 20 seconds of high-knee runs in place.",
  "intelligence": "Explain something you know in 1 sentence to someone.",
  "creation": "Make a one-tap interaction idea for an app.",
  "mind": "Practice a 2-minute mindful pause before starting work.",
  "charisma": "Share honest encouragement with someone trying hard.",
  "money": "Add one recurring expense to a tracking sheet."
},
"2025-12-19": {
  "physical": "Try 10 slow, controlled burpees (or halves).",
  "intelligence": "Watch a 3-minute explanation on a topic you avoid.",
  "creation": "Capture a short loopable clip (2–3s).",
  "mind": "Identify one habit that wastes time and tweak it.",
  "charisma": "Tell someone why you appreciate a small thing they did.",
  "money": "Estimate your weekly spending and compare to last week."
},
"2025-12-20": {
  "physical": "Go for a 10-minute quick jog or fast walk.",
  "intelligence": "Spend 5 minutes learning a new app feature.",
  "creation": "Draft a concept for a tiny side project.",
  "mind": "Write one thing you’ll stop doing this month.",
  "charisma": "Do a small act of kindness anonymously.",
  "money": "Create a simple budget line for groceries this week."
},
"2025-12-21": {
  "physical": "Do a 2-minute mobility stretch routine.",
  "intelligence": "Read one short opinion piece and summarize it.",
  "creation": "Design a minimal single-screen layout.",
  "mind": "Reflect: what made you feel productive this week?",
  "charisma": "Ask someone about their proudest recent moment.",
  "money": "Compare prices for one item before buying."
},
"2025-12-22": {
  "physical": "Try a dynamic warm-up for 4 minutes.",
  "intelligence": "Learn a trick to speed up one task.",
  "creation": "Make a simple animated GIF or loop.",
  "mind": "Unsubscribe from one distracting newsletter.",
  "charisma": "Offer a helpful resource to someone who asked.",
  "money": "Move ₹100 into savings (small wins add up)."
},
"2025-12-23": {
  "physical": "Do 15 bodyweight squats with perfect depth.",
  "intelligence": "Find a short tutorial and try the first step.",
  "creation": "Capture one image with intentional lighting.",
  "mind": "Declutter one small digital folder or desktop area.",
  "charisma": "Share a memory that made you laugh with someone.",
  "money": "Plan one inexpensive gift idea under ₹300."
},
"2025-12-24": {
  "physical": "Go for a relaxed 20-minute walk outside.",
  "intelligence": "Read a short piece of history or culture.",
  "creation": "Make a tiny festive visual (a card or story).",
  "mind": "Write one gratitude line before bed.",
  "charisma": "Call or message someone to wish them well.",
  "money": "Set a simple limit for holiday spending today."
},
"2025-12-25": {
  "physical": "Move intentionally for 5 minutes (dance or stretch).",
  "intelligence": "Learn one interesting holiday trivia fact.",
  "creation": "Create a single-frame visual celebrating today.",
  "mind": "Take one longer breath and notice calm.",
  "charisma": "Share warmth—send a short heartfelt note.",
  "money": "Give yourself a small treat but note the cost."
},
"2025-12-26": {
  "physical": "Do a short bodyweight circuit for 3 minutes.",
  "intelligence": "Read one how-to and pick one tiny tip to use.",
  "creation": "Sketch a product idea for 7 minutes.",
  "mind": "Plan a simple routine for the coming week.",
  "charisma": "Reconnect with someone you haven't messaged in a while.",
  "money": "Review spending this month and note one improvement."
},
"2025-12-27": {
  "physical": "Try a mobility sequence for hips and shoulders.",
  "intelligence": "Explain a concept you use daily to someone else.",
  "creation": "Make a 10-second demo of a small interaction.",
  "mind": "Decide one habit to focus on for the next 7 days.",
  "charisma": "Give a sincere public shout-out (social or group).",
  "money": "Set a small goal: save ₹500 by month-end and list steps."
},
"2025-12-28": {
  "physical": "Go for a brisk 15-minute walk and notice posture.",
  "intelligence": "Learn a useful shortcut for one app you love.",
  "creation": "Design a tiny landing layout on paper.",
  "mind": "Write one lesson December taught you so far.",
  "charisma": "Offer someone help without waiting to be asked.",
  "money": "Identify one cheap side gig idea and note first step."
},
"2025-12-29": {
  "physical": "Do 20 quick mountain climbers in sets.",
  "intelligence": "Read one paragraph from a book you avoided.",
  "creation": "Turn a simple idea into a shareable image.",
  "mind": "Reflect on one choice you'll make differently next month.",
  "charisma": "Ask someone about a goal they're proud of.",
  "money": "Tally small daily expenses to see patterns."
},
"2025-12-30": {
  "physical": "Repeat an earlier exercise and try to improve it.",
  "intelligence": "Summarize one growth area you worked on this month.",
  "creation": "Create something small and keep it (don't delete).",
  "mind": "Write one sentence that describes your January intention.",
  "charisma": "Reach out to one mentor or admired person with thanks.",
  "money": "Prepare a simple spending plan for first week of January."
},
"2025-12-31": {
  "physical": "Do a 2-minute movement warm-up and breathe deeply.",
  "intelligence": "Review one book/article that shaped your year.",
  "creation": "Make a tiny 'year highlight' visual or note.",
  "mind": "Write one sentence that closes this year for you.",
  "charisma": "Say thank you to someone who helped you this year.",
  "money": "Review the month's finances and celebrate one money win."
},
    "2026-01-01": {
  "physical": "Move your body gently for 5 minutes—no pressure.",
  "intelligence": "Reflect on one thing you learned last year.",
  "creation": "Write or sketch one idea you want to explore this year.",
  "mind": "Ask: What do I want less of this year?",
  "charisma": "Send a simple New Year check-in to someone.",
  "money": "Look at your current balance without judgment."
},
"2026-01-02": {
  "physical": "Go for a relaxed 10-minute walk.",
  "intelligence": "Learn one small fact about something you enjoy.",
  "creation": "Capture a photo of something that feels fresh.",
  "mind": "Write one sentence about how today feels.",
  "charisma": "Smile and greet someone first today.",
  "money": "Track just one expense today."
},
"2026-01-03": {
  "physical": "Stretch your back, neck, and legs for 4 minutes.",
  "intelligence": "Read one short paragraph that interests you.",
  "creation": "Doodle or sketch without a goal.",
  "mind": "Notice one thought you repeat often.",
  "charisma": "Reply thoughtfully to one message.",
  "money": "Identify one unnecessary expense from last month."
},
"2026-01-04": {
  "physical": "Do 10 bodyweight squats slowly.",
  "intelligence": "Explain one simple concept out loud to yourself.",
  "creation": "Write a one-line intention for January.",
  "mind": "Remove one small distraction for an hour.",
  "charisma": "Give a genuine compliment today.",
  "money": "Set a rough saving intention (any amount)."
},
"2026-01-05": {
  "physical": "Move intentionally for 5 minutes (walk, stretch, dance).",
  "intelligence": "Learn one shortcut or tip in an app you use daily.",
  "creation": "Save one idea somewhere you can revisit.",
  "mind": "Write one thing you want to be consistent with.",
  "charisma": "Ask someone how they’re really doing.",
  "money": "Check one recurring expense."
},
"2026-01-06": {
  "physical": "Do 15 jumping jacks or march in place.",
  "intelligence": "Read one short explanation of a new term.",
  "creation": "Make a rough layout or concept (no polish).",
  "mind": "Pause for 60 seconds and breathe slowly.",
  "charisma": "Start a conversation with curiosity.",
  "money": "Note one way to save a little this week."
},
"2026-01-07": {
  "physical": "Go for a 15-minute walk without distractions.",
  "intelligence": "Summarize something you learned this week.",
  "creation": "Create a small visual or note to mark Week 1.",
  "mind": "Reflect: What felt easy to do this week?",
  "charisma": "Thank someone for something specific.",
  "money": "Review your spending mindset this week."
},

"2026-01-08": {
  "physical": "Do 20 squats with steady breathing.",
  "intelligence": "Break one small problem into steps.",
  "creation": "Design or sketch one tiny improvement idea.",
  "mind": "Choose one habit to focus on today.",
  "charisma": "Be fully present in one conversation.",
  "money": "Track all expenses today, even small ones."
},
"2026-01-09": {
  "physical": "Hold a plank for 30 seconds.",
  "intelligence": "Read one useful paragraph and apply the idea mentally.",
  "creation": "Capture a 5-second clip or photo with intention.",
  "mind": "Write one thought you want to let go of.",
  "charisma": "Send a message that encourages someone.",
  "money": "Identify one way to earn or save ₹100."
},
"2026-01-10": {
  "physical": "Stretch hips and shoulders for 4 minutes.",
  "intelligence": "Learn a small concept related to your work or interest.",
  "creation": "Create one rough draft of anything.",
  "mind": "Ask: What am I avoiding today?",
  "charisma": "Speak clearly and slowly in one interaction.",
  "money": "Check last 3 transactions and note patterns."
},

"2026-01-11": {
  "physical": "Do 12 push-ups (modify if needed).",
  "intelligence": "Explain a concept you know in one sentence.",
  "creation": "Make something in under 10 minutes.",
  "mind": "Write one thing that made you feel focused.",
  "charisma": "Reach out to someone you respect.",
  "money": "Set a simple spending limit for today."
},
"2026-01-12": {
  "physical": "Walk briskly for 10 minutes.",
  "intelligence": "Learn one new word and its meaning.",
  "creation": "Sketch a simple interface or object.",
  "mind": "Remove one digital distraction for 2 hours.",
  "charisma": "Listen more than you speak today.",
  "money": "Delay one purchase by 24 hours."
},
"2026-01-13": {
  "physical": "Do 20 lunges (10 each leg).",
  "intelligence": "Read a short opinion different from yours.",
  "creation": "Combine two ideas into one concept.",
  "mind": "Notice one habit you’re rebuilding.",
  "charisma": "Ask someone a thoughtful follow-up question.",
  "money": "Save any small amount today."
},

"2026-01-14": {
  "physical": "Hold a wall sit for 40 seconds.",
  "intelligence": "Watch a 2-minute explainer video.",
  "creation": "Make a tiny improvement to something old.",
  "mind": "Reflect: What’s getting easier now?",
  "charisma": "Share something useful with someone.",
  "money": "Review one subscription or recurring cost."
},

"2026-01-15": {
  "physical": "Repeat an exercise you enjoyed this week.",
  "intelligence": "Summarize one idea you learned recently.",
  "creation": "Create without deleting anything.",
  "mind": "Write one sentence about your current momentum.",
  "charisma": "Check in with someone you haven’t spoken to recently.",
  "money": "Plan one smart financial move for this month."
},

// --- Jan 16–31 (momentum + sharpening) ---
"2026-01-16": {
  "physical": "Increase intensity slightly in today’s movement.",
  "intelligence": "Learn one small concept related to growth.",
  "creation": "Build on something you already started.",
  "mind": "Choose focus over speed today.",
  "charisma": "Speak with confidence in one moment.",
  "money": "Track spending for one full category."
},
"2026-01-17": {
  "physical": "Do 25 jumping jacks or similar cardio.",
  "intelligence": "Ask 'why' about a habit you have.",
  "creation": "Create a variation of something you made before.",
  "mind": "Write one rule you want to live by this month.",
  "charisma": "Offer help without being asked.",
  "money": "Identify one habit that leaks money."
},
"2026-01-18": {
  "physical": "Stretch deeply for 5 minutes.",
  "intelligence": "Learn one surprising fact.",
  "creation": "Make a minimal version of an idea.",
  "mind": "Slow down one task intentionally.",
  "charisma": "Express appreciation clearly.",
  "money": "Set a weekly savings target."
},

// You can continue this pattern for Jan 19–31 if you want,
// or I can generate the remaining dates instantly.
    "2026-01-19": {
  "physical": "Do 20 bodyweight squats with controlled breathing.",
  "intelligence": "Read one short explanation of a concept you usually skip.",
  "creation": "Create a rough draft without aiming for quality.",
  "mind": "Ask: What am I overcomplicating right now?",
  "charisma": "Acknowledge someone’s effort sincerely.",
  "money": "Review yesterday’s spending and note one insight."
},
"2026-01-20": {
  "physical": "Go for a 15-minute walk and notice your posture.",
  "intelligence": "Learn one small improvement for your daily workflow.",
  "creation": "Capture one photo that feels intentional.",
  "mind": "Write one sentence about what’s working lately.",
  "charisma": "Start a conversation with curiosity, not purpose.",
  "money": "Track every expense today without trying to optimize."
},
"2026-01-21": {
  "physical": "Hold a plank for 40 seconds (or best effort).",
  "intelligence": "Summarize one thing you learned this week.",
  "creation": "Make a tiny improvement to something you already made.",
  "mind": "Notice when you feel most focused today.",
  "charisma": "Send a thoughtful follow-up message.",
  "money": "Identify one expense you can reduce slightly."
},
"2026-01-22": {
  "physical": "Stretch hips, back, and shoulders for 5 minutes.",
  "intelligence": "Learn a basic principle behind something you use.",
  "creation": "Sketch or write one new idea quickly.",
  "mind": "Remove one distraction for the next hour.",
  "charisma": "Give someone your full attention for one interaction.",
  "money": "Set a simple spending intention for today."
},
"2026-01-23": {
  "physical": "Do 25 jumping jacks or similar movement.",
  "intelligence": "Ask one better question than yesterday.",
  "creation": "Create something small and keep it unfinished.",
  "mind": "Write one thing you’re getting better at.",
  "charisma": "Express appreciation without expecting a reply.",
  "money": "Save a small amount today, even symbolic."
},
"2026-01-24": {
  "physical": "Walk briskly for 10 minutes.",
  "intelligence": "Read a short paragraph and extract one idea.",
  "creation": "Design a minimal layout or structure.",
  "mind": "Reflect: What would make today feel complete?",
  "charisma": "Reconnect casually with someone you know.",
  "money": "Check your balance and observe your reaction."
},
"2026-01-25": {
  "physical": "Repeat an exercise from earlier this month.",
  "intelligence": "Explain something you understand to yourself clearly.",
  "creation": "Make a simple visual or note to mark progress.",
  "mind": "Write one lesson January is teaching you.",
  "charisma": "Encourage someone who’s trying.",
  "money": "Review spending from the last 7 days."
},
"2026-01-26": {
  "physical": "Do 20 lunges (10 each leg).",
  "intelligence": "Learn one practical tip related to your goals.",
  "creation": "Create a variation of something you like.",
  "mind": "Choose calm over speed today.",
  "charisma": "Ask someone a meaningful, open question.",
  "money": "Identify one habit that saves money over time."
},
"2026-01-27": {
  "physical": "Hold a wall sit for 45 seconds.",
  "intelligence": "Read a short explanation of a topic you avoid.",
  "creation": "Make a rough plan for a future idea.",
  "mind": "Notice one thought pattern you want to change.",
  "charisma": "Be the first to reach out today.",
  "money": "Delay one purchase by 48 hours."
},
"2026-01-28": {
  "physical": "Move intentionally for 5 minutes (stretch or flow).",
  "intelligence": "Summarize one insight from this week.",
  "creation": "Create without checking references.",
  "mind": "Write one sentence about your current direction.",
  "charisma": "Say something kind out loud today.",
  "money": "Plan one smart money move for February."
},
"2026-01-29": {
  "physical": "Do 30 seconds of fast movement (run, jumps, etc.).",
  "intelligence": "Learn one small concept in under 2 minutes.",
  "creation": "Capture a short clip or image that feels real.",
  "mind": "Reflect: What feels lighter than before?",
  "charisma": "Thank someone who supported you this month.",
  "money": "Note one financial win from January."
},
"2026-01-30": {
  "physical": "Repeat your favorite movement from this month.",
  "intelligence": "Write one thing you now understand better.",
  "creation": "Create something just for yourself.",
  "mind": "Decide one habit to carry into February.",
  "charisma": "Share a genuine closing message with someone.",
  "money": "Review January spending without judgment."
},
"2026-01-31": {
  "physical": "Do a short full-body movement and breathe deeply.",
  "intelligence": "Reflect on one idea that shaped your January.",
  "creation": "Make a tiny ‘month complete’ note or visual.",
  "mind": "Write one sentence that closes January.",
  "charisma": "Express gratitude to yourself for showing up.",
  "money": "Set one clear financial intention for February."
}
};

;
