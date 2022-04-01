import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
//import {useDispatch, useSelector} from "react-redux"
import {conexion} from "./redux/blockchain/blockchainActions"
import { fetchData } from './redux/data/dataActions';
import store from "./redux/store"
import Nft from "./components/nft"
import { isMetaProperty } from 'typescript';
import NftRender from './components/nft';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import MenuNav from './components/nav';
import Exchange from './components/exchange';


//import TokenPruebas from './components/token';

  
  // Conexion al juego y vista principal  
         

const _token = "0xb1668A37e0e71f7CbbB59c010Db0D63633c86A2D"
const address = "0x323D10bB37De64726227a6D07284cda6f74aB173"
const priceNFT = 100000
const owner = '0x7a1e8f7096B9ebD383bA61418f9f5568583b3568'
const receiberPrueba = '0xb24d78f866be8Fc7015d4fcE9b77EC7c9B6FF983'


function App() {


    const dispatch = useDispatch()
    const blockchain = useSelector((store)=>  store.blockchain)
    const data = useSelector((store) => store.data)


  
    // FUNCION DE MINTEO

   

    const MintNFT = (_account, _name, _rarity)=>{
    
      blockchain.CStoryNftContract.options.address = '0xc44D7dE1bdEBaa1519265525a902dbB08a471300'
   
      blockchain.CStoryNftContract.methods.createRandomNFT( _name, _rarity)
      .send({
        from: _account,
        
      }).then((receipt) => {
        
        console.log("QUE ES?" + receipt);
        dispatch(fetchData(_account));
        console.log("TRAJES DEL PROPIETARIO" + data.allOwnerNFTs)  
        
      })};


      const pago = (receiber, priceNFT) =>{


        blockchain.CStoryTokenContract.options.address = '0xc44D7dE1bdEBaa1519265525a902dbB08a471300'

        blockchain.CStoryTokenContract.methods.transfer(receiber, priceNFT)
        .send({
          from: blockchain.account,
        }).then((results)=>{
          if(results.status){
            MintNFT(blockchain.account ,"Master-Blade", 2)
          }
        })

      
      }
      


    useEffect(()=>{
    
      if(blockchain.account != "" || blockchain.CStoryNftContract != null){
        dispatch(fetchData(blockchain.account))
       
        
      }
    },[blockchain])


  return(
    <div className='flex flex-col'>

        
    
        {blockchain.account === "" || blockchain.CStoryNftContract === null ? (
        
          <button onClick={async(e)=>{
          e.preventDefault()
          dispatch(conexion())
          console.log("CUENTA:" + blockchain.account)
          }}>
          conectar
          </button> 
      
        ):(

          <div>
            
            <div>
              
            </div>

            <button onClick={(e)=>{
            e.preventDefault();
            MintNFT(blockchain.account ,"Admin", 1)
          }}
          >Mint Commond</button>

          <button onClick={(e)=>{
            e.preventDefault();
            MintNFT(blockchain.account ,"Admin", 2)
          }}
          >Mint Epic</button>

          <button onClick={(e)=>{
            e.preventDefault();
            MintNFT(blockchain.account,"Admin", 3)
          }}
          >Mint Legendary</button>

          </div>
          

        )}

        <div>
          
            <div>
              <p>You Wallet: {blockchain.account}</p>
              <p>Your NFT</p>
            <div className="flex-row">
              {data.allOwnerNFTs.map((item, index) => {
                  return(
                    <div key={index}>
                      <NftRender Nft = {item}/>  
                    </div>
                  )
                })}
            </div>
            
            </div>
          </div>

              <Exchange blockchainDatos = {blockchain}/>
    </div> 
        )  
        
      
}

export default App;
 