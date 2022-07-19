const ParagraphBox = (props) => {

    return(
    
    <div className="paragraph-box">
        <p data-aos="fade-in-out" data-aos-duration="750" style={{padding:0, margin:0}}>
            {props.paragraph}
        </p>
    </div>
    
    )
    
    }
    
    export default ParagraphBox;