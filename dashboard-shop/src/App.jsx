import { useState } from 'react';
import Sidebar from './compontents/shared/Sidebar';
import { RiMenu3Fill, RiUser3Fill, RiAddFill, RiPieChart2Line, RiCloseLine, RiSearch2Line, RiArrowDownSLine, RiDeleteBin6Line } from 'react-icons/ri';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu Movil */}
      <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
        <button>
          <RiUser3Fill className='p-2' />
        </button>
        <button>
          <RiAddFill className='p-2' />
        </button>
        <button>
          <RiPieChart2Line className='p-2' />
        </button>
        <button onClick={toggleMenu} className='text-white p-2'>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20'>
        <div className='lg:col-span-6 md:p-8'>
          <header >
            {/* Tittle and search */}
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
              <div>
                <h1 className='text-2xl text-gray-300'> Andres Valarezo</h1>
                <p className='text-gray-500'>10 marzo 2023</p>
              </div>
              <form action="">
                <div className='w-full relative'>
                  <RiSearch2Line className='absolute left-4 top-1/2 -translate-y-1/2 text-white' />
                  <input type="text" className='bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none' placeholder='Buscar' />
                </div>
              </form>
            </div>

            {/* Tabs */}
            <nav className='text-gray-300 flex item-center justify-between md:justify-start md:gap-8 border-b mb-6'>
              <a href="#" className=' relative p-2 pr-4 py-2 before:w-1/2 before:h-[2px] before:absolute before:bg-[#d78075] before:left-0 before:rounded-full before:-bottom-[1px] text-[#d78075]'>Hot dishes</a>
              <a href="#" className='p-2 pr-4 py-2'>Cold dishes</a>
              <a href="#" className='p-2 pr-4 py-2'>Soup</a>
              <a href="#" className='p-2 pr-4 py-2'>Grill</a>
            </nav>

          </header>
          {/* Title content */}
          <div className='flex items-center justify-between mb-16'>
            <h2 className='text-xl text-gray-300'>Choose Dishes</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] rounded-lg py-2 px-4'><RiArrowDownSLine />Dine in</button>
          </div>

          {/* Content */}
          <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            {/* Card */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
              <img src="plato1.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full' />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* Card */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
              <img src="plato1.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full' />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* Card */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
              <img src="plato1.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full' />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* Card */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
              <img src="plato1.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full' />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* Card */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
              <img src="plato1.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full' />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
            {/* Card */}
            <div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-center text-gray-300 gap-2'>
              <img src="plato1.png" alt="" className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full' />
              <p className='text-xl'>Speacy seasoned seafood nodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 Bowls avaliable</p>
            </div>
          </div>

        </div>
        <div className='lg:col-span-2 fixed lg:static right-0 bg-[#1F1D2B] right-0 top-0 w-full h-full'>
          {/* Order */}
          <div className='relative pt-16 text-gray-300 p-8'>
            <RiCloseLine className='absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl' />
            <h1 className='text-2xl my-4'>Orders #31231</h1>
            {/* Buttons*/}
            <div className='flex items-center gap-4 flex-wrap mb-8'>
              <button className='bg-[#d78075] text-white py-2 px-4 rounded-xl border border-gray-500'>Dine In</button>
              <button className='hover:bg-[#d78075] hover:text-white text-[#d78075] py-2 px-4 rounded-xl border border-gray-500'>To Go</button>
              <button className='hover:bg-[#d78075] hover:text-white text-[#d78075] py-2 px-4 rounded-xl border border-gray-500'>Delivery</button>
            </div>
            {/* Car */}
            <div>
              <div className='grid grid-cols-6 mb-4 p-4'>
                <h5 className='col-span-4'>Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Product */}
              <div className='bg-[#262837] p-4 rounded-xl'>
                <div className='grid grid-cols-6 mb-4'>
                  {/* Product Description */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img src="plato1.png" alt="" className='w-12 h-12 object-cover' />
                    <div>
                      <h5 className='text-sm'>Speacy seasoned sea...</h5>
                      <p className='text-xs text-gray-500'>$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                    <div>
                      <span>2</span>
                    </div>
                  {/* Price */}
                    <div>
                      <span>$4.58</span>
                    </div>
                </div>
                {/* Note */}
                <div className='grid grid-cols-6'>
                  <form className='col-span-4'>
                    <input type="text" className='bg-[#1F1D2B] py-1 px-4 rounded-lg' placeholder='Order note...' />
                    <button><RiDeleteBin6Line/></button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

export default App
