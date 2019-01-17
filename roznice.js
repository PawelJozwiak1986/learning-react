// class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this._onClick = this._onClick.bind(this);
//   }
  _onClick() {
    this.setState({ clicked: true });
  }
//   render() {
//     return <button onClick={this.onClick} />;
//   }
// }
// We could just do:

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { clicked: false };
//   }
  _onClick = () => {
    this.setState({ clicked: true });
//   }
//   render() {
//     return <button onClick={this.onClick} />;
//   }
// 

// class Button extends React.Component {
  state = {
    clicked: false
  }
  _onClick = () => {
    this.setState({ clicked: true });
//   }
//   render() {
//     return <button onClick={this.onClick} />;
//   }
// }