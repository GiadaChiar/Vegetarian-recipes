/* https://img.spoonacular.com/recipes/649944-312x231.jpg
https://img.spoonacular.com/recipes/665378-312x231.jpg
https://img.spoonacular.com/recipes/1096185-312x231.jpg
https://img.spoonacular.com/recipes/633101-312x231.jpg*/


export default function Cart() {
    return (
        <div className="cart">
            <div className="imgCart">
            <img
                src="https://img.spoonacular.com/recipes/649944-312x231.jpg"
                alt="fake image salad"
            />
            </div>

            <div className="nameCart">
            <h3>Classic Carrot Cake With Cream Cheese </h3>
            </div>

            <div className="timeCard">
            <p>10 min</p>
            <img src="../public/images/clock.png" alt="green clock icon" />
            </div>

            <div className="starSection">
            <img className="star" src="../public/images/yellow_star.png" />
            <img className="star" src="../public/images/yellow_star.png" />
            <img className="star" src="../public/images/yellow_star.png" />
            <img className="star" src="../public/images/black_star.png" />
            <img className="star" src="../public/images/black_star.png" />
            </div>
        </div>
    );
}