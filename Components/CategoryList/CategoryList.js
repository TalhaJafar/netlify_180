import React from 'react'
import '../../styles/styles.css'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Router from 'next/router';
import Link from 'next/link'
export const List = (props) => {
    return (
        <CardColumns style={{ width: '90%' }}>
            {
                props.data ?
                    props.data.map((product, index) => {

                        return (
                            <Link key={index} as={`${product.products.items[0].sku}`} href={`/product?sku=${product.products.items[0].sku}&type=${product.products.items[0].__typename}`} >
                                <Card
                                    style={{ height: 500 }} key={index}>
                                    <Card.Img style={{ height: 300 }} variant="top" src={product.products.items[0].small_image.url} />
                                    <Card.Body style={{ height: 200, textAlign: 'center' }}>
                                        <Card.Title>{product.products.items[0].thumbnail.label}</Card.Title>
                                        <Card.Text>
                                            {/* <Link as={`${product.products.items[0].sku}`} href={`/product?sku=${product.products.items[0].sku}&type=${product.products.items[0].__typename}`} ><a> */}
                                                <b>{product.products.items[0].price_range.minimum_price.final_price.currency} {product.products.items[0].price_range.minimum_price.final_price.value}</b>
                                            {/* </a></Link> */}

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        )
                    })
                    : null
            }
        </CardColumns >
    )


}