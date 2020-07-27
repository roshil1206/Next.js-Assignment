import { Grid, Paper, Box, Typography } from "@material-ui/core";


const about = ()=>{
    return(<div>

        <Grid container justify='center' className="a1">
        <Grid container item className="a2" direction='column' justify='center' className="a2" xs={12} sm={12} md={12} lg={6}>
          <Grid item>
            <Box className='a3'>
            <Typography className="A4" variant="h1" >One-to-one online tuitions from home</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box className='a5'>
            <Typography className='a6' variant="body1" >Keep your child’s studies on track with interactive online tuition</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid  container item  direction='column' justify='center' xs={12} sm={12} md={12} lg={6} className='a7'>
         <Grid item>
         <picture>
           <source media="(max-width: 480px )" srcset="https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-500-901e42adc8db2a9b3277055f352c80e3.jpg" />
           <source media="(max-width: 576px )" srcset="https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-600-5051ebcd159712bda4223472595a196d.jpg" />
           <source media="(max-width: 768px )" srcset="https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-800-776006015d872c9f57ba7c4d91742169.jpg" />
           <source media="(max-width: 992px )" srcset="https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-1200-d5af0a8ffe3df7dba9a3da2c5187a4ce.jpg" />
           <img src="https://website-sepia-ten.now.sh/_next/static/images/lessonspace_hero_large_min81-1200-d5af0a8ffe3df7dba9a3da2c5187a4ce.jpg" max-width="100%" width="100%" object-fit="cover" />

           </picture>
         </Grid>
        </Grid>
        </Grid>
     <style global jsx>{`
     .a1{
      margin-top: 0;
      margin-left: 0;
      margin-rigth: 0;
     }
     .a2{
      min-height: 65vh;
      padding-left: 48px;
      padding-right: 8px;
      background-color: #181357;
     }
     .a3{

     }
     .A4{
        color: #eb59ae;
     }

     .a5{
       margin-top:16px
     }

     .a6{
       color:#FFFFFF;
     }

     .a7{
      min-height: 65vh;
      background-color: #fafafa;
     }
    
     @media (max-width: 575.95px)
      {
        .a2 {
            min-height: 50vh;
            padding-left: 16px;
            padding-right: 16px;
        }
        }
     @media (min-width: 0px){
                .a3{
                  text-align: center;
                }
                .a5{
                  text-align: center;
                }
              }
    @media (min-width: 480px){
              .a3 {
                text-align: center;
                  }
              .a5 {
                text-align: center;
                  }    
                }
   
    @media (min-width: 576px){
              .a3 {
                  text-align: left;
                  }
              .a5 {
                  text-align: left;
                  }
                }

                

      @media (min-width: 992px){
          
                .A4 {
                    font-size: 4.125rem !important;
                    font-weight: 900 !important;
                    line-height: 4.75rem !important;
                }
                .a6 {
                  font-size: 1.75rem !important;
                  font-weight: 500 !important;
                  line-height: 2.5rem !important;
              }
              }
    @media (max-width: 991.95px) and (min-width: 768px){
                .A4 {
                      font-size: 3.5rem !important;
                      font-weight: 700 !important;
                      line-height: 3.5rem !important;
                  }
                .a6{
                  font-size: 1.5rem;
                  font-weight: 700;
                  line-height: 1.75rem;
              }
                }
    @media (max-width: 767.95px) and (min-width: 576px)
              {
              .A4 {
                    font-size: 3.5rem !important;
                    font-weight: 700 !important;
                    line-height: 4.0rem !important;
                }
                .a6{
                  font-size: 1.5rem;
                  font-weight: 700;
                  line-height: 1.95rem;
                }
              }
    @media (max-width: 575.95px) and (min-width: 480px)
              {
              .A4 {
                    font-size: 3.125rem !important;
                    font-weight: 700 !important;
                    line-height: 2.95rem !important;
                }
                .a6{
                  font-size: 1.5rem;
                  font-weight: 500;
                  line-height: 1.625rem;
          }
                
              }
    @media (max-width: 479.95px) and (min-width: 0px)
              {
              .A4 {
                    font-size: 2.75rem !important;
                    font-weight: 700 !important;
                    line-height: 2.5rem !important;
                }
                .a6{
                  font-size: 1.35rem;
    font-weight: 500;
    line-height: 1.625rem;
                }
              }
     `}</style>
    </div>)
}

export default about;