const React = require('react');
const Layout = require('./Components/Layout.jsx');

class Show extends React.Component {
    render() {
        return (
            <Layout id={this.props.guitar._id}>
                <div className="show-content">
                    <div className="show-info">
                        <div className="button-div"> 
                            <button id="buy-button" style={{display : this.props.guitar.qty <= 0? 'none' : ''}}>BUY</button>
                            <a href={`/guitars/${this.props.guitar._id}/edit`}><button className="button" >Edit Listing</button></a>
                          {/* <a href="/guitars/inventory"><button id="delete-button">DELETE</button></a> */}
                          <form action={`/guitars/${this.props.guitar.id}?_method=DELETE`} method="POST">
                                <input className="button" type="submit" value="Remove Guitar"/>
                        </form> 
                        </div>   
                        <h3 id="show-info-box">
                            Brand:  {this.props.guitar.brand}<br/>
                            Model:  {this.props.guitar.model}<br/>
                            Price: ${this.props.guitar.price}<br/>
                            Qty:  {this.props.guitar.qty}<br/>
                        </h3>
                            <img src={this.props.guitar.img}/>
                    </div>
                </div> 
            </Layout>
        )
    }
}
module.exports = Show;