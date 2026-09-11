// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @notice Development scaffold for a unique ORBIT real-world asset record.
/// @dev This is NOT the ORBIT Coin contract and must not be treated as an investment token.
contract ORBITAsset is ERC721, Ownable {
    uint256 private _nextTokenId = 1;
    mapping(uint256 => bytes32) public assetRecordHash;

    constructor(address initialOwner)
        ERC721("ORBIT Asset", "ORBASSET")
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
