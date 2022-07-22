import '../css/App.css';
import '../css/BrotherProfile.css';
import Spacing from './Spacing';

let fadeIn = "";
let mrg = "";

const BrotherProfile = (obj) =>
{
    if(obj.brother.key%2==0)
    {
        fadeIn = "fade-right";
        mrg = "0 auto 0 10vw";
    }
    else
    {
        fadeIn = "fade-left";
        mrg = "0 10vw 0 auto";  
    }
    console.log(obj.brother.img);
    return(
        <div className="brother-profile-box" data-aos={fadeIn} data-aos-duration="750">
            <div className="brother-box" style={{margin: mrg}}>
                <div className="top-row">
                    <img src=
                    "https://images.unsplash.com/photo-1590488351142-010bc5059f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80"
                     alt={"Photo of "+obj.brother.name} className='brother-pfp'/>
                    <div className="brother-profile">
                        <p>Name: {obj.brother.name}</p>
                        <p>Role: {obj.brother.role}</p>
                        <p>Class: {obj.brother.clas}</p>
                        <p>School Status: {obj.brother.schoolYear}</p>
                        <p>Place of Birth: {obj.brother.pob}</p>
                    </div>
                </div>
                <div className="bottom-row">
                    <p>The bald eagle (Haliaeetus leucocephalus) is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle (Haliaeetus albicilla), which occupies the same niche as the bald eagle in the Palearctic. Its range includes most of Canada and Alaska, all of the contiguous United States, and northern Mexico. It is found near large bodies of open water with an abundant food supply and old-growth trees for nesting.</p>
                </div>
            </div>
            <Spacing height="15"/>
        </div>
    )
}

export default BrotherProfile;
