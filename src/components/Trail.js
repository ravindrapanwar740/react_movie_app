import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Trail extends Component {
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
        fetch("https://api.first.org/data/v1/countries").then((response) => {
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
                <h1>Country & Region</h1>
                {/* {this.state.list ? (
          <div>
            <table>
              <thead>
                <tr>
               <th>ID</th>
                  <th>Country</th>
                  <th>Region</th>
                        </tr>
                </thead>

              <tbody>
                <>
                {
                    this.state.list.map((item,i)=>(
              
                  <tr> */}
                   {/* <td>{item.data.DZ}</td> 
                     <td>
                      <b>{item.data.DZ.country}</b>
                    </td>
                    <td>
                      <b>{item.data.DZ.region}</b>
                    </td>               
                     </tr>
                ))
            }</>
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading.....</p>
        )}   */}
            </div>
        )
    }
}

export default Trail