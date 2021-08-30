import React, {useEffect,useState} from 'react'
import {fetchMovies} from './../actions/index'
import {useDispatch, useSelector} from 'react-redux'
import { Container, Card, Button, Grid } from '@material-ui/core'

function Home() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.results)   
    const [counter, setCounter] = useState(1)

    useEffect(() => {        
        dispatch(fetchMovies(counter))              
    }, [counter])

    const renderMovies = () =>{
        if (Array.isArray(data)) {
            return (
                data.map((m, index) => (
                    
                <Card key={index}>
                    <Grid container >
                        <Grid item>
                            <h5>{m.title}</h5>
                            <img src={`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`} alt="" width="70%"/>
                        </Grid>
                    </Grid>                    
                </Card>)) 
                )
        }
    }
    return (
        <Container>
           
           <Grid container  
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start">
               <Grid >
                  {renderMovies()}
               </Grid>

           </Grid>
        
    

        <br></br>
        <br></br>

    
        <Button variant="contained" color="secondary" onClick={() => counter > 1 ? setCounter(counter - 1) :null}>Previous</Button>
        <Button variant="contained" color="primary" onClick={ () => setCounter(counter + 1)}>Next</Button>

        </Container>
    )
}

export default Home
