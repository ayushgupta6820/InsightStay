# PROMPTS.md

# Week 7 – AI Feature Prompt Log

## Project

**InsightStay – AI Hotel Review Analyzer**

---

# Prompt Version 1

## Objective

Analyze a hotel review and return the sentiment, positive points, negative points, hotel response, and improvement suggestions.

### Prompt

```
You are an AI assistant for a hotel review analytics platform.

Analyze the following hotel review.

Review:
"${review}"

Return your response in this format.

Overall Sentiment:
Positive / Neutral / Negative

Positive Points:
- Point 1
- Point 2

Negative Points:
- Point 1
- Point 2

Suggested Hotel Response:
(Professional response)

Improvement Suggestions:
- Suggestion 1
- Suggestion 2
```

### Example Input

```
Excellent stay with friendly staff and beautiful rooms.
```

### Example Output

```
Overall Sentiment:
Positive

Positive Points:
- Friendly staff
- Beautiful rooms

Negative Points:
- None

Suggested Hotel Response:
Thank you for staying with us...

Improvement Suggestions:
- Continue staff training
- Maintain room quality
```

### Observation

The model occasionally skipped sections or produced inconsistent formatting, making frontend parsing difficult.

---

# Prompt Version 2

## Objective

Force the AI model to always generate every section.

### Prompt

```
Analyze the following hotel review.

IMPORTANT RULES

Always fill every section.

Never leave Positive Points empty.

Never leave Negative Points empty.

If no positive points exist return:
- None

If no negative points exist return:
- None

Return ONLY in the specified format.
```

### Example Input

```
Room was clean but check-in was slow.
```

### Example Output

```
Overall Sentiment:
Neutral

Positive Points:
- Clean room

Negative Points:
- Slow check-in

Suggested Hotel Response:
...

Improvement Suggestions:
...
```

### Observation

This version produced more consistent outputs but still returned plain text, requiring manual parsing on the frontend.

---

# Prompt Version 3 (Final)

## Objective

Return structured JSON for direct frontend integration.

### Prompt

```
You are an AI assistant for a hotel review analytics platform.

Analyze the following hotel review.

Return ONLY valid JSON.

{
  "sentiment":"",
  "positive":[],
  "negative":[],
  "response":"",
  "suggestions":[]
}

Generate a meaningful professional hotel response.

Do not include markdown or explanations.
```

### Example Input

```
The room was clean and spacious. The staff were rude and check-in was slow.
```

### Example Output

```json
{
  "sentiment": "Positive",
  "positive": [
    "Room was clean",
    "Room was spacious"
  ],
  "negative": [
    "Staff were rude",
    "Slow check-in"
  ],
  "response": "Thank you for your valuable feedback. We are pleased that you enjoyed the cleanliness and spaciousness of the room. We sincerely apologize for the inconvenience caused by the staff behaviour and delayed check-in. Your feedback has been shared with the management team, and we are committed to improving our service. We look forward to welcoming you again.",
  "suggestions": [
    "Improve staff training",
    "Reduce check-in waiting time"
  ]
}
```

### Observation

Returning JSON eliminated frontend parsing, simplified React rendering, and improved reliability. It also made the API response easier to maintain and extend. This version was selected as the final implementation because it consistently provided structured data that could be rendered directly in the user interface.

---

# System Role Used

```
You are an AI assistant for a hotel review analytics platform.
Your task is to analyze hotel guest reviews, identify sentiment, extract positive and negative feedback, generate a professional hotel response, and suggest improvements.
Return only structured JSON.
```

---

# Final Prompt Selected

**Prompt Version 3**

### Reason

Prompt Version 3 produced the most reliable and consistent responses by returning structured JSON instead of plain text. This removed the need for manual text parsing, reduced formatting errors, and simplified frontend development. It also made the backend easier to maintain and improved the overall user experience by providing predictable AI-generated results.
