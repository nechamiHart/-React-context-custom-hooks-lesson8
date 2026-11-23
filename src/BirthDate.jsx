
export default function BirthDate({birthDate}){

    const birthYear=new Date(birthDate).getFullYear()
    const currentYear=new Date().getFullYear()
    const age=currentYear-birthYear

    return(
        <>
       <h1>` ! {age} מזל טוב אתה בן  `</h1>
        <h1>`{BirthDate} תאריך הלידה שלך הוא `</h1>
        </>
    )
}