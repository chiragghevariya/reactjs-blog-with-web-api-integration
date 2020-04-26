import React,{ useState,useEffect}  from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


function BlogDetail() {

    // To Get blog details 
    const [blogDetailAll, setBlogDetailAll] = useState({ data:[]});
    const [loading,setLoading] = useState(true);

    // To Get setting data
    const [settingDetailAll, setSettinngDetailAll] = useState({ data:[]});
    const [settingLoading,setSettingLoading] = useState(true);

    // To get request segment
    const  useParamsD = useParams();
    
    useEffect(() => {
        
        const fetchBlogDetailData = async () => {
          const result = await axios(
            'http://localhost/softtechover/api/ApigetSingleBlogDetail/'+useParamsD.blogId,
          );
          console.log(result.data.data);
          setBlogDetailAll({data:result.data.data});
          setLoading(false);
        };
        fetchBlogDetailData();
      }, []);

      useEffect(() => {
        
          const fetchSettingData = async () => {
          const result = await axios(
            'http://localhost/softtechover/api/ApiGetSettingData'
          );
          console.log('setting',result.data.data);
          setSettinngDetailAll({data:result.data.data});
          setSettingLoading(false);
        };
        fetchSettingData();
      }, []);
    
      function createMarkup(data) {
        return {__html: data };
      }

    return (
        <main id="main">
          <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
                <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                </ol>
                { loading == false ? <h2>{blogDetailAll.data.name}</h2> : "Loading"}
            </div>
          </section>
          { loading == false ?  
        
        <section id="blog" className="blog">
        <div className="container">
  
          <div className="row">
  
            <div className="col-lg-8 entries">
  
              <article className="entry entry-single">
  
                <div className="entry-img">
                  <img src={blogDetailAll.data.image} alt={blogDetailAll.data.name} className="img-fluid" />
                </div>
  
                <h2 className="entry-title">
                    <a href={`blog/${blogDetailAll.data.name}`}>{blogDetailAll.data.name}</a>
                </h2>
  
                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center"><i className="icofont-user"></i> <a href="">{blogDetailAll.data.created_by.name}</a></li>
                    <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href={`blog/${blogDetailAll.data.name}`}>{blogDetailAll.data.created_date}</a></li>
                  </ul>
                </div>
  
                <div className="entry-content">
                 <div dangerouslySetInnerHTML={createMarkup(blogDetailAll.data.long_description)}  />
  
                </div>
  
                <div className="entry-footer clearfix">
                  <div className="float-right share">
                    <a href="" title="Share on Twitter"><i className="icofont-twitter"></i></a>
                    <a href="" title="Share on Facebook"><i className="icofont-facebook"></i></a>
                    <a href="" title="Share on Instagram"><i className="icofont-instagram"></i></a>
                  </div>
  
                </div>
  
              </article>
              
              { settingLoading == false ? 
                  <div className="blog-author clearfix">
                    <img src={settingDetailAll.data.author_image} className="rounded-circle float-left" alt={settingDetailAll.data.author_name} />
                    <h4>{settingDetailAll.data.author_name}</h4>
                    <div className="social-links">
                      <a href="https://twitters.com/#"><i className="icofont-twitter"></i></a>
                      <a href="https://facebook.com/#"><i className="icofont-facebook"></i></a>
                      <a href="https://instagram.com/#"><i className="icofont-instagram"></i></a>
                    </div>
                    <div dangerouslySetInnerHTML={createMarkup(settingDetailAll.data.author_description_two)}  />
                  </div>
              : 'Loading...'}
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
                    <li><a href="#">General <span>(25)</span></a></li>
                    <li><a href="#">Lifestyle <span>(12)</span></a></li>
                    <li><a href="#">Travel <span>(5)</span></a></li>
                    <li><a href="#">Design <span>(22)</span></a></li>
                    <li><a href="#">Creative <span>(8)</span></a></li>
                    <li><a href="#">Educaion <span>(14)</span></a></li>
                  </ul>
                </div>
                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img src="assets/img/blog-recent-1.jpg" alt="" />
                    <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
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
      : "Loading"}    

    
      </main>
    );
}

export default BlogDetail;
