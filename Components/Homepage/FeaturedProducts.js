import { useQuery } from '@apollo/client';

import { GET_FEATURED_PRODUCTS } from '../../GraphQL/queries/queries';

import '../../styles/styles.css';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Card from 'react-bootstrap/Card';

let products = [];

const responsive = {
    0: { items: 1 },
    1024: { items: 4 },
}

const addItems = () => {

    const { loading, error, data } = useQuery(GET_FEATURED_PRODUCTS, { variables: { id: '20' } });

    if (data) {
        products = data.categoryList[0].children.map((product, index) => {
            return (
                <Card className='txt-center' style={{ height: 400, fontSize: 5 }} key={index}>
                    <Card.Img style={{ height: 200 }} variant="top" src={product.products.items[0].small_image.url} />
                    <Card.Body  style={{ height: 200, textAlign: 'center', fontSize: 5 }}>
                        <Card.Title >{product.products.items[0].thumbnail.label}</Card.Title>
                        <Card.Text>
                            <b>{product.products.items[0].price_range.minimum_price.final_price.currency} {product.products.items[0].price_range.minimum_price.final_price.value}</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        });
    }
}

const FeaturedProducts = () => {
    addItems();
    return (
        <>
            <div className="featured-div">
                <h1>Featured Products</h1>
                <hr />
                <AliceCarousel
                    items={products}
                    responsive={responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    mouseTrackingEnabled={true}
                    disableAutoPlayOnAction={true}
                />
            </div>
        </>
    )
}

export default FeaturedProducts;