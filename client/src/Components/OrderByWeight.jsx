import { useDispatch } from 'react-redux'
import {ASCENDANT, DESCENDANT} from '../Const/sort'
import { orderByWeight } from '../store/actions'


export default function OrderByWeight() {
    const dispatch= useDispatch()
    function onOrderChange(e){
        dispatch(orderByWeight(e.target.value))
    }

    return (
        <div>
        <label>By weight: </label>
        <select name="order" onChange={onOrderChange}>
            <option value={ASCENDANT}>Ascendant</option>
            <option value={DESCENDANT}>Descendant</option>
            </select>
        </div>
    )
}