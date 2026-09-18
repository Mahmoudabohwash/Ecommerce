import Hero from './Home';
import Category from '../Category/Category'
import Products from '../Products/Products';

function LayoutHome({setCart , search}) {
  return (
    <div className='layout-home'>
      <Hero />    {/*   قسم الهيرو*/}
      <Category />   {/*   قسم  الكتوجري*/}
      <Products  setCart={setCart} search={search}/> {/*   قسم المنتجات*/}

    </div>
  )
}

export default LayoutHome;