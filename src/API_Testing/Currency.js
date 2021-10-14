import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Currency extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:null
        }
    }
    componentDidMount() {
        this.getData();
      }
      getData() {
        fetch("https://api.coinbase.com/v2/currencies").then((response) => {
            console.log("response",response)
          response.json().then((result) => {
              console.log("Result",result)
            this.setState({ list: result });
          });
        });
      }

    
    render() {
        return (
            <div>
                <h1>Country & Currency</h1>
                </div>
        )
    }
}

export default Currency