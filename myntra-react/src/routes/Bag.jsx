import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {

  const items = useSelector((store)=>store.items);
  const bagItems = useSelector((store)=> store.bag);
  // console.log("Bag Items", bag);

  const finalItems = items.filter((item)=> {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  })
  // console.log("finalItems ", finalItems);

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          
          {finalItems.map(item=> <BagItem key={item.id} item={item}/>)}
          
        </div>
        <BagSummary/>

      </div>
    </main>
  );
};

export default Bag;
