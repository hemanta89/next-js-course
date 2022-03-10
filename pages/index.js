import { useEffect } from "react";
import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";


const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "A first meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Assam guwahati 781028",
    description: "our first meet up",
  },
  {
    id: "m2",
    title: "A first meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Assam guwahati 781028",
    description: "our second meet up",
  },
];
function HomePage(props) {
  // const [loadedMeetup, setLoadedMeetup]=useState([]);
  // useEffect(()=>{
  //   setLoadedMeetup(DUMMY_MEETUP);
  // }, []);
  return (
    <Fragment>
       <Head>
         <title>React Meetup</title>
         <meta name="description" content="React Meetup details"></meta>
       </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  
  
  );
}
//  export async function getServerSideProps(context){
//    const req=context.req;
//    const res=context.res;
//   return {
//         props:{
//           meetups:DUMMY_MEETUP
//         }, 
       
//       }

//  }


export async function getStaticProps() {
  //fetch data from backed end
  const client = await MongoClient.connect(
    "mongodb+srv://hemanta:L7CLFMvY3E2s2xBI@cluster0.xuaef.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetup");
  const meetups= await meetupCollection.find().toArray();
  client.close();
  return {
    props:{
      meetups:meetups.map(meetup=>({
        id: meetup._id.toString(),
    title: meetup.title,
    image:meetup.image,
    address: meetup.address
    
      }))
    }, 
    revalidate:1
  }
};
export default HomePage;
