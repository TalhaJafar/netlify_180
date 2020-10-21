import { gql } from '@apollo/client';
const GET_FEATURED_PRODUCTS = gql`
query categoryList($id:String!) {
    categoryList(filters:{ids:{eq:$id}}) {
           id
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
const GET_NEW_REALEASE = gql`
query categoryList($id:String!) {
    categoryList(filters:{ids:{eq:$id}}) {
           id
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
const GET_TEXT_CONTENT = gql`
{
    cmsBlocks(identifiers: ["smoke_footer_bottom_links",
          "smoke_footer_disclaimer",
          "smoke_footer_social",
          "header_free_shipping"]) {
        items {
            content
            identifier
        }
    }
}`
const GET_CATEGORY_DETAILS = gql`
{
    categoryList (filters:{ids:{eq:"14"}}) {
      url_key
      meta_title
      meta_keywords
      meta_description
      description
      seo_href_langs {
        store
        url_key
        url_path
        url
      }
    }
  }`
let filters = ["area : HOMEPAGE"];
const GET_BANNER_URLS = gql`
query {
  rbsliderBanner(${filters.join(', ')}) {
      id
      name
      display_arrows
      display_bullets
      is_random_order_image
      is_stop_animation_mouse_on_banner
      pause_time_between_transitions
      slide_transition_speed
      sliders{
          id
          img_file
          img_url
          img_url_final
          mobile_file
          mobile_url
          mobile_url_final
          img_alt
          url
          is_add_nofollow_to_url
          is_open_url_in_new_window
      }
  }
}
`
const GET_FILTER_QUERY = gql`
query{
  products(filter:{category_id:{in:"14"}}){
    aggregations {
    count
    label
    attribute_code
    options{
      label
      value
    }
  }
  }
}
`
// const GET_PRODUCT_DETAILS = gql`
// {
//   productDetail: products(filter: { url_key: { eq: "$url_key" } } ) {
//       items {
//          name
//         image{
//           label
//           url
//         }
//       }
//   }
// }
// `

const GET_SIMPLE_PRODUCT_DETAIL = gql`
query productDetail($sku:String!){
  productDetail: products(filter: { sku: { eq: $sku } } ) {
      items {
        id
        name
        __typename
        meta_description
        reviews{
          rating
          count
        }
        price_range{
          minimum_price{
            final_price{
              value
              currency
            }
          }
        }
        description{
          html
        }
        media_gallery{
          label
          url
        }
        image{
          label
          url
        }
      }
  }
}
`

const GET_Configurable_PRODUCT_DETAIL = gql`
query productDetail($sku:String!){
  productDetail: products(filter: { sku: { eq: $sku } } ) {
      items {
        id
        name
        meta_description
        reviews{
          rating
          count
        }
        price_range{
          minimum_price{
            final_price{
              value
              currency
            }
          }
        }
        description{
          html
        }
        media_gallery{
          label
          url
        }
        image{
          label
          url
        }
        ... on ConfigurableProduct {
          configurable_options {
              attribute_code
              attribute_id
              id
              label
              values {
                  default_label
                  label
                  store_label
                  use_default_value
                  value_index
              }
          }
          variants {
              attributes {
                  code
                  value_index
              }
              product {
                  id
                  media_gallery_entries {
                      disabled
                      file
                      label
                      position
                  }
                  sku
                  stock_status
                  region_restrictions
              }
          }
      }
      }
  }
}
`
const GET_REVIEWS = gql`
query getReviews($productId: Int! ){
  reviews(filter: { product_id: $productId }) {
      summary {
          rating
          count
      }
      items {
          customer_id
          detail
          nickname
          title
          review_at
          ratings {
              vote_id
              review_id
              rating_code
              value
          }
      }
  }
}`
export {
  GET_CATEGORY_DETAILS, GET_FEATURED_PRODUCTS, GET_NEW_REALEASE, GET_TEXT_CONTENT, GET_BANNER_URLS, GET_FILTER_QUERY,
  GET_SIMPLE_PRODUCT_DETAIL, GET_Configurable_PRODUCT_DETAIL, GET_REVIEWS
};