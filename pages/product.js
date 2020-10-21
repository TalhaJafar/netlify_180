import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';
import { GET_SIMPLE_PRODUCT_DETAIL, GET_Configurable_PRODUCT_DETAIL } from '../GraphQL/queries/queries';
import AliceCarousel from '../Components/product/AliceCarousel';
import ViewOptions from '../Components/product/addToCartButton/ViewOptions';
import { Row, Col } from 'react-bootstrap'
import Reviews from '../Components/product/Reviews'
import '../styles/styles.css';
import Layout from '../Components/Layout';

const types = {
    simple: 'SimpleProduct',
    configurable: 'ConfigurableProduct',
    bundle: 'BundleProduct'
};
const product = (props) => {
    const router = useRouter();
    // console.log(router.query.sku,)
    let productType = router.query.type;
    // const { loading, error, data } = useQuery(GET_Configurable_PRODUCT_DETAIL, {
    //     variables: { sku: router.query.sku }
    // });
    let gData = null;
    let loadingData = null;
    if (productType == types.simple) {
        const { loading, error, data } = useQuery(GET_SIMPLE_PRODUCT_DETAIL, {
            variables: { sku: router.query.sku }
        });
        gData = data;
        loadingData = loading;
    } else if (productType == types.configurable) {
        const { loading, error, data } = useQuery(GET_Configurable_PRODUCT_DETAIL, {
            variables: { sku: router.query.sku }
        });
        gData = data;
        loadingData = loading;
    } else if (productType == types.bundle) {
        const { loading, error, data } = useQuery(GET_Configurable_PRODUCT_DETAIL, {
            variables: { sku: router.query.sku }
        });
        gData = data;
        loadingData = loading;
    }
    if (gData) {
        // console.log(gData);
    }
    return (
        <Layout>
            <Row style={{ margin: "5% 0px" }}>
                <Col lg={6} md={6} style={{ textAlign: "center" }}>
                    {loadingData ? <h6>loading....</h6> : <AliceCarousel imagess={gData.productDetail.items[0].media_gallery} />}
                </Col>
                <Col lg={6} md={6} >
                    <div style={{ width: '80%' }}>
                        {gData ?
                            <>
                                <h1 className="pd-product-title"> {gData.productDetail.items[0].name} </h1>
                                <p>{gData.productDetail.items[0].reviews.count ? gData.productDetail.items[0].reviews.count + " Reviews" : " No Reviews"}</p>
                                <br />
                                <p className="pd-meta-description"><b>{gData.productDetail.items[0].price_range.minimum_price.final_price.currency} {gData.productDetail.items[0].price_range.minimum_price.final_price.value}</b> </p>
                                <br />
                                <p className="pd-meta-description"> {gData.productDetail.items[0].meta_description}</p>
                            </>
                            :
                            null}
                    </div>
                    <div style={{ width: '80%' }}>
                        {gData ? <ViewOptions productType={productType} options={gData.productDetail.items[0].configurable_options} /> : null}
                        {/* <p>  gData.productDetail.items[0].meta_description : null}</p> */}
                    </div>
                </Col>
            </Row>
            <Row className="pd-description">
                {gData ?
                    <>
                        <h1>Description</h1>
                        <br />
                        <div className="pd-meta-description" dangerouslySetInnerHTML={{ __html: gData.productDetail.items[0].description.html }} />
                    </>
                    : null}
            </Row>
            <Row>
                {gData ? gData.productDetail.items[0].reviews.count ?
                    <Reviews id={gData.productDetail.items[0].id} />
                    : null : null}
            </Row>
        </Layout>
    )
}
export default product



