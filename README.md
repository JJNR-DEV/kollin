# Welcome to the Kollin challenge!

Checkout this [fimga](https://www.figma.com/file/fISo7pQZPuUYui9kpVo1ks/Daily-overview?node-id=0%3A1), you will be making this view during this challenge. The idea is to show the user a daily overview over their progress, e.g:

- How much time they have spent studying
- How many exercises they have completed
- Which exercises they have done
- The distribution of which topics they have studied

## Data

The data you need for this is in this file: [daily_progress_data.json](./src/daily_progress_data.json).

The file contains one object per exercise. Some explanations for the object fields:

- evaluation: the user's evaluation as a stringified JSON object.
- score: the average assessment of difficulty for an exercise
- category: the topic this exercise belongs to
- hasNote: is true if the user has written a personal note for an exercise
- bookmarked: is true if the user has bookmarked an exercise

## Existing code

- The [App.js](./src/App.js) file already has some boilerplate code where you can start

- There is already a component in [Components/ExerciseCard](Components/ExerciseCard/ExerciseCard.jsx) for displaying a card for an exercise

- The progress bar component in [ProgressBar.jsx](./Components/ProgressBar.jsx) can be used for displaying the distribution of topics

## Coding guidelines

1. Avoid using inline styling
2. Use SCSS when creating external style sheets
