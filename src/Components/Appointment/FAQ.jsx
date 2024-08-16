import React from 'react';

const FAQ = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <h1 className='flex items-center justify-center text-3xl font-bold text-black py-8 text-center'>
            Top Questions When <br /> Choosing a Breed
            </h1>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-2xl font-bold black ">Are you an active person or more laid-back? </div>
                <div className="collapse-content">
                    <p>Kids, just like puppies, need a lot of attention, love, and energy. Be sure that the time commitment involved with a new puppy is aligned with your household’s other time commitments, and that your kids are old enough to understand which dog care tasks they can be involved in. It’s important that kids are taught how to safely and respectfully interact with puppies and dogs well before you bring your new pet home. Many dog breeds make excellent family pets who are up for anything, but some dogs are better suited to households where they can have a less hectic environment or more of their owner’s focus.</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl text-black font-bold">What should I consider when adding a puppy to a home with children?</div>
                <div className="collapse-content">
                    <p>Kids, just like puppies, need a lot of attention, love, and energy. Be sure that the time commitment involved with a new puppy is aligned with your household’s other time commitments, and that your kids are old enough to understand which dog care tasks they can be involved in. It’s important that kids are taught how to safely and respectfully interact with puppies and dogs well before you bring your new pet home. Many dog breeds make excellent family pets who are up for anything, but some dogs are better suited to households where they can have a less hectic environment or more of their owner’s focus.</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl  text-black font-bold">Should I get a puppy or an adult dog?</div>
                <div className="collapse-content">
                    <p>Kids, just like puppies, need a lot of attention, love, and energy. Be sure that the time commitment involved with a new puppy is aligned with your household’s other time commitments, and that your kids are old enough to understand which dog care tasks they can be involved in. It’s important that kids are taught how to safely and respectfully interact with puppies and dogs well before you bring your new pet home. Many dog breeds make excellent family pets who are up for anything, but some dogs are better suited to households where they can have a less hectic environment or more of their owner’s focus.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;