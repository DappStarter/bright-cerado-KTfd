require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift random noise equip good kangaroo army gasp'; 
let testAccounts = [
"0x7f444757016c25acf36a6f8f6f8b984509ec215fea4857371ad59a980c2a77aa",
"0xa6603ab19f8026b4153c33969df96030a1b2463a7717eafc9a98b1e8dfa57979",
"0x4a22cdae1d7451fabe03ba998d6d748adf60142ea096128d9ef8635ee38abcf2",
"0x63e8ba164e577439ac06cac7780efce97985ef8a7da9b770f041edb88f80bab3",
"0x5c336155c2d70ad015c3d9fd1da6b8a00dce8e3d5eb73d9804b776a299d2a2b6",
"0x09185077170c1755b78431a05fbdb92fd6cb8474475b06f7e817086b7f09f272",
"0xbc478702bf91820146aa4a586851582497daf3cd091f10c046b750b923c35a39",
"0x5a20f140c6934158d02179bcddc1b9e05f1056d13af3532c407df05229794a6a",
"0x8107614f40ae0d087d7afbe25f187fe342467daa2839d61ff6782d73ca49dfe6",
"0xbb7b03340d2613d831fdcabc179706f4a57ef76fe3511753534b391946559c78"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


