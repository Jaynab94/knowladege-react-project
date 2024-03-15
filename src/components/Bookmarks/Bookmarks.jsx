import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className=" bg-slate-100  md:w-1/3">

            <div>
                <h3 className='text-2xl font-bold text-center text-[#6047EC]'>Spent time on read:{ readingTime }</h3>
            </div>


            <h2 className='text-2xl font-bold text-center'>Bookmarked Blogs:{bookmarks.length}</h2>

            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,

}

export default Bookmarks;