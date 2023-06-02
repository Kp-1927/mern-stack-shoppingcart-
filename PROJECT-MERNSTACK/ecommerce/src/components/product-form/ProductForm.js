import React, {useContext,useState} from 'react';
import axios from 'axios';
import './product-form.css';
import ProductContext from '../../store/ProductContext'

const ProductForm = (props)=>{
    const ProductCtx = useContext(ProductContext);
    const [resMessage, setResMessage] = useState('');
    const [formInput,setFormInput] = useState({
        productName:'',
        productPrice:'',
        productImage:''
    })

    

    const productNameHandler = (event)=>{
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productName:event.target.value
            }
        })
    }
    const productPriceHandler = (event)=>{
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productPrice:event.target.value
            }
        })
    }
    const productImageHandler = (event)=>{ 
        setFormInput((prevState)=>{
            return{ 
                ...prevState,
                productImage:event.target.value
            }
        })
    }
    // console.log(formInput)
    // console.log(`Product Name: ${formInput.productName} Product Price: ${formInput.productPrice}`)
    
    const formSubmitHandler = async (event) => {
    
    let error = "";
    if (formInput.productName == "") {
        error= "Enter product Name"
        setResMessage(error)
    //   event.preventDefault();
      //error='Please enter the product name'
      //prompt(error);
    } else if (formInput.productPrice == "") {
        error= "Enter product Price"
        setResMessage(error)
    //   event.preventDefault();
      //error='Please enter the product name'
      //prompt(error);
    }
    if(error == "") {
        error = "Product Added Successfully"
        saveProductData(formInput);
        setResMessage(error)
    }
    event.preventDefault();
  };

  const saveProductData = async (formData) => {
    try{
        const product = {
            product_name: formData.productName,
            product_price: formData.productPrice,
            product_image: formData.productImage,
          }
          const result = await axios.post("http://localhost:1111/product/add",product,{
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          console.log(result)
          ProductCtx.setProducts([...ProductContext.products,product])
    }catch(err){
        console.log(`From Error`,err.message)
    }
    
  }
  
    return(
        <div className = 'form-container'>
            <h1>Add New Product</h1>
            <div className = 'error'>{resMessage}</div>
            <form onSubmit={formSubmitHandler}>
                <div className = 'form-input'>
                    <input type="text" placeholder='Product Name' onChange={productNameHandler}/>
                </div>
                <div className = 'form-input'>
                    <input type="text" placeholder='Product Price'onChange={productPriceHandler}/>
                </div>
                <div className = 'clearfix'></div>
                <div className = 'form-input'>
                    <input type="text" placeholder='Product Image'onChange={productImageHandler}/>
                </div>
                <div className = 'clearfix'></div>
                <div className = 'form-input'>
                    <button className="btn_add_product">Add Product</button>
                </div>
                <div className = 'clearfix'></div>
            </form>
        </div>
    )
}

export default ProductForm;