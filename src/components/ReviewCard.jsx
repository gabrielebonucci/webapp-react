import React from 'react'

const ReviewCard = ({ reviewProp }) => {

  const { author, text, vote } = reviewProp;

  return (
    <div className="card mb-3 border-0 shadow-sm">
      <div className="card-body">
        <p className="card-text">{text}</p>
        <footer className="blockquote-footer">
          {author} - Voto: <cite title="Voto">{vote}/5</cite>
        </footer>
      </div>
    </div>
  )
}

export default ReviewCard