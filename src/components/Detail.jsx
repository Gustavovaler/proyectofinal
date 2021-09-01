import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchDetail } from './../actions/index'
import {Button, Container } from '@material-ui/core'


function Detail() {
    const dispatch = useDispatch()
    let {id} = useParams()
    const movie = useSelector(state => state.detail)
    useEffect(()=>{
        dispatch(fetchDetail(id))
    }, [])

    const renderDetail = () => {
        if ( movie !== undefined) {
            return (
                <div>{movie.title}</div>
            )
        }
    } 
       
   

    
    return (
        <Container>

            {
                renderDetail()
            }

            <Button variant="contained" color="secondary" href="/">Volver</Button>
          
        </Container>
        
    )
}

export default Detail
