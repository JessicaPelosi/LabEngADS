// class Letreiro extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             texto: '',
//             index: 0
//         };
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 200);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     tick() {
//       const { texto, index } = this.state;
//       if (index >= this.props.texto.length) {
//           this.setState({
//               texto: '',
//               index: 0
//           });
//       } else {
//           const novoTexto = this.props.texto.slice(0, index + 1);
//           this.setState({
//               texto: novoTexto,
//               index: index + 1
//           });
//       }
//   }

//     render() {
//         return <h1>{this.state.texto}</h1>;
//     }
// }

// ReactDOM.render(
//     <Letreiro texto="Venha estudar na Fatec!     " />,
//     document.getElementById('root')
// );