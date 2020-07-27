console.log('Rendering on Both')

import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

console.log('Rendering on Both')

const hello = ({data}) => {
        return(
            <div><Typography variant='h2'>{data} </Typography>
              <Link href="/about"><a>About</a></Link>
            </div>
        )}

        hello.getInitialProps = async ()=>{
         
          console.log('Server Side Rendering')
          return {data:'Hello World 🚀 '}

        }

export default hello;