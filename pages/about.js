import hello from './index'

const about = ()=>{
    return(<div>
        <hello ></hello>
        This is about page.
        
    <style jsx>{`
    div{
        background-color:yellow;
        font-size:3rem;
        text-align:center;
    }
    `}</style>
    </div>)
}

export default about;