import { BytesLike, Contract, providers, Signer, utils, Wallet } from 'ethers';
import { readFileSync } from 'fs-extra';
import { LendingMarketPlace__factory } from '../typechain-types';
import { join } from 'path';
import * as hre from 'hardhat';
import { ethers } from 'hardhat';
import { Framework, SFError } from '@superfluid-finance/sdk-core';
import { initEnv, waitForTx } from '../helpers/utils';
import { OfferConfigStruct } from '../typechain-types/Events';
import { parseEther } from 'ethers/lib/utils';

const defaultNetwork = 'mumabai';
let HOST = '0xEB796bdb90fFA0f28255275e16936D25d3418603';
let CFA = '0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873';

const gelato_abi =  [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "executor",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "taskReceiptId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "name": "LogCanExecFailed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "executor",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "taskReceiptId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "executorRefund",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "reason",
        "type": "string"
      }
    ],
    "name": "LogExecReverted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "executor",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "taskReceiptId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "executorSuccessFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sysAdminSuccessFee",
        "type": "uint256"
      }
    ],
    "name": "LogExecSuccess",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "taskReceiptId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "cancellor",
        "type": "address"
      }
    ],
    "name": "LogTaskCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "taskReceiptId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "taskReceiptHash",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "userProxy",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "contract IGelatoProviderModule",
                "name": "module",
                "type": "address"
              }
            ],
            "internalType": "struct Provider",
            "name": "provider",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "contract IGelatoCondition",
                    "name": "inst",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct Condition[]",
                "name": "conditions",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  },
                  {
                    "internalType": "enum Operation",
                    "name": "operation",
                    "type": "uint8"
                  },
                  {
                    "internalType": "enum DataFlow",
                    "name": "dataFlow",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "termsOkCheck",
                    "type": "bool"
                  }
                ],
                "internalType": "struct Action[]",
                "name": "actions",
                "type": "tuple[]"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasLimit",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasPriceCeil",
                "type": "uint256"
              }
            ],
            "internalType": "struct Task[]",
            "name": "tasks",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "expiryDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "cycleId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "submissionsLeft",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct TaskReceipt",
        "name": "taskReceipt",
        "type": "tuple"
      }
    ],
    "name": "LogTaskSubmitted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "userProxy",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "contract IGelatoProviderModule",
                "name": "module",
                "type": "address"
              }
            ],
            "internalType": "struct Provider",
            "name": "provider",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "contract IGelatoCondition",
                    "name": "inst",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct Condition[]",
                "name": "conditions",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  },
                  {
                    "internalType": "enum Operation",
                    "name": "operation",
                    "type": "uint8"
                  },
                  {
                    "internalType": "enum DataFlow",
                    "name": "dataFlow",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "termsOkCheck",
                    "type": "bool"
                  }
                ],
                "internalType": "struct Action[]",
                "name": "actions",
                "type": "tuple[]"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasLimit",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasPriceCeil",
                "type": "uint256"
              }
            ],
            "internalType": "struct Task[]",
            "name": "tasks",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "expiryDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "cycleId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "submissionsLeft",
            "type": "uint256"
          }
        ],
        "internalType": "struct TaskReceipt",
        "name": "_TR",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_gasLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_execTxGasPrice",
        "type": "uint256"
      }
    ],
    "name": "canExec",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userProxy",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "contract IGelatoProviderModule",
            "name": "module",
            "type": "address"
          }
        ],
        "internalType": "struct Provider",
        "name": "_provider",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "contract IGelatoCondition",
                "name": "inst",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct Condition[]",
            "name": "conditions",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "internalType": "enum Operation",
                "name": "operation",
                "type": "uint8"
              },
              {
                "internalType": "enum DataFlow",
                "name": "dataFlow",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "termsOkCheck",
                "type": "bool"
              }
            ],
            "internalType": "struct Action[]",
            "name": "actions",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "selfProviderGasLimit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "selfProviderGasPriceCeil",
            "type": "uint256"
          }
        ],
        "internalType": "struct Task",
        "name": "_task",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_expiryDate",
        "type": "uint256"
      }
    ],
    "name": "canSubmitTask",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "userProxy",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "contract IGelatoProviderModule",
                "name": "module",
                "type": "address"
              }
            ],
            "internalType": "struct Provider",
            "name": "provider",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "contract IGelatoCondition",
                    "name": "inst",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct Condition[]",
                "name": "conditions",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  },
                  {
                    "internalType": "enum Operation",
                    "name": "operation",
                    "type": "uint8"
                  },
                  {
                    "internalType": "enum DataFlow",
                    "name": "dataFlow",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "termsOkCheck",
                    "type": "bool"
                  }
                ],
                "internalType": "struct Action[]",
                "name": "actions",
                "type": "tuple[]"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasLimit",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasPriceCeil",
                "type": "uint256"
              }
            ],
            "internalType": "struct Task[]",
            "name": "tasks",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "expiryDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "cycleId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "submissionsLeft",
            "type": "uint256"
          }
        ],
        "internalType": "struct TaskReceipt",
        "name": "_TR",
        "type": "tuple"
      }
    ],
    "name": "cancelTask",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentTaskReceiptId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "userProxy",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "contract IGelatoProviderModule",
                "name": "module",
                "type": "address"
              }
            ],
            "internalType": "struct Provider",
            "name": "provider",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "contract IGelatoCondition",
                    "name": "inst",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct Condition[]",
                "name": "conditions",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  },
                  {
                    "internalType": "enum Operation",
                    "name": "operation",
                    "type": "uint8"
                  },
                  {
                    "internalType": "enum DataFlow",
                    "name": "dataFlow",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "termsOkCheck",
                    "type": "bool"
                  }
                ],
                "internalType": "struct Action[]",
                "name": "actions",
                "type": "tuple[]"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasLimit",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasPriceCeil",
                "type": "uint256"
              }
            ],
            "internalType": "struct Task[]",
            "name": "tasks",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "expiryDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "cycleId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "submissionsLeft",
            "type": "uint256"
          }
        ],
        "internalType": "struct TaskReceipt",
        "name": "_TR",
        "type": "tuple"
      }
    ],
    "name": "exec",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "userProxy",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "contract IGelatoProviderModule",
                "name": "module",
                "type": "address"
              }
            ],
            "internalType": "struct Provider",
            "name": "provider",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "contract IGelatoCondition",
                    "name": "inst",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct Condition[]",
                "name": "conditions",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  },
                  {
                    "internalType": "enum Operation",
                    "name": "operation",
                    "type": "uint8"
                  },
                  {
                    "internalType": "enum DataFlow",
                    "name": "dataFlow",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "termsOkCheck",
                    "type": "bool"
                  }
                ],
                "internalType": "struct Action[]",
                "name": "actions",
                "type": "tuple[]"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasLimit",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasPriceCeil",
                "type": "uint256"
              }
            ],
            "internalType": "struct Task[]",
            "name": "tasks",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "expiryDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "cycleId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "submissionsLeft",
            "type": "uint256"
          }
        ],
        "internalType": "struct TaskReceipt",
        "name": "_TR",
        "type": "tuple"
      }
    ],
    "name": "hashTaskReceipt",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "userProxy",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "contract IGelatoProviderModule",
                "name": "module",
                "type": "address"
              }
            ],
            "internalType": "struct Provider",
            "name": "provider",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "contract IGelatoCondition",
                    "name": "inst",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct Condition[]",
                "name": "conditions",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  },
                  {
                    "internalType": "enum Operation",
                    "name": "operation",
                    "type": "uint8"
                  },
                  {
                    "internalType": "enum DataFlow",
                    "name": "dataFlow",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "termsOkCheck",
                    "type": "bool"
                  }
                ],
                "internalType": "struct Action[]",
                "name": "actions",
                "type": "tuple[]"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasLimit",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "selfProviderGasPriceCeil",
                "type": "uint256"
              }
            ],
            "internalType": "struct Task[]",
            "name": "tasks",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "expiryDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "cycleId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "submissionsLeft",
            "type": "uint256"
          }
        ],
        "internalType": "struct TaskReceipt[]",
        "name": "_taskReceipts",
        "type": "tuple[]"
      }
    ],
    "name": "multiCancelTasks",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "contract IGelatoProviderModule",
            "name": "module",
            "type": "address"
          }
        ],
        "internalType": "struct Provider",
        "name": "_provider",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "contract IGelatoCondition",
                "name": "inst",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct Condition[]",
            "name": "conditions",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "internalType": "enum Operation",
                "name": "operation",
                "type": "uint8"
              },
              {
                "internalType": "enum DataFlow",
                "name": "dataFlow",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "termsOkCheck",
                "type": "bool"
              }
            ],
            "internalType": "struct Action[]",
            "name": "actions",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "selfProviderGasLimit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "selfProviderGasPriceCeil",
            "type": "uint256"
          }
        ],
        "internalType": "struct Task",
        "name": "_task",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_expiryDate",
        "type": "uint256"
      }
    ],
    "name": "submitTask",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "contract IGelatoProviderModule",
            "name": "module",
            "type": "address"
          }
        ],
        "internalType": "struct Provider",
        "name": "_provider",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "contract IGelatoCondition",
                "name": "inst",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct Condition[]",
            "name": "conditions",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "internalType": "enum Operation",
                "name": "operation",
                "type": "uint8"
              },
              {
                "internalType": "enum DataFlow",
                "name": "dataFlow",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "termsOkCheck",
                "type": "bool"
              }
            ],
            "internalType": "struct Action[]",
            "name": "actions",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "selfProviderGasLimit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "selfProviderGasPriceCeil",
            "type": "uint256"
          }
        ],
        "internalType": "struct Task[]",
        "name": "_tasks",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256",
        "name": "_expiryDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_sumOfRequestedTaskSubmits",
        "type": "uint256"
      }
    ],
    "name": "submitTaskChain",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "contract IGelatoProviderModule",
            "name": "module",
            "type": "address"
          }
        ],
        "internalType": "struct Provider",
        "name": "_provider",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "contract IGelatoCondition",
                "name": "inst",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct Condition[]",
            "name": "conditions",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "internalType": "enum Operation",
                "name": "operation",
                "type": "uint8"
              },
              {
                "internalType": "enum DataFlow",
                "name": "dataFlow",
                "type": "uint8"
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "termsOkCheck",
                "type": "bool"
              }
            ],
            "internalType": "struct Action[]",
            "name": "actions",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "selfProviderGasLimit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "selfProviderGasPriceCeil",
            "type": "uint256"
          }
        ],
        "internalType": "struct Task[]",
        "name": "_tasks",
        "type": "tuple[]"
      },
      {
        "internalType": "uint256",
        "name": "_expiryDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_cycles",
        "type": "uint256"
      }
    ],
    "name": "submitTaskCycle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_taskReceiptId",
        "type": "uint256"
      }
    ],
    "name": "taskReceiptHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

let TOKEN1 = '0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f';
let TOKEN2 = '0x42bb40bF79730451B11f6De1CbA222F17b87Afd7';
let GELATOCORE = '0x25aD59adbe00C2d80c86d01e2E05e1294DA84823';
const clone = async () => {
  // ADDRESS TO MINT TO:


  const [deployer, user1] = await initEnv(hre);

  const provider = hre.ethers.provider;


 let  lendMarketPlaceContract = await  LendingMarketPlace__factory.connect("0x325F148E904fE7BB4Ae50bc6179B8E58b212eDf9",deployer);

 const gelatoCore = await new Contract(GELATOCORE,gelato_abi,deployer);

 const assignedExecutor = await gelatoCore.executorByProvider(
  lendMarketPlaceContract.address// As the User is being his own provider, we will use the userProxy's address as the provider address
);


  //console.log(gelatoCore)
  //await lendMarketPlaceContract.testPrint()




  
};

clone()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
