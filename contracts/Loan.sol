//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.7.0;
import "./SafeMath.sol";

contract Loan {
    using SafeMath for uint256;
    enum State {PENDING, ACTIVE, CLOSED}
    State public state = State.PENDING;
    // uint public amount;
    // uint public interest;
    // uint public end;
    // uint public duration;
    // address payable public borrower;
    // address payable public lender;
    struct Debt {
        uint256 id;
        address payable borrower;
        address payable lender;
        uint256 amount;
        uint256 interest;
        uint8 loanState;
    }
    event Request(uint256, address, uint256);
    mapping(uint256 => Debt) public debtInfo;
    // mapping(uint256 => Track[]) public trackInfo;
    uint256 debtId;
    uint256[] trackId;

    function addDebt(address payable _borrower, uint256 _amount) external {
        // uint256 _interest =
        debtInfo[debtId] = Debt(
            debtId,
            _borrower,
            address(0),
            _amount,
            2,
            uint8(state)
        );
        // debtHistory[_borrower].push(debtId);
        //Track storage track = trackInfo[debtId];
        // trackInfo[debtId].id = _borrower;
        trackId.push(debtId);
        emit Request(debtId, _borrower, _amount);
        debtId++;
    }

    function fund(address payable lender, uint256 _debtId) external payable {
        require(lender != address(0), "only lender can lend");
        require(lender != debtInfo[_debtId].borrower, "Not Authorised Lender.");
        require(msg.value == debtInfo[_debtId].amount, "Incorrect Amount");
        _transitionTo(State.ACTIVE);
        debtInfo[_debtId].lender = lender;
        debtInfo[_debtId].loanState = uint8(State.ACTIVE);
        debtInfo[_debtId].borrower.transfer(debtInfo[_debtId].amount);
    }

    function reimburse(uint256 _debtId) external payable {
        require(
            msg.sender == debtInfo[_debtId].borrower,
            "only borrower can reimburse"
        );
        require(
            msg.value == debtInfo[_debtId].amount + debtInfo[_debtId].interest,
            "borrower need to reimburse exactly amount + interest"
        );
        uint256 finalAmount = debtInfo[_debtId].amount.add(
            debtInfo[_debtId].interest
        );
        _transitionTo(State.CLOSED);
        debtInfo[_debtId].loanState = uint8(State.CLOSED);
        debtInfo[_debtId].lender.transfer(finalAmount);
    }

    function _transitionTo(State to) internal {
        require(to != State.PENDING, "cannot go back to pending");
        require(to != state, "cannot transition to same state");
        if (to == State.ACTIVE) {
            require(
                state == State.PENDING,
                "cannot only go to active from pending"
            );
            state = State.ACTIVE;
        }
        if (to == State.CLOSED) {
            require(
                state == State.ACTIVE,
                "cannot only go to closed from active"
            );

            state = State.CLOSED;
        }
    }

    function getIds() public view returns (uint256[] memory) {
        return trackId;
    }

    function debtInfoById(uint256 _debtId)
        public
        view
        returns (
            uint256,
            address,
            address,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            debtInfo[_debtId].id,
            debtInfo[_debtId].borrower,
            debtInfo[_debtId].lender,
            debtInfo[_debtId].amount,
            debtInfo[_debtId].interest,
            debtInfo[_debtId].loanState
        );
    }
}
