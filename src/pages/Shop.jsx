import { useEffect } from "react"
import { useState } from "react"

function Shop() {
    const [products, SetProduct] = useState([{
        title: 'KOLBOSA',
        price: 399.99,
        count: 3,
    }])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            SetProduct(json)
        })
    }, [])


    return (
        <>
            <div>Товар</div>
            {
            products &&
            products.map((product, i) => {
                return (
                    <div key={i}>
                        <div>title={product.title}</div>
                        <div>price={product.price}</div>
                        <div>count={product.count}</div>
                    </div>
                )

            })

            }           
        </>
    )
}

export default Shop;