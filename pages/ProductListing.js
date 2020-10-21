import Layout from '../Components/Layout';
import { Col, Row } from 'react-bootstrap'
import { useQuery } from '@apollo/client';
import { categoryList } from '../GraphQL/queries/categories';
import CategoryDetail from '../Components/CategoryList/CategoryDetails';

import { BreadCrumbs } from '../Components/BreadCrumbs/Breadcrumbs'
import { List } from '../Components/CategoryList/CategoryList'
import { Filter } from '../Components/Filters/filter'
let details;
const ProductListing = () => {

    const { loading, error, data } = useQuery(categoryList, {
        variables: { id: "414" }
    });
    if(data){
        details = data.categoryList[0].description;
    }

    return (
        <Layout>
            <BreadCrumbs />
            <Row style={{ marginTop: 100, marginBottom: 100 }}>
                <Col>
                    <div className="filter-search-header">
                        <div className="heading">Filters Area </div>
                        <Filter />
                    </div>
                </Col>
                <Col lg={9}>
                    <List data={data ? data.categoryList[0].children : null} />
                </Col>
            </Row>
            <Row>
                <CategoryDetail details ={details}/>
            </Row>
        </Layout>
    )
}



export default ProductListing;