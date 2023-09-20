import './bg.css';

export function BG()
{
    const handleClick = (e)=>{
        const body = document.querySelector('body');
        body.style.background = getRandomColor();
        e.target.style.background = getRandomColor();
    };

    function getRandomColor(){
        let letters = '0123456789ABCDEF'
        let color = '#'
        for(let i=0; i<6; i++){
            color += letters[Math.floor(Math.random()*16)]
        }
        return color;
    }



    return(
        <>
        <div className='container'>
            <h2>Random Background Colour Changer</h2>
            <button className='btn btn-primary' onClick={handleClick}>Click Me</button>
        </div>
        </>
    )
}