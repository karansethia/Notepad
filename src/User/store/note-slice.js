/* Note Structure
  note: [
    {id: 'note1',
    title: 'This is note title',
    content: 'This is note content',
    includedtags: [{tagName: 'work', color: 'red'},{},{}],
    isPin: true}
  ]

  Actions : 
  - Pin/Unpin
  - SaveNote
  - ShareNote
  - AddTag
  - CopyFromClipboard
  - DeleteNote
  - DeleteAll 
*/
import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "Notes",
  initialState: {notes : [
      {
    id: 1,
    title: "Meeting Agenda along with clients from Italy",
    content: "Prepare for the upcoming meeting by outlining project updates, discussing timeline adjustments, and addressing any potential roadblocks. Ensure all team members are informed and ready to contribute.",
    includedTags: [{tagName: "Work", color: "#0085ff"}, {tagName:"Development", color:"green"}],
    isPin: true
  },
  {
    id: 2,
    title: "Grocery List",
    content: "Don't forget to pick up essential items from the store: a gallon of milk, a dozen eggs, a loaf of whole-grain bread, and a variety of fresh vegetables for the week's meals.",
    includedTags: [{tagName: "Work", color: "#0085ff"}, {tagName:"Development", color:"green"}],
    isPin: false
  },
  {
    id: 3,
    title: "Travel Plans",
    content: "Tomorrow's travel schedule: Catch a flight at 2 PM to your destination. Arrive at the hotel by 4 PM for check-in. Remember to pack your passport, charger, and comfortable clothing.",
    includedTags: [{tagName: "Work", color: "#0085ff"}, {tagName:"Development", color:"green"}],
    isPin: false
  },
  {
    id: 4,
    title: "Book Recommendations",
    content: "Two captivating books to read: 'The Alchemist' by Paulo Coelho, a story of self-discovery, and '1984' by George Orwell, a dystopian classic that explores the power of government control.",
    includedTags: [{tagName: "Work", color: "#0085ff"}, {tagName:"Development", color:"green"}],
    isPin: false
  },
  {
    id: 5,
    title: "Ideas for Project",
    content: "Generate engaging content for the blog by writing about productivity tips to boost efficiency and a comparison of popular programming languages, highlighting their strengths and use cases.",
    includedTags: [{tagName: "Work", color: "#0085ff"}, {tagName:"Development", color:"green"}],
    isPin: true
  },
  {
    id: 6,
    title: "Ideas for Project",
    content: "Generate engaging content for the blog by writing about productivity tips to boost efficiency and a comparison of popular programming languages, highlighting their strengths and use cases.",
    includedTags: [{tagName: "Work", color: "#0085ff"}, {tagName:"Development", color:"green"}],
    isPin: true
  },
  {
    id: 7,
    title: "Ideas for Project",
    content: "Generate engaging content for the blog by writing about productivity tips to boost efficiency and a comparison of popular programming languages, highlighting their strengths and use cases.",
    includedTags: [{tagName: "Work", color: "#0085ff"}, {tagName:"Development", color:"green"}],
    isPin: true
  },
  {
    id: 8,
    title: "Ideas for Project",
    content: "Generate engaging content for the blog by writing about productivity tips to boost efficiency and a comparison of popular programming languages, highlighting their strengths and use cases.",
    includedTags: [{tagName: "Work", color: "#0085ff"}, {tagName:"Development", color:"green"}],
    isPin: true
  }
  ]},
  reducers: {
    pinStatus(state, action){
      //!get an id and match the note from the initial state and update the pin => !pin
    },
    saveNote(state, action){
      //! if id not existing in state add note or update note
    },
    shareNote(state, action){
      //!get the id from payload and send that note to somewhere => we'll figure that part later
    },
    addTag(state, payload){
      //! add the tag selected from the tagbar component 
      //todo - we'll add custom tag functionality later
    },
    deleteNote(state, action){
      //! take the id and delete the note from the state
    },
    deleteAllNotes(state, action){
      //! empty the state
    }
  }


})