import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {AutomationRegistryInterface, State, OnchainConfig} from "@chainlink/contracts/src/v0.8/interfaces/AutomationRegistryInterface2_0.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";

interface KeeperRegistrarInterface {
    function register(
        string memory name,
        bytes calldata encryptedEmail,
        address upkeepContract,
        uint32 gasLimit,
        address adminAddress,
        bytes calldata checkData,
        bytes calldata offchainConfig,
        uint96 amount,
        address sender
    ) external;
}

contract InsuranceDeployer {
    LinkTokenInterface public immutable i_link;
    address public immutable registrar;
    AutomationRegistryInterface public immutable i_registry;
    bytes4 registerSig = KeeperRegistrarInterface.register.selector;
    address[] public InsurancesRegistered;
    uint public totalInsuranceBonds;
    address public owner;

    constructor(
        LinkTokenInterface _link,
        address _registrar,
        AutomationRegistryInterface _registry
    ) {
        i_link = _link;
        registrar = _registrar;
        i_registry = _registry;
        owner = msg.sender;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function createInsurance(
        int _thresh,
        ISuperToken _token,
        address assetInsured,
        uint _insuredAmt,
        address _tokenAddress,
        int96 _flowRate
    ) public {
        address insurance = address(
            new InsuranceBond(
                _thresh,
                _token,
                assetInsured,
                _insuredAmt,
                _tokenAddress,
                _flowRate
            )
        );
        InsurancesRegistered.push(insurance);
        totalInsuranceBonds++;
        uint96 amount = 5000000000000000000;
        bytes memory dummy = abi.encodePacked("0x");
        string memory name = "Insurance";
        registerAndPredictID(
            string(abi.encodePacked(name, totalInsuranceBonds)),
            dummy,
            insurance,
            5000000,
            owner,
            dummy,
            amount,
            0
        );
    }

    function callRegisterAndPredictID(
        int _thresh,
        ISuperToken _token,
        address assetInsured,
        uint _insuredAmt,
        address _tokenAddress,
        int96 _flowRate
    ) public {
        address insurance = address(
            new InsuranceBond(
                _thresh,
                _token,
                assetInsured,
                _insuredAmt,
                _tokenAddress,
                _flowRate
            )
        );
        InsurancesRegistered.push(insurance);
        totalInsuranceBonds++;
        string memory name = "John Doe";
        bytes memory encryptedEmail = "0x1234567890abcdef";

        uint32 gasLimit = 1000000;
        address adminAddress = address(
            0xB2aA4Fd98fdd12E0143E4A1F89ea35b966eaCebD
        );
        bytes memory checkData = "0x";
        uint96 amount = 5000000000000000000;
        uint8 source = 1;

        // Set the gas limit to a higher value
        uint256 gas = gasleft();
        gasLimit = uint32(gas - 10000);

        // Call the registerAndPredictID function
        registerAndPredictID(
            name,
            encryptedEmail,
            insurance,
            gasLimit,
            adminAddress,
            checkData,
            amount,
            source
        );
    }

    function getCreatedInsurances() public view returns (address[] memory) {
        return InsurancesRegistered;
    }

    function registerAndPredictID(
        string memory name,
        bytes memory encryptedEmail,
        address upkeepContract,
        uint32 gasLimit,
        address adminAddress,
        bytes memory checkData,
        uint96 amount,
        uint8 source
    ) public {
        (State memory state, , , , ) = i_registry.getState();
        uint256 oldNonce = state.nonce;
        bytes memory payload = abi.encode(
            name,
            encryptedEmail,
            upkeepContract,
            gasLimit,
            adminAddress,
            checkData,
            amount,
            source,
            address(this)
        );

        i_link.transferAndCall(
            registrar,
            amount,
            bytes.concat(registerSig, payload)
        );
        (state, , , , ) = i_registry.getState();
        uint256 newNonce = state.nonce;
        if (newNonce == oldNonce + 1) {
            uint256 upkeepID = uint256(
                keccak256(
                    abi.encodePacked(
                        blockhash(block.number - 1),
                        address(i_registry),
                        uint32(oldNonce)
                    )
                )
            );
            // DEV - Use the upkeepID however you see fit
        } else {
            revert("auto-approve disabled");
        }
    }
}
