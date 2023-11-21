import React from 'react';

const SubjectList = ({ subjects, onSelectSubject }) => {
    return (
        <div className='text-center mt-4'>
            <div className='d-flex gap-4 flex-wrap justify-content-center'>
            {subjects.map((subject) => (
            <div class="card" style={{width:"18rem"}}>
                <img class="card-img-top" src={subject.link} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{subject.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" key={subject.id} onClick={() => onSelectSubject(subject.id)}>Learn {subject.name}</a>
                    </div>
            </div>))}
            </div>
            
        </div>
    );
};

export default SubjectList;
