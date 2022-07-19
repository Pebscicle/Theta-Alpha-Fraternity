import '../css/App.css';
import Spacing from './Spacing';
import ParagraphBox from './ParagraphBox';

function About()
{
    return(
<div>
    <ParagraphBox paragraph="
        We are Theta Alpha, a grassroots Fraternity which currently operates at the University of Stirling.
        Founded in 2017, our organisation is currently the sole existing University Fraternity in Scotland,
        and since its inception has consistently striven to provide a unique and fulfilling experience for each
        of our Brothers. There are three values which we wish to instil in our membership - Honour,
        Brotherhood & Scholarship - each of these values holds a core place in the work that we do, and in
        the direction that we want to take our organisation.
    "/>
    <Spacing height="1"/>
    <ParagraphBox paragraph="
        Aside from providing a space for our Brothers to congregate through our Chapter meetings, our
        Fraternity has also consistently sought to undertake tasks to the benefit of ourselves and the
        community around us. This has taken the form of charity fundraising events, drives for relief
        efforts and work with the homeless across Stirling, Edinburgh and Glasgow. These efforts are an
        example of the wider action that the community we have fostered is able to undertake, and has
        enabled our membership to gain hands-on experience in attempts to positively impact the lives of
        others.
    "/>
    <Spacing height="1"/>
    <ParagraphBox paragraph="
        Aside from our charity efforts, the Fraternity also seeks to provide unique leisurely opportunities
        unlike many found in traditional university societies. We have historically provided our members
        with the chance to host and curate underground events, take part in debate nights and public
        speaking alongside a plethora of other activities that come with being an active member of Theta
        Alpha. Our main Brother-oriented event is an annual Winter retreat taking place deep into the
        Scottish Highlands, which gives our Brothers an enlivening end of semester experience.
    "/>
    <Spacing height="1"/>
</div>
    );
}

export default About;