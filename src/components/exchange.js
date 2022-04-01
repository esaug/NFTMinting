import React from "react";
import blockchainReducer from "../redux/blockchain/blockchainReducer";


function Exchange (props) {

    

    const prueba = () =>{

        props.blockchainDatos.CStoryMineContract.options.address = '0x63c9bE47441FC2C2b7485165e08537ea970B7cD4'
        props.blockchainDatos.CStoryMineContract.methods.balance_total()
        .call()
        .then((balance)=>{
            console.log(balance)
          })
    }

    // Funcion para visualizar el balance de tokens del Smart Contract
 /* balance_contrato = async (mensaje) => {
    try {
      console.log(mensaje)
      // Balance del Smart Contract
      const balance = await props.blockchain.CStoryMineContract.methods
      alert(parseFloat(balance))
    }catch(err){
      this.setState({errorMessage: err.message})
    } finally {
      this.setState({loading: false})
    }
  } */



    return (

        <div>
            <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://frogames.es/rutas-de-aprendizaje"
            target="_blank"
            rel="noopener noreferrer"
          >
            DApp
          </a>
          <button onClick={prueba}>BOTON DE PRUEBA</button>
          <ul className="navbar-nav px-3"> 
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white"><span id="account"></span></small>

            </li>

           </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Comprar tokens ERC-20</h1>
                <form onSubmit = {(event) => {
                    event.preventDefault()
                   // const direccion = 
                   // const cantidad = 
                   // const ethers = web3.utils.toWei(this.cantidad.value, 'ether')
                   // const mensaje = 'Compra de tokens en ejecución...'
                   // this.envio(direccion, cantidad, ethers, mensaje)
                }}>  
                
                <input type= 'text' 
                        className='form-control mb-1' 
                        placeholder = 'Dirección de destino'
                        /> 
                
                <input type= 'text' 
                        className='form-control mb-1' 
                        placeholder = 'Cantidad de Tokens a comprar (1 Token = 1 Ether)'
                        /> 
         
                
                <input type = 'submit'
                        className= 'btn btn-block btn-danger btn-sm'
                        value = 'COMPRAR TOKENS'/> 
                
                
                </form>

                &nbsp;

                <h1> Balance total de tokens de un usuario </h1>

                <form onSubmit = {(event) => {
                    event.preventDefault()
                    const address = this.address_balance.value
                    const mensaje = 'Balance de tokens de una persona en ejecución...'
                    //this.balance_persona(address, mensaje)
                }}>  

                <input type= 'text' 
                        className='form-control mb-1' 
                        placeholder = 'Dirección del usuario'
                       /> 


                <input type = 'submit'
                        className= 'btn btn-block btn-success btn-sm'
                        value = 'BALANCE DE TOKENS'/> 


                </form>

                &nbsp;


                <h1>Balance de tokens del Smart Contract</h1>

                <form onSubmit = {(event) => {
                    event.preventDefault()
                    const mensaje = 'Balance de tokens del Smart Contract en ejecución...'
                    
                }}>  

                <input type = 'submit'
                        className= 'btn btn-block btn-primary btn-sm'
                        value = 'BALANCE DE TOKENS'/> 

                </form>

                &nbsp;

                <h1> Añadir nuevos Tokens </h1>

                <form onSubmit = {(event) => {
                    event.preventDefault()
                    const mensaje = 'Incremento de tokens del Smart Contract en ejecución...'
                    //const num_tokens = 
                    //this.incremento_tokens(num_tokens, mensaje)
                }}>  

                <input type= 'text' 
                        className='form-control mb-1' 
                        placeholder = 'Cantidad de tokens a incrementar'
                        /> 


                <input type = 'submit'
                        className= 'btn btn-block btn-warning btn-sm'
                        value = 'INCREMENTO DE TOKENS'/> 

                </form>
              


              </div>
            </main>
          </div>
        </div>
      </div>
        </div>
    )
}



export default Exchange;
