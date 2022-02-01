import Hero from './Hero';
import Card from './Card';

const Services = ({items, addItem}) => {
    return (
        <>
            <Hero />
            <h1 className='mt-4'>Packages</h1>
             <div className='content'>
           {
               items.length > 0 ?
               items.map((item) => (
                <Card key={item.id} item={item} addItem={ addItem }/>
               ))
                :
               <h1>Loading...</h1>
           }
        </div>
        </>
    )
}

export default Services
