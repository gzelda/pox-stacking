import { getNonce } from '@stacks/transactions';
import { StacksTestnet, StacksMainnet } from '@stacks/network';
import { StackingClient } from '@stacks/stacking';
import BN from 'bn.js';


const stackerAddress = ""
const network = new StacksMainnet();
// block height at which to stack
const burnBlockHeight = 739300;
// current Height - 150

// the delegator initiates a different client
const delegatorAddress = '';

// number cycles to stack
const cycles = 8;
//
const amountMicroStx = new BN(17000000000000);
// delegator private key for transaction signing
const delegatorPrivateKey = "";

// the BTC address for reward payouts; either to the delegator or to the BTC address set by the account holder
// must start with "1" or "3". Native Segwit (starts with "bc1") is not supported
const delegatorBtcAddress = '';

// if you call this method multiple times in the same block, you need to increase the nonce manually
let nonce = await getNonce(delegatorAddress, network);
console.log(nonce)
//nonce = nonce.add(new BN(1));
/*
let nonce = new BN(1);
console.log(nonce, typeof(nonce))
nonce.add(new BN(2))
console.log(nonce, typeof(nonce))
*/

const delegatorClient = new StackingClient(delegatorAddress, network);

const delegetateStackResponses = await delegatorClient.delegateStackStx({
  stacker: stackerAddress,
  amountMicroStx,
  poxAddress: delegatorBtcAddress,
  burnBlockHeight,
  cycles,
  privateKey: delegatorPrivateKey,
});

console.log(delegetateStackResponses)

//   {
//     txid: '0xf6e9dbf6a26c1b73a14738606cb2232375d1b440246e6bbc14a45b3a66618481',
//   }