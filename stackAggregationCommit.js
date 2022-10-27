import { getNonce } from '@stacks/transactions';
import { StacksTestnet, StacksMainnet } from '@stacks/network';
import { StackingClient } from '@stacks/stacking';
import BN from 'bn.js';

const network = new StacksMainnet();
// the delegator initiates a different client
const delegatorAddress = '';

// delegator private key for transaction signing
const delegatorPrivateKey = "";

// the BTC address for reward payouts; either to the delegator or to the BTC address set by the account holder
// must start with "1" or "3". Native Segwit (starts with "bc1") is not supported
const delegatorBtcAddress = '';

// reward cycle id to commit to
const rewardCycle = 42;
// 35 36 37 38 39 40 41 42

const delegatorClient = new StackingClient(delegatorAddress, network);


let nonce = await getNonce(delegatorAddress, network);
console.log(nonce)

const delegetateCommitResponse = await delegatorClient.stackAggregationCommit({
  poxAddress: delegatorBtcAddress, // this must be the delegator bitcoin address
  rewardCycle,
  privateKey: delegatorPrivateKey,
});

console.log(delegetateCommitResponse)

// {
//   txid: '0xf6e9dbf6a26c1b73a14738606cb2232375d1b440246e6bbc14a45b3a66618481',
// }
