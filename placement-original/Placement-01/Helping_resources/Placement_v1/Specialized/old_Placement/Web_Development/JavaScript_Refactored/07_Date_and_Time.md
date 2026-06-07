# Date and Time in JavaScript

## Learning Objectives
After completing this section, you will be able to:
- Create and manipulate date objects
- Format dates for display
- Perform date arithmetic
- Handle timezones effectively
- Implement practical date-based applications

## Introduction to JavaScript Date Object

The `Date` object is JavaScript's built-in object for working with dates and times. It allows you to create, manipulate, and format dates, as well as perform time-based calculations.

### Creating Date Objects

There are several ways to create a new `Date` object:

#### Current Date and Time

```javascript
// Current date and time
const now = new Date();
console.log(now); // e.g., Mon Jun 12 2023 15:30:45 GMT+0000
```

#### Specific Date and Time

```javascript
// From date string
const dateFromString = new Date("2023-06-12T15:30:45Z");
console.log(dateFromString);

// From date components (year, month, day, hour, minute, second, millisecond)
// Note: months are 0-indexed (0 = January, 11 = December)
const specificDate = new Date(2023, 5, 12, 15, 30, 45, 0);
console.log(specificDate); // Mon Jun 12 2023 15:30:45

// From timestamp (milliseconds since January 1, 1970, 00:00:00 UTC)
const dateFromTimestamp = new Date(1686580245000);
console.log(dateFromTimestamp);
```

### Getting Date Components

The `Date` object provides several methods to extract individual components:

```javascript
const date = new Date("2023-06-12T15:30:45Z");

// Get year
console.log(date.getFullYear()); // 2023

// Get month (0-11, where 0 is January)
console.log(date.getMonth()); // 5 (June)

// Get day of month (1-31)
console.log(date.getDate()); // 12

// Get day of week (0-6, where 0 is Sunday)
console.log(date.getDay()); // 1 (Monday)

// Get hours (0-23)
console.log(date.getHours()); // 15

// Get minutes (0-59)
console.log(date.getMinutes()); // 30

// Get seconds (0-59)
console.log(date.getSeconds()); // 45

// Get milliseconds (0-999)
console.log(date.getMilliseconds()); // 0

// Get timestamp (milliseconds since January 1, 1970, 00:00:00 UTC)
console.log(date.getTime()); // 1686580245000
```

### Setting Date Components

You can modify a date by setting its components:

```javascript
const date = new Date("2023-06-12T15:30:45Z");

// Set year
date.setFullYear(2024);
console.log(date); // Wed Jun 12 2024 15:30:45 GMT+0000

// Set month (0-11)
date.setMonth(0); // January
console.log(date); // Fri Jan 12 2024 15:30:45 GMT+0000

// Set day of month
date.setDate(15);
console.log(date); // Mon Jan 15 2024 15:30:45 GMT+0000

// Set hours
date.setHours(10);
console.log(date); // Mon Jan 15 2024 10:30:45 GMT+0000

// Set minutes
date.setMinutes(45);
console.log(date); // Mon Jan 15 2024 10:45:45 GMT+0000

// Set seconds
date.setSeconds(30);
console.log(date); // Mon Jan 15 2024 10:45:30 GMT+0000

// Set milliseconds
date.setMilliseconds(500);
console.log(date); // Mon Jan 15 2024 10:45:30.500 GMT+0000

// Set timestamp
date.setTime(1686580245000);
console.log(date); // Mon Jun 12 2023 15:30:45 GMT+0000
```

### UTC Methods

The `Date` object also provides UTC (Coordinated Universal Time) versions of the get and set methods:

```javascript
const date = new Date("2023-06-12T15:30:45Z");

// Get UTC year
console.log(date.getUTCFullYear()); // 2023

// Get UTC month
console.log(date.getUTCMonth()); // 5 (June)

// Get UTC day
console.log(date.getUTCDate()); // 12

// Get UTC hours
console.log(date.getUTCHours()); // 15

// Set UTC year
date.setUTCFullYear(2024);

// Set UTC month
date.setUTCMonth(1); // February

// Set UTC day
date.setUTCDate(20);
```

## Formatting Dates

JavaScript provides several ways to format dates for display:

### Built-in Formatting Methods

```javascript
const date = new Date("2023-06-12T15:30:45Z");

// toString - converts a date to a string
console.log(date.toString()); // "Mon Jun 12 2023 15:30:45 GMT+0000 (Coordinated Universal Time)"

// toDateString - returns just the date portion
console.log(date.toDateString()); // "Mon Jun 12 2023"

// toTimeString - returns just the time portion
console.log(date.toTimeString()); // "15:30:45 GMT+0000 (Coordinated Universal Time)"

// toISOString - returns the date in ISO format
console.log(date.toISOString()); // "2023-06-12T15:30:45.000Z"

// toUTCString - returns the date converted to a string using UTC
console.log(date.toUTCString()); // "Mon, 12 Jun 2023 15:30:45 GMT"

// toLocaleDateString - returns a locale-specific date string
console.log(date.toLocaleDateString()); // e.g., "6/12/2023" (depends on locale)
console.log(date.toLocaleDateString('en-US')); // "6/12/2023"
console.log(date.toLocaleDateString('de-DE')); // "12.6.2023"

// toLocaleTimeString - returns a locale-specific time string
console.log(date.toLocaleTimeString()); // e.g., "3:30:45 PM" (depends on locale)
console.log(date.toLocaleTimeString('en-US')); // "3:30:45 PM"
console.log(date.toLocaleTimeString('de-DE')); // "15:30:45"

// toLocaleString - returns a locale-specific date and time string
console.log(date.toLocaleString()); // e.g., "6/12/2023, 3:30:45 PM" (depends on locale)
console.log(date.toLocaleString('en-US')); // "6/12/2023, 3:30:45 PM"
console.log(date.toLocaleString('de-DE')); // "12.6.2023, 15:30:45"
```

### Customizing Locale Formatting

The `toLocaleDateString()`, `toLocaleTimeString()`, and `toLocaleString()` methods accept an optional second parameter for customization:

```javascript
const date = new Date("2023-06-12T15:30:45Z");

// Custom date formatting
const dateOptions = { 
  weekday: 'long', // 'narrow', 'short', 'long'
  year: 'numeric', // 'numeric', '2-digit'
  month: 'long',   // 'numeric', '2-digit', 'narrow', 'short', 'long'
  day: 'numeric'   // 'numeric', '2-digit'
};
console.log(date.toLocaleDateString('en-US', dateOptions)); // "Monday, June 12, 2023"

// Custom time formatting
const timeOptions = {
  hour: 'numeric',   // 'numeric', '2-digit'
  minute: 'numeric', // 'numeric', '2-digit'
  second: 'numeric', // 'numeric', '2-digit'
  hour12: true       // true or false
};
console.log(date.toLocaleTimeString('en-US', timeOptions)); // "3:30:45 PM"

// Custom date and time formatting
const dateTimeOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short' // 'short', 'long'
};
console.log(date.toLocaleString('en-US', dateTimeOptions)); 
// "Mon, Jun 12, 2023, 3:30:45 PM UTC"
```

### Manual Formatting

For more control, you can create your own formatting functions:

```javascript
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const date = new Date("2023-06-12T15:30:45Z");
console.log(formatDate(date)); // "2023-06-12 15:30:45"
```

## Parsing Dates

JavaScript can parse date strings into `Date` objects:

```javascript
// ISO format (YYYY-MM-DDTHH:mm:ss.sssZ)
const date1 = new Date("2023-06-12T15:30:45Z");
console.log(date1);

// Short date format (YYYY-MM-DD)
const date2 = new Date("2023-06-12");
console.log(date2);

// Long date format
const date3 = new Date("June 12, 2023 15:30:45");
console.log(date3);

// Using Date.parse() - returns timestamp
const timestamp = Date.parse("2023-06-12T15:30:45Z");
console.log(timestamp); // 1686580245000
const dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp);
```

### Handling Invalid Dates

When parsing dates, it's important to check if the result is valid:

```javascript
function parseDate(dateString) {
  const date = new Date(dateString);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return null; // Invalid date
  }
  
  return date;
}

console.log(parseDate("2023-06-12")); // Valid date
console.log(parseDate("Invalid date")); // null
```

## Date Arithmetic

JavaScript makes it easy to perform calculations with dates:

### Adding and Subtracting Time

```javascript
const date = new Date("2023-06-12T15:30:45Z");

// Add days
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
}

console.log(addDays(date, 5)); // "2023-06-17T15:30:45Z"

// Add months
function addMonths(date, months) {
  const result = new Date(date);
  result.setMonth(date.getMonth() + months);
  return result;
}

console.log(addMonths(date, 3)); // "2023-09-12T15:30:45Z"

// Add years
function addYears(date, years) {
  const result = new Date(date);
  result.setFullYear(date.getFullYear() + years);
  return result;
}

console.log(addYears(date, 1)); // "2024-06-12T15:30:45Z"

// Add hours
function addHours(date, hours) {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

console.log(addHours(date, 2)); // "2023-06-12T17:30:45Z"

// Add minutes
function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

console.log(addMinutes(date, 30)); // "2023-06-12T16:00:45Z"

// Add seconds
function addSeconds(date, seconds) {
  return new Date(date.getTime() + seconds * 1000);
}

console.log(addSeconds(date, 15)); // "2023-06-12T15:31:00Z"
```

### Calculating Differences Between Dates

```javascript
// Calculate difference in milliseconds
const date1 = new Date("2023-06-12T15:30:45Z");
const date2 = new Date("2023-06-15T10:15:30Z");

const diffMs = date2.getTime() - date1.getTime();
console.log(diffMs); // Difference in milliseconds

// Calculate difference in days
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log(diffDays); // 2 (days)

// Calculate difference in hours
const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
console.log(diffHours); // 66 (hours)

// Calculate difference in minutes
const diffMinutes = Math.floor(diffMs / (1000 * 60));
console.log(diffMinutes); // 3974 (minutes)

// Calculate difference in seconds
const diffSeconds = Math.floor(diffMs / 1000);
console.log(diffSeconds); // 238484 (seconds)

// More comprehensive date difference function
function dateDiff(date1, date2) {
  const diffMs = Math.abs(date2.getTime() - date1.getTime());
  
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
}

console.log(dateDiff(date1, date2)); // { days: 2, hours: 18, minutes: 44, seconds: 45 }
```

### Comparing Dates

```javascript
const date1 = new Date("2023-06-12T15:30:45Z");
const date2 = new Date("2023-06-15T10:15:30Z");

// Check if dates are equal
console.log(date1.getTime() === date2.getTime()); // false

// Check if date1 is before date2
console.log(date1 < date2); // true

// Check if date1 is after date2
console.log(date1 > date2); // false

// Check if dates are the same day (ignoring time)
function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

const sameDay1 = new Date("2023-06-12T10:00:00Z");
const sameDay2 = new Date("2023-06-12T15:30:45Z");
console.log(isSameDay(sameDay1, sameDay2)); // true
```

## Working with Timezones

Handling timezones is one of the most challenging aspects of working with dates in JavaScript.

### Understanding Timezone Issues

```javascript
// The Date object internally stores dates in UTC
const date = new Date("2023-06-12T15:30:45Z"); // Z indicates UTC

// Local time vs. UTC time
console.log(date.toString()); // Shows in local timezone
console.log(date.toUTCString()); // Shows in UTC

// Getting timezone offset in minutes
const timezoneOffset = date.getTimezoneOffset();
console.log(timezoneOffset); // e.g., -120 (means UTC+2)

// Converting timezone offset to hours
const timezoneOffsetHours = -timezoneOffset / 60;
console.log(`UTC${timezoneOffsetHours >= 0 ? '+' : ''}${timezoneOffsetHours}`);
```

### Creating Dates in Specific Timezones

```javascript
// Using the Intl.DateTimeFormat API to format dates in specific timezones
function formatDateInTimezone(date, timezone) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: timezone,
    timeZoneName: 'short'
  }).format(date);
}

const date = new Date("2023-06-12T15:30:45Z");

console.log(formatDateInTimezone(date, 'America/New_York')); 
// "June 12, 2023, 11:30:45 AM EDT"

console.log(formatDateInTimezone(date, 'Europe/London')); 
// "June 12, 2023, 4:30:45 PM BST"

console.log(formatDateInTimezone(date, 'Asia/Tokyo')); 
// "June 13, 2023, 12:30:45 AM JST"
```

### Working with Multiple Timezones

```javascript
// Function to display the current time in multiple timezones
function displayWorldClock() {
  const now = new Date();
  
  const timezones = [
    'America/Los_Angeles',
    'America/New_York',
    'Europe/London',
    'Europe/Paris',
    'Asia/Dubai',
    'Asia/Tokyo',
    'Australia/Sydney'
  ];
  
  console.log("World Clock:");
  timezones.forEach(timezone => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: timezone,
      timeZoneName: 'short'
    });
    
    console.log(`${timezone}: ${formatter.format(now)}`);
  });
}

displayWorldClock();
```

## Practical Applications

### Building a Calendar Application

```javascript
class Calendar {
  constructor(year, month) {
    // Month is 0-indexed (0 = January, 11 = December)
    this.year = year || new Date().getFullYear();
    this.month = month !== undefined ? month : new Date().getMonth();
  }
  
  // Get the number of days in the month
  getDaysInMonth() {
    // Using 0 as the day gets the last day of the previous month
    return new Date(this.year, this.month + 1, 0).getDate();
  }
  
  // Get the day of the week for the first day of the month (0 = Sunday, 6 = Saturday)
  getFirstDayOfMonth() {
    return new Date(this.year, this.month, 1).getDay();
  }
  
  // Generate calendar data for the month
  generateCalendarData() {
    const daysInMonth = this.getDaysInMonth();
    const firstDay = this.getFirstDayOfMonth();
    const calendarData = [];
    
    // Create weeks array (6 rows maximum in a month view)
    for (let i = 0; i < 6; i++) {
      calendarData.push(Array(7).fill(null));
    }
    
    // Fill in the days
    let day = 1;
    for (let week = 0; week < 6; week++) {
      for (let weekday = 0; weekday < 7; weekday++) {
        if ((week === 0 && weekday < firstDay) || day > daysInMonth) {
          // Empty cell
          calendarData[week][weekday] = null;
        } else {
          // Day cell
          calendarData[week][weekday] = day++;
        }
      }
    }
    
    return calendarData;
  }
  
  // Get month name
  getMonthName() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[this.month];
  }
  
  // Render calendar as a string
  render() {
    const calendarData = this.generateCalendarData();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    let output = `\n${this.getMonthName()} ${this.year}\n\n`;
    
    // Add weekday headers
    output += weekdays.join('\t') + '\n';
    output += '---\t'.repeat(7) + '\n';
    
    // Add calendar days
    for (let week = 0; week < 6; week++) {
      if (calendarData[week].every(day => day === null)) {
        continue; // Skip empty weeks
      }
      
      for (let weekday = 0; weekday < 7; weekday++) {
        const day = calendarData[week][weekday];
        output += day !== null ? day : '';
        output += '\t';
      }
      output += '\n';
    }
    
    return output;
  }
  
  // Navigate to previous month
  previousMonth() {
    if (this.month === 0) {
      this.month = 11;
      this.year--;
    } else {
      this.month--;
    }
    return this;
  }
  
  // Navigate to next month
  nextMonth() {
    if (this.month === 11) {
      this.month = 0;
      this.year++;
    } else {
      this.month++;
    }
    return this;
  }
  
  // Check if a specific date is today
  isToday(day) {
    const today = new Date();
    return day === today.getDate() && 
           this.month === today.getMonth() && 
           this.year === today.getFullYear();
  }
  
  // Add an event to a specific date
  addEvent(day, eventName) {
    // Implementation would depend on how you want to store events
    console.log(`Added event "${eventName}" on ${this.getMonthName()} ${day}, ${this.year}`);
  }
}

// Example usage
const calendar = new Calendar();
console.log(calendar.render());

// Navigate to next month
calendar.nextMonth();
console.log(calendar.render());
```

### Creating a Countdown Timer

```javascript
class CountdownTimer {
  constructor(targetDate, options = {}) {
    // Target date can be a Date object or a string
    this.targetDate = targetDate instanceof Date ? targetDate : new Date(targetDate);
    this.onTick = options.onTick || this.defaultOnTick;
    this.onComplete = options.onComplete || this.defaultOnComplete;
    this.interval = null;
    this.remaining = {};
  }
  
  // Start the countdown
  start() {
    // Check if the target date is valid
    if (isNaN(this.targetDate.getTime())) {
      throw new Error("Invalid target date");
    }
    
    // Check if the target date is in the future
    if (this.targetDate <= new Date()) {
      this.remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      this.onComplete();
      return;
    }
    
    // Calculate initial remaining time
    this.calculateRemaining();
    this.onTick(this.remaining);
    
    // Set up interval to update every second
    this.interval = setInterval(() => {
      this.calculateRemaining();
      
      if (this.isComplete()) {
        this.stop();
        this.onComplete();
      } else {
        this.onTick(this.remaining);
      }
    }, 1000);
  }
  
  // Stop the countdown
  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
  
  // Reset the countdown
  reset(newTargetDate) {
    this.stop();
    if (newTargetDate) {
      this.targetDate = newTargetDate instanceof Date ? newTargetDate : new Date(newTargetDate);
    }
    this.start();
  }
  
  // Calculate remaining time
  calculateRemaining() {
    const now = new Date();
    const diffMs = Math.max(0, this.targetDate.getTime() - now.getTime());
    
    this.remaining = {
      total: diffMs,
      days: Math.floor(diffMs / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diffMs % (1000 * 60)) / 1000)
    };
    
    return this.remaining;
  }
  
  // Check if countdown is complete
  isComplete() {
    return this.remaining.total <= 0;
  }
  
  // Default tick handler
  defaultOnTick(remaining) {
    console.log(
      `${remaining.days}d ${remaining.hours}h ${remaining.minutes}m ${remaining.seconds}s`
    );
  }
  
  // Default complete handler
  defaultOnComplete() {
    console.log("Countdown complete!");
  }
  
  // Get formatted time string
  getFormattedTime() {
    const r = this.remaining;
    return `${r.days}d ${r.hours}h ${r.minutes}m ${r.seconds}s`;
  }
}

// Example usage
const targetDate = new Date();
targetDate.setMinutes(targetDate.getMinutes() + 1); // 1 minute from now

const countdown = new CountdownTimer(targetDate, {
  onTick: (remaining) => {
    console.log(`Time remaining: ${remaining.minutes}m ${remaining.seconds}s`);
  },
  onComplete: () => {
    console.log("Time's up!");
  }
});

// Start the countdown
countdown.start();

// To stop the countdown early
// setTimeout(() => countdown.stop(), 10000);
```

### Implementing a Meeting Scheduler Across Timezones

```javascript
class MeetingScheduler {
  constructor() {
    this.meetings = [];
  }
  
  // Add a meeting
  addMeeting(title, startTime, endTime, attendees = [], timezone = 'UTC') {
    const meeting = {
      id: Date.now().toString(),
      title,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      attendees,
      timezone
    };
    
    // Validate meeting times
    if (isNaN(meeting.startTime.getTime()) || isNaN(meeting.endTime.getTime())) {
      throw new Error("Invalid meeting times");
    }
    
    if (meeting.startTime >= meeting.endTime) {
      throw new Error("End time must be after start time");
    }
    
    // Check for conflicts
    if (this.hasConflict(meeting)) {
      throw new Error("Meeting conflicts with an existing meeting");
    }
    
    this.meetings.push(meeting);
    return meeting.id;
  }
  
  // Check if a meeting conflicts with existing meetings
  hasConflict(newMeeting) {
    return this.meetings.some(meeting => {
      return (
        (newMeeting.startTime < meeting.endTime && newMeeting.endTime > meeting.startTime) ||
        (meeting.startTime < newMeeting.endTime && meeting.endTime > newMeeting.startTime)
      );
    });
  }
  
  // Get a meeting by ID
  getMeeting(id) {
    return this.meetings.find(meeting => meeting.id === id);
  }
  
  // Update a meeting
  updateMeeting(id, updates) {
    const index = this.meetings.findIndex(meeting => meeting.id === id);
    if (index === -1) {
      throw new Error("Meeting not found");
    }
    
    const updatedMeeting = { ...this.meetings[index], ...updates };
    
    // If times were updated, validate them
    if (updates.startTime || updates.endTime) {
      const startTime = updates.startTime ? new Date(updates.startTime) : this.meetings[index].startTime;
      const endTime = updates.endTime ? new Date(updates.endTime) : this.meetings[index].endTime;
      
      if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
        throw new Error("Invalid meeting times");
      }
      
      if (startTime >= endTime) {
        throw new Error("End time must be after start time");
      }
      
      updatedMeeting.startTime = startTime;
      updatedMeeting.endTime = endTime;
      
      // Check for conflicts (excluding this meeting)
      const otherMeetings = this.meetings.filter((_, i) => i !== index);
      const hasConflict = otherMeetings.some(meeting => {
        return (
          (updatedMeeting.startTime < meeting.endTime && updatedMeeting.endTime > meeting.startTime) ||
          (meeting.startTime < updatedMeeting.endTime && meeting.endTime > updatedMeeting.startTime)
        );
      });
      
      if (hasConflict) {
        throw new Error("Updated meeting conflicts with an existing meeting");
      }
    }
    
    this.meetings[index] = updatedMeeting;
    return updatedMeeting;
  }
  
  // Delete a meeting
  deleteMeeting(id) {
    const index = this.meetings.findIndex(meeting => meeting.id === id);
    if (index === -1) {
      throw new Error("Meeting not found");
    }
    
    this.meetings.splice(index, 1);
    return true;
  }
  
  // Get all meetings
  getAllMeetings() {
    return [...this.meetings];
  }
  
  // Get meetings for a specific day
  getMeetingsForDay(date) {
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
    
    const nextDay = new Date(targetDate);
    nextDay.setDate(nextDay.getDate() + 1);
    
    return this.meetings.filter(meeting => {
      return meeting.startTime >= targetDate && meeting.startTime < nextDay;
    });
  }
  
  // Format a meeting time for a specific timezone
  formatMeetingTimeForTimezone(meeting, timezone) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: timezone
    };
    
    const startTimeFormatted = new Intl.DateTimeFormat('en-US', options).format(meeting.startTime);
    
    options.timeZoneName = 'short';
    const endTimeFormatted = new Intl.DateTimeFormat('en-US', options).format(meeting.endTime);
    
    return {
      title: meeting.title,
      startTime: startTimeFormatted,
      endTime: endTimeFormatted,
      timezone
    };
  }
  
  // Get meeting times for all attendees in their local timezones
  getMeetingTimesForAttendees(meetingId) {
    const meeting = this.getMeeting(meetingId);
    if (!meeting) {
      throw new Error("Meeting not found");
    }
    
    return meeting.attendees.map(attendee => {
      return {
        attendee: attendee.name,
        meetingTime: this.formatMeetingTimeForTimezone(meeting, attendee.timezone)
      };
    });
  }
  
  // Find available meeting slots
  findAvailableSlots(duration, date, startHour = 9, endHour = 17) {
    const targetDate = new Date(date);
    targetDate.setHours(startHour, 0, 0, 0);
    
    const endTime = new Date(date);
    endTime.setHours(endHour, 0, 0, 0);
    
    const durationMs = duration * 60 * 1000; // Convert minutes to milliseconds
    const slots = [];
    
    // Get all meetings for the day
    const dayMeetings = this.getMeetingsForDay(date).sort((a, b) => a.startTime - b.startTime);
    
    let currentTime = targetDate;
    
    // Add the start of the day as a potential slot
    if (dayMeetings.length === 0) {
      // If no meetings, the entire day is available
      slots.push({
        start: new Date(currentTime),
        end: new Date(endTime)
      });
    } else {
      // Check for slots between meetings
      for (let i = 0; i < dayMeetings.length; i++) {
        const meeting = dayMeetings[i];
        
        // If there's time before this meeting, add it as a slot
        if (meeting.startTime > currentTime && meeting.startTime - currentTime >= durationMs) {
          slots.push({
            start: new Date(currentTime),
            end: new Date(meeting.startTime)
          });
        }
        
        // Move current time to after this meeting
        currentTime = new Date(Math.max(currentTime.getTime(), meeting.endTime.getTime()));
      }
      
      // Check for time after the last meeting
      if (endTime > currentTime && endTime - currentTime >= durationMs) {
        slots.push({
          start: new Date(currentTime),
          end: new Date(endTime)
        });
      }
    }
    
    return slots;
  }
}

// Example usage
const scheduler = new MeetingScheduler();

// Add meetings
try {
  scheduler.addMeeting(
    "Team Standup",
    "2023-06-12T10:00:00Z",
    "2023-06-12T10:30:00Z",
    [
      { name: "Alice", timezone: "America/New_York" },
      { name: "Bob", timezone: "Europe/London" },
      { name: "Charlie", timezone: "Asia/Tokyo" }
    ]
  );
  
  scheduler.addMeeting(
    "Project Review",
    "2023-06-12T14:00:00Z",
    "2023-06-12T15:00:00Z"
  );
  
  // Find available slots for a 30-minute meeting
  const availableSlots = scheduler.findAvailableSlots(30, "2023-06-12");
  console.log("Available slots:", availableSlots);
  
  // Get meeting times for all attendees
  const meetingTimes = scheduler.getMeetingTimesForAttendees(scheduler.getAllMeetings()[0].id);
  console.log("Meeting times for attendees:", meetingTimes);
  
} catch (error) {
  console.error("Error:", error.message);
}
```

## Review Questions

1. **What are common pitfalls when working with dates in JavaScript?**
   - What issues can arise when parsing date strings?
   - How does JavaScript handle different date formats?
   - What are the challenges of working with timezones?
   - How can you avoid common date-related bugs?

2. **How would you calculate the difference between two dates?**
   - What methods can you use to find the time difference between dates?
   - How would you calculate the difference in days, hours, minutes, and seconds?
   - What considerations should you make when calculating date differences across timezones?
   - How would you handle date arithmetic that crosses daylight saving time changes?

3. **What strategies can you use to handle timezone differences?**
   - How does JavaScript store and represent timezones?
   - What APIs are available for working with timezones?
   - How would you display dates in a user's local timezone?
   - What approaches can you take when scheduling events across multiple timezones?

## Exercises

1. **Date Formatter**
   - Create a utility library with functions to format dates in various ways
   - Implement functions for common date formats (ISO, short date, long date, etc.)
   - Add functions to extract specific components (day of week, month name, etc.)
   - Create a function that formats dates according to a custom pattern string

2. **Date Calculator**
   - Build a date calculator that can:
     - Add or subtract days, months, and years from a date
     - Calculate the number of days between two dates
     - Determine if a year is a leap year
     - Find the day of the week for any date
     - Calculate age from a birthdate

3. **International Meeting Planner**
   - Enhance the meeting scheduler example to:
     - Find optimal meeting times across multiple timezones
     - Display a visual representation of working hours overlap
     - Handle recurring meetings
     - Account for holidays and non-working days
     - Generate calendar invites in iCalendar format

## Additional Resources

- [MDN: Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [JavaScript.info: Date and Time](https://javascript.info/date)
- [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [Moment.js](https://momentjs.com/) - Popular date manipulation library
- [date-fns](https://date-fns.org/) - Modern JavaScript date utility library
- [Luxon](https://moment.github.io/luxon/) - A powerful, modern, and friendly wrapper for JavaScript dates and times

## Next Steps
After mastering dates and times, you'll be ready to move on to error handling in JavaScript, which will help you write more robust and reliable code.