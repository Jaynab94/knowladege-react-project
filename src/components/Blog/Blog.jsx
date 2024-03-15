import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarksAsRead }) => {
    const { id, title, cover, reading_time, author_img, author, posted_date, hashtag } = blog;
    return (
        <div className=' mb-16'>
            <img className=' w-[850px]  mb-8 rounded-lg' src={cover} alt={`cober picture of the title ${title}`} />

            <div className='flex justify-between items-center'>
                <div className=' flex gap-6'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className=' text-2xl  font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center text-[#11111199]'>
                    <span className=' mr-2'>{reading_time} read min</span>
                    <button onClick={() => handleAddToBookmark(blog)} className=' text-2xl'><FaBookmark></FaBookmark> </button>
                </div>
            </div>
            <h1 className='text-4xl font-bold mb-4 mt-4'>{title}</h1>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}> <a href="">{hash}</a></span>)
                }
            </p>

            <button onClick={() => handleMarksAsRead(reading_time, id)} className='text-blue-400 mt-4 unde'>Mark as read</button>

        </div>
    );
};
Blog.propTypes = {
    handleAddToBookmark: PropTypes.func,
    blog: PropTypes.object.isRequired,
    handleMarksAsRead: PropTypes.func.isRequired,
}
export default Blog;