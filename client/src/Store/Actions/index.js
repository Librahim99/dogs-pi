import axios from 'axios'
export const FETCH_DOGS = 'FETCH_DOGS'
export const SEARCH_DOGS = 'SEARCH_DOGS'
export const FETCH_TEMPERAMENTS = 'FETCH_TEMPERAMENTS'
export const SORT = 'SORT'
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP'
export const SORT_BY_WEIGHT = 'SORT_BY_WEIGHT'
export const SORT_BY_HEIGHT = 'SORT_BY_HEIGHT'
export const SORT_BY_LIFE_SPAN = 'SORT_BY_LIFE_SPAN'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export function fetchDogs(){
    return function(dispatch){
        axios.get('http://localhost:3001/api/dogs/')
        .then((dogs) =>{
            dispatch({
                type: FETCH_DOGS,
                payload: dogs.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function fetchTemperaments(){
    return function(dispatch){
        axios.get('http://localhost:3001/api/temperaments/')
        .then((temperaments) =>{
            dispatch({
                type: FETCH_TEMPERAMENTS,
                payload: temperaments.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function searchDogs(search){
    return function(dispatch){
        axios.get('http://localhost:3001/api/dogs?name=' + search)
        .then((dogs) =>{
            dispatch({
                type: SEARCH_DOGS,
                payload: dogs.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function sort(order){
    return{
    type: SORT,
    payload: order
    }
}

export function filterByOrigin(origin){
    return{
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
}

export function filterByTemp(temp){
    return{
        type: FILTER_BY_TEMP,
        payload: temp
    }
}
export function orderByWeight(order){
    return{
        type: SORT_BY_WEIGHT,
        payload: order
    }
}
export function orderByHeight(order){
    return{
        type: SORT_BY_HEIGHT,
        payload: order
    }
}
export function orderByLifeSpan(order){
    return{
        type: SORT_BY_LIFE_SPAN,
        payload: order
    }
}

export function addToFavorites(dog){
    return{
        type: ADD_TO_FAVORITES,
        payload: dog
    }
}

export function removeFromFavorites(dog){
    return{
        type: REMOVE_FROM_FAVORITES,
        payload: dog
    }
}