import { useQuery } from '@apollo/client';

import { GET_NEW_REALEASE } from '../../GraphQL/queries/queries';


import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Card from 'react-bootstrap/Card';

let products = [];

const responsive = {
    0: { items: 1 },
    1024: { items: 4 },
}

const addItems = () => {

    const { loading, error, data } = useQuery(GET_NEW_REALEASE, { variables: { id: '21' } });

    if (data) {
        products = data.categoryList[0].children.map((product, index) => {
            return (
                <Card className='txt-center' style={{ height: 400, fontSize: 5 }} key={index}>
                    <Card.Img style={{ height: 200 }} variant="top" src={product.products.items[0].small_image.url} />
                    <Card.Body  style={{ height: 200, textAlign: 'center' }}>
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

const NewRelease = () => {

    addItems();
    return (
        <>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40, marginBottom: 40 }}>
                <h1>New Releases</h1>
                <div style={{ marginBottom: 15 }}><h1>_________</h1></div>
                <AliceCarousel
                    items={products}
                    responsive={responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    // mouseTrackingEnabled={true}
                    disableAutoPlayOnAction={true}
                />
            </div>
        </>
    )
}

export default NewRelease;