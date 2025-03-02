import CarsFiltersOption from '@/components/Home/CarsFiltersOption'
import { Hero } from '@/components/Home/hero'
import { SearchInput } from '@/components/Home/search-input'

export default function Home() {
 return (
  <div className='p-5 sm:px-10 md:px-20'>
   <Hero />
   <SearchInput />
   <CarsFiltersOption />
  </div>
 )
}
