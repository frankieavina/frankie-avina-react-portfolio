import * as React from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function AboutTimeline({ data }) {

    console.log('data:', data)
    
  return (
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          {data.title}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            {data.description}
        </TimelineContent>
      </TimelineItem>
  );
}