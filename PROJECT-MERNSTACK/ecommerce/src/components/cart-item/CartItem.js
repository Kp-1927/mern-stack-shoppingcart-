import React,{useContext} from 'react';

export const CartItem = (props) => {

    const increaseHandler=()=>{
    }
    
    const decreaseHandler=()=>{
    }

  return (
    <div className='row my-4'>
        <div className='col-md-4 px-4 py-4'>{props.product_name}</div>
        <div className='col-md-4 px-4 py-4'>
            <div className='row'>
                <div className='col-md-4 text-end'>
                <button className='btn btn-outline-dark' onClick={decreaseHandler}>-</button>
                </div>
                <div className='col-md-4'>
                    <form>
                        <input type='text' value= {props.qty} className='form-item' readOnly/>
                    </form>
                </div>
                <div className='col-md-4 text-left font-big'>
                <button type="button" class="btn btn-outline-dark" onClick={increaseHandler}>+</button>
                </div>
            </div>
        </div>
        <div className='col-md-4 px-4 py-4'>₹{props.product_price*props.qty}</div>
    </div>
  )
}
