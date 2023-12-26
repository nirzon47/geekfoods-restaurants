import Header from './Header/Header'
import Footer from './Footer/Footer'
import Quotes from './Quotes/Quotes'

const App = () => {
	return (
		<div className='relative'>
			<Header activeTab='Restaurants' />
			<Quotes />
			<Footer />
		</div>
	)
}

export default App
