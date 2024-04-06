import FAQSearchBar from "../components/FAQSearchbar";
import "./FAQPage.css";
import { useState } from "react";

const faq = [ //cuestions and answers
  {
    question: `is Friends a dating page?`,
    answer: `Friends is oriented to allow you to meet people in your area. Is not oriented in a tomantig way. But for meeting new friends and people who share your interests`,
  },
  {
    question: `What is Friends?`,
    answer: `is a platform designed to connect people interested in meeting others or participating in local events in their area.`,
  },
  {
    question:"How does Friends work?",
    answer:" Our site allows users to register and create profiles to share their interests and activities they wish to engage in. You can explore profiles of other users and connect with those who share your interests" ,
  },
  {
    question: "Is Friends only for dating?" ,
    answer:  "No, Friends is not a dating platform. It is designed for people to expand their social circle and participate in group activities in their area",
  },
  {
    question: "What types of events can be found on Friends" ,
    answer: "You can find a variety of events ranging from social gatherings, hobby meetups, sports activities, cultural events, and more, all organized by users or local groups.",
  },
  {
    question: "How can I join events through Friends?" ,
    answer: `Once you've created a profile, you can browse through the list of upcoming events in your area. If you find one that interests you, simply click on it to see more details and RSVP if necessary.`,
  },
  {
    question: "Is Friends free to use?",
    answer: "Yes, Friends is free to use. However, some events may have associated costs or require tickets for participation." ,
  },
  {
    question: "Can I create my own events on Friends?" ,
    answer:" Absolutely! Users are encouraged to create and host their own events on Friends to share their interests with others in the community.",
  },
  {
    question: "Can i join events?",
    answer: "Yes, just by clicking on join you will automatically join the event",
  },
  {
    question:"Are there video tutorials for who to use the page?" ,
    answer: "Not yet. We are working in adding this functionality fot a next future.",
  },
  {
    question: "Do i need to create a profile in order to see people and events?" ,
    answer:  "Yes, you need a verified account",
  },
  {
    question: "Do i have to pay for something?" ,
    answer: `No, our page is 100% free.`,
  },
  {
    question: "Can i filter people by interest?" ,
    answer: "Yes, you can filter people by different interest and find the person who matches your interest.",
  },
  {
    question: "Can i create an Event?" ,
    answer: "Yes, if you are a registred user you will be able to create new events.",
  },
 
  {
    question: "Can I invite Friends to the app?",
    answer: "Sure! Just send them the sign up link. Creating an account is free",
  },
  {
    question: "Who created this page?",
    answer: `Hi! I am Jorge, Ironhack software develop bootcamp student.
     I hope you enjoy this page!`,
  },
];

function FAQPage() {
  const [showAnswer, setShowAnswer] = useState(false); //for opening the question
  const [plusOrLess, setPlusOrLess] = useState(true); //for opening the + and - 
  const [filteredFAQ, setFilteredFAQ] = useState(faq);
  const[allFaq,setAllfaq] = useState(faq);
  const [valueEntered,setValueEntered] = useState("")

  function ShowResponseFunction(index) {
    if (showAnswer !== index){ // if the one we click is not equal to the index ,makes it hidden and -
        setShowAnswer(index);
        setPlusOrLess(index)
    } else{ // else makes the if in the return false, so classmame stays like response hidden and not response
        setShowAnswer("")
        setPlusOrLess("")
    }
    
  }
  return (
    
    <div id="general-container-faq">
      <h1 id="title-faq">Frequently Asked Questions</h1>
      <FAQSearchBar faq={faq} filteredFAQ={filteredFAQ} allFaq={allFaq} setFilteredFAQ={setFilteredFAQ} setAllfaq={setAllfaq} valueEntered={valueEntered} setValueEntered={setValueEntered}></FAQSearchBar>
      {filteredFAQ.length === 0 && <h3 id="no-result-FAQPage">No result matches your search <button id="no-result-button"onClick={()=>{ setFilteredFAQ(allFaq); setValueEntered("")}}>See all questions</button></h3>}
      <div id={filteredFAQ.length > 0? "questions-container" : "questions-container-hidden"}>
      {filteredFAQ.length > 0  &&  filteredFAQ.map((eachFaq, i) => (
          <div
            className="eachQuestion"
            key={i}
            
          >
            {/* Onclick h2 gives both useStates the actual i value. then conditions will run as false and will be - and classname=hidden */}
            <h2 onClick={() => ShowResponseFunction(i)} className="question">{eachFaq.question} {plusOrLess !== i ? <span id="expandSymbol">+</span> : <span id="expandSymbol">-</span>} </h2>
            <div >
              <p
                className={`response ${showAnswer !== i  && "response-hidden"}`}
               
              >
                {eachFaq.answer}
              </p>
              
            </div>
          </div>
        ))} 
       


      </div>
    </div>
  );
}

export default FAQPage;
