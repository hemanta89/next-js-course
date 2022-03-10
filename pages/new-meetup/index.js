import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUpPage() {
  const router =useRouter();
  async function addMeetupHandler(enteredMeetUpDate) {
    const responnse = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpDate),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await responnse.json();
    console.log(data);
    router.push('/');
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}
export default NewMeetUpPage;
