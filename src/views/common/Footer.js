import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Footer(){

  // To Get setting data
  const [settingDetailAll, setSettinngDetailAll] = useState({ data:[]});
  const [settingLoading,setSettingLoading] = useState(true);

  useEffect(() => {
          
      const fetchSettingData = async () => {
      const result = await axios(
        'http://localhost/softtechover/api/ApiGetSettingData'
      );
      setSettinngDetailAll({data:result.data.data});
      setSettingLoading(false);
    };
    fetchSettingData();
  }, []);

    // To Get Footer cms page data
    const [cmsDetailAll, setCmsDetailAll] = useState({ data:[]});
    const [cmsLoading,setCmsLoading] = useState(true);
  
    useEffect(() => {
            
        const fetchCmsData = async () => {
        const result = await axios(
          'http://localhost/softtechover/api/ApiFooterCmsPage'
        );
        setCmsDetailAll({data:result.data.data});
        setCmsLoading(false);
      };
      fetchCmsData();
    }, []);

    // To Get Footer cms page data
    const [categoryDetailAll, setCategoryDetailAll] = useState({ data:[]});
    const [categoryLoading,setCategoryLoading] = useState(true);
  
    useEffect(() => {
            
        const fetchCategoryData = async () => {
        const result = await axios(
          'http://localhost/softtechover/api/ApiFooterCategory'
        );
        setCategoryDetailAll({data:result.data.data});
        setCategoryLoading(false);
      };
      fetchCategoryData();
    }, []);

     // To Get Footer cms page data
     const [socialDetailAll, setSocialDetailAll] = useState({ data:[]});
     const [socialLoading,setSocialLoading] = useState(true);

     // NEWSLETTER DATTA
     const [email, setEmail] = useState('');

    function handleEmailChang(event){

        setEmail(event.target.value);
    }

    function submitFrom(event){

      event.preventDefault();
      axios.post('http://localhost/softtechover/api/news-letter/store', {
        email: email
      })
      .then((response) => {
        setEmail('');
        console.log("mess",response);
      }).catch(error => { 
        
        console.log('error', error);
        console.log('errorType', typeof error);
        console.log('error', Object.assign({}, error));
        console.log('getOwnPropertyNames', Object.getOwnPropertyNames(error));
        console.log('stackProperty', Object.getOwnPropertyDescriptor(error, 'stack'));
        console.log('messageProperty', Object.getOwnPropertyDescriptor(error, 'message'));
        console.log('stackEnumerable', error.propertyIsEnumerable('stack'));
        console.log('messageEnumerable', error.propertyIsEnumerable('message')); 
      
      });
    
    }
     useEffect(() => {
             
         const fetchSocialData = async () => {
         const result = await axios(
           'http://localhost/softtechover/api/ApiGetSocialMedia'
         );
         setSocialDetailAll({data:result.data.data});
         setSocialLoading(false);
       };
       fetchSocialData();
     }, []);

  function createMarkup(data) {
    return {__html: data };
  }

  return (
    <div className="jhio">
        <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  { settingLoading == false ? 
                    <div className="col-lg-3 col-md-6 footer-contact">
                      <h3>Tempo</h3>
                      <div dangerouslySetInnerHTML={createMarkup(settingDetailAll.data.address)}  />
                    </div>
                  : 'Loading' 
                  }
                  
                  {(cmsLoading == false && cmsDetailAll.data.length > 0) ? 

                      <div className="col-lg-2 col-md-6 footer-links">
                        <h4>About Us</h4>
                        <ul>
                          {
                            cmsDetailAll.data.map((item,index)=>(
                            <li key={index}><i className="bx bx-chevron-right"></i> <a href="#">{item.name}</a></li>
                            ))
                          }
                        </ul>
                      </div>
                  
                  : '' 
                  
                  }
                  
                  { (categoryLoading == false && categoryDetailAll.data.length > 0) ? 
                    <div className="col-lg-3 col-md-6 footer-links">
                      <h4>Category</h4>
                      <ul>
                        {categoryDetailAll.data.map((item,index)=>(
                          <li key={index}><i className="bx bx-chevron-right"></i> <a href="#">{item.name}</a></li>
                        ))}
                        
                      </ul>
                    </div>

                  :'' }
                  
                  <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Join Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <form onSubmit={submitFrom}>
                      <input type="email" name="email" value={email} onChange={handleEmailChang} />
                      <input type="submit" value="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="container d-md-flex py-4">

              <div className="mr-md-auto text-center text-md-left">
                <div className="copyright">
                  &copy; Copyright <strong><span>Tempo</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>

              { (socialLoading == false && socialDetailAll.data.length > 0) ? 
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    {socialDetailAll.data.map((item,index)=>(
                      <a key={index} href={item.url} target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
                    ))}
                </div>
              :'' }
              

              {/* <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div> */}
            </div>
            </footer>

                <a href="#" className="back-to-top"><i className="ri-arrow-up-line"></i></a>
              </div>
  );
}

export default Footer;
