// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


// NFT 

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract CStoryNFT is ERC721, Ownable {


    address public contrato;

     constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {
        contrato = address(this);
    }

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    uint256 COUNTER;

    uint256  public cost = 0.03 ether ;

    address payable public buyer;

    // PLANTILLA NFT 

  
    struct TrajeNFT {
       uint256 id;
       string Name;
       string Type;
       string Class;
       uint256 rarity;
    }

     event newStoryN(address indexed owner, uint256 id);


    TrajeNFT [] public TrajesNFT;


    //random number function 

    function _createRandomNumber(uint256 _mod) internal view returns(uint256){

        uint256 randomNum = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
        return randomNum % _mod;

    }

   /* function updateFee(uint256 _fee) external  onlyOwner(){
        fee = _fee;
    } */

    //funcion de retiro del nft hacia la billetera

    function withdraw()external payable onlyOwner(){

        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);

    }


    function _createNFT(uint _id, string memory _name, uint _rarity ) internal {
        
        
        //Crear NFT y GUARDARLO UN ARRAY 
        
        TrajeNFT memory newTrajeNFT = TrajeNFT(_id ,_name,"Sword", "Warrior", _rarity);
        TrajesNFT.push(newTrajeNFT);
        

        // MINTEAR NFT

        _safeMint(msg.sender, COUNTER);
        emit newStoryN(msg.sender, COUNTER);
        COUNTER++;
    }
    
    function createRandomNFT(string memory _name, uint _rarity) public payable{
        
        uint contador;
    
         _tokenIdCounter.increment();
        contador = _tokenIdCounter.current();
    
        _createNFT(contador -1, _name, _rarity);
    } 

    //GETTER NFT

    function getTrajeNFT() public view returns(TrajeNFT[] memory){

        return TrajesNFT;

    }

    function getOwnerTrajeNFT(address _owner) public view returns (TrajeNFT[] memory){
        
        TrajeNFT[] memory result = new TrajeNFT[](balanceOf(_owner)); 
        uint256 counter1 = 0;
        for (uint256 i = 0 ; i < TrajesNFT.length; i ++){
            if(ownerOf(i) == _owner) {
                result[counter1] = TrajesNFT[i];
                counter1 ++;
            }   
        }
        return result ;

    }


    function getContract() public view returns (address){
        return contrato;
    }

    // ACTIONS 

   /*  function levelUpNFT (uint256 _StoryId) public {
        require(ownerOf(_StoryId) == msg.sender);
        StoryNFT storage storyNFT = StoryNFTs[_StoryId];
        storyNFT.level++;

    } */

}