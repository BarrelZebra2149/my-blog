import FoodBlock from "./FoodBlock";

let foodArr = [
    {no:100, imgSrc: "/images/sandwich.jpeg", imgName: "Sample", title:"The Perfect Sandwich, A Real NYC Classic", description:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."},
    {no:101, imgSrc: "/images/steak.jpeg", imgName: "Sample", title:"Let Me Tell You About This Steak", description:"Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."},
    {no:102, imgSrc: "/images/cherry.jpeg", imgName: "Sample", title:"Cherries, interrupted", description:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."},
    {no:103, imgSrc: "/images/pasta.jpeg", imgName: "Sample", title:"Once Again, Robust Wine and Vegetable Pasta", description:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."}
];

const FoodSection = () => {
    return (
        <div className="w3-main w3-content w3-padding" style={{maxWidth:"1200px", marginTop:"100px"}}>
            {foodArr.map((curFood, index) => {
                return (
                    <FoodBlock key={curFood.no} imgSrc={curFood.imgSrc} imgName={curFood.imgName}
                               title={curFood.title} description={curFood.description} />
                )
            })}
        </div>
    )
}

export default FoodSection;