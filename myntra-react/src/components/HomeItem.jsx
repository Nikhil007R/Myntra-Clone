import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";



const HomeItem = ({item})=>{
    const bag = useSelector((store)=> store.bag);
    const dispatch = useDispatch(); 

    const elementFound = bag.indexOf(item.id) >= 0;
    // console.log(item.id, elementFound);

    const handleAddToBag = (e)=>{
        
        dispatch(bagActions.addToBag(item.id))
    }
    const handleRemove = (e)=>{
        dispatch(bagActions.removeFromBag(item.id))
    }

    return (
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image"/>
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>

            {elementFound ? <button button type="button" onClick={handleRemove} className="btn btn-add-bag btn-danger"> <MdDelete /> Remove</button> : <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}><IoMdAddCircleOutline /> Add to Bag</button>}
            
            
        </div>
    )
}

export default HomeItem;