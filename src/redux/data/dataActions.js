import store from "../store"

const fetchDataPeticion = () => {
  return {
    type: "CHECK_DATA_PETICION",
  };
};

const fetchDataExitoso = (payload) => {
  return {
    type: "CHECK_DATA_EXITOSO",
    payload: payload,
  };
};

const fetchDataFallido = (payload) => {
  return {
    type: "CHECK_DATA_FALLIDO",
    payload: payload,
  };
};

// FETCH DATA DE LA BLOCKCHAIN

export const fetchData = (account) => {
  
  return async(dispatch)=>{


    dispatch(fetchDataPeticion());

      try {

        
        store.getState().blockchain.CStoryNftContract.options.address = '0xc44D7dE1bdEBaa1519265525a902dbB08a471300'

        let allStoryNfts = await store
        .getState()
        .blockchain.CStoryNftContract.methods.getTrajeNFT()
        .call();

        let allOwnerStoryNfts = await store
        .getState()
        .blockchain.CStoryNftContract.methods.getOwnerTrajeNFT(account)
        .call();

        
        

       dispatch(
        fetchDataExitoso({
          allStoryNfts,
          allOwnerStoryNfts,
          
        })
       ) 

        console.log(allStoryNfts)

        console.log(allOwnerStoryNfts)


      } catch (error) {

        dispatch(fetchDataFallido("Could not load data from contract."));

      }


  }
      
      
    }

