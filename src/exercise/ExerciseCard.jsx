import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'; // Importing Card and Typography components from Material UI

const ExerciseCard = ({ result }) => {
  return (
    <>
      {result && (
        <>
          {result.Muscles}
          {result.map((exercise, index) => (
            <div key={index} className="exercise">
              <Card variant="outlined" style={{ marginBottom: "10px" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {exercise.Muscles}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Workout Type: {exercise.WorkOut}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Beginner Set: {exercise["Beginner Sets"]}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Equipment Type: {exercise.Equipment}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Expert Set: {exercise["Expert Sets"]}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Explanation: {exercise.Explaination}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Intensity Level: {exercise["Intensity_Level"]}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Intermediate Set: {exercise["Intermediate Sets"]}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Workout Type: {exercise["Long Explanation"]}
                  </Typography>
                  <Typography variant="body1" component="div">
                        Video: 
                        <iframe width="560" height="315" src={exercise.video} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                  </Typography>

                  {/* Display other exercise details */}
                </CardContent>
              </Card>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ExerciseCard;
