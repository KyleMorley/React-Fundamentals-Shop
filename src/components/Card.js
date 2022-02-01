import Button from './Button';

const Card = ({item, addItem}) => {

    return (
        <div className='card'>
            <img className="card-img-top" src={item.image} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <Button className='card-btn btn btn-dark' text='Add To Cart' onClick={() => addItem(item)}/>
            </div>
        </div>
    )
}

export default Card
