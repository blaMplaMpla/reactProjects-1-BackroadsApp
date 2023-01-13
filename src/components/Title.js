const Title = ({title}) => {
    
    const text = title.split(" ")
   
    return (
        <div className="section-title">
            <h2>{text[0]} <span>{text[1]}</span></h2>
        </div>
    )
}
export default Title