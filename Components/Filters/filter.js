import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_FILTER_QUERY } from '../../GraphQL/queries/queries';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import '../../styles/styles.css'

export const Filter = () => {
    const { loading, error, data } = useQuery(GET_FILTER_QUERY);
    return (

        <Accordion className="filter-search">
            
                {data ?
                    data.products.aggregations.map((item , index)=>{
                        return(
                            <Card key={index} className="filter-card">
                                <Accordion.Toggle as={Card.Header} eventKey={index + 1}> <p>{item.label}</p>  </Accordion.Toggle>
                                <Accordion.Collapse eventKey={index + 1}>
                                <Card.Body style={{fontSize:"1rem"}}>
                                    <ul>
                                        {item.options.map((opt , index)=>{
                                        return(
                                        <li key={index}>{opt.label}</li>
                                        )})}
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    })
                    :
                    null
                }
               
            
        </Accordion>
    )
}