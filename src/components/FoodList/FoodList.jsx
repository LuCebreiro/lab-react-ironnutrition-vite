import { useState } from 'react'
import foodListJSON from '../../foods.json'
import FoodBox from '../FoodBox'

function FoodList() {
    const [ foodList, setFoodList ] = useState(foodListJSON)

    return (
        <div className='FoodList'>
            {foodList.map((food) => (
                <FoodBox key={food.id} {...food} />
            ))}
        </div>
    )


}

export default FoodList