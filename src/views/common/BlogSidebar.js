import React,{ useState,useEffect}  from 'react';
import axios from 'axios';

function BlogSidebar() {
    
    const [recentBlogAlldata, setRecentBlogAlldata] = useState({ data:[]});
    const [recentBlogLoading,setRecentBlogLoading] = useState(true);

    const [categoryAlldata, setCategoryAlldata] = useState({ data:[]});
    const [categoryloading,setCategoryLoading] = useState(true);
    
    // TO GET ALL RECENT BLOG DATA
    useEffect(() => {
      const fetchRecentBlogData = async () => {
        const result = await axios(
          'http://localhost/softtechover/api/ApigetRecentPostAll',
        );
        setRecentBlogAlldata({data:result.data.data});
        setRecentBlogLoading(false);
          
      };
      fetchRecentBlogData();
    }, []);

    // TO GET CATEGORY WITH COUNT 
    useEffect(() => {
      const fetchCategoryData = async () => {
        const result = await axios(
          'http://localhost/softtechover/api/ApiGetAllCommonCategoryList',
        );
        setCategoryAlldata({data:result.data.data});
        setCategoryLoading(false);
          
      };
      fetchCategoryData();
    }, []);

    return (
        <div className="col-lg-4">
            <div className="sidebar">
            <h3 className="sidebar-title">Search</h3>
            <div className="sidebar-item search-form">
                <form action="">
                <input type="text" />
                <button type="submit"><i className="icofont-search"></i></button>
                </form>
            </div>
            <h3 className="sidebar-title">Categories</h3>
            <div className="sidebar-item categories">
                <ul>
                    {
                        categoryAlldata.data.map((item,index)=>(
                        <li key={index}>
                            <a href="#">{item.name} <span>({item.multiple_category_status_count})</span></a>
                        </li>
                    ))}
                </ul>
            </div>

            <h3 className="sidebar-title">Recent Posts</h3>
            <div className="sidebar-item recent-posts">
                {recentBlogAlldata.data.map((item,index)=>(

                    <div className="post-item clearfix" key={index}>
                    <h4><a href={`blog/${item.slug}`}>{item.name}</a></h4>
                    </div>
                )) }
                
            </div>
        </div>
    </div>
  );
}

export default BlogSidebar;
