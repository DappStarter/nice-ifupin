require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food nose deny script column coral light army gaze'; 
let testAccounts = [
"0x0c003907cf6498d2a6a36d40e214d07ac826f9e87cae9bc299663bee3b8c2055",
"0x1bfbf247db4a82d5857650991395757a49bd15833538fa8c15e0b0e7060febc6",
"0x98f7be9fcdd2c3017c2b06cb0565bd7cf7336f423ade203c1879b227e1c28816",
"0x1c249936819a9c221e4dc946b34dce1286fd2563bc1756391a1fa556ad30e502",
"0x8419b689525b0ae158dddc616e545949723426f178644155cb2b5e3f1cfdf6e7",
"0x1d67606f27dde84a239960440638bdea8149a3f7ddc2c62896e8058fa757d196",
"0x7bfa03e18c1ddd5068d16e3e1deffdb0ff3f8434557a299083c86c74ec81dbfd",
"0x76bb1f69e1c09a5cb3718fc2fa7c755bf49ff492d4dac65d99521f041e2eae36",
"0xf6bbbca7572ab5b983654ce1b8b65bb21ae1611a74d9c85bc32c66ce938d4bc3",
"0x8c2b4f1b9c568b8c7f9793befbbb9889260387a33b7b9e51a6170aa283255538"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
