/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFT_COLLECTION= [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let mintNFT = (tockenID, creater, owner, color, rarity, size)=> {
    const METADATA= {
    "tockenID": tockenID,
    "creater": creater, 
    "owner": owner, 
    "color": color, 
    "rarity":rarity, 
    "size": size
    }

    NFT_COLLECTION.push(METADATA);

    console.log(`NFT WITH TOCKEN ID= ${tockenID}, MINTED SUCCESSFULLY...`);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
let listNFTs = () =>{

    NFT_COLLECTION.forEach((value)=>{
        console.log(`
Token ID:  ${value.tockenID}
Creator:   ${value.creater}
Owner:     ${value.owner}
Color:     ${value.color}
Rarity:    ${value.rarity}
Size:      ${value.size}
`);
    })
}

// print the total number of NFTs we have minted to the console
let getTotalSupply = () => {
    console.log(`TOTAL NUMBER OF NFTS CREATED ARE: ${NFT_COLLECTION.length}`);
}

// call your functions below this line
mintNFT(1,"Huga","Mohit","Red","Common","Medium");
mintNFT(2,"King","Obama","Brown","Mythical","Large");
mintNFT(3,"Queen","Modi","Blue","Common","Medium");
mintNFT(4,"Legion","Mohit","Green","Rare","Large");
mintNFT(5,"Dean","Trump","Pink","Legendry","Small");
listNFTs();
getTotalSupply();
