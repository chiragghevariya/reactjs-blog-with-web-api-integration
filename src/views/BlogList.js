import React,{ useState,useEffect}  from 'react';
import axios from 'axios';
import "../index.css";


function BlogList() {
    
    const [blogAlldata, setBlogAlldata] = useState({ data:[]});
    const [loading,setLoading] = useState(true);

    const [categoryAlldata, setCategoryAlldata] = useState({ data:[]});
    const [categoryloading,setCategoryLoading] = useState(true);
    
    useEffect(() => {
      const fetchCategoryData = async () => {
        const result = await axios(
          'http://localhost/softtechover/api/ApiGetAllCommonCategoryList',
        );
        console.log('category',result.data.data);
        setCategoryAlldata({data:result.data.data});
        setCategoryLoading(false);
          
      };
      fetchCategoryData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'http://localhost/softtechover/api/ApiGetHomePageLatestPost',
          );
          console.log('blog',result.data.data);
          setBlogAlldata({data:result.data.data.data});
          setLoading(false);
            
        };
        fetchData();
      }, []);
    
      function createMarkup(data) {
        return {__html: data.substring(0,150)+"...."};
      }

    return (
    <main id="main">

    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li><a href="/">Home</a></li>
          <li>Blog</li>
        </ol>
        <h2>Blog</h2>
      </div>
    </section>
    <section id="blog" className="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 entries">
              <div className="row">
              { loading == false ? 
                
                blogAlldata.data.map( (item,index) => (
                    
                    <div className="col-md-6 d-flex align-items-stretch" key={index}>
                    <article className="entry">
    
                      <div className="entry-img">
                        <img src={item.image} alt="" className="img-fluid" />
                      </div>
    
                      <h2 className="entry-title">
                          <a href={`/blog/${item.slug}`}>{item.name}</a>
                      </h2>
    
                      <div className="entry-meta">
                        <ul>
                          <li className="d-flex align-items-center"><i className="icofont-user"></i> <a href="/blog/`{item.url}`">{item.created_by.name}</a></li>
                          <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href={`/blog/${item.slug}`}>{item.createdDate}</a></li>
                        </ul>
                      </div>
    
                      <div className="entry-content">
                        <div dangerouslySetInnerHTML={createMarkup(item.short_description)} /> 
                      
                        <div className="read-more">
                          <a href={`/blog/${item.slug}`}>Read More</a>
                        </div>
                      </div>
    
                    </article>
                  </div>
                  )) : 'loading...'
                }
            </div>
            <div className="blog-pagination">
              <ul className="justify-content-center">
                <li className="disabled"><i className="icofont-rounded-left"></i></li>
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="icofont-rounded-right"></i></a></li>
              </ul>
            </div>
          </div>

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
                <div className="post-item clearfix">
                  <img src="assets/img/blog-recent-1.jpg" alt="" />
                  <h4><a href="/">Nihil blanditiis at in nihil autem</a></h4>
                  Jan 1, 2020
                </div>
              </div>

              <h3 className="sidebar-title">Tags</h3>
              <div className="sidebar-item tags">
                <ul>
                  <li><a href="#">App</a></li>
                  <li><a href="#">IT</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Office</a></li>
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">Smart</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

  </main> 
  );
}

export default BlogList;
