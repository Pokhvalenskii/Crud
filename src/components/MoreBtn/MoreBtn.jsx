import './MoreBtn.css';

function MoreBtn(props) {

  function handleMorePosts() {
    props.morePosts();
  }

  return (
    <button className='moreBtn' onClick={handleMorePosts}>More...</button>
  )
}

export default MoreBtn;