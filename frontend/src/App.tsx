import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Posts from './components/Posts';
import Header from './components/Header.jsx';



const App = () => {
	return (
		<div className="container">
      <Header />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
      </Grid>
        <Container sx={{ width: '75%', paddingTop: '5%' }}>
        <Posts />
      </Container>
		</div>
	)
}

export default App