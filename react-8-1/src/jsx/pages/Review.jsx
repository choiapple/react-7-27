import React, { useRef } from 'react';

function Review() {
    const titleRef = useRef('')
    const reviewRef = useRef('')

    const handleSubmit = (e) =>{
        e.preventDefault();

    }
    const handleChange = (e) => {
        console.log(titleRef.current.value)
    }
    const handleReview = (e) => {
        console.log(reviewRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="text" 
                    placeholder='제목을 입력해주세요.'
                    name ='title'
                    ref = {titleRef}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <textarea 
                        rows ='20'
                        id='reviewText'
                        placeholder='내용을 작성하세요.'
                        ref = {reviewRef}
                        onChange={handleReview}
                    />
                </div>
                <button type="submit">write</button>
            </form>
        </div>
    );
}

export default Review;