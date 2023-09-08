function AddFoodForm({values, onSubmit, onChange}) {

    
    return (
        <div className="AddFoodForm">
            <h4>Add a Food</h4>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name="name" id='name' value={values.name} onChange={onChange} placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type='text' name="image" id='image' value={values.image} onChange={onChange} placeholder="Image URL" />
                </div>
                <div>
                    <label htmlFor='calories'>Calories</label>
                    <input type='number' name="calories" id='calories' value={values.calories} onChange={onChange} min={0} placeholder="0"/>
                </div>
                <div>
                    <label htmlFor='servings'>Servings</label>
                    <input type='number' name="servings" id='servings' value={values.servings} onChange={onChange} min={0} placeholder="0"/>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )

}

export default AddFoodForm
