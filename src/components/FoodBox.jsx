function FoodBox(props) {

    const { food, onDelete } = props
    const totalKCAL = food.servings * food.calories

    return (
        <div className='FoodBox'>
            <h3>{food.name}</h3>
            <img src={food.image} alt={food.name} width={200} />

            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>

            <p>
                <b>Total Calories: {totalKCAL}</b> kcal
            </p>

            <button onClick={onDelete}>Delete</button>
            <hr />
        </div>
    )

}

export default FoodBox