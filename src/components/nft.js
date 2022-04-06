
import { data } from "autoprefixer";
import React from "react";

function NftRender ({Nft}){
    
    return(
        <div className='justify-center pt-2 bg-black'>
        {Nft.rarity == 'Commond' ? (
          <div>
            <p>IMAGEN COMMOND DEL NFT</p>
            <img/>
          </div>
        ): Nft.rarity == 'Epic'?(
          <div>
            <p>IMAGEN EPIC DEL NFT</p>
            <img/>
          </div>
        ): Nft.rarity == 'Legendary'?(
          <div>
            <p>IMAGEN LEGENDARY DEL NFT</p>
            <img/>
          </div>
        ):("N0thing")}    
        <div >
          <br/>
          <p className='bg-black'>Name: {Nft.name}</p>
          <p>Type: {Nft.tpe}</p>
          <p>Class: {Nft.class}</p>
          <p>Rarity: {Nft.rarity}</p>
          <br/>
        
        </div>
   
      </div>
    )
}

export default NftRender
