function FoodBox({ name, calories, image, servings }) {
const totalKCAL = servings*calories

    return (
        <div className='FoodBox'>
            <p>{name}</p>
            <img src={image} alt={name} />

            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>

            <p>
                <b>Total Calories: {totalKCAL}</b> kcal
            </p>

            <button>Delete</button>
        </div>
    )

}

export default FoodBox