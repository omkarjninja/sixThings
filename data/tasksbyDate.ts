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
}


};

;
