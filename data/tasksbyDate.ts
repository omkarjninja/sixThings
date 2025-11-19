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
  }

};

;