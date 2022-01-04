import {Link} from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'


function Explore() {
    return (
        <div className='explore'>
            <header>
                <p className='pageHeader'>
                    Explore
                </p>
            </header>

            <main>
            <p className='exploreCategoryHeading'>Catagories</p>
            <div className='exploreCategories'>
                <Link to='/category/rent'>
                    <img className="exploreCategoryImg" src={rentCategoryImage} alt='rent'/>
                    <p className='exploreCategoryName'>Places for Rent</p>
                </Link>
                <Link to='/category/sell'>
                    <img className="exploreCategoryImg" src={sellCategoryImage} alt='sell'/>
                    <p className='exploreCategoryName'>Places for Sell</p>
                </Link>
            </div>
            </main>
        </div>
    )
}

export default Explore
