import Header from './Header/Header'
import Footer from './Footer/Footer'
import Quotes from './Quotes/Quotes'
import Restaurants from './Restaurants/Restaurants'

const App = () => {
	return (
		<div className='relative'>
			<Header activeTab='Restaurants' />
			<Restaurants />
			<Footer />
		</div>
	)
}

export default App
