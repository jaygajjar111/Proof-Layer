// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @notice Prototype representation of a unique real-world asset record.
/// @dev Minting must only happen after the legal/compliance model is approved.
contract ProofLayerAsset is ERC721, Ownable {
    uint256 private _nextTokenId = 1;
    mapping(uint256 => bytes32) public assetRecordHash;

    constructor(address initialOwner)
        ERC721("ProofLayer Asset", "PLASSET")
        Ownable(initialOwner)
    {}

    function mint(address to, bytes32 recordHash)
        external
        onlyOwner
        returns (uint256 tokenId)
    {
        tokenId = _nextTokenId++;
        assetRecordHash[tokenId] = recordHash;
        _safeMint(to, tokenId);
    }
}