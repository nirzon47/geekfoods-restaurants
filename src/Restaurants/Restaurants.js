import RestaurantCard from './RestaurantCard'
import restaurantList from './restaurantList.json'

const Restaurants = () => {
	return (
		<>
			<div className='flex items-center justify-between mb-4'>
				<div className='mx-8 mt-16 mb-4'>
					<input
						type='text'
						placeholder='Search restaurants...'
						className='p-2 pr-12 border rounded'
						value=''
					/>
				</div>
				<div className='mx-8 mt-16 mb-4'>
					<label for='minRating' className='mr-2'>
						Minimum Rating:
					</label>
					<input
						type='number'
						id='minRating'
						min='0'
						max='5'
						step='1'
						className='p-2 border rounded'
						value='0'
					/>
				</div>
			</div>
			<div className='grid grid-cols-1 gap-4 px-2 lg:px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
				{restaurantList.map((restaurant) => (
					<RestaurantCard key={restaurant.id} restaurant={restaurant} />
				))}
			</div>
		</>
	)
}

export default Restaurants
