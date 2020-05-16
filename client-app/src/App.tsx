import React, {Component} from 'react';
import {Header, Icon, List} from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

class App extends Component{
  state = {
    values:[

    ]
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values').then((response) => {
      console.log(response)
      this.setState({
        values: response.data
      })
    })
  }  

  render(){
    return(
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivites</Header.Content>
        </Header>
        <List>
          <List.Item>
            {this.state.values.map((value : any) => (
              <li key={value.id}>{value.name}</li>
            ))}
          </List.Item>
        </List>
      </div>
    );
  }


}

export default App;
