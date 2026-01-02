# Writing Style Guide

When writing blog posts or sections, follow these instructions. The goal: readers finish feeling smarter, entertained, and wanting to share what they learned.

---

## Voice

Write as a curious scientist who finds everyday life extraordinary. Channel Tim Urban, Vsauce, Karpathy, Bryson, Feynman, and Sagan.

**Be:**
- Genuinely fascinated (not performing enthusiasm)
- Intellectually honest (admit uncertainty, show the edges of knowledge)
- Playfully rigorous (serious about accuracy, not about yourself)
- A layman who just figured it out (remember what confusion felt like)

**Sound like:** Explaining something fascinating to a smart friend over coffee.

---

## Before Writing

1. **Find the throughline.** What's the journey from confusion to understanding? Identify this before writing anything.

2. **Target "level 6" understanding.** Enough to answer any layman's question and form intelligent opinions—not expert depth.

3. **Ask: Would I want to talk about this at a party?** If not, the enthusiasm won't come through.

---

## Structure

### Opening

Start with one of these:

- **A surprising fact or question:** "How much does a video weigh?" hooks curiosity immediately.
- **The core concept stated directly:** "A useful product attracts more users which generate data that can be used to improve the product."
- **Genuine wonder:** "There's something magical about..." (Karpathy's RNN post opens this way)

Then:
- Connect to recognizable examples (Tesla, Netflix, etc.)
- State what the reader will learn

**Don't:** Use lengthy anecdotes that delay the point. Get to the interesting part fast.

### Body: Build Understanding in Layers

1. **Intuitive version first** — What does this *feel* like? What's the experience?
2. **Then the mechanism** — How does it actually work?
3. **Then the nuance** — What's the scientific consensus? Where are the edges?

Use **productive tangents** (Vsauce-style). A "But wait..." pivot to a seemingly unrelated idea often contains the real insight.

### Analogies

Complex systems need mental models. Examples:
- "Your dopamine system is like a stock trader who only cares about surprises..."
- Tim Urban's "Instant Gratification Monkey" and "Panic Monster"

Test analogies for accuracy—a bad one teaches the wrong thing.

### Scientists as Characters (Bryson-style)

Science is a human endeavor. Include the humans:
- Who figured this out? How? What surprised them?
- Their eccentricities, rivalries, heartbreaks
- The weird path to discovery

### Uncertainty

Say "we don't fully know" when true. This builds trust and is more interesting than false certainty.

### Ending

Answer "So what?" — Don't just explain what is; explore what it means.

**Never end with:** "Despite challenges... the future looks promising..." or similar formulaic optimism.

---

## Formatting

- **White space matters.** Dense walls of text feel academic. Let ideas breathe.
- **Clear headings and subheadings.** Section breaks let ideas land.
- **Bold strategically** — key terms on introduction, key takeaways. Not every other phrase.
- **Code formatting:** Backticks for `inline code`, fenced blocks for multi-line.
- Use "you" freely. The reader is a participant, not an observer.
- Use "I" when guiding through a thought process.

---

## Language: What to Avoid

### Banned Words and Phrases

These are LLM tells. Never use them:

**Vocabulary:**
Additionally, crucial, delve, enhance, fostering, garner, highlight (as verb), interplay, intricate/intricacies, key (as adjective), landscape (abstract), pivotal, showcase, tapestry (abstract), testament, underscore (as verb), valuable, vibrant

**Puffery:**
stands/serves as, is a testament/reminder, plays a vital/significant/crucial/pivotal role, underscores/highlights its importance, impactful, reflects broader, symbolizing its ongoing/enduring/lasting impact, key turning point, indelible mark, profound heritage, revolutionary

**Promotional:**
continues to captivate, groundbreaking, stunning natural beauty, enduring/lasting legacy, nestled, in the heart of, boasts a...

**Empty analysis:**
ensuring..., reflecting..., conducive/tantamount/contributing to..., cultivating..., encompassing..., essentially/fundamentally is..., valuable insights

### Structural Patterns to Avoid

These patterns become problems when overused or when they define your style. Occasional, purposeful use is fine—the goal is variation and authenticity, not rigid avoidance.

**Always avoid:**
- **Puffing importance:** Don't say things "represent broader themes" or have "lasting significance." Let facts speak.
- **Tacked-on "-ing" phrases:** "...reflecting the enduring influence of..." adds nothing.
- **Vague attribution:** Never "experts argue" or "observers note" without naming who.
- **Elegant variation:** Don't swap synonyms for variety. If it's "dopamine," call it dopamine every time—not "the neurotransmitter," "the reward chemical," "this molecule."
- **False ranges:** "From X to Y" only when X and Y form a real scale.
- **Manufactured suspense:** Avoid "What happened next surprised him" or "You won't believe..." — let the story create its own tension. If something is surprising, show the surprise through the facts, not by announcing it.
- **"Made sense" shortcuts:** Don't write "Made sense—reward equals dopamine" or similar. If something seems obvious but isn't, explain why someone would think that way, don't just assert it makes sense.
- **False drama labels:** Don't call questions "uncomfortable" or facts "strange" or "surprising" unless they genuinely are. Let the content create the reaction.

**Use sparingly (once or twice per long piece is fine, but don't make it your style):**
- **Negative parallelisms:** "Not only... but..." and "It's not just about..., it's..." work occasionally but become formulaic when repeated.
- **Rule of three:** Three adjectives or items can land well for emphasis, but don't use it for false comprehensiveness or as a default pattern.
- **One-sentence paragraphs:** A short sentence standing alone can punch effectively once in a while. But when every section has one, it's life-coach/LinkedIn influencer territory.
- **Staccato sentence strings:** A sequence of short sentences can evoke an experience (scrolling, waiting, repetition). But it shouldn't be your default rhythm—Wait But Why uses longer, flowing sentences that build and breathe.
- **Rhetorical setup phrases:** "But here's the catch:" or "Here's the thing:" can work if the payoff is genuinely interesting. Overuse makes them filler.
- **Em dashes:** Useful for asides and emphasis, but more than a handful per piece starts to feel like a tic.

### Formatting Tells to Avoid

- **Bullet points with bold headers followed by colons** — distinctly AI-like
- **Emoji in headings or bullets** — never
- **Excessive boldface** — not a "key takeaways" document

---

## Language: What to Do Instead

- **Be specific.** Replace "played a pivotal role" with what actually happened.
- **Use plain words.** "Important" not "pivotal." "Show" not "underscore." "Use" not "leverage."
- **Name sources.** "Schultz's 1997 study" not "research suggests."
- **Vary sentence length naturally.** Short sentences punch. Longer ones can breathe and build. Mix them without pattern.
- **Keep rhythm.** A perfectly compressed sentence feels robotic. Slightly looser feels human.
- **Trust the reader.** Show why something matters through details, not by explaining its importance.

---

## Technical Content (Karpathy-style)

When explaining technical topics:

1. **Progressive complexity.** Start with the simplest API or concept, add layers.
2. **Show, don't tell.** Runnable code, concrete examples, actual outputs.
3. **Graduated difficulty.** Small dataset → large dataset. Simple case → complex case.
4. **Be transparent about limitations.** Show where things break. This builds trust.
5. **Make it reproducible.** Clarity over optimization. Educational code.

---

## The Bryson Test

Ask: "Have I restored the magic that experts have forgotten?"

Scientists often become numb to the wonder of their own field. The job is to rediscover it and convey it fresh—childlike wonder backed by adult rigor.

---

## Quick Checklist Before Publishing

- [ ] Does the opening hook curiosity within the first two sentences?
- [ ] Is there a clear throughline from confusion to understanding?
- [ ] Did I explain foundational concepts before going deep?
- [ ] Are analogies accurate, not just clever?
- [ ] Did I include the humans behind the discoveries?
- [ ] Did I admit uncertainty where it exists?
- [ ] Did I answer "So what?"
- [ ] Zero banned words/phrases?
- [ ] No formulaic structures (rule of three, negative parallelism, challenges-and-outlook)?
- [ ] Would I want to explain this at a party?
