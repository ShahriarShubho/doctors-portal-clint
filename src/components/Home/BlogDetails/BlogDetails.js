import React from 'react';

const BlogDetails = ({blogs}) => {

    return (
        <div className="col-md-4">
         <div className="border p-4 shadow-sm">
        <h5 >{blogs.name}</h5>
                <p >{blogs.date}</p>
                <h6 className="text-left">{blogs.title}</h6>
                <p className="text-left">hello hio how ar yau Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, nostrum.</p>
            </div>
            
        </div>
    );
};

export default BlogDetails;