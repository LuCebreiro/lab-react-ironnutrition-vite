import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import foodListJSON from '../../foods.json';
import FoodBox from '../FoodBox';
import AddFoodForm from '../AddFoodForm';

function FoodList() {
    const [foods, setFoods] = useState(foodListJSON);
    const [values, setValues] = useState({
        name: '',
        calories: '',
        image: '',
        servings: ''
    });

    const onDeleteFood = (id) => {
        const foodListFiltered = foods.filter((food) => food.id !== id);

        setFoods(foodListFiltered)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const newFood = {
            id: uuidv4(),
            name: values.name,
            image: values.image,
            calories: values.calories,
            servings: values.servings
        };

        const updatedFoods = [newFood, ...foods];
        setFoods(updatedFoods)

    setValues({
        name: '',
        calories: '',
        image: '',
        servings: ''
    });

};



    const onChange = (event) => {
        const { name, value } = event.target;
        return (
            setValues({
                ...values,
                [name]: value
            })
        )
    };


    return (
        <div className='FoodList'>
            <AddFoodForm values={values} onSubmit={onSubmit} onChange={onChange} />
            {foods.length > 0
                ? (
                    <>
                        {foods.map((food) => (
                            <FoodBox key={food.id} food={food} onDelete={() => onDeleteFood(food.id)} />
                        ))}
                    </>
                ) : (
                    <p>Oops! There is no more content to show. </p>
                )
            }


        </div>
    )


}

export default FoodList