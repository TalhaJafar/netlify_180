import { gql } from '@apollo/client';


const categoryList = gql`
query categoryList($id:String!) {
 categoryList(filters:{ids:{eq:$id}}) {
        id
        description
        meta_description
        meta_title
        url_key
        meta_keywords
        children {
            id
            name
            url_key
            url_path
            children_count
            path
            image
            products(pageSize: 1) {
                items {
                    sku
                    thumbnail{
                        label
                      }
                    small_image {
                        url
                    }
                    price_range {
                        minimum_price {
                          final_price {
                            currency
                            value
                          }
                         
                        }
                    }
                }
            }
        }
    }

}
`;

export { categoryList };