import Brother from "../Models/Brother";
import BrotherProfile from "../Components/BrotherProfile";
import Spacing from "../Components/Spacing"

var brothers = []


const Brothers = () => {
  /*ADDING THE BROTHERS TO THE LIST SINCE WE DON'T HAVE A DATABASE*/
  brothers = [];
  brothers.push(new Brother("Jordan Gilcrist", "IDK", "President", "4th year", "Scotland"));
  brothers.push(new Brother("Nate Gray", "IDK", "Vice President", "4th year", "Massachusetts, USA"));
  brothers.push(new Brother("Louis Jerrom", "IDK", "Sergeant of Arms", "4th year", "England"));
  brothers.push(new Brother("Axel Colinet", "IDK", "Recruitment Director", "4th year", "IDK"));
  brothers.push(new Brother("Clayton Jamieson", "Eta", "Secretary", "3rd year", "Northern Ireland"));
  brothers.push(new Brother("Paul Davis", "Eta", "Treasurer", "3rd year", "Chicago, IL"));
  brothers.push(new Brother("Chrissy Orr", "Eta", "Social Secretary", "3rd year", "Scotland"));
  brothers.push(new Brother("Bastien Daumas", "IDK", "Social Secretary", "3rd year", "France"));
  
  
  
  return(
    <>

    <Spacing height="8"/>
    <h1 className="App-title">Brothers</h1>
    <Spacing height="5" />
        <a href="#brothers" className='arrow'>
          <img className='animate__animated animate__bounce animate__infinite	infinite animate-delay-2s animate__slow animate__delay-2s' src="https://img.icons8.com/external-outline-astudio/64/FFFFFF/external-arrow-arrow-outline-astudio-28.png" alt='Down facing arrow' />
        </a>
    <Spacing height="70"/>

    <div id="brothers">
    {
    brothers.map(
      (bro) => {
        return(
        <BrotherProfile brother={bro} key={bro.key}/>
        );
      }
    )
    }
    </div>

    </>
  )
}

export default Brothers;
