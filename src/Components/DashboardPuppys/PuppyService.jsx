import React from 'react';
import FindPuppy1 from './FindPuppy1';

const PuppyService = () => {
    return (
        <div>
            <FindPuppy1></FindPuppy1>
            <div>
                <div className='max-w-[1320px] mx-auto flex justify-between p-5 mb-10'>
                    <div></div>
                    <a href="/overView1"><button className='btn bg-[#FF5C2C] text-white rounded-3xl'>Continue</button>                    </a>
                </div>
            </div>
        </div>

    );
};

export default PuppyService;