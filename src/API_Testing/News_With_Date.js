import React, { Component } from 'react'
import PropTypes from 'prop-types'


class News_With_Date extends Component {
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
        fetch("https://api.first.org/data/v1/news").then((response) => {
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
                <h1>Country s News_With_Date</h1>
                </div>
        )
    }
}

export default News_With_Date