//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract ServiceAgreement {
    string _dateofagreement;
    struct ServiceParties {
        string _freelancername;
        string _clientname;
    }

    struct Service {
        string _sname;
        string _scompletiondate;
        string _sfinaldeliverables;
        uint256 _sfinalpayment;
    }

    struct Terms {
        uint256 _frequency; //frequency of deliverable and payments
        string[] _sdeliverables;
        uint256[] _spayments;
    }

    ServiceParties public parties;
    Service public job;
    Terms public schedule;

    function defineParties(string memory freelancer, string memory client)
        public
    {
        parties._freelancername = freelancer;
        parties._clientname = client;
    }

    function defineJob(
        string memory sname,
        string memory scompletiondate,
        string memory sfinaldeliverables,
        uint256 sfinalpayment
    ) public {
        job._sname = sname;
        job._scompletiondate = scompletiondate;
        job._sfinaldeliverables = sfinaldeliverables;
        job._sfinalpayment = sfinalpayment;
    }

    function defineSchedule(
        uint256 frequency,
        string[] memory sdeliverables,
        uint256[] memory spayments
    ) public {
        schedule._frequency = frequency;
        schedule._sdeliverables = sdeliverables;
        schedule._spayments = spayments;
    }

    event Executed(string log, string date);

    function calculateDate(uint256 time) private returns (string memory) {
        /* factors to find date from epoch time*/
        uint256 yf = 31556926;
        uint256 mf = 2629743;
        uint256 df = 86400;

        uint256 ydiv = time / yf;
        uint256 ymod = time % yf;

        uint256 yy = ydiv + 1970;

        uint256 day = ymod / df;
        string memory m;
        uint256 d = 1;

        if (day >= 0 && day <= 30) {
            m = "Jan";
            d += day;
        } else if (day >= 31 && day <= 58) {
            m = "Feb";
            d = day - 30;
        } else if (day >= 59 && day <= 89) {
            m = "Mar";
            d = day - 58;
        } else if (day >= 90 && day <= 120) {
            m = "Apr";
            d = day - 89;
        }
        /*
        concate yr m dd to find today's date
        string memory yr=string(yy);
        string memory dd=string(d);

        string memory date = yr+m+dd; 
        //new string(yr.length + m.length + dd.length);
       // date=yr+m+dd;
   */
        return "2022 Apr 01";
    }

    function executeAgreement() public {
        _dateofagreement = calculateDate(block.timestamp);

        /*Write to transaction to block */

        // get block details

        emit Executed(" Agreement Executed on ", _dateofagreement);
    }
}
