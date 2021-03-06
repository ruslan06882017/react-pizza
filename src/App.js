import React from 'react'
import './scss/app.scss'
import {Route} from 'react-router-dom'
import {Header} from './components'
import {Home, Cart} from './pages'

function App() {

  // const dispatch = useDispatch()

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact /> 
    </div>
  </div>
  )
}

/* const mapStateToProps = (state) => {
  // console.log(`items`, state.pizzas.items)
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); */


export default App


/* class App extends React.Component {
  
  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render(){
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact /> 
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(`items`, state.pizzas.items)
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
 */