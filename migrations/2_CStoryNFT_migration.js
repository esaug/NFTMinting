const CStoryNFT = artifacts.require("CstoryNFT");

module.exports = function (deployer) {
  deployer.deploy(CStoryNFT);
};

