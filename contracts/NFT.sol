// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "./ERC721full.sol";

contract CstoryNFT is ERC721{

    //Contract Addres
    address contrato;
    //Owner
    address owner;
    //Guardar armas NFT
    weapon [] weapons;
    // Referencia por billetera
    mapping(address => mapping(uint => weapon)) public ownerNFT;
    // Referencia de ID por billetera
    mapping(uint => address) public idToAddress;
    //Contador NFT
    uint _id = 0;
    //Activador
    bool public active = false;
    //Cuerpo del NFT

    struct weapon{
        uint id;
        string name;
        string tpe;
        string class;
        string rarity;
    }

    //minting event

    event whoMinted(address, uint);

    constructor() ERC721("NFT", "CSTORYNFT")  payable{
        contrato = address(this);
        owner = msg.sender;

    }

   
    
    function mint (uint _rarity) public payable{
    
        //requerimientos
        require(active == true, "Sale is not activate");
        require(_rarity>0); 
        require(msg.value >= NFTPrice(_rarity));
        //Ririties
        string [3] memory rarities = ["Commond", "Epic", "Legendary"];
        //contador     
        _id ++;
        //guardar armas nft
        weapon memory newWeapon = weapon(_id , "ank", "sword", "warrior", rarities[_rarity-1]);
        weapons.push(newWeapon);
        //Referencia del NFT por billetera
        ownerNFT[msg.sender][_id] = newWeapon;
        idToAddress[_id] = msg.sender;
        //minteo
        _mint(msg.sender, _id);
        // quien minteo?
        emit whoMinted(msg.sender, _id);
    }

    // Precios de los NFT

    function NFTPrice(uint _rarity)internal returns(uint _cost){
        if(_rarity == 1){
            return 0.02 ether;
        }
        if(_rarity == 2){
            return 0.04 ether;
        }
        if(_rarity == 3){
            return 0.08 ether;
        }
    }

    //Ver todos los NFT

  function getAllNFT() public view returns(weapon[]memory){
      return weapons;
  }

  // Armas de una direccion en especifico

  function getOwnerArmasNFT(address _address) public view returns(weapon[]memory){
        weapon[] memory result = new weapon[](balanceOf(_address));
        uint256 counter = 0;
            for(uint i = 0; i < weapons.length; i++){
                if(idToAddress[i+1] == _address)
                result[counter] = weapons[i];
                counter ++;
            }
            return result;
    }

    // Activacion del minteo

    function activacion()public onlyOwner{
        active = !active;
    }


    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

     // RETIRAR DEL CONTRATO


   function sendEther(address payable _to, uint256 _amount) public payable onlyOwner{
       _to.transfer(_amount);
   }

    function balanceContract(address _wallet) public view returns(uint256){
        return _wallet.balance;
    }


    // burn token

    function quemaNFT(uint256 _tokenId) public onlyOwner{
        _burn(_tokenId);
    }


}