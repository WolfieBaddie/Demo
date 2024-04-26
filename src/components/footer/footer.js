import React
 from "react";

 class FooterComponent extends React.Component{
render(){
    return (
    <>
    <h1>Footer Component</h1>
    <h1>{this.props.name}</h1>
    </>
    )
}
}

export default FooterComponent;