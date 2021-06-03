/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { StakedLiquidityProvider } from '../StakedLiquidityProvider'

export class StakedLiquidityProvider__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _tokenBridge: string,
    _confirmRoots: string,
    _trustedStaker: string,
    overrides?: Overrides
  ): Promise<StakedLiquidityProvider> {
    return super.deploy(
      _tokenBridge,
      _confirmRoots,
      _trustedStaker,
      overrides || {}
    ) as Promise<StakedLiquidityProvider>
  }
  getDeployTransaction(
    _tokenBridge: string,
    _confirmRoots: string,
    _trustedStaker: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenBridge,
      _confirmRoots,
      _trustedStaker,
      overrides || {}
    )
  }
  attach(address: string): StakedLiquidityProvider {
    return super.attach(address) as StakedLiquidityProvider
  }
  connect(signer: Signer): StakedLiquidityProvider__factory {
    return super.connect(signer) as StakedLiquidityProvider__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakedLiquidityProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakedLiquidityProvider
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenBridge',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_confirmRoots',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_trustedStaker',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'fee_div',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'liquidityProof',
        type: 'bytes',
      },
    ],
    name: 'requestLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051610c91380380610c918339818101604052606081101561003357600080fd5b508051602082015160409092015190919060006100576001600160e01b0361016e16565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b038086166001600160a01b03199283161790925560028054858416921691909117908190556040805163cb23bcb560e01b81529051919092169163cb23bcb5916004808301926020929190829003018186803b15801561010b57600080fd5b505afa15801561011f573d6000803e3d6000fd5b505050506040513d602081101561013557600080fd5b5051600380546001600160a01b039283166001600160a01b03199182161790915560048054939092169216919091179055506101729050565b3390565b610b10806101816000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806327f1c8d614610067578063715018a6146100815780638da5cb5b1461008b578063effc168b146100af578063f2fde38b14610142578063ffb409e914610168575b600080fd5b61006f61019e565b60408051918252519081900360200190f35b6100896101a3565b005b61009361024f565b604080516001600160a01b039092168252519081900360200190f35b610089600480360360a08110156100c557600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561010457600080fd5b82018360208201111561011657600080fd5b803590602001918460018302840111600160201b8311171561013757600080fd5b50909250905061025e565b6100896004803603602081101561015857600080fd5b50356001600160a01b0316610678565b6100896004803603606081101561017e57600080fd5b506001600160a01b0381358116916020810135909116906040013561077a565b606481565b6101ab6108b8565b6001600160a01b03166101bc61024f565b6001600160a01b031614610205576040805162461bcd60e51b81526020600482018190526024820152600080516020610abb833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6001546001600160a01b031633146102aa576040805162461bcd60e51b815260206004820152600a6024820152694e4f545f42524944474560b01b604482015290519081900360640190fd5b600060606000806000868660a08110156102c357600080fd5b81359190810190604081016020820135600160201b8111156102e457600080fd5b8201836020820111156102f657600080fd5b803590602001918460208302840111600160201b8311171561031757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920182905250979c50929a50508235985050506020810135955060400135935061037291508a90508d8d8d87876108bc565b905060006103a786868460405160200180828152602001915050604051602081830303815290604052805190602001206109c6565b600254604080516397a06bf760e01b815260048101849052602481018b905290519293506001600160a01b03909116916397a06bf791604480820192602092909190829003018186803b1580156103fd57600080fd5b505afa158015610411573d6000803e3d6000fd5b505050506040513d602081101561042757600080fd5b5051610469576040805162461bcd60e51b815260206004820152600c60248201526b1253959053125117d493d3d560a21b604482015290519081900360640190fd5b60035460408051634f0f4aa960e01b8152600481018a905290516001600160a01b0390921691634f0f4aa991602480820192602092909190829003018186803b1580156104b557600080fd5b505afa1580156104c9573d6000803e3d6000fd5b505050506040513d60208110156104df57600080fd5b505160048054604080516348b4573960e11b81526001600160a01b039283169381019390935251921691639168ae7291602480820192602092909190829003018186803b15801561052f57600080fd5b505afa158015610543573d6000803e3d6000fd5b505050506040513d602081101561055957600080fd5b505161059a576040805162461bcd60e51b815260206004820152600b60248201526a1393d517d5149554d5115160aa1b604482015290519081900360640190fd5b6040805163a9059cbb60e01b81526001600160a01b038f8116600483015260648e04808f0360248401529251908f169163a9059cbb9160448083019260209291908290030181600087803b1580156105f157600080fd5b505af1158015610605573d6000803e3d6000fd5b505050506040513d602081101561061b57600080fd5b5051610668576040805162461bcd60e51b8152602060048201526017602482015276494e53554646494349454e545f4c49515549444954495960481b604482015290519081900360640190fd5b5050505050505050505050505050565b6106806108b8565b6001600160a01b031661069161024f565b6001600160a01b0316146106da576040805162461bcd60e51b81526020600482018190526024820152600080516020610abb833981519152604482015290519081900360640190fd5b6001600160a01b03811661071f5760405162461bcd60e51b8152600401808060200182810382526026815260200180610a956026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6107826108b8565b6001600160a01b031661079361024f565b6001600160a01b0316146107dc576040805162461bcd60e51b81526020600482018190526024820152600080516020610abb833981519152604482015290519081900360640190fd5b816001600160a01b031663a9059cbb84836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561083c57600080fd5b505af1158015610850573d6000803e3d6000fd5b505050506040513d602081101561086657600080fd5b50516108b3576040805162461bcd60e51b8152602060048201526017602482015276494e53554646494349454e545f4c49515549444954495960481b604482015290519081900360640190fd5b505050565b3390565b60408051602481018890526001600160a01b0380881660448301528616606482015260848082018690528251808303909101815260a49091018252602081810180516001600160e01b031663e0a345fd60e01b1781528351600092810183815233958201869052606082018690526080820188905260a0820187905260c08201849052845193958694909384938a938a9388938a9360e001918083835b602083106109785780518252601f199092019160209182019101610959565b6001836020036101000a038019825116818451168082178552505050505050905001975050505050505050604051602081830303815290604052805190602001209150509695505050505050565b82516000906101008111156109da57600080fd5b8260005b82811015610a8a5760028606610a37578681815181106109fa57fe5b6020026020010151826040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209150610a7c565b81878281518110610a4457fe5b602002602001015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012091505b6002860495506001016109de565b509594505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a2646970667358221220a6ec527b42c1c42aba3deea20207188d7e207d0b1fde691eab3aab0cf81eaf4e64736f6c634300060b0033'
