import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = ()=>{

    const fetchStatus = useSelector(store => store.fetchStatus)
    const dispatch = useDispatch();
    // console.log(fetchStatus);

    useEffect(()=> {
        
        if(fetchStatus.fetchDone) return;
        
        dispatch(fetchStatusActions.markFetchingStarted());
        fetch("http://localhost:8080/items")
        .then((res)=> res.json())
        .then(({items})=>{
            dispatch(fetchStatusActions.markFetchDone());
            dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(itemsActions.addInitialItems(items[0]));
            // console.log("items fetched ", items)
        })

    }, [fetchStatus])

    return (
        <div>
            
        </div>
    )
}

export default FetchItems;