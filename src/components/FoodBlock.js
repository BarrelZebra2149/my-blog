//import "https://www.w3schools.com/w3css/4/w3.css";
const FoodBlock = ({imgSrc, imgName, title, description}) => {
    return (
        <div className="w3-quarter">
            <p><img src={imgSrc} alt={imgName} style={{width : "100%"}}/></p>
                <h3>{title}</h3>
                <p>{description}</p>
        </div>
    )
}
export default FoodBlock;

/*<div class="w3-quarter">
            <img src="/w3images/sandwich.jpg" alt="Sandwich" style="width:100%">
                <h3>The Perfect Sandwich, A Real NYC Classic</h3>
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        </div> */
