# Day view calendar app

## Description

This day-view calendar app features a lightweight UI that displays the specified date, twenty-four hour-long time blocks that can be overlaid with events, and a form through which the user can add a new event to the calendar.

## Build decisions

I chose to build the minimum viable product as a list of divs representing hour-long blocks, that could be overlaid with coloured divs whose height and position were determined respectively by the duration and start-time of an event.

I first wrote skeleton code, implementing key functionality (i.e. successfully displaying hard-coded events over the time-block divs).

I then turned much of my code into components, and added some simple CSS.

I wanted to tackle the stretch goal of building a form for the user to add new events to the calendar. I succeeded in making a functional form that interacts with state to update the UI, but ran out of time to make the code for this component-based.

I most enjoyed coding the form because I was very much in the flow of things by then and the structure/state interaction came quite quickly to me. I was most challenged by sticking to my plan of priorities and not getting side-tracked by the urge to make it prettier with CSS!


## Testing

I haven’t worked much with testing yet, but I understand the principles, having completed challenges on KataCodewars where all code submissions are put through a number of tests with varied user input to see where there are weaknesses in the code.

As most of the functionality in this app interacts with state, I wasn’t sure how to code small, testable units without using a React testing tool - and I haven’t used those before.

With more time, I could have tried to use Jest to (e.g.) validate string input for the title field of the form.

## Tidying and linting

I used Cmd + Alt + L to tidy my code.

## Challenges and areas for development

### Components
I'd have liked to turn the form into component(s) and make some other bits of code reuseable, e.g. the generation of 24 consecutive timeslots. I'm still learning about how to pass data from child to parent.

### Form validation
With more time, I’d have liked to code some form validation, e.g.
Require that the {date} prop of DateHeader.jsx be input in a valid format
Require all fields in the form to be completed; else throw an error upon submission
Apply a max character limit to the event title input field.

### Multiple events 
I chose not to explicitly handle multiple events across the same time block due to time constraints.
I could build a function that checks for simultaneous events and populates the same time-blocked div using display:flex for clarity. Another option would be to run a check upon form submission and return an error to the user in the case of simultaneous event, “You’re already busy at that time!”

## Other comments

I’m aware that there is a React-Calendar library; this could be a useful tool for making the app more fully and easily navigable by date.

I’m excited to work more with props and state to harness the full power of React.

