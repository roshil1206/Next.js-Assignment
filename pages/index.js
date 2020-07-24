console.log('Rendering on Both')
import Typography from '@material-ui/core/Typography';

const hello = ({data}) => {
        return(
            <div><Typography variant='h2'>{data} </Typography>
            
            </div>
        )}

        hello.getInitialProps = async ()=>{
         
          console.log('Server Side Rendering')
          return {data:'Hello World 🚀 '}
          
        }
export default hello;
