import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetUpDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
function MeetupDetail1(props) {
  return (
    <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" content={props.meetupData.desciption}></meta>
    </Head>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.desciption}
      desciption={props.meetupData.desciption}
    />
    </Fragment>
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://hemanta:L7CLFMvY3E2s2xBI@cluster0.xuaef.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetup");
  const meetups= await meetupCollection.find({},{_id:1}).toArray();
  client.close();
  return {
    fallback: false,
    paths:meetups.map(mm=>({
      params:{
        meetupId: mm._id.toString(),
      }
    }))
    //  [
    //   {
    //     params: {
    //       meetupId: 'm1',
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: 'm2',
    //     },
    //   },
    // ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  //fetch data from backed end

  const client = await MongoClient.connect(
    "mongodb+srv://hemanta:L7CLFMvY3E2s2xBI@cluster0.xuaef.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetup");
  const meetupsselected= await meetupCollection.findOne({_id:ObjectId(meetupId)});
  client.close();


  return {
    props: {
      meetupData: {
        image:meetupsselected.image,
        id: meetupsselected._id.toString(),
        title:meetupsselected.title,
        address:meetupsselected.address,
        desciption:meetupsselected.description
      },
    },
  };
}
export default MeetupDetail1;
