import React from 'react';
import ContestPreview from './ContestPreview';


const ContestList = ({ contests, onContestClick }) => (
    <div className="ContestList">
        {Object.keys(contests).map(contestId =>
            <ContestPreview
                onClick={onContestClick}
                key={contestId} {...contests[contestId]} />
        )}
    </div>


);

ContestList.prototype = {
  contests: React.PropTypes.Object,
  onContestClick: React.PropTypes.func.isRequired
};

export default ContestList;