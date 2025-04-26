---
title: "Code Surgery: How AI Assistants Make Precise Edits to Your Files"
date: 2025-04-20 15:00:00 +0200
categories:
  - blog
tags:
  - AI
  - Programming
  - Developer Tools
  - Code Editing
---

"Just add error handling to this function," I typed to my coding assistant. It came back with a solid implementation—but when it tried to apply the changes, it failed. "Cannot find matching context," it reported, before suggesting I copy-paste its solution manually. I found myself wondering why something seemingly simple was proving so difficult.

Many developers who use coding assistants have run into this issue. The AI might understand the code well enough, but making precise changes to files turns out to be surprisingly tricky.

### Why This Matters

File editing is central to what makes coding assistants useful. If these tools can't modify code files directly, they're reduced to just offering suggestions that you have to implement yourself. A coding assistant that can reliably edit your code saves you time and mental effort compared to one that frequently fails and requires manual intervention.

There's a basic challenge here: Language models don't have direct access to your files. They have to describe their intended changes through specialized tools that interpret these instructions and apply them. This handoff between the model and the file system is where complications often arise.

If you've worked with tools like GitHub Copilot, Aider, or RooCode, you've probably seen them struggle with applying changes. Sometimes they can't find the right spot in the file, or they mess up the indentation, or they just give up and tell you to manually apply changes.

### What You'll Learn

This post looks at how fouropen source coding assistant systems - Codex, Aider, OpenHands, and RooCode - handle file editing. I'll present them in rough order of complexity, though their development histories aren't strictly linear. These systems have influenced each other, with some approaches and formats showing up across multiple tools.

For each system, I'll examine:

1. How it receives edit instructions from the AI
2. How it interprets and processes these instructions
3. How it applies the changes to files
4. How it handles errors and edge cases
5. How it provides feedback on the results

By understanding these mechanisms, you'll gain insights into why coding assistants sometimes struggle with file edits and how different systems have evolved increasingly sophisticated approaches to address these challenges.

## Key Concepts

Before getting into the details, here are some terms you'll see throughout this article:

- **Patch**: A formal specification of changes to be applied to a file, consisting of additions and deletions with associated metadata. Patches often include additional information like file paths, timestamps, and author details.
- **Diff**: A simpler format that just shows line-by-line changes between two versions of text, using + and - indicators. Diffs focus purely on the content changes without extra metadata.
- **Search/Replace Block**: A more direct editing format that uses delimiters (like `<<<<<<< SEARCH` and `>>>>>>> REPLACE`) to explicitly specify what text to find and what to replace it with. Unlike patches and diffs that show changes, search/replace blocks define an operation to perform.
- **Context Lines**: Non-modified lines surrounding changes in a patch that provide location context for applying modifications accurately.
- **Hunk**: A discrete section within a patch or diff that represents a contiguous set of changes, including context lines and modifications.
- **Fuzzy Matching**: An algorithmic approach to finding approximate string matches using techniques like Levenshtein distance or token-based similarity metrics.
- **Indentation Preservation**: The maintenance of consistent whitespace prefixes during file modifications, particularly crucial for syntax-significant languages.
- **Fence**: Syntactic delimiters (e.g., triple backticks, custom markers) used to unambiguously denote code block boundaries.

## How These Systems Work

Before getting into the details of each system, let's look at the basic process they all follow:

```
LLM → Tool → File System → Tool → Feedback → LLM
```

It works like this:

1. **LLM**: Generates changes and describes them in a specific format
2. **Tool**: Tries to understand and apply these changes
3. **File System**: Files get updated (or not, if something goes wrong)
4. **Feedback**: The tool tells the LLM what happened
5. **LLM**: Figures out what to do next based on this feedback

Simple in theory, but several things can go wrong:

### Problem 1: Finding the Right Spot

The LLM might have an outdated or partial view of a file. When it wants to change something, it first needs to find where that something is. This gets tricky when:

- The file has changed since it was included in the LLM's context
- The file has several similar-looking sections
- The file is too big to fit in the LLM's context window

When files change after it was first put in the LLM's context, matching often fails. The better systems provide detailed error messages that help the LLM understand what changed and adapt its approach. Some systems even show the LLM the current file state when errors occur.

### Problem 2: Crossing File Boundaries

Real-world code changes often span multiple files. This creates additional challenges:

- Maintaining consistency across related changes
- Tracking dependencies between files
- Applying changes in the correct order

Most systems handle multi-file edits by applying patches to files sequentially.

### Problem 3: Keeping the Style Right

Developers are picky about formatting. When making changes, the system needs to maintain:

- How code is indented (spaces or tabs, how many)
- Line ending styles
- How comments are formatted
- Spacing patterns

### Problem 4: Dealing with Failures

When things go wrong, a good system should:

- Explain clearly what happened
- Offer suggestions on how to fix it
- Try different approaches when the first one fails

### Different Ways to Describe Changes

These tools use several methods to explain what changes they want to make:

1. **Patches**: Like git patches, showing exactly which lines to add or remove
2. **Diffs**: Highlighting differences between old and new versions
3. **Search/Replace Blocks**: "Find this chunk of text and replace it with that"
4. **Line Operations**: "Add this after line 42" or "Delete lines 15-20"
5. **AI-Assisted Editing**: Using another AI to help figure out complex changes

Now, let's examine how each system implements these concepts, starting with OpenAI's Codex and progressing to more sophisticated approaches.

## Codex: The Straightforward Approach

Codex CLI, built by OpenAI, keeps things simple with a patch-based system. It's not fancy, but it works well by focusing on clear communication between the AI and your files. OpenAI's ability to train their models specifically for this simpler system helps ensure reliable performance despite the straightforward approach.

### Patch Format

The LLM communicates file changes through a structured patch format:

```
*** Begin Patch
*** [Operation] File: [filepath]
@@ [class or function context]
 [context line - unchanged, starts with space]
-[line to remove - starts with minus]
+[line to add - starts with plus]
 [another context line - unchanged, starts with space]
*** End Patch
```

Where:

- Operations can be `Add File`, `Update File`, or `Delete File`
- The `@@` markers are followed by text that matches a line in the file, helping to locate the are where the change should be applied, e.g. a class or function name.
- Lines that begin with a space are context lines, which help locate the exact position for changes and remain unchanged in the final result
- For updates, the content shows lines to remove with '-' and lines to add with '+'
- For new files, each line of content starts with '+'

Here's a real example that updates a file:

```
*** Begin Patch
*** Update File: main.py
@@ def main():
   # This is the main function
-  print("hello")
+  print("hello world!")
   return None
*** End Patch
```

In this example:

- `@@ def main():` indicates the system should find a line containing "def main():" in the file
- `   # This is the main function` is a context line (starts with a space) that helps locate the exact position and remains unchanged
- `-  print("hello")` is the line being removed (starts with a minus)
- `+  print("hello world!")` is the line being added (starts with a plus)
- `   return None` is another context line that remains unchanged

Unlike traditional diff formats, this doesn't use line numbers. Instead, it finds the location by matching the text after the `@@` with a line in the file. The system first tries an exact match, then falls back to matching with whitespace trimmed if needed. Multiple `@@` statements can be used to progressively narrow down the location when needed.

This format is intentionally simple, making it easy for both the LLM to generate and the tool to parse.

### How Patches Are Parsed and Applied

When the LLM invokes the `apply_patch` tool, the system:

1. **Validates the patch format**: Checks that it starts with `*** Begin Patch` and ends with `*** End Patch`
2. **Identifies affected files**: Extracts file paths from the patch
3. **Loads current content**: Reads the current content of affected files
4. **Parses operations**: Breaks down the patch into individual operations (create, update, delete)
5. **Applies changes**: Modifies the files according to the operations

Here's a simplified version of the patch processing flow:

```typescript
function process_patch(text, openFn, writeFn, removeFn) {
  // Validate patch format
  if (!text.startsWith(PATCH_PREFIX)) {
    throw new DiffError("Patch must start with *** Begin Patch\\n");
  }

  // Identify files and load content
  const paths = identify_files_needed(text);
  const orig = load_files(paths, openFn);

  // Parse patch into structured representation
  const [patch, _fuzz] = text_to_patch(text, orig);

  // Transform into a "commit" object
  const commit = patch_to_commit(patch, orig);

  // Apply changes to the file system
  apply_commit(commit, writeFn, removeFn);

  return "Done!";
}
```

### Fuzzy Matching Capabilities

One of the interesting features of Codex's implementation is its ability to handle slight variations in context. It uses a progressive matching strategy:

1. First, it tries to find an exact match for the context lines
2. If that fails, it tries matching with line endings trimmed
3. As a last resort, it tries matching with all whitespace trimmed

This flexibility is crucial because the LLM might have a slightly different understanding of the code than what's actually in the file.

```typescript
function find_context_core(lines, context, start) {
  // Strategy 1: Exact match
  for (let i = start; i < lines.length; i++) {
    if (lines.slice(i, i + context.length).join("\n") === context.join("\n")) {
      return [i, 0]; // Perfect match
    }
  }

  // Strategy 2: Ignore line endings
  for (let i = start; i < lines.length; i++) {
    const a = lines.slice(i, i + context.length).map((s) => s.trimEnd());
    const b = context.map((s) => s.trimEnd());
    if (a.join("\n") === b.join("\n")) {
      return [i, 1]; // Close match
    }
  }

  // Strategy 3: Ignore all whitespace
  for (let i = start; i < lines.length; i++) {
    const a = lines.slice(i, i + context.length).map((s) => s.trim());
    const b = context.map((s) => s.trim());
    if (a.join("\n") === b.join("\n")) {
      return [i, 100]; // Fuzzy match
    }
  }

  return [-1, 0]; // No match found
}
```

The system tracks how "fuzzy" the match was, which helps it make decisions about whether to proceed with the changes.

### Error Handling and Feedback

When errors occur, Codex provides structured feedback to the LLM. Here are examples of actual error messages that Codex might return to the LLM:

**Context Line Mismatch**:

```json
{
  "exit_code": 1,
  "stderr": "Error: context line 3, \"  const response = await fetch(`/api/users/${userId}`);\" does not match \"  const response = await fetch(`/api/users/${userId}`, { headers });\""
}
```

This tells the LLM exactly which line didn't match and what the difference was (missing headers parameter).

**File Not Found**:

```json
{
  "exit_code": 1,
  "stderr": "Error: File not found: src/api.js"
}
```

This clearly indicates that the file the LLM is trying to modify doesn't exist.

**Invalid Patch Format**:

```json
{
  "exit_code": 1,
  "stderr": "Error: Patch must start with *** Begin Patch"
}
```

This helps the LLM understand that its patch format is incorrect.

These structured error messages provide specific, actionable information that the LLM can use to correct its approach. For example, if a context line doesn't match, the LLM can try to find the correct line or use a different approach to identify the target section.

### Example: Real-World Edit Scenario

Let's examine how Codex handles a real-world edit scenario. Imagine we need to add error handling to a function that fetches user data:

**Original code in src/api.js**:

```javascript
async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data;
}
```

**LLM generates a patch**:

```
*** Begin Patch
*** Update File: src/api.js
@@ async function fetchUserData(userId) {
-  const response = await fetch(`/api/users/${userId}`);
-  const data = await response.json();
-  return data;
+  try {
+    const response = await fetch(`/api/users/${userId}`);
+    if (!response.ok) {
+      throw new Error(`Failed to fetch user data: ${response.status}`);
+    }
+    const data = await response.json();
+    return data;
+  } catch (error) {
+    console.error(`Error fetching user ${userId}:`, error);
+    throw error;
+  }
 }

@@ function formatUserData(data) {
-  return data;
+  return {
+    id: data.id,
+    name: data.name,
+    email: data.email,
+    formattedDate: new Date(data.createdAt).toLocaleDateString()
+  };
 }
*** End Patch
```

This example shows a patch that modifies two different functions in the same file, each with its own `@@` context marker.

The patch includes:

- A context marker (`@@`) followed by the function declaration to help locate the right section
- Lines to remove (prefixed with `-`)
- Lines to add (prefixed with `+`)
- Context lines with no prefix (like the closing brace) that remain unchanged

Importantly, a single patch can contain multiple `@@` sections, allowing for changes to different parts of the same file. Each section has its own context marker to help locate the right position, making it possible to modify multiple functions or code blocks in one operation.

### The Evolution of Patch Formats: OpenAI's Proposal

OpenAI released GPT-4.1 on April 14, 2025, along with a "prompt cookbook" that included a detailed specification of their recommended patch format and a reference implementation called `apply_patch.py`. OpenAI's blog post explains that they extensively trained GPT-4.1 on this patch format, which is why it works so well with Codex CLI.

The blog post also mentions other effective diff formats, including the SEARCH/REPLACE format, noting that the most successful formats "do not use line numbers" and "provide both the exact code to be replaced, and the exact code with which to replace it, with clear delimiters between the two."

As we'll see later when examining Aider, this format has already been adopted by them. With OpenAI's extensive fine-tuning of GPT-4.1 to output this exact format, it has the potential to become more widely adopted in the industry. OpenAI has a significant advantage in this area since they can specifically train their models to follow the patch style that their tools prefer, creating a cohesive system where the LLM is optimized to produce patches in exactly the format that the Codex CLI expects. This reduces the likelihood of format-related errors and improves the overall reliability of the file editing process.

## Aider: The Swiss Army Knife

Aider gets more clever by supporting several different edit formats. Each format has its own strengths, and Aider can switch between them depending on what works best for a particular situation.

### Pluggable Edit Formats

What makes Aider special is how it can swap between different editing approaches. It does this through a system of "coder" classes, where each one handles a specific format:

```python
class Coder:
    """Base class for all coders."""

    edit_format = None
    gpt_prompts = None

    def get_edits(self):
        """Parse the AI response to extract edit operations."""
        raise NotImplementedError

    def apply_edits(self, edits):
        """Apply the extracted edits to the files."""
        raise NotImplementedError
```

Each coder implementation provides:

- A unique `edit_format` identifier
- Methods to extract edits from AI responses
- Methods to apply those edits to files
- Format-specific error handling

### Different Edit Formats

Aider supports multiple edit formats, each optimized for different models and use cases. According to Aider's documentation, the system is configured to use the optimal format for most popular models, but users can force a specific format with the `--edit-format` switch. Here are the main formats:

#### 1. EditBlock Format (diff)

The EditBlock format uses search/replace blocks to specify changes:

```
file.py
<<<<<<< SEARCH
def old_function():
    return "old"
=======
def new_function():
    return "new"
>>>>>>> REPLACE
```

This format is intuitive because it clearly shows what content should be replaced with what.

#### 2. Unified Diff Format (udiff)

The Unified Diff format uses a standard diff format similar to what `diff -U0` would produce:

```diff
--- file.py
+++ file.py
@@ -10,7 +10,7 @@
 def some_function():
-    return "old value"
+    return "new value"

 def another_function():
     pass
```

This format is particularly useful for complex edits that involve multiple changes to a file.

#### 3. OpenAI Patch Format

Aider has also implemented OpenAI's reference patch format:

```
*** Begin Patch
*** Update File: file.py
@@ class MyClass:
    def some_function():
-        return "old"
+        return "new"
*** End Patch
```

By adopting OpenAI's format, Aider benefits from GPT-4.1's extensive training on this specific syntax. The format supports complex operations like file creation, deletion, and updates, and is designed to work optimally with OpenAI's models.

#### 4. Additional Specialized Formats

Aider also supports several other formats for specific use cases:

- **whole**: Returns the full, updated copy of each file. While simple, it can be slow and costly for large files since the LLM must return the entire file even if just a few lines are edited.

- **diff-fenced**: Similar to the diff format, but with the file path placed inside the fence (a "fence" in this context refers to the delimiters that enclose a block of code, typically triple backticks \`\`\` in markdown). This format is primarily used with the Gemini family of models, which often struggle with the standard diff format.

- **editor-diff** and **editor-whole**: Streamlined versions of the diff and whole formats, intended for use in architect mode. These formats use a simpler prompt focused narrowly on editing the file rather than solving the entire coding task.

### Search and Replace Strategies

Aider includes a sophisticated system for performing search and replace operations with various levels of flexibility:

```python
def flexible_search_and_replace(texts, strategies):
    """Try multiple search and replace strategies until one works."""
    for strategy, preprocs in strategies:
        if not preprocs:
            preprocs = [None]

        for preproc in preprocs:
            new_text = try_strategy(texts, strategy, preproc)
            if new_text:
                return new_text

    return None
```

This approach tries multiple strategies in sequence:

1. Exact matching
2. Whitespace-insensitive matching
3. Indentation-preserving matching
4. Fuzzy matching using difflib

### Error Handling and Suggestions

When edits fail, Aider provides detailed error messages and suggestions:

```python
def apply_edits(self, edits, dry_run=False):
    # ... (processing code)

    if not failed:
        return

    blocks = "block" if len(failed) == 1 else "blocks"
    res = f"# {len(failed)} SEARCH/REPLACE {blocks} failed to match!\n"

    for edit in failed:
        path, original, updated = edit

        full_path = self.abs_root_path(path)
        content = self.io.read_text(full_path)

        res += f"""
## SearchReplaceNoExactMatch: This SEARCH block failed to exactly match lines in {path}
<<<<<<< SEARCH
{original}=======
{updated}>>>>>>> REPLACE

"""
        did_you_mean = find_similar_lines(original, content)
        if did_you_mean:
            res += f"""Did you mean to match some of these actual lines from {path}?

{self.fence[0]}
{did_you_mean}
{self.fence[1]}

"""

        if updated in content and updated:
            res += f"""Are you sure you need this SEARCH/REPLACE block?
The REPLACE lines are already in {path}!

"""
    res += (
        "The SEARCH section must exactly match an existing block of lines including all white"
        " space, comments, indentation, docstrings, etc\n"
    )
    if passed:
        pblocks = "block" if len(passed) == 1 else "blocks"
        res += f"""
# The other {len(passed)} SEARCH/REPLACE {pblocks} were applied successfully.
Don't re-send them.
Just reply with fixed versions of the {blocks} above that failed to match.
"""
    raise ValueError(res)
```

This detailed feedback helps the LLM understand why its edits failed and how to correct them.

### Example: Same Real-World Scenario in Aider

Using the same error handling scenario, let's see how Aider would handle it using its EditBlock format:

1. **LLM generates an edit**:

```
src/api.js
<<<<<<< SEARCH
async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data;
}
=======
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    throw error;
  }
}
>>>>>>> REPLACE
```

2. **Aider processes the edit**:

   - It first tries to find an exact match for the search block
   - If that fails, it attempts various flexible matching strategies:
     - Whitespace-insensitive matching
     - Indentation-preserving matching
     - Fuzzy matching using difflib

3. **If the edit fails**, Aider provides detailed feedback:

```
# 1 SEARCH/REPLACE block failed to match!

## SearchReplaceNoExactMatch: This SEARCH block failed to exactly match lines in src/api.js
<<<<<<< SEARCH
async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data;
}
=======
...

Did you mean to match some of these actual lines from src/api.js?


async function fetchUserData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    // Some comment here
    const data = await response.json();
    return data;
}

The SEARCH section must exactly match an existing block of lines including all white space, comments, indentation, docstrings, etc
```

This detailed error feedback helps the LLM understand exactly why the edit failed and how to correct it.

Interestingly, Aider's patch format is quite similar to Codex's format, showing some convergence in how these systems approach file editing. However, Aider's error feedback is significantly more detailed, helping the LLM make better corrections.

## OpenHands: Combining Traditional Methods with AI Assistance

OpenHands takes a more balanced approach, primarily relying on traditional editing methods while also offering an optional LLM-based file editing feature. This combination gives users flexibility to choose the most appropriate method for their specific editing needs.

### Format Detection and Traditional Editing

OpenHands primarily uses traditional editing approaches, with built-in support for detecting different patch formats using regex patterns:

- Unified diffs (the most common type)
- Git diffs
- Context diffs
- Ed scripts
- RCS ed scripts

This means it can work with patches from various tools and models. The system supports several traditional editing approaches:

1. **String Replacement**: For precise, targeted changes to specific text
2. **Line-Based Operations**: For inserting, deleting, or modifying specific lines by number
3. **Patch-Based Editing**: For applying patches in various formats to files

OpenHands includes functionality for normalized whitespace that helps with patches that have different indentation levels.

### LLM-Based Editing Approach

As a complementary feature, OpenHands also offers an optional LLM-based editing system. While limited public documentation exists about this feature's effectiveness, here's what the design appears to offer:

1. **Targeted Editing**: Rather than modifying the entire file, the system identifies the specific portion to be edited (using start and end line numbers)
2. **Content Extraction**: It extracts the portion of the file to be edited based on the specified line range
3. **LLM Transformation**: It passes both the original content and the desired changes to a specialized "draft editor" LLM, which then generates the transformed content
4. **File Reconstruction**: It reconstructs the file by combining the unchanged portions with the LLM-edited section

The key insight here is that this approach uses an LLM specifically configured for editing tasks. Based on documentation, OpenHands allows configuring a separate "draft_editor" LLM with different parameters than the main LLM. For example:

```
[llm.draft_editor]
model = "gpt-4"
temperature = 0.2
top_p = 0.95
presence_penalty = 0.0
frequency_penalty = 0.0
```

This specialized configuration offers several theoretical advantages:

1. **Task-Specific Optimization**: Parameters like temperature and top_p can be tuned specifically for code editing rather than general reasoning
2. **Different Model Selection**: You could use a more precise model for editing tasks while using a more creative model for planning
3. **Specialized Prompting**: The editing LLM can be prompted differently, focusing exclusively on the file modification task without needing to understand the broader context
4. **Resource Allocation**: Potentially allows using a more cost-effective model for routine editing tasks while reserving more powerful models for complex reasoning

### The File Reconstruction Process

Looking at the implementation code, we can see how OpenHands intelligently handles the file reconstruction process:

1. **Extract Original Section**: The system first identifies and extracts the specific section of the file to be edited, using the start and end line numbers provided in the edit request. This creates a targeted chunk of code to be modified.

2. **Generate Edited Content**: The draft editor LLM is given a specific system prompt that instructs it to:

   - Produce a complete version of the modified section
   - Replace placeholder comments like "# no changes before" with the actual code
   - Ensure correct indentation is maintained
   - Output the complete edited content wrapped in a code block

3. **Surgical Reconstruction**: The edited content is then precisely inserted back into the file through a three-part assembly process:

   - The system keeps all lines before the edited section unchanged
   - It inserts the newly edited content from the draft editor LLM
   - It appends all lines after the edited section unchanged

4. **Validation and Linting**: Before finalizing the changes, the system can optionally:
   - Lint the updated file to catch syntax errors
   - Compare a diff of the changes for visualization
   - Check file validity before applying changes

It's worth noting that this feature appears to be optional and is disabled by default in the system configuration, suggesting it may be experimental or still evolving.

## RooCode: Sophisticated Search and Formatting

RooCode internally represents changes using a search/replace block format, similar to Aider's EditBlock format, which specifies the text to find and its replacement. When exact matches fail, it uses a 'middle-out' search strategy with similarity scoring. It also focuses on preserving your code's formatting and indentation during the replacement process.

### Advanced Search and Match Strategy

RooCode employs the `MultiSearchReplaceDiffStrategy` component, which combines flexible diff handling with a 'middle-out' fuzzy matching algorithm.

The fuzzy matching uses a bidirectional search approach:

1. **Middle-Out Search**: Starts from the expected region's center and expands outward
2. **Similarity Scoring**: Uses Levenshtein distance to score potential matches
3. **Best Match Selection**: Chooses the highest-scoring match above a threshold

This strategy is particularly effective for large files where exact line numbers may be slightly off, and the component can be configured to handle different editing contexts while preserving code formatting.

### Indentation Preservation

One of the most frustrating issues with code editing tools is when they mess up indentation. RooCode addresses this with a sophisticated indentation preservation system that maintains both the style and structure of the original code.

The system works by:

1. **Capturing Original Indentation**: It extracts the exact indentation (preserving tabs/spaces) from the matched lines in the original content
2. **Analyzing Relative Indentation**: It calculates the relative indentation of each line in both the search and replace blocks
3. **Preserving Indentation Style**: It ensures that the original indentation style (spaces vs. tabs, number of spaces) is preserved
4. **Maintaining Relative Structure**: It maintains the relative indentation structure of the replacement code

This careful attention to indentation ensures that the edited code maintains consistent formatting, which is crucial for languages where indentation is syntactically significant (like Python) and important for readability in all languages.

### Example: LLM Input and Tool Processing

Let's see how RooCode processes an edit using the `apply_diff` tool:

1. **LLM generates a diff**:

```
<<<<<<< SEARCH
:start_line:10
-------
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item, 0);
}
=======
function calculateTotal(items) {
  // Add 10% tax
  return items.reduce((sum, item) => sum + (item * 1.1), 0);
}
>>>>>>> REPLACE
```

2. **RooCode parses the diff**:

   - Extracts the start line (10)
   - Extracts the search block (`function calculateTotal...`)
   - Extracts the replace block (`function calculateTotal...`)

3. **RooCode applies the diff**:

   - Reads the current content of the file
   - Uses fuzzy matching to find the best match for the search block
   - Applies the replacement with proper indentation preservation
   - Shows a diff view for user approval
   - Applies the changes if approved

4. **Feedback to LLM**:
   - If successful: "Changes successfully applied to file"
   - If failed: Detailed error message with the reason for failure

RooCode's approach includes advanced fuzzy matching and careful indentation preservation.

## Cursor: Specializing the Application Step with AI

While systems like RooCode refine matching algorithms and others focus on optimizing edit formats, Cursor introduces another layer of sophistication: using a dedicated AI model specifically for the _application_ of changes.

This approach directly tackles a core challenge mentioned earlier: even powerful frontier LLMs, while excellent at reasoning and generating code _ideas_, often struggle to translate these ideas into perfectly formatted, precisely located diffs that apply cleanly, especially in large files. Simple deterministic matching algorithms applied to these imperfect diffs can frequently fail.

Cursor's solution involves a two-step process that splits the task:

1.  **Sketching Phase**: A powerful "frontier" model generates a rough sketch or code block representing the intended change, focusing on the logic rather than perfect diff syntax.
2.  **Application Phase**: A custom-trained, specialized "Apply" model takes this sketch and intelligently integrates it into the existing codebase. This model is trained specifically to handle the nuances of code structure, context, and potential imperfections in the sketch, moving beyond simple text matching.

This represents a shift in strategy. Instead of relying solely on the main LLM to produce a perfect edit instruction (like a flawless patch or search/replace block), Cursor leverages a second, specialized AI to act as an intelligent intermediary, responsible for the final, precise application to the file system.

This offers potential advantages in reliability and efficiency, allowing the main LLM to focus on higher-level reasoning while the specialized model handles the intricate details of code surgery. It's an example of ensemble approaches where different AI components handle distinct parts of the coding workflow.

You can hear the Cursor team discuss this approach in more detail here:

{% include video id="oFfVt3S51T4?start=1891" provider="youtube" %}

## How Edit Formats Evolved

Looking at these systems, I noticed an interesting pattern in how their edit formats developed and borrowed from each other:

1. **Search/Replace Blocks**: Aider pioneered this approach with its EditBlock format, using markers similar to git merge conflicts to show what to replace and with what. This straightforward style was later picked up by Cline, which RooCode then forked from.

2. **OpenAI's Patch Format**: When GPT-4.1 launched in April 2025, OpenAI released their recommended patch format. Codex (being OpenAI's own tool) uses this format, and Aider quickly adopted it. Since OpenAI trains their models specifically on this format, it works particularly well.

3. **Shared Ideas**: Though these formats developed separately, they share key principles. As OpenAI noted, the best formats avoid line numbers and clearly mark both the original code and its replacement. This convergence isn't coincidental—these features seem essential for reliable code editing with AI.

## Wrapping Up

Looking at how these coding assistants edit files has been eye-opening. We've seen how these systems have evolved, sometimes borrowing ideas from each other in unexpected ways.

### What We Learned

1. **Format Sharing**: OpenAI's patch format (released with GPT-4.1 in April 2025) is gaining traction. Codex uses it natively, and Aider quickly adopted it. Since OpenAI trains their models specifically on this format, it works particularly well.
2. **What Makes Formats Work**: The best approaches avoid line numbers and clearly show both the code to replace and its replacement, with obvious markers separating them.
3. **Fallback Strategies**: Every system we looked at tries multiple matching approaches. They all start strict and get more flexible when needed, balancing accuracy with reliability.
4. **Formatting Matters**: The better systems work hard to preserve indentation and whitespace. This isn't just cosmetic—it's essential for readability and sometimes for the code to work at all.
5. **Good Error Messages**: How a system explains failures makes a huge difference in success rates. Clear, detailed error messages help models (or humans) fix problems effectively.

### Advice for Tool Builders

If you're building a coding assistant, here are some practical tips:

1. **Layer Your Matching**: Start strict, then loosen up. Begin with exact matches, but have backup plans when those fail. Every successful system we looked at does this.
2. **Get Indentation Right**: Developers hate when their formatting gets messed up. Put extra effort into preserving indentation, especially for Python and other whitespace-sensitive languages.
3. **Make Errors Useful**: When edits fail, explain why in detail. Good error messages help the model (or user) fix the problem instead of just reporting it.
4. **Balance Automation vs. Control**: Decide how much user approval you want. More automation is convenient but can be risky; more user control is safer but slower.
5. **Don't Reinvent the Wheel**: Consider using established formats like OpenAI's patch format or search/replace blocks. They've been battle-tested across multiple systems.
6. **Learn from Open Source**: Many of these systems are open source or have published their approaches. Codex's patch format is documented in OpenAI's reference implementation. Aider is fully open source. OpenHands and RooCode (via Cline) also have open source components you can study and adapt.

### Tips for Users

If you work with coding assistants, here's how to get better results:

1. **Know Your Tool**: Figure out if your assistant uses patches, diffs, or search/replace blocks. This helps you phrase your requests in ways it understands.
2. **Be Location-Specific**: When asking for changes, be clear about where they should go. This is especially important in files with similar-looking sections.
3. **Double-Check Everything**: Even good assistants make mistakes. Always review changes before accepting them, particularly in important code.

Next time your coding assistant struggles with a change, you'll have a better idea of what's happening under the hood. Maybe it's trying different matching strategies, or working to preserve your formatting. This knowledge helps you work better with these tools and appreciate the interesting challenges they're solving.
