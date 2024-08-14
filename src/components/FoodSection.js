import FoodBlock from "./FoodBlock";

let foodArr = [
    {no:100, imgSrc: "/images/sandwich.jpeg", imgName: "Sample", title:"The Perfect Sandwich, A Real NYC Classic", description:"This classic New York City sandwich features layers of fresh ingredients between lightly toasted bread: crisp lettuce, juicy tomatoes, creamy avocado slices, and rolled deli meat (turkey or ham). Garnished with herbs and presented on parchment paper with scattered avocado halves, nuts, and herbs, it captures the essence of a classic NYC deli-style sandwich, offering a delightful blend of textures and flavors."},
    {no:101, imgSrc: "/images/steak.jpeg", imgName: "Sample", title:"Let Me Tell You About This Steak", description:"This is features a succulent, medium-rare steak with perfect grill marks, garnished with herbs and black pepper. It rests on a wooden cutting board alongside charred asparagus and cherry tomatoes, with a glass of red wine completing the scene. The presentation suggests a high-quality culinary experience."},
    {no:102, imgSrc: "/images/cherry.jpeg", imgName: "Sample", title:"Cherries, interrupted", description:"This image captures a single, dew-kissed cherry in the foreground, with soft sunlight filtering through leaves in the background. The cherry’s rich red hue and glistening water droplets create a moment of natural beauty, as if time has paused to admire it."},
    {no:103, imgSrc: "/images/pasta.jpeg", imgName: "Sample", title:"Once Again, Robust Wine and Vegetable Pasta", description:"This image features a plate of spaghetti topped with rich red tomato sauce, fresh basil leaves, and grated cheese. The dark plate contrasts with the vibrant colors of the food, and the background includes ripe tomatoes, basil, salt, and cheese, suggesting freshness and quality."}
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