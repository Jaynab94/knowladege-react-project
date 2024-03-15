import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmark,handleMarksAsRead  }) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl font-semibold">Blog {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    handleMarksAsRead ={handleMarksAsRead }
                    handleAddToBookmark={handleAddToBookmark}
                    blog={blog}>

                </Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarksAsRead:PropTypes.func.isRequired,
}

export default Blogs;