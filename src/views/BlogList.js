import React,{ useState,useEffect}  from 'react';
import axios from 'axios';
import "../index.css";
import BlogSidebar from "./common/BlogSidebar";
import {Helmet} from "react-helmet";


function BlogList() {
    
    const [blogAlldata, setBlogAlldata] = useState({ data:[]});
    const [loading,setLoading] = useState(true);

    // TO GET ALL BLOG DATA
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
      <Helmet>
      <title>Blog | ReactJs</title>
      <meta content="" name="descriptison" />
      <meta content="" name="keywords" />
    </Helmet>
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

          <BlogSidebar />

        </div>

      </div>
    </section>

  </main> 
  );
}

export default BlogList;
