import GreetingCard from "./GreetingCard"


export default function GreetingsList ({wishes}){

    return (
        <>
        {wishes.map( (wish,index) => (<GreetingCard key={index} wish={wish}></GreetingCard>))} 
        </>
    )

}